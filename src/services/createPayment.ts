import { create, getToken, show } from '../api/payments'
import type { PaymentForm, Payment } from '../types/payments'
import ApiError from '../errors/ApiError'
import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

async function createPayment (data: PaymentForm) {
  const token = (await getToken(data.transferCode)).data
  const previousPayment = await getPreviousPayment(data.transferCode, token)
  if (previousPayment) throw new ApiError('Payment already exists', 409)
  const payment = (await create(data, token)).data
  await createDbPayment(payment)
  return payment
}

async function getPreviousPayment (transferCode: string, token: string) {
  try {
    const response = (await show(transferCode, token)).data
    // Creo que la api de currency bird debería arrojar un 404 y no un 200.
    if (response === 'TRANSFER_NOT_FOUND') return null
    return response
  } catch (error) {
    if (error.response.status === 404) return null
  }
}

async function createDbPayment (payment: Payment) {
  await client.transaction.create({
    data: {
      transferCode: payment.transferCode,
      email: payment.email,
      amount: Number(payment.amount),
      retries: payment.retries
    }
  })
}

export default createPayment
