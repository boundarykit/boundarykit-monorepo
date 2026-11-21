export type Rule = { capability: string, effect: 'allow' | 'deny' }

export function compilePolicy(input: unknown): Map<string, Rule['effect']> {
  if (!Array.isArray(input)) throw new TypeError('Expected an array of rules')
  const result = new Map<string, Rule['effect']>()
  for (const rule of input) {
    if (!rule || typeof rule.capability !== 'string' || !rule.capability.trim() ||
        !['allow', 'deny'].includes(rule.effect)) throw new TypeError('Invalid rule')
    if (result.get(rule.capability) !== 'deny') result.set(rule.capability, rule.effect)
  }
  return result
}
