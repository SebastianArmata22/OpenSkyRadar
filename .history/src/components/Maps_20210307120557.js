import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'
//import {Marker, Popup } from 'react-leaflet'
const Maps=()=>{
    const position = [52.211154, 21.018596]
    const [markers, setMarkers]=useState([])
    useEffect(()=>{
        fetch("https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226")
        .then(response=>response.json())
        .then(data=>setMarkers(data.states))

    },[])
    console.log(markers)
    return(
        <MapContainer center={position} zoom={9} scrollWheelZoom={true} style={{height: "100vh"}}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map(marker=><Marker position={[marker[5],marker[6]]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>)
}
        </MapContainer>
    )
}
export default Maps