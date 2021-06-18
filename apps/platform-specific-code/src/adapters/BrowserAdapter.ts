import { BaseAdapter } from './BaseAdapter'

export class BrowserAdapter implements BaseAdapter {
  async get<T>(url: string): Promise<T> {
    return (await fetch(url)).json()
  }
}
