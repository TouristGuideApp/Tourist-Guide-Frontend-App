import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "../style/Home.css"
import {useState} from "react";


function CityInfoHeader({cityProp, cityData}) {

    return (
        <>
            <div className="city-name">
                <h1>{cityProp.toUpperCase()}</h1>
                <hr/>
            </div>
            }
            <div>
                {cityData.map((cityObj) => {
                    return (
                        <>
                            <p>{cityObj.description}</p>
                            <img width="40%" height="40%" src={cityObj.file_name} alt="brokenimg"/>
                        </>
                    )
                })}
            </div>
        </>
    );
}

export default CityInfoHeader