// import axios from "axios";
// const host = "http://localhost:8080/";

export function callApiToAddImage(imgObj) {
    const axios = require('axios');
    const data = JSON.stringify({imgObj});

    const config = {
        method: 'post',
        url: 'localhost:8080/api/v1/flickr/imageToSave',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

    // const command = "api/v1/flickr/imageToSave/";
    // var data = JSON.stringify(imgObj);
    //
    // axios.post(host + command, data).then(result => {
    //     let data = result.data;
    //     console.log(data);
    // }).catch(error => {
    //     alert(error);
    // });
}
