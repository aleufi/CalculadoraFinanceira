$('input.format').keyup(function(event) {

    // skip for arrow keys
    if(event.which >= 37 && event.which <= 40) return;
  
    // format number
    $(this).val(function(index, value) {
      return value
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    });
});

$('#taxaJuros').keyup(function(event){

    
    if(event.which == 188 || event.which == 110 || (event.which >= 48 && event.which <= 57) || (event.which >= 96 && event.which <= 105)){
        return;
    } else{
        
        $(this).val(function(index, value){
            return value
            .replace(/\D/g, "")
        });
        
    }

});

function enviar(){
    capital = $('#aporteInicial').val().replaceAll(".", "").replace(",", ".");
    taxaJuros = $('#taxaJuros').val().replace(",", ".");
    invMensal = $('#investimentoMensal').val().replaceAll(".", "").replace(",", ".");
    tempo = $('#tempo').val().replaceAll(".", "").replace(",", ".");

    capital = parseFloat(capital);
    taxaJuros = parseFloat(taxaJuros);
    invMensal = parseFloat(invMensal);
    tempo = parseFloat(tempo);

    let montante = 0;

    if($('#mesTaxa').is(':checked') && $('#mesTempo').is(':checked')){
        montante = invMensal * (((1 + taxaJuros / 100) ** tempo - 1) / (taxaJuros / 100)) + capital * (1 + taxaJuros / 100) ** tempo;
    } else if($('#mesTaxa').is(':checked') && $('#anoTempo').is(':checked')){
        montante = invMensal * (((1 + taxaJuros / 100) ** (tempo * 12) - 1) / (taxaJuros / 100)) + capital * (1 + taxaJuros / 100) ** (tempo * 12);
    } else if($('#anoTaxa').is(':checked') && $('#mesTempo').is(':checked')){
        taxaJuros2 = (1 + taxaJuros / 100) ** (1/12) - 1;
        montante = invMensal * (((1 + taxaJuros2) ** tempo - 1) / (taxaJuros2)) + capital * (1 + taxaJuros2) ** tempo;
    } else if($('#anoTaxa').is(':checked') && $('#anoTempo').is(':checked')){
        taxaJuros2 = (1 + taxaJuros / 100) ** (1/12) - 1;
        montante = invMensal * (((1 + taxaJuros2) ** (tempo * 12) - 1) / (taxaJuros2)) + capital * (1 + taxaJuros2) ** (tempo * 12);
    }
    
    $('#montanteFinalText').text("R$" + montante.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2}));

}

