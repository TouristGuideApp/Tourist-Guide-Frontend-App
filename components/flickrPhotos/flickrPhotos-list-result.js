import * as React from "react";

function FlickrPhotosListResult({cityProp, cityData}){
    return(
        <>
            {cityData.map((imgObj) => {
                return (
                    <>
                        <div className="city-name">
                            <p>{imgObj.views}</p>

                        </div>
                    </>
                )
            })}
        </>
    )
}
export default FlickrPhotosListResult;
