$(document).ready(function(){
    
    $('#formRegistrar').submit(function(e){
        e.preventDefault();
        valForReg();
    });  
    $('#inpRegNombre').focusout(function(){
        revInd('inpRegNombre', 'inpReg', 'formValContReg');
    });    
    $('#inpRegApellido').focusout(function(){
        revInd('inpRegApellido', 'inpReg', 'formValContReg');
    });    
    $('#inpRegEmail').focusout(function(){
        revInd('inpRegEmail', 'inpReg', 'formValContReg');
    });
    $('#inpRegPass').focusout(function(){
        revInd('inpRegPass', 'inpReg', 'formValContReg');
    });
});

function revInd(P_id, P_reg, P_DvE){

    if($('#'+P_id).val().length == 0){
        
        $('#'+P_id).css('border', '2px solid #dc3545');
        $('#'+P_id).css('background-color', '#f8d7da');
        
        if(P_id == 'inpRegEmail'){
            P_id = 'inpRegDirección de correo electrónico';
        }else if(P_id == 'inpRegPass'){
            P_id = 'inpRegContraseña';
        }
        
        var errores = $('#'+P_DvE).html();
        if(errores.length == 0){
            $('#'+P_DvE).html('<b>Hay error(es):</b><br><br>');
            errores = $('#'+P_DvE).html();
            $('#'+P_DvE).html(errores + P_id.replace(P_reg, '')+' no puede ser vacío.<br>');
            $('#'+P_DvE).slideDown();
        }else{
            //borramos registro si esque existe y volvemos agregar
            $('#'+P_DvE).html(errores.replace(P_id.replace(P_reg, '')+' no puede ser vacío.<br>', ''));
            //actualizo nuevo mensaje de errores
            errores = $('#'+P_DvE).html();
            $('#'+P_DvE).html(errores + P_id.replace(P_reg, '')+' no puede ser vacío.<br>');
        }
    }else{
        if($('#inpRegPass').val().length <= 5){
            $('#inpRegPass').css('border', '2px solid #dc3545');
            $('#inpRegPass').css('background-color', '#f8d7da');
            
            
            var errores = $('#'+P_DvE).html();
            if(errores.length == 0){
                $('#'+P_DvE).html('<b>Hay error(es):</b><br><br>');
                errores = $('#'+P_DvE).html();
                $('#'+P_DvE).html(errores + 'Contraseña debe tener un mínimo de 6 caracteres.<br>');
                $('#'+P_DvE).slideDown();
            }else{
                //borramos registro si esque existe y volvemos agregar
                $('#'+P_DvE).html(errores.replace('Contraseña debe tener un mínimo de 6 caracteres.<br>', ''));
                //actualizo nuevo mensaje de errores
                errores = $('#'+P_DvE).html();
                $('#'+P_DvE).html(errores + 'Contraseña debe tener un mínimo de 6 caracteres.<br>');
            }
        }else{
            if($('#inpRegPass').val().length > 5){
                $('#'+P_id).css('border', '2px solid #155724');
                $('#'+P_id).css('background-color', '#d4edda');
                
                var errores = $('#'+P_DvE).html();
                $('#'+P_DvE).html(errores.replace('Contraseña debe tener un mínimo de 6 caracteres.<br>', ''));
                errores = $('#'+P_DvE).html();
                if(errores == '<b>Hay error(es):</b><br><br>'){
                    $('#'+P_DvE).slideUp();
                }
            }else{
                $('#'+P_id).css('border', '2px solid #155724');
                $('#'+P_id).css('background-color', '#d4edda');

                if(P_id == 'inpRegEmail'){
                    P_id = 'inpRegDirección de correo electrónico';
                }else if(P_id == 'inpRegPass'){
                    P_id = 'inpRegContraseña';
                }

                var errores = $('#'+P_DvE).html();
                $('#'+P_DvE).html(errores.replace(P_id.replace(P_reg, '')+' no puede ser vacío.<br>', ''));
                errores = $('#'+P_DvE).html();
                if(errores == '<b>Hay error(es):</b><br><br>'){
                    $('#'+P_DvE).slideUp();
                }
            }
        }
    }
}

function valForReg(){
    V_err = 0;
    V_txtErr = '<b>Hay error(es):</b><br><br>';
    if($('#inpRegNombre').val().length == 0){
        $('#inpRegNombre').css('border', '2px solid #dc3545');
        $('#inpRegNombre').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += 'Nombre no puede ser vacío.<br>';
    }else{
        $('#inpRegNombre').css('border', '2px solid #155724');
        $('#inpRegNombre').css('background-color', '#d4edda');
    }
    if($('#inpRegApellido').val().length == 0){
        $('#inpRegApellido').css('border', '2px solid #dc3545');
        $('#inpRegApellido').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += 'Apellido no puede ser vacío.<br>';
    }else{
        $('#inpRegApellido').css('border', '2px solid #155724');
        $('#inpRegApellido').css('background-color', '#d4edda');
    }
    if($('#inpRegEmail').val().length == 0){
        $('#inpRegEmail').css('border', '2px solid #dc3545');
        $('#inpRegEmail').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += 'Correo electrónico no puede ser vacío.<br>';
    }else{
        if($("#inpRegEmail").val().indexOf('@', 0) == -1 || $("#inpRegEmail").val().indexOf('.', 0) == -1) {
            $('#inpRegEmail').css('border', '2px solid #dc3545');
            $('#inpRegEmail').css('background-color', '#f8d7da');
            V_err++;
            V_txtErr += 'Correo electrónico no es valida.<br>';
        }else{
            $('#inpRegEmail').css('border', '2px solid #155724');
            $('#inpRegEmail').css('background-color', '#d4edda');
        }
    }
    if($('#inpRegPass').val().length == 0){
        $('#inpRegPass').css('border', '2px solid #dc3545');
        $('#inpRegPass').css('background-color', '#f8d7da');
        V_err++;
        V_txtErr += 'Contraseña no puede ser vacío.<br>';
    }else{
        if($("#inpRegPass").val().length <= 5) {
            $('#inpRegPass').css('border', '2px solid #dc3545');
            $('#inpRegPass').css('background-color', '#f8d7da');
            V_err++;
            V_txtErr += 'Contraseña debe tener un mínimo de 6 caracteres.<br>';
        }else{
            $('#inpRegPass').css('border', '2px solid #155724');
            $('#inpRegPass').css('background-color', '#d4edda');
        }
    }
    
    if(V_err > 0){
        $('#formValContReg').html(V_txtErr);
        $('#formValContReg').slideDown();
    }else{
        V_nombre = $('#inpNombre').val();
        V_apellido = $('#inpRegApellido').val();
        $('#formValContReg').removeClass('alert-danger');
        $('#formValContReg').addClass('alert-success');
        $('#formValContReg').html('Estimado(a) ' + V_nombre+' '+V_apellido+':<br><br>Su cuenta fue creada exitosamente. Favor revisar su correo electrónico.');
        $('#formValContReg').slideDown();
        $('#formRegistrar').slideUp();
    }
}