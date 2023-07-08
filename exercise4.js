<<<<<<< HEAD
function firstLetterUpperCase(input) {
  const sentences = input.split(/([.!?]+)/)
  for (let i = 0; i < sentences.length; i += 2) {
    const sentenceBlank = sentences[i].trim()
    if (sentenceBlank.length > 0) {
      sentences[i] =
        sentenceBlank.charAt(0).toUpperCase() + sentenceBlank.slice(1)
    }
  }
  return sentences.join('')
}

let input = "hello. how are you? i'm fine, thank you."
const output = firstLetterUpperCase(input)
console.log(output)
=======
function firstLetterUpperCase(input) {
  const sentences = input.split(/([.!?]+)/)
  for (let i = 0; i < sentences.length; i += 2) {
    const sentenceBlank = sentences[i].trim()
    if (sentenceBlank.length > 0) {
      sentences[i] =
        sentenceBlank.charAt(0).toUpperCase() + sentenceBlank.slice(1)
    }
  }
  return sentences.join('')
}

let input = "hello. how are you? i'm fine, thank you."
const output = firstLetterUpperCase(input)
console.log(output)
>>>>>>> 6a5de07660262dfaed24a2f227dd75e4c9b768cb
