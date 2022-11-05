document.addEventListener('DOMContentLoaded',
    event => setMouseOnHandlers('body header nav a', '#1CC5FA', '#000000'));
document.addEventListener('DOMContentLoaded',
    event => setMouseOutHandlers('body header nav a'));

document.addEventListener('DOMContentLoaded',
    event => setMouseOnHandlers('body footer nav a', '#1CC5FA', '#000000'));
document.addEventListener('DOMContentLoaded',
    event => setMouseOutHandlers('body footer nav a'));

document.addEventListener('DOMContentLoaded',
    event => handleLocationChange(document.location.pathname, '#1CC5FA', '#000000'));

document.addEventListener('DOMContentLoaded', event => startLoadingTimeMeasurement());

window.addEventListener('load', event => showLoadingTime());
