/**
 * BodyController
 *
 * @description :: Server-side logic for managing bodies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    test: function(req) {
        console.log(req.body);
        console.log(req.body.shouldFail);
    }
};

