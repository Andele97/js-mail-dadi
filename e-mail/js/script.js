//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

const listEmail = ['andrea@live.it', 'cristian@live.it', 'lina@live.it'];

const logButton = document.querySelector("button");

logButton.addEventListener("click", function() {
  
  const emailSelect = document.querySelector('[name="email"]');
  console.log(emailSelect)
  const output = document.querySelector('.output');
  output.innerHTML = "";
  let found = false;
  

  for (let i = 0; i < listEmail.length; i++){
    if (emailSelect === listEmail[i]){
      found = true;
    }
  }

  if (found == listEmail) {
    output.append('email trovata');
    output.classList.add('green');
  }else{
    output.append('email non trovata');
    output.classList.add('red');
  }
})