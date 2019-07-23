var counters = [];
value =0;

function funPlus(elementVal){
  counters[elementVal]++;
  document.getElementById(elementVal +"").innerHTML =counters[elementVal]
}

function funMinus(elementVal){
  counters[elementVal]--;
  document.getElementById(elementVal +"").innerHTML = counters[elementVal]
}

function addButton() {
    counters.push(0);

    var textVal = document.getElementById("textvalue").value;
    var Color = document.getElementById("cvalue").value;
    var newControl = "<div class='col-md-8'><div style='background-color:" + Color + "' class='addsub'><i class='fa fa-minus-circle minus' onClick='funMinus(" + value + ")'></i><span class='counter' ><label id='" + value + "' ></label><label>" + textVal + "</label></span><i class='fa fa-plus-circle plus' onClick='funPlus(" + value + ")'></i></div></div>";

    document.getElementById("totalbutton").innerHTML = document.getElementById("totalbutton").innerHTML + newControl;
    value++;
}

























