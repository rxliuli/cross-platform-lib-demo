import { Adapter } from 'platform-specific-type-definition-multiple-bundle'

/*
请分别放开下面两段代码查看 dist/index.js 发生了什么变化
 */

import { BrowserAdapter } from 'platform-specific-type-definition-multiple-bundle/dist/esm/adapters/BrowserAdapter'
export async function browser() {
  const adapter = new Adapter(new BrowserAdapter())
  console.log('browser: ', await adapter.upload(new Blob()))
}

// import { NodeAdapter } from 'platform-specific-type-definition-multiple-bundle/dist/esm/adapters/NodeAdapter'
// export async function node() {
//   const adapter = new Adapter(new NodeAdapter())
//   console.log('node: ', await adapter.upload(new Buffer(10)))
// }
