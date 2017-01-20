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

$("#thirdButton").on( "click", function(  ) {
$.getJSON("https://kjh311.github.io/ajax_tutorial/third.json", function(jd){
        $.each(function(jd){
            $('#thirdDiv').html('<p> Color Name: ' + jd.colorName + '</p>');
            $('#thirdDiv').append('<p>Hex Value : ' + jd.hexValue+ '</p>');
        });
    });
});


});
