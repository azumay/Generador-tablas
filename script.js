


$( document ).ready(function() {   
  


    $("#generar").click(function(){

            var num_filas = $("#filas").val();
            var num_columnas = $("#columnas").val();
            var color_Borde = $("#color_borde").val();
            
            
            var color_fondo = $("#color_fondo_tabla").val();
            
            
            var agregar_borde = $("#ancho_borde").val();
            

            console.log(agregar_borde);

        $("#resultado_tabla").append("<table id='mi_tabla'>");
        
        for (var i = 0; i < num_filas; i++) 
       
        $("#resultado_tabla table").append("<tr>");

            for (var j = 0; j < num_columnas; j++) 

               

                $("#resultado_tabla tr").append("<td>");

                $("#resultado_tabla td").css("background-color", color_fondo);

            
    

    });

    $("#reset").click(function(){
        $("#resultado_tabla table").remove();
        $("#resultado_tabla tr").remove();
        $("#resultado_tabla td").remove();
    });
});