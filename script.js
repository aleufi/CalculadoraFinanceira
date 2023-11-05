
divMontante = document.getElementById("divMontante");
montanteText = document.getElementById("montanteFinalText");




function enviar(){
    capital = document.getElementById("dado1").valueAsNumber;
    taxaJuros = document.getElementById("dado2").valueAsNumber;
    invMensal = document.getElementById("dado3").valueAsNumber;
    tempo = document.getElementById("dado4").valueAsNumber;

    let montante = 0;

    if(document.getElementById("meses2").checked && document.getElementById("meses").checked){
        montante = invMensal * (((1 + taxaJuros / 100) ** tempo - 1) / (taxaJuros / 100)) + capital * (1 + taxaJuros / 100) ** tempo;
    } else if(document.getElementById("meses2").checked && document.getElementById("anos").checked){
        montante = invMensal * (((1 + taxaJuros / 100) ** (tempo * 12) - 1) / (taxaJuros / 100)) + capital * (1 + taxaJuros / 100) ** (tempo * 12);
    } else if(document.getElementById("anos2").checked && document.getElementById("meses").checked){
        taxaJuros2 = (1 + taxaJuros / 100) ** (1/12) - 1;
        montante = invMensal * (((1 + taxaJuros2) ** tempo - 1) / (taxaJuros2)) + capital * (1 + taxaJuros2) ** tempo;
    } else if(document.getElementById("anos2").checked && document.getElementById("anos").checked){
        taxaJuros2 = (1 + taxaJuros / 100) ** (1/12) - 1;
        montante = invMensal * (((1 + taxaJuros2) ** (tempo * 12) - 1) / (taxaJuros2)) + capital * (1 + taxaJuros2) ** (tempo * 12);
    }

    montanteText.textContent = "R$" + montante.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2});

}


