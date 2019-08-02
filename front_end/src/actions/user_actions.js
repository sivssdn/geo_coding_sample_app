const axios = require('axios');

export const GET_LOCATION = "location:get";


export function getLocationStore(reqData) {
    return function (dispatch) {
        requestLocationStore('http://localhost:3000/get-store', reqData)
            .then(asset => asset.data.storeName)
            .then(assetRes => dispatch(getLocationStoreToReducer(assetRes)))
            .catch(err => dispatch(getLocationStoreToReducer("Error")));
    }
}

export function getLocationStoreToReducer(data) {
    return {
        type: GET_LOCATION,
        payload: {
            storeName: data
        }
    };
}



function requestLocationStore(url, reqData) {
        return axios({
            method: 'post',
            url: url,
            data: reqData,
        })
        .then(function (response) {
            console.log(response);
            console.log("-----------");
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
}


