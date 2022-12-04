import * as React from "react";

function FlickrPhotosListResult({cityProp, cityData}){
    console.log(cityData)
    return(
        <>
            {cityData.map((imgObj) => {
                return (
                    <>
                        <div className="city-name">
                            <p>{imgObj.title}</p>
                            <hr />
                        </div>
                    </>
                )
            })}
        </>
    )
}
export default FlickrPhotosListResult;
