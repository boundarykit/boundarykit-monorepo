import { createHmac } from 'node:crypto'

export async function dispatch(url: URL, secret: string, event: { id: string, type: string, data: unknown }) {
  const body = JSON.stringify(event)
  const signature = createHmac('sha256', secret).update(body).digest('hex')
  const response = await fetch(url, {
    method: 'POST', body, redirect: 'error', signal: AbortSignal.timeout(5000),
    headers: { 'content-type': 'application/json', 'x-boundarykit-signature': signature }
  })
  if (!response.ok) throw new Error(`Delivery failed with HTTP ${response.status}`)
}
