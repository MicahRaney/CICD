// When "Generate" button is clicked, string of words is displayed based on # of paragraphs specified by user
$("#generate").click(function(){
	var lorem = $("#lorem");
	lorem.html("");
	var quantity = $("#quantity")[0].valueAsNumber;
	var data = ["Lorem ipsum", "quia dolor sit", "amet", "consectetur", "Aenean sed", "tristique ante",
	 "in consectetur tellus", "ut sed", "elit massa"];

	// outer for loop controls # of paragraphs
	// inner for loop controls # of words in paragraphs 
	for(var i = 0; i < quantity; i++){
		var numWords = Math.random()*50 + 20
		for (var j = 10; j <= numWords ; j++) {
			var randWord = Math.floor(Math.random() * 8);
			if (j==10) {
				lorem.append("&emsp;&emsp;")
				lorem.append(data[randWord%data.length].charAt(0).toUpperCase() + data[randWord%data.length].slice(1));
			}
			if (j%5==0){
				lorem.append(data[j%data.length] + ". ");
				lorem.append(data[j%data.length].charAt(0).toUpperCase() + data[j%data.length].slice(1));
			}
			lorem.append(data[j%data.length] + " ");
		}
		lorem.append(".")
		lorem.append("<br>")
	}
})

$("#copy").click(function(){
	var lorem = $("#lorem");
	console.log("Copying Text");
	navigator.clipboard.writeText(lorem.text());
})