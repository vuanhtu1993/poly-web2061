function logging(content) {
  console.log(`Logging service: ${content}`);
}

function httpGetAsync(url, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
  };
  xmlHttp.open("GET", url, true);
  xmlHttp.send(null);
}

function getData(url, callback) {
  return fetch(url);
}

function getDataCallback(url, callback) {
  fetch(url).then((res) => callback(res));
}

// Display alert
function displayAlert(text, action) {
  const alert = document.querySelector(".service-alert");
  alert.textContent = text;
  //   alert.classList.add(`alert-${action}`);
//   alert.
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    // alert.classList.remove(`alert-${action}`);
  }, 1000);
}

export { logging, httpGetAsync, getData, getDataCallback };
