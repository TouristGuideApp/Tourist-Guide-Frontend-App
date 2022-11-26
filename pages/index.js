import {useEffect, useState} from "react";
import axios from "axios";
import SearchBarIndexComp from "../components/searchBarIndex";
import dynamic from "next/dynamic";
import CityInfoHeader from "../components/cityInfoHeader";
import {CircularProgress} from "@mui/material";
import {useRouter} from "next/router";
import EmptyCityAPICall from "../components/emptyCityAPICall";

export default function Home() {
    const [cityProp, setCityProp] = useState("")  //City Name From Search Bar
    const [cityData, setCityData] = useState([])
    const [mapInfo, setMapInfo] = useState([])

    const [emptyCityAPICall, setEmptyCityAPICall] = useState(false)
    const [displayLoading, setDisplayLoading] = useState(false)
    const [displayImages, setDisplayImages] = useState(false)
    const [displayMap, setDisplayMap] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPage, setMaxPage] = useState(0)
    const [firstLoad, setFirstLoad] = useState(true)
    const router = useRouter()

    function getAllImages(titleToSearch, page, limit) {
        let APICallString = "http://localhost:8080/api/v1/images/getByTitle/" + titleToSearch + "?page=" + page + "&size=" + limit;
        axios.get(APICallString)
            .then(function (response) {
                if (response.data.length !== 0) {
                    console.log(response.status)
                    const data = response.data
                    setMaxPage(data['totalPages'] - 1)
                    setCityData(data["content"])
                    setCityData(data)
                    setMapInfo(data)
                    setDisplayLoading(false)
                    setDisplayImages(true)
                    setDisplayMap(true)
                    console.log(data)
                } else if (response.data.length === 0) {
                    setEmptyCityAPICall(true)
                    setDisplayMap(false)
                    setDisplayLoading(false)
                    setDisplayImages(false)
                }
            }).catch(function (error) {
            console.log(error)
        })
    }

    function submitForm(word) {
        setDisplayLoading(true)
        setCityProp(word)
        getAllImages(word, 1, 8)
    }

    const AllImagesMap = dynamic(
        () => import('../components/AllImagesMap'), // replace '@components/map' with your component's location
        {ssr: false} // This line is important. It's what prevents server-side render
    )


    function handlePageChange(newPage) {
        setCurrentPage(newPage)
        setDisplayMap(false)
        setDisplayImages(false)
        setDisplayLoading(true)
        getAllImages(cityProp, newPage, 8)
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            const {q} = router.query
            if (typeof q !== "undefined") {
                if (firstLoad) {
                    setCityProp(q)
                    setDisplayLoading(true)
                    setDisplayImages(false)
                    setDisplayMap(false)
                    getAllImages(q)
                    setFirstLoad(false)
                }
            }
        }
    })


    return (
        <>
            <SearchBarIndexComp changeWord={word => setCityProp(word)} submitForm={submitForm}/>
            {emptyCityAPICall &&
                <>
                    <EmptyCityAPICall/>
                </>


            }
            {displayMap &&
                <>
                    <div className="map-container">
                        <AllImagesMap
                            mapInfo={cityData}
                        />
                    </div>
                </>
            }
            {displayImages &&
                <>
                    <div className="city-container">
                        <CityInfoHeader cityProp={cityProp} mapInfo={mapInfo} maxPage={maxPage}
                                        currentPage={currentPage} changeCurrentPage={handlePageChange}/>
                    </div>
                </>
            }
            {displayLoading &&
                <>
                    <div style={{textAlign: 'center'}}>
                        <span>Loading...</span>
                        <br/>
                        <br/>
                        <CircularProgress/>
                    </div>
                </>
            }
        </>
    );
}