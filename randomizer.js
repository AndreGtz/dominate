
/*process.argv.forEach(function (val,index,array){
	console.log(index+': '+val);
});*/

var scoreA = process.argv[2];
var scoreD = process.argv[3];

while(scoreA>0 && scoreD>0){
	var attacker = randomInt(1,20);
	var defender = randomInt(1,20);
		//  scoreA   scoreD
	if(attacker>defender){
		scoreD-=1;
	}
	else if(attacker<defender){
		scoreA-=1;
	}
	console.log('A:'+(attacker>9?attacker:'0'+attacker)+' vs D:'+(defender>9?defender:'0'+defender)+' score A:'+scoreA+' D:'+scoreD);

}

if(scoreA==0){
	console.log('the winner is defender '+scoreA+' to '+scoreD);
}
else if(scoreD==0){
	console.log('the winner is attacker '+scoreA+' to '+scoreD);
}

function randomInt(low,high){
	return Math.floor(Math.random()*(high-low+1)+low);
}
