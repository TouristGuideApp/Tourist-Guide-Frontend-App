import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Stack, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Pagination } from "@mui/lab";
import {useEffect, useState} from "react";
import Link from "next/link";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddToCollectionModal from "./addToCollectionModal";
import AddToCollectionSavedSuccessModal from "./addToCollectionSavedSuccessModal";
import AddToCollectionSavedErrorModal from "./addToCollectionSavedErrorModal";
import AddToCollectionAddNewCollectionModal from "./addToCollectionAddNewCollectionModal";

function CityInfoHeader({ mapInfo, cityProp, maxPage, currentPage, changeCurrentPage }) {
    const [page, setPage] = useState(currentPage);
    const [displaySaveIcon, setDisplaySaveIcon] = useState(false)
    const [firstLoad, setFirstLoad] = useState(true)
    const [collectionModal, setCollectionModal] = useState(false)
    const [newCollectionModal, setNewCollectionModal] = useState(false)
    const [imageIDToSave, setImageIDToSave] = useState(0)

    const [savedSuccess, setSavedSuccess] = useState(false)
    const [savedError, setSavedError] = useState(false)

    const [newCollectionName, setNewCollectionName] = useState("")
    const [newCollectionDescription, setNewCollectionDescription] = useState("")
    const [newCollectionIsPublic, setNewCollectionIsPublic] = useState(true)

    function checkUserLoggedIn(){
        const userToken = localStorage.getItem("userJWT")
        if (userToken !== null){
            setDisplaySaveIcon(true)
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (firstLoad) {
                checkUserLoggedIn()
                setFirstLoad(false)
            }
        }
    })

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
        changeCurrentPage.call(this, newPage);
    };

    function openCollectionModal(imageID){
        setImageIDToSave(imageID)
        setCollectionModal(true)
    }

    function saveImageToExistingCollection(collectionID){
        const userToken = localStorage.getItem("userJWT")
        const axios = require('axios');
        let data = JSON.stringify({
            "Bearer": userToken,
            "image_id": imageIDToSave,
            "user_collection_id": collectionID
        });

        let config = {
            method: 'post',
            url: '/api/v1/user-collection-images/add',
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
            .then(function (response) {
                const allResponse = response.data
                setCollectionModal(false)
                setSavedSuccess(true)
            })
            .catch(function (error) {
                setCollectionModal(false)
                setSavedError(true)
            });
    }

    function handleNewCollectionClick(){
        setCollectionModal(false)
        setNewCollectionModal(true)
    }

    function createNewCollection(){
        const userToken = localStorage.getItem("userJWT")
        const axios = require('axios');
        let data = JSON.stringify({
            "Bearer": userToken,
            "name": newCollectionName,
            "description": newCollectionDescription,
            "public": newCollectionIsPublic
        });

        let config = {
            method: 'post',
            url: '/api/v1/user-collections/add',
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
            .then(function (response) {
                const allResponse = response.data
                setNewCollectionModal(false)
                setNewCollectionIsPublic(true)
                setNewCollectionDescription("")
                setNewCollectionName("")
                saveImageToExistingCollection(allResponse['id'])
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <>
            <div className="city-name">
                <h1>{cityProp.toUpperCase()}</h1>
                <hr />
            </div>
            <Stack alignItems="center">
                <Pagination count={maxPage} onChange={handlePageChange} page={page}/>
            </Stack>
            <ImageList sx={{ width: "100%", height: "100%" }}>
                <ImageListItem key="Subheader" cols={4}></ImageListItem>
                {mapInfo.content.map((cityObj) => {
                    return (
                        <>
                            <ImageListItem key={cityObj.img}>
                                <img
                                    style={{ width: "100%", height: "350px" }}
                                    src={cityObj.thumbnail}
                                    alt="Image Could Not be Load"
                                    loading={"lazy"}
                                />
                                <ImageListItemBar
                                    sx={{ fontFamily: "Ubuntu" }}
                                    title={cityObj.title}
                                    subtitle={"Views : " + cityObj.views}
                                    actionIcon={
                                        <IconButton
                                            sx={{ color: "rgba(255, 255, 255, 0.6)" }}
                                            aria-label={`info about ${cityObj.title}`}
                                        >
                                            {displaySaveIcon &&
                                                <Tooltip title={"Save Image"} placement="top" arrow>
                                                    <BookmarkBorderIcon style={{ marginRight: "10px" }} onClick={() => openCollectionModal(cityObj.id)}/>
                                                </Tooltip>
                                            }
                                            <Tooltip title={"Total Views: " + cityObj.views} placement="top" arrow>
                                                <VisibilityIcon style={{ marginRight: "10px" }} />
                                            </Tooltip>
                                            <Link href={"/image/" + cityObj.id}>
                                                <InfoIcon />
                                            </Link>
                                        </IconButton>
                                    }
                                />
                            </ImageListItem>
                        </>
                    );
                })}
            </ImageList>
            {collectionModal &&
                <AddToCollectionModal
                    onClose={() => setCollectionModal(false)}
                    onExistingCollectionClick={saveImageToExistingCollection}
                    onNewCollectionClick={handleNewCollectionClick}
                />
            }
            {newCollectionModal &&
                <AddToCollectionAddNewCollectionModal
                    onClose={() => setNewCollectionModal(false)}
                    name={newCollectionName}
                    nameChange={(e) => setNewCollectionName(e.target.value)}
                    description={newCollectionDescription}
                    descriptionChange={(e) => setNewCollectionDescription(e.target.value)}
                    isPublic={newCollectionIsPublic}
                    isPublicChange={(e) => setNewCollectionIsPublic(e.target.value)}
                    saveClick={createNewCollection}
                />
            }
            {savedSuccess &&
                <AddToCollectionSavedSuccessModal
                    onClose={() => setSavedSuccess(false)}
                />
            }
            {savedError &&
                <AddToCollectionSavedErrorModal
                    onClose={() => setSavedError(false)}
                />
            }
        </>
    );
}

export default CityInfoHeader;
