const request = require('postman-request');
const constants = require('./constants');

const forecast = (latitude, longitude, callback) => {
    const url = constants.weatherStackUrl + latitude + ',' + longitude;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect weather service.', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees. It feels like ' + body.current.feelslike + ' degree out.');
        }
    });
}

module.exports = forecast;