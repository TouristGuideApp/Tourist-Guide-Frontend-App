import "../style/Home.css"
import SearchBarComp from "../components/searchBar";
import CityInfoHeader from "../components/cityInfoHeader";
import {useState} from "react";
import axios from "axios";
import {CircularProgress} from "@mui/material";
// import dynamic from "next/dynamic";
import AllImagesMap from "../components/AllImagesMap";

function Home() {
    const [cityProp, setCityProp] = useState("")  //City Name From Search Bar
    const [cityData, setCityData] = useState([])
    const [displayLoading, setDisplayLoading] = useState(false)
    const [displayImages, setDisplayImages] = useState(false)
    const [displayMap, setDisplayMap] = useState(false)

    function getAllImages(titleToSearch) {
        let APICallString = "http://localhost:8080/api/v1/images/getByTitle/" + titleToSearch;
        axios.get(APICallString).then(function (response) {
            const data = response.data
            setCityData(data)
            setDisplayLoading(false)
            setDisplayImages(true)
            setDisplayMap(true)
        }).catch(function (error) {
            console.log(error)
        })
    }

    function submitForm(word){
        setDisplayLoading(true)
        getAllImages(word)
    }

    // const AllImagesMap = dynamic(
    //     ()=> import('../components/AllImagesMap'),
    //     {ssr: false}
    // )

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
                        <CityInfoHeader cityProp={cityProp} cityData={cityData}/>
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

export default Home;
