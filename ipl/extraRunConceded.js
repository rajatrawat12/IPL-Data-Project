function extraRunConceded(matches2016,deliveries){
    const matchesid= matches2016.map(eachmatch => eachmatch.id)
    const object={}
    for(delivery of deliveries){
if(matchesid.includes(delivery.match_id)){
        const extraRun = delivery.extra_runs;
        const team = delivery.bowling_team;
        if(object[team]){
            object[team] += parseInt(extraRun); 
        }else{
            object[team] = parseInt(extraRun)
        }
}
    }
    return object;
}
module.exports = extraRunConceded