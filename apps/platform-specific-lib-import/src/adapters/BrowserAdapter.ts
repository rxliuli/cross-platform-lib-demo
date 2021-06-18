import { BaseAdapter } from './BaseAdapter'

export class BrowserAdapter implements BaseAdapter {
  private static async init() {
    if (typeof fetch === 'undefined') {
      const globalVar: any =
        (typeof globalThis !== 'undefined' && globalThis) ||
        (typeof self !== 'undefined' && self) ||
        (typeof global !== 'undefined' && global) ||
        {}
      Reflect.set(globalVar, 'fetch', (await import('node-fetch')).default)
    }
  }

  async get<T>(url: string): Promise<T> {
    await BrowserAdapter.init()
    return (await fetch(url)).json()
  }
}
