
const getData=(bounds,setMarkers)=>{
    console.log("fgsd")
    fetch(`https://opensky-network.org/api/states/all?lamin=${bounds.lamin}&lomin=${bounds.lomin}&lamax=${bounds.lamax}&lomax=${bounds.lomax}`)
    .then(response=>response.json())
    .then(data=>setMarkers(data.states))
}
export default getData