import {useState} from "react";
import axios from "axios";
import SearchBarComp from "../components/searchBar";
import dynamic from "next/dynamic";
import CityInfoHeader from "../components/cityInfoHeader";
import {CircularProgress} from "@mui/material";

export default function Home() {
    const [cityProp, setCityProp] = useState("")  //City Name From Search Bar
    const [cityData, setCityData] = useState([])
    const [displayLoading, setDisplayLoading] = useState(false)
    const [displayImages, setDisplayImages] = useState(false)
    const [displayMap, setDisplayMap] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPage, setMaxPage] = useState(0)

    function getAllImages(titleToSearch, page, limit) {
        let APICallString = "http://localhost:8080/api/v1/images/getByTitle/" + titleToSearch + "?page=" + page + "&size=" + limit;
        axios.get(APICallString).then(function (response) {
            const data = response.data
            setMaxPage(data['totalPages']-1)
            setCityData(data["content"])
            setDisplayLoading(false)
            setDisplayImages(true)
            setDisplayMap(true)
        }).catch(function (error) {
            console.log(error)
        })
    }

    function submitForm(word){
        setDisplayLoading(true)
        setCityProp(word)
        getAllImages(word, 1, 8)
    }

    const AllImagesMap = dynamic(
        () => import('../components/AllImagesMap'), // replace '@components/map' with your component's location
        { ssr: false } // This line is important. It's what prevents server-side render
    )

    function handlePageChange(newPage){
        setCurrentPage(newPage)
        setDisplayMap(false)
        setDisplayImages(false)
        setDisplayLoading(true)
        getAllImages(cityProp, newPage, 8)
    }

    return (

        <div className="Home">
            <div className="search-container">
                <div className="searchbar">
                    <SearchBarComp changeWord={word => setCityProp(word)} submitForm={submitForm}/>
                </div>
            </div>
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
                        <CityInfoHeader cityProp={cityProp} cityData={cityData} maxPage={maxPage} currentPage={currentPage} changeCurrentPage={handlePageChange}/>
                    </div>
                </>
            }
            {displayLoading &&
                <>
                    <div style={{textAlign: 'center'}}>
                        <span>Loading...</span>
                        <br/>
                        <br/>
                        <CircularProgress />
                    </div>
                </>
            }
        </div>
    );
}