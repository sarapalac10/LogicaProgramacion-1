function palindromeWord(word) {
    let original = word;
    let revWord = word.split('').reverse().join('');
  
    if(original === revWord){
      console.log(`True: ${word} is the same as ${revWord}`);
    }else{
      console.log(`False: ${word} is different from ${revWord}`);
    }
  }
  
  palindromeWord('anitalavalatina');