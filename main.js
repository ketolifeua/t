
function get_targets() {
    xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText);
            debugger;
            var targets = JSON.parse(xhr.responseText);
            return targets;
        }
    }
    xhr.open("GET", 'https://raw.githubusercontent.com/ketolifeua/t/master/t.json')
    xhr.send();
}

setInterval(1, get_targets())
