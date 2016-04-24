  $("#submitSymptoms").click(function() {
      alert('changes submited');
  });

  $(".symptomButton").click(function() {
      // get selected
      $(".selected").removeClass("selected");
      // select new element
      $(this).addClass("selected");
  });



$(document).bind("pagecreate", function(event, ui) {
    $('#slider').siblings('.ui-slider').bind('tap', function(event, ui){ makeAjaxChange($(this).siblings('input')); });
    $('#slider').siblings('.ui-slider a').bind('taphold', function(event, ui){ makeAjaxChange($(this).parent().siblings('input')); 
});

function makeAjaxChange( elem ) { 
    alert(elem.val()); 
}
});
  
