function removeCharacters(text) {
  let output = ''
  for (let i = 0; i < text.length; i++) {
    if (output.indexOf(text[i]) === -1) {
      output += text[i]
    }
  }
  return output
}

let input = 'Hello, World!'
const output = removeCharacters(input)
console.log(output)
