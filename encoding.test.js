import assert from 'node:assert/strict'
import test from 'node:test'
import deconcat from './index.js'

test('decodes established one-byte and multi-byte length prefixes', () => {
  const expected = [new Uint8Array([1, 2, 3]), new Uint8Array(128).fill(42)]
  const fixture = new Uint8Array([3, 1, 2, 3, 128, 1, ...expected[1]])
  assert.deepEqual(deconcat(fixture), expected)
  assert.deepEqual(deconcat(new Uint8Array([99, ...fixture]), new Uint8Array([99])), expected)
})

test('retains padded-prefix compatibility but rejects truncated data without recursion', () => {
  assert.deepEqual(deconcat(new Uint8Array([129, 0, 42])), [new Uint8Array([42])])
  assert.deepEqual(deconcat(new Uint8Array()), [])
  assert.throws(() => deconcat(new Uint8Array([3, 1])), /Truncated/)
  const encoded = new Uint8Array(40000)
  for (let index = 0; index < encoded.length; index += 2) { encoded[index] = 1; encoded[index + 1] = 42 }
  assert.equal(deconcat(encoded).length, 20000)
})
