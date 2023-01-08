import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import AddIcon from '@mui/icons-material/Add';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {useEffect, useState} from "react";
import {CircularProgress, Divider, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CollectionsIcon from '@mui/icons-material/Collections';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ImageIcon() {
    return null;
}

export default function AddToCollectionModal({onClose, onExistingCollectionClick, onNewCollectionClick}) {
    const [firstLoad, setFirstLoad] = useState(true)
    const [displayLoading, setDisplayLoading] = useState(true)
    const [displayError, setDisplayError] = useState(false)
    const [allCollections, setAllCollections] = useState([])

    function getUserCollections(){
        const userToken = localStorage.getItem("userJWT")
        const axios = require('axios');
        let data = JSON.stringify({
            "Bearer": userToken.toString()
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
                console.log(allResponse)
                setAllCollections(allResponse)
                setDisplayLoading(false)
            })
            .catch(function (error) {
                console.log(error)
                setDisplayLoading(false)
                setDisplayError(true)
            });
    }

    useEffect(() => {
        if (firstLoad){
            getUserCollections()
            setFirstLoad(false)
        }
    })

    function saveOnExistingCollectionClick(collectionID){
        onExistingCollectionClick.call(this, collectionID)
    }

    function newCollectionClick(){
        onNewCollectionClick.call(this)
    }

    return (
        <div>
            <Dialog
                open={true}
                TransitionComponent={Transition}
                keepMounted
                onClose={onClose}
                aria-describedby="alert-dialog-slide-description"
                fullWidth={true}
            >
                <DialogTitle>{"Save Image Into Collection"}</DialogTitle>
                <DialogContent>
                    {displayLoading &&
                        <CircularProgress/>
                    }
                    {displayError &&
                        <>
                            There was a problem on getting user collections. Please try again later.
                        </>
                    }
                    {(!displayLoading && !displayError) &&
                        <>
                            <List sx={{ width: '100%', bgcolor: 'background.paper', textAlign: "center" }}>
                                <ListItem
                                    hover={true}
                                    onClick={() => newCollectionClick()}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <AddIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Add a New Collection" />
                                </ListItem>
                                <span style={{textAlign: "center", fontWeight: "bold"}}>Your Collections: </span>
                                <Divider/>
                                <br/>
                                {allCollections.map((collectionObj) => {
                                    return (
                                        <ListItem
                                            hover={true}
                                            onClick={() => saveOnExistingCollectionClick(collectionObj.id)}
                                        >
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <CollectionsIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={collectionObj.name} />
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </>
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}