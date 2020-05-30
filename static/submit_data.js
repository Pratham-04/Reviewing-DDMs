function dataSubmit(){
	
	var myData = "RTs" + "\t" + RT_array.join(" ") + "\n"
	+ "Responses" + "\t" + response_array.join(" ") + "\n"
	+ "Reports" + "\t" + report_array.join(" ") + "\n"
	+ "AlphaGlobal" + "\t" + global.join(" ") + "\n" 
	+ "AlphaLocal" + "\t" + local.join(" ") + "\n" ;
	
	document.getElementById("see_data").value = myData;
		
	
	}