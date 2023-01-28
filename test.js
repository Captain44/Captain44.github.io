var counter = 1

var  b = document.getElementById('deselectButton');
var clickfun = function () {
    b.innerHTML = "Clicks: " + counter.toString();
    if (b.style.backgroundColor == 'red') b.style.backgroundColor = 'blue'
    else b.style.backgroundColor = 'red'
    counter += 1;
}

b.addEventListener("click", clickfun)

export var a = function() {
    print("Hi")
}