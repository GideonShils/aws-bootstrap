"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const http = __importStar(require("http"));
const message = 'Hello World\n';
const port = 8080;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(message);
});
server.listen(port, os_1.hostname(), () => {
    console.log(`Server running at http://${os_1.hostname()}:${port}`);
});
//# sourceMappingURL=server.js.map