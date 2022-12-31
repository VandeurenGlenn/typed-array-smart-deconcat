# typed-array-smart-deconcat
> TypedArray.set() the smartDeconcat() way

## install
```sh
npm i @vandeurenglenn/typed-array-smart-deconcat
```

## usage
### deconcat
```js
import typedArraySmartDeconcat from '@vandeurenglenn/typed-array-smart-deconcat'

const deconcated = typedArraySmartDeconcat(concated)

console.log(new TextDecoder().decode(deconcated[0])) // hello
console.log(new TextDecoder().decode(deconcated[1])) // world
```

### concat
```js
import typedArraySmartConcat from '@vandeurenglenn/typed-array-smart-concat'

const concated = typedArraySmartConcat([
  new TextEncoder('hello'),
  new TextEncoder('world')
])

console.log(new TextDecoder().decode(concated)) // <length><value><length><value>
```