
function get_targets {
    setInterval(10, function() {

        xhr = new XMLHttpRequest;
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var targets = JSON.parse(xhr.responseText);
            }
        }
        xhr.open("GET", 'https://www.ketolife.com.ua')
        xhr.send();
        return targets;
    });
}

