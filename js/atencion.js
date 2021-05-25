$(document).ready(function(){
    getMarcas();
    
    $('#selMarca').change(function(){
        getModelo($(this).val())
    });
    
    $('#formNuevaAt').submit(function(e){
        e.preventDefault();
        valForNuevaAt();
    });
    
    $('#inpResena').keyup(function(){
        var nume = parseInt($('#inpResena').val().length);
        $('#contInpResena').text(nume);
        if(nume == 0 || nume >= 301){
            $('#inpResena').css('border', '2px solid #dc3545');
            $('#inpResena').css('background-color', '#f8d7da');
        }else{
            $('#inpResena').css('border', '2px solid #155724');
            $('#inpResena').css('background-color', '#d4edda');
        }
    });
    
    $('#inpDiagno').keyup(function(){
        var nume = parseInt($('#inpDiagno').val().length);
        $('#contInpDiagno').text(nume);
        if(nume == 0 || nume >= 301){
            $('#inpDiagno').css('border', '2px solid #dc3545');
            $('#inpDiagno').css('background-color', '#f8d7da');
        }else{
            $('#inpDiagno').css('border', '2px solid #155724');
            $('#inpDiagno').css('background-color', '#d4edda');
        }
    });
    
    $('#inpFecha').attr("max",new Date().toISOString().split("T")[0]);
});

function getMarcas(){
    var url = 'https://the-vehicles-api.herokuapp.com/brands/';
    $.getJSON(
        url,
        function(data){
            var opciones = '<option value="" selected>Seleccionar marca...</option>';
            $.each(data, function(i, item) {
                opciones += '<option value="'+data[i].id+'">'+data[i].brand+'</option>';
            });
            $('#selMarca').html(opciones);
        }
    );
}

function getModelo(P_id){
    var url = 'https://the-vehicles-api.herokuapp.com/models?brandId='+P_id;
    $.getJSON(
        url,
        function(data){
            var opciones = '<option value="" selected>Seleccionar modelo...</option>';
            $.each(data, function(i, item) {
                opciones += '<option value="'+data[i].id+'">'+data[i].model+'</option>';
            });
            $('#selModelo').html(opciones);
            $('#selModelo').prop('disabled', false);
        }
    );
}

function valForNuevaAt(){
    V_err = 0;
    V_txtErr = '<b>Hay error(es):</b><br><br>';
    if($('#inpTitulo').val().length == 0){
        $('#inpTitulo').css('border', '2px solid #dc3545');
        $('#inpTitulo').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += '- Titulo no puede ser vacío.<br>';
    }else{
        $('#inpTitulo').css('border', '2px solid #155724');
        $('#inpTitulo').css('background-color', '#d4edda');
    }
    if($('#selServicio').val().length == 0){
        $('#selServicio').css('border', '2px solid #dc3545');
        $('#selServicio').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += '- Servicio no puede ser vacío.<br>';
    }else{
        $('#selServicio').css('border', '2px solid #155724');
        $('#selServicio').css('background-color', '#d4edda');
    }
    if($('#inpPatente').val().length != 6){
        $('#inpPatente').css('border', '2px solid #dc3545');
        $('#inpPatente').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += '- Formato de Patente no válida.<br>';
    }else{
        $('#inpPatente').css('border', '2px solid #155724');
        $('#inpPatente').css('background-color', '#d4edda');
    }
    if($('#selMarca').val().length == 0){
        $('#selMarca').css('border', '2px solid #dc3545');
        $('#selMarca').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += '- Marca no puede ser vacío.<br>';
    }else{
        $('#selMarca').css('border', '2px solid #155724');
        $('#selMarca').css('background-color', '#d4edda');
    }
    if($('#selModelo').val().length == 0){
        $('#selModelo').css('border', '2px solid #dc3545');
        $('#selModelo').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += '- Modelo no puede ser vacío.<br>';
    }else{
        $('#selModelo').css('border', '2px solid #155724');
        $('#selModelo').css('background-color', '#d4edda');
    }
    if($('#selAno').val().length == 0){
        $('#selAno').css('border', '2px solid #dc3545');
        $('#selAno').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += '- Año no puede ser vacío.<br>';
    }else{
        $('#selAno').css('border', '2px solid #155724');
        $('#selAno').css('background-color', '#d4edda');
    }
    if($('#inpFecha').val().length == 0){
        $('#inpFecha').css('border', '2px solid #dc3545');
        $('#inpFecha').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += '- Fecha de ingreso no puede ser vacío.<br>';
    }else{
        $('#inpFecha').css('border', '2px solid #155724');
        $('#inpFecha').css('background-color', '#d4edda');
    }
    if($('#selMecanico').val().length == 0){
        $('#selMecanico').css('border', '2px solid #dc3545');
        $('#selMecanico').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += '- Mecánico no puede ser vacío.<br>';
    }else{
        $('#selMecanico').css('border', '2px solid #155724');
        $('#selMecanico').css('background-color', '#d4edda');
    }
    if($('#inpResena').val().length == 0 || $('#inpResena').val().length > 300){
        $('#inpResena').css('border', '2px solid #dc3545');
        $('#inpResena').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += '- Breve reseña no puede ser vacío o mayor a 300 caracteres.<br>';
    }else{
        $('#inpResena').css('border', '2px solid #155724');
        $('#inpResena').css('background-color', '#d4edda');
    }
    if($('#inpDiagno').val().length == 0 || $('#inpDiagno').val().length > 300){
        $('#inpDiagno').css('border', '2px solid #dc3545');
        $('#inpDiagno').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += '- Diagnostico no puede ser vacío o mayor a 300 caracteres.<br>';
    }else{
        $('#inpDiagno').css('border', '2px solid #155724');
        $('#inpDiagno').css('background-color', '#d4edda');
    }    
    if($('#archA').val().length == 0){
        $('#lbArchA').css('border', '2px solid #dc3545');
        $('#lbArchA').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += '- Imagen 01 no puede ser vacío.<br>';
    }else{
        
        var archivo = $('#archA');
        var items = archivo[0].files;
        if(items[0].size > 2097152){
            V_err++;
            V_txtErr += '- Imagen 01 no puede exceder el tamaño máx. (2MB).<br>';
            $('#lbArchA').css('border', '2px solid #dc3545');
            $('#lbArchA').css('background-color', '#f8d7da');
        }else{
            $('#lbArchA').css('border', '2px solid #155724');
            $('#lbArchA').css('background-color', '#d4edda');
            $('#lbArchA').text(items[0].name);
        }
    }
    
    if($('#archB').val().length > 0){
        
        var archivo = $('#archB');
        var items = archivo[0].files;
        if(items[0].size > 2097152){
            V_err++;
            V_txtErr += '- Imagen 02 excede el tamaño máx. (2MB).<br>';
            $('#lbArchB').css('border', '2px solid #dc3545');
            $('#lbArchB').css('background-color', '#f8d7da');
        }else{
            $('#lbArchB').css('border', '2px solid #155724');
            $('#lbArchB').css('background-color', '#d4edda');
            $('#lbArchB').text(items[0].name);
        }
    }
    
    if($('#archC').val().length > 0){
        
        var archivo = $('#archC');
        var items = archivo[0].files;
        if(items[0].size > 2097152){
            V_err++;
            V_txtErr += '- Imagen 03 excede el tamaño máx. (2MB).<br>';
            $('#lbArchC').css('border', '2px solid #dc3545');
            $('#lbArchC').css('background-color', '#f8d7da');
        }else{
            $('#lbArchC').css('border', '2px solid #155724');
            $('#lbArchC').css('background-color', '#d4edda');
            $('#lbArchC').text(items[0].name);
        }
    }
        
    if(V_err > 0){
        $('#formValNuevaAt').html(V_txtErr);
        $('#formValNuevaAt').slideDown();
        $('html, body').animate({scrollTop:0}, 'slow');
    }else{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Atención ingresada correctamente.',
            showConfirmButton: false,
            timer: 4500
        })
        $("#formNuevaAt")[0].reset();
    }
}