var WikipediaLink =
{
	init: function()
	{
		var link = document.getElementById("wikipedia");
		link.onclick = WikipediaLink.clickHandler;
	},

	clickHandler: function()
	{
		if (!confirm("Are you sure you want to leave this site?"))
		{
			return false;
		}
	}
};

WikipediaLink.init();
