import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import {useState} from "react";
import MarkerClusterGroup from 'react-leaflet-markercluster';
require('leaflet/dist/leaflet.css');
require('react-leaflet-markercluster/dist/styles.min.css');





export default function AllImagesMap ({mapInfo}) {
    const [currentZoom, setCurrentZoom] = useState((mapInfo.zoom) ? mapInfo.zoom : 4)
    const [centerArray, setCenterArray] = useState((mapInfo.center) ? mapInfo.center : [42.54, 25.19])

    
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
      });
    L.Marker.prototype.options.icon = DefaultIcon;

    function MyComponent({getCurrentZoom, getCurrentCenter}) {
        const mapEvents = useMapEvents({
            zoomend: () => {
                getCurrentZoom.call(this, mapEvents.getZoom())
                getCurrentCenter.call(this, mapEvents.getCenter())
            },
        });
        return null
    }

    function returnZoomValue(zoom){
        setCurrentZoom(zoom)
    }

    function returnCenter(centerValue){
        setCenterArray(centerValue)
    }

    function SingleMarker(markerInfo){
        return(
            <Marker position={[markerInfo['lat'], markerInfo['lon']]}>
                <Popup>
                    <span>{markerInfo['title']}</span>
                </Popup>
            </Marker>
        )
    }

    return(
        <>
        <MapContainer center={centerArray} zoom={currentZoom} scrollWheelZoom={true} style={{height: 400, width: "100%", zIndex:"1"}}>
            {/* <MyComponent
                getCurrentZoom={returnZoomValue}
                getCurrentCenter={returnCenter}
            /> */}
            <TileLayer
                attribution=''
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {/* <MarkerClusterGroup> */}
                {mapInfo.map((cityObj)=>
                    {
                    return (
                        <>
                            <SingleMarker
                                id={cityObj.id}
                                title={cityObj.title}
                                lat={cityObj.latitude}
                                lon={cityObj.longitude}
                            />
                        </>
                    )
                    }
                )}
            {/* </MarkerClusterGroup> */}
            <MapContainer/>
        </MapContainer>
        </>
    )

}

