//document ready
$(document).ready(function(){
    $("#genreId").on('change', function() {

        if(this.value == '1') {
            $("#option1").html("Skepta");
            $("#option1").val("Skepta");
            $("#option2").html("Stormzy");
            $("#option2").val("Stormzy");
            $("#option3").html("Jme");
            $("#option3").val("Jme");
        }

        if(this.value == '2') {
            $("#option1").html("Drake");
            $("#option1").val("Drake");
            $("#option2").html("Kodak Black");
            $("#option2").val("Kodak+Black");
            $("#option3").html("Migos");
            $("#option3").val("Migos");
        }

        if(this.value == '3') {
            $("#option1").html("Billie Holiday");
            $("#option1").val("Billie+Holiday");
            $("#option2").html("Frank Sinatra");
            $("#option2").val("Frank+Sinatra");
            $("#option3").html("Louis Armstrong");
            $("#option3").val("Louis+Armstrong");
        }

        if(this.value == '4') {
            $("#option1").html("Bruce Springsteen");
            $("#option1").val("Bruce+Springsteen");
            $("#option2").html("The Rolling Stones");
            $("#option2").val("The+Rolling+Stones");
            $("#option3").html("Green Day");
            $("#option3").val("Green+Day");
        }
        $("#displayMusic").on('change', function() {
           if($("#displayMusic").val() == 1) {
               $("#numResults").attr("disabled");
           }

        });
    });
    


$('#submit').on('click', function() {
    var artist = $('#artist').val();
    $.ajax({
        url: "https://itunes.apple.com/search?term=" + artist,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function(result) {
            console.log(result);
            process(result);
        },
        error: function() { alert('Failed!'); }
    });
});

});

function process(json) {
    //process your json
    var category = $("#displayMusic").val();
    console.log(category);
    console.log(json);
    var albumTable = "<table id='albumTable' border='1' cellspacing='1'>";
    if(category == 1) {
        for(var i=0; i < $("#numResults").val(); i++) {
            albumTable += "<tr><td>" + json.results[i].collectionName + " </td> <td> " + json.results[i].artistName + "</td> <td> <img src='" +
                json.results[i].artworkUrl100 + "' alt='mzstatic.com'></td> <td>" + json.results[i].collectionPrice + "</td> <td> <audio src='" + json.results[i].previewUrl +
                "'controls='true' type='audio/m4a'></audio></td>";
        }
        albumTable += "</table>";
        $("#table").html(albumTable);
        console.log(albumTable);
    }
    var songTable = "<table id='songTable' border='1' cellspacing='1'>";
    if(category == 2) {
        for(var i=0; i < $("#numResults").val(); i++) {
            songTable += "<tr><td>" + json.results[i].trackName + " </td> <td> " + json.results[i].artistName + "</td> <td> <img src='" +
                json.results[i].artworkUrl100 + "' alt='mzstatic.com'></td> <td>" + json.results[i].trackPrice + "</td> <td> <audio src='" + json.results[i].previewUrl +
                "'controls='true' type='audio/m4a'></audio></td>";
        }
        songTable += "</table>";
        $("#table").html(songTable);
        console.log(songTable);
    }
}





















