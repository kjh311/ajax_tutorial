$( document ).ready(function() {

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

$("#thirdButton").click(function(event){
     $.getJSON("https://kjh311.github.io/ajax_tutorial/third.json", function(jd) {
        $('#thirdDiv').html('<h2> Name: ' + jd.name + '</h2>');
        $('#thirdDiv').append('<h2>Age : ' + jd.age+ '</h2>');
        $('#thirdDiv').append('<h2> Sex: ' + jd.sex+ '</h2>');
        $('#thirdDiv').append('<h2> Description: ' + jd.Description+ '</h2>');
    });

     $( "#thirdDiv2" ).load( "https://kjh311.github.io/ajax_tutorial/third.html #json-code", function( html ) {
    });
  });

$("#fourthButton").on( "click", function(  ) {
    $.get( "https://kjh311.github.io/ajax_tutorial/fourth.html", function( data ) {
      $( "#fourthDiv" ).html( data );
    });
   });

$("#fifthButton").on( "click", function(  ) {
$.ajax({url: "https://kjh311.github.io/ajax_tutorial/fifth.html", success: function(result){
        $("#fifthDiv").html(result);
    }});
   });


});
