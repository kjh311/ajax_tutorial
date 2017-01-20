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
        $('#thirdDiv').html('<p> Name: ' + jd.name + '</p>');
        $('#thirdDiv').append('<p>Age : ' + jd.age+ '</p>');
        $('#thirdDiv').append('<p> Sex: ' + jd.sex+ '</p>');
        $('#thirdDiv').append('<p> Description: ' + jd.Description+ '</p>');
    });
  });

$("#thirdButton").click(function(event){
  $( "#thirdDiv2" ).load( "https://kjh311.github.io/ajax_tutorial/second.html #json-code", function( html ) {
    });
});


});
