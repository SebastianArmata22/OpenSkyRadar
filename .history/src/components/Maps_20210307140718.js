import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'
import {Marker, Popup } from 'react-leaflet'
const Maps=()=>{
    const position = [52.211154, 21.018596]
    const [markers, setMarkers]=useState([])
    useEffect(()=>{
        fetch("https://opensky-network.org/api/states/all?lamin=19.665860826414725&lomin=51.948812696066994&lamax=22.084266782954526&lomax=52.71085027997479")
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
            {markers && markers.map(marker=><Marker position={[marker[5],marker[6]]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>)
}
        </MapContainer>
    )
}
export default Maps