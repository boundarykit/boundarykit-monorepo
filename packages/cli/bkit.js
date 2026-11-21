#!/usr/bin/env node
import { run } from '../../src/cli.ts'

try {
  process.exitCode = await run(process.argv.slice(2))
} catch (error) {
  console.error(error.message)
  process.exitCode = 2
}
