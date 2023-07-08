function reverseWords(phrase) {
  const words = phrase.split(' ')
  const reversedWords = words.reverse()
  const reversedSentence = reversedWords.join(' ')
  return reversedSentence
}
let input = 'Hello, World! OpenAi is amazing. '
const output = reverseWords(input)
console.log(output)
