$( document ).ready(function() {
    // alert( "ready!" );

$("#firstButton").on( "click", function(  ) {
  $( "#firstDiv" ).load( "https://kjh311.github.io/ajax_tutorial/first.html" );
});

$("#secondButton").on( "click", function(  ) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("secondDiv").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://kjh311.github.io/ajax_tutorial/second.html", true);
  xhttp.send();
});

// $("#thirdButton").on( "click", function(  ) {
// $.getJSON("https://kjh311.github.io/ajax_tutorial/third.json", function(result){
//         $.each(result, function(i, field){
//             $('#thirdDiv').html('<p> Color Name: ' + result.colorName + '</p>');
//             $('#thirdDiv').append('<p>Hex Value : ' + result.hexValue+ '</p>');
//         });
//     });
// });

// $("#thirdButton").on( "click", function(  ) {
// $.getJSON('http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20WHERE%20symbol%3D%27WRC%27&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback', function(data) {
//     $('#thirdDiv').append(data);
//     console.log(data);
// });
// });
$("#thirdButton").on( "click", function(  ) {
    $.getJSON("https://kjh311.github.io/ajax_tutorial/third.json", function (result) {
        result.jobs.map(function (v) {
            $('#thirdDiv').append(v.colorName);
            $('#thirdDiv').append(v.hexValue);

        });
    });
    });
});
