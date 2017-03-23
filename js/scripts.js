$(document).ready(function() {
  alert("hello");
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var favDrink = $("#drink").val();
    var favFlavor = $("input:radio[name=flavor]:checked").val();
    var birthday = $("input#born").val();
    var favColor = $("input#color").val();


    alert(favDrink + favFlavor + birthday + favColor);
    $("#answers").show();

  });
});
