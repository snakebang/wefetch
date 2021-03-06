
function dispatchRequest(config) {
    var request = config.createRequest;
    return request(config).then(function (response) {
        return response;
    }, function (reason) {
        return Promise.reject(reason)
    })
}

export default dispatchRequest;