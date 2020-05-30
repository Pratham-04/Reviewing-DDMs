function runTrials(returnValue){
	
	var startTime, myVar, i, j, reporting = 0, trialsDone = 0;
	
	if(returnValue==0){
		
		console.log("done");
		document.getElementById("proceed").type = "submit";
		dataSubmit();
		return;
		
	}
	
	trials();
	function trials(){
		
		trialsDone = trialsDone + 1;
		console.log(trialsDone);
		if(toReport_array.includes(trialsDone)){ reporting = 1; }
		
		setTimeout(function(){
			
				document.getElementById("stimulus").innerHTML = '<center style="font-size:60px;margin-top:200px;font-weight:1000;">+</center>';
				document.getElementById("stimulus").style.color = 'black';
				
			}, 1000);
			
		setTimeout(function(){
			
			document.getElementById("stimulus").style.color = 'white';
			
		}, 2000);
		
		report_array.push("NA");
		
		myVar = setTimeout(function(){
			
			console.log("inside trials", trialsDone);
			document.getElementById("stimulus").style.color = 'black';
			
			if(trialID=="beep"){
				
				if(Math.random()<0.5){
					i = alpha_array.length - 1
					j = Math.floor(Math.random()*(loop_array.length -1));
				}else{
					j = alpha_array.length - 1
					i = Math.floor(Math.random()*(loop_array.length -1));
				}
				
			}else{
				
				i = Math.floor(Math.random()*alpha_array.length);
				j = Math.floor(Math.random()*loop_array.length);
				
			}
			
			local.push(alpha_array[i]);
			var t = loop_array[j].name;
			var t1 = t.toUpperCase();
			global.push(t1.charAt(5));
			console.log(t,t1);
			startTime = Date.now();
			document.getElementById("stimulus").innerHTML = loop_array[j](alpha_array[i]);
			
		}, 3000);
	}
	
	document.addEventListener("keydown", function(key){ 
		
		if(reporting==2){

			if(trialID=="local"){
				
				var str = loop_array[j].name;
				var letter = str.charCodeAt(5) - 32;
				console.log(str.charCodeAt(5) - 32);
				console.log(key.keyCode);
				report_array.pop();
				report_array.push(letter == key.keyCode);
				document.getElementById("feedback").style.color = 'white';
				reporting = 0;
				console.log("look here rep", trialsDone);
				
			}else if(trialID=="global"){
				
				document.getElementById("feedback").style.color = 'white';
				reporting = 0;
				report_array.pop();
				report_array.push(String.fromCharCode(key.keyCode)==alpha_array[i]);
				
			}
			
		}else{
	
			RT = Date.now() - startTime;
			console.log(RT);
			RT_array.push(RT);
			document.getElementById("stimulus").style.color = 'white';
			console.log(key.keyCode);

			if(((key.keyCode==77&&(loop_array[j]==loop_m||alpha_array[i]=="M"))||(key.keyCode==90&&(loop_array[j]==loop_z||alpha_array[i]=="Z")))&&trialID!="beep"){
			
				document.getElementById("feedback").style.color = 'black';
				document.getElementById("feedback").innerHTML = "Correct Answer!";
				response_array.push(1);

			}else if(key.keyCode!=77&&key.keyCode!=90){
			
				document.getElementById("feedback").style.color = 'black';
				document.getElementById("feedback").innerHTML = "You can press only M or Z!";
				response_array.push(2);

			}else if(trialID!="beep"){
	
				document.getElementById("feedback").style.color = 'black';
				document.getElementById("feedback").innerHTML = "Incorrect Answer!";
				response_array.push(0);

			}
		}

		
		setTimeout(function(){
			
			document.getElementById("feedback").style.color = 'white';
			
		}, 1000);
		
		if(reporting==1){
			
			reporting = 2;
			setTimeout(function(){
				console.log("inside reporting", trialsDone);
				document.getElementById("feedback").style.color = 'black';
				document.getElementById("feedback").innerHTML = "What letter other than M or Z did you see?";
			}, 1500);
		
		}else if(trialsDone>=numTrials){
			
			console.log("removing listener now");
			this.removeEventListener("keydown", arguments.callee);
			return runTrials(0);
			
		}else{
			
			trials();
			console.log("look here", trialsDone);
			
		}
		
	});
		
}










