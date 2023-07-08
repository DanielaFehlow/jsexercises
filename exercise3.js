function findSubstring(str) {
  let result = ''

  function verify(s) {
    return s === s.split('').reverse().join('')
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const substring = str.slice(i, j)
      if (verify(substring) && substring.length > result.length) {
        result = substring
      }
    }
  }

  return result
}
let input = 'babad'
const output = findSubstring(input)
console.log(output)
