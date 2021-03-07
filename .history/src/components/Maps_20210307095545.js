import React from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'
//import {Marker, Popup } from 'react-leaflet'
const Maps=()=>{
    const position = [52.211154, 21.018596]
    return(
        <MapContainer center={position} zoom={9} scrollWheelZoom={true} style={{height: "100vh"}}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/*<Marker position={position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
    */}
        </MapContainer>
    )
}
export default Maps