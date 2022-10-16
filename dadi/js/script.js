//**Gioco dei dadi**
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

const turnButton = document.querySelector("button");
const userNumb = document.getElementById('user');

turnButton.addEventListener("click", function() {
  
  const numbUser = Math.ceil(Math.random() * 6);
  const numbPc = Math.ceil(Math.random() * 6);
  document.getElementById('pc').value = numbPc;
  document.getElementById('user').value = numbUser;

  const output = document.querySelector('.output');
  output.innerHTML = "";
  
  if (numbUser > numbPc){
    output.append(`Vince User con ${numbUser}`);
  }else if(numbUser < numbPc){
    output.append(`Vince Pc con ${numbPc}`);
  }else{
    output.append(`Paritá`);
  }
});
