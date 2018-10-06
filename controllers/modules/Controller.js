const { kebabCase } = require('lodash/string');
module.exports = class Controller {
    /**
     * Create new controller
     * @param {Object} params
     * @param {String} params.name - resource name
     * @param {String[]} params.allowedMethods - allowed methods
     */
    constructor({ 
        name,
        allowedMethods,
    }){
        if (!name) {
            throw new Error('Unable to create controller: Missing Resource Name');
        }

        this._name = name;
        this._allowedMethods = allowedMethods || [
            'GET',
            'POST',
            'PUSH',
            'PATCH',
            'DELETE'
        ];
    }

    /** @type {String} kebabcase path of resource */
    get path() {
        return kebabCase(`${this._name}`)
    }

    /** @type {String} name of resource */
    get name() {
        return this._name;
    }

    /**
     * Check if method is allowed
     * @param {String} method - http method
     * @returns {Boolean} is method allowed
     */
    isMethodAllowed(method) {
        return this._allowedMethods.includes(`${method}`.toUpperCase());
    }
};

