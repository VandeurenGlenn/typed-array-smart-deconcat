import smartdeconcat from './smart-deconcat.js'

const smartconcated = new Uint8Array([5,104,101,108,108,111,1,32,5,119,111,114,108,100,1,32,3,99,97,110,1,32,5,115,109,97,114,116,6,99,111,110,99,97,116,1,32,3,121,101,115,1,47,2,110,111,1,63])
const smartdeconcated = smartdeconcat(smartconcated)

console.log('can smart-deconcat');
console.log(`hello: ${new TextDecoder().decode(smartdeconcated[0]) === 'hello'}`);
console.log(`?: ${new TextDecoder().decode(smartdeconcated[12]) === '?'}`);
console.log(`length: ${smartdeconcated.length === 13}`);