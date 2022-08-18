function matchesWonByTeams(matches){
    const object ={}
    for(let match  of matches){
 const team= match.winner
 if(object[team]){
    object[team] +=1
 } else {
    object[team]=1
    
 }
    }
    return object
}

module.exports=matchesWonByTeams