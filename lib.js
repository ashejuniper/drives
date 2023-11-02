const HypercoreIdEncoding = require('hypercore-id-encoding')

const { Command } = require('commander')
const init = require('./bin/init.js')
const touch = require('./bin/touch.js')
const download = require('./bin/download.js')
const seed = require('./bin/seed.js')
const mirror = require('./bin/mirror.js')
const serve = require('./bin/serve.js')
const ls = require('./bin/ls.js')
const put = require('./bin/put.js')
const entry = require('./bin/entry.js')
const get = require('./bin/get.js')
const rm = require('./bin/rm.js')
const info = require('./bin/info.js')
const purge = require('./bin/purge.js')

class DrivesAPI {
    constructor() {

    }

    /**
     * Archive download a Hyperdrive by key.
     * @param {string} key The Hyperdrive key.
     * @param {*} options The API call options.
     */
    async download(
        key,
        options={}
    ) {
        await download(
            HypercoreIdEncoding.decode(
                key
            ),
            options
        );
    }

    /**
     * Show a single entry file.
     * @param {string} src The Hyperdrive key.
     * @param {string} path The path to the file within the Hyperdrive.
     * @param {*} options The API call options.
     */
    async entry(
        src,
        path,
        options={}
    ) {
        await entry(
            HypercoreIdEncoding.decode(
                src
            ),
            path,
            options
        );
    }

    /**
     * Show the file content.
     * @param {string} src The Hyperdrive key.
     * @param {string} get The path to the file within the Hyperdrive.
     * @param {*} options The API call options.
     */
    async get(
        src,
        path,
        options={}
    ) {
        await get(
            HypercoreIdEncoding.decode(
                src
            ),
            path,
            options
        );
    }

    async info() {

    }

    async init() {

    }

    async ls() {

    }

    async mirror() {

    }

    async purge() {

    }

    async put() {

    }

    async rm() {

    }

    async seed() {

    }

    async serve() {

    }

    async touch() {

    }
}

module.exports = new DrivesAPI();
