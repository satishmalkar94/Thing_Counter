function AddButton(target) {
      location.href='form.html';
  };
// -----------------------------------------------------------------------------
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

// -----------------------------------------------------------------------------
function Save() {
    location.href='index.html';
  };
// -----------------------------------------------------------------------------
  function showInput(){
    document.getElementById('display').innerHTML =document.getElementById("label5").value;
};
