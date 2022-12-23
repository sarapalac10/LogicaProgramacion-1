function countingWords(phrase, word) {
  let originalWord = word;
  let originalPhrase = phrase
    .toLowerCase()
    .replace(/[,!-?]/gi, "")
    .split(" ");
  let counterWord = 0;

  if (originalPhrase.includes(originalWord)) {
    counterWord++;
    let mapWord = {};

    for (let word of originalPhrase) {
      if (mapWord[word]) {
        mapWord[word]++;
      } else {
        mapWord[word] = 1;
      }
    }
    counterWord = mapWord[originalWord];
    if(counterWord>1){
      console.log(`The word ${originalWord} appears ${counterWord} times in the phrase`)
    }else if(counterWord=1){
      console.log(`The word ${originalWord} appears just one time in the phrase`)
    }
  } 
  
  else {
    counterWord = 0;
    console.log(`The word ${originalWord} isn't in the phrase.`)
  }
  return counterWord;
}

countingWords("Buenas noches, esto es una prueba de prueba prueba prueba", "prueba")