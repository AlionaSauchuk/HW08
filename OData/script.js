

function count(){

    var xhr = new XMLHttpRequest();
    var url = "https://services.odata.org/V4/(S(4bctqhjqdedzwim1pxenlomc))/TripPinServiceRW/People/$count";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            alert('URL: '+url);
            alert('Response: '+json)
        }
    };
    xhr.send();
}