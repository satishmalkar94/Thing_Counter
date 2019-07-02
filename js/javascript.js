<script type="text/javascript">

function AddButton(target) {
    location.href='form.html';
};

count = 0;
function FunPlus() {

        count += 1;
        // alert(count);
        document.getElementById("total").innerHTML = count;

};

function FunMinus() {
  count -= 1;
  // alert(count);
   document.getElementById("total").innerHTML = count;
}
</script>