import {useRouter} from "next/router";
import SearchBarIndexComp from "../../../components/searchBarIndex";
import SearchBarSingleImage from "../../../components/searchBarSingleImage";
import dynamic from "next/dynamic";

function Specific({singleCity}) {
    console.log(singleCity)

    const AllImagesMap = dynamic(
        () => import('../../../components/specificImagesMap'), // replace '@components/map' with your component's location
        {ssr: false} // This line is important. It's what prevents server-side render
    )

    return (
        <>
            <SearchBarSingleImage/>
                <div className="map-container">
                    <AllImagesMap
                        mapInfo={singleCity}
                    />
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