import MarkerClusterGroup from 'react-leaflet-markercluster';
require('react-leaflet-markercluster/dist/styles.min.css');
import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from "leaflet";
import Link from "next/link";
import {useState} from "react";

function MyComponent({getCurrentZoom, getCurrentCenter}) {
    const mapEvents = useMapEvents({
        zoomend: () => {
            getCurrentZoom.call(this, mapEvents.getZoom())
            getCurrentCenter.call(this, mapEvents.getCenter())
        },
    });
    return null
}

const AllImagesMap = (mapInfo) => {
    const [currentZoom, setCurrentZoom] = useState((mapInfo.zoom) ? mapInfo.zoom : 4)
    const [centerArray, setCenterArray] = useState((mapInfo.center) ? mapInfo.center : [37.98,23.72])

    L.Icon.Default.imagePath = "/img/";

    function returnZoomValue(zoom){
        setCurrentZoom(zoom)
    }

    function returnCenter(centerValue){
        setCenterArray(centerValue)
    }

    return (
        <MapContainer center={centerArray} zoom={currentZoom} scrollWheelZoom={true} style={{height: 400, width: "100%", zIndex:"1"}}>
            <MyComponent
                getCurrentZoom={returnZoomValue}
                getCurrentCenter={returnCenter}
            />
            <TileLayer
                attribution=''
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup>
                {mapInfo.mapInfo.map((imgObj) => {
                    return (
                        <>
                            <SingleMarker
                                id={imgObj.id}
                                name={imgObj.title}
                                lat={imgObj.latitude}
                                lon={imgObj.longitude}
                            />
                        </>
                    )
                })}
            </MarkerClusterGroup>
            <MapContainer/>
        </MapContainer>
    )
}

export default AllImagesMap


function SingleMarker (markerInfo){
    let singleImageLink = '/image/' + markerInfo['id']
    return (
        <>
            <Marker position={[markerInfo["lat"], markerInfo["lon"]]}>
                <Popup>
                    <Link href={singleImageLink}>
                        <a>{markerInfo['name']}</a>
                    </Link>
                </Popup>
            </Marker>
        </>
    )
}