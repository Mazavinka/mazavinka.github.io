$(document).ready(function () {
    $('#go').click(function () {
        var zameska = $("input[name=zameska]").val();
        var navesah = $("input[name=navesah]").val();
        var ostatok = ((zameska - navesah) / zameska).toPrecision(2);
        var lateks = ostatok * 2900;
        var mel = ostatok * 5100; 
        $('#lat').empty();
        $('#mel').empty();
        $('#lat').append("Need Latex: " + lateks);
        $('#mel').append("Need Mel: " + mel);
    });
});