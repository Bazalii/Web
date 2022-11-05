let loadingTime = 0

function startLoadingTimeMeasurement() {
    loadingTime = Date.now()
}

function calculateLoadingTime() {
    return (Date.now() - loadingTime) / 1000 + ' seconds'
}

function showLoadingTime() {
    let element = document.getElementById('loadInformation');
    let text = document.createTextNode(calculateLoadingTime());

    element.appendChild(text);
}
