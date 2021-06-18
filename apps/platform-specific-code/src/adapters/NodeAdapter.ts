import { request } from 'https'
import { BaseAdapter } from './BaseAdapter'

export class NodeAdapter implements BaseAdapter {
  get<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) =>
      request(url, {
        headers: {
          'content-type': 'application/json',
        },
      })
        .addListener('error', reject)
        .addListener('response', (response) =>
          response.setEncoding('utf-8').addListener('data', (data) => {
            resolve(JSON.parse(data))
          }),
        )
        .end(() => {}),
    )
  }
}
