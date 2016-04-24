// Back button
$("#map-backbutton").click(function() {
    alert("Volve!!!");
});
// SLIDER 
$(document).bind("pagecreate", function(event, ui) {
    $('#map-slider').siblings('.ui-slider').bind('tap', function(event, ui) {
        makeAjaxChange($(this).siblings('input'));
    });
    $('#map-slider').siblings('.ui-slider a').bind('taphold', function(event, ui) {
        makeAjaxChange($(this).parent().siblings('input'));
    });

    function makeAjaxChange(elem) {
        alert(elem.val());
    }
});
$("#map-symp-data").css("display", "none");
$("#map-symp-icon").css("display", "none");
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

function initMap() {
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {
            lat: -34.582796,
            lng: -58.4366897
        },
        zoom: 15
    });
    var icon = "../client/app/style/images/mapa/report.png";
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-34.583796, -58.434),
        title: "Reported Symptom!",
        symptom: "Headache",
        namePlace: "Place: Palermo",
        intencity: 34,
        icon: icon
    });

    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(-34.580924, -58.44097),
        title: "Reported Symptom!",
        symptom: "Headache",
        namePlace: "Place: Palermo",
        intencity: 54,
        icon: icon
    });

    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(-34.582796, -58.4397),
        title: "Reported Symptom!",
        symptom: "Vision",
        namePlace: "Place: Palermo",
        intencity: 94,
        icon: icon
    });


    // To add the marker to the map, call setMap();
    marker.setMap(map);
    marker2.setMap(map);
    marker3.setMap(map);
    marker.addListener('click', setSymptomData)
    marker2.addListener('click', setSymptomData)
    marker3.addListener('click', setSymptomData)
    var infoWindow = new google.maps.InfoWindow({
        map: map
    });

}

function setSymptomData() {
    $("#map-symp-data").css("display", "block");
$("#map-symp-icon").css("display", "block");
    $("#map-symptom").text(this.symptom);
    $("#map-place").text(this.namePlace);
    $("input[data-type=range]").val(this.intencity).slider("refresh");
    if (this.symptom === "Vision") {
        $("#my_image").attr("src", "app/style/images/sintomas/sintomas-07.png");

    } else {
        $("#my_image").attr("src", "app/style/images/sintomas/sintomas-10.png");
    }
}
