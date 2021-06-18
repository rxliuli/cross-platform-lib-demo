import { Adapter } from 'platform-specific-lib-require'
// import { Adapter } from 'platform-specific-lib-import'

export function hello() {
  const adapter = new Adapter()
  console.log('adapter: ', adapter.get)
}

hello()
