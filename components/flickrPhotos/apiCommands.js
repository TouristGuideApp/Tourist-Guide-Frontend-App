// import axios from "axios";

const host = "http://localhost:8080/api/";

export async function callApiToAddImage(imgObj) {
    const axios = require('axios');

    delete imgObj.id;
    const command = "v1/flickr/imageToSave/";
    // const data = JSON.stringify(imgObj);

    return await axios.post(host + command, imgObj);
}
