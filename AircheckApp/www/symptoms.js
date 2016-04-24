// select symptom
$(".symptomButton").click(function() {
    // get selected
    $(".selected").removeClass("selected");
    // select new element
    $(this).addClass("selected");
});


// SLIDER 
$(document).bind("pagecreate", function(event, ui) {
    $('#slider').siblings('.ui-slider').bind('tap', function(event, ui) {
        makeAjaxChange($(this).siblings('input'));
    });
    $('#slider').siblings('.ui-slider a').bind('taphold', function(event, ui) {
        makeAjaxChange($(this).parent().siblings('input'));
    });

    function makeAjaxChange(elem) {
        alert(elem.val());
    }
});

// save button
$("#submitSymptoms").click(function() {
    alert('changes submited');
});

// Back button
$("#backButton").click(function() {
    alert("Volve!!!");
});
