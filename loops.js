function loop_h(alpha){
	var i, j, t = "<pre id="t1">";
	for(i=0; i<10; i++){
		if(i==4||i==5){
			for(j=0; j<7; j++){
				t+=alpha;		
			}
		}else{
			t+=alpha + alpha;
			for(j=0; j<4; j++){
				t+="&nbsp;"
			}
			t+=alpha + alpha;
		}
		t+="<br>";
	}
	t+=<pre>
	return t;
}
function loop_k(alpha){
	var i, j, t = "<br>";
	for(i=0; i<10; i++){
		if(i<=3){
			t+=alpha;
			for(j=3; j>=i; j--){
				t+="&nbsp;"		
			}
			t+=alpha;
		}else if(i==4){
			t+=alpha;
			t+=alpha;
			t+=alpha;
		}else{
			t+=alpha;
			for(j=5; j<=i; j++){
				t+="&nbsp;"
			}
			t+=alpha;
		}
		t+="<br>";
	}
	return t;
}
function loop_n(alpha){
	var t = alpha+alpha+alpha+alpha+alpha+"<br>";
	t+=alpha "	"+"	"+"	"+alpha;
	return t;
}
















