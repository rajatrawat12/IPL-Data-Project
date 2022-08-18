const csv = require("csvtojson")
const matchesPlayedPerYear=require('./ipl/matchesPlayedPerYear')
const matchesWonByTeams= require('./ipl/matchesWonByTeams')
const extraRunConceded= require('./ipl/extraRunConceded')
const matchesWonByGujarat=require('./ipl/matchesWonByGujarat')
const economicalBowlers= require('./ipl/economicalBowlers')
const MATCHES_FILE_PATH = "./csv.data/matches.csv"
const DELIVERIES_FILE_PATH= "./csv.data/deliveries.csv"
function main(){
csv()
.fromFile(MATCHES_FILE_PATH)
.then(matches =>{
csv()
.fromFile(DELIVERIES_FILE_PATH)
.then(deliveries =>{
   // console.log(matchesPlayedPerYear(matches))
    //console.log(matchesWonByTeams(matches))
    //console.log(extraRunConceded (matches,deliveries))
    // let result =matchesPlayedPerYear(matches)
    // saveMatchesPlayedPerYear(result)
    console.log(matchesPlayedPerYear(matches))
    console.log(matchesWonByTeams(matches))
    const matches2016 = matches.filter((eachMatch)=>eachMatch.season==='2016')
    console.log(extraRunConceded (matches2016,deliveries))
    const matches2015 = matches.filter((eachMatch)=>eachMatch.season==='2015')
    console.log(economicalBowlers(deliveries,matches2015) )
    console.log(matchesWonByGujarat(matches))

})
})
}

main()