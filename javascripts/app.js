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
               	$("#year").text("Year: "+data.Year);
               	var runNum= parseInt(data.Runtime)
               	var CLEmins=Math.round(runNum/50);
               	$("#mins").text("Number of New York CLE credits you could receive if you watch a Lawline.com CLE Course instead of this movie: "+CLEmins);
               	$("#director").text("Director: "+data.Director);
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