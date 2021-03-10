import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'
import { Popup } from 'react-leaflet'
import Marker from 'react-leaflet-enhanced-marker'
import plane from '../plane.svg'
import MapChildren from './MapChildren'

const getData=(bounds,setMarkers)=>{
    fetch(`https://opensky-network.org/api/states/all?lamin=${bounds.lamin}&lomin=${bounds.lomin}&lamax=${bounds.lamax}&lomax=${bounds.lomax}`)
    .then(response=>response.json())
    .then(data=>setMarkers(data.states))
}
const Maps=()=>{
    const [bounds, setBounds]=useState({lamin: "51.948812696066994", lomin: "19.665860826414725", lamax:"52.71085027997479", lomax: "22.084266782954526"})
    const position = [52.211154, 21.018596]
    const [markers, setMarkers]=useState([])
    useEffect(()=>{
        getData(bounds,setMarkers)

    },[bounds])
    return(
        <MapContainer center={position} zoom={9} scrollWheelZoom={true} style={{height: "100vh"}}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers && markers.map(marker=><Marker id={marker[0]} position={[marker[6],marker[5]]} icon={<img src={plane} alt="p" style={{width:'20px',transform: `rotate(${marker[10]}deg)`}}></img>}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>)
            }
            <MapChildren setBounds={setBounds}></MapChildren>
        </MapContainer>
    )
}
export default Maps