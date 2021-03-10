import {useMapEvent} from 'react-leaflet'
const MapChildren=({setBounds})=>{
    const map = useMapEvent('moveend',()=>{
        setBounds({lamin: map.getBounds()._southWest.lat, lomin: map.getBounds()._southWest.lng, lamax: map.getBounds()._northEast.lat, lomax: map.getBounds()._northEast.lng})
    })
    return null
}
export default MapChildren