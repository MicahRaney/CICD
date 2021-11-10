$("#generate").click(function(){
	var lorem = $("#lorem");
	lorem.html("");
	var quantity = $("#quantity")[0].valueAsNumber;
	var data = ["Lorem ipsum", "quia dolor sit", "amet", "consectetur"];
	lorem.append("<p>")
	for(var i = 0; i < quantity; i++){
		lorem.append(data[i%data.length] + " ");
	}
	lorem.append("</p>")
})