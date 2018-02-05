var tallas= {
	"mx":["25 cm","26 cm", "27 cm", "27.5 cm", "28 cm"],
	"usa":["25 pies","26 pies", "27 pies", "28 pies"]
}

function load_tallas(e){
	var lis="";
	var v = e.value;
	console.log(tallas[v])
	for(var i =0;i<tallas[v].length;i++){
		lis+="<li><a>"+ tallas[v][i] +"</a></li>"
	}
	
	$('#tallas-list').html(lis);
}