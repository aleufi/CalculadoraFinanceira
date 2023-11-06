
valorFuturoText = document.getElementById("valorFuturoText");
boldValorFuturo = document.getElementById("tempoText");
boldTaxaJuros = document.getElementById("taxaText");


function tempo(){
    
    let valorPresente = document.getElementById("valorPresente").valueAsNumber;
    let valorFuturo = document.getElementById("valorFuturo").valueAsNumber;
    let taxaJuros = document.getElementById("taxaJuros").valueAsNumber;
    
    if(valorPresente <= 0 || valorFuturo <= 0|| taxaJuros <= 0 || isNaN(valorPresente) || isNaN(valorFuturo) || isNaN(taxaJuros) ){
        alert("Preencha os campos com valores válidos");
    } else{

        let tempoNecessario = 0;

        if(document.getElementById("inputMes").checked){
            taxaJuros = taxaJuros / 100;
            tempoNecessario = Math.log(valorFuturo / valorPresente) / Math.log(1 + taxaJuros)
        } else if(document.getElementById("inputAno").checked){
            taxaJuros = taxaJuros / 100;
            tempoNecessario = Math.log(valorFuturo / valorPresente) / Math.log(1 + taxaJuros)
        }
    
        if(document.getElementById("inputMes").checked && tempoNecessario > 1){
            valorFuturoText.textContent = tempoNecessario.toLocaleString("pt-BR", {minimumFractionDigits: 1, maximumFractionDigits: 1}) + " Meses";
        } else if(document.getElementById("inputMes").checked && tempoNecessario <= 1){
            valorFuturoText.textContent = tempoNecessario.toLocaleString("pt-BR", {minimumFractionDigits: 1, maximumFractionDigits: 1}) + " Mês";
        } else if(document.getElementById("inputAno").checked && tempoNecessario > 1){
            valorFuturoText.textContent = tempoNecessario.toLocaleString("pt-BR", {minimumFractionDigits: 1, maximumFractionDigits: 1}) + " Anos";
        } else if(document.getElementById("inputAno").checked && tempoNecessario <= 1){
            valorFuturoText.textContent = tempoNecessario.toLocaleString("pt-BR", {minimumFractionDigits: 1, maximumFractionDigits: 1}) + " Ano";
        }
        
        
        boldValorFuturo.textContent = "R$" + valorFuturo.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2});
        boldTaxaJuros.textContent = taxaJuros * 100 + "%";
    }


}