var fvalue;
var cvalue;
function Save() {
         var fvalue= document.getElementById("textvalue").value;//get text value
         var cvalue= document.getElementById("cvalue").value;
        document.getElementById("texttotal").innerHTML = fvalue;//set test value to texttotal
  // cvalue= document.getElementsByClassName("addremove").style.backgroundColor=cvalue;
 };

count = 0;
  function FunPlus() {

          count += 1;
          // alert(count);
          document.getElementById("total").innerHTML = count;

  };
// -----------------------------------------------------------------------------
  function FunMinus() {
    count -= 1;
    // alert(count);
     document.getElementById("total").innerHTML = count;
  };

