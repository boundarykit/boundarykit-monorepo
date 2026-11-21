import test from 'node:test'
import assert from 'node:assert/strict'
import { createSandbox } from '../src/sandbox.ts'
import { compilePolicy } from '../src/compiler.ts'

test('dispatches a registered and allowed capability', () => {
  const invoke = createSandbox([{ capability: 'read', effect: 'allow' }], new Map([['read', () => 42]]))
  assert.equal(invoke('read'), 42)
  assert.throws(() => invoke('write'), /denied/)
})

test('explicit denial survives a later allow', () => {
  const rules = ['deny', 'allow'].map(effect => ({ effect, capability: 'read' }))
  assert.equal(compilePolicy(rules).get('read'), 'deny')
})

test('rejects invalid effects', () => {
  assert.throws(() => compilePolicy([{ capability: 'read', effect: 'maybe' }]), /Invalid rule/)
})
