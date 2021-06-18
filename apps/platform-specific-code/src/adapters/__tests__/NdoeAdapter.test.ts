import { NodeAdapter } from '../NodeAdapter'

it('测试 NodeAdapter', async () => {
  const resp = await new NodeAdapter().get(
    'https://discourse.joplinapp.org/manifest.webmanifest',
  )
  console.log(resp)
})
