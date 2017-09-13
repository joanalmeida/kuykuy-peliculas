(function() {
    console.log("Loaded");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4) {
            if(this.status == 200) {
                console.log(xhttp.statusText);
            } else {
                console.log("Algun error paso");
            }
        }
    };

    var data = {
        titulo: "Latest",
        anio: 2014,
        genero: "Accion"
    };

    xhttp.open("POST", "api/peliculas");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(data));
})();