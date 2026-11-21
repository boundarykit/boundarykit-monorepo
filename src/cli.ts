import { readFile } from 'node:fs/promises'
import { compilePolicy } from './compiler.ts'
import { evaluate } from './evaluator.ts'

export async function run(args: string[]) {
  const [file, capability] = args
  if (!file || !capability || args.length !== 2) throw new Error('Usage: bkit POLICY.json CAPABILITY')
  const rules = JSON.parse(await readFile(file, 'utf8'))
  const result = evaluate(compilePolicy(rules), capability)
  console.log(JSON.stringify(result))
  return result.allowed ? 0 : 1
}
