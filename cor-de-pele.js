function validarselecao(){
     var select = document.getElementById("cor");
     var mensagem = document.getElementById("mensagem");

      if (select.value === " "){
         mensagem.innerHTML = "Selecione uma Opção";
         mensagem.style.color = "red";
      }else{
        mensagem.innerHTML = "";
      }
}