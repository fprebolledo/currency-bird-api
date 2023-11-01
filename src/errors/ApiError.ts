interface Response {
  status: number
  data: {
    message: string
  }
}

class ApiError extends Error {
  response: Response

  constructor (message: string, status: number) {
    super(message)
    this.response = {
      status,
      data: {
        message
      }
    }
  }
}

export default ApiError
