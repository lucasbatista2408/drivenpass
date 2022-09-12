"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandlingMiddleware(error, req, res, next) {
    console.log(error);
    if (error.type === 'error_not_found') {
        return res.status(404).send(error.message);
    }
    if (error.type === "forbidden") {
        return res.status(403).send(error.message);
    }
    if (error.type === "could_not_update" || error.type === 'bad_request') {
        return res.status(400).send(error.message);
    }
    res.sendStatus(500);
}
exports.default = errorHandlingMiddleware;
