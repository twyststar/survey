var favDrink = $("#drink").val();
var favFlavor = $("input:radio[name=flavor]:checked").val();
var birthday = $("#born").val();
var favColor = $("#color").val();

$(document).ready(function() {
  $("#formOne").click(function() {
    alert(hello);
    alert(favDrink, favFlavor, birthday, color);
    $("#answers").show();

  });
});
