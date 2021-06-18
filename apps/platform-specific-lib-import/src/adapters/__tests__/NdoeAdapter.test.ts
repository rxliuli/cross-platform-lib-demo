import { BrowserAdapter } from '../BrowserAdapter'

it('测试 NodeAdapter', async () => {
  const resp = await new BrowserAdapter().get(
    'https://discourse.joplinapp.org/manifest.webmanifest',
  )
  console.log(resp)
})
