$("#generate").click(function(){
	var lorem = $("#lorem");
	lorem.html("");
	var quantity = $("#quantity")[0].valueAsNumber;
	var data = ["Lorem ipsum", "quia dolor sit", "amet", "consectetur"];
	for(var i = 0; i < quantity; i++){
		lorem.append(data[i%data.length] + " ");
	}
})

$("#copy").click(function(){
	var lorem = $("#lorem");
	console.log("Copying Text");
	navigator.clipboard.writeText(lorem.html())
})