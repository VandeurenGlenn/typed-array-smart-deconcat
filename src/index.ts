import varint from 'varint'

export default (typedArray: Uint8Array, prefix: Uint8Array): Uint8Array[] => {
  const set: Uint8Array[] = []
  if (prefix) typedArray = typedArray.subarray(prefix.length)
  const varintAndSub = (typedArray: Uint8Array): Uint8Array[] => {
    const length = varint.decode(typedArray)
    // remove length
    typedArray = typedArray.subarray(varint.decode.bytes)
    // push value
    set.push(typedArray.subarray(0, length))
    // remove value
    typedArray = typedArray.subarray(length)
    if (typedArray.length !== 0) return varintAndSub(typedArray)
    return set
  }
  return varintAndSub(typedArray)
}