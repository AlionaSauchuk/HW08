(function(){
    var xhr = new XMLHttpRequest();
    var url = "https://services.odata.org/V4/(S(4bctqhjqdedzwim1pxenlomc))/TripPinServiceRW/People('keithpinckney')?$expand=Friends";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            $("#data").append('<tr><td>'+json.FirstName+'</td><td>'+
            json.LastName+'</td><td>'+json.Gender+
            '</td><td>');
            Array.from(json.Friends).forEach(function(element){
                $("#data td:last-child").append(element.FirstName+'   '+element.LastName+', ');
            });
            $("#data").append('</td></tr>');
        }
    };
    xhr.send();
})()