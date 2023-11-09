
function fixado(){
    aporte = $('#valorPresente').val();
    futuro = $('#valorFuturo').val();
    tempo = $('#tempo').val();

    if($('#inputMes').is(':checked')){
        taxa = (futuro / aporte) ** (1 / tempo) - 1;
        taxa = taxa.toFixed(2);
    } else if($('#inputAno').is(':checked')){
        tempo = tempo * 12
        taxa = (futuro / aporte) ** -(1 / tempo) - 1;
        taxa = taxa.toFixed(2);
    }


    taxa = (futuro / aporte) ** (1 / tempo) - 1;
    taxa = taxa.toFixed(2);


    $('#taxaFuturaText').text(taxa * 100 + "%");
    $('#valorFuturoText').text("R$" + futuro);

    if($('#inputMes').is(':checked')){
        $('#tempoNecessarioText').text(tempo + " mês(es)");
    } else if($('#inputAno').is(':checked')){
        $('#tempoNecessarioText').text(tempo / 12 + " ano(s)");
    }

    
}