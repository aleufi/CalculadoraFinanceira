
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

function fixado(){
    
    futuroText = $('#valorFuturo').val()
 
    aporte = $('#valorPresente').val().replaceAll(".", "").replace(",", ".");
    futuro = $('#valorFuturo').val().replaceAll(".", "").replace(",", ".");
    tempo = $('#tempo').val().replaceAll(".", "").replace(",", ".");


    aporte = parseFloat(aporte);
    futuro = parseFloat(futuro);
    tempo = parseFloat(tempo);

    if($('#inputMes').is(':checked')){
        taxa = (futuro / aporte) ** (1 / tempo) - 1;
    } else if($('#inputAno').is(':checked')){
        tempo = tempo * 12
        taxa = (futuro / aporte) ** -(1 / tempo) - 1;
    }

    taxa = taxa * 100;
    taxa = taxa.toFixed(2);

    $('#taxaFuturaText').text(taxa + "%");
    $('#valorFuturoText').text("R$" + futuroText);

    if($('#inputMes').is(':checked')){
        $('#tempoNecessarioText').text(tempo + " mês(es)");
    } else if($('#inputAno').is(':checked')){
        $('#tempoNecessarioText').text(tempo / 12 + " ano(s)");
    }

    
}