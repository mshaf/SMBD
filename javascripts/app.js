$(document).ready(function(){
	$("#btn").click(function(){
		var title = $("#query").val();
		

		$.ajax({
            url: "http://www.omdbapi.com/?t="+title,
            type: 'GET',
            success: function(data) {
               if(data.Response != "False"){
               	$("#movie-title").text(data.Title);
               $("#plot").text(data.Plot);
               $("#poster").html('<img src='+data.Poster+'">');
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