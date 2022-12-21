function multipicationNumber(numero) {
  let resultado = `Result for multiplication from: ${numero}`;

  console.log(resultado);
  for (let i = 1; i <= 10; i++) {
    let multiplication = (i*numero);
    console.log(`${i} x ${numero} = `,multiplication);
  }

}

multipicationNumber(9);
