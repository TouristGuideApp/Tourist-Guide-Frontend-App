import { useEffect, useState } from "react";
import axios from "axios";
import SearchBarIndexComp from "../components/searchBarIndex";
import dynamic from "next/dynamic";
import CityInfoHeader from "../components/cityInfoHeader";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import EmptyCityAPICall from "../components/error-components/emptyCityAPICall";
import BadAPICallError from "../components/error-components/badAPICallError";
import InfoIcon from "@mui/icons-material/Info";
import Link from "next/link";
import * as React from "react";
import Head from "next/head";

import EmptyTextfield from "../components/error-components/emptyTextfield";

export default function Home() {
    const [cityProp, setCityProp] = useState(""); //City Name From Search Bar
    const [cityData, setCityData] = useState([]);
    const [mapInfo, setMapInfo] = useState([]);

    const [emptyCityAPICall, setEmptyCityAPICall] = useState(false);
    const [badAPICall, setBadAPICall] = useState(false);
    const [emptyCityTextfield, setEmptyCityTextfield] = useState(false);

    const [displayLoading, setDisplayLoading] = useState(false);
    const [displayImages, setDisplayImages] = useState(false);
    const [displayMap, setDisplayMap] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0);
    const [firstLoad, setFirstLoad] = useState(true);
    const router = useRouter();

    function getAllImages(titleToSearch, page, limit) {
        const onlyLetterTitleToSearch = titleToSearch.replace(/[^a-z]/gi, "");
        console.log(onlyLetterTitleToSearch);
        if (onlyLetterTitleToSearch !== "") {
            let APICallString =
                "http://localhost:8080/api/v1/images/getByTitle/" + onlyLetterTitleToSearch + "?page=" + page + "&size=" + limit;
            axios
                .get(APICallString)
                .then(function (response) {
                    const responseData = response.data;
                    if (response.status === 204) {
                        setEmptyCityTextfield(false);
                        setEmptyCityAPICall(true);
                        setDisplayLoading(false);
                        return;
                    }
                    if (responseData.content.length !== 0) {
                        setEmptyCityTextfield(false);
                        setMaxPage(responseData["totalPages"] - 1);
                        setCityData(responseData["content"]);
                        setMapInfo(responseData);
                        setDisplayLoading(false);
                        setDisplayImages(true);
                        setDisplayMap(true);
                        return;
                    }
                    if (responseData.content.length === 0) {
                        setEmptyCityTextfield(false);
                        setEmptyCityAPICall(true);
                        setDisplayMap(false);
                        setDisplayLoading(false);
                        setDisplayImages(false);
                    }
                })
                .catch(function (error) {
                    if (titleToSearch === "" || titleToSearch === null) {
                        setEmptyCityTextfield(true);
                        setDisplayLoading(false);
                    } else {
                        setEmptyCityTextfield(false);
                        setBadAPICall(true);
                        setDisplayLoading(false);
                    }
                });
        } else {
            setEmptyCityTextfield(true);
            setDisplayLoading(false);
        }
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
            <Head>
                <title>Home | Tourist Guide</title>
            </Head>
            <SearchBarIndexComp changeWord={(word) => setCityProp(word)} submitForm={submitForm} />
            {emptyCityTextfield && (
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
            {displayMap && (
                <>
                    <div className="map-container">
                        <AllImagesMap mapInfo={cityData} />
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
