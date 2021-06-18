import { BaseAdapter } from './BaseAdapter'
import type * as Buffer from 'buffer'
import fetch from 'node-fetch'

export class NodeAdapter implements BaseAdapter<Buffer> {
  upload(data: Buffer): Promise<string> {
    console.log('fetch: ', fetch)
    throw new Error('no impl')
  }
}
