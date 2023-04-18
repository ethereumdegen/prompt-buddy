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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendJsonRpcRequest = exports.sendSubmoduleRequest = exports.getApiUrl = void 0;
const axios_1 = __importDefault(require("axios"));
const PROMPT_BASE_PORT = 6100;
function getApiUrl() {
    const baseURI = "http://localhost";
    return `${baseURI}:${PROMPT_BASE_PORT}/`;
}
exports.getApiUrl = getApiUrl;
function sendSubmoduleRequest({ moduleName, method, params, id }) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUri = getApiUrl();
        const body = {
            jsonrpc: '2.0',
            id: id || '0',
            method: method,
            params: params
        };
        let response = yield sendJsonRpcRequest(apiUri, body);
        return response;
    });
}
exports.sendSubmoduleRequest = sendSubmoduleRequest;
function sendJsonRpcRequest(apiUri, body) {
    return __awaiter(this, void 0, void 0, function* () {
        /*const body:any = {
    
            jsonrpc: '2.0',
            method: 'eth_getCode',
            id: '0',
            params: [ '0x9c726d89806588066152951842895A77fEEE173d', 1 ]
          
    
        }*/
        let response = yield (0, axios_1.default)({
            method: 'post',
            url: apiUri,
            data: body
        });
        return response;
    });
}
exports.sendJsonRpcRequest = sendJsonRpcRequest;
//# sourceMappingURL=protocol.js.map