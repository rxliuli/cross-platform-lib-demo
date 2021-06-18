import { BaseAdapter } from './BaseAdapter'

export class BrowserAdapter implements BaseAdapter<Blob> {
  async upload(data: Blob): Promise<string> {
    throw new Error('no impl')
  }
}
