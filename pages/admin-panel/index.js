import {useEffect, useState} from "react";
import axios from "axios";
import SearchBarIndexComp from "../../components/searchBarIndex";
import {useRouter} from "next/router";
import {CircularProgress} from "@mui/material";
import FlickrPhotosListResult from "../../components/flickrPhotos/flickrPhotos-list-result"
import * as React from "react";

export default function AdminPanelPage(){
    const [cityProp, setCityProp] = useState("")  //City Name From Search Bar
    const [cityData, setCityData] = useState([])
    const [firstLoad, setFirstLoad] = useState(true)
    const [displayLoading, setDisplayLoading] = useState(false)
    const [displayImagesList, setDisplayImagesList] = useState(false)
    const router = useRouter()


    function getFlickrImages(titleToSearch) {
        let APICallString = "http://localhost:8080/api/v1/flickr/getByTitle/" + titleToSearch;
        axios.get(APICallString)
            .then(function (response) {
                const responseData = response.data
                    setCityData(responseData)
                    setDisplayLoading(false)
                    setDisplayImagesList(true)
            })
    }

    function submitForm(word) {
        setDisplayLoading(true)
        setDisplayImagesList(false)
        setCityProp(word)
       getFlickrImages(word)
    }


    useEffect(() => {
        if (typeof window !== "undefined") {
            const {q} = router.query
            if (typeof q !== "undefined") {
                if (firstLoad) {
                    setCityProp(q)
                    setDisplayLoading(true)
                    setDisplayImagesList(false)
                    getFlickrImages(q)
                    setFirstLoad(false)
                }
            }
        }
    })
    return (
        <>
            <SearchBarIndexComp changeWord={word => setCityProp(word)} submitForm={submitForm}/>
            {displayImagesList &&
                <>
                    <div className="city-container">
                        <FlickrPhotosListResult cityProp={cityProp} cityData={cityData}/>
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

    )
}