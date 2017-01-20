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

$("#thirdButton").click(function(event){
     $.getJSON("https://kjh311.github.io/ajax_tutorial/third.json", function(jd) {
        $('#thirdDiv').html('<h3> Name: ' + jd.name + '</h3>');
        $('#thirdDiv').append('<h3>Age : ' + jd.age+ '</h3>');
        $('#thirdDiv').append('<h3> Sex: ' + jd.sex+ '</h3>');
        $('#thirdDiv').append('<h3> Description: ' + jd.Description+ '</h3>');
    });

     $( "#thirdDiv2" ).load( "https://kjh311.github.io/ajax_tutorial/third.html #json-code", function( html ) {
    });
  });




});
