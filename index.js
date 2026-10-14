import { decodeFrames } from '@leofcoin/codecs/binary';

var index = (typedArray, prefix) => decodeFrames(typedArray, prefix?.length ?? 0, { canonical: false });

export { index as default };
