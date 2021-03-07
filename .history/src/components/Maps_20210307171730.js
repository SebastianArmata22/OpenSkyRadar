import { bounds, map } from 'leaflet'
import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap, MapConsumer, useMapEvent} from 'react-leaflet'
import {Marker, Popup } from 'react-leaflet'
const MapChildren=({setBounds})=>{
    const map = useMapEvent('moveend',()=>{
        console.log(map.getBounds()._northEast.lat)
        setBounds(map.getBounds())
    })
    return null
}
const Maps=()=>{
    const [bounds, setBounds]=useState()
    const position = [52.211154, 21.018596]
    const [markers, setMarkers]=useState([])
    useEffect(()=>{
        fetch("https://opensky-network.org/api/states/all?lamin=51.948812696066994&lomin=19.665860826414725&lamax=52.71085027997479&lomax=22.084266782954526")
        .then(response=>response.json())
        .then(data=>setMarkers(data.states))

    },[])
    return(
        <MapContainer center={position} zoom={9} scrollWheelZoom={true} style={{height: "100vh"}}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers && markers.map(marker=><Marker position={[marker[6],marker[5]]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>)
            }
            <MapChildren bounds={setBounds}></MapChildren>
        </MapContainer>
    )
}
export default Maps