import axios, { AxiosResponse } from 'axios'
import { CreateIDResponse } from './interfaces'

class ID {
  async createIDPayload(): Promise<CreateIDResponse> {
    const response = await axios.post('https://front-exercise.z1.digital/evaluations')
    return response.data
  }
}

export default ID