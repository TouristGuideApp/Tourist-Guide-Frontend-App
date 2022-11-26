import SearchBarSingleImage from "../../../components/searchBarSingleImage";
import {useState} from "react";
import dynamic from "next/dynamic";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

function Specific({singleCity}) {
    const [singleCityState, setSingleCityState] = useState(singleCity)
    console.log(singleCity.tags.length)
    const AllImagesMap = dynamic(
        () => import('../../../components/specificImagesMap'), // replace '@components/map' with your component's location
        {ssr: false} // This line is important. It's what prevents server-side render
    )

    return (
        <>
            <SearchBarSingleImage/>
            <div className="single-city-info-container">
                <Box sx={{height: "800px"}}>
                    <Container maxWidth="xlg">
                        <Grid container spacing={2}>
                            <Grid xs={6}>
                                <ImageListItem> {/*Photo JPG*/}
                                    <img
                                        src={singleCity.fileName}
                                    />
                                </ImageListItem>
                            </Grid>
                            <Grid xs={6}> {/*City Info Card*/}
                                <Card sx={{minWidth: 275, height: "434px", paddingTop: "30px"}}
                                      className="card-city-info">
                                    <CardContent>
                                        <Container style={{textAlign: "center"}}>
                                            <p><b>Photo Title :</b> &nbsp; {singleCity.title}</p>
                                            <Divider variant="middle"/>
                                            <p><b>Owner Name :</b> &nbsp; {singleCity.ownerName}</p>
                                            <Divider variant="middle"/>
                                            <p><b>Date Taken :</b> &nbsp; {singleCity.dateTaken}</p>
                                            <Divider variant="middle"/>
                                            <p><b>Tags :</b></p>
                                            {singleCityState.tags.slice(0, 20).map((tagObj) => {
                                                return (
                                                    <>
                                                        <Chip label={tagObj.name}/>
                                                    </>
                                                )
                                            })}
                                        </Container>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid xs={12} style={{paddingTop: "5px"}}> {/*City Marker Map*/}
                                <div className="map-container">
                                    <AllImagesMap
                                        mapInfo={singleCity}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>
        </>
    )
}

export default Specific

export async function getServerSideProps({query}) {
    const cityID = query.id
    const data = await fetch('http://localhost:8080/api/v1/images/' + cityID);
    let singleImage = await data.json();

    return {
        props: {
            singleCity: singleImage
        }
    }
}