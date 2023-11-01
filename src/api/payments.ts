import api from '.'
import type { PaymentForm, Payment } from '../types/payments'
import type { AxiosResponse } from 'axios'

async function getToken (email: string): Promise<AxiosResponse<string>> {
  return await api.get(`/token?email=${email}`)
}

async function create (data: PaymentForm, token: string): Promise<AxiosResponse<Payment>> {
  return await api.post(`/payment?email=${data.transferCode}&transferCode=${data.transferCode}`, data, { headers: { Authorization: token } })
}

async function show (email: string, token: string): Promise<AxiosResponse<Payment | string>> {
  return await api.get(`/payment?email=${email}&transferCode=${email}`, { headers: { Authorization: token } })
}

export { create, getToken, show }
