function matchesWonByGujarat(matches){
    
    let  count= 0
    for(let match  of matches){
  const team = match.winner
 if(team ==='Gujarat Lions')
   count++
 }

    return count
}
module.exports=matchesWonByGujarat