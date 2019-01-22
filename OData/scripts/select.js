(function(){
    var xhr = new XMLHttpRequest();
    var url = "https://services.odata.org/V4/(S(4bctqhjqdedzwim1pxenlomc))/TripPinServiceRW/People?$select=FirstName, LastName";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert('url: '+url);
            var json = JSON.parse(xhr.responseText);
            Array.from(json.value).forEach(function(element){
                $("#data").append('<tr><td>'+element.FirstName+'</td><td>'+
                element.LastName+'</td><td>'+element.Gender+'</td></tr>');
            });
        }
    };
    xhr.send();
})()