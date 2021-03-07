import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer,useMapEvent} from 'react-leaflet'
import {Marker, Popup } from 'react-leaflet'
const MapChildren=({setBounds})=>{
    const map = useMapEvent('moveend',()=>{
        console.log(map.getBounds({lamin: map.getBounds()._southWest.lat, lomin: map.getBounds()._southWest.lng, lamax: map.getBounds()._northEast.lat, lomax: map.getBounds()._northEast.lng}))
        setBounds({lamin: map.getBounds()._southWest.lat, lomin: map.getBounds()._southWest.lng, lamax: map.getBounds()._northEast.lat, lomax: map.getBounds()._northEast.lng})
    })
    return null
}
const Maps=()=>{
    const [bounds, setBounds]=useState({lamin: "51.948812696066994", lomin: "19.665860826414725", lamax:"52.71085027997479", lomax: "22.084266782954526"})
    const position = [52.211154, 21.018596]
    const [markers, setMarkers]=useState([])
    useEffect(()=>{
        console.log(`https://opensky-network.org/api/states/all?lamin=${bounds.lamin}&lomin=${bounds.lomin}&lamax=${bounds.lamax}&lomax=${bounds.lomax}`)
        fetch(`https://opensky-network.org/api/states/all?lamin=${bounds.lamin}&lomin=${bounds.lomin}&lamax=${bounds.lamax}&lomax=${bounds.lomax}`)
        .then(response=>response.json())
        .then(data=>setMarkers(data.states))

    },[bounds])
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
            <MapChildren setBounds={setBounds}></MapChildren>
        </MapContainer>
    )
}
export default Maps