let resposta = document.getElementById("resposta")

function conferir(){

    let idade = Number(document.getElementById("idade").value)

    if((idade >= 16) && (idade < 18)){

        resposta.innerHTML = "O seu voto é opcional"

    }else if((idade >= 18) && (idade < 70)){

        resposta.innerHTML = "O seu voto é obrigatorio"

    }else if(idade >= 70){

        resposta.innerHTML = "O seu voto é opcional"

    }else{

        resposta.innerHTML = "Você não pode votar"

    }

}