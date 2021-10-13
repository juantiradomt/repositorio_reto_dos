function consultar() {
    $.ajax(
            {
                url  :'https://gaca49891f9d9fd-basedatosreto1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
                type :'GET',
                datatype: 'json',
                success: function(json){
                    $("#idDivConsulta").empty();
                    $("#idDivConsulta").append("<center>");
                    $("#idDivConsulta").append("<TABLE border-spacing: 50px; style='text-align:center; border: 1px solid black;border-collapse: collapse;'>");
                    $("#idDivConsulta").append("<caption>TABLA DE CLIENTES</caption");
                    $("#idDivConsulta").append("<tr><th>ID</th><th>NAME</th><th>EMAIL</th><th>AGE</th>");
                    for(i=0; i<json.items.length; i++){
                        $("#idDivConsulta").append("<tr>");
                        $("#idDivConsulta").append("<td style='text-align:center;'>"+json.items[i].id+"</td>");
                        $("#idDivConsulta").append("<td style='text-align:center;'>"+json.items[i].name+"</td>");
                        $("#idDivConsulta").append("<td style='text-align:center;'>"+json.items[i].email+"</td>");
                        $("#idDivConsulta").append("<td style='text-align:center;'>"+json.items[i].age+"</td>");
                        $("#idDivConsulta").append("</tr>");
                    }   
                    $("#idDivConsulta").append("</table>");
                    $("#idDivConsulta").append("</center>");    
                    console.log(json)
                },
                error: function(xhr,status){
                    console.log(xhr)
                }
            }

        
          );
}


function insertar() {

    
    var registro;
    registro={id:$("#id").val(), name:$("#name").val(), email:$("#email").val(), age:$("#age").val(), name:$("#name").val()};
    dataToSend=JSON.stringify(registro);
    

    $.ajax (
        {

            url          : 'https://gaca49891f9d9fd-basedatosreto1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
            type         : 'POST',
            data         :  registro,
            dataType     : 'JSON',    
            success      :  function(response){
                                consultar();
                                alert("Se ha registrado la información");
                                console.log(response);
                            },
            error       :   function(xhr,status){
                                console.log( xhr);
                            },
        }
    );
}

function borrar() {
    var registro;
    registro={id:$("#id").val()};
    datosenvio=JSON.stringify(registro);
    $.ajax (
        {

            url          : 'https://gaca49891f9d9fd-basedatosreto1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
            type         : 'DELETE',
            data         :  datosenvio,
            contentType     : 'application/json',    
            success      :  function(response){
                                limpiarcajas();
                                consultar();
                                alert("Se ha eliminado la información");
                                console.log(response);
                            },
            error       :   function(xhr,status){
                            console.log( xhr);

                            }
        }
    );
}
function actualizar() {
    var registro;
    registro={id:$("#id").val(), name:$("#name").val(), email:$("#email").val(), age:$("#age").val()};
    datosenvio=JSON.stringify(registro);
    $.ajax (
        {
            url          : 'https://gaca49891f9d9fd-basedatosreto1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
            type         : 'PUT',
            data         :  datosenvio,
            contentType     : 'application/json',    
            success      :  function(response){
                                limpiarcajas();
                                consultar();
                                alert("Se ha Actualizado la información");
                                console.log(response);
                            },
            error       :   function(xhr,status){
                            console.log( xhr);

                            }
        }
    );
}
function consultarId()
{
    var idclient=$("#id").val();
    $.ajax(
        {
            url  :'https://gaca49891f9d9fd-basedatosreto1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client/'+idclient,
            type :'GET',
            dataType: 'json',
            success: function(json){
                $("#idDivConsulta").empty();
                $("#idDivConsulta").append("<TABLE border='1'>");
                $("#idDivConsulta").append("<caption>TABLA DE CLIENTES</caption");
                $("#idDivConsulta").append("<tr><th>ID</th><th>NAME</th><th>EMAIL</th><th>AGE</th>");
                for(i=0; i<json.items.length; i++){
                    $("#idDivConsulta").append("<tr>");
                    $("#idDivConsulta").append("<td style='text-align:center;'>"+json.items[i].id+"</td>");
                    $("#idDivConsulta").append("<td style='text-align:center;'>"+json.items[i].name+"</td>");
                    $("#idDivConsulta").append("<td style='text-align:center;'>"+json.items[i].email+"</td>");
                    $("#idDivConsulta").append("<td style='text-align:center;'>"+json.items[i].age+"</td>");
                    $("#idDivConsulta").append("</tr>");
                }   
                $("#idDivConsulta").append("</table>");
                limpiarcajas();
                console.log(json);
            },
            error: function(xhr,status){
                alert('Operacion no satisfactoria,'+ xhr.status );
            },
        }

    
      );

}
function limpiarcajas() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
}