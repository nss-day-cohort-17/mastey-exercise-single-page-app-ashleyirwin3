console.log("heyo");

var cars;

var myRequest = new XMLHttpRequest()

function loadCars(e) {
    var data = JSON.parse(e.target.responseText)
    cars = data.cars
    console.log("cars", cars)
}

  //   var data = ""
  //   var loadCars = cars
  //   for (var i = 0; i < data.cars; i++) {
  //           loadCars += `<div>
  //                           <make>${data.cars[i].make}</date>
  //                           <model>${data.cars[i].model}</model>
  //                           <year>${data.cars[i].year}</year>
  //                           <price>${data.cars[i].price}</price>
  //                           <description>${data.cars[i].description}</description>
  //                       </div>`

  // }
    document.getElementById("cars_load").innerHTML = loadCars




myRequest.addEventListener("load", loadCars)
myRequest.open("GET", "inventory.json")
myRequest.send()
