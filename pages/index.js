import { useEffect, useState } from "react";
import axios from "axios";
import SearchBarIndexComp from "../components/searchBarIndex";
import dynamic from "next/dynamic";
import CityInfoHeader from "../components/cityInfoHeader";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import EmptyCityAPICall from "../components/error-components/emptyCityAPICall";
import BadAPICallError from "../components/error-components/badAPICallError";
import EmptyTextfield from "../components/error-components/emptyTextfield";
import SearchInputBig from "../components/error-components/searchInputBig";
import InfoIcon from "@mui/icons-material/Info";
import Link from "next/link";
import * as React from "react";

export default function Home() {
    const [cityProp, setCityProp] = useState(""); //City Name From Search Bar
    const [cityData, setCityData] = useState([]);
    const [mapInfo, setMapInfo] = useState([]);

    const [emptyTextfield, setEmptyTextfield] = useState(false);
    const [emptyCityAPICall, setEmptyCityAPICall] = useState(false);
    const [badAPICall, setBadAPICall] = useState(false);
    const [wordTooLongError, setWordTooLongError] = useState(false);
    const [displayLoading, setDisplayLoading] = useState(false);
    const [displayImages, setDisplayImages] = useState(false);
    const [displayMap, setDisplayMap] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0);
    const [firstLoad, setFirstLoad] = useState(true);
    const router = useRouter();

    function getAllImages(titleToSearch, page, limit) {
        if(titleToSearch.length > 100){
            setDisplayLoading(false);
            setEmptyTextfield(false)
            setEmptyCityAPICall(false)
            setWordTooLongError(true)
            return;
        }
        let APICallString = "http://localhost:8080/api/v1/images/getByTitle/" + titleToSearch + "?page=" + page + "&size=" + limit;
        axios
            .get(APICallString)
            .then(function (response) {
                const responseData = response.data;
                if (response.status === 204) {
                    setEmptyTextfield(false);
                    setEmptyCityAPICall(true);
                    setDisplayLoading(false);
                    setWordTooLongError(false)
                    return;
                }
                if (responseData.content.length !== 0) {
                    setEmptyTextfield(false);
                    setWordTooLongError(false)
                    setMaxPage(responseData["totalPages"] - 1);
                    setCityData(responseData["content"]);
                    setMapInfo(responseData);
                    setDisplayLoading(false);
                    setDisplayImages(true);
                    setDisplayMap(true);
                    return;
                }
                if (responseData.content.length === 0) {
                    setEmptyTextfield(false);
                    setEmptyCityAPICall(true);
                    setDisplayMap(false);
                    setDisplayLoading(false);
                    setDisplayImages(false);
                    setWordTooLongError(false)
                }
            })
            .catch(function (error) {
                if (titleToSearch === "") {
                    setEmptyTextfield(true);
                    setDisplayLoading(false);
                    setWordTooLongError(false)

                } else {
                    setEmptyTextfield(false);
                    setWordTooLongError(false)
                    setBadAPICall(true);
                    setDisplayLoading(false);
                }
            });
    }

    function submitForm(word) {
        setDisplayLoading(true);
        setDisplayMap(false);
        setDisplayImages(false);
        setBadAPICall(false);
        setEmptyCityAPICall(false);
        setCityProp(word);
        getAllImages(word, 1, 8);
    }

    const AllImagesMap = dynamic(
        () => import("../components/AllImagesMap"), // replace '@components/map' with your component's location
        { ssr: false } // This line is important. It's what prevents server-side render
    );

    function handlePageChange(newPage) {
        setCurrentPage(newPage);
        setDisplayMap(false);
        setDisplayImages(false);
        setDisplayLoading(true);
        setBadAPICall(false);
        setEmptyCityAPICall(false);
        getAllImages(cityProp, newPage, 8);
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            const { q } = router.query;
            if (typeof q !== "undefined") {
                if (firstLoad) {
                    setCityProp(q);
                    setDisplayLoading(true);
                    setDisplayImages(false);
                    setDisplayMap(false);
                    setBadAPICall(false);
                    setEmptyCityAPICall(false);
                    getAllImages(q);
                    setFirstLoad(false);
                }
            }
        }
    });

    return (
        <>
            <SearchBarIndexComp changeWord={(word) => setCityProp(word)} submitForm={submitForm} />
            {emptyTextfield && (
                <>
                    <EmptyTextfield />
                </>
            )}
            {emptyCityAPICall && (
                <>
                    <EmptyCityAPICall />
                </>
            )}
            {badAPICall && (
                <>
                    <BadAPICallError />
                </>
            )}
            {wordTooLongError && (
                <>
                    <SearchInputBig/>
                </>
            )}
            {displayMap && (
                <>
                    <div className="map-container">
                        <AllImagesMap mapInfo={cityData} data-testid="mapcomp"/>
                    </div>
                </>
            )}
            {displayImages && (
                <>
                    <div className="city-container">
                        <CityInfoHeader
                            cityProp={cityProp}
                            mapInfo={mapInfo}
                            maxPage={maxPage}
                            currentPage={currentPage}
                            changeCurrentPage={handlePageChange}
                        />
                    </div>
                </>
            )}
            {displayLoading && (
                <>
                    <div style={{ textAlign: "center" }}>
                        <span>Loading...</span>
                        <br />
                        <br />
                        <CircularProgress />
                    </div>
                </>
            )}
        </>
    );
}
