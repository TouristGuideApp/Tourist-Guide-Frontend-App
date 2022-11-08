import "../style/Home.css"
import SearchBarComp from "../components/searchBar";
import CityInfoHeader from "../components/CityInfoHeader";
import {useState} from "react";
import axios from "axios";

function Home() {
    const [cityProp, setCityProp] = useState("")  //City Name From Search Bar
    const [cityData, setCityData] = useState([])

    function getAllImages() {
        let APICallString = "http://localhost:8080/api/v1/images/getByTitle/Thessaloniki";
        axios.get(APICallString).then(function (response) {
            const data = response.data
            setCityData(data)
            console.log(data)
        }).catch(function (error) {
            console.log(error)
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        getAllImages()
    }

    return (

        <div className="Home">
            <div className="search-container">
                <div className="searchbar">
                    {/*<button onClick={e => getAllImages()}>Click me</button>*/}
                    <SearchBarComp changeWord={word => setCityProp(word)} submitForm={handleFormSubmit}/>
                </div>
            </div>
            <div className="city-container">
                <CityInfoHeader cityProp={cityProp} cityData={cityData}/>
            </div>
        </div>
    );
}

export default Home;
