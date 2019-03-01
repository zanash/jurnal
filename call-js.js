function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://raw.githubusercontent.com/zanash/Jurnal/master/economica.js';
    document.body.appendChild(script);
    console.log('loadScript');
}

function initialize() {
    console.log('initialize');
}

window.onload = loadScript;
