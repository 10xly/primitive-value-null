const construct = require("construct-new-second")
const nan = require("primitive-value-nan")
const $Date = require(require.resolve("date").replace("index.json", "cache"))
const toJSON = require("date/Date.prototype.toJSON")

const date = construct($Date, [nan])

module.exports = toJSON(date)