(function(){
    var xhr = new XMLHttpRequest();
    var url = "https://services.odata.org/V4/(S(n4ioim2z2ysivtsnaxgakjx4))/TripPinServiceRW/People"+
    "?$filter=FirstName eq 'Sallie' and LastName eq 'Sampson' and startswith(FirstName,'Sa')";
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