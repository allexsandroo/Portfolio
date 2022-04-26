function obtn(){
    document.querySelector(".menu").style.width="250px";
    document.querySelector("#ccbtn").style.display="none"
    document.querySelector("#oobtn").style.display="flex"
   }

   function cbtn(){
    document.querySelector(".menu").style.width="0";
    document.querySelector("#oobtn").style.display="none"
    document.querySelector("#ccbtn").style.display="flex"
   }

   function imc(){
       let peso;
       let alt;
       let calcular;

       peso = document.getElementById('pes').value;
       alt = document.getElementById('alt').value;

      calcular = peso/(alt*alt);

      alert(calcular);

   }

   function login(){

    let nome;
    let senha;

    nome = document.getElementById('nome').value;
    senha= document.getElementById('senha').value;

    if(nome == "" ){
        alert('preencha o campo')
    }
    else if(senha == "" ){
        alert('preencha o campo')
    }
    else if(senha == "2022" && nome == "leao"){
        alert('parabéns')
    }
   
   }