$(document).ready(function() {
    $(".add-item").click(function() {
      var listvalue = $("#input-box").val();
      $("#input-box").val('');
      if (listvalue != '') {
        $(".list-items").append('<li class="item">' + 
                                '<input type="checkbox" value="0" />' +
                                '<span>&nbsp;</span>' + listvalue + 
                                '<button class="remove">X</button>' +
                              '</li>');
        }
    });

    $(".clear-btn").click(function() {
      $(".item").remove();
    });    

});

$(document).on('click','.remove', function() {
  $(this).parent().remove();
  return false;
});
