$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr, #myTable2 tr, #myTable3 tr, #myTable4 tr, #myTable5 tr, #myTable6 tr, #myTable7 tr, #myTable8 tr, #myTable9 tr, #myTable10 tr, #myTable11 tr, #myTable12 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});