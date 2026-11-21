import type { Rule } from './compiler.ts'

export function evaluate(policy: ReadonlyMap<string, Rule['effect']>, capability: string) {
  return { capability, allowed: policy.get(capability) === 'allow' }
}
