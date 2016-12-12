console.log("heyo");

function loadJSON(e) {
        var data = JSON.parse(e.target.responseText)
        console.log("data", data)
}

var myRequest = new XMLHttpRequest()

myRequest.addEventListener("load", loadJSON)
myRequest.open("GET", "inventory.json")
myRequest.send()
