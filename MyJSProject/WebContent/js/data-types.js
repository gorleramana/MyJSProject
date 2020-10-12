/**
 * JavaScript Practice
 */

function login () {
	alert("you logged in");
};

$(document).ready(function(){
	$(".close").click(function(){
	  $("#registrationId").alert("close");
	});
  });

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();   
});

function register () {
	alert("you registered");
};

function forgotPassword () {
	alert("you submitted");
};

// $('#date-picker').datepicker({
// 	uiLibrary: 'bootstrap4'
// });

/**Sample rest api integration */

$(document).ready(function() {
    $.ajax({
        url: "https://api.github.com/users/koushikkothagal"
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.url);
	});
});

// $(document).ready(function(){
// 	$("#loginId").click(function(){
// 	  $.get("https://api.github.com/users/koushikkothagal", function(data, status){
// 		alert("Data: " + data.id + "\nStatus: " + data.url);
// 	  });
// 	});
//   });

  $(document).ready(function(){
	$("#loginId").click(function(){
	  $.get("http://localhost:8090/hello", function(data, status){
		alert("Data: " + data + "\nStatus: " + data);
	  });
	});
  });
  /** Both calls are working... */