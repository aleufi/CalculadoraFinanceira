$('input').keyup(function(event) {

    // skip for arrow keys
    if(event.which >= 37 && event.which <= 40) return;
  
    // format number
    $(this).val(function(index, value) {
      return value
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    });
});

function tempo(){
    
    valorFuturo2 = $('#valorFuturo').val();

    valorPresente = $('#valorPresente').val().replaceAll(".", "").replace(",", ".");
    valorFuturo = $('#valorFuturo').val().replaceAll(".", "").replace(",", ".");
    taxaJuros = $('#taxaJuros').val().replaceAll(".", "").replace(",", ".");

    valorPresente = parseFloat(valorPresente);
    valorFuturo = parseFloat(valorFuturo);
    taxaJuros = parseFloat(taxaJuros);
    
    if(valorPresente <= 0 || valorFuturo <= 0|| taxaJuros <= 0 || isNaN(valorPresente) || isNaN(valorFuturo) || isNaN(taxaJuros) ){
        alert("Preencha os campos com valores válidos");
    } else{

        let tempoNecessario = 0;

        if($('#inputMes').is(':checked')){
            taxaJuros = taxaJuros / 100;
            tempoNecessario = Math.log(valorFuturo / valorPresente) / Math.log(1 + taxaJuros)
        } else if($('#inputAno').is(':checked')){
            taxaJuros = taxaJuros / 100;
            tempoNecessario = Math.log(valorFuturo / valorPresente) / Math.log(1 + taxaJuros)
        }

        
        if($('#inputMes').is(':checked')){
           $('#valorFuturoText').text(tempoNecessario.toFixed(1) + " Mês(es)") ;
        } else if($('#inputAno').is(':checked')){
            $('#valorFuturoText').text(tempoNecessario.toFixed(1) + " Ano(s)");
        }
        
        $('#tempoText').text("R$" + valorFuturo2)
        $('#taxaText').text(taxaJuros * 100 + "%");
    }


}