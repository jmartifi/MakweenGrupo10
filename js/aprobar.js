$(document).ready(function(){
    
    $('#inpSts').change(function(){
        if($(this).val() == 'REC'){
            $('#dvMoRe').slideDown();
        }else{
            $('#dvMoRe').slideUp();
        }
    })
    
    $('#formAprobar').submit(function(e){
        e.preventDefault();
        valForApr();
    });
    
    $('#inpObservacion').keyup(function(){
        var nume = parseInt($('#inpObservacion').val().length);
        $('#contInpResena').text(nume);
        if(nume >= 301){
            $('#inpObservacion').css('border', '2px solid #dc3545');
            $('#inpObservacion').css('background-color', '#f8d7da');
        }else{
            $('#inpObservacion').css('border', '2px solid #155724');
            $('#inpObservacion').css('background-color', '#d4edda');
        }
    });
});

function valForApr(){
    V_err = 0;
    V_txtErr = '<b>Hay error(es):</b><br><br>';
    if($('#inpSts').val().length == 0){
        $('#inpSts').css('border', '2px solid #dc3545');
        $('#inpSts').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += '- Debes seleccionar un estado.<br>';
    }else{
        $('#inpSts').css('border', '2px solid #155724');
        $('#inpSts').css('background-color', '#d4edda');
        
        if($('#inpSts').val() == 'REC'){
            if($('#inpMotRec').val().length == 0){
                $('#inpMotRec').css('border', '2px solid #dc3545');
                $('#inpMotRec').css('background-color', '#f8d7da');
                V_err++;
                V_txtErr += '- Motivo de rechazo no puede ser vacío.<br>';
            }else{
                $('#inpMotRec').css('border', '2px solid #155724');
                $('#inpMotRec').css('background-color', '#d4edda');
            }
        }
    }
        
    if(V_err > 0){
        $('#formValApr').html(V_txtErr);
        $('#formValApr').slideDown();
    }else{
        if($('#formValApr').html().length > 0){
           $('#formValApr').slideUp();
        }
        if($('#inpSts').val() == 'APR'){
            var V_sts = 'aprobado';
        }else{
            var V_sts = 'rechazado';
        }
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Solicitud '+V_sts+' correctamente.',
            showConfirmButton: false,
            timer: 4500
        })
    }
}