import { map } from 'leaflet'
import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'
import {Marker, Popup } from 'react-leaflet'
const Maps=()=>{
    const position = [52.211154, 21.018596]
    const [markers, setMarkers]=useState([])
    const mapRef = useRef(null);
    const getData=()=>{
        const bounds = mapRef.current.leafletElement.getBounds();
        fetch(`https://opensky-network.org/api/states/all?lamin=${bounds._southWest.lat}&lomin=${bounds._southWest.lng}&lamax=${bounds._northEast.lat}&lomax=${bounds._northEast.lng}`)
        .then(response=>response.json())
        .then(data=>setMarkers(data.states))

    }
    useEffect(()=>{
        getData()

    },[])
    return(
        <MapContainer  ref={mapRef} center={position} zoom={9} scrollWheelZoom={true} style={{height: "100vh"}}>
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
        </MapContainer>
    )
}
export default Maps