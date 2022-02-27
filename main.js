
function get_targets() {
    xhr = new XMLHttpRequest;
    xhr.open("GET", 'https://raw.githubusercontent.com/ketolifeua/t/master/t.json', false)
    xhr.send();
    JSON.parse(xhr.responseText);
}

setInterval(1, get_targets())
