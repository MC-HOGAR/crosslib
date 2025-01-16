export enum StatusBodyHttpResponseEnum {
    Success = 'success',
    Error   = 'error'
}
export type StatusBodyHttpResponse = 'success' | 'error'

export type MessageBodyHttpResponse = string | string[]

/**
 * This is the payload that YumeCloud generates in every endpont's response.
 */
export interface IBodyHttpResponse<T> {
    status: StatusBodyHttpResponse
    message: MessageBodyHttpResponse
    data?: T
}

/**
 * @property statusCode HTTP status code
 * @property body stringifyed.
 */
export interface LambdaHttpResponse {
    statusCode: number
    body: string
}

