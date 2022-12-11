import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Stack, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Pagination } from "@mui/lab";
import { useState } from "react";
import Link from "next/link";

function CityInfoHeader({ mapInfo, cityProp, maxPage, currentPage, changeCurrentPage }) {
    const [page, setPage] = useState(currentPage);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
        changeCurrentPage.call(this, newPage);
    };
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
        </>
    );
}

export default CityInfoHeader;
