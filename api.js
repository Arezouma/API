$(document).ready(function()
{
	var searchBar = document.getElementById("movieSearcher");

	$('#mainForm').submit(function(evt)
	{
		evt.preventDefault();
	});

	$("#movieSearcher").keyup(function(event)
	{
        var valueSearch = $('#movieSearcher').val();
        if (valueSearch.length > 3){
             $.ajax({
             	type: "GET",
             	url: "http://www.omdbapi.com/?apikey=f02ec1eb&",
             	data: {
             		t: searchBar.value 
             	},
             	dataType: "json",
             	success: function(response)
             	{
                    $("#movie-title").html(response.Title);
                    $("#poster").attr("src", response.Poster);
                    $("#para").html(response.Plot);
             	}
             });
        }

	});
});