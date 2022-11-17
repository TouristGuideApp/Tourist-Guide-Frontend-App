import "../style/Home.css"
import SearchBarComp from "../components/searchBar";
import CityInfoHeader from "../components/cityInfoHeader";
import {useState} from "react";
import axios from "axios";
import {CircularProgress} from "@mui/material";
import BadAPICallError from "../components/badAPICallError";

function Home() {
    const [cityProp, setCityProp] = useState("")  //City Name From Search Bar
    const [cityData, setCityData] = useState([])
    const [displayLoading, setDisplayLoading] = useState(false)
    const [displayImages, setDisplayImages] = useState(false)
    const [badAPICall, setBadAPICall] = useState(false)

    function getAllImages(titleToSearch) {
        let APICallString = "http://localhost:8080/api/v1/images/getByTitle/" + titleToSearch;
        axios.get(APICallString).then(function (response) {
            const data = response.data
            setCityData(data)
            setDisplayLoading(false)
            setDisplayImages(true)
        }).catch(function (error) {
            console.log(error)
            setBadAPICall(true)
            setDisplayLoading(false)
        })
    }

    function submitForm(word){
        setDisplayLoading(true)
        getAllImages(word)
    }

    return (
        <div className="Home">
            <div className="search-container">
                <div className="searchbar">
                    <SearchBarComp changeWord={word => setCityProp(word)} submitForm={submitForm}/>
                </div>
            </div>
            {displayImages &&
                <>
                    <div className="city-container">
                        <CityInfoHeader cityProp={cityProp} cityData={cityData}/>
                    </div>
                </>
            }
            {badAPICall &&
                <>
                    <BadAPICallError/>
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