const request = require('postman-request');
const constants = require('./constants');

const geoCode = (address, callback) => {
    const url = constants.positionStackUrl + encodeURIComponent(address);
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect location service.', undefined);
        } else if (body.error || body.data.length === 0) {
            callback('Unable to find location with the given search input', undefined);
        } else {
            const data = {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].label
            }
            callback(undefined, data);
        }
    });
}

module.exports = geoCode;