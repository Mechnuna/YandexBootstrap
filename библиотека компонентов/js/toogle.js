function isHidden(el, el_main) {
  var elem = document.getElementById(el);
  var elem_main = document.getElementById(el_main);
  if (elem_main.className == "time_select time_select_off") {
    var op = elem.getElementsByTagName("option");
    for (var i = 0; i < op.length; i++) {
      op[i].disabled = false;
    }
    elem.className = "form-select";
    elem_main.className = "time_select";
  } else {
    var op = elem.getElementsByTagName("option");
    for (var i = 0; i < op.length; i++) {
      op[i].disabled = true;
    }
    elem.className = "form-select form-select-off";
    elem_main.className = "time_select time_select_off";
  }
}

function toggle(el, el_main) {
  isHidden(el, el_main);
}
