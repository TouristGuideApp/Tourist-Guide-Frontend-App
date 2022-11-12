import * as React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {Link} from "react-router-dom";
import {ViewIcon} from "../icons/viewIcon";
import "../style/Home.css";
import {Tooltip, withStyles} from "@mui/material";

function CityInfoHeader({cityData, cityProp}) {

    return (
        <>
            <div className="city-name">
                <h1>{cityProp.toUpperCase()}</h1>
                <hr/>
            </div>
            <ImageList sx={{width: "100%", height: "100%"}}>
                <ImageListItem key="Subheader" cols={4}>
                </ImageListItem>
                {cityData.map((cityObj) => (
                    <ImageListItem key={cityObj.img}>
                        <img
                            style={{width: "100%", height: "350px"}}
                            src={cityObj.file_name}
                            alt="broken"
                        />
                            <ImageListItemBar
                                sx={{fontFamily: "Ubuntu"}}
                                title={cityObj.title}
                                subtitle={"Views : " + cityObj.views}
                                actionIcon={
                                    <IconButton
                                        sx={{color: 'rgba(255, 255, 255, 0.6)'}}
                                        aria-label={`info about ${cityObj.title}`}
                                    >
                                        <Tooltip title={cityObj.views} placement="top" arrow>
                                            <ViewIcon style={{marginRight: "10px"}}/>
                                        </Tooltip>
                                        <InfoIcon/>
                                    </IconButton>
                                }
                            />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
}

export default CityInfoHeader