function mostrarHora() {


            const momentoActual = new Date();

            let dia = momentoActual.getDate(),
                diaSemana = momentoActual.getDay(),
                mes = momentoActual.getMonth(),
                anio = momentoActual.getFullYear(),
                hora = momentoActual.getHours(),
                minuto = momentoActual.getMinutes(),
                segundo = momentoActual.getSeconds();

            const semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];

           const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


            document.getElementById("hora").innerHTML = hora ;
            document.getElementById("minuto").innerHTML = minuto ;
            document.getElementById("segundo").innerHTML = segundo;
            document.getElementById("diaSemana").innerHTML = semana[diaSemana];
            document.getElementById("mes").innerHTML = meses[mes];
            document.getElementById("dia").innerHTML = dia;
            document.getElementById("anio").innerHTML = anio;
        };

        
        mostrarHora();
   
         const intervalo = setInterval(mostrarHora, 1000);
