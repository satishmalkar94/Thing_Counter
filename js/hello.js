var fvalue
var fcolor

function Save() {
          var fvalue = document.getElementById("textvalue").value;
          alert(textvalue)
          var fcolor = document.getElementById("cvalue").value
          alert(cvalue)
          document.getElementById("total1").innerHTML = fvalue;
          // document.getElementById("total1").innerHTML = fcolor;
          // alert(fcolor)
 };
// -------------------------------------------------------------------------------
count = 0;
  function FunPlus() {

          count += 1;
          document.getElementById("total").innerHTML = count;

  };
// -----------------------------------------------------------------------------
  function FunMinus() {
    count -= 1;
    // alert(count);
     document.getElementById("total").innerHTML = count;
  };

