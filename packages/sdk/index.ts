export function createClient(key: string, organization: string, base = 'https://api.boundarykit.com') {
  return {
    async listBoundaries(cursor?: string): Promise<unknown[]> {
      const url = new URL('/v2/boundaries', base)
      if (cursor) url.searchParams.set('cursor', cursor)
      const response = await fetch(url, {
        headers: { 'X-API-Key': key, 'X-Organization-Id': organization }
      })
      if (!response.ok) throw new Error(`Boundary list failed with HTTP ${response.status}`)
      const records = await response.json()
      if (!Array.isArray(records)) throw new TypeError('Expected a record list')
      return records
    }
  }
}
