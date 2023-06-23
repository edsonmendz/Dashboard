$(document).ready(() => {
	$('#documentacao').on('click', () => {
        //$('#pagina').load('documentacao.html')
        $.get('documentacao.html', data => {
            $('#pagina').html(data)
        })
    })

    $('#suporte').on('click', () => {
        $.post('suporte.html', data => {
            $('#pagina').html(data)
        })
    })
    
    //ajax

    $('#competencia').on('change', e => {

        let competencia = $(e.target).val()


        $.ajax({

            type: 'GET',
            url: 'app.php',
            data: `competencia=${competencia}`,  // síntax x-www-form-urlencoded,
            dataType: 'json',
            success: dados => {
                $('#numeroVendas').html(dados.numeroVendas)
                $('#totalVendas').html(dados.totalVendas)
             },               
            error: erro => {console.log(erro)}

        })

    })
})