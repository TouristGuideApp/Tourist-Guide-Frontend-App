import * as React from "react";
import "../style/Home.css";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

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
                            style={{width: "500px", height: "350px"}}
                            src={cityObj.file_name}
                            alt="brokenImg"
                        />
                        <ImageListItemBar
                            sx={{fontFamily: "Ubuntu"}}
                            title={cityObj.title}
                            actionIcon={
                                <IconButton
                                    sx={{color: 'rgba(255, 255, 255, 0.6)'}}
                                    aria-label={`info about ${cityObj.title}`}
                                >
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