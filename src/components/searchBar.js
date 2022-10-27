import {useState} from "react";
import TextField from "@mui/material/TextField";
import * as React from 'react';
import Box from '@mui/material/Box';
import {Autocomplete} from "@mui/material";



export default function SearchBarComp(changeSearchQuery, ...props) {
    const [value, setValue] = useState(null)
    const [searchQuery, setSearchQuery] = useState("");
    const dataFiltered = filterData(searchQuery);

    const onSearchSubmit = (e) => {
        if (e.key === "Enter") {
            changeSearchQuery.call(this, searchQuery)
        }
    }

    const cities = [
        "Paris",
        "London",
        "New York",
        "Tokyo",
        "Berlin",
        "Buenos Aires",
        "Cairo",
        "Canberra",
        "Rio de Janeiro",
        "Dublin",
        "Jakarta"
    ];

    const filterData = (query) => {
        if (!query) {
            return cities;
        } else {
            return cities.filter((d) => d.toLowerCase().includes(query));
        }
    };

    const SearchBar = ({setSearchQuery}) => (
        <form>
            <Autocomplete
                options={cities}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        id="search-bar"
                        className="text"
                        /*onInput={(e) => {
                            setSearchQuery(e.target.value);
                        }}*/
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={onSearchSubmit}
                        label="Enter A City Name"
                        variant="filled"
                        placeholder="Search..."
                        size="small"
                        style={{width: 800, backgroundColor: "white", borderRadius: "5px"}}
                    />}

            />
        </form>
    );

    return (
        <Box>

            <div
                style={{
                    alignItems: "center",
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: 20
                }}
            >
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                {/*{console.log(searchQuery)}*/}
            </div>
        </Box>
    );
}