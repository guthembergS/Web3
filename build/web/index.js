function Catalog() {
    this.xml = new XMLHttpRequest();
    
    this.solicitacao = function(){
    var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var s = xhr.responseText;
                document.getElementById("json").innerHTML = s;
                var func = JSON.parse(s);
                var mensagem = document.getElementById("retorno");
                var saida = "<table class='sortable'><thead><tr><th>Title</th><th>Artist</th><th>Country</th><th>Company</th><th>Price</th><th>Year</th></tr></thead><tbody>";
                for (var i = 0; i < func.length; i++) {
                    var cd = func[i];
                    saida += "<tr><td>" + cd.title + "</td><td>" + cd.artist
                            + "</td><td>" + cd.country + "</td><td>" + cd.company
                            + "</td><td>" + cd.price + "</td><td>" + cd.year
                            + "</td></tr>";
                }
                saida += "</tbody></table>";
                mensagem.innerHTML = saida;
                var table = document.getElementsByTagName("table")[0];
                sorttable.makeSortable(table);
            }
        };
        xhr.open("get", "RetornoSolicitacao", true);
        xhr.send(null);
        return false;
    };
}
onload = function () {
    var c = new Catalog();
    c.solicitacao();
};