"use strict";
// const controller = require("./../controller/controller");

const steps = (opts, nightmare, callback) => {

    console.log('I am in steps ...')

    opts.steps(nightmare, callback)

}

module.exports = steps;
