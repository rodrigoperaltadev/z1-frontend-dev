import { api } from './index'
import { CreateIDResponse } from './interfaces'

const Id = {
  async createIDPayload(): Promise<CreateIDResponse> {
    const response = await api.post('evaluations')
    return response.data
  }
}

export default Id