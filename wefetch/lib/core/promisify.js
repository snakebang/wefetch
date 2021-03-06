import e from './Events'
function promisify (api) {
    return  function (options) {
        options = options || {};
        for (var len = arguments.length, params = Array(len > 1 ? len - 1 : 0), key = 1; key < len; key++) {
            params[key - 1] = arguments[key];
        }
        return new Promise(function (resolve, reject) {
            options.eventType ? e.emit(options.eventType, api.apply(undefined, [Object.assign({}, options, {success: resolve, fail: reject})].concat(params)))
                : api.apply(undefined, [Object.assign({}, options, {success: resolve, fail: reject})].concat(params))
        });
    };

};

export default promisify;