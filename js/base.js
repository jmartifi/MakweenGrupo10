$(document).ready(function(){
    
    $('#formContacto').submit(function(e){
        e.preventDefault();
        valForCont();
    });  
    $('#inpNombre').focusout(function(){
        revInd('inpNombre', 'inp', 'formValCont');
    });    
    $('#inpApellido').focusout(function(){
        revInd('inpApellido', 'inp', 'formValCont');
    });    
    $('#inpFono').focusout(function(){
        revInd('inpFono', 'inp', 'formValCont');
    });
    $('#inpFono').keyup(function(){
        if($('#inpFono').val().length > 11){
            $('#inpFono').val($('#inpFono').val().substr(0,11));
        }
    });
    $('#inpFono').focusout(function(){
        revInd('inpFono', 'inp', 'formValCont');
    });
    $('#inpEmail').focusout(function(){
        revInd('inpEmail', 'inp', 'formValCont');
    });
    $('#inpText').focusout(function(){
        revInd('inpText', 'inp', 'formValCont');
    });
    
    $('#inpText').keyup(function(){
        var nume = parseInt($('#inpText').val().length);
        $('#contInpTxt').text(nume);
        if(nume >= 301){
            $('#inpText').css('border', '2px solid #dc3545');
            $('#inpText').css('background-color', '#f8d7da');
        }else{
            $('#inpText').css('border', '2px solid #155724');
            $('#inpText').css('background-color', '#d4edda');
        }
    });
    
    $('#formLogin').submit(function(e){
        e.preventDefault();
        valForLogin();
    });
});

function revInd(P_id, P_reg, P_DvE){

    if($('#'+P_id).val().length == 0){
        
        $('#'+P_id).css('border', '2px solid #dc3545');
        $('#'+P_id).css('background-color', '#f8d7da');
        
        if(P_id == 'inpFono'){
            P_id = 'inpTeléfono';
        }else if(P_id == 'inpEmail'){
            P_id = 'inpDirección de correo electrónico';
        }else if(P_id == 'inpText'){
            P_id = 'inp¿Cómo podemos ayudarte?';
        }else if(P_id == 'inpRegEmail'){
            P_id = 'inpCorreo electrónico';
        }
        
        var errores = $('#'+P_DvE).html();
        if(errores.length == 0){
            $('#'+P_DvE).html('<b>Hay error(es):</b><br><br>');
            $('#'+P_DvE).slideDown();
        }else{
            //borramos registro si esque existe y volvemos agregar
            $('#'+P_DvE).html(errores.replace(P_id.replace(P_reg, '')+' no puede ser vacío.<br>', ''));
            //actualizo nuevo mensaje de errores
            errores = $('#'+P_DvE).html();
            $('#'+P_DvE).html(errores + P_id.replace(P_reg, '')+' no puede ser vacío.<br>');
        }        
    }else{
        $('#'+P_id).css('border', '2px solid #155724');
        $('#'+P_id).css('background-color', '#d4edda');
        
        if(P_id == 'inpFono'){
            P_id = 'inpTeléfono';
        }else if(P_id == 'inpEmail'){
            P_id = 'inpDirección de correo electrónico';
        }else if(P_id == 'inpText'){
            P_id = 'inp¿Cómo podemos ayudarte?';
        }else if(P_id == 'inpRegEmail'){
            P_id = 'inpCorreo electrónico';
        }
        
        var errores = $('#'+P_DvE).html();
        $('#'+P_DvE).html(errores.replace(P_id.replace(P_reg, '')+' no puede ser vacío.<br>', ''));
        errores = $('#'+P_DvE).html();
        if(errores == '<b>Hay error(es):</b><br><br>'){
            $('#'+P_DvE).slideUp();
        }
    }
}

function valForCont(){
    V_err = 0;
    V_txtErr = '<b>Hay error(es):</b><br><br>';
    if($('#inpNombre').val().length == 0){
        $('#inpNombre').css('border', '2px solid #dc3545');
        $('#inpNombre').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += 'Nombre no puede ser vacío.<br>';
    }else{
        $('#inpNombre').css('border', '2px solid #155724');
        $('#inpNombre').css('background-color', '#d4edda');
    }
    if($('#inpApellido').val().length == 0){
        $('#inpApellido').css('border', '2px solid #dc3545');
        $('#inpApellido').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += 'Apellido no puede ser vacío.<br>';
    }else{
        $('#inpApellido').css('border', '2px solid #155724');
        $('#inpApellido').css('background-color', '#d4edda');
    }
    if($('#inpFono').val().length == 0){
        $('#inpFono').css('border', '2px solid #dc3545');
        $('#inpFono').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += 'Teléfono no puede ser vacío.<br>';
    }else{
        $('#inpFono').css('border', '2px solid #155724');
        $('#inpFono').css('background-color', '#d4edda');
    }
    if($('#inpEmail').val().length == 0){
        $('#inpEmail').css('border', '2px solid #dc3545');
        $('#inpEmail').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += 'Dirección de correo electrónico no puede ser vacío.<br>';
    }else{
        if($("#inpEmail").val().indexOf('@', 0) == -1 || $("#inpEmail").val().indexOf('.', 0) == -1) {
            $('#inpEmail').css('border', '2px solid #dc3545');
            $('#inpEmail').css('background-color', '#f8d7da');
            V_err++;
            V_txtErr += 'Dirección de correo electrónico no es valida.<br>';
        }else{
            $('#inpEmail').css('border', '2px solid #155724');
            $('#inpEmail').css('background-color', '#d4edda');
        }
    }
    if($('#inpText').val().length == 0){
        $('#inpText').css('border', '2px solid #dc3545');
        $('#inpText').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += '¿Cómo podemos ayudarte? no puede ser vacío.<br>';
    }else{
        $('#inpText').css('border', '2px solid #155724');
        $('#inpText').css('background-color', '#d4edda');
    }
    
    if(V_err > 0){
        $('#formValCont').html(V_txtErr);
        $('#formValCont').slideDown();
    }else{
        V_nombre = $('#inpNombre').val();
        V_apellido = $('#inpApellido').val();
        V_email = $('#inpEmail').val();
        $('#formValCont').removeClass('alert-danger');
        $('#formValCont').addClass('alert-success');
        $('#formValCont').html('Estimado(a) ' + V_nombre+' '+V_apellido+':<br><br>Tu solicitud ha sido ingresada y será respondida al email <strong>'+V_email+'</strong> lo más pronto posible.');
        $('#formValCont').slideDown();
        $('#formContacto').slideUp();
    }
}

function valForLogin(){
    V_err = 0;
    V_txtErr = '<b>Hay error(es):</b><br><br>';
    if($('#inpUser').val().length == 0){
        $('#inpUser').css('border', '2px solid #dc3545');
        $('#inpUser').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += 'Usuario no puede ser vacío.<br>';
    }else{
        $('#inpUser').css('border', '2px solid #155724');
        $('#inpUser').css('background-color', '#d4edda');
    }
    if($('#inpPass').val().length <= 5){
        $('#inpPass').css('border', '2px solid #dc3545');
        $('#inpPass').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += 'Contraseña no puede ser vacío.<br>';
    }else{
        $('#inpPass').css('border', '2px solid #155724');
        $('#inpPass').css('background-color', '#d4edda');
    }
    
    if(V_err > 0){
        $('#formValCont').html(V_txtErr);
        $('#formValCont').slideDown();
    }else{
        window.open('inicio.html','_self');
    }
}