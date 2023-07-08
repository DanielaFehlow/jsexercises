function isAnagramPalindrome(str) {
  str = str.replace(/\s/g, '').toLowerCase()
  const charCount = {}
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    charCount[char] = (charCount[char] || 0) + 1
  }
  let addCount = 0
  for (let char in charCount) {
    if (charCount[char] % 2 !== 0) {
      addCount++
    }
  }
  return addCount <= 1
}

console.log(isAnagramPalindrome('racecar'))
console.log(isAnagramPalindrome('hello'))
