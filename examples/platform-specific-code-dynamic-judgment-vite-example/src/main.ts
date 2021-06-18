import './style.css'
import { Adapter } from 'platform-specific-code-dynamic-judgment'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
;(async () => {
  const adapter = new Adapter()
  const resp = await adapter.get('/data.json')
  console.log(resp)
})()
