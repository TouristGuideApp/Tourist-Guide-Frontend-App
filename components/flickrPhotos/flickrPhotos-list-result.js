import * as React from "react";
import {Table, TableCell, TableHead, TableRow} from "@mui/material";

const maxRowHeight = "100px"

function FlickrPhotosListResult({cityProp, cityData}) {
    return (
        <>
            <div className="city-name">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell> Flickr id </TableCell>
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
                    {cityData.map((imgObj) => {
                        return (
                            <>

                                <TableRow>
                                    <TableCell>
                                        {imgObj.id}
                                    </TableCell>
                                    <TableCell>
                                        <img style={{maxWidth: "200px", maxHeight: {maxRowHeight}}}
                                             src={imgObj.thumbnail}
                                             alt="Image Could Not be Load"
                                             loading={"lazy"}/>
                                    </TableCell>
                                    <TableCell>
                                        <p style={{maxHeight: {maxRowHeight}, overflow: "scroll"}}>{imgObj.title} </p>
                                    </TableCell>
                                    <TableCell>
                                        <p style={{
                                            maxHeight: {maxRowHeight},
                                            overflow: "scroll"
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
                                </TableRow>

                            </>
                        )
                    })}
                </Table>
            </div>
        </>
    )
}

export default FlickrPhotosListResult;
