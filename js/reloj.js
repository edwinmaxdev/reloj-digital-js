    function mostrarHoras(){
        let fechas = new Date();
        let hr = agregarCeros(fechas.getHours());
        let min = agregarCeros(fechas.getMinutes());
        let seg = agregarCeros(fechas.getSeconds());

        let horas = `${hr}:${min}:${seg}` ;

        document.getElementById("horas").innerHTML = horas;
        
        document.getElementById("reloj").classList.toggle("animar");


        let meses = ["Ene", "feb", "mar", "abr", "may", "jun", "jul", "agos", "sept", "oct", "nov","dic"];
        let dias = ["domingo", "lunes", "martes","miercoles", "jueves", "viernes", "sabado"];
        
        
        let mes = meses[fechas.getMonth()];
        let dia = dias[fechas.getDay()];
        let fec = fechas.getDate();

        let dias_Semana = `${mes},${fec} ${dia}`;

        document.getElementById("semanas").innerHTML = dias_Semana;

        


    }
    function agregarCeros(num){
        return num < 10 ? "o" + num :num;
    }



    setInterval(mostrarHoras, 1000);