function loadDoc() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);

            myFunction(obj);
        }
    };
    xmlhttp.open("GET", "http://127.0.0.1:8125/getCountries", true);
    xmlhttp.send();

    function myFunction(arr) {
        var out = "";
        var i;
        for (i = 0; i < 243; i++) {
            out += '<p>'+ '<strong>' + 'Code: ' + '</strong>' + arr.countries[i].code + '<br>'+ '<strong>' + 'FullName: ' + '</strong>' + arr.countries[i].name + '<br>' +'</p>';
        }
        document.getElementById("demo").innerHTML = out;
        console.log(out);
    }
}
