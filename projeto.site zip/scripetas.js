  function validaForm(){
            const email = document.getElementById(`email`);
            let emailtext = email.value.trim();
            let valido = false;
            if (emailtext.includes("@")){
               valido = true;
            } else{
                valido = false;
            }
            let partesEmail = emailtext.split("@");
            if(partesEmail[0].lenght >= 7 && partesEmail[0].lenght <= 127){
console.log("o tamanho esta entre 7 e 127");
            }
            const nome = document.getElementById("nome");
            let nomeText = nome.value.trim();
            if(nome.lenght >= 3){
                console.log("nome atende ao tamanho minimo")
                valido = true;
            }  else {
                valido = false;
            }

            const textArea = document.getElementById("mensagem");
            let textTexto = textArea.value.trim();
            if (textTexto === ""){
                console.log("texto nao pode se vazio!")
            }
if(valido){
    alert("recebemos sua mensagem, entramos em contato depois👌")
}else{

}


        }
        document.addEventListener("submit", function(e) {
            e.preventDefault();
            validaForm();









            
        })