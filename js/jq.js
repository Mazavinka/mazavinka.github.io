$(document).ready(function () {
    $('#go').click(function () {
        var zameska = $("input[name=zameska]").val();
        var navesah = $("input[name=navesah]").val();
        var ostatok = ((zameska - navesah) / zameska).toPrecision(3);
        var lateks = ostatok * 2900;
        var mel = ostatok * 5100;
		var water = ostatok * 300;
        $('#lat').empty();
        $('#mel').empty();
		$('#water').empty();
        $('#lat').append("Need Latex: " + lateks);
        $('#mel').append("Need Mel: " + mel);
		$('#water').append("Need Water: " + water);
    });
});