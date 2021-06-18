import { BaseAdapter } from './adapters/BaseAdapter'
import { Class } from 'type-fest'

export class Adapter implements BaseAdapter {
  private adapter?: BaseAdapter
  private async init() {
    if (this.adapter) {
      return
    }
    let Adapter: Class<BaseAdapter>
    if (typeof fetch === 'undefined') {
      Adapter = (await import('./adapters/NodeAdapter')).NodeAdapter
    } else {
      Adapter = (await import('./adapters/BrowserAdapter')).BrowserAdapter
    }
    this.adapter = new Adapter()
  }
  async get<T>(url: string): Promise<T> {
    await this.init()
    return this.adapter!.get(url)
  }
}
