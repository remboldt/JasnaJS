function load_content(component) {
    var url = component.attributes['src'].textContent;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            content = xhttp.responseText;
            if (content !== component.innerHTML) {
                component.innerHTML = content;
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

async function live_components(component) {
    if (isNaN(component.classList[1])){
        sleep_time = 2000;
    } else {
        sleep_time = parseInt(component.classList[1]);
    }
    while (true) {
        await new Promise(r => setTimeout(r, sleep_time));
        load_content(component);
    }
}

var components = document.getElementsByTagName("component");

for (let i = 0; i < components.length; i++) {
    load_content(components[i]);
    if (components[i].classList[0] == "refresh") {
        live_components(components[i])
    }
}
