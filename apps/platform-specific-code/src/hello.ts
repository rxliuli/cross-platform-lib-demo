import { NodeAdapter } from './adapters/NodeAdapter'

const adapter = new NodeAdapter()
export async function get(url: string) {
  return adapter.get(url)
}
