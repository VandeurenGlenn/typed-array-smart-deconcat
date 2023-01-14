import varint from 'varint';

var index = (typedArray, prefix) => {
    const set = [];
    if (prefix)
        typedArray = typedArray.subarray(prefix.length);
    const varintAndSub = (typedArray) => {
        const length = varint.decode(typedArray);
        // remove length
        typedArray = typedArray.subarray(varint.decode.bytes);
        // push value
        set.push(typedArray.subarray(0, length));
        // remove value
        typedArray = typedArray.subarray(length);
        if (typedArray.length !== 0)
            return varintAndSub(typedArray);
        return set;
    };
    return varintAndSub(typedArray);
};

export { index as default };
