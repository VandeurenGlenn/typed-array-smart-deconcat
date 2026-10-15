import { decodeFrames } from '@leofcoin/binary';

var index = (typedArray, prefix) => decodeFrames(typedArray, prefix?.length ?? 0, { canonical: false });

export { index as default };
