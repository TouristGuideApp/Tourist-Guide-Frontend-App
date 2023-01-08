import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Grid, IconButton, List, ListItem, ListItemText, Typography} from "@mui/material";
import Head from 'next/head';
import EditIcon from '@mui/icons-material/Edit';
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageListItem from "@mui/material/ImageListItem";
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteCollectionDialog from "../components/collections-page/delete-collection-dialog";
import ErrorDelete from "../components/collections-page/error-delete";
import SuccessDelete from "../components/collections-page/success-delete";
import AddToCollectionAddNewCollectionModal from "../components/addToCollectionAddNewCollectionModal";
import EditCollectionModal from "../components/collections-page/edit-collection";
import SuccessEdit from "../components/collections-page/success-edit";
import ErrorEdit from "../components/collections-page/error-edit";

export default function Collections(){
    const router = useRouter()
    const [renderPage, setRenderPage] = useState(false)
    const [firstLoad, setFirstLoad] = useState(true)
    const [allCollectionData, setAllCollectionData] = useState([])
    const [selectedCollectionID, setSelectedCollectionID] = useState(0)
    const [selectedCollectionImageArray, setSelectedCollectionImageArray] = useState([])

    const [deleteDialog, setDeleteDialog] = useState(false)
    const [deleteCollectionID, setDeleteCollectionID] = useState(0)
    const [deleteCollectionName, setDeleteCollectionName] = useState("")
    const [deleteSavedSuccess, setDeleteSavedSuccess] = useState(false)
    const [deleteSavedError, setDeleteSavedError] = useState(false)

    const [editDialog, setEditDialog] = useState(false)
    const [editCollectionID, setEditCollectionID] = useState(0)
    const [editCollectionName, setEditCollectionName] = useState("")
    const [editCollectionDescription, setEditCollectionDescription] = useState("")
    const [editCollectionIsPublic, setEditCollectionIsPublic] = useState(false)
    const [editSavedSuccess, setEditSavedSuccess] = useState(false)
    const [editSavedError, setEditSavedError] = useState(false)

    function checkLogin(){
        const userJWT = localStorage.getItem("userJWT")
        if (userJWT !== null){
            setRenderPage(true)
            return
        }
        router.push("/").then()
    }

    function getUserCollections(){
        const userJWT = localStorage.getItem("userJWT")
        const axios = require('axios');
        let data = JSON.stringify({
            "Bearer": userJWT
        });

        let config = {
            method: 'post',
            url: '/api/v1/user-collections',
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
            .then(function (response) {
                const allResponse = response.data
                setAllCollectionData(allResponse)
                setSelectedCollectionID(allResponse[0].id)
                setSelectedCollectionImageArray(allResponse[0]['images'])
            })
            .catch(function (error) {
                router.push("/").then()
            });

    }

    useEffect(() => {
        if (typeof window !== 'undefined'){
            if (firstLoad){
                checkLogin()
                getUserCollections()
                setFirstLoad(false)
            }
        }
    })

    function onCollectionNameListItemClick(collectionID){
        setSelectedCollectionID(collectionID)
        for (let i = 0; i<allCollectionData.length; i++){
            if (collectionID === allCollectionData[i].id){
                setSelectedCollectionImageArray(allCollectionData[i].images)
                break
            }
        }
    }

    function onCollectionNameListItemDeleteClick(collectionID){
        setDeleteCollectionID(collectionID)
        for (let i = 0; i<allCollectionData.length; i++){
            if (collectionID === allCollectionData[i].id){
                setDeleteCollectionName(allCollectionData[i].name)
            }
        }
        setDeleteDialog(true)
    }

    function deleteCollectionAPI(){
        const userJWT = localStorage.getItem("userJWT")
        const axios = require('axios');
        let data = JSON.stringify({
            "Bearer": userJWT
        });

        let config = {
            method: 'delete',
            url: '/api/v1/user-collections/' + deleteCollectionID,
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
            .then(function (response) {
                const allResponse = response.data
                setDeleteCollectionID(0)
                setDeleteCollectionName("")
                setDeleteDialog(false)
                setDeleteSavedSuccess(true)
            })
            .catch(function (error) {
                setDeleteDialog(false)
                setDeleteSavedError(true)
            });

    }

    function handleDeleteSuccessDialogCloseTap(){
        setDeleteSavedSuccess(false)
        getUserCollections()
    }

    function onCollectionNameListItemEditClick(collectionID){
        setEditCollectionID(collectionID)
        for (let i = 0; i<allCollectionData.length; i++){
            if (collectionID === allCollectionData[i].id){
                setEditCollectionName(allCollectionData[i].name)
                setEditCollectionDescription(allCollectionData[i].description)
                setEditCollectionIsPublic(allCollectionData[i].isPublic)
            }
        }
        setEditDialog(true)
    }

    function editCollectionAPI(){
        const userJWT = localStorage.getItem("userJWT")
        const axios = require('axios');
        let data = JSON.stringify({
            "Bearer": userJWT,
            "name": editCollectionName,
            "description": editCollectionDescription,
            "isPublic": editCollectionIsPublic
        });

        let config = {
            method: 'post',
            url: '/api/v1/user-collections/edit/' + editCollectionID,
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
            .then(function (response) {
                const allResponse = response.data
                setEditDialog(false)
                setEditSavedSuccess(true)
            })
            .catch(function (error) {
                setEditDialog(false)
                setEditSavedError(true)
            });

    }

    function handleEditSuccessDialogCloseTap(){
        setEditSavedSuccess(false)
        getUserCollections()
    }

    return (
        <>
            <Head>
                <title>
                    Collections | Tourist Guide
                </title>
            </Head>
            {renderPage &&
                <>
                    <div className="search-container searchbar">
                        <div
                            style={{
                                alignItems: "center",
                                display: "flex",
                                alignSelf: "center",
                                justifyContent: "center",
                                padding: "20px"
                            }}
                        >
                            <h1 style={{textAlign: "center", color: "white"}}>Collections</h1>
                        </div>
                    </div>
                    <Grid
                        container={true}
                        spacing={3}
                        style={{marginLeft: "10%"}}
                    >
                        <Grid
                            item={true}
                            md={3}
                            xs={3}
                        >
                            <h3 style={{textDecoration: "underline", textAlign: "center"}}>Your Collections</h3>
                            <List>
                                {allCollectionData.map((collectionObj) => (
                                    <ListItem
                                        secondaryAction={
                                            <div>
                                                <IconButton edge="end" aria-label="edit">
                                                    <EditIcon onClick={() => onCollectionNameListItemEditClick(collectionObj.id)}/>
                                                </IconButton>
                                                <IconButton edge="end" aria-label="delete">
                                                    <DeleteIcon onClick={() => onCollectionNameListItemDeleteClick(collectionObj.id)}/>
                                                </IconButton>
                                            </div>
                                        }
                                        selected={(selectedCollectionID === collectionObj.id)}
                                        onClick={() => onCollectionNameListItemClick(collectionObj.id)}
                                    >
                                        <ListItemText primary={collectionObj.name} />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid
                            item={true}
                            md={9}
                            xs={9}
                        >
                            {selectedCollectionImageArray.length === 0 &&
                                <>
                                    <Typography
                                        color="textPrimary"
                                        variant="h4"
                                        fontWeight={"bold"}
                                    >
                                        There is no images on this collection
                                    </Typography>
                                </>
                            }
                            {selectedCollectionImageArray.length !== 0 &&
                                <>
                                    <h3 style={{textDecoration: "underline", textAlign: "left"}}>Images</h3>
                                {selectedCollectionImageArray.map((imageObj) => {
                                    return (
                                        <ImageListItem
                                            key={imageObj.img}
                                            style={{marginRight: "5%"}}
                                        >
                                            <img
                                                style={{ width: "75%" }}
                                                src={imageObj.thumbnail}
                                                alt="Image Could Not be Load"
                                                loading={"lazy"}
                                            />
                                            <ImageListItemBar
                                                sx={{ fontFamily: "Ubuntu" }}
                                                title={imageObj.title}
                                                subtitle={"Views : " + imageObj.views}
                                                style={{ width: "75%" }}
                                            />
                                        </ImageListItem>
                                    )
                                })}
                                </>
                            }
                        </Grid>
                    </Grid>
                    {deleteDialog &&
                        <DeleteCollectionDialog
                            onClose={() => setDeleteDialog(false)}
                            agreeClick={deleteCollectionAPI}
                            collectionName={deleteCollectionName}
                        />
                    }
                    {deleteSavedSuccess &&
                        <SuccessDelete
                            onClose={handleDeleteSuccessDialogCloseTap}
                        />
                    }
                    {deleteSavedError &&
                        <ErrorDelete
                            onClose={() => setDeleteSavedError(false)}
                        />
                    }
                    {editDialog &&
                        <EditCollectionModal
                            onClose={() => setEditDialog(false)}
                            name={editCollectionName}
                            nameChange={(e) => setEditCollectionName(e.target.value)}
                            description={editCollectionDescription}
                            descriptionChange={(e) => setEditCollectionDescription(e.target.value)}
                            isPublic={editCollectionIsPublic}
                            isPublicChange={(e) => setEditCollectionIsPublic(e.target.value)}
                            saveClick={editCollectionAPI}
                        />
                    }
                    {editSavedSuccess &&
                        <SuccessEdit
                            onClose={handleEditSuccessDialogCloseTap}
                        />
                    }
                    {editSavedError &&
                        <ErrorEdit
                            onClose={() => setEditSavedError(false)}
                        />
                    }
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </>
            }
        </>
    )
}