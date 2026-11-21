import { compilePolicy } from './compiler.ts'
import { evaluate } from './evaluator.ts'

export function createSandbox<T>(rules: unknown, capabilities: ReadonlyMap<string, () => T>) {
  const policy = compilePolicy(rules)
  const handlers = new Map(capabilities)
  return (name: string): T => {
    const handler = handlers.get(name)
    if (!handler || !evaluate(policy, name).allowed) throw new Error('Capability denied')
    return handler()
  }
}
