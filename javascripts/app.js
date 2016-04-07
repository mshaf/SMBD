$(document).ready(function(){
	$("form").submit(function(e){
		e.preventDefault();
		var title = $("#query").val();
		

		$.ajax({
            url: "http://www.omdbapi.com/?tomatoes=true&t="+title,
            type: 'GET',
            success: function(data) {
               if(data.Response != "False"){
               	$("#movie-title").text("Title: "+data.Title);
               	$("#plot").text("Plot: "+data.Plot);
               	$("#actors").text("Actors: "+data.Actors);
               	$("#tomato-review").text("Rotten Tomatoes: "+data.tomatoConsensus);
               	$(".poster").html('<img src='+data.Poster+'">');
               	$(".tomato-meter").text("Tomato Meter: "+data.tomatoMeter);
               }
               else{
               	alert("no results")
               }

            },
            error: function(){
            	alert("error")
            },
        });

	})
})