import {useState} from "react";
import TextField from "@mui/material/TextField";
import * as React from 'react';
import Box from '@mui/material/Box';
import {Autocomplete} from "@mui/material";

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
    "Dublin"
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
                    onInput={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                    label="Enter A City Name"
                    variant="filled"
                    placeholder="Search..."
                    size="small"
                    style={{width: 800, backgroundColor: "white", borderRadius: "5px"}}
                />}

        />
    </form>
);

export default function SearchBarComp() {
    const [value, setValue] = useState(null)
    const [searchQuery, setSearchQuery] = useState("");
    const dataFiltered = filterData(searchQuery);

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
                {console.log(searchQuery)}
            </div>
        </Box>
    );
}