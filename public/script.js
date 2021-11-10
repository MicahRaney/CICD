$("#generate").click(function(){
	var lorem = $("#lorem");
	lorem.html("");
	var quantity = $("#quantity")[0].valueAsNumber;
	var data = ["Lorem ipsum", "quia dolor sit", "amet", "consectetur", "Aenean sed", "tristique ante",
	 "in consectetur tellus", "ut sed", "elit massa"];
	for(var i = 0; i < quantity; i++){
		for (var j = 5; j <= Math.random(300)*300 + 5 ; j++) {
			if (j==5) {
				lorem.append("&emsp;&emsp;")
			}
			if (j%7==0){
				lorem.append(data[j%data.length] + ". ");
			}
			lorem.append(data[j%data.length] + " ");
		}
		lorem.append("<br>")
	}
})

$("#copy").click(function(){
	var lorem = $("#lorem");
	console.log("Copying Text");
	navigator.clipboard.writeText(lorem.html())
})