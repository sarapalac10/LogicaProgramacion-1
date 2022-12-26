function reversingWord(frase) {
  let long = frase.length;
  let newWord = "";

  for (let i = long - 1; i >= 0; i--) {
    newWord += frase[i];
  }

  console.log(`The reversed word is: ${newWord}`);
  return newWord;
}

reversingWord("Morganita");
