import { decodeFrames } from '@leofcoin/codecs/binary'

export default (typedArray: Uint8Array, prefix?: Uint8Array): Uint8Array[] =>
  decodeFrames(typedArray, prefix?.length ?? 0, { canonical: false })
