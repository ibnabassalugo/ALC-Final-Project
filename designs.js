// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


  $("#submit").on("click", function makeGrid(event) {

    var r = $("#inputHeight").val();
    var c = $("#inputWidth").val();
  $("table").empty();
    var grid = $("table");
    var tr = "<tr></tr>";
    var td = "<td></td>";
  for (var i = 0; i < r; i+=1) {
    $("table").append("<tr></tr>");
    for (var j = 0; j < c; j+=1) {
      $("tr:last-child").append("<td></td>");
      }
    }


  $("table tr td").on("click", function() {
    $(this).css("background-color", $("#colorPicker").val());
    });
    event.preventDefault();

  });
