#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_1 = require("./lib/protocol");
function init() {
    const args = process.argv.slice(2);
    /* const options = yargs
       .usage('Usage: $0 [options]')
       .option('query', {
         alias: 'q',
         describe: 'The query input prompt',
         demandOption: true,
         type: 'string'
       })
       .argv;*/
    //@ts-ignore
    let inputQuery = "";
    if (args.length > 0) {
        args.forEach((arg) => {
            inputQuery += arg + " ";
        });
    }
    console.log(`prompt: ${inputQuery}`);
    handleQuery(inputQuery);
}
function handleQuery(query) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield (0, protocol_1.sendSubmoduleRequest)({
            moduleName: "base",
            method: "query",
            params: [query]
        });
        let result = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.result;
        console.log(`> ${result}`);
    });
}
init();
//# sourceMappingURL=index.js.map