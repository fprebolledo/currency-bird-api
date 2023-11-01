interface PaymentForm {
  transferCode: string
  amount: number
}

interface Payment {
  amount: string
  email: string
  retries: number
  transferCode: string
}

export type { PaymentForm, Payment }
