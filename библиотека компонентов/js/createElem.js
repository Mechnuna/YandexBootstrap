// function addElem() {
//   // "add_services"
//   var elem = document.getElementById("block-1");
//   var div = document.createElement("div");

//   div.class = "cell_drag";

//   elem.appendChild(div);
// }

// function addElem() {
//   // "add_services"
//   var elem = document.getElementById("#add").detach();

//   var div = document.getElementById("#block-1");
//   div.appendChild(elem);
// }

$(document).on("click", "#add_services", function () {
  var element = $(".cell_drag").clone();
  element.span = "LOL";
  console.log(element[0]);
  $("#block-1").append(element[0]);
});
