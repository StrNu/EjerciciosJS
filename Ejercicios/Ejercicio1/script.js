const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

function primo(numero){
  let contador =0;
  for(let i=1;i<=numero;i++){
    if(numero%i==0){
      contador = contador+1;
      /*console.log(contador);*/
    }
  }
  if(contador <= 2){
    console.log(numero);
  }
}

ejercicio1.forEach ((numero) => {
  primo(numero);
}
);
