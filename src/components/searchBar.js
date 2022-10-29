import {useState} from "react";
import TextField from "@mui/material/TextField";
import * as React from 'react';
import Box from '@mui/material/Box';
import {Autocomplete} from "@mui/material";
import Button from '@mui/material/Button';
import axios from "axios";


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

const SearchBar = ({searchQuery, setSearchQuery, onFormSubmit}) => (
    <form onSubmit={onFormSubmit}>
        <Autocomplete
            onInputChange={(e) => setSearchQuery(e)}
            disableClearable={true}
            value={searchQuery}
            options={cities}
            renderInput={(params) =>
                <TextField
                    {...params}
                    id="search-bar"
                    className="text"
                    onInput={(e) => {
                        setSearchQuery(e.target.value)
                    }}
                    value={searchQuery}
                    label="Enter A City Name"
                    variant="filled"
                    placeholder="Search..."
                    size="small"
                    style={{width: 600, backgroundColor: "white", borderRadius: "5px", fontFamily: "ubuntu"}}
                />}

        />
    </form>
);

export default function SearchBarComp(props) {
    const [value, setValue] = useState(null)
    const [imagesSerialized, setImagesSerialized] = useState([])
    const [searchQuery, setSearchQuery] = useState("");
    const dataFiltered = filterData(searchQuery);

    const handleChangeWord = (e) => {
        setSearchQuery(e.target.value)

    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        props.changeWord(searchQuery)
        props.submitForm(e)
    }

    return (
        <Box>

            <div>
                <div
                    style={{
                        alignItems: "center",
                        display: "flex",
                        alignSelf: "center",
                        justifyContent: "center",
                        padding: "20px"
                    }}
                >
                    <SearchBar searchQuery={searchQuery} setSearchQuery={handleChangeWord}
                               onFormSubmit={handleSubmitForm}/>
                    <Button type="submit" variant="contained" onClick={handleSubmitForm}
                            style={{
                                borderRadius: "8px",
                                height: "49px",
                                backgroundColor: "#0E1822",
                                fontFamily: "ubuntu"
                            }}>
                        Search City
                    </Button>
                </div>
            </div>

        </Box>
    );
}