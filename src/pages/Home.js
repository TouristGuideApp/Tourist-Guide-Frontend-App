import "../style/Home.css"
import SearchBarComp from "../components/searchBar";
import CityInfoHeader from "../components/City-info-Header";
import {useEffect, useState} from "react";

function Home() {

    const [imagesSerialized, setImagesSerialized] = useState([])
    const [firstLoad, setFirstLoad] = useState(true)


    function getAllImages(query){                                               //ayto to kaloyme apo to search bar dinontas toy to swsto Query
        const axios = require('axios')
        let config = {
            method: 'get',
            url: "localhost:8080/api/v1/images/getByTitle/" + query,
            headers: {

            }
        }

        axios(config)
            .then(function (response){
                const allResponse = response.data
                serializeImages(allResponse)
            })
            .catch(function (error){
                console.log(error);
            })
    }

    function serializeImages(response){
        let imagesArray = []
        for(let i = 0; i<response['images'].length; i++){                      //otidhpote edw gia na metrhsw to length

            let imageObj = {
                id: response['images'][i]['id'],
                title: response['images'][i]['title'],
                description: response['images'][i]['description']
            }
            imagesArray.push(imageObj)
        }
        setImagesSerialized(imagesArray)
    }


    useEffect(() => {
        if (typeof window !== "undefined"){
            if(firstLoad){
                getAllImages("Thessaloniki")
                setFirstLoad(false)
                console.log(imagesSerialized)
            }
        }
    }, [firstLoad, getAllImages, imagesSerialized])




    return (
        <div className="Home">
            <div className="search-container">
                <div className="searchbar">
                    <SearchBarComp
                        changeSearchQuery={getAllImages}
                    />
                </div>
            </div>
            <div className="city-container">
                <CityInfoHeader/>
            </div>
        </div>
    );
}

export default Home;
