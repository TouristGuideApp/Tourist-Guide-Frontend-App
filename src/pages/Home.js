import "../style/Home.css"
import SearchBarComp from "../components/search-bar";
import CityInfoHeader from "../components/City-info-Header";

function Home() {
    return (
        <div className="Home">
            <div className="search-container">
                <div className="searchbar">
                    <SearchBarComp/>
                </div>
            </div>
            <div className="city-container">
                <CityInfoHeader/>
            </div>
        </div>
    );
}

export default Home;
