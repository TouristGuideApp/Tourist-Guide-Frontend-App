import * as React from "react";
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import ErrorIcon from '@mui/icons-material/Error';
import PendingIcon from '@mui/icons-material/Pending';
import {useState} from "react";
import {callApiToAddImage} from "./apiCommands";

function AddButton({cityProp, imgObj}) {
    const [isDisabled, setDisabled] = useState(false);
    const [icon, setIcon] = useState(<AddIcon/>);
    const [text, setText] = useState("Add");

    const handleButtonPress = (event) => {
        const target = event.target;

        setDisabled(true);
        setIcon(<PendingIcon/>);
        setText(" Adding");

        callApiToAddImage(imgObj).then(successResult => {
            target.style.backgroundColor = "green";
            setIcon(<DoneIcon/>);
            setText(" Added");
            console.log(successResult);
        }).catch(error=> {
            target.style.backgroundColor = "orange";
            setIcon(<ErrorIcon/>);
            setText(" Failed");
            setDisabled(false);
            console.log(error.message);
        })


    }

    return (
        <div>
            <Button variant="contained" disabled={isDisabled} onClick={handleButtonPress}>
                {icon} {text} </Button>
        </div>
    )
}

function FlickrPhotosListResult({cityProp, cityData}) {
    const maxRowHeight = "175px";

    return (
        <>
            <div className="city-name">
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell> Image </TableCell>
                                <TableCell> Title </TableCell>
                                <TableCell> Description </TableCell>
                                <TableCell> Date taken </TableCell>
                                <TableCell> Owner </TableCell>
                                <TableCell> Latitude </TableCell>
                                <TableCell> Longitude </TableCell>
                                <TableCell> Views </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cityData.map((imgObj) => {
                                return (
                                    <>
                                        <TableRow>
                                            <TableCell>
                                                <AddButton cityProp={cityProp} imgObj={imgObj}/>
                                            </TableCell>
                                            <TableCell>
                                                <img style={{maxWidth: "20vw", maxHeight: maxRowHeight}}
                                                     src={imgObj.thumbnail}
                                                     loading={"lazy"}/>
                                            </TableCell>
                                            <TableCell>
                                                <p style={{
                                                    maxHeight: maxRowHeight,
                                                    maxWidth: "10vw",
                                                    overflowWrap: "break-word",
                                                    overflowY: "scroll"
                                                }}>{imgObj.title} </p>
                                            </TableCell>
                                            <TableCell>
                                                <p style={{
                                                    maxHeight: maxRowHeight,
                                                    maxWidth: "15vw",
                                                    overflowY: "scroll"
                                                }}> {imgObj.description} </p>
                                            </TableCell>
                                            <TableCell>
                                                {imgObj.dateTaken}
                                            </TableCell>
                                            <TableCell>
                                                {imgObj.ownerName}
                                            </TableCell>
                                            <TableCell>
                                                {imgObj.latitude}
                                            </TableCell>
                                            <TableCell>
                                                {imgObj.longitude}
                                            </TableCell>
                                            <TableCell>
                                                {imgObj.views}
                                            </TableCell>
                                            <TableCell>

                                            </TableCell>
                                        </TableRow>

                                    </>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default FlickrPhotosListResult;
