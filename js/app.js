$(document).ready(function() {
    $(".add-item").click(function() {
     var listvalue = $(".input-box").val();
     $(".input-box").val();
	 $(".list-items").append('<li>' + listvalue + '</li>');
	 $('<input type="checkbox" value="0" />').prependTo('li');
    });





   

})
