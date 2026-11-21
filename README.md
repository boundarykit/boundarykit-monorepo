# BoundaryKit monorepo

BoundaryKit evaluates capability policies before running registered application handlers. An explicit denial overrides any allowance for the same capability. The runtime rejects unlisted capabilities.

Use Node.js 24 or later. Run `npm ci`, then `npm run check` and `npm test`.

Save `[{"effect":"allow","capability":"records.read"}]` in `policy.json`. Run `node packages/cli/bkit.js policy.json records.read`. Exit codes are 0 for allow, 1 for deny, and 2 for invalid input.

The SDK lists workspace boundaries. The webhook dispatcher signs the serialized event body with HMAC-SHA256. The OpenAPI files describe the hosted API.

## Documentation

Run `npm ci --prefix docs` and `npm run build --prefix docs`. The current guides live in `docs/docs/`. The v1 guides live in `docs/versioned_docs/version-1.0/`.
