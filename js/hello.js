var counters = [];
value =0;

function FunPlus(elementVal){
  counters[elementVal]++;
  document.getElementById(elementVal +"").innerHTML =counters[elementVal]
}

function FunMinus(elementVal){
  counters[elementVal]--;
  document.getElementById(elementVal +"").innerHTML = counters[elementVal]
}

function AddButton() {
    counters.push(0);

    var textVal = document.getElementById("textvalue").value;
    var Color = document.getElementById("cvalue").value;
    var newControl = "<div class='col-md-8'><div style='background-color:" + Color + "' class='addremove'><i class='fa fa-minus-circle plusi' onClick='FunMinus(" + value + ")'></i><span class='counter' ><label id='" + value + "' >0</label><label>" + textVal + "</label></span><i class='fa fa-plus-circle plusj' onClick='FunPlus(" + value + ")'></i></div></div>";

    document.getElementById("totalbutton").innerHTML = document.getElementById("totalbutton").innerHTML + newControl;
    value++;
}

























