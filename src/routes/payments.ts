import { Router } from 'express'
import type { ApiRequest, Response } from '../types/request'
import type { PaymentForm } from '../types/payments'
import createPayment from '../services/createPayment'

const router = Router()

router.post('/payments', async (req: ApiRequest<PaymentForm>, res: Response) => {
  try {
    const payment = await createPayment(req.body)
    res.status(201).json(payment)
  } catch (error) {
    const response = error?.response
    if (response?.data?.message && response?.status) {
      res.status(response.status).json({ error: response.data.message })
    } else {
      res.status(500).json({ error: 'Internal server error' })
    }
  }
})

export default router
