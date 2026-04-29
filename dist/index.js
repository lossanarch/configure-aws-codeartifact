require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7351:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__nccwpck_require__(2037));
const utils_1 = __nccwpck_require__(5278);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return (0, utils_1.toCommandValue)(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return (0, utils_1.toCommandValue)(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 2186:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.platform = exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = exports.markdownSummary = exports.summary = exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(7351);
const file_command_1 = __nccwpck_require__(717);
const utils_1 = __nccwpck_require__(5278);
const os = __importStar(__nccwpck_require__(2037));
const path = __importStar(__nccwpck_require__(1017));
const oidc_utils_1 = __nccwpck_require__(8041);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode || (exports.ExitCode = ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = (0, utils_1.toCommandValue)(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        return (0, file_command_1.issueFileCommand)('ENV', (0, file_command_1.prepareKeyValueMessage)(name, val));
    }
    (0, command_1.issueCommand)('set-env', { name }, convertedVal);
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    (0, command_1.issueCommand)('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        (0, file_command_1.issueFileCommand)('PATH', inputPath);
    }
    else {
        (0, command_1.issueCommand)('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    if (options && options.trimWhitespace === false) {
        return inputs;
    }
    return inputs.map(input => input.trim());
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    const filePath = process.env['GITHUB_OUTPUT'] || '';
    if (filePath) {
        return (0, file_command_1.issueFileCommand)('OUTPUT', (0, file_command_1.prepareKeyValueMessage)(name, value));
    }
    process.stdout.write(os.EOL);
    (0, command_1.issueCommand)('set-output', { name }, (0, utils_1.toCommandValue)(value));
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    (0, command_1.issue)('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    (0, command_1.issueCommand)('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function error(message, properties = {}) {
    (0, command_1.issueCommand)('error', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function warning(message, properties = {}) {
    (0, command_1.issueCommand)('warning', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function notice(message, properties = {}) {
    (0, command_1.issueCommand)('notice', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    (0, command_1.issue)('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    (0, command_1.issue)('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    const filePath = process.env['GITHUB_STATE'] || '';
    if (filePath) {
        return (0, file_command_1.issueFileCommand)('STATE', (0, file_command_1.prepareKeyValueMessage)(name, value));
    }
    (0, command_1.issueCommand)('save-state', { name }, (0, utils_1.toCommandValue)(value));
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
function getIDToken(aud) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
    });
}
exports.getIDToken = getIDToken;
/**
 * Summary exports
 */
var summary_1 = __nccwpck_require__(1327);
Object.defineProperty(exports, "summary", ({ enumerable: true, get: function () { return summary_1.summary; } }));
/**
 * @deprecated use core.summary
 */
var summary_2 = __nccwpck_require__(1327);
Object.defineProperty(exports, "markdownSummary", ({ enumerable: true, get: function () { return summary_2.markdownSummary; } }));
/**
 * Path exports
 */
var path_utils_1 = __nccwpck_require__(2981);
Object.defineProperty(exports, "toPosixPath", ({ enumerable: true, get: function () { return path_utils_1.toPosixPath; } }));
Object.defineProperty(exports, "toWin32Path", ({ enumerable: true, get: function () { return path_utils_1.toWin32Path; } }));
Object.defineProperty(exports, "toPlatformPath", ({ enumerable: true, get: function () { return path_utils_1.toPlatformPath; } }));
/**
 * Platform utilities exports
 */
exports.platform = __importStar(__nccwpck_require__(5243));
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prepareKeyValueMessage = exports.issueFileCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const crypto = __importStar(__nccwpck_require__(6113));
const fs = __importStar(__nccwpck_require__(7147));
const os = __importStar(__nccwpck_require__(2037));
const utils_1 = __nccwpck_require__(5278);
function issueFileCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${(0, utils_1.toCommandValue)(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueFileCommand = issueFileCommand;
function prepareKeyValueMessage(key, value) {
    const delimiter = `ghadelimiter_${crypto.randomUUID()}`;
    const convertedValue = (0, utils_1.toCommandValue)(value);
    // These should realistically never happen, but just in case someone finds a
    // way to exploit uuid generation let's not allow keys or values that contain
    // the delimiter.
    if (key.includes(delimiter)) {
        throw new Error(`Unexpected input: name should not contain the delimiter "${delimiter}"`);
    }
    if (convertedValue.includes(delimiter)) {
        throw new Error(`Unexpected input: value should not contain the delimiter "${delimiter}"`);
    }
    return `${key}<<${delimiter}${os.EOL}${convertedValue}${os.EOL}${delimiter}`;
}
exports.prepareKeyValueMessage = prepareKeyValueMessage;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 8041:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OidcClient = void 0;
const http_client_1 = __nccwpck_require__(6255);
const auth_1 = __nccwpck_require__(5526);
const core_1 = __nccwpck_require__(2186);
class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        }
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        }
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const httpclient = OidcClient.createHttpClient();
            const res = yield httpclient
                .getJson(id_token_url)
                .catch(error => {
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) {
                throw new Error('Response json body do not have ID Token field');
            }
            return id_token;
        });
    }
    static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // New ID Token is requested from action service
                let id_token_url = OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                (0, core_1.debug)(`ID token url is ${id_token_url}`);
                const id_token = yield OidcClient.getCall(id_token_url);
                (0, core_1.setSecret)(id_token);
                return id_token;
            }
            catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
exports.OidcClient = OidcClient;
//# sourceMappingURL=oidc-utils.js.map

/***/ }),

/***/ 2981:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = void 0;
const path = __importStar(__nccwpck_require__(1017));
/**
 * toPosixPath converts the given path to the posix form. On Windows, \\ will be
 * replaced with /.
 *
 * @param pth. Path to transform.
 * @return string Posix path.
 */
function toPosixPath(pth) {
    return pth.replace(/[\\]/g, '/');
}
exports.toPosixPath = toPosixPath;
/**
 * toWin32Path converts the given path to the win32 form. On Linux, / will be
 * replaced with \\.
 *
 * @param pth. Path to transform.
 * @return string Win32 path.
 */
function toWin32Path(pth) {
    return pth.replace(/[/]/g, '\\');
}
exports.toWin32Path = toWin32Path;
/**
 * toPlatformPath converts the given path to a platform-specific path. It does
 * this by replacing instances of / and \ with the platform-specific path
 * separator.
 *
 * @param pth The path to platformize.
 * @return string The platform-specific path.
 */
function toPlatformPath(pth) {
    return pth.replace(/[/\\]/g, path.sep);
}
exports.toPlatformPath = toPlatformPath;
//# sourceMappingURL=path-utils.js.map

/***/ }),

/***/ 5243:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDetails = exports.isLinux = exports.isMacOS = exports.isWindows = exports.arch = exports.platform = void 0;
const os_1 = __importDefault(__nccwpck_require__(2037));
const exec = __importStar(__nccwpck_require__(1514));
const getWindowsInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const { stdout: version } = yield exec.getExecOutput('powershell -command "(Get-CimInstance -ClassName Win32_OperatingSystem).Version"', undefined, {
        silent: true
    });
    const { stdout: name } = yield exec.getExecOutput('powershell -command "(Get-CimInstance -ClassName Win32_OperatingSystem).Caption"', undefined, {
        silent: true
    });
    return {
        name: name.trim(),
        version: version.trim()
    };
});
const getMacOsInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const { stdout } = yield exec.getExecOutput('sw_vers', undefined, {
        silent: true
    });
    const version = (_b = (_a = stdout.match(/ProductVersion:\s*(.+)/)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : '';
    const name = (_d = (_c = stdout.match(/ProductName:\s*(.+)/)) === null || _c === void 0 ? void 0 : _c[1]) !== null && _d !== void 0 ? _d : '';
    return {
        name,
        version
    };
});
const getLinuxInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const { stdout } = yield exec.getExecOutput('lsb_release', ['-i', '-r', '-s'], {
        silent: true
    });
    const [name, version] = stdout.trim().split('\n');
    return {
        name,
        version
    };
});
exports.platform = os_1.default.platform();
exports.arch = os_1.default.arch();
exports.isWindows = exports.platform === 'win32';
exports.isMacOS = exports.platform === 'darwin';
exports.isLinux = exports.platform === 'linux';
function getDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        return Object.assign(Object.assign({}, (yield (exports.isWindows
            ? getWindowsInfo()
            : exports.isMacOS
                ? getMacOsInfo()
                : getLinuxInfo()))), { platform: exports.platform,
            arch: exports.arch,
            isWindows: exports.isWindows,
            isMacOS: exports.isMacOS,
            isLinux: exports.isLinux });
    });
}
exports.getDetails = getDetails;
//# sourceMappingURL=platform.js.map

/***/ }),

/***/ 1327:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = void 0;
const os_1 = __nccwpck_require__(2037);
const fs_1 = __nccwpck_require__(7147);
const { access, appendFile, writeFile } = fs_1.promises;
exports.SUMMARY_ENV_VAR = 'GITHUB_STEP_SUMMARY';
exports.SUMMARY_DOCS_URL = 'https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary';
class Summary {
    constructor() {
        this._buffer = '';
    }
    /**
     * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
     * Also checks r/w permissions.
     *
     * @returns step summary file path
     */
    filePath() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._filePath) {
                return this._filePath;
            }
            const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];
            if (!pathFromEnv) {
                throw new Error(`Unable to find environment variable for $${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
            }
            try {
                yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);
            }
            catch (_a) {
                throw new Error(`Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`);
            }
            this._filePath = pathFromEnv;
            return this._filePath;
        });
    }
    /**
     * Wraps content in an HTML tag, adding any HTML attributes
     *
     * @param {string} tag HTML tag to wrap
     * @param {string | null} content content within the tag
     * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
     *
     * @returns {string} content wrapped in HTML element
     */
    wrap(tag, content, attrs = {}) {
        const htmlAttrs = Object.entries(attrs)
            .map(([key, value]) => ` ${key}="${value}"`)
            .join('');
        if (!content) {
            return `<${tag}${htmlAttrs}>`;
        }
        return `<${tag}${htmlAttrs}>${content}</${tag}>`;
    }
    /**
     * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
     *
     * @param {SummaryWriteOptions} [options] (optional) options for write operation
     *
     * @returns {Promise<Summary>} summary instance
     */
    write(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const overwrite = !!(options === null || options === void 0 ? void 0 : options.overwrite);
            const filePath = yield this.filePath();
            const writeFunc = overwrite ? writeFile : appendFile;
            yield writeFunc(filePath, this._buffer, { encoding: 'utf8' });
            return this.emptyBuffer();
        });
    }
    /**
     * Clears the summary buffer and wipes the summary file
     *
     * @returns {Summary} summary instance
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.emptyBuffer().write({ overwrite: true });
        });
    }
    /**
     * Returns the current summary buffer as a string
     *
     * @returns {string} string of summary buffer
     */
    stringify() {
        return this._buffer;
    }
    /**
     * If the summary buffer is empty
     *
     * @returns {boolen} true if the buffer is empty
     */
    isEmptyBuffer() {
        return this._buffer.length === 0;
    }
    /**
     * Resets the summary buffer without writing to summary file
     *
     * @returns {Summary} summary instance
     */
    emptyBuffer() {
        this._buffer = '';
        return this;
    }
    /**
     * Adds raw text to the summary buffer
     *
     * @param {string} text content to add
     * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
     *
     * @returns {Summary} summary instance
     */
    addRaw(text, addEOL = false) {
        this._buffer += text;
        return addEOL ? this.addEOL() : this;
    }
    /**
     * Adds the operating system-specific end-of-line marker to the buffer
     *
     * @returns {Summary} summary instance
     */
    addEOL() {
        return this.addRaw(os_1.EOL);
    }
    /**
     * Adds an HTML codeblock to the summary buffer
     *
     * @param {string} code content to render within fenced code block
     * @param {string} lang (optional) language to syntax highlight code
     *
     * @returns {Summary} summary instance
     */
    addCodeBlock(code, lang) {
        const attrs = Object.assign({}, (lang && { lang }));
        const element = this.wrap('pre', this.wrap('code', code), attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML list to the summary buffer
     *
     * @param {string[]} items list of items to render
     * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
     *
     * @returns {Summary} summary instance
     */
    addList(items, ordered = false) {
        const tag = ordered ? 'ol' : 'ul';
        const listItems = items.map(item => this.wrap('li', item)).join('');
        const element = this.wrap(tag, listItems);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML table to the summary buffer
     *
     * @param {SummaryTableCell[]} rows table rows
     *
     * @returns {Summary} summary instance
     */
    addTable(rows) {
        const tableBody = rows
            .map(row => {
            const cells = row
                .map(cell => {
                if (typeof cell === 'string') {
                    return this.wrap('td', cell);
                }
                const { header, data, colspan, rowspan } = cell;
                const tag = header ? 'th' : 'td';
                const attrs = Object.assign(Object.assign({}, (colspan && { colspan })), (rowspan && { rowspan }));
                return this.wrap(tag, data, attrs);
            })
                .join('');
            return this.wrap('tr', cells);
        })
            .join('');
        const element = this.wrap('table', tableBody);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds a collapsable HTML details element to the summary buffer
     *
     * @param {string} label text for the closed state
     * @param {string} content collapsable content
     *
     * @returns {Summary} summary instance
     */
    addDetails(label, content) {
        const element = this.wrap('details', this.wrap('summary', label) + content);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML image tag to the summary buffer
     *
     * @param {string} src path to the image you to embed
     * @param {string} alt text description of the image
     * @param {SummaryImageOptions} options (optional) addition image attributes
     *
     * @returns {Summary} summary instance
     */
    addImage(src, alt, options) {
        const { width, height } = options || {};
        const attrs = Object.assign(Object.assign({}, (width && { width })), (height && { height }));
        const element = this.wrap('img', null, Object.assign({ src, alt }, attrs));
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML section heading element
     *
     * @param {string} text heading text
     * @param {number | string} [level=1] (optional) the heading level, default: 1
     *
     * @returns {Summary} summary instance
     */
    addHeading(text, level) {
        const tag = `h${level}`;
        const allowedTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
            ? tag
            : 'h1';
        const element = this.wrap(allowedTag, text);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML thematic break (<hr>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addSeparator() {
        const element = this.wrap('hr', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML line break (<br>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addBreak() {
        const element = this.wrap('br', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML blockquote to the summary buffer
     *
     * @param {string} text quote text
     * @param {string} cite (optional) citation url
     *
     * @returns {Summary} summary instance
     */
    addQuote(text, cite) {
        const attrs = Object.assign({}, (cite && { cite }));
        const element = this.wrap('blockquote', text, attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML anchor tag to the summary buffer
     *
     * @param {string} text link text/content
     * @param {string} href hyperlink
     *
     * @returns {Summary} summary instance
     */
    addLink(text, href) {
        const element = this.wrap('a', text, { href });
        return this.addRaw(element).addEOL();
    }
}
const _summary = new Summary();
/**
 * @deprecated use `core.summary`
 */
exports.markdownSummary = _summary;
exports.summary = _summary;
//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 5278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
function toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
        return {};
    }
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
exports.toCommandProperties = toCommandProperties;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 1514:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getExecOutput = exports.exec = void 0;
const string_decoder_1 = __nccwpck_require__(1576);
const tr = __importStar(__nccwpck_require__(8159));
/**
 * Exec a command.
 * Output will be streamed to the live console.
 * Returns promise with return code
 *
 * @param     commandLine        command to execute (can include additional args). Must be correctly escaped.
 * @param     args               optional arguments for tool. Escaping is handled by the lib.
 * @param     options            optional exec options.  See ExecOptions
 * @returns   Promise<number>    exit code
 */
function exec(commandLine, args, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const commandArgs = tr.argStringToArray(commandLine);
        if (commandArgs.length === 0) {
            throw new Error(`Parameter 'commandLine' cannot be null or empty.`);
        }
        // Path to tool to execute should be first arg
        const toolPath = commandArgs[0];
        args = commandArgs.slice(1).concat(args || []);
        const runner = new tr.ToolRunner(toolPath, args, options);
        return runner.exec();
    });
}
exports.exec = exec;
/**
 * Exec a command and get the output.
 * Output will be streamed to the live console.
 * Returns promise with the exit code and collected stdout and stderr
 *
 * @param     commandLine           command to execute (can include additional args). Must be correctly escaped.
 * @param     args                  optional arguments for tool. Escaping is handled by the lib.
 * @param     options               optional exec options.  See ExecOptions
 * @returns   Promise<ExecOutput>   exit code, stdout, and stderr
 */
function getExecOutput(commandLine, args, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        let stdout = '';
        let stderr = '';
        //Using string decoder covers the case where a mult-byte character is split
        const stdoutDecoder = new string_decoder_1.StringDecoder('utf8');
        const stderrDecoder = new string_decoder_1.StringDecoder('utf8');
        const originalStdoutListener = (_a = options === null || options === void 0 ? void 0 : options.listeners) === null || _a === void 0 ? void 0 : _a.stdout;
        const originalStdErrListener = (_b = options === null || options === void 0 ? void 0 : options.listeners) === null || _b === void 0 ? void 0 : _b.stderr;
        const stdErrListener = (data) => {
            stderr += stderrDecoder.write(data);
            if (originalStdErrListener) {
                originalStdErrListener(data);
            }
        };
        const stdOutListener = (data) => {
            stdout += stdoutDecoder.write(data);
            if (originalStdoutListener) {
                originalStdoutListener(data);
            }
        };
        const listeners = Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.listeners), { stdout: stdOutListener, stderr: stdErrListener });
        const exitCode = yield exec(commandLine, args, Object.assign(Object.assign({}, options), { listeners }));
        //flush any remaining characters
        stdout += stdoutDecoder.end();
        stderr += stderrDecoder.end();
        return {
            exitCode,
            stdout,
            stderr
        };
    });
}
exports.getExecOutput = getExecOutput;
//# sourceMappingURL=exec.js.map

/***/ }),

/***/ 8159:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.argStringToArray = exports.ToolRunner = void 0;
const os = __importStar(__nccwpck_require__(2037));
const events = __importStar(__nccwpck_require__(2361));
const child = __importStar(__nccwpck_require__(2081));
const path = __importStar(__nccwpck_require__(1017));
const io = __importStar(__nccwpck_require__(7436));
const ioUtil = __importStar(__nccwpck_require__(1962));
const timers_1 = __nccwpck_require__(9512);
/* eslint-disable @typescript-eslint/unbound-method */
const IS_WINDOWS = process.platform === 'win32';
/*
 * Class for running command line tools. Handles quoting and arg parsing in a platform agnostic way.
 */
class ToolRunner extends events.EventEmitter {
    constructor(toolPath, args, options) {
        super();
        if (!toolPath) {
            throw new Error("Parameter 'toolPath' cannot be null or empty.");
        }
        this.toolPath = toolPath;
        this.args = args || [];
        this.options = options || {};
    }
    _debug(message) {
        if (this.options.listeners && this.options.listeners.debug) {
            this.options.listeners.debug(message);
        }
    }
    _getCommandString(options, noPrefix) {
        const toolPath = this._getSpawnFileName();
        const args = this._getSpawnArgs(options);
        let cmd = noPrefix ? '' : '[command]'; // omit prefix when piped to a second tool
        if (IS_WINDOWS) {
            // Windows + cmd file
            if (this._isCmdFile()) {
                cmd += toolPath;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows + verbatim
            else if (options.windowsVerbatimArguments) {
                cmd += `"${toolPath}"`;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows (regular)
            else {
                cmd += this._windowsQuoteCmdArg(toolPath);
                for (const a of args) {
                    cmd += ` ${this._windowsQuoteCmdArg(a)}`;
                }
            }
        }
        else {
            // OSX/Linux - this can likely be improved with some form of quoting.
            // creating processes on Unix is fundamentally different than Windows.
            // on Unix, execvp() takes an arg array.
            cmd += toolPath;
            for (const a of args) {
                cmd += ` ${a}`;
            }
        }
        return cmd;
    }
    _processLineBuffer(data, strBuffer, onLine) {
        try {
            let s = strBuffer + data.toString();
            let n = s.indexOf(os.EOL);
            while (n > -1) {
                const line = s.substring(0, n);
                onLine(line);
                // the rest of the string ...
                s = s.substring(n + os.EOL.length);
                n = s.indexOf(os.EOL);
            }
            return s;
        }
        catch (err) {
            // streaming lines to console is best effort.  Don't fail a build.
            this._debug(`error processing line. Failed with error ${err}`);
            return '';
        }
    }
    _getSpawnFileName() {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                return process.env['COMSPEC'] || 'cmd.exe';
            }
        }
        return this.toolPath;
    }
    _getSpawnArgs(options) {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                let argline = `/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;
                for (const a of this.args) {
                    argline += ' ';
                    argline += options.windowsVerbatimArguments
                        ? a
                        : this._windowsQuoteCmdArg(a);
                }
                argline += '"';
                return [argline];
            }
        }
        return this.args;
    }
    _endsWith(str, end) {
        return str.endsWith(end);
    }
    _isCmdFile() {
        const upperToolPath = this.toolPath.toUpperCase();
        return (this._endsWith(upperToolPath, '.CMD') ||
            this._endsWith(upperToolPath, '.BAT'));
    }
    _windowsQuoteCmdArg(arg) {
        // for .exe, apply the normal quoting rules that libuv applies
        if (!this._isCmdFile()) {
            return this._uvQuoteCmdArg(arg);
        }
        // otherwise apply quoting rules specific to the cmd.exe command line parser.
        // the libuv rules are generic and are not designed specifically for cmd.exe
        // command line parser.
        //
        // for a detailed description of the cmd.exe command line parser, refer to
        // http://stackoverflow.com/questions/4094699/how-does-the-windows-command-interpreter-cmd-exe-parse-scripts/7970912#7970912
        // need quotes for empty arg
        if (!arg) {
            return '""';
        }
        // determine whether the arg needs to be quoted
        const cmdSpecialChars = [
            ' ',
            '\t',
            '&',
            '(',
            ')',
            '[',
            ']',
            '{',
            '}',
            '^',
            '=',
            ';',
            '!',
            "'",
            '+',
            ',',
            '`',
            '~',
            '|',
            '<',
            '>',
            '"'
        ];
        let needsQuotes = false;
        for (const char of arg) {
            if (cmdSpecialChars.some(x => x === char)) {
                needsQuotes = true;
                break;
            }
        }
        // short-circuit if quotes not needed
        if (!needsQuotes) {
            return arg;
        }
        // the following quoting rules are very similar to the rules that by libuv applies.
        //
        // 1) wrap the string in quotes
        //
        // 2) double-up quotes - i.e. " => ""
        //
        //    this is different from the libuv quoting rules. libuv replaces " with \", which unfortunately
        //    doesn't work well with a cmd.exe command line.
        //
        //    note, replacing " with "" also works well if the arg is passed to a downstream .NET console app.
        //    for example, the command line:
        //          foo.exe "myarg:""my val"""
        //    is parsed by a .NET console app into an arg array:
        //          [ "myarg:\"my val\"" ]
        //    which is the same end result when applying libuv quoting rules. although the actual
        //    command line from libuv quoting rules would look like:
        //          foo.exe "myarg:\"my val\""
        //
        // 3) double-up slashes that precede a quote,
        //    e.g.  hello \world    => "hello \world"
        //          hello\"world    => "hello\\""world"
        //          hello\\"world   => "hello\\\\""world"
        //          hello world\    => "hello world\\"
        //
        //    technically this is not required for a cmd.exe command line, or the batch argument parser.
        //    the reasons for including this as a .cmd quoting rule are:
        //
        //    a) this is optimized for the scenario where the argument is passed from the .cmd file to an
        //       external program. many programs (e.g. .NET console apps) rely on the slash-doubling rule.
        //
        //    b) it's what we've been doing previously (by deferring to node default behavior) and we
        //       haven't heard any complaints about that aspect.
        //
        // note, a weakness of the quoting rules chosen here, is that % is not escaped. in fact, % cannot be
        // escaped when used on the command line directly - even though within a .cmd file % can be escaped
        // by using %%.
        //
        // the saving grace is, on the command line, %var% is left as-is if var is not defined. this contrasts
        // the line parsing rules within a .cmd file, where if var is not defined it is replaced with nothing.
        //
        // one option that was explored was replacing % with ^% - i.e. %var% => ^%var^%. this hack would
        // often work, since it is unlikely that var^ would exist, and the ^ character is removed when the
        // variable is used. the problem, however, is that ^ is not removed when %* is used to pass the args
        // to an external program.
        //
        // an unexplored potential solution for the % escaping problem, is to create a wrapper .cmd file.
        // % can be escaped within a .cmd file.
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\'; // double the slash
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '"'; // double the quote
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _uvQuoteCmdArg(arg) {
        // Tool runner wraps child_process.spawn() and needs to apply the same quoting as
        // Node in certain cases where the undocumented spawn option windowsVerbatimArguments
        // is used.
        //
        // Since this function is a port of quote_cmd_arg from Node 4.x (technically, lib UV,
        // see https://github.com/nodejs/node/blob/v4.x/deps/uv/src/win/process.c for details),
        // pasting copyright notice from Node within this function:
        //
        //      Copyright Joyent, Inc. and other Node contributors. All rights reserved.
        //
        //      Permission is hereby granted, free of charge, to any person obtaining a copy
        //      of this software and associated documentation files (the "Software"), to
        //      deal in the Software without restriction, including without limitation the
        //      rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
        //      sell copies of the Software, and to permit persons to whom the Software is
        //      furnished to do so, subject to the following conditions:
        //
        //      The above copyright notice and this permission notice shall be included in
        //      all copies or substantial portions of the Software.
        //
        //      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        //      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        //      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        //      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        //      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
        //      FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
        //      IN THE SOFTWARE.
        if (!arg) {
            // Need double quotation for empty argument
            return '""';
        }
        if (!arg.includes(' ') && !arg.includes('\t') && !arg.includes('"')) {
            // No quotation needed
            return arg;
        }
        if (!arg.includes('"') && !arg.includes('\\')) {
            // No embedded double quotes or backslashes, so I can just wrap
            // quote marks around the whole thing.
            return `"${arg}"`;
        }
        // Expected input/output:
        //   input : hello"world
        //   output: "hello\"world"
        //   input : hello""world
        //   output: "hello\"\"world"
        //   input : hello\world
        //   output: hello\world
        //   input : hello\\world
        //   output: hello\\world
        //   input : hello\"world
        //   output: "hello\\\"world"
        //   input : hello\\"world
        //   output: "hello\\\\\"world"
        //   input : hello world\
        //   output: "hello world\\" - note the comment in libuv actually reads "hello world\"
        //                             but it appears the comment is wrong, it should be "hello world\\"
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\';
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '\\';
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _cloneExecOptions(options) {
        options = options || {};
        const result = {
            cwd: options.cwd || process.cwd(),
            env: options.env || process.env,
            silent: options.silent || false,
            windowsVerbatimArguments: options.windowsVerbatimArguments || false,
            failOnStdErr: options.failOnStdErr || false,
            ignoreReturnCode: options.ignoreReturnCode || false,
            delay: options.delay || 10000
        };
        result.outStream = options.outStream || process.stdout;
        result.errStream = options.errStream || process.stderr;
        return result;
    }
    _getSpawnOptions(options, toolPath) {
        options = options || {};
        const result = {};
        result.cwd = options.cwd;
        result.env = options.env;
        result['windowsVerbatimArguments'] =
            options.windowsVerbatimArguments || this._isCmdFile();
        if (options.windowsVerbatimArguments) {
            result.argv0 = `"${toolPath}"`;
        }
        return result;
    }
    /**
     * Exec a tool.
     * Output will be streamed to the live console.
     * Returns promise with return code
     *
     * @param     tool     path to tool to exec
     * @param     options  optional exec options.  See ExecOptions
     * @returns   number
     */
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            // root the tool path if it is unrooted and contains relative pathing
            if (!ioUtil.isRooted(this.toolPath) &&
                (this.toolPath.includes('/') ||
                    (IS_WINDOWS && this.toolPath.includes('\\')))) {
                // prefer options.cwd if it is specified, however options.cwd may also need to be rooted
                this.toolPath = path.resolve(process.cwd(), this.options.cwd || process.cwd(), this.toolPath);
            }
            // if the tool is only a file name, then resolve it from the PATH
            // otherwise verify it exists (add extension on Windows if necessary)
            this.toolPath = yield io.which(this.toolPath, true);
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                this._debug(`exec tool: ${this.toolPath}`);
                this._debug('arguments:');
                for (const arg of this.args) {
                    this._debug(`   ${arg}`);
                }
                const optionsNonNull = this._cloneExecOptions(this.options);
                if (!optionsNonNull.silent && optionsNonNull.outStream) {
                    optionsNonNull.outStream.write(this._getCommandString(optionsNonNull) + os.EOL);
                }
                const state = new ExecState(optionsNonNull, this.toolPath);
                state.on('debug', (message) => {
                    this._debug(message);
                });
                if (this.options.cwd && !(yield ioUtil.exists(this.options.cwd))) {
                    return reject(new Error(`The cwd: ${this.options.cwd} does not exist!`));
                }
                const fileName = this._getSpawnFileName();
                const cp = child.spawn(fileName, this._getSpawnArgs(optionsNonNull), this._getSpawnOptions(this.options, fileName));
                let stdbuffer = '';
                if (cp.stdout) {
                    cp.stdout.on('data', (data) => {
                        if (this.options.listeners && this.options.listeners.stdout) {
                            this.options.listeners.stdout(data);
                        }
                        if (!optionsNonNull.silent && optionsNonNull.outStream) {
                            optionsNonNull.outStream.write(data);
                        }
                        stdbuffer = this._processLineBuffer(data, stdbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.stdline) {
                                this.options.listeners.stdline(line);
                            }
                        });
                    });
                }
                let errbuffer = '';
                if (cp.stderr) {
                    cp.stderr.on('data', (data) => {
                        state.processStderr = true;
                        if (this.options.listeners && this.options.listeners.stderr) {
                            this.options.listeners.stderr(data);
                        }
                        if (!optionsNonNull.silent &&
                            optionsNonNull.errStream &&
                            optionsNonNull.outStream) {
                            const s = optionsNonNull.failOnStdErr
                                ? optionsNonNull.errStream
                                : optionsNonNull.outStream;
                            s.write(data);
                        }
                        errbuffer = this._processLineBuffer(data, errbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.errline) {
                                this.options.listeners.errline(line);
                            }
                        });
                    });
                }
                cp.on('error', (err) => {
                    state.processError = err.message;
                    state.processExited = true;
                    state.processClosed = true;
                    state.CheckComplete();
                });
                cp.on('exit', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    this._debug(`Exit code ${code} received from tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                cp.on('close', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    state.processClosed = true;
                    this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                state.on('done', (error, exitCode) => {
                    if (stdbuffer.length > 0) {
                        this.emit('stdline', stdbuffer);
                    }
                    if (errbuffer.length > 0) {
                        this.emit('errline', errbuffer);
                    }
                    cp.removeAllListeners();
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(exitCode);
                    }
                });
                if (this.options.input) {
                    if (!cp.stdin) {
                        throw new Error('child process missing stdin');
                    }
                    cp.stdin.end(this.options.input);
                }
            }));
        });
    }
}
exports.ToolRunner = ToolRunner;
/**
 * Convert an arg string to an array of args. Handles escaping
 *
 * @param    argString   string of arguments
 * @returns  string[]    array of arguments
 */
function argStringToArray(argString) {
    const args = [];
    let inQuotes = false;
    let escaped = false;
    let arg = '';
    function append(c) {
        // we only escape double quotes.
        if (escaped && c !== '"') {
            arg += '\\';
        }
        arg += c;
        escaped = false;
    }
    for (let i = 0; i < argString.length; i++) {
        const c = argString.charAt(i);
        if (c === '"') {
            if (!escaped) {
                inQuotes = !inQuotes;
            }
            else {
                append(c);
            }
            continue;
        }
        if (c === '\\' && escaped) {
            append(c);
            continue;
        }
        if (c === '\\' && inQuotes) {
            escaped = true;
            continue;
        }
        if (c === ' ' && !inQuotes) {
            if (arg.length > 0) {
                args.push(arg);
                arg = '';
            }
            continue;
        }
        append(c);
    }
    if (arg.length > 0) {
        args.push(arg.trim());
    }
    return args;
}
exports.argStringToArray = argStringToArray;
class ExecState extends events.EventEmitter {
    constructor(options, toolPath) {
        super();
        this.processClosed = false; // tracks whether the process has exited and stdio is closed
        this.processError = '';
        this.processExitCode = 0;
        this.processExited = false; // tracks whether the process has exited
        this.processStderr = false; // tracks whether stderr was written to
        this.delay = 10000; // 10 seconds
        this.done = false;
        this.timeout = null;
        if (!toolPath) {
            throw new Error('toolPath must not be empty');
        }
        this.options = options;
        this.toolPath = toolPath;
        if (options.delay) {
            this.delay = options.delay;
        }
    }
    CheckComplete() {
        if (this.done) {
            return;
        }
        if (this.processClosed) {
            this._setResult();
        }
        else if (this.processExited) {
            this.timeout = timers_1.setTimeout(ExecState.HandleTimeout, this.delay, this);
        }
    }
    _debug(message) {
        this.emit('debug', message);
    }
    _setResult() {
        // determine whether there is an error
        let error;
        if (this.processExited) {
            if (this.processError) {
                error = new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`);
            }
            else if (this.processExitCode !== 0 && !this.options.ignoreReturnCode) {
                error = new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`);
            }
            else if (this.processStderr && this.options.failOnStdErr) {
                error = new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`);
            }
        }
        // clear the timeout
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.done = true;
        this.emit('done', error, this.processExitCode);
    }
    static HandleTimeout(state) {
        if (state.done) {
            return;
        }
        if (!state.processClosed && state.processExited) {
            const message = `The STDIO streams did not close within ${state.delay /
                1000} seconds of the exit event from process '${state.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;
            state._debug(message);
        }
        state._setResult();
    }
}
//# sourceMappingURL=toolrunner.js.map

/***/ }),

/***/ 5526:
/***/ (function(__unused_webpack_module, exports) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonalAccessTokenCredentialHandler = exports.BearerCredentialHandler = exports.BasicCredentialHandler = void 0;
class BasicCredentialHandler {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Bearer ${this.token}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`PAT:${this.token}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 6255:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = void 0;
const http = __importStar(__nccwpck_require__(3685));
const https = __importStar(__nccwpck_require__(5687));
const pm = __importStar(__nccwpck_require__(9835));
const tunnel = __importStar(__nccwpck_require__(4294));
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    const proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let output = Buffer.alloc(0);
                this.message.on('data', (chunk) => {
                    output = Buffer.concat([output, chunk]);
                });
                this.message.on('end', () => {
                    resolve(output.toString());
                });
            }));
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    const parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
        });
    }
    get(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('GET', requestUrl, null, additionalHeaders || {});
        });
    }
    del(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('DELETE', requestUrl, null, additionalHeaders || {});
        });
    }
    post(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('POST', requestUrl, data, additionalHeaders || {});
        });
    }
    patch(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PATCH', requestUrl, data, additionalHeaders || {});
        });
    }
    put(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PUT', requestUrl, data, additionalHeaders || {});
        });
    }
    head(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('HEAD', requestUrl, null, additionalHeaders || {});
        });
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(verb, requestUrl, stream, additionalHeaders);
        });
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    getJson(requestUrl, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            const res = yield this.get(requestUrl, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    postJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.post(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    putJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.put(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    patchJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.patch(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._disposed) {
                throw new Error('Client has already been disposed.');
            }
            const parsedUrl = new URL(requestUrl);
            let info = this._prepareRequest(verb, parsedUrl, headers);
            // Only perform retries on reads since writes may not be idempotent.
            const maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb)
                ? this._maxRetries + 1
                : 1;
            let numTries = 0;
            let response;
            do {
                response = yield this.requestRaw(info, data);
                // Check if it's an authentication challenge
                if (response &&
                    response.message &&
                    response.message.statusCode === HttpCodes.Unauthorized) {
                    let authenticationHandler;
                    for (const handler of this.handlers) {
                        if (handler.canHandleAuthentication(response)) {
                            authenticationHandler = handler;
                            break;
                        }
                    }
                    if (authenticationHandler) {
                        return authenticationHandler.handleAuthentication(this, info, data);
                    }
                    else {
                        // We have received an unauthorized response but have no handlers to handle it.
                        // Let the response return to the caller.
                        return response;
                    }
                }
                let redirectsRemaining = this._maxRedirects;
                while (response.message.statusCode &&
                    HttpRedirectCodes.includes(response.message.statusCode) &&
                    this._allowRedirects &&
                    redirectsRemaining > 0) {
                    const redirectUrl = response.message.headers['location'];
                    if (!redirectUrl) {
                        // if there's no location to redirect to, we won't
                        break;
                    }
                    const parsedRedirectUrl = new URL(redirectUrl);
                    if (parsedUrl.protocol === 'https:' &&
                        parsedUrl.protocol !== parsedRedirectUrl.protocol &&
                        !this._allowRedirectDowngrade) {
                        throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                    }
                    // we need to finish reading the response before reassigning response
                    // which will leak the open socket.
                    yield response.readBody();
                    // strip authorization header if redirected to a different hostname
                    if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                        for (const header in headers) {
                            // header names are case insensitive
                            if (header.toLowerCase() === 'authorization') {
                                delete headers[header];
                            }
                        }
                    }
                    // let's make the request with the new redirectUrl
                    info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                    response = yield this.requestRaw(info, data);
                    redirectsRemaining--;
                }
                if (!response.message.statusCode ||
                    !HttpResponseRetryCodes.includes(response.message.statusCode)) {
                    // If not a retry code, return immediately instead of retrying
                    return response;
                }
                numTries += 1;
                if (numTries < maxTries) {
                    yield response.readBody();
                    yield this._performExponentialBackoff(numTries);
                }
            } while (numTries < maxTries);
            return response;
        });
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                function callbackForResult(err, res) {
                    if (err) {
                        reject(err);
                    }
                    else if (!res) {
                        // If `err` is not passed, then `res` must be passed.
                        reject(new Error('Unknown error'));
                    }
                    else {
                        resolve(res);
                    }
                }
                this.requestRawWithCallback(info, data, callbackForResult);
            });
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        if (typeof data === 'string') {
            if (!info.options.headers) {
                info.options.headers = {};
            }
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        function handleResult(err, res) {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        }
        const req = info.httpModule.request(info.options, (msg) => {
            const res = new HttpClientResponse(msg);
            handleResult(undefined, res);
        });
        let socket;
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error(`Request timeout: ${info.options.path}`));
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        const parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            for (const handler of this.handlers) {
                handler.prepareRequest(info.options);
            }
        }
        return info;
    }
    _mergeHeaders(headers) {
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        const proxyUrl = pm.getProxyUrl(parsedUrl);
        const useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        // This is `useProxy` again, but we need to check `proxyURl` directly for TypeScripts's flow analysis.
        if (proxyUrl && proxyUrl.hostname) {
            const agentOptions = {
                maxSockets,
                keepAlive: this._keepAlive,
                proxy: Object.assign(Object.assign({}, ((proxyUrl.username || proxyUrl.password) && {
                    proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                })), { host: proxyUrl.hostname, port: proxyUrl.port })
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
            const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
            return new Promise(resolve => setTimeout(() => resolve(), ms));
        });
    }
    _processResponse(res, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const statusCode = res.message.statusCode || 0;
                const response = {
                    statusCode,
                    result: null,
                    headers: {}
                };
                // not found leads to null obj returned
                if (statusCode === HttpCodes.NotFound) {
                    resolve(response);
                }
                // get the result from the body
                function dateTimeDeserializer(key, value) {
                    if (typeof value === 'string') {
                        const a = new Date(value);
                        if (!isNaN(a.valueOf())) {
                            return a;
                        }
                    }
                    return value;
                }
                let obj;
                let contents;
                try {
                    contents = yield res.readBody();
                    if (contents && contents.length > 0) {
                        if (options && options.deserializeDates) {
                            obj = JSON.parse(contents, dateTimeDeserializer);
                        }
                        else {
                            obj = JSON.parse(contents);
                        }
                        response.result = obj;
                    }
                    response.headers = res.message.headers;
                }
                catch (err) {
                    // Invalid resource (contents not json);  leaving result obj null
                }
                // note that 3xx redirects are handled by the http layer.
                if (statusCode > 299) {
                    let msg;
                    // if exception/error in body, attempt to get better error
                    if (obj && obj.message) {
                        msg = obj.message;
                    }
                    else if (contents && contents.length > 0) {
                        // it may be the case that the exception is in the body message as string
                        msg = contents;
                    }
                    else {
                        msg = `Failed request: (${statusCode})`;
                    }
                    const err = new HttpClientError(msg, statusCode);
                    err.result = response.result;
                    reject(err);
                }
                else {
                    resolve(response);
                }
            }));
        });
    }
}
exports.HttpClient = HttpClient;
const lowercaseKeys = (obj) => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9835:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkBypass = exports.getProxyUrl = void 0;
function getProxyUrl(reqUrl) {
    const usingSsl = reqUrl.protocol === 'https:';
    if (checkBypass(reqUrl)) {
        return undefined;
    }
    const proxyVar = (() => {
        if (usingSsl) {
            return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        }
        else {
            return process.env['http_proxy'] || process.env['HTTP_PROXY'];
        }
    })();
    if (proxyVar) {
        return new URL(proxyVar);
    }
    else {
        return undefined;
    }
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    const noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    const upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (const upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;
//# sourceMappingURL=proxy.js.map

/***/ }),

/***/ 1962:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCmdPath = exports.tryGetExecutablePath = exports.isRooted = exports.isDirectory = exports.exists = exports.READONLY = exports.UV_FS_O_EXLOCK = exports.IS_WINDOWS = exports.unlink = exports.symlink = exports.stat = exports.rmdir = exports.rm = exports.rename = exports.readlink = exports.readdir = exports.open = exports.mkdir = exports.lstat = exports.copyFile = exports.chmod = void 0;
const fs = __importStar(__nccwpck_require__(7147));
const path = __importStar(__nccwpck_require__(1017));
_a = fs.promises
// export const {open} = 'fs'
, exports.chmod = _a.chmod, exports.copyFile = _a.copyFile, exports.lstat = _a.lstat, exports.mkdir = _a.mkdir, exports.open = _a.open, exports.readdir = _a.readdir, exports.readlink = _a.readlink, exports.rename = _a.rename, exports.rm = _a.rm, exports.rmdir = _a.rmdir, exports.stat = _a.stat, exports.symlink = _a.symlink, exports.unlink = _a.unlink;
// export const {open} = 'fs'
exports.IS_WINDOWS = process.platform === 'win32';
// See https://github.com/nodejs/node/blob/d0153aee367422d0858105abec186da4dff0a0c5/deps/uv/include/uv/win.h#L691
exports.UV_FS_O_EXLOCK = 0x10000000;
exports.READONLY = fs.constants.O_RDONLY;
function exists(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.stat(fsPath);
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                return false;
            }
            throw err;
        }
        return true;
    });
}
exports.exists = exists;
function isDirectory(fsPath, useStat = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const stats = useStat ? yield exports.stat(fsPath) : yield exports.lstat(fsPath);
        return stats.isDirectory();
    });
}
exports.isDirectory = isDirectory;
/**
 * On OSX/Linux, true if path starts with '/'. On Windows, true for paths like:
 * \, \hello, \\hello\share, C:, and C:\hello (and corresponding alternate separator cases).
 */
function isRooted(p) {
    p = normalizeSeparators(p);
    if (!p) {
        throw new Error('isRooted() parameter "p" cannot be empty');
    }
    if (exports.IS_WINDOWS) {
        return (p.startsWith('\\') || /^[A-Z]:/i.test(p) // e.g. \ or \hello or \\hello
        ); // e.g. C: or C:\hello
    }
    return p.startsWith('/');
}
exports.isRooted = isRooted;
/**
 * Best effort attempt to determine whether a file exists and is executable.
 * @param filePath    file path to check
 * @param extensions  additional file extensions to try
 * @return if file exists and is executable, returns the file path. otherwise empty string.
 */
function tryGetExecutablePath(filePath, extensions) {
    return __awaiter(this, void 0, void 0, function* () {
        let stats = undefined;
        try {
            // test file exists
            stats = yield exports.stat(filePath);
        }
        catch (err) {
            if (err.code !== 'ENOENT') {
                // eslint-disable-next-line no-console
                console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
            }
        }
        if (stats && stats.isFile()) {
            if (exports.IS_WINDOWS) {
                // on Windows, test for valid extension
                const upperExt = path.extname(filePath).toUpperCase();
                if (extensions.some(validExt => validExt.toUpperCase() === upperExt)) {
                    return filePath;
                }
            }
            else {
                if (isUnixExecutable(stats)) {
                    return filePath;
                }
            }
        }
        // try each extension
        const originalFilePath = filePath;
        for (const extension of extensions) {
            filePath = originalFilePath + extension;
            stats = undefined;
            try {
                stats = yield exports.stat(filePath);
            }
            catch (err) {
                if (err.code !== 'ENOENT') {
                    // eslint-disable-next-line no-console
                    console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
                }
            }
            if (stats && stats.isFile()) {
                if (exports.IS_WINDOWS) {
                    // preserve the case of the actual file (since an extension was appended)
                    try {
                        const directory = path.dirname(filePath);
                        const upperName = path.basename(filePath).toUpperCase();
                        for (const actualName of yield exports.readdir(directory)) {
                            if (upperName === actualName.toUpperCase()) {
                                filePath = path.join(directory, actualName);
                                break;
                            }
                        }
                    }
                    catch (err) {
                        // eslint-disable-next-line no-console
                        console.log(`Unexpected error attempting to determine the actual case of the file '${filePath}': ${err}`);
                    }
                    return filePath;
                }
                else {
                    if (isUnixExecutable(stats)) {
                        return filePath;
                    }
                }
            }
        }
        return '';
    });
}
exports.tryGetExecutablePath = tryGetExecutablePath;
function normalizeSeparators(p) {
    p = p || '';
    if (exports.IS_WINDOWS) {
        // convert slashes on Windows
        p = p.replace(/\//g, '\\');
        // remove redundant slashes
        return p.replace(/\\\\+/g, '\\');
    }
    // remove redundant slashes
    return p.replace(/\/\/+/g, '/');
}
// on Mac/Linux, test the execute bit
//     R   W  X  R  W X R W X
//   256 128 64 32 16 8 4 2 1
function isUnixExecutable(stats) {
    return ((stats.mode & 1) > 0 ||
        ((stats.mode & 8) > 0 && stats.gid === process.getgid()) ||
        ((stats.mode & 64) > 0 && stats.uid === process.getuid()));
}
// Get the path of cmd.exe in windows
function getCmdPath() {
    var _a;
    return (_a = process.env['COMSPEC']) !== null && _a !== void 0 ? _a : `cmd.exe`;
}
exports.getCmdPath = getCmdPath;
//# sourceMappingURL=io-util.js.map

/***/ }),

/***/ 7436:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findInPath = exports.which = exports.mkdirP = exports.rmRF = exports.mv = exports.cp = void 0;
const assert_1 = __nccwpck_require__(9491);
const path = __importStar(__nccwpck_require__(1017));
const ioUtil = __importStar(__nccwpck_require__(1962));
/**
 * Copies a file or folder.
 * Based off of shelljs - https://github.com/shelljs/shelljs/blob/9237f66c52e5daa40458f94f9565e18e8132f5a6/src/cp.js
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See CopyOptions.
 */
function cp(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const { force, recursive, copySourceDirectory } = readCopyOptions(options);
        const destStat = (yield ioUtil.exists(dest)) ? yield ioUtil.stat(dest) : null;
        // Dest is an existing file, but not forcing
        if (destStat && destStat.isFile() && !force) {
            return;
        }
        // If dest is an existing directory, should copy inside.
        const newDest = destStat && destStat.isDirectory() && copySourceDirectory
            ? path.join(dest, path.basename(source))
            : dest;
        if (!(yield ioUtil.exists(source))) {
            throw new Error(`no such file or directory: ${source}`);
        }
        const sourceStat = yield ioUtil.stat(source);
        if (sourceStat.isDirectory()) {
            if (!recursive) {
                throw new Error(`Failed to copy. ${source} is a directory, but tried to copy without recursive flag.`);
            }
            else {
                yield cpDirRecursive(source, newDest, 0, force);
            }
        }
        else {
            if (path.relative(source, newDest) === '') {
                // a file cannot be copied to itself
                throw new Error(`'${newDest}' and '${source}' are the same file`);
            }
            yield copyFile(source, newDest, force);
        }
    });
}
exports.cp = cp;
/**
 * Moves a path.
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See MoveOptions.
 */
function mv(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield ioUtil.exists(dest)) {
            let destExists = true;
            if (yield ioUtil.isDirectory(dest)) {
                // If dest is directory copy src into dest
                dest = path.join(dest, path.basename(source));
                destExists = yield ioUtil.exists(dest);
            }
            if (destExists) {
                if (options.force == null || options.force) {
                    yield rmRF(dest);
                }
                else {
                    throw new Error('Destination already exists');
                }
            }
        }
        yield mkdirP(path.dirname(dest));
        yield ioUtil.rename(source, dest);
    });
}
exports.mv = mv;
/**
 * Remove a path recursively with force
 *
 * @param inputPath path to remove
 */
function rmRF(inputPath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (ioUtil.IS_WINDOWS) {
            // Check for invalid characters
            // https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file
            if (/[*"<>|]/.test(inputPath)) {
                throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows');
            }
        }
        try {
            // note if path does not exist, error is silent
            yield ioUtil.rm(inputPath, {
                force: true,
                maxRetries: 3,
                recursive: true,
                retryDelay: 300
            });
        }
        catch (err) {
            throw new Error(`File was unable to be removed ${err}`);
        }
    });
}
exports.rmRF = rmRF;
/**
 * Make a directory.  Creates the full path with folders in between
 * Will throw if it fails
 *
 * @param   fsPath        path to create
 * @returns Promise<void>
 */
function mkdirP(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        assert_1.ok(fsPath, 'a path argument must be provided');
        yield ioUtil.mkdir(fsPath, { recursive: true });
    });
}
exports.mkdirP = mkdirP;
/**
 * Returns path of a tool had the tool actually been invoked.  Resolves via paths.
 * If you check and the tool does not exist, it will throw.
 *
 * @param     tool              name of the tool
 * @param     check             whether to check if tool exists
 * @returns   Promise<string>   path to tool
 */
function which(tool, check) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // recursive when check=true
        if (check) {
            const result = yield which(tool, false);
            if (!result) {
                if (ioUtil.IS_WINDOWS) {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`);
                }
                else {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
                }
            }
            return result;
        }
        const matches = yield findInPath(tool);
        if (matches && matches.length > 0) {
            return matches[0];
        }
        return '';
    });
}
exports.which = which;
/**
 * Returns a list of all occurrences of the given tool on the system path.
 *
 * @returns   Promise<string[]>  the paths of the tool
 */
function findInPath(tool) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // build the list of extensions to try
        const extensions = [];
        if (ioUtil.IS_WINDOWS && process.env['PATHEXT']) {
            for (const extension of process.env['PATHEXT'].split(path.delimiter)) {
                if (extension) {
                    extensions.push(extension);
                }
            }
        }
        // if it's rooted, return it if exists. otherwise return empty.
        if (ioUtil.isRooted(tool)) {
            const filePath = yield ioUtil.tryGetExecutablePath(tool, extensions);
            if (filePath) {
                return [filePath];
            }
            return [];
        }
        // if any path separators, return empty
        if (tool.includes(path.sep)) {
            return [];
        }
        // build the list of directories
        //
        // Note, technically "where" checks the current directory on Windows. From a toolkit perspective,
        // it feels like we should not do this. Checking the current directory seems like more of a use
        // case of a shell, and the which() function exposed by the toolkit should strive for consistency
        // across platforms.
        const directories = [];
        if (process.env.PATH) {
            for (const p of process.env.PATH.split(path.delimiter)) {
                if (p) {
                    directories.push(p);
                }
            }
        }
        // find all matches
        const matches = [];
        for (const directory of directories) {
            const filePath = yield ioUtil.tryGetExecutablePath(path.join(directory, tool), extensions);
            if (filePath) {
                matches.push(filePath);
            }
        }
        return matches;
    });
}
exports.findInPath = findInPath;
function readCopyOptions(options) {
    const force = options.force == null ? true : options.force;
    const recursive = Boolean(options.recursive);
    const copySourceDirectory = options.copySourceDirectory == null
        ? true
        : Boolean(options.copySourceDirectory);
    return { force, recursive, copySourceDirectory };
}
function cpDirRecursive(sourceDir, destDir, currentDepth, force) {
    return __awaiter(this, void 0, void 0, function* () {
        // Ensure there is not a run away recursive copy
        if (currentDepth >= 255)
            return;
        currentDepth++;
        yield mkdirP(destDir);
        const files = yield ioUtil.readdir(sourceDir);
        for (const fileName of files) {
            const srcFile = `${sourceDir}/${fileName}`;
            const destFile = `${destDir}/${fileName}`;
            const srcFileStat = yield ioUtil.lstat(srcFile);
            if (srcFileStat.isDirectory()) {
                // Recurse
                yield cpDirRecursive(srcFile, destFile, currentDepth, force);
            }
            else {
                yield copyFile(srcFile, destFile, force);
            }
        }
        // Change the mode for the newly created directory
        yield ioUtil.chmod(destDir, (yield ioUtil.stat(sourceDir)).mode);
    });
}
// Buffered file copy
function copyFile(srcFile, destFile, force) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((yield ioUtil.lstat(srcFile)).isSymbolicLink()) {
            // unlink/re-link it
            try {
                yield ioUtil.lstat(destFile);
                yield ioUtil.unlink(destFile);
            }
            catch (e) {
                // Try to override file permission
                if (e.code === 'EPERM') {
                    yield ioUtil.chmod(destFile, '0666');
                    yield ioUtil.unlink(destFile);
                }
                // other errors = it doesn't exist, no work to do
            }
            // Copy over symlink
            const symlinkFull = yield ioUtil.readlink(srcFile);
            yield ioUtil.symlink(symlinkFull, destFile, ioUtil.IS_WINDOWS ? 'junction' : null);
        }
        else if (!(yield ioUtil.exists(destFile)) || force) {
            yield ioUtil.copyFile(srcFile, destFile);
        }
    });
}
//# sourceMappingURL=io.js.map

/***/ }),

/***/ 5989:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveHttpAuthSchemeConfig = exports.defaultCodeartifactHttpAuthSchemeProvider = exports.defaultCodeartifactHttpAuthSchemeParametersProvider = void 0;
const httpAuthSchemes_1 = __nccwpck_require__(7862);
const util_middleware_1 = __nccwpck_require__(2390);
const defaultCodeartifactHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
        operation: (0, util_middleware_1.getSmithyContext)(context).operation,
        region: await (0, util_middleware_1.normalizeProvider)(config.region)() || (() => {
            throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })(),
    };
};
exports.defaultCodeartifactHttpAuthSchemeParametersProvider = defaultCodeartifactHttpAuthSchemeParametersProvider;
function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
            name: "codeartifact",
            region: authParameters.region,
        },
        propertiesExtractor: (config, context) => ({
            signingProperties: {
                config,
                context,
            },
        }),
    };
}
const defaultCodeartifactHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
        default: {
            options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
    }
    return options;
};
exports.defaultCodeartifactHttpAuthSchemeProvider = defaultCodeartifactHttpAuthSchemeProvider;
const resolveHttpAuthSchemeConfig = (config) => {
    const config_0 = (0, httpAuthSchemes_1.resolveAwsSdkSigV4Config)(config);
    return Object.assign(config_0, {
        authSchemePreference: (0, util_middleware_1.normalizeProvider)(config.authSchemePreference ?? []),
    });
};
exports.resolveHttpAuthSchemeConfig = resolveHttpAuthSchemeConfig;


/***/ }),

/***/ 9409:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bdd = void 0;
const util_endpoints_1 = __nccwpck_require__(5473);
const k = "ref";
const a = -1, b = true, c = "isSet", d = "PartitionResult", e = "booleanEquals", f = "getAttr", g = { [k]: "Endpoint" }, h = { [k]: d }, i = {}, j = [{ [k]: "Region" }];
const _data = {
    conditions: [
        [c, [g]],
        [c, j],
        ["aws.partition", j, d],
        [e, [{ [k]: "UseFIPS" }, b]],
        [e, [{ [k]: "UseDualStack" }, b]],
        [e, [{ fn: f, argv: [h, "supportsDualStack"] }, b]],
        [e, [{ fn: f, argv: [h, "supportsFIPS"] }, b]]
    ],
    results: [
        [a],
        [a, "Invalid Configuration: FIPS and custom endpoint are not supported"],
        [a, "Invalid Configuration: Dualstack and custom endpoint are not supported"],
        [g, i],
        ["https://codeartifact-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", i],
        [a, "FIPS and DualStack are enabled, but this partition does not support one or both"],
        ["https://codeartifact-fips.{Region}.{PartitionResult#dnsSuffix}", i],
        [a, "FIPS is enabled but this partition does not support FIPS"],
        ["https://codeartifact.{Region}.{PartitionResult#dualStackDnsSuffix}", i],
        [a, "DualStack is enabled but this partition does not support DualStack"],
        ["https://codeartifact.{Region}.{PartitionResult#dnsSuffix}", i],
        [a, "Invalid Configuration: Missing Region"]
    ]
};
const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
    -1, 1, -1,
    0, 12, 3,
    1, 4, r + 11,
    2, 5, r + 11,
    3, 8, 6,
    4, 7, r + 10,
    5, r + 8, r + 9,
    4, 10, 9,
    6, r + 6, r + 7,
    5, 11, r + 5,
    6, r + 4, r + 5,
    3, r + 1, 13,
    4, r + 2, r + 3,
]);
exports.bdd = util_endpoints_1.BinaryDecisionDiagram.from(nodes, root, _data.conditions, _data.results);


/***/ }),

/***/ 3545:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultEndpointResolver = void 0;
const util_endpoints_1 = __nccwpck_require__(3350);
const util_endpoints_2 = __nccwpck_require__(5473);
const bdd_1 = __nccwpck_require__(9409);
const cache = new util_endpoints_2.EndpointCache({
    size: 50,
    params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"],
});
const defaultEndpointResolver = (endpointParams, context = {}) => {
    return cache.get(endpointParams, () => (0, util_endpoints_2.decideEndpoint)(bdd_1.bdd, {
        endpointParams: endpointParams,
        logger: context.logger,
    }));
};
exports.defaultEndpointResolver = defaultEndpointResolver;
util_endpoints_2.customEndpointFunctions.aws = util_endpoints_1.awsEndpointFunctions;


/***/ }),

/***/ 2523:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var middlewareHostHeader = __nccwpck_require__(2545);
var middlewareLogger = __nccwpck_require__(14);
var middlewareRecursionDetection = __nccwpck_require__(5525);
var middlewareUserAgent = __nccwpck_require__(4688);
var configResolver = __nccwpck_require__(3098);
var core = __nccwpck_require__(5829);
var schema = __nccwpck_require__(9826);
var middlewareContentLength = __nccwpck_require__(2800);
var middlewareEndpoint = __nccwpck_require__(2918);
var middlewareRetry = __nccwpck_require__(6039);
var smithyClient = __nccwpck_require__(3570);
var httpAuthSchemeProvider = __nccwpck_require__(5989);
var runtimeConfig = __nccwpck_require__(4292);
var regionConfigResolver = __nccwpck_require__(8156);
var protocolHttp = __nccwpck_require__(4418);
var schemas_0 = __nccwpck_require__(8362);
var errors = __nccwpck_require__(1028);
var CodeartifactServiceException = __nccwpck_require__(1338);

const resolveClientEndpointParameters = (options) => {
    return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "codeartifact",
    });
};
const commonParams = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
};

const getHttpAuthExtensionConfiguration = (runtimeConfig) => {
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
        setHttpAuthScheme(httpAuthScheme) {
            const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
            if (index === -1) {
                _httpAuthSchemes.push(httpAuthScheme);
            }
            else {
                _httpAuthSchemes.splice(index, 1, httpAuthScheme);
            }
        },
        httpAuthSchemes() {
            return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
            _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
            return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
            _credentials = credentials;
        },
        credentials() {
            return _credentials;
        },
    };
};
const resolveHttpAuthRuntimeConfig = (config) => {
    return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials(),
    };
};

const resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = Object.assign(regionConfigResolver.getAwsRegionExtensionConfiguration(runtimeConfig), smithyClient.getDefaultExtensionConfiguration(runtimeConfig), protocolHttp.getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return Object.assign(runtimeConfig, regionConfigResolver.resolveAwsRegionExtensionConfiguration(extensionConfiguration), smithyClient.resolveDefaultRuntimeConfig(extensionConfiguration), protocolHttp.resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
};

class CodeartifactClient extends smithyClient.Client {
    config;
    constructor(...[configuration]) {
        const _config_0 = runtimeConfig.getRuntimeConfig(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = middlewareUserAgent.resolveUserAgentConfig(_config_1);
        const _config_3 = middlewareRetry.resolveRetryConfig(_config_2);
        const _config_4 = configResolver.resolveRegionConfig(_config_3);
        const _config_5 = middlewareHostHeader.resolveHostHeaderConfig(_config_4);
        const _config_6 = middlewareEndpoint.resolveEndpointConfig(_config_5);
        const _config_7 = httpAuthSchemeProvider.resolveHttpAuthSchemeConfig(_config_6);
        const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use(schema.getSchemaSerdePlugin(this.config));
        this.middlewareStack.use(middlewareUserAgent.getUserAgentPlugin(this.config));
        this.middlewareStack.use(middlewareRetry.getRetryPlugin(this.config));
        this.middlewareStack.use(middlewareContentLength.getContentLengthPlugin(this.config));
        this.middlewareStack.use(middlewareHostHeader.getHostHeaderPlugin(this.config));
        this.middlewareStack.use(middlewareLogger.getLoggerPlugin(this.config));
        this.middlewareStack.use(middlewareRecursionDetection.getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(core.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider: httpAuthSchemeProvider.defaultCodeartifactHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: async (config) => new core.DefaultIdentityProviderConfig({
                "aws.auth#sigv4": config.credentials,
            }),
        }));
        this.middlewareStack.use(core.getHttpSigningPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}

class AssociateExternalConnectionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "AssociateExternalConnection", {})
    .n("CodeartifactClient", "AssociateExternalConnectionCommand")
    .sc(schemas_0.AssociateExternalConnection$)
    .build() {
}

class CopyPackageVersionsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "CopyPackageVersions", {})
    .n("CodeartifactClient", "CopyPackageVersionsCommand")
    .sc(schemas_0.CopyPackageVersions$)
    .build() {
}

class CreateDomainCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "CreateDomain", {})
    .n("CodeartifactClient", "CreateDomainCommand")
    .sc(schemas_0.CreateDomain$)
    .build() {
}

class CreatePackageGroupCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "CreatePackageGroup", {})
    .n("CodeartifactClient", "CreatePackageGroupCommand")
    .sc(schemas_0.CreatePackageGroup$)
    .build() {
}

class CreateRepositoryCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "CreateRepository", {})
    .n("CodeartifactClient", "CreateRepositoryCommand")
    .sc(schemas_0.CreateRepository$)
    .build() {
}

class DeleteDomainCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "DeleteDomain", {})
    .n("CodeartifactClient", "DeleteDomainCommand")
    .sc(schemas_0.DeleteDomain$)
    .build() {
}

class DeleteDomainPermissionsPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "DeleteDomainPermissionsPolicy", {})
    .n("CodeartifactClient", "DeleteDomainPermissionsPolicyCommand")
    .sc(schemas_0.DeleteDomainPermissionsPolicy$)
    .build() {
}

class DeletePackageCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "DeletePackage", {})
    .n("CodeartifactClient", "DeletePackageCommand")
    .sc(schemas_0.DeletePackage$)
    .build() {
}

class DeletePackageGroupCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "DeletePackageGroup", {})
    .n("CodeartifactClient", "DeletePackageGroupCommand")
    .sc(schemas_0.DeletePackageGroup$)
    .build() {
}

class DeletePackageVersionsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "DeletePackageVersions", {})
    .n("CodeartifactClient", "DeletePackageVersionsCommand")
    .sc(schemas_0.DeletePackageVersions$)
    .build() {
}

class DeleteRepositoryCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "DeleteRepository", {})
    .n("CodeartifactClient", "DeleteRepositoryCommand")
    .sc(schemas_0.DeleteRepository$)
    .build() {
}

class DeleteRepositoryPermissionsPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "DeleteRepositoryPermissionsPolicy", {})
    .n("CodeartifactClient", "DeleteRepositoryPermissionsPolicyCommand")
    .sc(schemas_0.DeleteRepositoryPermissionsPolicy$)
    .build() {
}

class DescribeDomainCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "DescribeDomain", {})
    .n("CodeartifactClient", "DescribeDomainCommand")
    .sc(schemas_0.DescribeDomain$)
    .build() {
}

class DescribePackageCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "DescribePackage", {})
    .n("CodeartifactClient", "DescribePackageCommand")
    .sc(schemas_0.DescribePackage$)
    .build() {
}

class DescribePackageGroupCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "DescribePackageGroup", {})
    .n("CodeartifactClient", "DescribePackageGroupCommand")
    .sc(schemas_0.DescribePackageGroup$)
    .build() {
}

class DescribePackageVersionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "DescribePackageVersion", {})
    .n("CodeartifactClient", "DescribePackageVersionCommand")
    .sc(schemas_0.DescribePackageVersion$)
    .build() {
}

class DescribeRepositoryCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "DescribeRepository", {})
    .n("CodeartifactClient", "DescribeRepositoryCommand")
    .sc(schemas_0.DescribeRepository$)
    .build() {
}

class DisassociateExternalConnectionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "DisassociateExternalConnection", {})
    .n("CodeartifactClient", "DisassociateExternalConnectionCommand")
    .sc(schemas_0.DisassociateExternalConnection$)
    .build() {
}

class DisposePackageVersionsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "DisposePackageVersions", {})
    .n("CodeartifactClient", "DisposePackageVersionsCommand")
    .sc(schemas_0.DisposePackageVersions$)
    .build() {
}

class GetAssociatedPackageGroupCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "GetAssociatedPackageGroup", {})
    .n("CodeartifactClient", "GetAssociatedPackageGroupCommand")
    .sc(schemas_0.GetAssociatedPackageGroup$)
    .build() {
}

class GetAuthorizationTokenCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "GetAuthorizationToken", {})
    .n("CodeartifactClient", "GetAuthorizationTokenCommand")
    .sc(schemas_0.GetAuthorizationToken$)
    .build() {
}

class GetDomainPermissionsPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "GetDomainPermissionsPolicy", {})
    .n("CodeartifactClient", "GetDomainPermissionsPolicyCommand")
    .sc(schemas_0.GetDomainPermissionsPolicy$)
    .build() {
}

class GetPackageVersionAssetCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "GetPackageVersionAsset", {})
    .n("CodeartifactClient", "GetPackageVersionAssetCommand")
    .sc(schemas_0.GetPackageVersionAsset$)
    .build() {
}

class GetPackageVersionReadmeCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "GetPackageVersionReadme", {})
    .n("CodeartifactClient", "GetPackageVersionReadmeCommand")
    .sc(schemas_0.GetPackageVersionReadme$)
    .build() {
}

class GetRepositoryEndpointCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "GetRepositoryEndpoint", {})
    .n("CodeartifactClient", "GetRepositoryEndpointCommand")
    .sc(schemas_0.GetRepositoryEndpoint$)
    .build() {
}

class GetRepositoryPermissionsPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "GetRepositoryPermissionsPolicy", {})
    .n("CodeartifactClient", "GetRepositoryPermissionsPolicyCommand")
    .sc(schemas_0.GetRepositoryPermissionsPolicy$)
    .build() {
}

class ListAllowedRepositoriesForGroupCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "ListAllowedRepositoriesForGroup", {})
    .n("CodeartifactClient", "ListAllowedRepositoriesForGroupCommand")
    .sc(schemas_0.ListAllowedRepositoriesForGroup$)
    .build() {
}

class ListAssociatedPackagesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "ListAssociatedPackages", {})
    .n("CodeartifactClient", "ListAssociatedPackagesCommand")
    .sc(schemas_0.ListAssociatedPackages$)
    .build() {
}

class ListDomainsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "ListDomains", {})
    .n("CodeartifactClient", "ListDomainsCommand")
    .sc(schemas_0.ListDomains$)
    .build() {
}

class ListPackageGroupsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "ListPackageGroups", {})
    .n("CodeartifactClient", "ListPackageGroupsCommand")
    .sc(schemas_0.ListPackageGroups$)
    .build() {
}

class ListPackagesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "ListPackages", {})
    .n("CodeartifactClient", "ListPackagesCommand")
    .sc(schemas_0.ListPackages$)
    .build() {
}

class ListPackageVersionAssetsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "ListPackageVersionAssets", {})
    .n("CodeartifactClient", "ListPackageVersionAssetsCommand")
    .sc(schemas_0.ListPackageVersionAssets$)
    .build() {
}

class ListPackageVersionDependenciesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "ListPackageVersionDependencies", {})
    .n("CodeartifactClient", "ListPackageVersionDependenciesCommand")
    .sc(schemas_0.ListPackageVersionDependencies$)
    .build() {
}

class ListPackageVersionsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "ListPackageVersions", {})
    .n("CodeartifactClient", "ListPackageVersionsCommand")
    .sc(schemas_0.ListPackageVersions$)
    .build() {
}

class ListRepositoriesCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "ListRepositories", {})
    .n("CodeartifactClient", "ListRepositoriesCommand")
    .sc(schemas_0.ListRepositories$)
    .build() {
}

class ListRepositoriesInDomainCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "ListRepositoriesInDomain", {})
    .n("CodeartifactClient", "ListRepositoriesInDomainCommand")
    .sc(schemas_0.ListRepositoriesInDomain$)
    .build() {
}

class ListSubPackageGroupsCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "ListSubPackageGroups", {})
    .n("CodeartifactClient", "ListSubPackageGroupsCommand")
    .sc(schemas_0.ListSubPackageGroups$)
    .build() {
}

class ListTagsForResourceCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "ListTagsForResource", {})
    .n("CodeartifactClient", "ListTagsForResourceCommand")
    .sc(schemas_0.ListTagsForResource$)
    .build() {
}

class PublishPackageVersionCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "PublishPackageVersion", {})
    .n("CodeartifactClient", "PublishPackageVersionCommand")
    .sc(schemas_0.PublishPackageVersion$)
    .build() {
}

class PutDomainPermissionsPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "PutDomainPermissionsPolicy", {})
    .n("CodeartifactClient", "PutDomainPermissionsPolicyCommand")
    .sc(schemas_0.PutDomainPermissionsPolicy$)
    .build() {
}

class PutPackageOriginConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "PutPackageOriginConfiguration", {})
    .n("CodeartifactClient", "PutPackageOriginConfigurationCommand")
    .sc(schemas_0.PutPackageOriginConfiguration$)
    .build() {
}

class PutRepositoryPermissionsPolicyCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "PutRepositoryPermissionsPolicy", {})
    .n("CodeartifactClient", "PutRepositoryPermissionsPolicyCommand")
    .sc(schemas_0.PutRepositoryPermissionsPolicy$)
    .build() {
}

class TagResourceCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "TagResource", {})
    .n("CodeartifactClient", "TagResourceCommand")
    .sc(schemas_0.TagResource$)
    .build() {
}

class UntagResourceCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "UntagResource", {})
    .n("CodeartifactClient", "UntagResourceCommand")
    .sc(schemas_0.UntagResource$)
    .build() {
}

class UpdatePackageGroupCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "UpdatePackageGroup", {})
    .n("CodeartifactClient", "UpdatePackageGroupCommand")
    .sc(schemas_0.UpdatePackageGroup$)
    .build() {
}

class UpdatePackageGroupOriginConfigurationCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "UpdatePackageGroupOriginConfiguration", {})
    .n("CodeartifactClient", "UpdatePackageGroupOriginConfigurationCommand")
    .sc(schemas_0.UpdatePackageGroupOriginConfiguration$)
    .build() {
}

class UpdatePackageVersionsStatusCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "UpdatePackageVersionsStatus", {})
    .n("CodeartifactClient", "UpdatePackageVersionsStatusCommand")
    .sc(schemas_0.UpdatePackageVersionsStatus$)
    .build() {
}

class UpdateRepositoryCommand extends smithyClient.Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("CodeArtifactControlPlaneService", "UpdateRepository", {})
    .n("CodeartifactClient", "UpdateRepositoryCommand")
    .sc(schemas_0.UpdateRepository$)
    .build() {
}

const paginateListAllowedRepositoriesForGroup = core.createPaginator(CodeartifactClient, ListAllowedRepositoriesForGroupCommand, "nextToken", "nextToken", "maxResults");

const paginateListAssociatedPackages = core.createPaginator(CodeartifactClient, ListAssociatedPackagesCommand, "nextToken", "nextToken", "maxResults");

const paginateListDomains = core.createPaginator(CodeartifactClient, ListDomainsCommand, "nextToken", "nextToken", "maxResults");

const paginateListPackageGroups = core.createPaginator(CodeartifactClient, ListPackageGroupsCommand, "nextToken", "nextToken", "maxResults");

const paginateListPackages = core.createPaginator(CodeartifactClient, ListPackagesCommand, "nextToken", "nextToken", "maxResults");

const paginateListPackageVersionAssets = core.createPaginator(CodeartifactClient, ListPackageVersionAssetsCommand, "nextToken", "nextToken", "maxResults");

const paginateListPackageVersions = core.createPaginator(CodeartifactClient, ListPackageVersionsCommand, "nextToken", "nextToken", "maxResults");

const paginateListRepositoriesInDomain = core.createPaginator(CodeartifactClient, ListRepositoriesInDomainCommand, "nextToken", "nextToken", "maxResults");

const paginateListRepositories = core.createPaginator(CodeartifactClient, ListRepositoriesCommand, "nextToken", "nextToken", "maxResults");

const paginateListSubPackageGroups = core.createPaginator(CodeartifactClient, ListSubPackageGroupsCommand, "nextToken", "nextToken", "maxResults");

const commands = {
    AssociateExternalConnectionCommand,
    CopyPackageVersionsCommand,
    CreateDomainCommand,
    CreatePackageGroupCommand,
    CreateRepositoryCommand,
    DeleteDomainCommand,
    DeleteDomainPermissionsPolicyCommand,
    DeletePackageCommand,
    DeletePackageGroupCommand,
    DeletePackageVersionsCommand,
    DeleteRepositoryCommand,
    DeleteRepositoryPermissionsPolicyCommand,
    DescribeDomainCommand,
    DescribePackageCommand,
    DescribePackageGroupCommand,
    DescribePackageVersionCommand,
    DescribeRepositoryCommand,
    DisassociateExternalConnectionCommand,
    DisposePackageVersionsCommand,
    GetAssociatedPackageGroupCommand,
    GetAuthorizationTokenCommand,
    GetDomainPermissionsPolicyCommand,
    GetPackageVersionAssetCommand,
    GetPackageVersionReadmeCommand,
    GetRepositoryEndpointCommand,
    GetRepositoryPermissionsPolicyCommand,
    ListAllowedRepositoriesForGroupCommand,
    ListAssociatedPackagesCommand,
    ListDomainsCommand,
    ListPackageGroupsCommand,
    ListPackagesCommand,
    ListPackageVersionAssetsCommand,
    ListPackageVersionDependenciesCommand,
    ListPackageVersionsCommand,
    ListRepositoriesCommand,
    ListRepositoriesInDomainCommand,
    ListSubPackageGroupsCommand,
    ListTagsForResourceCommand,
    PublishPackageVersionCommand,
    PutDomainPermissionsPolicyCommand,
    PutPackageOriginConfigurationCommand,
    PutRepositoryPermissionsPolicyCommand,
    TagResourceCommand,
    UntagResourceCommand,
    UpdatePackageGroupCommand,
    UpdatePackageGroupOriginConfigurationCommand,
    UpdatePackageVersionsStatusCommand,
    UpdateRepositoryCommand,
};
const paginators = {
    paginateListAllowedRepositoriesForGroup,
    paginateListAssociatedPackages,
    paginateListDomains,
    paginateListPackageGroups,
    paginateListPackages,
    paginateListPackageVersionAssets,
    paginateListPackageVersions,
    paginateListRepositories,
    paginateListRepositoriesInDomain,
    paginateListSubPackageGroups,
};
class Codeartifact extends CodeartifactClient {
}
smithyClient.createAggregatedClient(commands, Codeartifact, { paginators });

const AllowPublish = {
    ALLOW: "ALLOW",
    BLOCK: "BLOCK",
};
const AllowUpstream = {
    ALLOW: "ALLOW",
    BLOCK: "BLOCK",
};
const HashAlgorithm = {
    MD5: "MD5",
    SHA1: "SHA-1",
    SHA256: "SHA-256",
    SHA512: "SHA-512",
};
const PackageGroupAssociationType = {
    STRONG: "STRONG",
    WEAK: "WEAK",
};
const PackageFormat = {
    CARGO: "cargo",
    GENERIC: "generic",
    MAVEN: "maven",
    NPM: "npm",
    NUGET: "nuget",
    PYPI: "pypi",
    RUBY: "ruby",
    SWIFT: "swift",
};
const ExternalConnectionStatus = {
    AVAILABLE: "Available",
};
const ResourceType = {
    ASSET: "asset",
    DOMAIN: "domain",
    PACKAGE: "package",
    PACKAGE_VERSION: "package-version",
    REPOSITORY: "repository",
};
const ValidationExceptionReason = {
    CANNOT_PARSE: "CANNOT_PARSE",
    ENCRYPTION_KEY_ERROR: "ENCRYPTION_KEY_ERROR",
    FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
    OTHER: "OTHER",
    UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
};
const PackageVersionErrorCode = {
    ALREADY_EXISTS: "ALREADY_EXISTS",
    MISMATCHED_REVISION: "MISMATCHED_REVISION",
    MISMATCHED_STATUS: "MISMATCHED_STATUS",
    NOT_ALLOWED: "NOT_ALLOWED",
    NOT_FOUND: "NOT_FOUND",
    SKIPPED: "SKIPPED",
};
const PackageVersionStatus = {
    ARCHIVED: "Archived",
    DELETED: "Deleted",
    DISPOSED: "Disposed",
    PUBLISHED: "Published",
    UNFINISHED: "Unfinished",
    UNLISTED: "Unlisted",
};
const DomainStatus = {
    ACTIVE: "Active",
    DELETED: "Deleted",
};
const PackageGroupOriginRestrictionType = {
    EXTERNAL_UPSTREAM: "EXTERNAL_UPSTREAM",
    INTERNAL_UPSTREAM: "INTERNAL_UPSTREAM",
    PUBLISH: "PUBLISH",
};
const PackageGroupOriginRestrictionMode = {
    ALLOW: "ALLOW",
    ALLOW_SPECIFIC_REPOSITORIES: "ALLOW_SPECIFIC_REPOSITORIES",
    BLOCK: "BLOCK",
    INHERIT: "INHERIT",
};
const PackageVersionOriginType = {
    EXTERNAL: "EXTERNAL",
    INTERNAL: "INTERNAL",
    UNKNOWN: "UNKNOWN",
};
const EndpointType = {
    DUALSTACK: "dualstack",
    IPV4: "ipv4",
};
const PackageVersionSortType = {
    PUBLISHED_TIME: "PUBLISHED_TIME",
};
const PackageGroupAllowedRepositoryUpdateType = {
    ADDED: "ADDED",
    REMOVED: "REMOVED",
};

exports.$Command = smithyClient.Command;
exports.__Client = smithyClient.Client;
exports.CodeartifactServiceException = CodeartifactServiceException.CodeartifactServiceException;
exports.AllowPublish = AllowPublish;
exports.AllowUpstream = AllowUpstream;
exports.AssociateExternalConnectionCommand = AssociateExternalConnectionCommand;
exports.Codeartifact = Codeartifact;
exports.CodeartifactClient = CodeartifactClient;
exports.CopyPackageVersionsCommand = CopyPackageVersionsCommand;
exports.CreateDomainCommand = CreateDomainCommand;
exports.CreatePackageGroupCommand = CreatePackageGroupCommand;
exports.CreateRepositoryCommand = CreateRepositoryCommand;
exports.DeleteDomainCommand = DeleteDomainCommand;
exports.DeleteDomainPermissionsPolicyCommand = DeleteDomainPermissionsPolicyCommand;
exports.DeletePackageCommand = DeletePackageCommand;
exports.DeletePackageGroupCommand = DeletePackageGroupCommand;
exports.DeletePackageVersionsCommand = DeletePackageVersionsCommand;
exports.DeleteRepositoryCommand = DeleteRepositoryCommand;
exports.DeleteRepositoryPermissionsPolicyCommand = DeleteRepositoryPermissionsPolicyCommand;
exports.DescribeDomainCommand = DescribeDomainCommand;
exports.DescribePackageCommand = DescribePackageCommand;
exports.DescribePackageGroupCommand = DescribePackageGroupCommand;
exports.DescribePackageVersionCommand = DescribePackageVersionCommand;
exports.DescribeRepositoryCommand = DescribeRepositoryCommand;
exports.DisassociateExternalConnectionCommand = DisassociateExternalConnectionCommand;
exports.DisposePackageVersionsCommand = DisposePackageVersionsCommand;
exports.DomainStatus = DomainStatus;
exports.EndpointType = EndpointType;
exports.ExternalConnectionStatus = ExternalConnectionStatus;
exports.GetAssociatedPackageGroupCommand = GetAssociatedPackageGroupCommand;
exports.GetAuthorizationTokenCommand = GetAuthorizationTokenCommand;
exports.GetDomainPermissionsPolicyCommand = GetDomainPermissionsPolicyCommand;
exports.GetPackageVersionAssetCommand = GetPackageVersionAssetCommand;
exports.GetPackageVersionReadmeCommand = GetPackageVersionReadmeCommand;
exports.GetRepositoryEndpointCommand = GetRepositoryEndpointCommand;
exports.GetRepositoryPermissionsPolicyCommand = GetRepositoryPermissionsPolicyCommand;
exports.HashAlgorithm = HashAlgorithm;
exports.ListAllowedRepositoriesForGroupCommand = ListAllowedRepositoriesForGroupCommand;
exports.ListAssociatedPackagesCommand = ListAssociatedPackagesCommand;
exports.ListDomainsCommand = ListDomainsCommand;
exports.ListPackageGroupsCommand = ListPackageGroupsCommand;
exports.ListPackageVersionAssetsCommand = ListPackageVersionAssetsCommand;
exports.ListPackageVersionDependenciesCommand = ListPackageVersionDependenciesCommand;
exports.ListPackageVersionsCommand = ListPackageVersionsCommand;
exports.ListPackagesCommand = ListPackagesCommand;
exports.ListRepositoriesCommand = ListRepositoriesCommand;
exports.ListRepositoriesInDomainCommand = ListRepositoriesInDomainCommand;
exports.ListSubPackageGroupsCommand = ListSubPackageGroupsCommand;
exports.ListTagsForResourceCommand = ListTagsForResourceCommand;
exports.PackageFormat = PackageFormat;
exports.PackageGroupAllowedRepositoryUpdateType = PackageGroupAllowedRepositoryUpdateType;
exports.PackageGroupAssociationType = PackageGroupAssociationType;
exports.PackageGroupOriginRestrictionMode = PackageGroupOriginRestrictionMode;
exports.PackageGroupOriginRestrictionType = PackageGroupOriginRestrictionType;
exports.PackageVersionErrorCode = PackageVersionErrorCode;
exports.PackageVersionOriginType = PackageVersionOriginType;
exports.PackageVersionSortType = PackageVersionSortType;
exports.PackageVersionStatus = PackageVersionStatus;
exports.PublishPackageVersionCommand = PublishPackageVersionCommand;
exports.PutDomainPermissionsPolicyCommand = PutDomainPermissionsPolicyCommand;
exports.PutPackageOriginConfigurationCommand = PutPackageOriginConfigurationCommand;
exports.PutRepositoryPermissionsPolicyCommand = PutRepositoryPermissionsPolicyCommand;
exports.ResourceType = ResourceType;
exports.TagResourceCommand = TagResourceCommand;
exports.UntagResourceCommand = UntagResourceCommand;
exports.UpdatePackageGroupCommand = UpdatePackageGroupCommand;
exports.UpdatePackageGroupOriginConfigurationCommand = UpdatePackageGroupOriginConfigurationCommand;
exports.UpdatePackageVersionsStatusCommand = UpdatePackageVersionsStatusCommand;
exports.UpdateRepositoryCommand = UpdateRepositoryCommand;
exports.ValidationExceptionReason = ValidationExceptionReason;
exports.paginateListAllowedRepositoriesForGroup = paginateListAllowedRepositoriesForGroup;
exports.paginateListAssociatedPackages = paginateListAssociatedPackages;
exports.paginateListDomains = paginateListDomains;
exports.paginateListPackageGroups = paginateListPackageGroups;
exports.paginateListPackageVersionAssets = paginateListPackageVersionAssets;
exports.paginateListPackageVersions = paginateListPackageVersions;
exports.paginateListPackages = paginateListPackages;
exports.paginateListRepositories = paginateListRepositories;
exports.paginateListRepositoriesInDomain = paginateListRepositoriesInDomain;
exports.paginateListSubPackageGroups = paginateListSubPackageGroups;
Object.prototype.hasOwnProperty.call(schemas_0, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: schemas_0['__proto__']
    });

Object.keys(schemas_0).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = schemas_0[k];
});
Object.prototype.hasOwnProperty.call(errors, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: errors['__proto__']
    });

Object.keys(errors).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = errors[k];
});


/***/ }),

/***/ 1338:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodeartifactServiceException = exports.__ServiceException = void 0;
const smithy_client_1 = __nccwpck_require__(3570);
Object.defineProperty(exports, "__ServiceException", ({ enumerable: true, get: function () { return smithy_client_1.ServiceException; } }));
class CodeartifactServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, CodeartifactServiceException.prototype);
    }
}
exports.CodeartifactServiceException = CodeartifactServiceException;


/***/ }),

/***/ 1028:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationException = exports.ThrottlingException = exports.ServiceQuotaExceededException = exports.ResourceNotFoundException = exports.InternalServerException = exports.ConflictException = exports.AccessDeniedException = void 0;
const CodeartifactServiceException_1 = __nccwpck_require__(1338);
class AccessDeniedException extends CodeartifactServiceException_1.CodeartifactServiceException {
    name = "AccessDeniedException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
    }
}
exports.AccessDeniedException = AccessDeniedException;
class ConflictException extends CodeartifactServiceException_1.CodeartifactServiceException {
    name = "ConflictException";
    $fault = "client";
    resourceId;
    resourceType;
    constructor(opts) {
        super({
            name: "ConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ConflictException.prototype);
        this.resourceId = opts.resourceId;
        this.resourceType = opts.resourceType;
    }
}
exports.ConflictException = ConflictException;
class InternalServerException extends CodeartifactServiceException_1.CodeartifactServiceException {
    name = "InternalServerException";
    $fault = "server";
    constructor(opts) {
        super({
            name: "InternalServerException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, InternalServerException.prototype);
    }
}
exports.InternalServerException = InternalServerException;
class ResourceNotFoundException extends CodeartifactServiceException_1.CodeartifactServiceException {
    name = "ResourceNotFoundException";
    $fault = "client";
    resourceId;
    resourceType;
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
        this.resourceId = opts.resourceId;
        this.resourceType = opts.resourceType;
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
class ServiceQuotaExceededException extends CodeartifactServiceException_1.CodeartifactServiceException {
    name = "ServiceQuotaExceededException";
    $fault = "client";
    resourceId;
    resourceType;
    constructor(opts) {
        super({
            name: "ServiceQuotaExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
        this.resourceId = opts.resourceId;
        this.resourceType = opts.resourceType;
    }
}
exports.ServiceQuotaExceededException = ServiceQuotaExceededException;
class ThrottlingException extends CodeartifactServiceException_1.CodeartifactServiceException {
    name = "ThrottlingException";
    $fault = "client";
    retryAfterSeconds;
    constructor(opts) {
        super({
            name: "ThrottlingException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ThrottlingException.prototype);
        this.retryAfterSeconds = opts.retryAfterSeconds;
    }
}
exports.ThrottlingException = ThrottlingException;
class ValidationException extends CodeartifactServiceException_1.CodeartifactServiceException {
    name = "ValidationException";
    $fault = "client";
    reason;
    constructor(opts) {
        super({
            name: "ValidationException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ValidationException.prototype);
        this.reason = opts.reason;
    }
}
exports.ValidationException = ValidationException;


/***/ }),

/***/ 4292:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRuntimeConfig = void 0;
const tslib_1 = __nccwpck_require__(4351);
const package_json_1 = tslib_1.__importDefault(__nccwpck_require__(1838));
const client_1 = __nccwpck_require__(2825);
const httpAuthSchemes_1 = __nccwpck_require__(7862);
const credential_provider_node_1 = __nccwpck_require__(5531);
const util_user_agent_node_1 = __nccwpck_require__(8095);
const config_resolver_1 = __nccwpck_require__(3098);
const hash_node_1 = __nccwpck_require__(3081);
const middleware_retry_1 = __nccwpck_require__(6039);
const node_config_provider_1 = __nccwpck_require__(3461);
const node_http_handler_1 = __nccwpck_require__(258);
const smithy_client_1 = __nccwpck_require__(3570);
const util_body_length_node_1 = __nccwpck_require__(8075);
const util_defaults_mode_node_1 = __nccwpck_require__(2429);
const util_retry_1 = __nccwpck_require__(4902);
const runtimeConfig_shared_1 = __nccwpck_require__(2554);
const getRuntimeConfig = (config) => {
    (0, smithy_client_1.emitWarningIfUnsupportedVersion)(process.version);
    const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
    const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
    (0, client_1.emitWarningIfUnsupportedVersion)(process.version);
    const loaderConfig = {
        profile: config?.profile,
        logger: clientSharedValues.logger,
    };
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        authSchemePreference: config?.authSchemePreference ?? (0, node_config_provider_1.loadConfig)(httpAuthSchemes_1.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
        bodyLengthChecker: config?.bodyLengthChecker ?? util_body_length_node_1.calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? credential_provider_node_1.defaultProvider,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, util_user_agent_node_1.createDefaultUserAgentProvider)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        maxAttempts: config?.maxAttempts ?? (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
        region: config?.region ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, { ...config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
        requestHandler: node_http_handler_1.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ??
            (0, node_config_provider_1.loadConfig)({
                ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || util_retry_1.DEFAULT_RETRY_MODE,
            }, config),
        sha256: config?.sha256 ?? hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? node_http_handler_1.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        userAgentAppId: config?.userAgentAppId ?? (0, node_config_provider_1.loadConfig)(util_user_agent_node_1.NODE_APP_ID_CONFIG_OPTIONS, loaderConfig),
    };
};
exports.getRuntimeConfig = getRuntimeConfig;


/***/ }),

/***/ 2554:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRuntimeConfig = void 0;
const httpAuthSchemes_1 = __nccwpck_require__(7862);
const protocols_1 = __nccwpck_require__(785);
const smithy_client_1 = __nccwpck_require__(3570);
const url_parser_1 = __nccwpck_require__(4681);
const util_base64_1 = __nccwpck_require__(5600);
const util_stream_1 = __nccwpck_require__(6607);
const util_utf8_1 = __nccwpck_require__(1895);
const httpAuthSchemeProvider_1 = __nccwpck_require__(5989);
const endpointResolver_1 = __nccwpck_require__(3545);
const schemas_0_1 = __nccwpck_require__(8362);
const getRuntimeConfig = (config) => {
    return {
        apiVersion: "2018-09-22",
        base64Decoder: config?.base64Decoder ?? util_base64_1.fromBase64,
        base64Encoder: config?.base64Encoder ?? util_base64_1.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? endpointResolver_1.defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? httpAuthSchemeProvider_1.defaultCodeartifactHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
                signer: new httpAuthSchemes_1.AwsSdkSigV4Signer(),
            },
        ],
        logger: config?.logger ?? new smithy_client_1.NoOpLogger(),
        protocol: config?.protocol ?? protocols_1.AwsRestJsonProtocol,
        protocolSettings: config?.protocolSettings ?? {
            defaultNamespace: "com.amazonaws.codeartifact",
            errorTypeRegistries: schemas_0_1.errorTypeRegistries,
            version: "2018-09-22",
            serviceTarget: "CodeArtifactControlPlaneService",
        },
        sdkStreamMixin: config?.sdkStreamMixin ?? util_stream_1.sdkStreamMixin,
        serviceId: config?.serviceId ?? "codeartifact",
        urlParser: config?.urlParser ?? url_parser_1.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? util_utf8_1.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? util_utf8_1.toUtf8,
    };
};
exports.getRuntimeConfig = getRuntimeConfig;


/***/ }),

/***/ 8362:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomainDescription$ = exports.DisposePackageVersionsResult$ = exports.DisposePackageVersionsRequest$ = exports.DisassociateExternalConnectionResult$ = exports.DisassociateExternalConnectionRequest$ = exports.DescribeRepositoryResult$ = exports.DescribeRepositoryRequest$ = exports.DescribePackageVersionResult$ = exports.DescribePackageVersionRequest$ = exports.DescribePackageResult$ = exports.DescribePackageRequest$ = exports.DescribePackageGroupResult$ = exports.DescribePackageGroupRequest$ = exports.DescribeDomainResult$ = exports.DescribeDomainRequest$ = exports.DeleteRepositoryResult$ = exports.DeleteRepositoryRequest$ = exports.DeleteRepositoryPermissionsPolicyResult$ = exports.DeleteRepositoryPermissionsPolicyRequest$ = exports.DeletePackageVersionsResult$ = exports.DeletePackageVersionsRequest$ = exports.DeletePackageResult$ = exports.DeletePackageRequest$ = exports.DeletePackageGroupResult$ = exports.DeletePackageGroupRequest$ = exports.DeleteDomainResult$ = exports.DeleteDomainRequest$ = exports.DeleteDomainPermissionsPolicyResult$ = exports.DeleteDomainPermissionsPolicyRequest$ = exports.CreateRepositoryResult$ = exports.CreateRepositoryRequest$ = exports.CreatePackageGroupResult$ = exports.CreatePackageGroupRequest$ = exports.CreateDomainResult$ = exports.CreateDomainRequest$ = exports.CopyPackageVersionsResult$ = exports.CopyPackageVersionsRequest$ = exports.AssociateExternalConnectionResult$ = exports.AssociateExternalConnectionRequest$ = exports.AssociatedPackage$ = exports.AssetSummary$ = exports.errorTypeRegistries = exports.ValidationException$ = exports.ThrottlingException$ = exports.ServiceQuotaExceededException$ = exports.ResourceNotFoundException$ = exports.InternalServerException$ = exports.ConflictException$ = exports.AccessDeniedException$ = exports.CodeartifactServiceException$ = void 0;
exports.PackageOriginConfiguration$ = exports.PackageGroupSummary$ = exports.PackageGroupReference$ = exports.PackageGroupOriginRestriction$ = exports.PackageGroupOriginConfiguration$ = exports.PackageGroupDescription$ = exports.PackageGroupAllowedRepository$ = exports.PackageDescription$ = exports.PackageDependency$ = exports.ListTagsForResourceResult$ = exports.ListTagsForResourceRequest$ = exports.ListSubPackageGroupsResult$ = exports.ListSubPackageGroupsRequest$ = exports.ListRepositoriesResult$ = exports.ListRepositoriesRequest$ = exports.ListRepositoriesInDomainResult$ = exports.ListRepositoriesInDomainRequest$ = exports.ListPackageVersionsResult$ = exports.ListPackageVersionsRequest$ = exports.ListPackageVersionDependenciesResult$ = exports.ListPackageVersionDependenciesRequest$ = exports.ListPackageVersionAssetsResult$ = exports.ListPackageVersionAssetsRequest$ = exports.ListPackagesResult$ = exports.ListPackagesRequest$ = exports.ListPackageGroupsResult$ = exports.ListPackageGroupsRequest$ = exports.ListDomainsResult$ = exports.ListDomainsRequest$ = exports.ListAssociatedPackagesResult$ = exports.ListAssociatedPackagesRequest$ = exports.ListAllowedRepositoriesForGroupResult$ = exports.ListAllowedRepositoriesForGroupRequest$ = exports.LicenseInfo$ = exports.GetRepositoryPermissionsPolicyResult$ = exports.GetRepositoryPermissionsPolicyRequest$ = exports.GetRepositoryEndpointResult$ = exports.GetRepositoryEndpointRequest$ = exports.GetPackageVersionReadmeResult$ = exports.GetPackageVersionReadmeRequest$ = exports.GetPackageVersionAssetResult$ = exports.GetPackageVersionAssetRequest$ = exports.GetDomainPermissionsPolicyResult$ = exports.GetDomainPermissionsPolicyRequest$ = exports.GetAuthorizationTokenResult$ = exports.GetAuthorizationTokenRequest$ = exports.GetAssociatedPackageGroupResult$ = exports.GetAssociatedPackageGroupRequest$ = exports.DomainSummary$ = exports.DomainEntryPoint$ = void 0;
exports.DescribePackageVersion$ = exports.DescribePackageGroup$ = exports.DescribePackage$ = exports.DescribeDomain$ = exports.DeleteRepositoryPermissionsPolicy$ = exports.DeleteRepository$ = exports.DeletePackageVersions$ = exports.DeletePackageGroup$ = exports.DeletePackage$ = exports.DeleteDomainPermissionsPolicy$ = exports.DeleteDomain$ = exports.CreateRepository$ = exports.CreatePackageGroup$ = exports.CreateDomain$ = exports.CopyPackageVersions$ = exports.AssociateExternalConnection$ = exports.UpstreamRepositoryInfo$ = exports.UpstreamRepository$ = exports.UpdateRepositoryResult$ = exports.UpdateRepositoryRequest$ = exports.UpdatePackageVersionsStatusResult$ = exports.UpdatePackageVersionsStatusRequest$ = exports.UpdatePackageGroupResult$ = exports.UpdatePackageGroupRequest$ = exports.UpdatePackageGroupOriginConfigurationResult$ = exports.UpdatePackageGroupOriginConfigurationRequest$ = exports.UntagResourceResult$ = exports.UntagResourceRequest$ = exports.TagResourceResult$ = exports.TagResourceRequest$ = exports.Tag$ = exports.SuccessfulPackageVersionInfo$ = exports.ResourcePolicy$ = exports.RepositorySummary$ = exports.RepositoryExternalConnectionInfo$ = exports.RepositoryDescription$ = exports.PutRepositoryPermissionsPolicyResult$ = exports.PutRepositoryPermissionsPolicyRequest$ = exports.PutPackageOriginConfigurationResult$ = exports.PutPackageOriginConfigurationRequest$ = exports.PutDomainPermissionsPolicyResult$ = exports.PutDomainPermissionsPolicyRequest$ = exports.PublishPackageVersionResult$ = exports.PublishPackageVersionRequest$ = exports.PackageVersionSummary$ = exports.PackageVersionOrigin$ = exports.PackageVersionError$ = exports.PackageVersionDescription$ = exports.PackageSummary$ = exports.PackageOriginRestrictions$ = void 0;
exports.UpdateRepository$ = exports.UpdatePackageVersionsStatus$ = exports.UpdatePackageGroupOriginConfiguration$ = exports.UpdatePackageGroup$ = exports.UntagResource$ = exports.TagResource$ = exports.PutRepositoryPermissionsPolicy$ = exports.PutPackageOriginConfiguration$ = exports.PutDomainPermissionsPolicy$ = exports.PublishPackageVersion$ = exports.ListTagsForResource$ = exports.ListSubPackageGroups$ = exports.ListRepositoriesInDomain$ = exports.ListRepositories$ = exports.ListPackageVersions$ = exports.ListPackageVersionDependencies$ = exports.ListPackageVersionAssets$ = exports.ListPackages$ = exports.ListPackageGroups$ = exports.ListDomains$ = exports.ListAssociatedPackages$ = exports.ListAllowedRepositoriesForGroup$ = exports.GetRepositoryPermissionsPolicy$ = exports.GetRepositoryEndpoint$ = exports.GetPackageVersionReadme$ = exports.GetPackageVersionAsset$ = exports.GetDomainPermissionsPolicy$ = exports.GetAuthorizationToken$ = exports.GetAssociatedPackageGroup$ = exports.DisposePackageVersions$ = exports.DisassociateExternalConnection$ = exports.DescribeRepository$ = void 0;
const _A = "Asset";
const _ADE = "AccessDeniedException";
const _AEC = "AssociateExternalConnection";
const _AECR = "AssociateExternalConnectionRequest";
const _AECRs = "AssociateExternalConnectionResult";
const _AP = "AssociatedPackage";
const _APL = "AssociatedPackageList";
const _AS = "AssetSummary";
const _ASL = "AssetSummaryList";
const _CD = "CreateDomain";
const _CDR = "CreateDomainRequest";
const _CDRr = "CreateDomainResult";
const _CE = "ConflictException";
const _CPG = "CreatePackageGroup";
const _CPGR = "CreatePackageGroupRequest";
const _CPGRr = "CreatePackageGroupResult";
const _CPV = "CopyPackageVersions";
const _CPVR = "CopyPackageVersionsRequest";
const _CPVRo = "CopyPackageVersionsResult";
const _CR = "CreateRepository";
const _CRR = "CreateRepositoryRequest";
const _CRRr = "CreateRepositoryResult";
const _DD = "DomainDescription";
const _DDPP = "DeleteDomainPermissionsPolicy";
const _DDPPR = "DeleteDomainPermissionsPolicyRequest";
const _DDPPRe = "DeleteDomainPermissionsPolicyResult";
const _DDR = "DeleteDomainRequest";
const _DDRe = "DeleteDomainResult";
const _DDRes = "DescribeDomainRequest";
const _DDResc = "DescribeDomainResult";
const _DDe = "DeleteDomain";
const _DDes = "DescribeDomain";
const _DEC = "DisassociateExternalConnection";
const _DECR = "DisassociateExternalConnectionRequest";
const _DECRi = "DisassociateExternalConnectionResult";
const _DEP = "DomainEntryPoint";
const _DP = "DeletePackage";
const _DPG = "DeletePackageGroup";
const _DPGR = "DeletePackageGroupRequest";
const _DPGRe = "DeletePackageGroupResult";
const _DPGRes = "DescribePackageGroupRequest";
const _DPGResc = "DescribePackageGroupResult";
const _DPGe = "DescribePackageGroup";
const _DPR = "DeletePackageRequest";
const _DPRe = "DeletePackageResult";
const _DPRes = "DescribePackageRequest";
const _DPResc = "DescribePackageResult";
const _DPV = "DeletePackageVersions";
const _DPVR = "DeletePackageVersionsRequest";
const _DPVRe = "DeletePackageVersionsResult";
const _DPVRes = "DescribePackageVersionRequest";
const _DPVResc = "DescribePackageVersionResult";
const _DPVRi = "DisposePackageVersionsRequest";
const _DPVRis = "DisposePackageVersionsResult";
const _DPVe = "DescribePackageVersion";
const _DPVi = "DisposePackageVersions";
const _DPe = "DescribePackage";
const _DR = "DeleteRepository";
const _DRPP = "DeleteRepositoryPermissionsPolicy";
const _DRPPR = "DeleteRepositoryPermissionsPolicyRequest";
const _DRPPRe = "DeleteRepositoryPermissionsPolicyResult";
const _DRR = "DeleteRepositoryRequest";
const _DRRe = "DeleteRepositoryResult";
const _DRRes = "DescribeRepositoryRequest";
const _DRResc = "DescribeRepositoryResult";
const _DRe = "DescribeRepository";
const _DS = "DomainSummary";
const _DSL = "DomainSummaryList";
const _GAPG = "GetAssociatedPackageGroup";
const _GAPGR = "GetAssociatedPackageGroupRequest";
const _GAPGRe = "GetAssociatedPackageGroupResult";
const _GAT = "GetAuthorizationToken";
const _GATR = "GetAuthorizationTokenRequest";
const _GATRe = "GetAuthorizationTokenResult";
const _GDPP = "GetDomainPermissionsPolicy";
const _GDPPR = "GetDomainPermissionsPolicyRequest";
const _GDPPRe = "GetDomainPermissionsPolicyResult";
const _GPVA = "GetPackageVersionAsset";
const _GPVAR = "GetPackageVersionAssetRequest";
const _GPVARe = "GetPackageVersionAssetResult";
const _GPVR = "GetPackageVersionReadme";
const _GPVRR = "GetPackageVersionReadmeRequest";
const _GPVRRe = "GetPackageVersionReadmeResult";
const _GRE = "GetRepositoryEndpoint";
const _GRER = "GetRepositoryEndpointRequest";
const _GRERe = "GetRepositoryEndpointResult";
const _GRPP = "GetRepositoryPermissionsPolicy";
const _GRPPR = "GetRepositoryPermissionsPolicyRequest";
const _GRPPRe = "GetRepositoryPermissionsPolicyResult";
const _ISE = "InternalServerException";
const _LAP = "ListAssociatedPackages";
const _LAPR = "ListAssociatedPackagesRequest";
const _LAPRi = "ListAssociatedPackagesResult";
const _LARFG = "ListAllowedRepositoriesForGroup";
const _LARFGR = "ListAllowedRepositoriesForGroupRequest";
const _LARFGRi = "ListAllowedRepositoriesForGroupResult";
const _LD = "ListDomains";
const _LDR = "ListDomainsRequest";
const _LDRi = "ListDomainsResult";
const _LI = "LicenseInfo";
const _LIL = "LicenseInfoList";
const _LP = "ListPackages";
const _LPG = "ListPackageGroups";
const _LPGR = "ListPackageGroupsRequest";
const _LPGRi = "ListPackageGroupsResult";
const _LPR = "ListPackagesRequest";
const _LPRi = "ListPackagesResult";
const _LPV = "ListPackageVersions";
const _LPVA = "ListPackageVersionAssets";
const _LPVAR = "ListPackageVersionAssetsRequest";
const _LPVARi = "ListPackageVersionAssetsResult";
const _LPVD = "ListPackageVersionDependencies";
const _LPVDR = "ListPackageVersionDependenciesRequest";
const _LPVDRi = "ListPackageVersionDependenciesResult";
const _LPVR = "ListPackageVersionsRequest";
const _LPVRi = "ListPackageVersionsResult";
const _LR = "ListRepositories";
const _LRID = "ListRepositoriesInDomain";
const _LRIDR = "ListRepositoriesInDomainRequest";
const _LRIDRi = "ListRepositoriesInDomainResult";
const _LRR = "ListRepositoriesRequest";
const _LRRi = "ListRepositoriesResult";
const _LSPG = "ListSubPackageGroups";
const _LSPGR = "ListSubPackageGroupsRequest";
const _LSPGRi = "ListSubPackageGroupsResult";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResult";
const _PD = "PackageDependency";
const _PDL = "PackageDependencyList";
const _PDPP = "PutDomainPermissionsPolicy";
const _PDPPR = "PutDomainPermissionsPolicyRequest";
const _PDPPRu = "PutDomainPermissionsPolicyResult";
const _PDa = "PackageDescription";
const _PGAR = "PackageGroupAllowedRepository";
const _PGARL = "PackageGroupAllowedRepositoryList";
const _PGARU = "PackageGroupAllowedRepositoryUpdates";
const _PGARUa = "PackageGroupAllowedRepositoryUpdate";
const _PGD = "PackageGroupDescription";
const _PGOC = "PackageGroupOriginConfiguration";
const _PGOR = "PackageGroupOriginRestriction";
const _PGORa = "PackageGroupOriginRestrictions";
const _PGR = "PackageGroupReference";
const _PGS = "PackageGroupSummary";
const _PGSL = "PackageGroupSummaryList";
const _POC = "PackageOriginConfiguration";
const _POR = "PackageOriginRestrictions";
const _PPOC = "PutPackageOriginConfiguration";
const _PPOCR = "PutPackageOriginConfigurationRequest";
const _PPOCRu = "PutPackageOriginConfigurationResult";
const _PPV = "PublishPackageVersion";
const _PPVR = "PublishPackageVersionRequest";
const _PPVRu = "PublishPackageVersionResult";
const _PRPP = "PutRepositoryPermissionsPolicy";
const _PRPPR = "PutRepositoryPermissionsPolicyRequest";
const _PRPPRu = "PutRepositoryPermissionsPolicyResult";
const _PS = "PackageSummary";
const _PSL = "PackageSummaryList";
const _PVD = "PackageVersionDescription";
const _PVE = "PackageVersionError";
const _PVEM = "PackageVersionErrorMap";
const _PVO = "PackageVersionOrigin";
const _PVS = "PackageVersionSummary";
const _PVSL = "PackageVersionSummaryList";
const _RA = "Retry-After";
const _RD = "RepositoryDescription";
const _RECI = "RepositoryExternalConnectionInfo";
const _RECIL = "RepositoryExternalConnectionInfoList";
const _RNFE = "ResourceNotFoundException";
const _RP = "ResourcePolicy";
const _RS = "RepositorySummary";
const _RSL = "RepositorySummaryList";
const _SPVI = "SuccessfulPackageVersionInfo";
const _SPVIM = "SuccessfulPackageVersionInfoMap";
const _SQEE = "ServiceQuotaExceededException";
const _T = "Tag";
const _TE = "ThrottlingException";
const _TL = "TagList";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResult";
const _UPG = "UpdatePackageGroup";
const _UPGOC = "UpdatePackageGroupOriginConfiguration";
const _UPGOCR = "UpdatePackageGroupOriginConfigurationRequest";
const _UPGOCRp = "UpdatePackageGroupOriginConfigurationResult";
const _UPGR = "UpdatePackageGroupRequest";
const _UPGRp = "UpdatePackageGroupResult";
const _UPVS = "UpdatePackageVersionsStatus";
const _UPVSR = "UpdatePackageVersionsStatusRequest";
const _UPVSRp = "UpdatePackageVersionsStatusResult";
const _UR = "UpstreamRepository";
const _URI = "UpstreamRepositoryInfo";
const _URIL = "UpstreamRepositoryInfoList";
const _URL = "UpstreamRepositoryList";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResult";
const _URRp = "UpdateRepositoryRequest";
const _URRpd = "UpdateRepositoryResult";
const _URn = "UntagResource";
const _URp = "UpdateRepository";
const _VE = "ValidationException";
const _XA = "X-AssetName";
const _XP = "X-PackageVersion";
const _XP_ = "X-PackageVersionRevision";
const _a = "arn";
const _aA = "administratorAccount";
const _aAR = "addAllowedRepositories";
const _aC = "assetContent";
const _aN = "assetName";
const _aO = "allowOverwrite";
const _aR = "allowedRepositories";
const _aRU = "allowedRepositoryUpdates";
const _aSB = "assetSizeBytes";
const _aSHA = "assetSHA256";
const _aT = "associationType";
const _aTu = "authorizationToken";
const _aa = "administrator-account";
const _as = "asset";
const _ass = "assets";
const _c = "client";
const _cI = "contactInfo";
const _cT = "createdTime";
const _d = "domain";
const _dDV = "defaultDisplayVersion";
const _dEP = "domainEntryPoint";
const _dN = "domainName";
const _dNi = "displayName";
const _dO = "domainOwner";
const _dP = "deletedPackage";
const _dR = "destinationRepository";
const _dS = "durationSeconds";
const _dT = "dependencyType";
const _de = "description";
const _dep = "dependencies";
const _do = "domain-owner";
const _doc = "document";
const _dom = "domains";
const _dr = "destination-repository";
const _du = "duration";
const _e = "error";
const _eC = "externalConnection";
const _eCN = "externalConnectionName";
const _eCr = "errorCode";
const _eCx = "externalConnections";
const _eK = "encryptionKey";
const _eM = "effectiveMode";
const _eMr = "errorMessage";
const _eS = "expectedStatus";
const _eT = "endpointType";
const _ec = "external-connection";
const _ex = "expiration";
const _f = "format";
const _fV = "failedVersions";
const _h = "hashes";
const _hE = "httpError";
const _hH = "httpHeader";
const _hP = "homePage";
const _hQ = "httpQuery";
const _ht = "http";
const _iF = "inheritedFrom";
const _iFU = "includeFromUpstream";
const _k = "key";
const _l = "licenses";
const _m = "message";
const _mR = "maxResults";
const _mo = "mode";
const _mr = "max-results";
const _n = "name";
const _nT = "nextToken";
const _na = "namespace";
const _nt = "next-token";
const _o = "owner";
const _oC = "originConfiguration";
const _oRT = "originRestrictionType";
const _oT = "originType";
const _or = "origin";
const _p = "package";
const _pD = "policyDocument";
const _pF = "packageFormat";
const _pG = "packageGroup";
const _pGa = "packageGroups";
const _pN = "packageName";
const _pP = "packagePrefix";
const _pR = "policyRevision";
const _pT = "publishedTime";
const _pV = "packageVersion";
const _pVR = "packageVersionRevision";
const _pa = "packages";
const _par = "parent";
const _pat = "pattern";
const _pg = "package-group";
const _po = "policy";
const _pp = "package-prefix";
const _pr = "policy-revision";
const _pre = "preview";
const _pref = "prefix";
const _pu = "publish";
const _r = "reason";
const _rA = "resourceArn";
const _rAR = "removeAllowedRepositories";
const _rAS = "retryAfterSeconds";
const _rC = "repositoryCount";
const _rCe = "repositoriesCount";
const _rE = "repositoryEndpoint";
const _rI = "resourceId";
const _rN = "repositoryName";
const _rP = "repositoryPrefix";
const _rT = "resourceType";
const _re = "repository";
const _rea = "readme";
const _rep = "repositories";
const _res = "restrictions";
const _rev = "revision";
const _rp = "repository-prefix";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.codeartifact";
const _sB = "sortBy";
const _sBA = "s3BucketArn";
const _sCR = "sourceCodeRepository";
const _sR = "sourceRepository";
const _sV = "successfulVersions";
const _se = "server";
const _si = "size";
const _sr = "source-repository";
const _st = "streaming";
const _sta = "status";
const _su = "summary";
const _t = "tags";
const _tK = "tagKeys";
const _tS = "targetStatus";
const _u = "upstreams";
const _un = "unfinished";
const _up = "upstream";
const _ur = "url";
const _v = "versions";
const _vR = "versionRevisions";
const _vRe = "versionRevision";
const _vRer = "versionRequirement";
const _va = "value";
const _ve = "version";
const _xacs = "x-amz-content-sha256";
const n0 = "com.amazonaws.codeartifact";
const schema_1 = __nccwpck_require__(9826);
const CodeartifactServiceException_1 = __nccwpck_require__(1338);
const errors_1 = __nccwpck_require__(1028);
const _s_registry = schema_1.TypeRegistry.for(_s);
exports.CodeartifactServiceException$ = [-3, _s, "CodeartifactServiceException", 0, [], []];
_s_registry.registerError(exports.CodeartifactServiceException$, CodeartifactServiceException_1.CodeartifactServiceException);
const n0_registry = schema_1.TypeRegistry.for(n0);
exports.AccessDeniedException$ = [-3, n0, _ADE,
    { [_e]: _c, [_hE]: 403 },
    [_m],
    [0], 1
];
n0_registry.registerError(exports.AccessDeniedException$, errors_1.AccessDeniedException);
exports.ConflictException$ = [-3, n0, _CE,
    { [_e]: _c, [_hE]: 409 },
    [_m, _rI, _rT],
    [0, 0, 0], 1
];
n0_registry.registerError(exports.ConflictException$, errors_1.ConflictException);
exports.InternalServerException$ = [-3, n0, _ISE,
    { [_e]: _se, [_hE]: 500 },
    [_m],
    [0], 1
];
n0_registry.registerError(exports.InternalServerException$, errors_1.InternalServerException);
exports.ResourceNotFoundException$ = [-3, n0, _RNFE,
    { [_e]: _c, [_hE]: 404 },
    [_m, _rI, _rT],
    [0, 0, 0], 1
];
n0_registry.registerError(exports.ResourceNotFoundException$, errors_1.ResourceNotFoundException);
exports.ServiceQuotaExceededException$ = [-3, n0, _SQEE,
    { [_e]: _c, [_hE]: 402 },
    [_m, _rI, _rT],
    [0, 0, 0], 1
];
n0_registry.registerError(exports.ServiceQuotaExceededException$, errors_1.ServiceQuotaExceededException);
exports.ThrottlingException$ = [-3, n0, _TE,
    { [_e]: _c, [_hE]: 429 },
    [_m, _rAS],
    [0, [1, { [_hH]: _RA }]], 1
];
n0_registry.registerError(exports.ThrottlingException$, errors_1.ThrottlingException);
exports.ValidationException$ = [-3, n0, _VE,
    { [_e]: _c, [_hE]: 400 },
    [_m, _r],
    [0, 0], 1
];
n0_registry.registerError(exports.ValidationException$, errors_1.ValidationException);
exports.errorTypeRegistries = [
    _s_registry,
    n0_registry,
];
var Asset = [0, n0, _A, { [_st]: 1 }, 42];
exports.AssetSummary$ = [3, n0, _AS,
    0,
    [_n, _si, _h],
    [0, 1, 128 | 0], 1
];
exports.AssociatedPackage$ = [3, n0, _AP,
    0,
    [_f, _na, _p, _aT],
    [0, 0, 0, 0]
];
exports.AssociateExternalConnectionRequest$ = [3, n0, _AECR,
    0,
    [_d, _re, _eC, _dO],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _ec }], [0, { [_hQ]: _do }]], 3
];
exports.AssociateExternalConnectionResult$ = [3, n0, _AECRs,
    0,
    [_re],
    [() => exports.RepositoryDescription$]
];
exports.CopyPackageVersionsRequest$ = [3, n0, _CPVR,
    0,
    [_d, _sR, _dR, _f, _p, _dO, _na, _v, _vR, _aO, _iFU],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _sr }], [0, { [_hQ]: _dr }], [0, { [_hQ]: _f }], [0, { [_hQ]: _p }], [0, { [_hQ]: _do }], [0, { [_hQ]: _na }], 64 | 0, 128 | 0, 2, 2], 5
];
exports.CopyPackageVersionsResult$ = [3, n0, _CPVRo,
    0,
    [_sV, _fV],
    [() => SuccessfulPackageVersionInfoMap, () => PackageVersionErrorMap]
];
exports.CreateDomainRequest$ = [3, n0, _CDR,
    0,
    [_d, _eK, _t],
    [[0, { [_hQ]: _d }], 0, () => TagList], 1
];
exports.CreateDomainResult$ = [3, n0, _CDRr,
    0,
    [_d],
    [() => exports.DomainDescription$]
];
exports.CreatePackageGroupRequest$ = [3, n0, _CPGR,
    0,
    [_d, _pG, _dO, _cI, _de, _t],
    [[0, { [_hQ]: _d }], 0, [0, { [_hQ]: _do }], 0, 0, () => TagList], 2
];
exports.CreatePackageGroupResult$ = [3, n0, _CPGRr,
    0,
    [_pG],
    [() => exports.PackageGroupDescription$]
];
exports.CreateRepositoryRequest$ = [3, n0, _CRR,
    0,
    [_d, _re, _dO, _de, _u, _t],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _do }], 0, () => UpstreamRepositoryList, () => TagList], 2
];
exports.CreateRepositoryResult$ = [3, n0, _CRRr,
    0,
    [_re],
    [() => exports.RepositoryDescription$]
];
exports.DeleteDomainPermissionsPolicyRequest$ = [3, n0, _DDPPR,
    0,
    [_d, _dO, _pR],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _do }], [0, { [_hQ]: _pr }]], 1
];
exports.DeleteDomainPermissionsPolicyResult$ = [3, n0, _DDPPRe,
    0,
    [_po],
    [() => exports.ResourcePolicy$]
];
exports.DeleteDomainRequest$ = [3, n0, _DDR,
    0,
    [_d, _dO],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _do }]], 1
];
exports.DeleteDomainResult$ = [3, n0, _DDRe,
    0,
    [_d],
    [() => exports.DomainDescription$]
];
exports.DeletePackageGroupRequest$ = [3, n0, _DPGR,
    0,
    [_d, _pG, _dO],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _pg }], [0, { [_hQ]: _do }]], 2
];
exports.DeletePackageGroupResult$ = [3, n0, _DPGRe,
    0,
    [_pG],
    [() => exports.PackageGroupDescription$]
];
exports.DeletePackageRequest$ = [3, n0, _DPR,
    0,
    [_d, _re, _f, _p, _dO, _na],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _f }], [0, { [_hQ]: _p }], [0, { [_hQ]: _do }], [0, { [_hQ]: _na }]], 4
];
exports.DeletePackageResult$ = [3, n0, _DPRe,
    0,
    [_dP],
    [() => exports.PackageSummary$]
];
exports.DeletePackageVersionsRequest$ = [3, n0, _DPVR,
    0,
    [_d, _re, _f, _p, _v, _dO, _na, _eS],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _f }], [0, { [_hQ]: _p }], 64 | 0, [0, { [_hQ]: _do }], [0, { [_hQ]: _na }], 0], 5
];
exports.DeletePackageVersionsResult$ = [3, n0, _DPVRe,
    0,
    [_sV, _fV],
    [() => SuccessfulPackageVersionInfoMap, () => PackageVersionErrorMap]
];
exports.DeleteRepositoryPermissionsPolicyRequest$ = [3, n0, _DRPPR,
    0,
    [_d, _re, _dO, _pR],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _do }], [0, { [_hQ]: _pr }]], 2
];
exports.DeleteRepositoryPermissionsPolicyResult$ = [3, n0, _DRPPRe,
    0,
    [_po],
    [() => exports.ResourcePolicy$]
];
exports.DeleteRepositoryRequest$ = [3, n0, _DRR,
    0,
    [_d, _re, _dO],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _do }]], 2
];
exports.DeleteRepositoryResult$ = [3, n0, _DRRe,
    0,
    [_re],
    [() => exports.RepositoryDescription$]
];
exports.DescribeDomainRequest$ = [3, n0, _DDRes,
    0,
    [_d, _dO],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _do }]], 1
];
exports.DescribeDomainResult$ = [3, n0, _DDResc,
    0,
    [_d],
    [() => exports.DomainDescription$]
];
exports.DescribePackageGroupRequest$ = [3, n0, _DPGRes,
    0,
    [_d, _pG, _dO],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _pg }], [0, { [_hQ]: _do }]], 2
];
exports.DescribePackageGroupResult$ = [3, n0, _DPGResc,
    0,
    [_pG],
    [() => exports.PackageGroupDescription$]
];
exports.DescribePackageRequest$ = [3, n0, _DPRes,
    0,
    [_d, _re, _f, _p, _dO, _na],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _f }], [0, { [_hQ]: _p }], [0, { [_hQ]: _do }], [0, { [_hQ]: _na }]], 4
];
exports.DescribePackageResult$ = [3, n0, _DPResc,
    0,
    [_p],
    [() => exports.PackageDescription$], 1
];
exports.DescribePackageVersionRequest$ = [3, n0, _DPVRes,
    0,
    [_d, _re, _f, _p, _pV, _dO, _na],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _f }], [0, { [_hQ]: _p }], [0, { [_hQ]: _ve }], [0, { [_hQ]: _do }], [0, { [_hQ]: _na }]], 5
];
exports.DescribePackageVersionResult$ = [3, n0, _DPVResc,
    0,
    [_pV],
    [() => exports.PackageVersionDescription$], 1
];
exports.DescribeRepositoryRequest$ = [3, n0, _DRRes,
    0,
    [_d, _re, _dO],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _do }]], 2
];
exports.DescribeRepositoryResult$ = [3, n0, _DRResc,
    0,
    [_re],
    [() => exports.RepositoryDescription$]
];
exports.DisassociateExternalConnectionRequest$ = [3, n0, _DECR,
    0,
    [_d, _re, _eC, _dO],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _ec }], [0, { [_hQ]: _do }]], 3
];
exports.DisassociateExternalConnectionResult$ = [3, n0, _DECRi,
    0,
    [_re],
    [() => exports.RepositoryDescription$]
];
exports.DisposePackageVersionsRequest$ = [3, n0, _DPVRi,
    0,
    [_d, _re, _f, _p, _v, _dO, _na, _vR, _eS],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _f }], [0, { [_hQ]: _p }], 64 | 0, [0, { [_hQ]: _do }], [0, { [_hQ]: _na }], 128 | 0, 0], 5
];
exports.DisposePackageVersionsResult$ = [3, n0, _DPVRis,
    0,
    [_sV, _fV],
    [() => SuccessfulPackageVersionInfoMap, () => PackageVersionErrorMap]
];
exports.DomainDescription$ = [3, n0, _DD,
    0,
    [_n, _o, _a, _sta, _cT, _eK, _rC, _aSB, _sBA],
    [0, 0, 0, 0, 4, 0, 1, 1, 0]
];
exports.DomainEntryPoint$ = [3, n0, _DEP,
    0,
    [_rN, _eCN],
    [0, 0]
];
exports.DomainSummary$ = [3, n0, _DS,
    0,
    [_n, _o, _a, _sta, _cT, _eK],
    [0, 0, 0, 0, 4, 0]
];
exports.GetAssociatedPackageGroupRequest$ = [3, n0, _GAPGR,
    0,
    [_d, _f, _p, _dO, _na],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _f }], [0, { [_hQ]: _p }], [0, { [_hQ]: _do }], [0, { [_hQ]: _na }]], 3
];
exports.GetAssociatedPackageGroupResult$ = [3, n0, _GAPGRe,
    0,
    [_pG, _aT],
    [() => exports.PackageGroupDescription$, 0]
];
exports.GetAuthorizationTokenRequest$ = [3, n0, _GATR,
    0,
    [_d, _dO, _dS],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _do }], [1, { [_hQ]: _du }]], 1
];
exports.GetAuthorizationTokenResult$ = [3, n0, _GATRe,
    8,
    [_aTu, _ex],
    [0, 4]
];
exports.GetDomainPermissionsPolicyRequest$ = [3, n0, _GDPPR,
    0,
    [_d, _dO],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _do }]], 1
];
exports.GetDomainPermissionsPolicyResult$ = [3, n0, _GDPPRe,
    0,
    [_po],
    [() => exports.ResourcePolicy$]
];
exports.GetPackageVersionAssetRequest$ = [3, n0, _GPVAR,
    0,
    [_d, _re, _f, _p, _pV, _as, _dO, _na, _pVR],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _f }], [0, { [_hQ]: _p }], [0, { [_hQ]: _ve }], [0, { [_hQ]: _as }], [0, { [_hQ]: _do }], [0, { [_hQ]: _na }], [0, { [_hQ]: _rev }]], 6
];
exports.GetPackageVersionAssetResult$ = [3, n0, _GPVARe,
    0,
    [_as, _aN, _pV, _pVR],
    [[() => Asset, 16], [0, { [_hH]: _XA }], [0, { [_hH]: _XP }], [0, { [_hH]: _XP_ }]]
];
exports.GetPackageVersionReadmeRequest$ = [3, n0, _GPVRR,
    0,
    [_d, _re, _f, _p, _pV, _dO, _na],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _f }], [0, { [_hQ]: _p }], [0, { [_hQ]: _ve }], [0, { [_hQ]: _do }], [0, { [_hQ]: _na }]], 5
];
exports.GetPackageVersionReadmeResult$ = [3, n0, _GPVRRe,
    0,
    [_f, _na, _p, _ve, _vRe, _rea],
    [0, 0, 0, 0, 0, 0]
];
exports.GetRepositoryEndpointRequest$ = [3, n0, _GRER,
    0,
    [_d, _re, _f, _dO, _eT],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _f }], [0, { [_hQ]: _do }], [0, { [_hQ]: _eT }]], 3
];
exports.GetRepositoryEndpointResult$ = [3, n0, _GRERe,
    0,
    [_rE],
    [0]
];
exports.GetRepositoryPermissionsPolicyRequest$ = [3, n0, _GRPPR,
    0,
    [_d, _re, _dO],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _do }]], 2
];
exports.GetRepositoryPermissionsPolicyResult$ = [3, n0, _GRPPRe,
    0,
    [_po],
    [() => exports.ResourcePolicy$]
];
exports.LicenseInfo$ = [3, n0, _LI,
    0,
    [_n, _ur],
    [0, 0]
];
exports.ListAllowedRepositoriesForGroupRequest$ = [3, n0, _LARFGR,
    0,
    [_d, _pG, _oRT, _dO, _mR, _nT],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _pg }], [0, { [_hQ]: _oRT }], [0, { [_hQ]: _do }], [1, { [_hQ]: _mr }], [0, { [_hQ]: _nt }]], 3
];
exports.ListAllowedRepositoriesForGroupResult$ = [3, n0, _LARFGRi,
    0,
    [_aR, _nT],
    [64 | 0, 0]
];
exports.ListAssociatedPackagesRequest$ = [3, n0, _LAPR,
    0,
    [_d, _pG, _dO, _mR, _nT, _pre],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _pg }], [0, { [_hQ]: _do }], [1, { [_hQ]: _mr }], [0, { [_hQ]: _nt }], [2, { [_hQ]: _pre }]], 2
];
exports.ListAssociatedPackagesResult$ = [3, n0, _LAPRi,
    0,
    [_pa, _nT],
    [() => AssociatedPackageList, 0]
];
exports.ListDomainsRequest$ = [3, n0, _LDR,
    0,
    [_mR, _nT],
    [1, 0]
];
exports.ListDomainsResult$ = [3, n0, _LDRi,
    0,
    [_dom, _nT],
    [() => DomainSummaryList, 0]
];
exports.ListPackageGroupsRequest$ = [3, n0, _LPGR,
    0,
    [_d, _dO, _mR, _nT, _pref],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _do }], [1, { [_hQ]: _mr }], [0, { [_hQ]: _nt }], [0, { [_hQ]: _pref }]], 1
];
exports.ListPackageGroupsResult$ = [3, n0, _LPGRi,
    0,
    [_pGa, _nT],
    [() => PackageGroupSummaryList, 0]
];
exports.ListPackagesRequest$ = [3, n0, _LPR,
    0,
    [_d, _re, _dO, _f, _na, _pP, _mR, _nT, _pu, _up],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _do }], [0, { [_hQ]: _f }], [0, { [_hQ]: _na }], [0, { [_hQ]: _pp }], [1, { [_hQ]: _mr }], [0, { [_hQ]: _nt }], [0, { [_hQ]: _pu }], [0, { [_hQ]: _up }]], 2
];
exports.ListPackagesResult$ = [3, n0, _LPRi,
    0,
    [_pa, _nT],
    [() => PackageSummaryList, 0]
];
exports.ListPackageVersionAssetsRequest$ = [3, n0, _LPVAR,
    0,
    [_d, _re, _f, _p, _pV, _dO, _na, _mR, _nT],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _f }], [0, { [_hQ]: _p }], [0, { [_hQ]: _ve }], [0, { [_hQ]: _do }], [0, { [_hQ]: _na }], [1, { [_hQ]: _mr }], [0, { [_hQ]: _nt }]], 5
];
exports.ListPackageVersionAssetsResult$ = [3, n0, _LPVARi,
    0,
    [_f, _na, _p, _ve, _vRe, _nT, _ass],
    [0, 0, 0, 0, 0, 0, () => AssetSummaryList]
];
exports.ListPackageVersionDependenciesRequest$ = [3, n0, _LPVDR,
    0,
    [_d, _re, _f, _p, _pV, _dO, _na, _nT],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _f }], [0, { [_hQ]: _p }], [0, { [_hQ]: _ve }], [0, { [_hQ]: _do }], [0, { [_hQ]: _na }], [0, { [_hQ]: _nt }]], 5
];
exports.ListPackageVersionDependenciesResult$ = [3, n0, _LPVDRi,
    0,
    [_f, _na, _p, _ve, _vRe, _nT, _dep],
    [0, 0, 0, 0, 0, 0, () => PackageDependencyList]
];
exports.ListPackageVersionsRequest$ = [3, n0, _LPVR,
    0,
    [_d, _re, _f, _p, _dO, _na, _sta, _sB, _mR, _nT, _oT],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _f }], [0, { [_hQ]: _p }], [0, { [_hQ]: _do }], [0, { [_hQ]: _na }], [0, { [_hQ]: _sta }], [0, { [_hQ]: _sB }], [1, { [_hQ]: _mr }], [0, { [_hQ]: _nt }], [0, { [_hQ]: _oT }]], 4
];
exports.ListPackageVersionsResult$ = [3, n0, _LPVRi,
    0,
    [_dDV, _f, _na, _p, _v, _nT],
    [0, 0, 0, 0, () => PackageVersionSummaryList, 0]
];
exports.ListRepositoriesInDomainRequest$ = [3, n0, _LRIDR,
    0,
    [_d, _dO, _aA, _rP, _mR, _nT],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _do }], [0, { [_hQ]: _aa }], [0, { [_hQ]: _rp }], [1, { [_hQ]: _mr }], [0, { [_hQ]: _nt }]], 1
];
exports.ListRepositoriesInDomainResult$ = [3, n0, _LRIDRi,
    0,
    [_rep, _nT],
    [() => RepositorySummaryList, 0]
];
exports.ListRepositoriesRequest$ = [3, n0, _LRR,
    0,
    [_rP, _mR, _nT],
    [[0, { [_hQ]: _rp }], [1, { [_hQ]: _mr }], [0, { [_hQ]: _nt }]]
];
exports.ListRepositoriesResult$ = [3, n0, _LRRi,
    0,
    [_rep, _nT],
    [() => RepositorySummaryList, 0]
];
exports.ListSubPackageGroupsRequest$ = [3, n0, _LSPGR,
    0,
    [_d, _pG, _dO, _mR, _nT],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _pg }], [0, { [_hQ]: _do }], [1, { [_hQ]: _mr }], [0, { [_hQ]: _nt }]], 2
];
exports.ListSubPackageGroupsResult$ = [3, n0, _LSPGRi,
    0,
    [_pGa, _nT],
    [() => PackageGroupSummaryList, 0]
];
exports.ListTagsForResourceRequest$ = [3, n0, _LTFRR,
    0,
    [_rA],
    [[0, { [_hQ]: _rA }]], 1
];
exports.ListTagsForResourceResult$ = [3, n0, _LTFRRi,
    0,
    [_t],
    [() => TagList]
];
exports.PackageDependency$ = [3, n0, _PD,
    0,
    [_na, _p, _dT, _vRer],
    [0, 0, 0, 0]
];
exports.PackageDescription$ = [3, n0, _PDa,
    0,
    [_f, _na, _n, _oC],
    [0, 0, 0, () => exports.PackageOriginConfiguration$]
];
exports.PackageGroupAllowedRepository$ = [3, n0, _PGAR,
    0,
    [_rN, _oRT],
    [0, 0]
];
exports.PackageGroupDescription$ = [3, n0, _PGD,
    0,
    [_a, _pat, _dN, _dO, _cT, _cI, _de, _oC, _par],
    [0, 0, 0, 0, 4, 0, 0, () => exports.PackageGroupOriginConfiguration$, () => exports.PackageGroupReference$]
];
exports.PackageGroupOriginConfiguration$ = [3, n0, _PGOC,
    0,
    [_res],
    [() => PackageGroupOriginRestrictions]
];
exports.PackageGroupOriginRestriction$ = [3, n0, _PGOR,
    0,
    [_mo, _eM, _iF, _rCe],
    [0, 0, () => exports.PackageGroupReference$, 1]
];
exports.PackageGroupReference$ = [3, n0, _PGR,
    0,
    [_a, _pat],
    [0, 0]
];
exports.PackageGroupSummary$ = [3, n0, _PGS,
    0,
    [_a, _pat, _dN, _dO, _cT, _cI, _de, _oC, _par],
    [0, 0, 0, 0, 4, 0, 0, () => exports.PackageGroupOriginConfiguration$, () => exports.PackageGroupReference$]
];
exports.PackageOriginConfiguration$ = [3, n0, _POC,
    0,
    [_res],
    [() => exports.PackageOriginRestrictions$]
];
exports.PackageOriginRestrictions$ = [3, n0, _POR,
    0,
    [_pu, _up],
    [0, 0], 2
];
exports.PackageSummary$ = [3, n0, _PS,
    0,
    [_f, _na, _p, _oC],
    [0, 0, 0, () => exports.PackageOriginConfiguration$]
];
exports.PackageVersionDescription$ = [3, n0, _PVD,
    0,
    [_f, _na, _pN, _dNi, _ve, _su, _hP, _sCR, _pT, _l, _rev, _sta, _or],
    [0, 0, 0, 0, 0, 0, 0, 0, 4, () => LicenseInfoList, 0, 0, () => exports.PackageVersionOrigin$]
];
exports.PackageVersionError$ = [3, n0, _PVE,
    0,
    [_eCr, _eMr],
    [0, 0]
];
exports.PackageVersionOrigin$ = [3, n0, _PVO,
    0,
    [_dEP, _oT],
    [() => exports.DomainEntryPoint$, 0]
];
exports.PackageVersionSummary$ = [3, n0, _PVS,
    0,
    [_ve, _sta, _rev, _or],
    [0, 0, 0, () => exports.PackageVersionOrigin$], 2
];
exports.PublishPackageVersionRequest$ = [3, n0, _PPVR,
    0,
    [_d, _re, _f, _p, _pV, _aC, _aN, _aSHA, _dO, _na, _un],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _f }], [0, { [_hQ]: _p }], [0, { [_hQ]: _ve }], [() => Asset, 16], [0, { [_hQ]: _as }], [0, { [_hH]: _xacs }], [0, { [_hQ]: _do }], [0, { [_hQ]: _na }], [2, { [_hQ]: _un }]], 8
];
exports.PublishPackageVersionResult$ = [3, n0, _PPVRu,
    0,
    [_f, _na, _p, _ve, _vRe, _sta, _as],
    [0, 0, 0, 0, 0, 0, () => exports.AssetSummary$]
];
exports.PutDomainPermissionsPolicyRequest$ = [3, n0, _PDPPR,
    0,
    [_d, _pD, _dO, _pR],
    [0, 0, 0, 0], 2
];
exports.PutDomainPermissionsPolicyResult$ = [3, n0, _PDPPRu,
    0,
    [_po],
    [() => exports.ResourcePolicy$]
];
exports.PutPackageOriginConfigurationRequest$ = [3, n0, _PPOCR,
    0,
    [_d, _re, _f, _p, _res, _dO, _na],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _f }], [0, { [_hQ]: _p }], () => exports.PackageOriginRestrictions$, [0, { [_hQ]: _do }], [0, { [_hQ]: _na }]], 5
];
exports.PutPackageOriginConfigurationResult$ = [3, n0, _PPOCRu,
    0,
    [_oC],
    [() => exports.PackageOriginConfiguration$]
];
exports.PutRepositoryPermissionsPolicyRequest$ = [3, n0, _PRPPR,
    0,
    [_d, _re, _pD, _dO, _pR],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], 0, [0, { [_hQ]: _do }], 0], 3
];
exports.PutRepositoryPermissionsPolicyResult$ = [3, n0, _PRPPRu,
    0,
    [_po],
    [() => exports.ResourcePolicy$]
];
exports.RepositoryDescription$ = [3, n0, _RD,
    0,
    [_n, _aA, _dN, _dO, _a, _de, _u, _eCx, _cT],
    [0, 0, 0, 0, 0, 0, () => UpstreamRepositoryInfoList, () => RepositoryExternalConnectionInfoList, 4]
];
exports.RepositoryExternalConnectionInfo$ = [3, n0, _RECI,
    0,
    [_eCN, _pF, _sta],
    [0, 0, 0]
];
exports.RepositorySummary$ = [3, n0, _RS,
    0,
    [_n, _aA, _dN, _dO, _a, _de, _cT],
    [0, 0, 0, 0, 0, 0, 4]
];
exports.ResourcePolicy$ = [3, n0, _RP,
    0,
    [_rA, _rev, _doc],
    [0, 0, 0]
];
exports.SuccessfulPackageVersionInfo$ = [3, n0, _SPVI,
    0,
    [_rev, _sta],
    [0, 0]
];
exports.Tag$ = [3, n0, _T,
    0,
    [_k, _va],
    [0, 0], 2
];
exports.TagResourceRequest$ = [3, n0, _TRR,
    0,
    [_rA, _t],
    [[0, { [_hQ]: _rA }], () => TagList], 2
];
exports.TagResourceResult$ = [3, n0, _TRRa,
    0,
    [],
    []
];
exports.UntagResourceRequest$ = [3, n0, _URR,
    0,
    [_rA, _tK],
    [[0, { [_hQ]: _rA }], 64 | 0], 2
];
exports.UntagResourceResult$ = [3, n0, _URRn,
    0,
    [],
    []
];
exports.UpdatePackageGroupOriginConfigurationRequest$ = [3, n0, _UPGOCR,
    0,
    [_d, _pG, _dO, _res, _aAR, _rAR],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _pg }], [0, { [_hQ]: _do }], 128 | 0, () => PackageGroupAllowedRepositoryList, () => PackageGroupAllowedRepositoryList], 2
];
exports.UpdatePackageGroupOriginConfigurationResult$ = [3, n0, _UPGOCRp,
    0,
    [_pG, _aRU],
    [() => exports.PackageGroupDescription$, [2, n0, _PGARU, 0, 0, [2, n0, _PGARUa, 0, 0, 64 | 0]]]
];
exports.UpdatePackageGroupRequest$ = [3, n0, _UPGR,
    0,
    [_d, _pG, _dO, _cI, _de],
    [[0, { [_hQ]: _d }], 0, [0, { [_hQ]: _do }], 0, 0], 2
];
exports.UpdatePackageGroupResult$ = [3, n0, _UPGRp,
    0,
    [_pG],
    [() => exports.PackageGroupDescription$]
];
exports.UpdatePackageVersionsStatusRequest$ = [3, n0, _UPVSR,
    0,
    [_d, _re, _f, _p, _v, _tS, _dO, _na, _vR, _eS],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _f }], [0, { [_hQ]: _p }], 64 | 0, 0, [0, { [_hQ]: _do }], [0, { [_hQ]: _na }], 128 | 0, 0], 6
];
exports.UpdatePackageVersionsStatusResult$ = [3, n0, _UPVSRp,
    0,
    [_sV, _fV],
    [() => SuccessfulPackageVersionInfoMap, () => PackageVersionErrorMap]
];
exports.UpdateRepositoryRequest$ = [3, n0, _URRp,
    0,
    [_d, _re, _dO, _de, _u],
    [[0, { [_hQ]: _d }], [0, { [_hQ]: _re }], [0, { [_hQ]: _do }], 0, () => UpstreamRepositoryList], 2
];
exports.UpdateRepositoryResult$ = [3, n0, _URRpd,
    0,
    [_re],
    [() => exports.RepositoryDescription$]
];
exports.UpstreamRepository$ = [3, n0, _UR,
    0,
    [_rN],
    [0], 1
];
exports.UpstreamRepositoryInfo$ = [3, n0, _URI,
    0,
    [_rN],
    [0]
];
var AssetSummaryList = [1, n0, _ASL,
    0, () => exports.AssetSummary$
];
var AssociatedPackageList = [1, n0, _APL,
    0, () => exports.AssociatedPackage$
];
var DomainSummaryList = [1, n0, _DSL,
    0, () => exports.DomainSummary$
];
var LicenseInfoList = [1, n0, _LIL,
    0, () => exports.LicenseInfo$
];
var PackageDependencyList = [1, n0, _PDL,
    0, () => exports.PackageDependency$
];
var PackageGroupAllowedRepositoryList = [1, n0, _PGARL,
    0, () => exports.PackageGroupAllowedRepository$
];
var PackageGroupSummaryList = [1, n0, _PGSL,
    0, () => exports.PackageGroupSummary$
];
var PackageSummaryList = [1, n0, _PSL,
    0, () => exports.PackageSummary$
];
var PackageVersionList = (/* unused pure expression or super */ null && (64 | 0));
var PackageVersionSummaryList = [1, n0, _PVSL,
    0, () => exports.PackageVersionSummary$
];
var RepositoryExternalConnectionInfoList = [1, n0, _RECIL,
    0, () => exports.RepositoryExternalConnectionInfo$
];
var RepositoryNameList = (/* unused pure expression or super */ null && (64 | 0));
var RepositorySummaryList = [1, n0, _RSL,
    0, () => exports.RepositorySummary$
];
var TagKeyList = (/* unused pure expression or super */ null && (64 | 0));
var TagList = [1, n0, _TL,
    0, () => exports.Tag$
];
var UpstreamRepositoryInfoList = [1, n0, _URIL,
    0, () => exports.UpstreamRepositoryInfo$
];
var UpstreamRepositoryList = [1, n0, _URL,
    0, () => exports.UpstreamRepository$
];
var AssetHashes = (/* unused pure expression or super */ null && (128 | 0));
var OriginRestrictions = (/* unused pure expression or super */ null && (128 | 0));
var PackageGroupAllowedRepositoryUpdate = [2, n0, _PGARUa,
    0, 0, 64 | 0
];
var PackageGroupAllowedRepositoryUpdates = [2, n0, _PGARU,
    0, 0, [2, n0, _PGARUa, 0, 0, 64 | 0]
];
var PackageGroupOriginRestrictions = [2, n0, _PGORa,
    0, 0, () => exports.PackageGroupOriginRestriction$
];
var PackageVersionErrorMap = [2, n0, _PVEM,
    0, 0, () => exports.PackageVersionError$
];
var PackageVersionRevisionMap = (/* unused pure expression or super */ null && (128 | 0));
var SuccessfulPackageVersionInfoMap = [2, n0, _SPVIM,
    0, 0, () => exports.SuccessfulPackageVersionInfo$
];
exports.AssociateExternalConnection$ = [9, n0, _AEC,
    { [_ht]: ["POST", "/v1/repository/external-connection", 200] }, () => exports.AssociateExternalConnectionRequest$, () => exports.AssociateExternalConnectionResult$
];
exports.CopyPackageVersions$ = [9, n0, _CPV,
    { [_ht]: ["POST", "/v1/package/versions/copy", 200] }, () => exports.CopyPackageVersionsRequest$, () => exports.CopyPackageVersionsResult$
];
exports.CreateDomain$ = [9, n0, _CD,
    { [_ht]: ["POST", "/v1/domain", 200] }, () => exports.CreateDomainRequest$, () => exports.CreateDomainResult$
];
exports.CreatePackageGroup$ = [9, n0, _CPG,
    { [_ht]: ["POST", "/v1/package-group", 200] }, () => exports.CreatePackageGroupRequest$, () => exports.CreatePackageGroupResult$
];
exports.CreateRepository$ = [9, n0, _CR,
    { [_ht]: ["POST", "/v1/repository", 200] }, () => exports.CreateRepositoryRequest$, () => exports.CreateRepositoryResult$
];
exports.DeleteDomain$ = [9, n0, _DDe,
    { [_ht]: ["DELETE", "/v1/domain", 200] }, () => exports.DeleteDomainRequest$, () => exports.DeleteDomainResult$
];
exports.DeleteDomainPermissionsPolicy$ = [9, n0, _DDPP,
    { [_ht]: ["DELETE", "/v1/domain/permissions/policy", 200] }, () => exports.DeleteDomainPermissionsPolicyRequest$, () => exports.DeleteDomainPermissionsPolicyResult$
];
exports.DeletePackage$ = [9, n0, _DP,
    { [_ht]: ["DELETE", "/v1/package", 200] }, () => exports.DeletePackageRequest$, () => exports.DeletePackageResult$
];
exports.DeletePackageGroup$ = [9, n0, _DPG,
    { [_ht]: ["DELETE", "/v1/package-group", 200] }, () => exports.DeletePackageGroupRequest$, () => exports.DeletePackageGroupResult$
];
exports.DeletePackageVersions$ = [9, n0, _DPV,
    { [_ht]: ["POST", "/v1/package/versions/delete", 200] }, () => exports.DeletePackageVersionsRequest$, () => exports.DeletePackageVersionsResult$
];
exports.DeleteRepository$ = [9, n0, _DR,
    { [_ht]: ["DELETE", "/v1/repository", 200] }, () => exports.DeleteRepositoryRequest$, () => exports.DeleteRepositoryResult$
];
exports.DeleteRepositoryPermissionsPolicy$ = [9, n0, _DRPP,
    { [_ht]: ["DELETE", "/v1/repository/permissions/policies", 200] }, () => exports.DeleteRepositoryPermissionsPolicyRequest$, () => exports.DeleteRepositoryPermissionsPolicyResult$
];
exports.DescribeDomain$ = [9, n0, _DDes,
    { [_ht]: ["GET", "/v1/domain", 200] }, () => exports.DescribeDomainRequest$, () => exports.DescribeDomainResult$
];
exports.DescribePackage$ = [9, n0, _DPe,
    { [_ht]: ["GET", "/v1/package", 200] }, () => exports.DescribePackageRequest$, () => exports.DescribePackageResult$
];
exports.DescribePackageGroup$ = [9, n0, _DPGe,
    { [_ht]: ["GET", "/v1/package-group", 200] }, () => exports.DescribePackageGroupRequest$, () => exports.DescribePackageGroupResult$
];
exports.DescribePackageVersion$ = [9, n0, _DPVe,
    { [_ht]: ["GET", "/v1/package/version", 200] }, () => exports.DescribePackageVersionRequest$, () => exports.DescribePackageVersionResult$
];
exports.DescribeRepository$ = [9, n0, _DRe,
    { [_ht]: ["GET", "/v1/repository", 200] }, () => exports.DescribeRepositoryRequest$, () => exports.DescribeRepositoryResult$
];
exports.DisassociateExternalConnection$ = [9, n0, _DEC,
    { [_ht]: ["DELETE", "/v1/repository/external-connection", 200] }, () => exports.DisassociateExternalConnectionRequest$, () => exports.DisassociateExternalConnectionResult$
];
exports.DisposePackageVersions$ = [9, n0, _DPVi,
    { [_ht]: ["POST", "/v1/package/versions/dispose", 200] }, () => exports.DisposePackageVersionsRequest$, () => exports.DisposePackageVersionsResult$
];
exports.GetAssociatedPackageGroup$ = [9, n0, _GAPG,
    { [_ht]: ["GET", "/v1/get-associated-package-group", 200] }, () => exports.GetAssociatedPackageGroupRequest$, () => exports.GetAssociatedPackageGroupResult$
];
exports.GetAuthorizationToken$ = [9, n0, _GAT,
    { [_ht]: ["POST", "/v1/authorization-token", 200] }, () => exports.GetAuthorizationTokenRequest$, () => exports.GetAuthorizationTokenResult$
];
exports.GetDomainPermissionsPolicy$ = [9, n0, _GDPP,
    { [_ht]: ["GET", "/v1/domain/permissions/policy", 200] }, () => exports.GetDomainPermissionsPolicyRequest$, () => exports.GetDomainPermissionsPolicyResult$
];
exports.GetPackageVersionAsset$ = [9, n0, _GPVA,
    { [_ht]: ["GET", "/v1/package/version/asset", 200] }, () => exports.GetPackageVersionAssetRequest$, () => exports.GetPackageVersionAssetResult$
];
exports.GetPackageVersionReadme$ = [9, n0, _GPVR,
    { [_ht]: ["GET", "/v1/package/version/readme", 200] }, () => exports.GetPackageVersionReadmeRequest$, () => exports.GetPackageVersionReadmeResult$
];
exports.GetRepositoryEndpoint$ = [9, n0, _GRE,
    { [_ht]: ["GET", "/v1/repository/endpoint", 200] }, () => exports.GetRepositoryEndpointRequest$, () => exports.GetRepositoryEndpointResult$
];
exports.GetRepositoryPermissionsPolicy$ = [9, n0, _GRPP,
    { [_ht]: ["GET", "/v1/repository/permissions/policy", 200] }, () => exports.GetRepositoryPermissionsPolicyRequest$, () => exports.GetRepositoryPermissionsPolicyResult$
];
exports.ListAllowedRepositoriesForGroup$ = [9, n0, _LARFG,
    { [_ht]: ["GET", "/v1/package-group-allowed-repositories", 200] }, () => exports.ListAllowedRepositoriesForGroupRequest$, () => exports.ListAllowedRepositoriesForGroupResult$
];
exports.ListAssociatedPackages$ = [9, n0, _LAP,
    { [_ht]: ["GET", "/v1/list-associated-packages", 200] }, () => exports.ListAssociatedPackagesRequest$, () => exports.ListAssociatedPackagesResult$
];
exports.ListDomains$ = [9, n0, _LD,
    { [_ht]: ["POST", "/v1/domains", 200] }, () => exports.ListDomainsRequest$, () => exports.ListDomainsResult$
];
exports.ListPackageGroups$ = [9, n0, _LPG,
    { [_ht]: ["POST", "/v1/package-groups", 200] }, () => exports.ListPackageGroupsRequest$, () => exports.ListPackageGroupsResult$
];
exports.ListPackages$ = [9, n0, _LP,
    { [_ht]: ["POST", "/v1/packages", 200] }, () => exports.ListPackagesRequest$, () => exports.ListPackagesResult$
];
exports.ListPackageVersionAssets$ = [9, n0, _LPVA,
    { [_ht]: ["POST", "/v1/package/version/assets", 200] }, () => exports.ListPackageVersionAssetsRequest$, () => exports.ListPackageVersionAssetsResult$
];
exports.ListPackageVersionDependencies$ = [9, n0, _LPVD,
    { [_ht]: ["POST", "/v1/package/version/dependencies", 200] }, () => exports.ListPackageVersionDependenciesRequest$, () => exports.ListPackageVersionDependenciesResult$
];
exports.ListPackageVersions$ = [9, n0, _LPV,
    { [_ht]: ["POST", "/v1/package/versions", 200] }, () => exports.ListPackageVersionsRequest$, () => exports.ListPackageVersionsResult$
];
exports.ListRepositories$ = [9, n0, _LR,
    { [_ht]: ["POST", "/v1/repositories", 200] }, () => exports.ListRepositoriesRequest$, () => exports.ListRepositoriesResult$
];
exports.ListRepositoriesInDomain$ = [9, n0, _LRID,
    { [_ht]: ["POST", "/v1/domain/repositories", 200] }, () => exports.ListRepositoriesInDomainRequest$, () => exports.ListRepositoriesInDomainResult$
];
exports.ListSubPackageGroups$ = [9, n0, _LSPG,
    { [_ht]: ["POST", "/v1/package-groups/sub-groups", 200] }, () => exports.ListSubPackageGroupsRequest$, () => exports.ListSubPackageGroupsResult$
];
exports.ListTagsForResource$ = [9, n0, _LTFR,
    { [_ht]: ["POST", "/v1/tags", 200] }, () => exports.ListTagsForResourceRequest$, () => exports.ListTagsForResourceResult$
];
exports.PublishPackageVersion$ = [9, n0, _PPV,
    { [_ht]: ["POST", "/v1/package/version/publish", 200] }, () => exports.PublishPackageVersionRequest$, () => exports.PublishPackageVersionResult$
];
exports.PutDomainPermissionsPolicy$ = [9, n0, _PDPP,
    { [_ht]: ["PUT", "/v1/domain/permissions/policy", 200] }, () => exports.PutDomainPermissionsPolicyRequest$, () => exports.PutDomainPermissionsPolicyResult$
];
exports.PutPackageOriginConfiguration$ = [9, n0, _PPOC,
    { [_ht]: ["POST", "/v1/package", 200] }, () => exports.PutPackageOriginConfigurationRequest$, () => exports.PutPackageOriginConfigurationResult$
];
exports.PutRepositoryPermissionsPolicy$ = [9, n0, _PRPP,
    { [_ht]: ["PUT", "/v1/repository/permissions/policy", 200] }, () => exports.PutRepositoryPermissionsPolicyRequest$, () => exports.PutRepositoryPermissionsPolicyResult$
];
exports.TagResource$ = [9, n0, _TR,
    { [_ht]: ["POST", "/v1/tag", 200] }, () => exports.TagResourceRequest$, () => exports.TagResourceResult$
];
exports.UntagResource$ = [9, n0, _URn,
    { [_ht]: ["POST", "/v1/untag", 200] }, () => exports.UntagResourceRequest$, () => exports.UntagResourceResult$
];
exports.UpdatePackageGroup$ = [9, n0, _UPG,
    { [_ht]: ["PUT", "/v1/package-group", 200] }, () => exports.UpdatePackageGroupRequest$, () => exports.UpdatePackageGroupResult$
];
exports.UpdatePackageGroupOriginConfiguration$ = [9, n0, _UPGOC,
    { [_ht]: ["PUT", "/v1/package-group-origin-configuration", 200] }, () => exports.UpdatePackageGroupOriginConfigurationRequest$, () => exports.UpdatePackageGroupOriginConfigurationResult$
];
exports.UpdatePackageVersionsStatus$ = [9, n0, _UPVS,
    { [_ht]: ["POST", "/v1/package/versions/update_status", 200] }, () => exports.UpdatePackageVersionsStatusRequest$, () => exports.UpdatePackageVersionsStatusResult$
];
exports.UpdateRepository$ = [9, n0, _URp,
    { [_ht]: ["PUT", "/v1/repository", 200] }, () => exports.UpdateRepositoryRequest$, () => exports.UpdateRepositoryResult$
];


/***/ }),

/***/ 2825:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var utilRetry = __nccwpck_require__(4902);

const state = {
    warningEmitted: false,
};
const emitWarningIfUnsupportedVersion = (version) => {
    if (version && !state.warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 20) {
        state.warningEmitted = true;
        process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js ${version} in January 2026.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/c895JFp`);
    }
};

const longPollMiddleware = () => (next, context) => async (args) => {
    context.__retryLongPoll = true;
    return next(args);
};
const longPollMiddlewareOptions = {
    name: "longPollMiddleware",
    tags: ["RETRY"],
    step: "initialize",
    override: true,
};
const getLongPollPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(longPollMiddleware(), longPollMiddlewareOptions);
    },
});

function setCredentialFeature(credentials, feature, value) {
    if (!credentials.$source) {
        credentials.$source = {};
    }
    credentials.$source[feature] = value;
    return credentials;
}

utilRetry.Retry.v2026 ||= typeof process === "object" && process.env?.AWS_NEW_RETRIES_2026 === "true";
function setFeature(context, feature, value) {
    if (!context.__aws_sdk_context) {
        context.__aws_sdk_context = {
            features: {},
        };
    }
    else if (!context.__aws_sdk_context.features) {
        context.__aws_sdk_context.features = {};
    }
    context.__aws_sdk_context.features[feature] = value;
}

function setTokenFeature(token, feature, value) {
    if (!token.$source) {
        token.$source = {};
    }
    token.$source[feature] = value;
    return token;
}

exports.emitWarningIfUnsupportedVersion = emitWarningIfUnsupportedVersion;
exports.getLongPollPlugin = getLongPollPlugin;
exports.setCredentialFeature = setCredentialFeature;
exports.setFeature = setFeature;
exports.setTokenFeature = setTokenFeature;
exports.state = state;


/***/ }),

/***/ 7862:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var protocolHttp = __nccwpck_require__(4418);
var core = __nccwpck_require__(5829);
var propertyProvider = __nccwpck_require__(9721);
var client = __nccwpck_require__(2825);
var signatureV4 = __nccwpck_require__(1528);

const getDateHeader = (response) => protocolHttp.HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;

const getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);

const isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 300000;

const getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
    const clockTimeInMs = Date.parse(clockTime);
    if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
    }
    return currentSystemClockOffset;
};

const throwSigningPropertyError = (name, property) => {
    if (!property) {
        throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
    }
    return property;
};
const validateSigningProperties = async (signingProperties) => {
    const context = throwSigningPropertyError("context", signingProperties.context);
    const config = throwSigningPropertyError("config", signingProperties.config);
    const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
    const signerFunction = throwSigningPropertyError("signer", config.signer);
    const signer = await signerFunction(authScheme);
    const signingRegion = signingProperties?.signingRegion;
    const signingRegionSet = signingProperties?.signingRegionSet;
    const signingName = signingProperties?.signingName;
    return {
        config,
        signer,
        signingRegion,
        signingRegionSet,
        signingName,
    };
};
class AwsSdkSigV4Signer {
    async sign(httpRequest, identity, signingProperties) {
        if (!protocolHttp.HttpRequest.isInstance(httpRequest)) {
            throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const validatedProps = await validateSigningProperties(signingProperties);
        const { config, signer } = validatedProps;
        let { signingRegion, signingName } = validatedProps;
        const handlerExecutionContext = signingProperties.context;
        if (handlerExecutionContext?.authSchemes?.length ?? 0 > 1) {
            const [first, second] = handlerExecutionContext.authSchemes;
            if (first?.name === "sigv4a" && second?.name === "sigv4") {
                signingRegion = second?.signingRegion ?? signingRegion;
                signingName = second?.signingName ?? signingName;
            }
        }
        const signedRequest = await signer.sign(httpRequest, {
            signingDate: getSkewCorrectedDate(config.systemClockOffset),
            signingRegion: signingRegion,
            signingService: signingName,
        });
        return signedRequest;
    }
    errorHandler(signingProperties) {
        return (error) => {
            const serverTime = error.ServerTime ?? getDateHeader(error.$response);
            if (serverTime) {
                const config = throwSigningPropertyError("config", signingProperties.config);
                const initialSystemClockOffset = config.systemClockOffset;
                config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
                const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
                if (clockSkewCorrected && error.$metadata) {
                    error.$metadata.clockSkewCorrected = true;
                }
            }
            throw error;
        };
    }
    successHandler(httpResponse, signingProperties) {
        const dateHeader = getDateHeader(httpResponse);
        if (dateHeader) {
            const config = throwSigningPropertyError("config", signingProperties.config);
            config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
        }
    }
}
const AWSSDKSigV4Signer = AwsSdkSigV4Signer;

class AwsSdkSigV4ASigner extends AwsSdkSigV4Signer {
    async sign(httpRequest, identity, signingProperties) {
        if (!protocolHttp.HttpRequest.isInstance(httpRequest)) {
            throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const { config, signer, signingRegion, signingRegionSet, signingName } = await validateSigningProperties(signingProperties);
        const configResolvedSigningRegionSet = await config.sigv4aSigningRegionSet?.();
        const multiRegionOverride = (configResolvedSigningRegionSet ??
            signingRegionSet ?? [signingRegion]).join(",");
        const signedRequest = await signer.sign(httpRequest, {
            signingDate: getSkewCorrectedDate(config.systemClockOffset),
            signingRegion: multiRegionOverride,
            signingService: signingName,
        });
        return signedRequest;
    }
}

const getArrayForCommaSeparatedString = (str) => typeof str === "string" && str.length > 0 ? str.split(",").map((item) => item.trim()) : [];

const getBearerTokenEnvKey = (signingName) => `AWS_BEARER_TOKEN_${signingName.replace(/[\s-]/g, "_").toUpperCase()}`;

const NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY = "AWS_AUTH_SCHEME_PREFERENCE";
const NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY = "auth_scheme_preference";
const NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = {
    environmentVariableSelector: (env, options) => {
        if (options?.signingName) {
            const bearerTokenKey = getBearerTokenEnvKey(options.signingName);
            if (bearerTokenKey in env)
                return ["httpBearerAuth"];
        }
        if (!(NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY in env))
            return undefined;
        return getArrayForCommaSeparatedString(env[NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY]);
    },
    configFileSelector: (profile) => {
        if (!(NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY in profile))
            return undefined;
        return getArrayForCommaSeparatedString(profile[NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY]);
    },
    default: [],
};

const resolveAwsSdkSigV4AConfig = (config) => {
    config.sigv4aSigningRegionSet = core.normalizeProvider(config.sigv4aSigningRegionSet);
    return config;
};
const NODE_SIGV4A_CONFIG_OPTIONS = {
    environmentVariableSelector(env) {
        if (env.AWS_SIGV4A_SIGNING_REGION_SET) {
            return env.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((_) => _.trim());
        }
        throw new propertyProvider.ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
            tryNextLink: true,
        });
    },
    configFileSelector(profile) {
        if (profile.sigv4a_signing_region_set) {
            return (profile.sigv4a_signing_region_set ?? "").split(",").map((_) => _.trim());
        }
        throw new propertyProvider.ProviderError("sigv4a_signing_region_set not set in profile.", {
            tryNextLink: true,
        });
    },
    default: undefined,
};

const resolveAwsSdkSigV4Config = (config) => {
    let inputCredentials = config.credentials;
    let isUserSupplied = !!config.credentials;
    let resolvedCredentials = undefined;
    Object.defineProperty(config, "credentials", {
        set(credentials) {
            if (credentials && credentials !== inputCredentials && credentials !== resolvedCredentials) {
                isUserSupplied = true;
            }
            inputCredentials = credentials;
            const memoizedProvider = normalizeCredentialProvider(config, {
                credentials: inputCredentials,
                credentialDefaultProvider: config.credentialDefaultProvider,
            });
            const boundProvider = bindCallerConfig(config, memoizedProvider);
            if (isUserSupplied && !boundProvider.attributed) {
                const isCredentialObject = typeof inputCredentials === "object" && inputCredentials !== null;
                resolvedCredentials = async (options) => {
                    const creds = await boundProvider(options);
                    const attributedCreds = creds;
                    if (isCredentialObject && (!attributedCreds.$source || Object.keys(attributedCreds.$source).length === 0)) {
                        return client.setCredentialFeature(attributedCreds, "CREDENTIALS_CODE", "e");
                    }
                    return attributedCreds;
                };
                resolvedCredentials.memoized = boundProvider.memoized;
                resolvedCredentials.configBound = boundProvider.configBound;
                resolvedCredentials.attributed = true;
            }
            else {
                resolvedCredentials = boundProvider;
            }
        },
        get() {
            return resolvedCredentials;
        },
        enumerable: true,
        configurable: true,
    });
    config.credentials = inputCredentials;
    const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256, } = config;
    let signer;
    if (config.signer) {
        signer = core.normalizeProvider(config.signer);
    }
    else if (config.regionInfoProvider) {
        signer = () => core.normalizeProvider(config.region)()
            .then(async (region) => [
            (await config.regionInfoProvider(region, {
                useFipsEndpoint: await config.useFipsEndpoint(),
                useDualstackEndpoint: await config.useDualstackEndpoint(),
            })) || {},
            region,
        ])
            .then(([regionInfo, region]) => {
            const { signingRegion, signingService } = regionInfo;
            config.signingRegion = config.signingRegion || signingRegion || region;
            config.signingName = config.signingName || signingService || config.serviceId;
            const params = {
                ...config,
                credentials: config.credentials,
                region: config.signingRegion,
                service: config.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = config.signerConstructor || signatureV4.SignatureV4;
            return new SignerCtor(params);
        });
    }
    else {
        signer = async (authScheme) => {
            authScheme = Object.assign({}, {
                name: "sigv4",
                signingName: config.signingName || config.defaultSigningName,
                signingRegion: await core.normalizeProvider(config.region)(),
                properties: {},
            }, authScheme);
            const signingRegion = authScheme.signingRegion;
            const signingService = authScheme.signingName;
            config.signingRegion = config.signingRegion || signingRegion;
            config.signingName = config.signingName || signingService || config.serviceId;
            const params = {
                ...config,
                credentials: config.credentials,
                region: config.signingRegion,
                service: config.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = config.signerConstructor || signatureV4.SignatureV4;
            return new SignerCtor(params);
        };
    }
    const resolvedConfig = Object.assign(config, {
        systemClockOffset,
        signingEscapePath,
        signer,
    });
    return resolvedConfig;
};
const resolveAWSSDKSigV4Config = resolveAwsSdkSigV4Config;
function normalizeCredentialProvider(config, { credentials, credentialDefaultProvider, }) {
    let credentialsProvider;
    if (credentials) {
        if (!credentials?.memoized) {
            credentialsProvider = core.memoizeIdentityProvider(credentials, core.isIdentityExpired, core.doesIdentityRequireRefresh);
        }
        else {
            credentialsProvider = credentials;
        }
    }
    else {
        if (credentialDefaultProvider) {
            credentialsProvider = core.normalizeProvider(credentialDefaultProvider(Object.assign({}, config, {
                parentClientConfig: config,
            })));
        }
        else {
            credentialsProvider = async () => {
                throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
            };
        }
    }
    credentialsProvider.memoized = true;
    return credentialsProvider;
}
function bindCallerConfig(config, credentialsProvider) {
    if (credentialsProvider.configBound) {
        return credentialsProvider;
    }
    const fn = async (options) => credentialsProvider({ ...options, callerClientConfig: config });
    fn.memoized = credentialsProvider.memoized;
    fn.configBound = true;
    return fn;
}

exports.AWSSDKSigV4Signer = AWSSDKSigV4Signer;
exports.AwsSdkSigV4ASigner = AwsSdkSigV4ASigner;
exports.AwsSdkSigV4Signer = AwsSdkSigV4Signer;
exports.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = NODE_AUTH_SCHEME_PREFERENCE_OPTIONS;
exports.NODE_SIGV4A_CONFIG_OPTIONS = NODE_SIGV4A_CONFIG_OPTIONS;
exports.getBearerTokenEnvKey = getBearerTokenEnvKey;
exports.resolveAWSSDKSigV4Config = resolveAWSSDKSigV4Config;
exports.resolveAwsSdkSigV4AConfig = resolveAwsSdkSigV4AConfig;
exports.resolveAwsSdkSigV4Config = resolveAwsSdkSigV4Config;
exports.validateSigningProperties = validateSigningProperties;


/***/ }),

/***/ 785:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var cbor = __nccwpck_require__(804);
var schema = __nccwpck_require__(9826);
var smithyClient = __nccwpck_require__(3570);
var protocols = __nccwpck_require__(2241);
var serde = __nccwpck_require__(7669);
var utilBase64 = __nccwpck_require__(5600);
var utilUtf8 = __nccwpck_require__(1895);
var xmlBuilder = __nccwpck_require__(3816);

class ProtocolLib {
    queryCompat;
    errorRegistry;
    constructor(queryCompat = false) {
        this.queryCompat = queryCompat;
    }
    resolveRestContentType(defaultContentType, inputSchema) {
        const members = inputSchema.getMemberSchemas();
        const httpPayloadMember = Object.values(members).find((m) => {
            return !!m.getMergedTraits().httpPayload;
        });
        if (httpPayloadMember) {
            const mediaType = httpPayloadMember.getMergedTraits().mediaType;
            if (mediaType) {
                return mediaType;
            }
            else if (httpPayloadMember.isStringSchema()) {
                return "text/plain";
            }
            else if (httpPayloadMember.isBlobSchema()) {
                return "application/octet-stream";
            }
            else {
                return defaultContentType;
            }
        }
        else if (!inputSchema.isUnitSchema()) {
            const hasBody = Object.values(members).find((m) => {
                const { httpQuery, httpQueryParams, httpHeader, httpLabel, httpPrefixHeaders } = m.getMergedTraits();
                const noPrefixHeaders = httpPrefixHeaders === void 0;
                return !httpQuery && !httpQueryParams && !httpHeader && !httpLabel && noPrefixHeaders;
            });
            if (hasBody) {
                return defaultContentType;
            }
        }
    }
    async getErrorSchemaOrThrowBaseException(errorIdentifier, defaultNamespace, response, dataObject, metadata, getErrorSchema) {
        let errorName = errorIdentifier;
        if (errorIdentifier.includes("#")) {
            [, errorName] = errorIdentifier.split("#");
        }
        const errorMetadata = {
            $metadata: metadata,
            $fault: response.statusCode < 500 ? "client" : "server",
        };
        if (!this.errorRegistry) {
            throw new Error("@aws-sdk/core/protocols - error handler not initialized.");
        }
        try {
            const errorSchema = getErrorSchema?.(this.errorRegistry, errorName) ??
                this.errorRegistry.getSchema(errorIdentifier);
            return { errorSchema, errorMetadata };
        }
        catch (e) {
            dataObject.message = dataObject.message ?? dataObject.Message ?? "UnknownError";
            const synthetic = this.errorRegistry;
            const baseExceptionSchema = synthetic.getBaseException();
            if (baseExceptionSchema) {
                const ErrorCtor = synthetic.getErrorCtor(baseExceptionSchema) ?? Error;
                throw this.decorateServiceException(Object.assign(new ErrorCtor({ name: errorName }), errorMetadata), dataObject);
            }
            const d = dataObject;
            const message = d?.message ?? d?.Message ?? d?.Error?.Message ?? d?.Error?.message;
            throw this.decorateServiceException(Object.assign(new Error(message), {
                name: errorName,
            }, errorMetadata), dataObject);
        }
    }
    compose(composite, errorIdentifier, defaultNamespace) {
        let namespace = defaultNamespace;
        if (errorIdentifier.includes("#")) {
            [namespace] = errorIdentifier.split("#");
        }
        const staticRegistry = schema.TypeRegistry.for(namespace);
        const defaultSyntheticRegistry = schema.TypeRegistry.for("smithy.ts.sdk.synthetic." + defaultNamespace);
        composite.copyFrom(staticRegistry);
        composite.copyFrom(defaultSyntheticRegistry);
        this.errorRegistry = composite;
    }
    decorateServiceException(exception, additions = {}) {
        if (this.queryCompat) {
            const msg = exception.Message ?? additions.Message;
            const error = smithyClient.decorateServiceException(exception, additions);
            if (msg) {
                error.message = msg;
            }
            const errorObj = error.Error ?? {};
            errorObj.Type = error.Error?.Type;
            errorObj.Code = error.Error?.Code;
            errorObj.Message = error.Error?.message ?? error.Error?.Message ?? msg;
            error.Error = errorObj;
            const reqId = error.$metadata.requestId;
            if (reqId) {
                error.RequestId = reqId;
            }
            return error;
        }
        return smithyClient.decorateServiceException(exception, additions);
    }
    setQueryCompatError(output, response) {
        const queryErrorHeader = response.headers?.["x-amzn-query-error"];
        if (output !== undefined && queryErrorHeader != null) {
            const [Code, Type] = queryErrorHeader.split(";");
            const keys = Object.keys(output);
            const Error = {
                Code,
                Type,
            };
            output.Code = Code;
            output.Type = Type;
            for (let i = 0; i < keys.length; i++) {
                const k = keys[i];
                Error[k === "message" ? "Message" : k] = output[k];
            }
            delete Error.__type;
            output.Error = Error;
        }
    }
    queryCompatOutput(queryCompatErrorData, errorData) {
        if (queryCompatErrorData.Error) {
            errorData.Error = queryCompatErrorData.Error;
        }
        if (queryCompatErrorData.Type) {
            errorData.Type = queryCompatErrorData.Type;
        }
        if (queryCompatErrorData.Code) {
            errorData.Code = queryCompatErrorData.Code;
        }
    }
    findQueryCompatibleError(registry, errorName) {
        try {
            return registry.getSchema(errorName);
        }
        catch (e) {
            return registry.find((schema$1) => schema.NormalizedSchema.of(schema$1).getMergedTraits().awsQueryError?.[0] === errorName);
        }
    }
}

class AwsSmithyRpcV2CborProtocol extends cbor.SmithyRpcV2CborProtocol {
    awsQueryCompatible;
    mixin;
    constructor({ defaultNamespace, errorTypeRegistries, awsQueryCompatible, }) {
        super({ defaultNamespace, errorTypeRegistries });
        this.awsQueryCompatible = !!awsQueryCompatible;
        this.mixin = new ProtocolLib(this.awsQueryCompatible);
    }
    async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        if (this.awsQueryCompatible) {
            request.headers["x-amzn-query-mode"] = "true";
        }
        return request;
    }
    async handleError(operationSchema, context, response, dataObject, metadata) {
        if (this.awsQueryCompatible) {
            this.mixin.setQueryCompatError(dataObject, response);
        }
        const errorName = (() => {
            const compatHeader = response.headers["x-amzn-query-error"];
            if (compatHeader && this.awsQueryCompatible) {
                return compatHeader.split(";")[0];
            }
            return cbor.loadSmithyRpcV2CborErrorCode(response, dataObject) ?? "Unknown";
        })();
        this.mixin.compose(this.compositeErrorRegistry, errorName, this.options.defaultNamespace);
        const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorName, this.options.defaultNamespace, response, dataObject, metadata, this.awsQueryCompatible ? this.mixin.findQueryCompatibleError : undefined);
        const ns = schema.NormalizedSchema.of(errorSchema);
        const message = dataObject.message ?? dataObject.Message ?? "UnknownError";
        const ErrorCtor = this.compositeErrorRegistry.getErrorCtor(errorSchema) ?? Error;
        const exception = new ErrorCtor(message);
        const output = {};
        for (const [name, member] of ns.structIterator()) {
            if (dataObject[name] != null) {
                output[name] = this.deserializer.readValue(member, dataObject[name]);
            }
        }
        if (this.awsQueryCompatible) {
            this.mixin.queryCompatOutput(dataObject, output);
        }
        throw this.mixin.decorateServiceException(Object.assign(exception, errorMetadata, {
            $fault: ns.getMergedTraits().error,
            message,
        }, output), dataObject);
    }
}

const _toStr = (val) => {
    if (val == null) {
        return val;
    }
    if (typeof val === "number" || typeof val === "bigint") {
        const warning = new Error(`Received number ${val} where a string was expected.`);
        warning.name = "Warning";
        console.warn(warning);
        return String(val);
    }
    if (typeof val === "boolean") {
        const warning = new Error(`Received boolean ${val} where a string was expected.`);
        warning.name = "Warning";
        console.warn(warning);
        return String(val);
    }
    return val;
};
const _toBool = (val) => {
    if (val == null) {
        return val;
    }
    if (typeof val === "string") {
        const lowercase = val.toLowerCase();
        if (val !== "" && lowercase !== "false" && lowercase !== "true") {
            const warning = new Error(`Received string "${val}" where a boolean was expected.`);
            warning.name = "Warning";
            console.warn(warning);
        }
        return val !== "" && lowercase !== "false";
    }
    return val;
};
const _toNum = (val) => {
    if (val == null) {
        return val;
    }
    if (typeof val === "string") {
        const num = Number(val);
        if (num.toString() !== val) {
            const warning = new Error(`Received string "${val}" where a number was expected.`);
            warning.name = "Warning";
            console.warn(warning);
            return val;
        }
        return num;
    }
    return val;
};

class SerdeContextConfig {
    serdeContext;
    setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
    }
}

class UnionSerde {
    from;
    to;
    keys;
    constructor(from, to) {
        this.from = from;
        this.to = to;
        const keys = Object.keys(this.from);
        const set = new Set(keys);
        set.delete("__type");
        this.keys = set;
    }
    mark(key) {
        this.keys.delete(key);
    }
    hasUnknown() {
        return this.keys.size === 1 && Object.keys(this.to).length === 0;
    }
    writeUnknown() {
        if (this.hasUnknown()) {
            const k = this.keys.values().next().value;
            const v = this.from[k];
            this.to.$unknown = [k, v];
        }
    }
}

function jsonReviver(key, value, context) {
    if (context?.source) {
        const numericString = context.source;
        if (typeof value === "number") {
            if (value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER || numericString !== String(value)) {
                const isFractional = numericString.includes(".");
                if (isFractional) {
                    return new serde.NumericValue(numericString, "bigDecimal");
                }
                else {
                    return BigInt(numericString);
                }
            }
        }
    }
    return value;
}

const collectBodyString = (streamBody, context) => smithyClient.collectBody(streamBody, context).then((body) => (context?.utf8Encoder ?? utilUtf8.toUtf8)(body));

const parseJsonBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        try {
            return JSON.parse(encoded);
        }
        catch (e) {
            if (e?.name === "SyntaxError") {
                Object.defineProperty(e, "$responseBodyText", {
                    value: encoded,
                });
            }
            throw e;
        }
    }
    return {};
});
const parseJsonErrorBody = async (errorBody, context) => {
    const value = await parseJsonBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
const sanitizeErrorCode = (rawValue) => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
        cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
        cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
        cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
        cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
};
const loadRestJsonErrorCode = (output, data) => {
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data && typeof data === "object") {
        const codeKey = findKey(data, "code");
        if (codeKey && data[codeKey] !== undefined) {
            return sanitizeErrorCode(data[codeKey]);
        }
        if (data["__type"] !== undefined) {
            return sanitizeErrorCode(data["__type"]);
        }
    }
};

class JsonShapeDeserializer extends SerdeContextConfig {
    settings;
    constructor(settings) {
        super();
        this.settings = settings;
    }
    async read(schema, data) {
        return this._read(schema, typeof data === "string" ? JSON.parse(data, jsonReviver) : await parseJsonBody(data, this.serdeContext));
    }
    readObject(schema, data) {
        return this._read(schema, data);
    }
    _read(schema$1, value) {
        const isObject = value !== null && typeof value === "object";
        const ns = schema.NormalizedSchema.of(schema$1);
        if (isObject) {
            if (ns.isStructSchema()) {
                const record = value;
                const union = ns.isUnionSchema();
                const out = {};
                let nameMap = void 0;
                const { jsonName } = this.settings;
                if (jsonName) {
                    nameMap = {};
                }
                let unionSerde;
                if (union) {
                    unionSerde = new UnionSerde(record, out);
                }
                for (const [memberName, memberSchema] of ns.structIterator()) {
                    let fromKey = memberName;
                    if (jsonName) {
                        fromKey = memberSchema.getMergedTraits().jsonName ?? fromKey;
                        nameMap[fromKey] = memberName;
                    }
                    if (union) {
                        unionSerde.mark(fromKey);
                    }
                    if (record[fromKey] != null) {
                        out[memberName] = this._read(memberSchema, record[fromKey]);
                    }
                }
                if (union) {
                    unionSerde.writeUnknown();
                }
                else if (typeof record.__type === "string") {
                    for (const k in record) {
                        const v = record[k];
                        const t = jsonName ? nameMap[k] ?? k : k;
                        if (!(t in out)) {
                            out[t] = v;
                        }
                    }
                }
                return out;
            }
            if (Array.isArray(value) && ns.isListSchema()) {
                const listMember = ns.getValueSchema();
                const out = [];
                for (const item of value) {
                    out.push(this._read(listMember, item));
                }
                return out;
            }
            if (ns.isMapSchema()) {
                const mapMember = ns.getValueSchema();
                const out = {};
                for (const _k in value) {
                    out[_k] = this._read(mapMember, value[_k]);
                }
                return out;
            }
        }
        if (ns.isBlobSchema() && typeof value === "string") {
            return utilBase64.fromBase64(value);
        }
        const mediaType = ns.getMergedTraits().mediaType;
        if (ns.isStringSchema() && typeof value === "string" && mediaType) {
            const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
            if (isJson) {
                return serde.LazyJsonString.from(value);
            }
            return value;
        }
        if (ns.isTimestampSchema() && value != null) {
            const format = protocols.determineTimestampFormat(ns, this.settings);
            switch (format) {
                case 5:
                    return serde.parseRfc3339DateTimeWithOffset(value);
                case 6:
                    return serde.parseRfc7231DateTime(value);
                case 7:
                    return serde.parseEpochTimestamp(value);
                default:
                    console.warn("Missing timestamp format, parsing value with Date constructor:", value);
                    return new Date(value);
            }
        }
        if (ns.isBigIntegerSchema() && (typeof value === "number" || typeof value === "string")) {
            return BigInt(value);
        }
        if (ns.isBigDecimalSchema() && value != undefined) {
            if (value instanceof serde.NumericValue) {
                return value;
            }
            const untyped = value;
            if (untyped.type === "bigDecimal" && "string" in untyped) {
                return new serde.NumericValue(untyped.string, untyped.type);
            }
            return new serde.NumericValue(String(value), "bigDecimal");
        }
        if (ns.isNumericSchema() && typeof value === "string") {
            switch (value) {
                case "Infinity":
                    return Infinity;
                case "-Infinity":
                    return -Infinity;
                case "NaN":
                    return NaN;
            }
            return value;
        }
        if (ns.isDocumentSchema()) {
            if (isObject) {
                const out = Array.isArray(value) ? [] : {};
                for (const k in value) {
                    const v = value[k];
                    if (v instanceof serde.NumericValue) {
                        out[k] = v;
                    }
                    else {
                        out[k] = this._read(ns, v);
                    }
                }
                return out;
            }
            else {
                return structuredClone(value);
            }
        }
        return value;
    }
}

const NUMERIC_CONTROL_CHAR = String.fromCharCode(925);
class JsonReplacer {
    values = new Map();
    counter = 0;
    stage = 0;
    createReplacer() {
        if (this.stage === 1) {
            throw new Error("@aws-sdk/core/protocols - JsonReplacer already created.");
        }
        if (this.stage === 2) {
            throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
        }
        this.stage = 1;
        return (key, value) => {
            if (value instanceof serde.NumericValue) {
                const v = `${NUMERIC_CONTROL_CHAR + "nv" + this.counter++}_` + value.string;
                this.values.set(`"${v}"`, value.string);
                return v;
            }
            if (typeof value === "bigint") {
                const s = value.toString();
                const v = `${NUMERIC_CONTROL_CHAR + "b" + this.counter++}_` + s;
                this.values.set(`"${v}"`, s);
                return v;
            }
            return value;
        };
    }
    replaceInJson(json) {
        if (this.stage === 0) {
            throw new Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
        }
        if (this.stage === 2) {
            throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
        }
        this.stage = 2;
        if (this.counter === 0) {
            return json;
        }
        for (const [key, value] of this.values) {
            json = json.replace(key, value);
        }
        return json;
    }
}

class JsonShapeSerializer extends SerdeContextConfig {
    settings;
    buffer;
    useReplacer = false;
    rootSchema;
    constructor(settings) {
        super();
        this.settings = settings;
    }
    write(schema$1, value) {
        this.rootSchema = schema.NormalizedSchema.of(schema$1);
        this.buffer = this._write(this.rootSchema, value);
    }
    flush() {
        const { rootSchema, useReplacer } = this;
        this.rootSchema = undefined;
        this.useReplacer = false;
        if (rootSchema?.isStructSchema() || rootSchema?.isDocumentSchema()) {
            if (!useReplacer) {
                return JSON.stringify(this.buffer);
            }
            const replacer = new JsonReplacer();
            return replacer.replaceInJson(JSON.stringify(this.buffer, replacer.createReplacer(), 0));
        }
        return this.buffer;
    }
    writeDiscriminatedDocument(schema$1, value) {
        this.write(schema$1, value);
        if (typeof this.buffer === "object") {
            this.buffer.__type = schema.NormalizedSchema.of(schema$1).getName(true);
        }
    }
    _write(schema$1, value, container) {
        const isObject = value !== null && typeof value === "object";
        const ns = schema.NormalizedSchema.of(schema$1);
        if (isObject) {
            if (ns.isStructSchema()) {
                const record = value;
                const out = {};
                const { jsonName } = this.settings;
                let nameMap = void 0;
                if (jsonName) {
                    nameMap = {};
                }
                let outCount = 0;
                for (const [memberName, memberSchema] of ns.structIterator()) {
                    const serializableValue = this._write(memberSchema, record[memberName], ns);
                    if (serializableValue !== undefined) {
                        let targetKey = memberName;
                        if (jsonName) {
                            targetKey = memberSchema.getMergedTraits().jsonName ?? memberName;
                            nameMap[memberName] = targetKey;
                        }
                        out[targetKey] = serializableValue;
                        outCount++;
                    }
                }
                if (ns.isUnionSchema() && outCount === 0) {
                    const { $unknown } = record;
                    if (Array.isArray($unknown)) {
                        const [k, v] = $unknown;
                        out[k] = this._write(15, v);
                    }
                }
                else if (typeof record.__type === "string") {
                    for (const k in record) {
                        const v = record[k];
                        const targetKey = jsonName ? nameMap[k] ?? k : k;
                        if (!(targetKey in out)) {
                            out[targetKey] = this._write(15, v);
                        }
                    }
                }
                return out;
            }
            if (Array.isArray(value) && ns.isListSchema()) {
                const listMember = ns.getValueSchema();
                const out = [];
                const sparse = !!ns.getMergedTraits().sparse;
                for (const item of value) {
                    if (sparse || item != null) {
                        out.push(this._write(listMember, item));
                    }
                }
                return out;
            }
            if (ns.isMapSchema()) {
                const mapMember = ns.getValueSchema();
                const out = {};
                const sparse = !!ns.getMergedTraits().sparse;
                for (const _k in value) {
                    const _v = value[_k];
                    if (sparse || _v != null) {
                        out[_k] = this._write(mapMember, _v);
                    }
                }
                return out;
            }
            if (value instanceof Uint8Array && (ns.isBlobSchema() || ns.isDocumentSchema())) {
                if (ns === this.rootSchema) {
                    return value;
                }
                return (this.serdeContext?.base64Encoder ?? utilBase64.toBase64)(value);
            }
            if (value instanceof Date && (ns.isTimestampSchema() || ns.isDocumentSchema())) {
                const format = protocols.determineTimestampFormat(ns, this.settings);
                switch (format) {
                    case 5:
                        return value.toISOString().replace(".000Z", "Z");
                    case 6:
                        return serde.dateToUtcString(value);
                    case 7:
                        return value.getTime() / 1000;
                    default:
                        console.warn("Missing timestamp format, using epoch seconds", value);
                        return value.getTime() / 1000;
                }
            }
            if (value instanceof serde.NumericValue) {
                this.useReplacer = true;
            }
        }
        if (value === null && container?.isStructSchema()) {
            return void 0;
        }
        if (ns.isStringSchema()) {
            if (typeof value === "undefined" && ns.isIdempotencyToken()) {
                return serde.generateIdempotencyToken();
            }
            const mediaType = ns.getMergedTraits().mediaType;
            if (value != null && mediaType) {
                const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
                if (isJson) {
                    return serde.LazyJsonString.from(value);
                }
            }
            return value;
        }
        if (typeof value === "number" && ns.isNumericSchema()) {
            if (Math.abs(value) === Infinity || isNaN(value)) {
                return String(value);
            }
            return value;
        }
        if (typeof value === "string" && ns.isBlobSchema()) {
            if (ns === this.rootSchema) {
                return value;
            }
            return (this.serdeContext?.base64Encoder ?? utilBase64.toBase64)(value);
        }
        if (typeof value === "bigint") {
            this.useReplacer = true;
        }
        if (ns.isDocumentSchema()) {
            if (isObject) {
                const out = Array.isArray(value) ? [] : {};
                for (const k in value) {
                    const v = value[k];
                    if (v instanceof serde.NumericValue) {
                        this.useReplacer = true;
                        out[k] = v;
                    }
                    else {
                        out[k] = this._write(ns, v);
                    }
                }
                return out;
            }
            else {
                return structuredClone(value);
            }
        }
        return value;
    }
}

class JsonCodec extends SerdeContextConfig {
    settings;
    constructor(settings) {
        super();
        this.settings = settings;
    }
    createSerializer() {
        const serializer = new JsonShapeSerializer(this.settings);
        serializer.setSerdeContext(this.serdeContext);
        return serializer;
    }
    createDeserializer() {
        const deserializer = new JsonShapeDeserializer(this.settings);
        deserializer.setSerdeContext(this.serdeContext);
        return deserializer;
    }
}

class AwsJsonRpcProtocol extends protocols.RpcProtocol {
    serializer;
    deserializer;
    serviceTarget;
    codec;
    mixin;
    awsQueryCompatible;
    constructor({ defaultNamespace, errorTypeRegistries, serviceTarget, awsQueryCompatible, jsonCodec, }) {
        super({
            defaultNamespace,
            errorTypeRegistries,
        });
        this.serviceTarget = serviceTarget;
        this.codec =
            jsonCodec ??
                new JsonCodec({
                    timestampFormat: {
                        useTrait: true,
                        default: 7,
                    },
                    jsonName: false,
                });
        this.serializer = this.codec.createSerializer();
        this.deserializer = this.codec.createDeserializer();
        this.awsQueryCompatible = !!awsQueryCompatible;
        this.mixin = new ProtocolLib(this.awsQueryCompatible);
    }
    async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        if (!request.path.endsWith("/")) {
            request.path += "/";
        }
        request.headers["content-type"] = `application/x-amz-json-${this.getJsonRpcVersion()}`;
        request.headers["x-amz-target"] = `${this.serviceTarget}.${operationSchema.name}`;
        if (this.awsQueryCompatible) {
            request.headers["x-amzn-query-mode"] = "true";
        }
        if (schema.deref(operationSchema.input) === "unit" || !request.body) {
            request.body = "{}";
        }
        return request;
    }
    getPayloadCodec() {
        return this.codec;
    }
    async handleError(operationSchema, context, response, dataObject, metadata) {
        if (this.awsQueryCompatible) {
            this.mixin.setQueryCompatError(dataObject, response);
        }
        const errorIdentifier = loadRestJsonErrorCode(response, dataObject) ?? "Unknown";
        this.mixin.compose(this.compositeErrorRegistry, errorIdentifier, this.options.defaultNamespace);
        const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, dataObject, metadata, this.awsQueryCompatible ? this.mixin.findQueryCompatibleError : undefined);
        const ns = schema.NormalizedSchema.of(errorSchema);
        const message = dataObject.message ?? dataObject.Message ?? "UnknownError";
        const ErrorCtor = this.compositeErrorRegistry.getErrorCtor(errorSchema) ?? Error;
        const exception = new ErrorCtor(message);
        const output = {};
        const errorDeserializer = this.codec.createDeserializer();
        for (const [name, member] of ns.structIterator()) {
            if (dataObject[name] != null) {
                output[name] = errorDeserializer.readObject(member, dataObject[name]);
            }
        }
        if (this.awsQueryCompatible) {
            this.mixin.queryCompatOutput(dataObject, output);
        }
        throw this.mixin.decorateServiceException(Object.assign(exception, errorMetadata, {
            $fault: ns.getMergedTraits().error,
            message,
        }, output), dataObject);
    }
}

class AwsJson1_0Protocol extends AwsJsonRpcProtocol {
    constructor({ defaultNamespace, errorTypeRegistries, serviceTarget, awsQueryCompatible, jsonCodec, }) {
        super({
            defaultNamespace,
            errorTypeRegistries,
            serviceTarget,
            awsQueryCompatible,
            jsonCodec,
        });
    }
    getShapeId() {
        return "aws.protocols#awsJson1_0";
    }
    getJsonRpcVersion() {
        return "1.0";
    }
    getDefaultContentType() {
        return "application/x-amz-json-1.0";
    }
}

class AwsJson1_1Protocol extends AwsJsonRpcProtocol {
    constructor({ defaultNamespace, errorTypeRegistries, serviceTarget, awsQueryCompatible, jsonCodec, }) {
        super({
            defaultNamespace,
            errorTypeRegistries,
            serviceTarget,
            awsQueryCompatible,
            jsonCodec,
        });
    }
    getShapeId() {
        return "aws.protocols#awsJson1_1";
    }
    getJsonRpcVersion() {
        return "1.1";
    }
    getDefaultContentType() {
        return "application/x-amz-json-1.1";
    }
}

class AwsRestJsonProtocol extends protocols.HttpBindingProtocol {
    serializer;
    deserializer;
    codec;
    mixin = new ProtocolLib();
    constructor({ defaultNamespace, errorTypeRegistries, }) {
        super({
            defaultNamespace,
            errorTypeRegistries,
        });
        const settings = {
            timestampFormat: {
                useTrait: true,
                default: 7,
            },
            httpBindings: true,
            jsonName: true,
        };
        this.codec = new JsonCodec(settings);
        this.serializer = new protocols.HttpInterceptingShapeSerializer(this.codec.createSerializer(), settings);
        this.deserializer = new protocols.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), settings);
    }
    getShapeId() {
        return "aws.protocols#restJson1";
    }
    getPayloadCodec() {
        return this.codec;
    }
    setSerdeContext(serdeContext) {
        this.codec.setSerdeContext(serdeContext);
        super.setSerdeContext(serdeContext);
    }
    async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        const inputSchema = schema.NormalizedSchema.of(operationSchema.input);
        if (!request.headers["content-type"]) {
            const contentType = this.mixin.resolveRestContentType(this.getDefaultContentType(), inputSchema);
            if (contentType) {
                request.headers["content-type"] = contentType;
            }
        }
        if (request.body == null && request.headers["content-type"] === this.getDefaultContentType()) {
            request.body = "{}";
        }
        return request;
    }
    async deserializeResponse(operationSchema, context, response) {
        const output = await super.deserializeResponse(operationSchema, context, response);
        const outputSchema = schema.NormalizedSchema.of(operationSchema.output);
        for (const [name, member] of outputSchema.structIterator()) {
            if (member.getMemberTraits().httpPayload && !(name in output)) {
                output[name] = null;
            }
        }
        return output;
    }
    async handleError(operationSchema, context, response, dataObject, metadata) {
        const errorIdentifier = loadRestJsonErrorCode(response, dataObject) ?? "Unknown";
        this.mixin.compose(this.compositeErrorRegistry, errorIdentifier, this.options.defaultNamespace);
        const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, dataObject, metadata);
        const ns = schema.NormalizedSchema.of(errorSchema);
        const message = dataObject.message ?? dataObject.Message ?? "UnknownError";
        const ErrorCtor = this.compositeErrorRegistry.getErrorCtor(errorSchema) ?? Error;
        const exception = new ErrorCtor(message);
        await this.deserializeHttpMessage(errorSchema, context, response, dataObject);
        const output = {};
        const errorDeserializer = this.codec.createDeserializer();
        for (const [name, member] of ns.structIterator()) {
            const target = member.getMergedTraits().jsonName ?? name;
            output[name] = errorDeserializer.readObject(member, dataObject[target]);
        }
        throw this.mixin.decorateServiceException(Object.assign(exception, errorMetadata, {
            $fault: ns.getMergedTraits().error,
            message,
        }, output), dataObject);
    }
    getDefaultContentType() {
        return "application/json";
    }
}

const awsExpectUnion = (value) => {
    if (value == null) {
        return undefined;
    }
    if (typeof value === "object" && "__type" in value) {
        delete value.__type;
    }
    return smithyClient.expectUnion(value);
};

class XmlShapeDeserializer extends SerdeContextConfig {
    settings;
    stringDeserializer;
    constructor(settings) {
        super();
        this.settings = settings;
        this.stringDeserializer = new protocols.FromStringShapeDeserializer(settings);
    }
    setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
        this.stringDeserializer.setSerdeContext(serdeContext);
    }
    read(schema$1, bytes, key) {
        const ns = schema.NormalizedSchema.of(schema$1);
        const memberSchemas = ns.getMemberSchemas();
        const isEventPayload = ns.isStructSchema() &&
            ns.isMemberSchema() &&
            !!Object.values(memberSchemas).find((memberNs) => {
                return !!memberNs.getMemberTraits().eventPayload;
            });
        if (isEventPayload) {
            const output = {};
            const memberName = Object.keys(memberSchemas)[0];
            const eventMemberSchema = memberSchemas[memberName];
            if (eventMemberSchema.isBlobSchema()) {
                output[memberName] = bytes;
            }
            else {
                output[memberName] = this.read(memberSchemas[memberName], bytes);
            }
            return output;
        }
        const xmlString = (this.serdeContext?.utf8Encoder ?? utilUtf8.toUtf8)(bytes);
        const parsedObject = this.parseXml(xmlString);
        return this.readSchema(schema$1, key ? parsedObject[key] : parsedObject);
    }
    readSchema(_schema, value) {
        const ns = schema.NormalizedSchema.of(_schema);
        if (ns.isUnitSchema()) {
            return;
        }
        const traits = ns.getMergedTraits();
        if (ns.isListSchema() && !Array.isArray(value)) {
            return this.readSchema(ns, [value]);
        }
        if (value == null) {
            return value;
        }
        if (typeof value === "object") {
            const flat = !!traits.xmlFlattened;
            if (ns.isListSchema()) {
                const listValue = ns.getValueSchema();
                const buffer = [];
                const sourceKey = listValue.getMergedTraits().xmlName ?? "member";
                const source = flat ? value : (value[0] ?? value)[sourceKey];
                if (source == null) {
                    return buffer;
                }
                const sourceArray = Array.isArray(source) ? source : [source];
                for (const v of sourceArray) {
                    buffer.push(this.readSchema(listValue, v));
                }
                return buffer;
            }
            const buffer = {};
            if (ns.isMapSchema()) {
                const keyNs = ns.getKeySchema();
                const memberNs = ns.getValueSchema();
                let entries;
                if (flat) {
                    entries = Array.isArray(value) ? value : [value];
                }
                else {
                    entries = Array.isArray(value.entry) ? value.entry : [value.entry];
                }
                const keyProperty = keyNs.getMergedTraits().xmlName ?? "key";
                const valueProperty = memberNs.getMergedTraits().xmlName ?? "value";
                for (const entry of entries) {
                    const key = entry[keyProperty];
                    const value = entry[valueProperty];
                    buffer[key] = this.readSchema(memberNs, value);
                }
                return buffer;
            }
            if (ns.isStructSchema()) {
                const union = ns.isUnionSchema();
                let unionSerde;
                if (union) {
                    unionSerde = new UnionSerde(value, buffer);
                }
                for (const [memberName, memberSchema] of ns.structIterator()) {
                    const memberTraits = memberSchema.getMergedTraits();
                    const xmlObjectKey = !memberTraits.httpPayload
                        ? memberSchema.getMemberTraits().xmlName ?? memberName
                        : memberTraits.xmlName ?? memberSchema.getName();
                    if (union) {
                        unionSerde.mark(xmlObjectKey);
                    }
                    if (value[xmlObjectKey] != null) {
                        buffer[memberName] = this.readSchema(memberSchema, value[xmlObjectKey]);
                    }
                }
                if (union) {
                    unionSerde.writeUnknown();
                }
                return buffer;
            }
            if (ns.isDocumentSchema()) {
                return value;
            }
            throw new Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${ns.getName(true)}`);
        }
        if (ns.isListSchema()) {
            return [];
        }
        if (ns.isMapSchema() || ns.isStructSchema()) {
            return {};
        }
        return this.stringDeserializer.read(ns, value);
    }
    parseXml(xml) {
        if (xml.length) {
            let parsedObj;
            try {
                parsedObj = xmlBuilder.parseXML(xml);
            }
            catch (e) {
                if (e && typeof e === "object") {
                    Object.defineProperty(e, "$responseBodyText", {
                        value: xml,
                    });
                }
                throw e;
            }
            const textNodeName = "#text";
            const key = Object.keys(parsedObj)[0];
            const parsedObjToReturn = parsedObj[key];
            if (parsedObjToReturn[textNodeName]) {
                parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
                delete parsedObjToReturn[textNodeName];
            }
            return smithyClient.getValueFromTextNode(parsedObjToReturn);
        }
        return {};
    }
}

class QueryShapeSerializer extends SerdeContextConfig {
    settings;
    buffer;
    constructor(settings) {
        super();
        this.settings = settings;
    }
    write(schema$1, value, prefix = "") {
        if (this.buffer === undefined) {
            this.buffer = "";
        }
        const ns = schema.NormalizedSchema.of(schema$1);
        if (prefix && !prefix.endsWith(".")) {
            prefix += ".";
        }
        if (ns.isBlobSchema()) {
            if (typeof value === "string" || value instanceof Uint8Array) {
                this.writeKey(prefix);
                this.writeValue((this.serdeContext?.base64Encoder ?? utilBase64.toBase64)(value));
            }
        }
        else if (ns.isBooleanSchema() || ns.isNumericSchema() || ns.isStringSchema()) {
            if (value != null) {
                this.writeKey(prefix);
                this.writeValue(String(value));
            }
            else if (ns.isIdempotencyToken()) {
                this.writeKey(prefix);
                this.writeValue(serde.generateIdempotencyToken());
            }
        }
        else if (ns.isBigIntegerSchema()) {
            if (value != null) {
                this.writeKey(prefix);
                this.writeValue(String(value));
            }
        }
        else if (ns.isBigDecimalSchema()) {
            if (value != null) {
                this.writeKey(prefix);
                this.writeValue(value instanceof serde.NumericValue ? value.string : String(value));
            }
        }
        else if (ns.isTimestampSchema()) {
            if (value instanceof Date) {
                this.writeKey(prefix);
                const format = protocols.determineTimestampFormat(ns, this.settings);
                switch (format) {
                    case 5:
                        this.writeValue(value.toISOString().replace(".000Z", "Z"));
                        break;
                    case 6:
                        this.writeValue(smithyClient.dateToUtcString(value));
                        break;
                    case 7:
                        this.writeValue(String(value.getTime() / 1000));
                        break;
                }
            }
        }
        else if (ns.isDocumentSchema()) {
            if (Array.isArray(value)) {
                this.write(64 | 15, value, prefix);
            }
            else if (value instanceof Date) {
                this.write(4, value, prefix);
            }
            else if (value instanceof Uint8Array) {
                this.write(21, value, prefix);
            }
            else if (value && typeof value === "object") {
                this.write(128 | 15, value, prefix);
            }
            else {
                this.writeKey(prefix);
                this.writeValue(String(value));
            }
        }
        else if (ns.isListSchema()) {
            if (Array.isArray(value)) {
                if (value.length === 0) {
                    if (this.settings.serializeEmptyLists) {
                        this.writeKey(prefix);
                        this.writeValue("");
                    }
                }
                else {
                    const member = ns.getValueSchema();
                    const flat = this.settings.flattenLists || ns.getMergedTraits().xmlFlattened;
                    let i = 1;
                    for (const item of value) {
                        if (item == null) {
                            continue;
                        }
                        const traits = member.getMergedTraits();
                        const suffix = this.getKey("member", traits.xmlName, traits.ec2QueryName);
                        const key = flat ? `${prefix}${i}` : `${prefix}${suffix}.${i}`;
                        this.write(member, item, key);
                        ++i;
                    }
                }
            }
        }
        else if (ns.isMapSchema()) {
            if (value && typeof value === "object") {
                const keySchema = ns.getKeySchema();
                const memberSchema = ns.getValueSchema();
                const flat = ns.getMergedTraits().xmlFlattened;
                let i = 1;
                for (const k in value) {
                    const v = value[k];
                    if (v == null) {
                        continue;
                    }
                    const keyTraits = keySchema.getMergedTraits();
                    const keySuffix = this.getKey("key", keyTraits.xmlName, keyTraits.ec2QueryName);
                    const key = flat ? `${prefix}${i}.${keySuffix}` : `${prefix}entry.${i}.${keySuffix}`;
                    const valTraits = memberSchema.getMergedTraits();
                    const valueSuffix = this.getKey("value", valTraits.xmlName, valTraits.ec2QueryName);
                    const valueKey = flat ? `${prefix}${i}.${valueSuffix}` : `${prefix}entry.${i}.${valueSuffix}`;
                    this.write(keySchema, k, key);
                    this.write(memberSchema, v, valueKey);
                    ++i;
                }
            }
        }
        else if (ns.isStructSchema()) {
            if (value && typeof value === "object") {
                let didWriteMember = false;
                for (const [memberName, member] of ns.structIterator()) {
                    if (value[memberName] == null && !member.isIdempotencyToken()) {
                        continue;
                    }
                    const traits = member.getMergedTraits();
                    const suffix = this.getKey(memberName, traits.xmlName, traits.ec2QueryName, "struct");
                    const key = `${prefix}${suffix}`;
                    this.write(member, value[memberName], key);
                    didWriteMember = true;
                }
                if (!didWriteMember && ns.isUnionSchema()) {
                    const { $unknown } = value;
                    if (Array.isArray($unknown)) {
                        const [k, v] = $unknown;
                        const key = `${prefix}${k}`;
                        this.write(15, v, key);
                    }
                }
            }
        }
        else if (ns.isUnitSchema()) ;
        else {
            throw new Error(`@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${ns.getName(true)}`);
        }
    }
    flush() {
        if (this.buffer === undefined) {
            throw new Error("@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.");
        }
        const str = this.buffer;
        delete this.buffer;
        return str;
    }
    getKey(memberName, xmlName, ec2QueryName, keySource) {
        const { ec2, capitalizeKeys } = this.settings;
        if (ec2 && ec2QueryName) {
            return ec2QueryName;
        }
        const key = xmlName ?? memberName;
        if (capitalizeKeys && keySource === "struct") {
            return key[0].toUpperCase() + key.slice(1);
        }
        return key;
    }
    writeKey(key) {
        if (key.endsWith(".")) {
            key = key.slice(0, key.length - 1);
        }
        this.buffer += `&${protocols.extendedEncodeURIComponent(key)}=`;
    }
    writeValue(value) {
        this.buffer += protocols.extendedEncodeURIComponent(value);
    }
}

class AwsQueryProtocol extends protocols.RpcProtocol {
    options;
    serializer;
    deserializer;
    mixin = new ProtocolLib();
    constructor(options) {
        super({
            defaultNamespace: options.defaultNamespace,
            errorTypeRegistries: options.errorTypeRegistries,
        });
        this.options = options;
        const settings = {
            timestampFormat: {
                useTrait: true,
                default: 5,
            },
            httpBindings: false,
            xmlNamespace: options.xmlNamespace,
            serviceNamespace: options.defaultNamespace,
            serializeEmptyLists: true,
        };
        this.serializer = new QueryShapeSerializer(settings);
        this.deserializer = new XmlShapeDeserializer(settings);
    }
    getShapeId() {
        return "aws.protocols#awsQuery";
    }
    setSerdeContext(serdeContext) {
        this.serializer.setSerdeContext(serdeContext);
        this.deserializer.setSerdeContext(serdeContext);
    }
    getPayloadCodec() {
        throw new Error("AWSQuery protocol has no payload codec.");
    }
    async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        if (!request.path.endsWith("/")) {
            request.path += "/";
        }
        request.headers["content-type"] = "application/x-www-form-urlencoded";
        if (schema.deref(operationSchema.input) === "unit" || !request.body) {
            request.body = "";
        }
        const action = operationSchema.name.split("#")[1] ?? operationSchema.name;
        request.body = `Action=${action}&Version=${this.options.version}` + request.body;
        if (request.body.endsWith("&")) {
            request.body = request.body.slice(-1);
        }
        return request;
    }
    async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = schema.NormalizedSchema.of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
            const bytes = await protocols.collectBody(response.body, context);
            if (bytes.byteLength > 0) {
                Object.assign(dataObject, await deserializer.read(15, bytes));
            }
            await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
        }
        for (const header in response.headers) {
            const value = response.headers[header];
            delete response.headers[header];
            response.headers[header.toLowerCase()] = value;
        }
        const shortName = operationSchema.name.split("#")[1] ?? operationSchema.name;
        const awsQueryResultKey = ns.isStructSchema() && this.useNestedResult() ? shortName + "Result" : undefined;
        const bytes = await protocols.collectBody(response.body, context);
        if (bytes.byteLength > 0) {
            Object.assign(dataObject, await deserializer.read(ns, bytes, awsQueryResultKey));
        }
        dataObject.$metadata = this.deserializeMetadata(response);
        return dataObject;
    }
    useNestedResult() {
        return true;
    }
    async handleError(operationSchema, context, response, dataObject, metadata) {
        const errorIdentifier = this.loadQueryErrorCode(response, dataObject) ?? "Unknown";
        this.mixin.compose(this.compositeErrorRegistry, errorIdentifier, this.options.defaultNamespace);
        const errorData = this.loadQueryError(dataObject) ?? {};
        const message = this.loadQueryErrorMessage(dataObject);
        errorData.message = message;
        errorData.Error = {
            Type: errorData.Type,
            Code: errorData.Code,
            Message: message,
        };
        const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, errorData, metadata, this.mixin.findQueryCompatibleError);
        const ns = schema.NormalizedSchema.of(errorSchema);
        const ErrorCtor = this.compositeErrorRegistry.getErrorCtor(errorSchema) ?? Error;
        const exception = new ErrorCtor(message);
        const output = {
            Type: errorData.Error.Type,
            Code: errorData.Error.Code,
            Error: errorData.Error,
        };
        for (const [name, member] of ns.structIterator()) {
            const target = member.getMergedTraits().xmlName ?? name;
            const value = errorData[target] ?? dataObject[target];
            output[name] = this.deserializer.readSchema(member, value);
        }
        throw this.mixin.decorateServiceException(Object.assign(exception, errorMetadata, {
            $fault: ns.getMergedTraits().error,
            message,
        }, output), dataObject);
    }
    loadQueryErrorCode(output, data) {
        const code = (data.Errors?.[0]?.Error ?? data.Errors?.Error ?? data.Error)?.Code;
        if (code !== undefined) {
            return code;
        }
        if (output.statusCode == 404) {
            return "NotFound";
        }
    }
    loadQueryError(data) {
        return data.Errors?.[0]?.Error ?? data.Errors?.Error ?? data.Error;
    }
    loadQueryErrorMessage(data) {
        const errorData = this.loadQueryError(data);
        return errorData?.message ?? errorData?.Message ?? data.message ?? data.Message ?? "Unknown";
    }
    getDefaultContentType() {
        return "application/x-www-form-urlencoded";
    }
}

class AwsEc2QueryProtocol extends AwsQueryProtocol {
    options;
    constructor(options) {
        super(options);
        this.options = options;
        const ec2Settings = {
            capitalizeKeys: true,
            flattenLists: true,
            serializeEmptyLists: false,
            ec2: true,
        };
        Object.assign(this.serializer.settings, ec2Settings);
    }
    getShapeId() {
        return "aws.protocols#ec2Query";
    }
    useNestedResult() {
        return false;
    }
}

const parseXmlBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        let parsedObj;
        try {
            parsedObj = xmlBuilder.parseXML(encoded);
        }
        catch (e) {
            if (e && typeof e === "object") {
                Object.defineProperty(e, "$responseBodyText", {
                    value: encoded,
                });
            }
            throw e;
        }
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
        }
        return smithyClient.getValueFromTextNode(parsedObjToReturn);
    }
    return {};
});
const parseXmlErrorBody = async (errorBody, context) => {
    const value = await parseXmlBody(errorBody, context);
    if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
    }
    return value;
};
const loadRestXmlErrorCode = (output, data) => {
    if (data?.Error?.Code !== undefined) {
        return data.Error.Code;
    }
    if (data?.Code !== undefined) {
        return data.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
};

class XmlShapeSerializer extends SerdeContextConfig {
    settings;
    stringBuffer;
    byteBuffer;
    buffer;
    constructor(settings) {
        super();
        this.settings = settings;
    }
    write(schema$1, value) {
        const ns = schema.NormalizedSchema.of(schema$1);
        if (ns.isStringSchema() && typeof value === "string") {
            this.stringBuffer = value;
        }
        else if (ns.isBlobSchema()) {
            this.byteBuffer =
                "byteLength" in value
                    ? value
                    : (this.serdeContext?.base64Decoder ?? utilBase64.fromBase64)(value);
        }
        else {
            this.buffer = this.writeStruct(ns, value, undefined);
            const traits = ns.getMergedTraits();
            if (traits.httpPayload && !traits.xmlName) {
                this.buffer.withName(ns.getName());
            }
        }
    }
    flush() {
        if (this.byteBuffer !== undefined) {
            const bytes = this.byteBuffer;
            delete this.byteBuffer;
            return bytes;
        }
        if (this.stringBuffer !== undefined) {
            const str = this.stringBuffer;
            delete this.stringBuffer;
            return str;
        }
        const buffer = this.buffer;
        if (this.settings.xmlNamespace) {
            if (!buffer?.attributes?.["xmlns"]) {
                buffer.addAttribute("xmlns", this.settings.xmlNamespace);
            }
        }
        delete this.buffer;
        return buffer.toString();
    }
    writeStruct(ns, value, parentXmlns) {
        const traits = ns.getMergedTraits();
        const name = ns.isMemberSchema() && !traits.httpPayload
            ? ns.getMemberTraits().xmlName ?? ns.getMemberName()
            : traits.xmlName ?? ns.getName();
        if (!name || !ns.isStructSchema()) {
            throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${ns.getName(true)}.`);
        }
        const structXmlNode = xmlBuilder.XmlNode.of(name);
        const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(ns, parentXmlns);
        for (const [memberName, memberSchema] of ns.structIterator()) {
            const val = value[memberName];
            if (val != null || memberSchema.isIdempotencyToken()) {
                if (memberSchema.getMergedTraits().xmlAttribute) {
                    structXmlNode.addAttribute(memberSchema.getMergedTraits().xmlName ?? memberName, this.writeSimple(memberSchema, val));
                    continue;
                }
                if (memberSchema.isListSchema()) {
                    this.writeList(memberSchema, val, structXmlNode, xmlns);
                }
                else if (memberSchema.isMapSchema()) {
                    this.writeMap(memberSchema, val, structXmlNode, xmlns);
                }
                else if (memberSchema.isStructSchema()) {
                    structXmlNode.addChildNode(this.writeStruct(memberSchema, val, xmlns));
                }
                else {
                    const memberNode = xmlBuilder.XmlNode.of(memberSchema.getMergedTraits().xmlName ?? memberSchema.getMemberName());
                    this.writeSimpleInto(memberSchema, val, memberNode, xmlns);
                    structXmlNode.addChildNode(memberNode);
                }
            }
        }
        const { $unknown } = value;
        if ($unknown && ns.isUnionSchema() && Array.isArray($unknown) && Object.keys(value).length === 1) {
            const [k, v] = $unknown;
            const node = xmlBuilder.XmlNode.of(k);
            if (typeof v !== "string") {
                if (value instanceof xmlBuilder.XmlNode || value instanceof xmlBuilder.XmlText) {
                    structXmlNode.addChildNode(value);
                }
                else {
                    throw new Error(`@aws-sdk - $unknown union member in XML requires ` +
                        `value of type string, @aws-sdk/xml-builder::XmlNode or XmlText.`);
                }
            }
            this.writeSimpleInto(0, v, node, xmlns);
            structXmlNode.addChildNode(node);
        }
        if (xmlns) {
            structXmlNode.addAttribute(xmlnsAttr, xmlns);
        }
        return structXmlNode;
    }
    writeList(listMember, array, container, parentXmlns) {
        if (!listMember.isMemberSchema()) {
            throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${listMember.getName(true)}`);
        }
        const listTraits = listMember.getMergedTraits();
        const listValueSchema = listMember.getValueSchema();
        const listValueTraits = listValueSchema.getMergedTraits();
        const sparse = !!listValueTraits.sparse;
        const flat = !!listTraits.xmlFlattened;
        const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(listMember, parentXmlns);
        const writeItem = (container, value) => {
            if (listValueSchema.isListSchema()) {
                this.writeList(listValueSchema, Array.isArray(value) ? value : [value], container, xmlns);
            }
            else if (listValueSchema.isMapSchema()) {
                this.writeMap(listValueSchema, value, container, xmlns);
            }
            else if (listValueSchema.isStructSchema()) {
                const struct = this.writeStruct(listValueSchema, value, xmlns);
                container.addChildNode(struct.withName(flat ? listTraits.xmlName ?? listMember.getMemberName() : listValueTraits.xmlName ?? "member"));
            }
            else {
                const listItemNode = xmlBuilder.XmlNode.of(flat ? listTraits.xmlName ?? listMember.getMemberName() : listValueTraits.xmlName ?? "member");
                this.writeSimpleInto(listValueSchema, value, listItemNode, xmlns);
                container.addChildNode(listItemNode);
            }
        };
        if (flat) {
            for (const value of array) {
                if (sparse || value != null) {
                    writeItem(container, value);
                }
            }
        }
        else {
            const listNode = xmlBuilder.XmlNode.of(listTraits.xmlName ?? listMember.getMemberName());
            if (xmlns) {
                listNode.addAttribute(xmlnsAttr, xmlns);
            }
            for (const value of array) {
                if (sparse || value != null) {
                    writeItem(listNode, value);
                }
            }
            container.addChildNode(listNode);
        }
    }
    writeMap(mapMember, map, container, parentXmlns, containerIsMap = false) {
        if (!mapMember.isMemberSchema()) {
            throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${mapMember.getName(true)}`);
        }
        const mapTraits = mapMember.getMergedTraits();
        const mapKeySchema = mapMember.getKeySchema();
        const mapKeyTraits = mapKeySchema.getMergedTraits();
        const keyTag = mapKeyTraits.xmlName ?? "key";
        const mapValueSchema = mapMember.getValueSchema();
        const mapValueTraits = mapValueSchema.getMergedTraits();
        const valueTag = mapValueTraits.xmlName ?? "value";
        const sparse = !!mapValueTraits.sparse;
        const flat = !!mapTraits.xmlFlattened;
        const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(mapMember, parentXmlns);
        const addKeyValue = (entry, key, val) => {
            const keyNode = xmlBuilder.XmlNode.of(keyTag, key);
            const [keyXmlnsAttr, keyXmlns] = this.getXmlnsAttribute(mapKeySchema, xmlns);
            if (keyXmlns) {
                keyNode.addAttribute(keyXmlnsAttr, keyXmlns);
            }
            entry.addChildNode(keyNode);
            let valueNode = xmlBuilder.XmlNode.of(valueTag);
            if (mapValueSchema.isListSchema()) {
                this.writeList(mapValueSchema, val, valueNode, xmlns);
            }
            else if (mapValueSchema.isMapSchema()) {
                this.writeMap(mapValueSchema, val, valueNode, xmlns, true);
            }
            else if (mapValueSchema.isStructSchema()) {
                valueNode = this.writeStruct(mapValueSchema, val, xmlns);
            }
            else {
                this.writeSimpleInto(mapValueSchema, val, valueNode, xmlns);
            }
            entry.addChildNode(valueNode);
        };
        if (flat) {
            for (const key in map) {
                const val = map[key];
                if (sparse || val != null) {
                    const entry = xmlBuilder.XmlNode.of(mapTraits.xmlName ?? mapMember.getMemberName());
                    addKeyValue(entry, key, val);
                    container.addChildNode(entry);
                }
            }
        }
        else {
            let mapNode;
            if (!containerIsMap) {
                mapNode = xmlBuilder.XmlNode.of(mapTraits.xmlName ?? mapMember.getMemberName());
                if (xmlns) {
                    mapNode.addAttribute(xmlnsAttr, xmlns);
                }
                container.addChildNode(mapNode);
            }
            for (const key in map) {
                const val = map[key];
                if (sparse || val != null) {
                    const entry = xmlBuilder.XmlNode.of("entry");
                    addKeyValue(entry, key, val);
                    (containerIsMap ? container : mapNode).addChildNode(entry);
                }
            }
        }
    }
    writeSimple(_schema, value) {
        if (null === value) {
            throw new Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
        }
        const ns = schema.NormalizedSchema.of(_schema);
        let nodeContents = null;
        if (value && typeof value === "object") {
            if (ns.isBlobSchema()) {
                nodeContents = (this.serdeContext?.base64Encoder ?? utilBase64.toBase64)(value);
            }
            else if (ns.isTimestampSchema() && value instanceof Date) {
                const format = protocols.determineTimestampFormat(ns, this.settings);
                switch (format) {
                    case 5:
                        nodeContents = value.toISOString().replace(".000Z", "Z");
                        break;
                    case 6:
                        nodeContents = smithyClient.dateToUtcString(value);
                        break;
                    case 7:
                        nodeContents = String(value.getTime() / 1000);
                        break;
                    default:
                        console.warn("Missing timestamp format, using http date", value);
                        nodeContents = smithyClient.dateToUtcString(value);
                        break;
                }
            }
            else if (ns.isBigDecimalSchema() && value) {
                if (value instanceof serde.NumericValue) {
                    return value.string;
                }
                return String(value);
            }
            else if (ns.isMapSchema() || ns.isListSchema()) {
                throw new Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.");
            }
            else {
                throw new Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${ns.getName(true)}`);
            }
        }
        if (ns.isBooleanSchema() || ns.isNumericSchema() || ns.isBigIntegerSchema() || ns.isBigDecimalSchema()) {
            nodeContents = String(value);
        }
        if (ns.isStringSchema()) {
            if (value === undefined && ns.isIdempotencyToken()) {
                nodeContents = serde.generateIdempotencyToken();
            }
            else {
                nodeContents = String(value);
            }
        }
        if (nodeContents === null) {
            throw new Error(`Unhandled schema-value pair ${ns.getName(true)}=${value}`);
        }
        return nodeContents;
    }
    writeSimpleInto(_schema, value, into, parentXmlns) {
        const nodeContents = this.writeSimple(_schema, value);
        const ns = schema.NormalizedSchema.of(_schema);
        const content = new xmlBuilder.XmlText(nodeContents);
        const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(ns, parentXmlns);
        if (xmlns) {
            into.addAttribute(xmlnsAttr, xmlns);
        }
        into.addChildNode(content);
    }
    getXmlnsAttribute(ns, parentXmlns) {
        const traits = ns.getMergedTraits();
        const [prefix, xmlns] = traits.xmlNamespace ?? [];
        if (xmlns && xmlns !== parentXmlns) {
            return [prefix ? `xmlns:${prefix}` : "xmlns", xmlns];
        }
        return [void 0, void 0];
    }
}

class XmlCodec extends SerdeContextConfig {
    settings;
    constructor(settings) {
        super();
        this.settings = settings;
    }
    createSerializer() {
        const serializer = new XmlShapeSerializer(this.settings);
        serializer.setSerdeContext(this.serdeContext);
        return serializer;
    }
    createDeserializer() {
        const deserializer = new XmlShapeDeserializer(this.settings);
        deserializer.setSerdeContext(this.serdeContext);
        return deserializer;
    }
}

class AwsRestXmlProtocol extends protocols.HttpBindingProtocol {
    codec;
    serializer;
    deserializer;
    mixin = new ProtocolLib();
    constructor(options) {
        super(options);
        const settings = {
            timestampFormat: {
                useTrait: true,
                default: 5,
            },
            httpBindings: true,
            xmlNamespace: options.xmlNamespace,
            serviceNamespace: options.defaultNamespace,
        };
        this.codec = new XmlCodec(settings);
        this.serializer = new protocols.HttpInterceptingShapeSerializer(this.codec.createSerializer(), settings);
        this.deserializer = new protocols.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), settings);
    }
    getPayloadCodec() {
        return this.codec;
    }
    getShapeId() {
        return "aws.protocols#restXml";
    }
    async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        const inputSchema = schema.NormalizedSchema.of(operationSchema.input);
        if (!request.headers["content-type"]) {
            const contentType = this.mixin.resolveRestContentType(this.getDefaultContentType(), inputSchema);
            if (contentType) {
                request.headers["content-type"] = contentType;
            }
        }
        if (typeof request.body === "string" &&
            request.headers["content-type"] === this.getDefaultContentType() &&
            !request.body.startsWith("<?xml ") &&
            !this.hasUnstructuredPayloadBinding(inputSchema)) {
            request.body = '<?xml version="1.0" encoding="UTF-8"?>' + request.body;
        }
        return request;
    }
    async deserializeResponse(operationSchema, context, response) {
        return super.deserializeResponse(operationSchema, context, response);
    }
    async handleError(operationSchema, context, response, dataObject, metadata) {
        const errorIdentifier = loadRestXmlErrorCode(response, dataObject) ?? "Unknown";
        this.mixin.compose(this.compositeErrorRegistry, errorIdentifier, this.options.defaultNamespace);
        if (dataObject.Error && typeof dataObject.Error === "object") {
            for (const key of Object.keys(dataObject.Error)) {
                dataObject[key] = dataObject.Error[key];
                if (key.toLowerCase() === "message") {
                    dataObject.message = dataObject.Error[key];
                }
            }
        }
        if (dataObject.RequestId && !metadata.requestId) {
            metadata.requestId = dataObject.RequestId;
        }
        const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, dataObject, metadata);
        const ns = schema.NormalizedSchema.of(errorSchema);
        const message = dataObject.Error?.message ??
            dataObject.Error?.Message ??
            dataObject.message ??
            dataObject.Message ??
            "UnknownError";
        const ErrorCtor = this.compositeErrorRegistry.getErrorCtor(errorSchema) ?? Error;
        const exception = new ErrorCtor(message);
        await this.deserializeHttpMessage(errorSchema, context, response, dataObject);
        const output = {};
        const errorDeserializer = this.codec.createDeserializer();
        for (const [name, member] of ns.structIterator()) {
            const target = member.getMergedTraits().xmlName ?? name;
            const value = dataObject.Error?.[target] ?? dataObject[target];
            output[name] = errorDeserializer.readSchema(member, value);
        }
        throw this.mixin.decorateServiceException(Object.assign(exception, errorMetadata, {
            $fault: ns.getMergedTraits().error,
            message,
        }, output), dataObject);
    }
    getDefaultContentType() {
        return "application/xml";
    }
    hasUnstructuredPayloadBinding(ns) {
        for (const [, member] of ns.structIterator()) {
            if (member.getMergedTraits().httpPayload) {
                return !(member.isStructSchema() || member.isMapSchema() || member.isListSchema());
            }
        }
        return false;
    }
}

exports.AwsEc2QueryProtocol = AwsEc2QueryProtocol;
exports.AwsJson1_0Protocol = AwsJson1_0Protocol;
exports.AwsJson1_1Protocol = AwsJson1_1Protocol;
exports.AwsJsonRpcProtocol = AwsJsonRpcProtocol;
exports.AwsQueryProtocol = AwsQueryProtocol;
exports.AwsRestJsonProtocol = AwsRestJsonProtocol;
exports.AwsRestXmlProtocol = AwsRestXmlProtocol;
exports.AwsSmithyRpcV2CborProtocol = AwsSmithyRpcV2CborProtocol;
exports.JsonCodec = JsonCodec;
exports.JsonShapeDeserializer = JsonShapeDeserializer;
exports.JsonShapeSerializer = JsonShapeSerializer;
exports.QueryShapeSerializer = QueryShapeSerializer;
exports.XmlCodec = XmlCodec;
exports.XmlShapeDeserializer = XmlShapeDeserializer;
exports.XmlShapeSerializer = XmlShapeSerializer;
exports._toBool = _toBool;
exports._toNum = _toNum;
exports._toStr = _toStr;
exports.awsExpectUnion = awsExpectUnion;
exports.loadRestJsonErrorCode = loadRestJsonErrorCode;
exports.loadRestXmlErrorCode = loadRestXmlErrorCode;
exports.parseJsonBody = parseJsonBody;
exports.parseJsonErrorBody = parseJsonErrorBody;
exports.parseXmlBody = parseXmlBody;
exports.parseXmlErrorBody = parseXmlErrorBody;


/***/ }),

/***/ 3816:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var xmlParser = __nccwpck_require__(6905);

const ATTR_ESCAPE_RE = /[&<>"]/g;
const ATTR_ESCAPE_MAP = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
};
function escapeAttribute(value) {
    return value.replace(ATTR_ESCAPE_RE, (ch) => ATTR_ESCAPE_MAP[ch]);
}

const ELEMENT_ESCAPE_RE = /[&"'<>\r\n\u0085\u2028]/g;
const ELEMENT_ESCAPE_MAP = {
    "&": "&amp;",
    '"': "&quot;",
    "'": "&apos;",
    "<": "&lt;",
    ">": "&gt;",
    "\r": "&#x0D;",
    "\n": "&#x0A;",
    "\u0085": "&#x85;",
    "\u2028": "&#x2028;",
};
function escapeElement(value) {
    return value.replace(ELEMENT_ESCAPE_RE, (ch) => ELEMENT_ESCAPE_MAP[ch]);
}

class XmlText {
    value;
    constructor(value) {
        this.value = value;
    }
    toString() {
        return escapeElement("" + this.value);
    }
}

class XmlNode {
    name;
    children;
    attributes = {};
    static of(name, childText, withName) {
        const node = new XmlNode(name);
        if (childText !== undefined) {
            node.addChildNode(new XmlText(childText));
        }
        if (withName !== undefined) {
            node.withName(withName);
        }
        return node;
    }
    constructor(name, children = []) {
        this.name = name;
        this.children = children;
    }
    withName(name) {
        this.name = name;
        return this;
    }
    addAttribute(name, value) {
        this.attributes[name] = value;
        return this;
    }
    addChildNode(child) {
        this.children.push(child);
        return this;
    }
    removeAttribute(name) {
        delete this.attributes[name];
        return this;
    }
    n(name) {
        this.name = name;
        return this;
    }
    c(child) {
        this.children.push(child);
        return this;
    }
    a(name, value) {
        if (value != null) {
            this.attributes[name] = value;
        }
        return this;
    }
    cc(input, field, withName = field) {
        if (input[field] != null) {
            const node = XmlNode.of(field, input[field]).withName(withName);
            this.c(node);
        }
    }
    l(input, listName, memberName, valueProvider) {
        if (input[listName] != null) {
            const nodes = valueProvider();
            nodes.map((node) => {
                node.withName(memberName);
                this.c(node);
            });
        }
    }
    lc(input, listName, memberName, valueProvider) {
        if (input[listName] != null) {
            const nodes = valueProvider();
            const containerNode = new XmlNode(memberName);
            nodes.map((node) => {
                containerNode.c(node);
            });
            this.c(containerNode);
        }
    }
    toString() {
        const hasChildren = Boolean(this.children.length);
        let xmlText = `<${this.name}`;
        const attributes = this.attributes;
        for (const attributeName of Object.keys(attributes)) {
            const attribute = attributes[attributeName];
            if (attribute != null) {
                xmlText += ` ${attributeName}="${escapeAttribute("" + attribute)}"`;
            }
        }
        return (xmlText += !hasChildren ? "/>" : `>${this.children.map((c) => c.toString()).join("")}</${this.name}>`);
    }
}

exports.parseXML = xmlParser.parseXML;
exports.XmlNode = XmlNode;
exports.XmlText = XmlText;


/***/ }),

/***/ 1841:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntityDecoderImpl = exports.CURRENCY = exports.COMMON_HTML = exports.XML = void 0;
exports.XML = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    quot: '"',
};
exports.COMMON_HTML = {
    nbsp: "\u00a0",
    copy: "\u00a9",
    reg: "\u00ae",
    trade: "\u2122",
    mdash: "\u2014",
    ndash: "\u2013",
    hellip: "\u2026",
    laquo: "\u00ab",
    raquo: "\u00bb",
    lsquo: "\u2018",
    rsquo: "\u2019",
    ldquo: "\u201c",
    rdquo: "\u201d",
    bull: "\u2022",
    para: "\u00b6",
    sect: "\u00a7",
    deg: "\u00b0",
    frac12: "\u00bd",
    frac14: "\u00bc",
    frac34: "\u00be",
};
exports.CURRENCY = {
    cent: "\u00a2",
    pound: "\u00a3",
    curren: "\u00a4",
    yen: "\u00a5",
    euro: "\u20ac",
    dollar: "$",
    fnof: "\u0192",
    inr: "\u20b9",
    af: "\u060b",
    birr: "\u1265\u122d",
    peso: "\u20b1",
    rub: "\u20bd",
    won: "\u20a9",
    yuan: "\u00a5",
    cedil: "\u00b8",
};
const SPECIAL_CHARS = new Set("!?\\/[]$%{}^&*()<>|+");
function validateEntityName(name) {
    if (name[0] === "#") {
        throw new Error(`[EntityReplacer] Invalid character '#' in entity name: "${name}"`);
    }
    for (const ch of name) {
        if (SPECIAL_CHARS.has(ch)) {
            throw new Error(`[EntityReplacer] Invalid character '${ch}' in entity name: "${name}"`);
        }
    }
    return name;
}
function mergeEntityMaps(...maps) {
    const out = Object.create(null);
    for (const map of maps) {
        if (!map) {
            continue;
        }
        for (const key of Object.keys(map)) {
            const raw = map[key];
            if (typeof raw === "string") {
                out[key] = raw;
            }
            else if (raw && typeof raw === "object" && raw.val !== undefined) {
                const val = raw.val;
                if (typeof val === "string") {
                    out[key] = val;
                }
            }
        }
    }
    return out;
}
const LIMIT_TIER_EXTERNAL = "external";
const LIMIT_TIER_BASE = "base";
const LIMIT_TIER_ALL = "all";
function parseLimitTiers(raw) {
    if (!raw || raw === LIMIT_TIER_EXTERNAL) {
        return new Set([LIMIT_TIER_EXTERNAL]);
    }
    if (raw === LIMIT_TIER_ALL) {
        return new Set([LIMIT_TIER_ALL]);
    }
    if (raw === LIMIT_TIER_BASE) {
        return new Set([LIMIT_TIER_BASE]);
    }
    if (Array.isArray(raw)) {
        return new Set(raw);
    }
    return new Set([LIMIT_TIER_EXTERNAL]);
}
const NCR_LEVEL = Object.freeze({ allow: 0, leave: 1, remove: 2, throw: 3 });
const XML10_ALLOWED_C0 = new Set([0x09, 0x0a, 0x0d]);
function parseNCRConfig(ncr) {
    if (!ncr) {
        return { xmlVersion: 1.0, onLevel: NCR_LEVEL.allow, nullLevel: NCR_LEVEL.remove };
    }
    const xmlVersion = ncr.xmlVersion === 1.1 ? 1.1 : 1.0;
    const onLevel = NCR_LEVEL[ncr.onNCR ?? "allow"] ?? NCR_LEVEL.allow;
    const nullLevel = NCR_LEVEL[ncr.nullNCR ?? "remove"] ?? NCR_LEVEL.remove;
    const clampedNull = Math.max(nullLevel, NCR_LEVEL.remove);
    return { xmlVersion, onLevel, nullLevel: clampedNull };
}
const EntityDecoderImpl = class EntityDecoderImpl {
    _limit;
    _maxTotalExpansions;
    _maxExpandedLength;
    _postCheck;
    _limitTiers;
    _numericAllowed;
    _baseMap;
    _externalMap;
    _inputMap;
    _totalExpansions;
    _expandedLength;
    _removeSet;
    _leaveSet;
    _ncrXmlVersion;
    _ncrOnLevel;
    _ncrNullLevel;
    constructor(options = {}) {
        this._limit = options.limit || {};
        this._maxTotalExpansions = this._limit.maxTotalExpansions || 0;
        this._maxExpandedLength = this._limit.maxExpandedLength || 0;
        this._postCheck = typeof options.postCheck === "function" ? options.postCheck : (r) => r;
        this._limitTiers = parseLimitTiers(this._limit.applyLimitsTo ?? LIMIT_TIER_EXTERNAL);
        this._numericAllowed = options.numericAllowed ?? true;
        this._baseMap = mergeEntityMaps(exports.XML, options.namedEntities || null);
        this._externalMap = Object.create(null);
        this._inputMap = Object.create(null);
        this._totalExpansions = 0;
        this._expandedLength = 0;
        this._removeSet = new Set(options.remove && Array.isArray(options.remove) ? options.remove : []);
        this._leaveSet = new Set(options.leave && Array.isArray(options.leave) ? options.leave : []);
        const ncrCfg = parseNCRConfig(options.ncr);
        this._ncrXmlVersion = ncrCfg.xmlVersion;
        this._ncrOnLevel = ncrCfg.onLevel;
        this._ncrNullLevel = ncrCfg.nullLevel;
    }
    setExternalEntities(map) {
        if (map) {
            for (const key of Object.keys(map)) {
                validateEntityName(key);
            }
        }
        this._externalMap = mergeEntityMaps(map);
    }
    addExternalEntity(key, value) {
        validateEntityName(key);
        if (typeof value === "string" && value.indexOf("&") === -1) {
            this._externalMap[key] = value;
        }
    }
    addInputEntities(map) {
        this._totalExpansions = 0;
        this._expandedLength = 0;
        this._inputMap = mergeEntityMaps(map);
    }
    reset() {
        this._inputMap = Object.create(null);
        this._totalExpansions = 0;
        this._expandedLength = 0;
        return this;
    }
    setXmlVersion(version) {
        this._ncrXmlVersion = version === "1.1" || version === 1.1 ? 1.1 : 1.0;
    }
    decode(str) {
        if (typeof str !== "string" || str.length === 0) {
            return str;
        }
        const original = str;
        const chunks = [];
        const len = str.length;
        let last = 0;
        let i = 0;
        const limitExpansions = this._maxTotalExpansions > 0;
        const limitLength = this._maxExpandedLength > 0;
        const checkLimits = limitExpansions || limitLength;
        while (i < len) {
            if (str.charCodeAt(i) !== 38) {
                i++;
                continue;
            }
            let j = i + 1;
            while (j < len && str.charCodeAt(j) !== 59 && j - i <= 32) {
                j++;
            }
            if (j >= len || str.charCodeAt(j) !== 59) {
                i++;
                continue;
            }
            const token = str.slice(i + 1, j);
            if (token.length === 0) {
                i++;
                continue;
            }
            let replacement;
            let tier;
            if (this._removeSet.has(token)) {
                replacement = "";
                if (tier === undefined) {
                    tier = LIMIT_TIER_EXTERNAL;
                }
            }
            else if (this._leaveSet.has(token)) {
                i++;
                continue;
            }
            else if (token.charCodeAt(0) === 35) {
                const ncrResult = this._resolveNCR(token);
                if (ncrResult === undefined) {
                    i++;
                    continue;
                }
                replacement = ncrResult;
                tier = LIMIT_TIER_BASE;
            }
            else {
                const resolved = this._resolveName(token);
                replacement = resolved?.value;
                tier = resolved?.tier;
            }
            if (replacement === undefined) {
                i++;
                continue;
            }
            if (i > last) {
                chunks.push(str.slice(last, i));
            }
            chunks.push(replacement);
            last = j + 1;
            i = last;
            if (checkLimits && this._tierCounts(tier)) {
                if (limitExpansions) {
                    this._totalExpansions++;
                    if (this._totalExpansions > this._maxTotalExpansions) {
                        throw new Error(`[EntityReplacer] Entity expansion count limit exceeded: ` +
                            `${this._totalExpansions} > ${this._maxTotalExpansions}`);
                    }
                }
                if (limitLength) {
                    const delta = replacement.length - (token.length + 2);
                    if (delta > 0) {
                        this._expandedLength += delta;
                        if (this._expandedLength > this._maxExpandedLength) {
                            throw new Error(`[EntityReplacer] Expanded content length limit exceeded: ` +
                                `${this._expandedLength} > ${this._maxExpandedLength}`);
                        }
                    }
                }
            }
        }
        if (last < len) {
            chunks.push(str.slice(last));
        }
        const result = chunks.length === 0 ? str : chunks.join("");
        return this._postCheck(result, original);
    }
    _tierCounts(tier) {
        if (this._limitTiers.has(LIMIT_TIER_ALL)) {
            return true;
        }
        return this._limitTiers.has(tier);
    }
    _resolveName(name) {
        if (name in this._inputMap) {
            return { value: this._inputMap[name], tier: LIMIT_TIER_EXTERNAL };
        }
        if (name in this._externalMap) {
            return { value: this._externalMap[name], tier: LIMIT_TIER_EXTERNAL };
        }
        if (name in this._baseMap) {
            return { value: this._baseMap[name], tier: LIMIT_TIER_BASE };
        }
        return undefined;
    }
    _classifyNCR(cp) {
        if (cp === 0) {
            return this._ncrNullLevel;
        }
        if (cp >= 0xd800 && cp <= 0xdfff) {
            return NCR_LEVEL.remove;
        }
        if (this._ncrXmlVersion === 1.0) {
            if (cp >= 0x01 && cp <= 0x1f && !XML10_ALLOWED_C0.has(cp)) {
                return NCR_LEVEL.remove;
            }
        }
        return -1;
    }
    _applyNCRAction(action, token, cp) {
        switch (action) {
            case NCR_LEVEL.allow:
                return String.fromCodePoint(cp);
            case NCR_LEVEL.remove:
                return "";
            case NCR_LEVEL.leave:
                return undefined;
            case NCR_LEVEL.throw:
                throw new Error(`[EntityDecoder] Prohibited numeric character reference ` +
                    `&${token}; (U+${cp.toString(16).toUpperCase().padStart(4, "0")})`);
            default:
                return String.fromCodePoint(cp);
        }
    }
    _resolveNCR(token) {
        const second = token.charCodeAt(1);
        let cp;
        if (second === 120 || second === 88) {
            cp = parseInt(token.slice(2), 16);
        }
        else {
            cp = parseInt(token.slice(1), 10);
        }
        if (Number.isNaN(cp) || cp < 0 || cp > 0x10ffff) {
            return undefined;
        }
        const minimum = this._classifyNCR(cp);
        if (!this._numericAllowed && minimum < NCR_LEVEL.remove) {
            return undefined;
        }
        const effective = minimum === -1 ? this._ncrOnLevel : Math.max(this._ncrOnLevel, minimum);
        return this._applyNCRAction(effective, token, cp);
    }
};
exports.EntityDecoderImpl = EntityDecoderImpl;


/***/ }),

/***/ 6905:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseXML = parseXML;
const fast_xml_parser_1 = __nccwpck_require__(4577);
const nodable_entities_1 = __nccwpck_require__(1841);
const entityDecoder = new nodable_entities_1.EntityDecoderImpl({
    namedEntities: { ...nodable_entities_1.XML, ...nodable_entities_1.COMMON_HTML, ...nodable_entities_1.CURRENCY },
    numericAllowed: true,
    limit: {
        maxTotalExpansions: Infinity,
    },
    ncr: {
        xmlVersion: 1.1,
    },
});
const parser = new fast_xml_parser_1.XMLParser({
    attributeNamePrefix: "",
    processEntities: {
        enabled: true,
        maxTotalExpansions: Infinity,
    },
    htmlEntities: true,
    entityDecoder: {
        setExternalEntities: (entities) => {
            entityDecoder.setExternalEntities(entities);
        },
        addInputEntities: (entities) => {
            entityDecoder.addInputEntities(entities);
        },
        reset: () => {
            entityDecoder.reset();
        },
        decode: (text) => {
            return entityDecoder.decode(text);
        },
        setXmlVersion: (version) => void {},
    },
    ignoreAttributes: false,
    ignoreDeclaration: true,
    parseTagValue: false,
    trimValues: false,
    tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
    maxNestedTags: Infinity,
});
function parseXML(xmlString) {
    return parser.parse(xmlString, true);
}


/***/ }),

/***/ 5972:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var client = __nccwpck_require__(2825);
var propertyProvider = __nccwpck_require__(9721);

const ENV_KEY = "AWS_ACCESS_KEY_ID";
const ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
const ENV_SESSION = "AWS_SESSION_TOKEN";
const ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
const ENV_CREDENTIAL_SCOPE = "AWS_CREDENTIAL_SCOPE";
const ENV_ACCOUNT_ID = "AWS_ACCOUNT_ID";
const fromEnv = (init) => async () => {
    init?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
    const accessKeyId = process.env[ENV_KEY];
    const secretAccessKey = process.env[ENV_SECRET];
    const sessionToken = process.env[ENV_SESSION];
    const expiry = process.env[ENV_EXPIRATION];
    const credentialScope = process.env[ENV_CREDENTIAL_SCOPE];
    const accountId = process.env[ENV_ACCOUNT_ID];
    if (accessKeyId && secretAccessKey) {
        const credentials = {
            accessKeyId,
            secretAccessKey,
            ...(sessionToken && { sessionToken }),
            ...(expiry && { expiration: new Date(expiry) }),
            ...(credentialScope && { credentialScope }),
            ...(accountId && { accountId }),
        };
        client.setCredentialFeature(credentials, "CREDENTIALS_ENV_VARS", "g");
        return credentials;
    }
    throw new propertyProvider.CredentialsProviderError("Unable to find environment variable credentials.", { logger: init?.logger });
};

exports.ENV_ACCOUNT_ID = ENV_ACCOUNT_ID;
exports.ENV_CREDENTIAL_SCOPE = ENV_CREDENTIAL_SCOPE;
exports.ENV_EXPIRATION = ENV_EXPIRATION;
exports.ENV_KEY = ENV_KEY;
exports.ENV_SECRET = ENV_SECRET;
exports.ENV_SESSION = ENV_SESSION;
exports.fromEnv = fromEnv;


/***/ }),

/***/ 5531:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var credentialProviderEnv = __nccwpck_require__(5972);
var propertyProvider = __nccwpck_require__(9721);
var sharedIniFileLoader = __nccwpck_require__(3507);

const ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
const remoteProvider = async (init) => {
    const { ENV_CMDS_FULL_URI, ENV_CMDS_RELATIVE_URI, fromContainerMetadata, fromInstanceMetadata } = await __nccwpck_require__.e(/* import() */ 477).then(__nccwpck_require__.t.bind(__nccwpck_require__, 7477, 19));
    if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
        init.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
        const { fromHttp } = await __nccwpck_require__.e(/* import() */ 290).then(__nccwpck_require__.bind(__nccwpck_require__, 7290));
        return propertyProvider.chain(fromHttp(init), fromContainerMetadata(init));
    }
    if (process.env[ENV_IMDS_DISABLED] && process.env[ENV_IMDS_DISABLED] !== "false") {
        return async () => {
            throw new propertyProvider.CredentialsProviderError("EC2 Instance Metadata Service access disabled", { logger: init.logger });
        };
    }
    init.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata");
    return fromInstanceMetadata(init);
};

function memoizeChain(providers, treatAsExpired) {
    const chain = internalCreateChain(providers);
    let activeLock;
    let passiveLock;
    let credentials;
    const provider = async (options) => {
        if (options?.forceRefresh) {
            return await chain(options);
        }
        if (credentials?.expiration) {
            if (credentials?.expiration?.getTime() < Date.now()) {
                credentials = undefined;
            }
        }
        if (activeLock) {
            await activeLock;
        }
        else if (!credentials || treatAsExpired?.(credentials)) {
            if (credentials) {
                if (!passiveLock) {
                    passiveLock = chain(options)
                        .then((c) => {
                        credentials = c;
                    })
                        .finally(() => {
                        passiveLock = undefined;
                    });
                }
            }
            else {
                activeLock = chain(options)
                    .then((c) => {
                    credentials = c;
                })
                    .finally(() => {
                    activeLock = undefined;
                });
                return provider(options);
            }
        }
        return credentials;
    };
    return provider;
}
const internalCreateChain = (providers) => async (awsIdentityProperties) => {
    let lastProviderError;
    for (const provider of providers) {
        try {
            return await provider(awsIdentityProperties);
        }
        catch (err) {
            lastProviderError = err;
            if (err?.tryNextLink) {
                continue;
            }
            throw err;
        }
    }
    throw lastProviderError;
};

let multipleCredentialSourceWarningEmitted = false;
const defaultProvider = (init = {}) => memoizeChain([
    async () => {
        const profile = init.profile ?? process.env[sharedIniFileLoader.ENV_PROFILE];
        if (profile) {
            const envStaticCredentialsAreSet = process.env[credentialProviderEnv.ENV_KEY] && process.env[credentialProviderEnv.ENV_SECRET];
            if (envStaticCredentialsAreSet) {
                if (!multipleCredentialSourceWarningEmitted) {
                    const warnFn = init.logger?.warn && init.logger?.constructor?.name !== "NoOpLogger"
                        ? init.logger.warn.bind(init.logger)
                        : console.warn;
                    warnFn(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`);
                    multipleCredentialSourceWarningEmitted = true;
                }
            }
            throw new propertyProvider.CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
                logger: init.logger,
                tryNextLink: true,
            });
        }
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv");
        return credentialProviderEnv.fromEnv(init)();
    },
    async (awsIdentityProperties) => {
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
        const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
        if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
            throw new propertyProvider.CredentialsProviderError("Skipping SSO provider in default chain (inputs do not include SSO fields).", { logger: init.logger });
        }
        const { fromSSO } = await __nccwpck_require__.e(/* import() */ 414).then(__nccwpck_require__.t.bind(__nccwpck_require__, 6414, 19));
        return fromSSO(init)(awsIdentityProperties);
    },
    async (awsIdentityProperties) => {
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
        const { fromIni } = await __nccwpck_require__.e(/* import() */ 203).then(__nccwpck_require__.t.bind(__nccwpck_require__, 4203, 19));
        return fromIni(init)(awsIdentityProperties);
    },
    async (awsIdentityProperties) => {
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
        const { fromProcess } = await __nccwpck_require__.e(/* import() */ 969).then(__nccwpck_require__.t.bind(__nccwpck_require__, 9969, 19));
        return fromProcess(init)(awsIdentityProperties);
    },
    async (awsIdentityProperties) => {
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
        const { fromTokenFile } = await Promise.all(/* import() */[__nccwpck_require__.e(273), __nccwpck_require__.e(646)]).then(__nccwpck_require__.t.bind(__nccwpck_require__, 5646, 23));
        return fromTokenFile(init)(awsIdentityProperties);
    },
    async () => {
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider");
        return (await remoteProvider(init))();
    },
    async () => {
        throw new propertyProvider.CredentialsProviderError("Could not load credentials from any providers", {
            tryNextLink: false,
            logger: init.logger,
        });
    },
], credentialsTreatedAsExpired);
const credentialsWillNeedRefresh = (credentials) => credentials?.expiration !== undefined;
const credentialsTreatedAsExpired = (credentials) => credentials?.expiration !== undefined && credentials.expiration.getTime() - Date.now() < 300000;

exports.credentialsTreatedAsExpired = credentialsTreatedAsExpired;
exports.credentialsWillNeedRefresh = credentialsWillNeedRefresh;
exports.defaultProvider = defaultProvider;


/***/ }),

/***/ 2545:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var protocolHttp = __nccwpck_require__(4418);

function resolveHostHeaderConfig(input) {
    return input;
}
const hostHeaderMiddleware = (options) => (next) => async (args) => {
    if (!protocolHttp.HttpRequest.isInstance(args.request))
        return next(args);
    const { request } = args;
    const { handlerProtocol = "" } = options.requestHandler.metadata || {};
    if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
        delete request.headers["host"];
        request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
    }
    else if (!request.headers["host"]) {
        let host = request.hostname;
        if (request.port != null)
            host += `:${request.port}`;
        request.headers["host"] = host;
    }
    return next(args);
};
const hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: true,
};
const getHostHeaderPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
    },
});

exports.getHostHeaderPlugin = getHostHeaderPlugin;
exports.hostHeaderMiddleware = hostHeaderMiddleware;
exports.hostHeaderMiddlewareOptions = hostHeaderMiddlewareOptions;
exports.resolveHostHeaderConfig = resolveHostHeaderConfig;


/***/ }),

/***/ 14:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


const loggerMiddleware = () => (next, context) => async (args) => {
    try {
        const response = await next(args);
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
        const { $metadata, ...outputWithoutMetadata } = response.output;
        logger?.info?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            output: outputFilterSensitiveLog(outputWithoutMetadata),
            metadata: $metadata,
        });
        return response;
    }
    catch (error) {
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        logger?.error?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            error,
            metadata: error.$metadata,
        });
        throw error;
    }
};
const loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: true,
};
const getLoggerPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
    },
});

exports.getLoggerPlugin = getLoggerPlugin;
exports.loggerMiddleware = loggerMiddleware;
exports.loggerMiddlewareOptions = loggerMiddlewareOptions;


/***/ }),

/***/ 5525:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var recursionDetectionMiddleware = __nccwpck_require__(7767);

const recursionDetectionMiddlewareOptions = {
    step: "build",
    tags: ["RECURSION_DETECTION"],
    name: "recursionDetectionMiddleware",
    override: true,
    priority: "low",
};

const getRecursionDetectionPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(recursionDetectionMiddleware.recursionDetectionMiddleware(), recursionDetectionMiddlewareOptions);
    },
});

exports.getRecursionDetectionPlugin = getRecursionDetectionPlugin;
Object.prototype.hasOwnProperty.call(recursionDetectionMiddleware, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: recursionDetectionMiddleware['__proto__']
    });

Object.keys(recursionDetectionMiddleware).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = recursionDetectionMiddleware[k];
});


/***/ }),

/***/ 7767:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.recursionDetectionMiddleware = void 0;
const lambda_invoke_store_1 = __nccwpck_require__(2589);
const protocol_http_1 = __nccwpck_require__(4418);
const TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
const ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
const ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
const recursionDetectionMiddleware = () => (next) => async (args) => {
    const { request } = args;
    if (!protocol_http_1.HttpRequest.isInstance(request)) {
        return next(args);
    }
    const traceIdHeader = Object.keys(request.headers ?? {}).find((h) => h.toLowerCase() === TRACE_ID_HEADER_NAME.toLowerCase()) ??
        TRACE_ID_HEADER_NAME;
    if (request.headers.hasOwnProperty(traceIdHeader)) {
        return next(args);
    }
    const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
    const traceIdFromEnv = process.env[ENV_TRACE_ID];
    const invokeStore = await lambda_invoke_store_1.InvokeStore.getInstanceAsync();
    const traceIdFromInvokeStore = invokeStore?.getXRayTraceId();
    const traceId = traceIdFromInvokeStore ?? traceIdFromEnv;
    const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
    if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
        request.headers[TRACE_ID_HEADER_NAME] = traceId;
    }
    return next({
        ...args,
        request,
    });
};
exports.recursionDetectionMiddleware = recursionDetectionMiddleware;


/***/ }),

/***/ 4688:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var core = __nccwpck_require__(5829);
var utilEndpoints = __nccwpck_require__(3350);
var protocolHttp = __nccwpck_require__(4418);
var client = __nccwpck_require__(2825);
var utilRetry = __nccwpck_require__(4902);

const DEFAULT_UA_APP_ID = undefined;
function isValidUserAgentAppId(appId) {
    if (appId === undefined) {
        return true;
    }
    return typeof appId === "string" && appId.length <= 50;
}
function resolveUserAgentConfig(input) {
    const normalizedAppIdProvider = core.normalizeProvider(input.userAgentAppId ?? DEFAULT_UA_APP_ID);
    const { customUserAgent } = input;
    return Object.assign(input, {
        customUserAgent: typeof customUserAgent === "string" ? [[customUserAgent]] : customUserAgent,
        userAgentAppId: async () => {
            const appId = await normalizedAppIdProvider();
            if (!isValidUserAgentAppId(appId)) {
                const logger = input.logger?.constructor?.name === "NoOpLogger" || !input.logger ? console : input.logger;
                if (typeof appId !== "string") {
                    logger?.warn("userAgentAppId must be a string or undefined.");
                }
                else if (appId.length > 50) {
                    logger?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
                }
            }
            return appId;
        },
    });
}

const ACCOUNT_ID_ENDPOINT_REGEX = /\d{12}\.ddb/;
async function checkFeatures(context, config, args) {
    const request = args.request;
    if (request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") {
        client.setFeature(context, "PROTOCOL_RPC_V2_CBOR", "M");
    }
    if (typeof config.retryStrategy === "function") {
        const retryStrategy = await config.retryStrategy();
        if (typeof retryStrategy.mode === "string") {
            switch (retryStrategy.mode) {
                case utilRetry.RETRY_MODES.ADAPTIVE:
                    client.setFeature(context, "RETRY_MODE_ADAPTIVE", "F");
                    break;
                case utilRetry.RETRY_MODES.STANDARD:
                    client.setFeature(context, "RETRY_MODE_STANDARD", "E");
                    break;
            }
        }
    }
    if (typeof config.accountIdEndpointMode === "function") {
        const endpointV2 = context.endpointV2;
        if (String(endpointV2?.url?.hostname).match(ACCOUNT_ID_ENDPOINT_REGEX)) {
            client.setFeature(context, "ACCOUNT_ID_ENDPOINT", "O");
        }
        switch (await config.accountIdEndpointMode?.()) {
            case "disabled":
                client.setFeature(context, "ACCOUNT_ID_MODE_DISABLED", "Q");
                break;
            case "preferred":
                client.setFeature(context, "ACCOUNT_ID_MODE_PREFERRED", "P");
                break;
            case "required":
                client.setFeature(context, "ACCOUNT_ID_MODE_REQUIRED", "R");
                break;
        }
    }
    const identity = context.__smithy_context?.selectedHttpAuthScheme?.identity;
    if (identity?.$source) {
        const credentials = identity;
        if (credentials.accountId) {
            client.setFeature(context, "RESOLVED_ACCOUNT_ID", "T");
        }
        for (const [key, value] of Object.entries(credentials.$source ?? {})) {
            client.setFeature(context, key, value);
        }
    }
}

const USER_AGENT = "user-agent";
const X_AMZ_USER_AGENT = "x-amz-user-agent";
const SPACE = " ";
const UA_NAME_SEPARATOR = "/";
const UA_NAME_ESCAPE_REGEX = /[^!$%&'*+\-.^_`|~\w]/g;
const UA_VALUE_ESCAPE_REGEX = /[^!$%&'*+\-.^_`|~\w#]/g;
const UA_ESCAPE_CHAR = "-";

const BYTE_LIMIT = 1024;
function encodeFeatures(features) {
    let buffer = "";
    for (const key in features) {
        const val = features[key];
        if (buffer.length + val.length + 1 <= BYTE_LIMIT) {
            if (buffer.length) {
                buffer += "," + val;
            }
            else {
                buffer += val;
            }
            continue;
        }
        break;
    }
    return buffer;
}

const userAgentMiddleware = (options) => (next, context) => async (args) => {
    const { request } = args;
    if (!protocolHttp.HttpRequest.isInstance(request)) {
        return next(args);
    }
    const { headers } = request;
    const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
    const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
    await checkFeatures(context, options, args);
    const awsContext = context;
    defaultUserAgent.push(`m/${encodeFeatures(Object.assign({}, context.__smithy_context?.features, awsContext.__aws_sdk_context?.features))}`);
    const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
    const appId = await options.userAgentAppId();
    if (appId) {
        defaultUserAgent.push(escapeUserAgent([`app`, `${appId}`]));
    }
    const prefix = utilEndpoints.getUserAgentPrefix();
    const sdkUserAgentValue = (prefix ? [prefix] : [])
        .concat([...defaultUserAgent, ...userAgent, ...customUserAgent])
        .join(SPACE);
    const normalUAValue = [
        ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent,
    ].join(SPACE);
    if (options.runtime !== "browser") {
        if (normalUAValue) {
            headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT]
                ? `${headers[USER_AGENT]} ${normalUAValue}`
                : normalUAValue;
        }
        headers[USER_AGENT] = sdkUserAgentValue;
    }
    else {
        headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
    }
    return next({
        ...args,
        request,
    });
};
const escapeUserAgent = (userAgentPair) => {
    const name = userAgentPair[0]
        .split(UA_NAME_SEPARATOR)
        .map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR))
        .join(UA_NAME_SEPARATOR);
    const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
    const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
    const prefix = name.substring(0, prefixSeparatorIndex);
    let uaName = name.substring(prefixSeparatorIndex + 1);
    if (prefix === "api") {
        uaName = uaName.toLowerCase();
    }
    return [prefix, uaName, version]
        .filter((item) => item && item.length > 0)
        .reduce((acc, item, index) => {
        switch (index) {
            case 0:
                return item;
            case 1:
                return `${acc}/${item}`;
            default:
                return `${acc}#${item}`;
        }
    }, "");
};
const getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: true,
};
const getUserAgentPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
    },
});

exports.DEFAULT_UA_APP_ID = DEFAULT_UA_APP_ID;
exports.getUserAgentMiddlewareOptions = getUserAgentMiddlewareOptions;
exports.getUserAgentPlugin = getUserAgentPlugin;
exports.resolveUserAgentConfig = resolveUserAgentConfig;
exports.userAgentMiddleware = userAgentMiddleware;


/***/ }),

/***/ 8156:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var stsRegionDefaultResolver = __nccwpck_require__(3161);
var configResolver = __nccwpck_require__(3098);

const getAwsRegionExtensionConfiguration = (runtimeConfig) => {
    return {
        setRegion(region) {
            runtimeConfig.region = region;
        },
        region() {
            return runtimeConfig.region;
        },
    };
};
const resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
    return {
        region: awsRegionExtensionConfiguration.region(),
    };
};

exports.NODE_REGION_CONFIG_FILE_OPTIONS = configResolver.NODE_REGION_CONFIG_FILE_OPTIONS;
exports.NODE_REGION_CONFIG_OPTIONS = configResolver.NODE_REGION_CONFIG_OPTIONS;
exports.REGION_ENV_NAME = configResolver.REGION_ENV_NAME;
exports.REGION_INI_NAME = configResolver.REGION_INI_NAME;
exports.resolveRegionConfig = configResolver.resolveRegionConfig;
exports.getAwsRegionExtensionConfiguration = getAwsRegionExtensionConfiguration;
exports.resolveAwsRegionExtensionConfiguration = resolveAwsRegionExtensionConfiguration;
Object.prototype.hasOwnProperty.call(stsRegionDefaultResolver, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: stsRegionDefaultResolver['__proto__']
    });

Object.keys(stsRegionDefaultResolver).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = stsRegionDefaultResolver[k];
});


/***/ }),

/***/ 3161:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.warning = void 0;
exports.stsRegionDefaultResolver = stsRegionDefaultResolver;
const config_resolver_1 = __nccwpck_require__(3098);
const node_config_provider_1 = __nccwpck_require__(3461);
function stsRegionDefaultResolver(loaderConfig = {}) {
    return (0, node_config_provider_1.loadConfig)({
        ...config_resolver_1.NODE_REGION_CONFIG_OPTIONS,
        async default() {
            if (!exports.warning.silence) {
                console.warn("@aws-sdk - WARN - default STS region of us-east-1 used. See @aws-sdk/credential-providers README and set a region explicitly.");
            }
            return "us-east-1";
        },
    }, { ...config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig });
}
exports.warning = {
    silence: false,
};


/***/ }),

/***/ 3350:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var utilEndpoints = __nccwpck_require__(5473);
var urlParser = __nccwpck_require__(4681);

const isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
    if (allowSubDomains) {
        for (const label of value.split(".")) {
            if (!isVirtualHostableS3Bucket(label)) {
                return false;
            }
        }
        return true;
    }
    if (!utilEndpoints.isValidHostLabel(value)) {
        return false;
    }
    if (value.length < 3 || value.length > 63) {
        return false;
    }
    if (value !== value.toLowerCase()) {
        return false;
    }
    if (utilEndpoints.isIpAddress(value)) {
        return false;
    }
    return true;
};

const ARN_DELIMITER = ":";
const RESOURCE_DELIMITER = "/";
const parseArn = (value) => {
    const segments = value.split(ARN_DELIMITER);
    if (segments.length < 6)
        return null;
    const [arn, partition, service, region, accountId, ...resourcePath] = segments;
    if (arn !== "arn" || partition === "" || service === "" || resourcePath.join(ARN_DELIMITER) === "")
        return null;
    const resourceId = resourcePath.map((resource) => resource.split(RESOURCE_DELIMITER)).flat();
    return {
        partition,
        service,
        region,
        accountId,
        resourceId,
    };
};

var partitions = [
	{
		id: "aws",
		outputs: {
			dnsSuffix: "amazonaws.com",
			dualStackDnsSuffix: "api.aws",
			implicitGlobalRegion: "us-east-1",
			name: "aws",
			supportsDualStack: true,
			supportsFIPS: true
		},
		regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
		regions: {
			"af-south-1": {
				description: "Africa (Cape Town)"
			},
			"ap-east-1": {
				description: "Asia Pacific (Hong Kong)"
			},
			"ap-east-2": {
				description: "Asia Pacific (Taipei)"
			},
			"ap-northeast-1": {
				description: "Asia Pacific (Tokyo)"
			},
			"ap-northeast-2": {
				description: "Asia Pacific (Seoul)"
			},
			"ap-northeast-3": {
				description: "Asia Pacific (Osaka)"
			},
			"ap-south-1": {
				description: "Asia Pacific (Mumbai)"
			},
			"ap-south-2": {
				description: "Asia Pacific (Hyderabad)"
			},
			"ap-southeast-1": {
				description: "Asia Pacific (Singapore)"
			},
			"ap-southeast-2": {
				description: "Asia Pacific (Sydney)"
			},
			"ap-southeast-3": {
				description: "Asia Pacific (Jakarta)"
			},
			"ap-southeast-4": {
				description: "Asia Pacific (Melbourne)"
			},
			"ap-southeast-5": {
				description: "Asia Pacific (Malaysia)"
			},
			"ap-southeast-6": {
				description: "Asia Pacific (New Zealand)"
			},
			"ap-southeast-7": {
				description: "Asia Pacific (Thailand)"
			},
			"aws-global": {
				description: "aws global region"
			},
			"ca-central-1": {
				description: "Canada (Central)"
			},
			"ca-west-1": {
				description: "Canada West (Calgary)"
			},
			"eu-central-1": {
				description: "Europe (Frankfurt)"
			},
			"eu-central-2": {
				description: "Europe (Zurich)"
			},
			"eu-north-1": {
				description: "Europe (Stockholm)"
			},
			"eu-south-1": {
				description: "Europe (Milan)"
			},
			"eu-south-2": {
				description: "Europe (Spain)"
			},
			"eu-west-1": {
				description: "Europe (Ireland)"
			},
			"eu-west-2": {
				description: "Europe (London)"
			},
			"eu-west-3": {
				description: "Europe (Paris)"
			},
			"il-central-1": {
				description: "Israel (Tel Aviv)"
			},
			"me-central-1": {
				description: "Middle East (UAE)"
			},
			"me-south-1": {
				description: "Middle East (Bahrain)"
			},
			"mx-central-1": {
				description: "Mexico (Central)"
			},
			"sa-east-1": {
				description: "South America (Sao Paulo)"
			},
			"us-east-1": {
				description: "US East (N. Virginia)"
			},
			"us-east-2": {
				description: "US East (Ohio)"
			},
			"us-west-1": {
				description: "US West (N. California)"
			},
			"us-west-2": {
				description: "US West (Oregon)"
			}
		}
	},
	{
		id: "aws-cn",
		outputs: {
			dnsSuffix: "amazonaws.com.cn",
			dualStackDnsSuffix: "api.amazonwebservices.com.cn",
			implicitGlobalRegion: "cn-northwest-1",
			name: "aws-cn",
			supportsDualStack: true,
			supportsFIPS: true
		},
		regionRegex: "^cn\\-\\w+\\-\\d+$",
		regions: {
			"aws-cn-global": {
				description: "aws-cn global region"
			},
			"cn-north-1": {
				description: "China (Beijing)"
			},
			"cn-northwest-1": {
				description: "China (Ningxia)"
			}
		}
	},
	{
		id: "aws-eusc",
		outputs: {
			dnsSuffix: "amazonaws.eu",
			dualStackDnsSuffix: "api.amazonwebservices.eu",
			implicitGlobalRegion: "eusc-de-east-1",
			name: "aws-eusc",
			supportsDualStack: true,
			supportsFIPS: true
		},
		regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
		regions: {
			"eusc-de-east-1": {
				description: "AWS European Sovereign Cloud (Germany)"
			}
		}
	},
	{
		id: "aws-iso",
		outputs: {
			dnsSuffix: "c2s.ic.gov",
			dualStackDnsSuffix: "api.aws.ic.gov",
			implicitGlobalRegion: "us-iso-east-1",
			name: "aws-iso",
			supportsDualStack: true,
			supportsFIPS: true
		},
		regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
		regions: {
			"aws-iso-global": {
				description: "aws-iso global region"
			},
			"us-iso-east-1": {
				description: "US ISO East"
			},
			"us-iso-west-1": {
				description: "US ISO WEST"
			}
		}
	},
	{
		id: "aws-iso-b",
		outputs: {
			dnsSuffix: "sc2s.sgov.gov",
			dualStackDnsSuffix: "api.aws.scloud",
			implicitGlobalRegion: "us-isob-east-1",
			name: "aws-iso-b",
			supportsDualStack: true,
			supportsFIPS: true
		},
		regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
		regions: {
			"aws-iso-b-global": {
				description: "aws-iso-b global region"
			},
			"us-isob-east-1": {
				description: "US ISOB East (Ohio)"
			},
			"us-isob-west-1": {
				description: "US ISOB West"
			}
		}
	},
	{
		id: "aws-iso-e",
		outputs: {
			dnsSuffix: "cloud.adc-e.uk",
			dualStackDnsSuffix: "api.cloud-aws.adc-e.uk",
			implicitGlobalRegion: "eu-isoe-west-1",
			name: "aws-iso-e",
			supportsDualStack: true,
			supportsFIPS: true
		},
		regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
		regions: {
			"aws-iso-e-global": {
				description: "aws-iso-e global region"
			},
			"eu-isoe-west-1": {
				description: "EU ISOE West"
			}
		}
	},
	{
		id: "aws-iso-f",
		outputs: {
			dnsSuffix: "csp.hci.ic.gov",
			dualStackDnsSuffix: "api.aws.hci.ic.gov",
			implicitGlobalRegion: "us-isof-south-1",
			name: "aws-iso-f",
			supportsDualStack: true,
			supportsFIPS: true
		},
		regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
		regions: {
			"aws-iso-f-global": {
				description: "aws-iso-f global region"
			},
			"us-isof-east-1": {
				description: "US ISOF EAST"
			},
			"us-isof-south-1": {
				description: "US ISOF SOUTH"
			}
		}
	},
	{
		id: "aws-us-gov",
		outputs: {
			dnsSuffix: "amazonaws.com",
			dualStackDnsSuffix: "api.aws",
			implicitGlobalRegion: "us-gov-west-1",
			name: "aws-us-gov",
			supportsDualStack: true,
			supportsFIPS: true
		},
		regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
		regions: {
			"aws-us-gov-global": {
				description: "aws-us-gov global region"
			},
			"us-gov-east-1": {
				description: "AWS GovCloud (US-East)"
			},
			"us-gov-west-1": {
				description: "AWS GovCloud (US-West)"
			}
		}
	}
];
var version = "1.1";
var partitionsInfo = {
	partitions: partitions,
	version: version
};

let selectedPartitionsInfo = partitionsInfo;
let selectedUserAgentPrefix = "";
const partition = (value) => {
    const { partitions } = selectedPartitionsInfo;
    for (const partition of partitions) {
        const { regions, outputs } = partition;
        for (const [region, regionData] of Object.entries(regions)) {
            if (region === value) {
                return {
                    ...outputs,
                    ...regionData,
                };
            }
        }
    }
    for (const partition of partitions) {
        const { regionRegex, outputs } = partition;
        if (new RegExp(regionRegex).test(value)) {
            return {
                ...outputs,
            };
        }
    }
    const DEFAULT_PARTITION = partitions.find((partition) => partition.id === "aws");
    if (!DEFAULT_PARTITION) {
        throw new Error("Provided region was not found in the partition array or regex," +
            " and default partition with id 'aws' doesn't exist.");
    }
    return {
        ...DEFAULT_PARTITION.outputs,
    };
};
const setPartitionInfo = (partitionsInfo, userAgentPrefix = "") => {
    selectedPartitionsInfo = partitionsInfo;
    selectedUserAgentPrefix = userAgentPrefix;
};
const useDefaultPartitionInfo = () => {
    setPartitionInfo(partitionsInfo, "");
};
const getUserAgentPrefix = () => selectedUserAgentPrefix;

const awsEndpointFunctions = {
    isVirtualHostableS3Bucket: isVirtualHostableS3Bucket,
    parseArn: parseArn,
    partition: partition,
};
utilEndpoints.customEndpointFunctions.aws = awsEndpointFunctions;

const resolveDefaultAwsRegionalEndpointsConfig = (input) => {
    if (typeof input.endpointProvider !== "function") {
        throw new Error("@aws-sdk/util-endpoint - endpointProvider and endpoint missing in config for this client.");
    }
    const { endpoint } = input;
    if (endpoint === undefined) {
        input.endpoint = async () => {
            return toEndpointV1(input.endpointProvider({
                Region: typeof input.region === "function" ? await input.region() : input.region,
                UseDualStack: typeof input.useDualstackEndpoint === "function"
                    ? await input.useDualstackEndpoint()
                    : input.useDualstackEndpoint,
                UseFIPS: typeof input.useFipsEndpoint === "function" ? await input.useFipsEndpoint() : input.useFipsEndpoint,
                Endpoint: undefined,
            }, { logger: input.logger }));
        };
    }
    return input;
};
const toEndpointV1 = (endpoint) => urlParser.parseUrl(endpoint.url);

exports.EndpointError = utilEndpoints.EndpointError;
exports.isIpAddress = utilEndpoints.isIpAddress;
exports.resolveEndpoint = utilEndpoints.resolveEndpoint;
exports.awsEndpointFunctions = awsEndpointFunctions;
exports.getUserAgentPrefix = getUserAgentPrefix;
exports.partition = partition;
exports.resolveDefaultAwsRegionalEndpointsConfig = resolveDefaultAwsRegionalEndpointsConfig;
exports.setPartitionInfo = setPartitionInfo;
exports.toEndpointV1 = toEndpointV1;
exports.useDefaultPartitionInfo = useDefaultPartitionInfo;


/***/ }),

/***/ 8095:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var node_os = __nccwpck_require__(612);
var node_process = __nccwpck_require__(7742);
var utilConfigProvider = __nccwpck_require__(3375);
var promises = __nccwpck_require__(3977);
var node_path = __nccwpck_require__(9411);
var middlewareUserAgent = __nccwpck_require__(4688);

const getRuntimeUserAgentPair = () => {
    const runtimesToCheck = ["deno", "bun", "llrt"];
    for (const runtime of runtimesToCheck) {
        if (node_process.versions[runtime]) {
            return [`md/${runtime}`, node_process.versions[runtime]];
        }
    }
    return ["md/nodejs", node_process.versions.node];
};

const getNodeModulesParentDirs = (dirname) => {
    const cwd = process.cwd();
    if (!dirname) {
        return [cwd];
    }
    const normalizedPath = node_path.normalize(dirname);
    const parts = normalizedPath.split(node_path.sep);
    const nodeModulesIndex = parts.indexOf("node_modules");
    const parentDir = nodeModulesIndex !== -1 ? parts.slice(0, nodeModulesIndex).join(node_path.sep) : normalizedPath;
    if (cwd === parentDir) {
        return [cwd];
    }
    return [parentDir, cwd];
};

const SEMVER_REGEX = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*)?$/;
const getSanitizedTypeScriptVersion = (version = "") => {
    const match = version.match(SEMVER_REGEX);
    if (!match) {
        return undefined;
    }
    const [major, minor, patch, prerelease] = [match[1], match[2], match[3], match[4]];
    return prerelease ? `${major}.${minor}.${patch}-${prerelease}` : `${major}.${minor}.${patch}`;
};

const ALLOWED_PREFIXES = ["^", "~", ">=", "<=", ">", "<"];
const ALLOWED_DIST_TAGS = ["latest", "beta", "dev", "rc", "insiders", "next"];
const getSanitizedDevTypeScriptVersion = (version = "") => {
    if (ALLOWED_DIST_TAGS.includes(version)) {
        return version;
    }
    const prefix = ALLOWED_PREFIXES.find((p) => version.startsWith(p)) ?? "";
    const sanitizedTypeScriptVersion = getSanitizedTypeScriptVersion(version.slice(prefix.length));
    if (!sanitizedTypeScriptVersion) {
        return undefined;
    }
    return `${prefix}${sanitizedTypeScriptVersion}`;
};

let tscVersion;
const TS_PACKAGE_JSON = node_path.join("node_modules", "typescript", "package.json");
const getTypeScriptUserAgentPair = async () => {
    if (tscVersion === null) {
        return undefined;
    }
    else if (typeof tscVersion === "string") {
        return ["md/tsc", tscVersion];
    }
    let isTypeScriptDetectionDisabled = false;
    try {
        isTypeScriptDetectionDisabled =
            utilConfigProvider.booleanSelector(process.env, "AWS_SDK_JS_TYPESCRIPT_DETECTION_DISABLED", utilConfigProvider.SelectorType.ENV) || false;
    }
    catch { }
    if (isTypeScriptDetectionDisabled) {
        tscVersion = null;
        return undefined;
    }
    const dirname = typeof __dirname !== "undefined" ? __dirname : undefined;
    const nodeModulesParentDirs = getNodeModulesParentDirs(dirname);
    let versionFromApp;
    for (const nodeModulesParentDir of nodeModulesParentDirs) {
        try {
            const appPackageJsonPath = node_path.join(nodeModulesParentDir, "package.json");
            const packageJson = await promises.readFile(appPackageJsonPath, "utf-8");
            const { dependencies, devDependencies } = JSON.parse(packageJson);
            const version = devDependencies?.typescript ?? dependencies?.typescript;
            if (typeof version !== "string") {
                continue;
            }
            versionFromApp = version;
            break;
        }
        catch {
        }
    }
    if (!versionFromApp) {
        tscVersion = null;
        return undefined;
    }
    let versionFromNodeModules;
    for (const nodeModulesParentDir of nodeModulesParentDirs) {
        try {
            const tsPackageJsonPath = node_path.join(nodeModulesParentDir, TS_PACKAGE_JSON);
            const packageJson = await promises.readFile(tsPackageJsonPath, "utf-8");
            const { version } = JSON.parse(packageJson);
            const sanitizedVersion = getSanitizedTypeScriptVersion(version);
            if (typeof sanitizedVersion !== "string") {
                continue;
            }
            versionFromNodeModules = sanitizedVersion;
            break;
        }
        catch {
        }
    }
    if (versionFromNodeModules) {
        tscVersion = versionFromNodeModules;
        return ["md/tsc", tscVersion];
    }
    const sanitizedVersion = getSanitizedDevTypeScriptVersion(versionFromApp);
    if (typeof sanitizedVersion !== "string") {
        tscVersion = null;
        return undefined;
    }
    tscVersion = `dev_${sanitizedVersion}`;
    return ["md/tsc", tscVersion];
};

const crtAvailability = {
    isCrtAvailable: false,
};

const isCrtAvailable = () => {
    if (crtAvailability.isCrtAvailable) {
        return ["md/crt-avail"];
    }
    return null;
};

const createDefaultUserAgentProvider = ({ serviceId, clientVersion }) => {
    const runtimeUserAgentPair = getRuntimeUserAgentPair();
    return async (config) => {
        const sections = [
            ["aws-sdk-js", clientVersion],
            ["ua", "2.1"],
            [`os/${node_os.platform()}`, node_os.release()],
            ["lang/js"],
            runtimeUserAgentPair,
        ];
        const typescriptUserAgentPair = await getTypeScriptUserAgentPair();
        if (typescriptUserAgentPair) {
            sections.push(typescriptUserAgentPair);
        }
        const crtAvailable = isCrtAvailable();
        if (crtAvailable) {
            sections.push(crtAvailable);
        }
        if (serviceId) {
            sections.push([`api/${serviceId}`, clientVersion]);
        }
        if (node_process.env.AWS_EXECUTION_ENV) {
            sections.push([`exec-env/${node_process.env.AWS_EXECUTION_ENV}`]);
        }
        const appId = await config?.userAgentAppId?.();
        const resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        return resolvedUserAgent;
    };
};
const defaultUserAgent = createDefaultUserAgentProvider;

const UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
const UA_APP_ID_INI_NAME = "sdk_ua_app_id";
const UA_APP_ID_INI_NAME_DEPRECATED = "sdk-ua-app-id";
const NODE_APP_ID_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[UA_APP_ID_ENV_NAME],
    configFileSelector: (profile) => profile[UA_APP_ID_INI_NAME] ?? profile[UA_APP_ID_INI_NAME_DEPRECATED],
    default: middlewareUserAgent.DEFAULT_UA_APP_ID,
};

exports.NODE_APP_ID_CONFIG_OPTIONS = NODE_APP_ID_CONFIG_OPTIONS;
exports.UA_APP_ID_ENV_NAME = UA_APP_ID_ENV_NAME;
exports.UA_APP_ID_INI_NAME = UA_APP_ID_INI_NAME;
exports.createDefaultUserAgentProvider = createDefaultUserAgentProvider;
exports.crtAvailability = crtAvailability;
exports.defaultUserAgent = defaultUserAgent;


/***/ }),

/***/ 2589:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


const PROTECTED_KEYS = {
    REQUEST_ID: Symbol.for("_AWS_LAMBDA_REQUEST_ID"),
    X_RAY_TRACE_ID: Symbol.for("_AWS_LAMBDA_X_RAY_TRACE_ID"),
    TENANT_ID: Symbol.for("_AWS_LAMBDA_TENANT_ID"),
};
const NO_GLOBAL_AWS_LAMBDA = ["true", "1"].includes(process.env?.AWS_LAMBDA_NODEJS_NO_GLOBAL_AWSLAMBDA ?? "");
if (!NO_GLOBAL_AWS_LAMBDA) {
    globalThis.awslambda = globalThis.awslambda || {};
}
class InvokeStoreBase {
    static PROTECTED_KEYS = PROTECTED_KEYS;
    isProtectedKey(key) {
        return Object.values(PROTECTED_KEYS).includes(key);
    }
    getRequestId() {
        return this.get(PROTECTED_KEYS.REQUEST_ID) ?? "-";
    }
    getXRayTraceId() {
        return this.get(PROTECTED_KEYS.X_RAY_TRACE_ID);
    }
    getTenantId() {
        return this.get(PROTECTED_KEYS.TENANT_ID);
    }
}
class InvokeStoreSingle extends InvokeStoreBase {
    currentContext;
    getContext() {
        return this.currentContext;
    }
    hasContext() {
        return this.currentContext !== undefined;
    }
    get(key) {
        return this.currentContext?.[key];
    }
    set(key, value) {
        if (this.isProtectedKey(key)) {
            throw new Error(`Cannot modify protected Lambda context field: ${String(key)}`);
        }
        this.currentContext = this.currentContext || {};
        this.currentContext[key] = value;
    }
    run(context, fn) {
        this.currentContext = context;
        return fn();
    }
}
class InvokeStoreMulti extends InvokeStoreBase {
    als;
    static async create() {
        const instance = new InvokeStoreMulti();
        const asyncHooks = await Promise.resolve(/* import() */).then(__nccwpck_require__.t.bind(__nccwpck_require__, 2761, 23));
        instance.als = new asyncHooks.AsyncLocalStorage();
        return instance;
    }
    getContext() {
        return this.als.getStore();
    }
    hasContext() {
        return this.als.getStore() !== undefined;
    }
    get(key) {
        return this.als.getStore()?.[key];
    }
    set(key, value) {
        if (this.isProtectedKey(key)) {
            throw new Error(`Cannot modify protected Lambda context field: ${String(key)}`);
        }
        const store = this.als.getStore();
        if (!store) {
            throw new Error("No context available");
        }
        store[key] = value;
    }
    run(context, fn) {
        return this.als.run(context, fn);
    }
}
exports.InvokeStore = void 0;
(function (InvokeStore) {
    let instance = null;
    async function getInstanceAsync(forceInvokeStoreMulti) {
        if (!instance) {
            instance = (async () => {
                const isMulti = forceInvokeStoreMulti === true || "AWS_LAMBDA_MAX_CONCURRENCY" in process.env;
                const newInstance = isMulti
                    ? await InvokeStoreMulti.create()
                    : new InvokeStoreSingle();
                if (!NO_GLOBAL_AWS_LAMBDA && globalThis.awslambda?.InvokeStore) {
                    return globalThis.awslambda.InvokeStore;
                }
                else if (!NO_GLOBAL_AWS_LAMBDA && globalThis.awslambda) {
                    globalThis.awslambda.InvokeStore = newInstance;
                    return newInstance;
                }
                else {
                    return newInstance;
                }
            })();
        }
        return instance;
    }
    InvokeStore.getInstanceAsync = getInstanceAsync;
    InvokeStore._testing = process.env.AWS_LAMBDA_BENCHMARK_MODE === "1"
        ? {
            reset: () => {
                instance = null;
                if (globalThis.awslambda?.InvokeStore) {
                    delete globalThis.awslambda.InvokeStore;
                }
                globalThis.awslambda = { InvokeStore: undefined };
            },
        }
        : undefined;
})(exports.InvokeStore || (exports.InvokeStore = {}));

exports.InvokeStoreBase = InvokeStoreBase;


/***/ }),

/***/ 3098:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var utilConfigProvider = __nccwpck_require__(3375);
var utilMiddleware = __nccwpck_require__(2390);
var utilEndpoints = __nccwpck_require__(5473);

const ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
const CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
const DEFAULT_USE_DUALSTACK_ENDPOINT = false;
const NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => utilConfigProvider.booleanSelector(env, ENV_USE_DUALSTACK_ENDPOINT, utilConfigProvider.SelectorType.ENV),
    configFileSelector: (profile) => utilConfigProvider.booleanSelector(profile, CONFIG_USE_DUALSTACK_ENDPOINT, utilConfigProvider.SelectorType.CONFIG),
    default: false,
};
const nodeDualstackConfigSelectors = {
    environmentVariableSelector: (env) => utilConfigProvider.booleanSelector(env, ENV_USE_DUALSTACK_ENDPOINT, utilConfigProvider.SelectorType.ENV),
    configFileSelector: (profile) => utilConfigProvider.booleanSelector(profile, CONFIG_USE_DUALSTACK_ENDPOINT, utilConfigProvider.SelectorType.CONFIG),
    default: undefined,
};

const ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
const CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
const DEFAULT_USE_FIPS_ENDPOINT = false;
const NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => utilConfigProvider.booleanSelector(env, ENV_USE_FIPS_ENDPOINT, utilConfigProvider.SelectorType.ENV),
    configFileSelector: (profile) => utilConfigProvider.booleanSelector(profile, CONFIG_USE_FIPS_ENDPOINT, utilConfigProvider.SelectorType.CONFIG),
    default: false,
};
const nodeFipsConfigSelectors = {
    environmentVariableSelector: (env) => utilConfigProvider.booleanSelector(env, ENV_USE_FIPS_ENDPOINT, utilConfigProvider.SelectorType.ENV),
    configFileSelector: (profile) => utilConfigProvider.booleanSelector(profile, CONFIG_USE_FIPS_ENDPOINT, utilConfigProvider.SelectorType.CONFIG),
    default: undefined,
};

const resolveCustomEndpointsConfig = (input) => {
    const { tls, endpoint, urlParser, useDualstackEndpoint } = input;
    return Object.assign(input, {
        tls: tls ?? true,
        endpoint: utilMiddleware.normalizeProvider(typeof endpoint === "string" ? urlParser(endpoint) : endpoint),
        isCustomEndpoint: true,
        useDualstackEndpoint: utilMiddleware.normalizeProvider(useDualstackEndpoint ?? false),
    });
};

const getEndpointFromRegion = async (input) => {
    const { tls = true } = input;
    const region = await input.region();
    const dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
    if (!dnsHostRegex.test(region)) {
        throw new Error("Invalid region in client config");
    }
    const useDualstackEndpoint = await input.useDualstackEndpoint();
    const useFipsEndpoint = await input.useFipsEndpoint();
    const { hostname } = (await input.regionInfoProvider(region, { useDualstackEndpoint, useFipsEndpoint })) ?? {};
    if (!hostname) {
        throw new Error("Cannot resolve hostname from client config");
    }
    return input.urlParser(`${tls ? "https:" : "http:"}//${hostname}`);
};

const resolveEndpointsConfig = (input) => {
    const useDualstackEndpoint = utilMiddleware.normalizeProvider(input.useDualstackEndpoint ?? false);
    const { endpoint, useFipsEndpoint, urlParser, tls } = input;
    return Object.assign(input, {
        tls: tls ?? true,
        endpoint: endpoint
            ? utilMiddleware.normalizeProvider(typeof endpoint === "string" ? urlParser(endpoint) : endpoint)
            : () => getEndpointFromRegion({ ...input, useDualstackEndpoint, useFipsEndpoint }),
        isCustomEndpoint: !!endpoint,
        useDualstackEndpoint,
    });
};

const REGION_ENV_NAME = "AWS_REGION";
const REGION_INI_NAME = "region";
const NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[REGION_ENV_NAME],
    configFileSelector: (profile) => profile[REGION_INI_NAME],
    default: () => {
        throw new Error("Region is missing");
    },
};
const NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials",
};

const validRegions = new Set();
const checkRegion = (region, check = utilEndpoints.isValidHostLabel) => {
    if (!validRegions.has(region) && !check(region)) {
        if (region === "*") {
            console.warn(`@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.`);
        }
        else {
            throw new Error(`Region not accepted: region="${region}" is not a valid hostname component.`);
        }
    }
    else {
        validRegions.add(region);
    }
};

const isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));

const getRealRegion = (region) => isFipsRegion(region)
    ? ["fips-aws-global", "aws-fips"].includes(region)
        ? "us-east-1"
        : region.replace(/fips-(dkr-|prod-)?|-fips/, "")
    : region;

const resolveRegionConfig = (input) => {
    const { region, useFipsEndpoint } = input;
    if (!region) {
        throw new Error("Region is missing");
    }
    return Object.assign(input, {
        region: async () => {
            const providedRegion = typeof region === "function" ? await region() : region;
            const realRegion = getRealRegion(providedRegion);
            checkRegion(realRegion);
            return realRegion;
        },
        useFipsEndpoint: async () => {
            const providedRegion = typeof region === "string" ? region : await region();
            if (isFipsRegion(providedRegion)) {
                return true;
            }
            return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        },
    });
};

const getHostnameFromVariants = (variants = [], { useFipsEndpoint, useDualstackEndpoint }) => variants.find(({ tags }) => useFipsEndpoint === tags.includes("fips") && useDualstackEndpoint === tags.includes("dualstack"))?.hostname;

const getResolvedHostname = (resolvedRegion, { regionHostname, partitionHostname }) => regionHostname
    ? regionHostname
    : partitionHostname
        ? partitionHostname.replace("{region}", resolvedRegion)
        : undefined;

const getResolvedPartition = (region, { partitionHash }) => Object.keys(partitionHash || {}).find((key) => partitionHash[key].regions.includes(region)) ?? "aws";

const getResolvedSigningRegion = (hostname, { signingRegion, regionRegex, useFipsEndpoint }) => {
    if (signingRegion) {
        return signingRegion;
    }
    else if (useFipsEndpoint) {
        const regionRegexJs = regionRegex.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\.");
        const regionRegexmatchArray = hostname.match(regionRegexJs);
        if (regionRegexmatchArray) {
            return regionRegexmatchArray[0].slice(1, -1);
        }
    }
};

const getRegionInfo = (region, { useFipsEndpoint = false, useDualstackEndpoint = false, signingService, regionHash, partitionHash, }) => {
    const partition = getResolvedPartition(region, { partitionHash });
    const resolvedRegion = region in regionHash ? region : partitionHash[partition]?.endpoint ?? region;
    const hostnameOptions = { useFipsEndpoint, useDualstackEndpoint };
    const regionHostname = getHostnameFromVariants(regionHash[resolvedRegion]?.variants, hostnameOptions);
    const partitionHostname = getHostnameFromVariants(partitionHash[partition]?.variants, hostnameOptions);
    const hostname = getResolvedHostname(resolvedRegion, { regionHostname, partitionHostname });
    if (hostname === undefined) {
        throw new Error(`Endpoint resolution failed for: ${{ resolvedRegion, useFipsEndpoint, useDualstackEndpoint }}`);
    }
    const signingRegion = getResolvedSigningRegion(hostname, {
        signingRegion: regionHash[resolvedRegion]?.signingRegion,
        regionRegex: partitionHash[partition].regionRegex,
        useFipsEndpoint,
    });
    return {
        partition,
        signingService,
        hostname,
        ...(signingRegion && { signingRegion }),
        ...(regionHash[resolvedRegion]?.signingService && {
            signingService: regionHash[resolvedRegion].signingService,
        }),
    };
};

exports.CONFIG_USE_DUALSTACK_ENDPOINT = CONFIG_USE_DUALSTACK_ENDPOINT;
exports.CONFIG_USE_FIPS_ENDPOINT = CONFIG_USE_FIPS_ENDPOINT;
exports.DEFAULT_USE_DUALSTACK_ENDPOINT = DEFAULT_USE_DUALSTACK_ENDPOINT;
exports.DEFAULT_USE_FIPS_ENDPOINT = DEFAULT_USE_FIPS_ENDPOINT;
exports.ENV_USE_DUALSTACK_ENDPOINT = ENV_USE_DUALSTACK_ENDPOINT;
exports.ENV_USE_FIPS_ENDPOINT = ENV_USE_FIPS_ENDPOINT;
exports.NODE_REGION_CONFIG_FILE_OPTIONS = NODE_REGION_CONFIG_FILE_OPTIONS;
exports.NODE_REGION_CONFIG_OPTIONS = NODE_REGION_CONFIG_OPTIONS;
exports.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS;
exports.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS;
exports.REGION_ENV_NAME = REGION_ENV_NAME;
exports.REGION_INI_NAME = REGION_INI_NAME;
exports.getRegionInfo = getRegionInfo;
exports.nodeDualstackConfigSelectors = nodeDualstackConfigSelectors;
exports.nodeFipsConfigSelectors = nodeFipsConfigSelectors;
exports.resolveCustomEndpointsConfig = resolveCustomEndpointsConfig;
exports.resolveEndpointsConfig = resolveEndpointsConfig;
exports.resolveRegionConfig = resolveRegionConfig;


/***/ }),

/***/ 5829:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var types = __nccwpck_require__(5756);
var protocolHttp = __nccwpck_require__(4418);
var utilMiddleware = __nccwpck_require__(2390);
var protocols = __nccwpck_require__(2241);

const getSmithyContext = (context) => context[types.SMITHY_CONTEXT_KEY] || (context[types.SMITHY_CONTEXT_KEY] = {});

const resolveAuthOptions = (candidateAuthOptions, authSchemePreference) => {
    if (!authSchemePreference || authSchemePreference.length === 0) {
        return candidateAuthOptions;
    }
    const preferredAuthOptions = [];
    for (const preferredSchemeName of authSchemePreference) {
        for (const candidateAuthOption of candidateAuthOptions) {
            const candidateAuthSchemeName = candidateAuthOption.schemeId.split("#")[1];
            if (candidateAuthSchemeName === preferredSchemeName) {
                preferredAuthOptions.push(candidateAuthOption);
            }
        }
    }
    for (const candidateAuthOption of candidateAuthOptions) {
        if (!preferredAuthOptions.find(({ schemeId }) => schemeId === candidateAuthOption.schemeId)) {
            preferredAuthOptions.push(candidateAuthOption);
        }
    }
    return preferredAuthOptions;
};

function convertHttpAuthSchemesToMap(httpAuthSchemes) {
    const map = new Map();
    for (const scheme of httpAuthSchemes) {
        map.set(scheme.schemeId, scheme);
    }
    return map;
}
const httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => async (args) => {
    const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
    const authSchemePreference = config.authSchemePreference ? await config.authSchemePreference() : [];
    const resolvedOptions = resolveAuthOptions(options, authSchemePreference);
    const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
    const smithyContext = utilMiddleware.getSmithyContext(context);
    const failureReasons = [];
    for (const option of resolvedOptions) {
        const scheme = authSchemes.get(option.schemeId);
        if (!scheme) {
            failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
            continue;
        }
        const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
        if (!identityProvider) {
            failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
            continue;
        }
        const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
        option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
        option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
        smithyContext.selectedHttpAuthScheme = {
            httpAuthOption: option,
            identity: await identityProvider(option.identityProperties),
            signer: scheme.signer,
        };
        break;
    }
    if (!smithyContext.selectedHttpAuthScheme) {
        throw new Error(failureReasons.join("\n"));
    }
    return next(args);
};

const httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
    step: "serialize",
    tags: ["HTTP_AUTH_SCHEME"],
    name: "httpAuthSchemeMiddleware",
    override: true,
    relation: "before",
    toMiddleware: "endpointV2Middleware",
};
const getHttpAuthSchemeEndpointRuleSetPlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider, }) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
            httpAuthSchemeParametersProvider,
            identityProviderConfigProvider,
        }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
    },
});

const httpAuthSchemeMiddlewareOptions = {
    step: "serialize",
    tags: ["HTTP_AUTH_SCHEME"],
    name: "httpAuthSchemeMiddleware",
    override: true,
    relation: "before",
    toMiddleware: "serializerMiddleware",
};
const getHttpAuthSchemePlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider, }) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
            httpAuthSchemeParametersProvider,
            identityProviderConfigProvider,
        }), httpAuthSchemeMiddlewareOptions);
    },
});

const defaultErrorHandler = (signingProperties) => (error) => {
    throw error;
};
const defaultSuccessHandler = (httpResponse, signingProperties) => { };
const httpSigningMiddleware = (config) => (next, context) => async (args) => {
    if (!protocolHttp.HttpRequest.isInstance(args.request)) {
        return next(args);
    }
    const smithyContext = utilMiddleware.getSmithyContext(context);
    const scheme = smithyContext.selectedHttpAuthScheme;
    if (!scheme) {
        throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
    }
    const { httpAuthOption: { signingProperties = {} }, identity, signer, } = scheme;
    const output = await next({
        ...args,
        request: await signer.sign(args.request, identity, signingProperties),
    }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
    (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
    return output;
};

const httpSigningMiddlewareOptions = {
    step: "finalizeRequest",
    tags: ["HTTP_SIGNING"],
    name: "httpSigningMiddleware",
    aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
    override: true,
    relation: "after",
    toMiddleware: "retryMiddleware",
};
const getHttpSigningPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpSigningMiddleware(), httpSigningMiddlewareOptions);
    },
});

const normalizeProvider = (input) => {
    if (typeof input === "function")
        return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
};

const makePagedClientRequest = async (CommandCtor, client, input, withCommand = (_) => _, ...args) => {
    let command = new CommandCtor(input);
    command = withCommand(command) ?? command;
    return await client.send(command, ...args);
};
function createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {
    return async function* paginateOperation(config, input, ...additionalArguments) {
        const _input = input;
        let token = config.startingToken ?? _input[inputTokenName];
        let hasNext = true;
        let page;
        while (hasNext) {
            _input[inputTokenName] = token;
            if (pageSizeTokenName) {
                _input[pageSizeTokenName] = _input[pageSizeTokenName] ?? config.pageSize;
            }
            if (config.client instanceof ClientCtor) {
                page = await makePagedClientRequest(CommandCtor, config.client, input, config.withCommand, ...additionalArguments);
            }
            else {
                throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);
            }
            yield page;
            const prevToken = token;
            token = get(page, outputTokenName);
            hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
        }
        return undefined;
    };
}
const get = (fromObject, path) => {
    let cursor = fromObject;
    const pathComponents = path.split(".");
    for (const step of pathComponents) {
        if (!cursor || typeof cursor !== "object") {
            return undefined;
        }
        cursor = cursor[step];
    }
    return cursor;
};

function setFeature(context, feature, value) {
    if (!context.__smithy_context) {
        context.__smithy_context = {
            features: {},
        };
    }
    else if (!context.__smithy_context.features) {
        context.__smithy_context.features = {};
    }
    context.__smithy_context.features[feature] = value;
}

class DefaultIdentityProviderConfig {
    authSchemes = new Map();
    constructor(config) {
        for (const key in config) {
            const value = config[key];
            if (value !== undefined) {
                this.authSchemes.set(key, value);
            }
        }
    }
    getIdentityProvider(schemeId) {
        return this.authSchemes.get(schemeId);
    }
}

class HttpApiKeyAuthSigner {
    async sign(httpRequest, identity, signingProperties) {
        if (!signingProperties) {
            throw new Error("request could not be signed with `apiKey` since the `name` and `in` signer properties are missing");
        }
        if (!signingProperties.name) {
            throw new Error("request could not be signed with `apiKey` since the `name` signer property is missing");
        }
        if (!signingProperties.in) {
            throw new Error("request could not be signed with `apiKey` since the `in` signer property is missing");
        }
        if (!identity.apiKey) {
            throw new Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
        }
        const clonedRequest = protocolHttp.HttpRequest.clone(httpRequest);
        if (signingProperties.in === types.HttpApiKeyAuthLocation.QUERY) {
            clonedRequest.query[signingProperties.name] = identity.apiKey;
        }
        else if (signingProperties.in === types.HttpApiKeyAuthLocation.HEADER) {
            clonedRequest.headers[signingProperties.name] = signingProperties.scheme
                ? `${signingProperties.scheme} ${identity.apiKey}`
                : identity.apiKey;
        }
        else {
            throw new Error("request can only be signed with `apiKey` locations `query` or `header`, " +
                "but found: `" +
                signingProperties.in +
                "`");
        }
        return clonedRequest;
    }
}

class HttpBearerAuthSigner {
    async sign(httpRequest, identity, signingProperties) {
        const clonedRequest = protocolHttp.HttpRequest.clone(httpRequest);
        if (!identity.token) {
            throw new Error("request could not be signed with `token` since the `token` is not defined");
        }
        clonedRequest.headers["Authorization"] = `Bearer ${identity.token}`;
        return clonedRequest;
    }
}

class NoAuthSigner {
    async sign(httpRequest, identity, signingProperties) {
        return httpRequest;
    }
}

const createIsIdentityExpiredFunction = (expirationMs) => function isIdentityExpired(identity) {
    return doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
};
const EXPIRATION_MS = 300_000;
const isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
const doesIdentityRequireRefresh = (identity) => identity.expiration !== undefined;
const memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
    if (provider === undefined) {
        return undefined;
    }
    const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async (options) => {
        if (!pending) {
            pending = normalizedProvider(options);
        }
        try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
        }
        finally {
            pending = undefined;
        }
        return resolved;
    };
    if (isExpired === undefined) {
        return async (options) => {
            if (!hasResult || options?.forceRefresh) {
                resolved = await coalesceProvider(options);
            }
            return resolved;
        };
    }
    return async (options) => {
        if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider(options);
        }
        if (isConstant) {
            return resolved;
        }
        if (!requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
        }
        if (isExpired(resolved)) {
            await coalesceProvider(options);
            return resolved;
        }
        return resolved;
    };
};

exports.requestBuilder = protocols.requestBuilder;
exports.DefaultIdentityProviderConfig = DefaultIdentityProviderConfig;
exports.EXPIRATION_MS = EXPIRATION_MS;
exports.HttpApiKeyAuthSigner = HttpApiKeyAuthSigner;
exports.HttpBearerAuthSigner = HttpBearerAuthSigner;
exports.NoAuthSigner = NoAuthSigner;
exports.createIsIdentityExpiredFunction = createIsIdentityExpiredFunction;
exports.createPaginator = createPaginator;
exports.doesIdentityRequireRefresh = doesIdentityRequireRefresh;
exports.getHttpAuthSchemeEndpointRuleSetPlugin = getHttpAuthSchemeEndpointRuleSetPlugin;
exports.getHttpAuthSchemePlugin = getHttpAuthSchemePlugin;
exports.getHttpSigningPlugin = getHttpSigningPlugin;
exports.getSmithyContext = getSmithyContext;
exports.httpAuthSchemeEndpointRuleSetMiddlewareOptions = httpAuthSchemeEndpointRuleSetMiddlewareOptions;
exports.httpAuthSchemeMiddleware = httpAuthSchemeMiddleware;
exports.httpAuthSchemeMiddlewareOptions = httpAuthSchemeMiddlewareOptions;
exports.httpSigningMiddleware = httpSigningMiddleware;
exports.httpSigningMiddlewareOptions = httpSigningMiddlewareOptions;
exports.isIdentityExpired = isIdentityExpired;
exports.memoizeIdentityProvider = memoizeIdentityProvider;
exports.normalizeProvider = normalizeProvider;
exports.setFeature = setFeature;


/***/ }),

/***/ 804:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var serde = __nccwpck_require__(7669);
var utilUtf8 = __nccwpck_require__(1895);
var protocols = __nccwpck_require__(2241);
var protocolHttp = __nccwpck_require__(4418);
var utilBodyLengthBrowser = __nccwpck_require__(713);
var schema = __nccwpck_require__(9826);
var utilMiddleware = __nccwpck_require__(2390);
var utilBase64 = __nccwpck_require__(5600);

const majorUint64 = 0;
const majorNegativeInt64 = 1;
const majorUnstructuredByteString = 2;
const majorUtf8String = 3;
const majorList = 4;
const majorMap = 5;
const majorTag = 6;
const majorSpecial = 7;
const specialFalse = 20;
const specialTrue = 21;
const specialNull = 22;
const specialUndefined = 23;
const extendedOneByte = 24;
const extendedFloat16 = 25;
const extendedFloat32 = 26;
const extendedFloat64 = 27;
const minorIndefinite = 31;
function alloc(size) {
    return typeof Buffer !== "undefined" ? Buffer.alloc(size) : new Uint8Array(size);
}
const tagSymbol = Symbol("@smithy/core/cbor::tagSymbol");
function tag(data) {
    data[tagSymbol] = true;
    return data;
}

const USE_TEXT_DECODER = typeof TextDecoder !== "undefined";
const USE_BUFFER$1 = typeof Buffer !== "undefined";
let payload = alloc(0);
let dataView$1 = new DataView(payload.buffer, payload.byteOffset, payload.byteLength);
const textDecoder = USE_TEXT_DECODER ? new TextDecoder() : null;
let _offset = 0;
function setPayload(bytes) {
    payload = bytes;
    dataView$1 = new DataView(payload.buffer, payload.byteOffset, payload.byteLength);
}
function decode(at, to) {
    if (at >= to) {
        throw new Error("unexpected end of (decode) payload.");
    }
    const major = (payload[at] & 0b1110_0000) >> 5;
    const minor = payload[at] & 0b0001_1111;
    switch (major) {
        case majorUint64:
        case majorNegativeInt64:
        case majorTag:
            let unsignedInt;
            let offset;
            if (minor < 24) {
                unsignedInt = minor;
                offset = 1;
            }
            else {
                switch (minor) {
                    case extendedOneByte:
                    case extendedFloat16:
                    case extendedFloat32:
                    case extendedFloat64:
                        const countLength = minorValueToArgumentLength[minor];
                        const countOffset = (countLength + 1);
                        offset = countOffset;
                        if (to - at < countOffset) {
                            throw new Error(`countLength ${countLength} greater than remaining buf len.`);
                        }
                        const countIndex = at + 1;
                        if (countLength === 1) {
                            unsignedInt = payload[countIndex];
                        }
                        else if (countLength === 2) {
                            unsignedInt = dataView$1.getUint16(countIndex);
                        }
                        else if (countLength === 4) {
                            unsignedInt = dataView$1.getUint32(countIndex);
                        }
                        else {
                            unsignedInt = dataView$1.getBigUint64(countIndex);
                        }
                        break;
                    default:
                        throw new Error(`unexpected minor value ${minor}.`);
                }
            }
            if (major === majorUint64) {
                _offset = offset;
                return castBigInt(unsignedInt);
            }
            else if (major === majorNegativeInt64) {
                let negativeInt;
                if (typeof unsignedInt === "bigint") {
                    negativeInt = BigInt(-1) - unsignedInt;
                }
                else {
                    negativeInt = -1 - unsignedInt;
                }
                _offset = offset;
                return castBigInt(negativeInt);
            }
            else {
                if (minor === 2 || minor === 3) {
                    const length = decodeCount(at + offset, to);
                    let b = BigInt(0);
                    const start = at + offset + _offset;
                    for (let i = start; i < start + length; ++i) {
                        b = (b << BigInt(8)) | BigInt(payload[i]);
                    }
                    _offset = offset + _offset + length;
                    return minor === 3 ? -b - BigInt(1) : b;
                }
                else if (minor === 4) {
                    const decimalFraction = decode(at + offset, to);
                    const [exponent, mantissa] = decimalFraction;
                    const normalizer = mantissa < 0 ? -1 : 1;
                    const mantissaStr = "0".repeat(Math.abs(exponent) + 1) + String(BigInt(normalizer) * BigInt(mantissa));
                    let numericString;
                    const sign = mantissa < 0 ? "-" : "";
                    numericString =
                        exponent === 0
                            ? mantissaStr
                            : mantissaStr.slice(0, mantissaStr.length + exponent) + "." + mantissaStr.slice(exponent);
                    numericString = numericString.replace(/^0+/g, "");
                    if (numericString === "") {
                        numericString = "0";
                    }
                    if (numericString[0] === ".") {
                        numericString = "0" + numericString;
                    }
                    numericString = sign + numericString;
                    _offset = offset + _offset;
                    return serde.nv(numericString);
                }
                else {
                    const value = decode(at + offset, to);
                    const valueOffset = _offset;
                    _offset = offset + valueOffset;
                    return tag({ tag: castBigInt(unsignedInt), value });
                }
            }
        case majorUtf8String:
        case majorMap:
        case majorList:
        case majorUnstructuredByteString:
            if (minor === minorIndefinite) {
                switch (major) {
                    case majorUtf8String:
                        return decodeUtf8StringIndefinite(at, to);
                    case majorMap:
                        return decodeMapIndefinite(at, to);
                    case majorList:
                        return decodeListIndefinite(at, to);
                    case majorUnstructuredByteString:
                        return decodeUnstructuredByteStringIndefinite(at, to);
                }
            }
            else {
                switch (major) {
                    case majorUtf8String:
                        return decodeUtf8String(at, to);
                    case majorMap:
                        return decodeMap(at, to);
                    case majorList:
                        return decodeList(at, to);
                    case majorUnstructuredByteString:
                        return decodeUnstructuredByteString(at, to);
                }
            }
        default:
            return decodeSpecial(at, to);
    }
}
function bytesToUtf8(bytes, at, to) {
    if (USE_BUFFER$1 && bytes.constructor?.name === "Buffer") {
        return bytes.toString("utf-8", at, to);
    }
    if (textDecoder) {
        return textDecoder.decode(bytes.subarray(at, to));
    }
    return utilUtf8.toUtf8(bytes.subarray(at, to));
}
function demote(bigInteger) {
    const num = Number(bigInteger);
    if (num < Number.MIN_SAFE_INTEGER || Number.MAX_SAFE_INTEGER < num) {
        console.warn(new Error(`@smithy/core/cbor - truncating BigInt(${bigInteger}) to ${num} with loss of precision.`));
    }
    return num;
}
const minorValueToArgumentLength = {
    [extendedOneByte]: 1,
    [extendedFloat16]: 2,
    [extendedFloat32]: 4,
    [extendedFloat64]: 8,
};
function bytesToFloat16(a, b) {
    const sign = a >> 7;
    const exponent = (a & 0b0111_1100) >> 2;
    const fraction = ((a & 0b0000_0011) << 8) | b;
    const scalar = sign === 0 ? 1 : -1;
    let exponentComponent;
    let summation;
    if (exponent === 0b00000) {
        if (fraction === 0b00000_00000) {
            return 0;
        }
        else {
            exponentComponent = Math.pow(2, 1 - 15);
            summation = 0;
        }
    }
    else if (exponent === 0b11111) {
        if (fraction === 0b00000_00000) {
            return scalar * Infinity;
        }
        else {
            return NaN;
        }
    }
    else {
        exponentComponent = Math.pow(2, exponent - 15);
        summation = 1;
    }
    summation += fraction / 1024;
    return scalar * (exponentComponent * summation);
}
function decodeCount(at, to) {
    const minor = payload[at] & 0b0001_1111;
    if (minor < 24) {
        _offset = 1;
        return minor;
    }
    if (minor === extendedOneByte ||
        minor === extendedFloat16 ||
        minor === extendedFloat32 ||
        minor === extendedFloat64) {
        const countLength = minorValueToArgumentLength[minor];
        _offset = (countLength + 1);
        if (to - at < _offset) {
            throw new Error(`countLength ${countLength} greater than remaining buf len.`);
        }
        const countIndex = at + 1;
        if (countLength === 1) {
            return payload[countIndex];
        }
        else if (countLength === 2) {
            return dataView$1.getUint16(countIndex);
        }
        else if (countLength === 4) {
            return dataView$1.getUint32(countIndex);
        }
        return demote(dataView$1.getBigUint64(countIndex));
    }
    throw new Error(`unexpected minor value ${minor}.`);
}
function decodeUtf8String(at, to) {
    const length = decodeCount(at, to);
    const offset = _offset;
    at += offset;
    if (to - at < length) {
        throw new Error(`string len ${length} greater than remaining buf len.`);
    }
    const value = bytesToUtf8(payload, at, at + length);
    _offset = offset + length;
    return value;
}
function decodeUtf8StringIndefinite(at, to) {
    at += 1;
    const vector = [];
    for (const base = at; at < to;) {
        if (payload[at] === 0b1111_1111) {
            const data = alloc(vector.length);
            data.set(vector, 0);
            _offset = at - base + 2;
            return bytesToUtf8(data, 0, data.length);
        }
        const major = (payload[at] & 0b1110_0000) >> 5;
        const minor = payload[at] & 0b0001_1111;
        if (major !== majorUtf8String) {
            throw new Error(`unexpected major type ${major} in indefinite string.`);
        }
        if (minor === minorIndefinite) {
            throw new Error("nested indefinite string.");
        }
        const bytes = decodeUnstructuredByteString(at, to);
        const length = _offset;
        at += length;
        for (let i = 0; i < bytes.length; ++i) {
            vector.push(bytes[i]);
        }
    }
    throw new Error("expected break marker.");
}
function decodeUnstructuredByteString(at, to) {
    const length = decodeCount(at, to);
    const offset = _offset;
    at += offset;
    if (to - at < length) {
        throw new Error(`unstructured byte string len ${length} greater than remaining buf len.`);
    }
    const value = payload.subarray(at, at + length);
    _offset = offset + length;
    return value;
}
function decodeUnstructuredByteStringIndefinite(at, to) {
    at += 1;
    const vector = [];
    for (const base = at; at < to;) {
        if (payload[at] === 0b1111_1111) {
            const data = alloc(vector.length);
            data.set(vector, 0);
            _offset = at - base + 2;
            return data;
        }
        const major = (payload[at] & 0b1110_0000) >> 5;
        const minor = payload[at] & 0b0001_1111;
        if (major !== majorUnstructuredByteString) {
            throw new Error(`unexpected major type ${major} in indefinite string.`);
        }
        if (minor === minorIndefinite) {
            throw new Error("nested indefinite string.");
        }
        const bytes = decodeUnstructuredByteString(at, to);
        const length = _offset;
        at += length;
        for (let i = 0; i < bytes.length; ++i) {
            vector.push(bytes[i]);
        }
    }
    throw new Error("expected break marker.");
}
function decodeList(at, to) {
    const listDataLength = decodeCount(at, to);
    const offset = _offset;
    at += offset;
    const base = at;
    const list = Array(listDataLength);
    for (let i = 0; i < listDataLength; ++i) {
        const item = decode(at, to);
        const itemOffset = _offset;
        list[i] = item;
        at += itemOffset;
    }
    _offset = offset + (at - base);
    return list;
}
function decodeListIndefinite(at, to) {
    at += 1;
    const list = [];
    for (const base = at; at < to;) {
        if (payload[at] === 0b1111_1111) {
            _offset = at - base + 2;
            return list;
        }
        const item = decode(at, to);
        const n = _offset;
        at += n;
        list.push(item);
    }
    throw new Error("expected break marker.");
}
function decodeMap(at, to) {
    const mapDataLength = decodeCount(at, to);
    const offset = _offset;
    at += offset;
    const base = at;
    const map = {};
    for (let i = 0; i < mapDataLength; ++i) {
        if (at >= to) {
            throw new Error("unexpected end of map payload.");
        }
        const major = (payload[at] & 0b1110_0000) >> 5;
        if (major !== majorUtf8String) {
            throw new Error(`unexpected major type ${major} for map key at index ${at}.`);
        }
        const key = decode(at, to);
        at += _offset;
        const value = decode(at, to);
        at += _offset;
        map[key] = value;
    }
    _offset = offset + (at - base);
    return map;
}
function decodeMapIndefinite(at, to) {
    at += 1;
    const base = at;
    const map = {};
    for (; at < to;) {
        if (at >= to) {
            throw new Error("unexpected end of map payload.");
        }
        if (payload[at] === 0b1111_1111) {
            _offset = at - base + 2;
            return map;
        }
        const major = (payload[at] & 0b1110_0000) >> 5;
        if (major !== majorUtf8String) {
            throw new Error(`unexpected major type ${major} for map key.`);
        }
        const key = decode(at, to);
        at += _offset;
        const value = decode(at, to);
        at += _offset;
        map[key] = value;
    }
    throw new Error("expected break marker.");
}
function decodeSpecial(at, to) {
    const minor = payload[at] & 0b0001_1111;
    switch (minor) {
        case specialTrue:
        case specialFalse:
            _offset = 1;
            return minor === specialTrue;
        case specialNull:
            _offset = 1;
            return null;
        case specialUndefined:
            _offset = 1;
            return null;
        case extendedFloat16:
            if (to - at < 3) {
                throw new Error("incomplete float16 at end of buf.");
            }
            _offset = 3;
            return bytesToFloat16(payload[at + 1], payload[at + 2]);
        case extendedFloat32:
            if (to - at < 5) {
                throw new Error("incomplete float32 at end of buf.");
            }
            _offset = 5;
            return dataView$1.getFloat32(at + 1);
        case extendedFloat64:
            if (to - at < 9) {
                throw new Error("incomplete float64 at end of buf.");
            }
            _offset = 9;
            return dataView$1.getFloat64(at + 1);
        default:
            throw new Error(`unexpected minor value ${minor}.`);
    }
}
function castBigInt(bigInt) {
    if (typeof bigInt === "number") {
        return bigInt;
    }
    const num = Number(bigInt);
    if (Number.MIN_SAFE_INTEGER <= num && num <= Number.MAX_SAFE_INTEGER) {
        return num;
    }
    return bigInt;
}

const USE_BUFFER = typeof Buffer !== "undefined";
const initialSize = 2048;
let data = alloc(initialSize);
let dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
let cursor = 0;
function ensureSpace(bytes) {
    const remaining = data.byteLength - cursor;
    if (remaining < bytes) {
        if (cursor < 16_000_000) {
            resize(Math.max(data.byteLength * 4, data.byteLength + bytes));
        }
        else {
            resize(data.byteLength + bytes + 16_000_000);
        }
    }
}
function toUint8Array() {
    const out = alloc(cursor);
    out.set(data.subarray(0, cursor), 0);
    cursor = 0;
    return out;
}
function resize(size) {
    const old = data;
    data = alloc(size);
    if (old) {
        if (old.copy) {
            old.copy(data, 0, 0, old.byteLength);
        }
        else {
            data.set(old, 0);
        }
    }
    dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
}
function encodeHeader(major, value) {
    if (value < 24) {
        data[cursor++] = (major << 5) | value;
    }
    else if (value < 1 << 8) {
        data[cursor++] = (major << 5) | 24;
        data[cursor++] = value;
    }
    else if (value < 1 << 16) {
        data[cursor++] = (major << 5) | extendedFloat16;
        dataView.setUint16(cursor, value);
        cursor += 2;
    }
    else if (value < 2 ** 32) {
        data[cursor++] = (major << 5) | extendedFloat32;
        dataView.setUint32(cursor, value);
        cursor += 4;
    }
    else {
        data[cursor++] = (major << 5) | extendedFloat64;
        dataView.setBigUint64(cursor, typeof value === "bigint" ? value : BigInt(value));
        cursor += 8;
    }
}
function encode(_input) {
    const encodeStack = [_input];
    while (encodeStack.length) {
        const input = encodeStack.pop();
        ensureSpace(typeof input === "string" ? input.length * 4 : 64);
        if (typeof input === "string") {
            if (USE_BUFFER) {
                encodeHeader(majorUtf8String, Buffer.byteLength(input));
                cursor += data.write(input, cursor);
            }
            else {
                const bytes = utilUtf8.fromUtf8(input);
                encodeHeader(majorUtf8String, bytes.byteLength);
                data.set(bytes, cursor);
                cursor += bytes.byteLength;
            }
            continue;
        }
        else if (typeof input === "number") {
            if (Number.isInteger(input)) {
                const nonNegative = input >= 0;
                const major = nonNegative ? majorUint64 : majorNegativeInt64;
                const value = nonNegative ? input : -input - 1;
                if (value < 24) {
                    data[cursor++] = (major << 5) | value;
                }
                else if (value < 256) {
                    data[cursor++] = (major << 5) | 24;
                    data[cursor++] = value;
                }
                else if (value < 65536) {
                    data[cursor++] = (major << 5) | extendedFloat16;
                    data[cursor++] = value >> 8;
                    data[cursor++] = value;
                }
                else if (value < 4294967296) {
                    data[cursor++] = (major << 5) | extendedFloat32;
                    dataView.setUint32(cursor, value);
                    cursor += 4;
                }
                else {
                    data[cursor++] = (major << 5) | extendedFloat64;
                    dataView.setBigUint64(cursor, BigInt(value));
                    cursor += 8;
                }
                continue;
            }
            data[cursor++] = (majorSpecial << 5) | extendedFloat64;
            dataView.setFloat64(cursor, input);
            cursor += 8;
            continue;
        }
        else if (typeof input === "bigint") {
            const nonNegative = input >= 0;
            const major = nonNegative ? majorUint64 : majorNegativeInt64;
            const value = nonNegative ? input : -input - BigInt(1);
            const n = Number(value);
            if (n < 24) {
                data[cursor++] = (major << 5) | n;
            }
            else if (n < 256) {
                data[cursor++] = (major << 5) | 24;
                data[cursor++] = n;
            }
            else if (n < 65536) {
                data[cursor++] = (major << 5) | extendedFloat16;
                data[cursor++] = n >> 8;
                data[cursor++] = n & 0b1111_1111;
            }
            else if (n < 4294967296) {
                data[cursor++] = (major << 5) | extendedFloat32;
                dataView.setUint32(cursor, n);
                cursor += 4;
            }
            else if (value < BigInt("18446744073709551616")) {
                data[cursor++] = (major << 5) | extendedFloat64;
                dataView.setBigUint64(cursor, value);
                cursor += 8;
            }
            else {
                const binaryBigInt = value.toString(2);
                const bigIntBytes = new Uint8Array(Math.ceil(binaryBigInt.length / 8));
                let b = value;
                let i = 0;
                while (bigIntBytes.byteLength - ++i >= 0) {
                    bigIntBytes[bigIntBytes.byteLength - i] = Number(b & BigInt(255));
                    b >>= BigInt(8);
                }
                ensureSpace(bigIntBytes.byteLength * 2);
                data[cursor++] = nonNegative ? 0b110_00010 : 0b110_00011;
                if (USE_BUFFER) {
                    encodeHeader(majorUnstructuredByteString, Buffer.byteLength(bigIntBytes));
                }
                else {
                    encodeHeader(majorUnstructuredByteString, bigIntBytes.byteLength);
                }
                data.set(bigIntBytes, cursor);
                cursor += bigIntBytes.byteLength;
            }
            continue;
        }
        else if (input === null) {
            data[cursor++] = (majorSpecial << 5) | specialNull;
            continue;
        }
        else if (typeof input === "boolean") {
            data[cursor++] = (majorSpecial << 5) | (input ? specialTrue : specialFalse);
            continue;
        }
        else if (typeof input === "undefined") {
            throw new Error("@smithy/core/cbor: client may not serialize undefined value.");
        }
        else if (Array.isArray(input)) {
            for (let i = input.length - 1; i >= 0; --i) {
                encodeStack.push(input[i]);
            }
            encodeHeader(majorList, input.length);
            continue;
        }
        else if (typeof input.byteLength === "number") {
            ensureSpace(input.length * 2);
            encodeHeader(majorUnstructuredByteString, input.length);
            data.set(input, cursor);
            cursor += input.byteLength;
            continue;
        }
        else if (typeof input === "object") {
            if (input instanceof serde.NumericValue) {
                const decimalIndex = input.string.indexOf(".");
                const exponent = decimalIndex === -1 ? 0 : decimalIndex - input.string.length + 1;
                const mantissa = BigInt(input.string.replace(".", ""));
                data[cursor++] = 0b110_00100;
                encodeStack.push(mantissa);
                encodeStack.push(exponent);
                encodeHeader(majorList, 2);
                continue;
            }
            if (input[tagSymbol]) {
                if ("tag" in input && "value" in input) {
                    encodeStack.push(input.value);
                    encodeHeader(majorTag, input.tag);
                    continue;
                }
                else {
                    throw new Error("tag encountered with missing fields, need 'tag' and 'value', found: " + JSON.stringify(input));
                }
            }
            const keys = Object.keys(input);
            for (let i = keys.length - 1; i >= 0; --i) {
                const key = keys[i];
                encodeStack.push(input[key]);
                encodeStack.push(key);
            }
            encodeHeader(majorMap, keys.length);
            continue;
        }
        throw new Error(`data type ${input?.constructor?.name ?? typeof input} not compatible for encoding.`);
    }
}

const cbor = {
    deserialize(payload) {
        setPayload(payload);
        return decode(0, payload.length);
    },
    serialize(input) {
        try {
            encode(input);
            return toUint8Array();
        }
        catch (e) {
            toUint8Array();
            throw e;
        }
    },
    resizeEncodingBuffer(size) {
        resize(size);
    },
};

const parseCborBody = (streamBody, context) => {
    return protocols.collectBody(streamBody, context).then(async (bytes) => {
        if (bytes.length) {
            try {
                return cbor.deserialize(bytes);
            }
            catch (e) {
                Object.defineProperty(e, "$responseBodyText", {
                    value: context.utf8Encoder(bytes),
                });
                throw e;
            }
        }
        return {};
    });
};
const dateToTag = (date) => {
    return tag({
        tag: 1,
        value: date.getTime() / 1000,
    });
};
const parseCborErrorBody = async (errorBody, context) => {
    const value = await parseCborBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const loadSmithyRpcV2CborErrorCode = (output, data) => {
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    let codeKey;
    for (const key in data) {
        if (key.toLowerCase() === "code") {
            codeKey = key;
            break;
        }
    }
    if (codeKey && data[codeKey] !== undefined) {
        return sanitizeErrorCode(data[codeKey]);
    }
};
const checkCborResponse = (response) => {
    if (String(response.headers["smithy-protocol"]).toLowerCase() !== "rpc-v2-cbor") {
        throw new Error("Malformed RPCv2 CBOR response, status: " + response.statusCode);
    }
};
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const endpoint = await context.endpoint();
    const { hostname, protocol = "https", port, path: basePath } = endpoint;
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers: {
            ...headers,
        },
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (endpoint.headers) {
        for (const name in endpoint.headers) {
            contents.headers[name] = endpoint.headers[name];
        }
    }
    if (body !== undefined) {
        contents.body = body;
        try {
            contents.headers["content-length"] = String(utilBodyLengthBrowser.calculateBodyLength(body));
        }
        catch (e) { }
    }
    return new protocolHttp.HttpRequest(contents);
};

class CborCodec extends protocols.SerdeContext {
    createSerializer() {
        const serializer = new CborShapeSerializer();
        serializer.setSerdeContext(this.serdeContext);
        return serializer;
    }
    createDeserializer() {
        const deserializer = new CborShapeDeserializer();
        deserializer.setSerdeContext(this.serdeContext);
        return deserializer;
    }
}
class CborShapeSerializer extends protocols.SerdeContext {
    value;
    write(schema, value) {
        this.value = this.serialize(schema, value);
    }
    serialize(schema$1, source) {
        const ns = schema.NormalizedSchema.of(schema$1);
        if (source == null) {
            if (ns.isIdempotencyToken()) {
                return serde.generateIdempotencyToken();
            }
            return source;
        }
        if (ns.isBlobSchema()) {
            if (typeof source === "string") {
                return (this.serdeContext?.base64Decoder ?? utilBase64.fromBase64)(source);
            }
            return source;
        }
        if (ns.isTimestampSchema()) {
            if (typeof source === "number" || typeof source === "bigint") {
                return dateToTag(new Date((Number(source) / 1000) | 0));
            }
            return dateToTag(source);
        }
        if (typeof source === "function" || typeof source === "object") {
            const sourceObject = source;
            if (ns.isListSchema() && Array.isArray(sourceObject)) {
                const sparse = !!ns.getMergedTraits().sparse;
                const newArray = [];
                let i = 0;
                for (const item of sourceObject) {
                    const value = this.serialize(ns.getValueSchema(), item);
                    if (value != null || sparse) {
                        newArray[i++] = value;
                    }
                }
                return newArray;
            }
            if (sourceObject instanceof Date) {
                return dateToTag(sourceObject);
            }
            const newObject = {};
            if (ns.isMapSchema()) {
                const sparse = !!ns.getMergedTraits().sparse;
                for (const key in sourceObject) {
                    const value = this.serialize(ns.getValueSchema(), sourceObject[key]);
                    if (value != null || sparse) {
                        newObject[key] = value;
                    }
                }
            }
            else if (ns.isStructSchema()) {
                for (const [key, memberSchema] of ns.structIterator()) {
                    const value = this.serialize(memberSchema, sourceObject[key]);
                    if (value != null) {
                        newObject[key] = value;
                    }
                }
                const isUnion = ns.isUnionSchema();
                if (isUnion && Array.isArray(sourceObject.$unknown)) {
                    const [k, v] = sourceObject.$unknown;
                    newObject[k] = v;
                }
                else if (typeof sourceObject.__type === "string") {
                    for (const k in sourceObject) {
                        if (!(k in newObject)) {
                            newObject[k] = this.serialize(15, sourceObject[k]);
                        }
                    }
                }
            }
            else if (ns.isDocumentSchema()) {
                for (const key in sourceObject) {
                    newObject[key] = this.serialize(ns.getValueSchema(), sourceObject[key]);
                }
            }
            else if (ns.isBigDecimalSchema()) {
                return sourceObject;
            }
            return newObject;
        }
        return source;
    }
    flush() {
        const buffer = cbor.serialize(this.value);
        this.value = undefined;
        return buffer;
    }
}
class CborShapeDeserializer extends protocols.SerdeContext {
    read(schema, bytes) {
        const data = cbor.deserialize(bytes);
        return this.readValue(schema, data);
    }
    readValue(_schema, value) {
        const ns = schema.NormalizedSchema.of(_schema);
        if (ns.isTimestampSchema()) {
            if (typeof value === "number") {
                return serde._parseEpochTimestamp(value);
            }
            if (typeof value === "object") {
                if (value.tag === 1 && "value" in value) {
                    return serde._parseEpochTimestamp(value.value);
                }
            }
        }
        if (ns.isBlobSchema()) {
            if (typeof value === "string") {
                return (this.serdeContext?.base64Decoder ?? utilBase64.fromBase64)(value);
            }
            return value;
        }
        if (typeof value === "undefined" ||
            typeof value === "boolean" ||
            typeof value === "number" ||
            typeof value === "string" ||
            typeof value === "bigint" ||
            typeof value === "symbol") {
            return value;
        }
        else if (typeof value === "object") {
            if (value === null) {
                return null;
            }
            if ("byteLength" in value) {
                return value;
            }
            if (value instanceof Date) {
                return value;
            }
            if (ns.isDocumentSchema()) {
                return value;
            }
            if (ns.isListSchema()) {
                const newArray = [];
                const memberSchema = ns.getValueSchema();
                for (const item of value) {
                    const itemValue = this.readValue(memberSchema, item);
                    newArray.push(itemValue);
                }
                return newArray;
            }
            const newObject = {};
            if (ns.isMapSchema()) {
                const targetSchema = ns.getValueSchema();
                for (const key in value) {
                    const itemValue = this.readValue(targetSchema, value[key]);
                    newObject[key] = itemValue;
                }
            }
            else if (ns.isStructSchema()) {
                const isUnion = ns.isUnionSchema();
                let keys;
                if (isUnion) {
                    keys = new Set();
                    for (const k in value) {
                        if (k !== "__type") {
                            keys.add(k);
                        }
                    }
                }
                for (const [key, memberSchema] of ns.structIterator()) {
                    if (isUnion) {
                        keys.delete(key);
                    }
                    if (value[key] != null) {
                        newObject[key] = this.readValue(memberSchema, value[key]);
                    }
                }
                if (isUnion && keys?.size === 1) {
                    let newObjectEmpty = true;
                    for (const _ in newObject) {
                        newObjectEmpty = false;
                        break;
                    }
                    if (newObjectEmpty) {
                        const k = keys.values().next().value;
                        newObject.$unknown = [k, value[k]];
                    }
                }
                else if (typeof value.__type === "string") {
                    for (const k in value) {
                        if (!(k in newObject)) {
                            newObject[k] = value[k];
                        }
                    }
                }
            }
            else if (value instanceof serde.NumericValue) {
                return value;
            }
            return newObject;
        }
        else {
            return value;
        }
    }
}

class SmithyRpcV2CborProtocol extends protocols.RpcProtocol {
    codec = new CborCodec();
    serializer = this.codec.createSerializer();
    deserializer = this.codec.createDeserializer();
    constructor({ defaultNamespace, errorTypeRegistries, }) {
        super({ defaultNamespace, errorTypeRegistries });
    }
    getShapeId() {
        return "smithy.protocols#rpcv2Cbor";
    }
    getPayloadCodec() {
        return this.codec;
    }
    async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        Object.assign(request.headers, {
            "content-type": this.getDefaultContentType(),
            "smithy-protocol": "rpc-v2-cbor",
            accept: this.getDefaultContentType(),
        });
        if (schema.deref(operationSchema.input) === "unit") {
            delete request.body;
            delete request.headers["content-type"];
        }
        else {
            if (!request.body) {
                this.serializer.write(15, {});
                request.body = this.serializer.flush();
            }
            try {
                request.headers["content-length"] = String(request.body.byteLength);
            }
            catch (e) { }
        }
        const { service, operation } = utilMiddleware.getSmithyContext(context);
        const path = `/service/${service}/operation/${operation}`;
        if (request.path.endsWith("/")) {
            request.path += path.slice(1);
        }
        else {
            request.path += path;
        }
        return request;
    }
    async deserializeResponse(operationSchema, context, response) {
        return super.deserializeResponse(operationSchema, context, response);
    }
    async handleError(operationSchema, context, response, dataObject, metadata) {
        const errorName = loadSmithyRpcV2CborErrorCode(response, dataObject) ?? "Unknown";
        const errorMetadata = {
            $metadata: metadata,
            $fault: response.statusCode <= 500 ? "client" : "server",
        };
        let namespace = this.options.defaultNamespace;
        if (errorName.includes("#")) {
            [namespace] = errorName.split("#");
        }
        const registry = this.compositeErrorRegistry;
        const nsRegistry = schema.TypeRegistry.for(namespace);
        registry.copyFrom(nsRegistry);
        let errorSchema;
        try {
            errorSchema = registry.getSchema(errorName);
        }
        catch (e) {
            if (dataObject.Message) {
                dataObject.message = dataObject.Message;
            }
            const syntheticRegistry = schema.TypeRegistry.for("smithy.ts.sdk.synthetic." + namespace);
            registry.copyFrom(syntheticRegistry);
            const baseExceptionSchema = registry.getBaseException();
            if (baseExceptionSchema) {
                const ErrorCtor = registry.getErrorCtor(baseExceptionSchema);
                throw Object.assign(new ErrorCtor({ name: errorName }), errorMetadata, dataObject);
            }
            throw Object.assign(new Error(errorName), errorMetadata, dataObject);
        }
        const ns = schema.NormalizedSchema.of(errorSchema);
        const ErrorCtor = registry.getErrorCtor(errorSchema);
        const message = dataObject.message ?? dataObject.Message ?? "Unknown";
        const exception = new ErrorCtor(message);
        const output = {};
        for (const [name, member] of ns.structIterator()) {
            output[name] = this.deserializer.readValue(member, dataObject[name]);
        }
        throw Object.assign(exception, errorMetadata, {
            $fault: ns.getMergedTraits().error,
            message,
        }, output);
    }
    getDefaultContentType() {
        return "application/cbor";
    }
}

exports.CborCodec = CborCodec;
exports.CborShapeDeserializer = CborShapeDeserializer;
exports.CborShapeSerializer = CborShapeSerializer;
exports.SmithyRpcV2CborProtocol = SmithyRpcV2CborProtocol;
exports.buildHttpRpcRequest = buildHttpRpcRequest;
exports.cbor = cbor;
exports.checkCborResponse = checkCborResponse;
exports.dateToTag = dateToTag;
exports.loadSmithyRpcV2CborErrorCode = loadSmithyRpcV2CborErrorCode;
exports.parseCborBody = parseCborBody;
exports.parseCborErrorBody = parseCborErrorBody;
exports.tag = tag;
exports.tagSymbol = tagSymbol;


/***/ }),

/***/ 9745:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var urlParser = __nccwpck_require__(4681);

const toEndpointV1 = (endpoint) => {
    if (typeof endpoint === "object") {
        if ("url" in endpoint) {
            const v1Endpoint = urlParser.parseUrl(endpoint.url);
            if (endpoint.headers) {
                v1Endpoint.headers = {};
                for (const name in endpoint.headers) {
                    v1Endpoint.headers[name.toLowerCase()] = endpoint.headers[name].join(", ");
                }
            }
            return v1Endpoint;
        }
        return endpoint;
    }
    return urlParser.parseUrl(endpoint);
};

exports.toEndpointV1 = toEndpointV1;


/***/ }),

/***/ 2241:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var utilStream = __nccwpck_require__(6607);
var schema = __nccwpck_require__(9826);
var serde = __nccwpck_require__(7669);
var protocolHttp = __nccwpck_require__(4418);
var utilBase64 = __nccwpck_require__(5600);
var utilUtf8 = __nccwpck_require__(1895);

const collectBody = async (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return utilStream.Uint8ArrayBlobAdapter.mutate(streamBody);
    }
    if (!streamBody) {
        return utilStream.Uint8ArrayBlobAdapter.mutate(new Uint8Array());
    }
    const fromContext = context.streamCollector(streamBody);
    return utilStream.Uint8ArrayBlobAdapter.mutate(await fromContext);
};

function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
}

class SerdeContext {
    serdeContext;
    setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
    }
}

class HttpProtocol extends SerdeContext {
    options;
    compositeErrorRegistry;
    constructor(options) {
        super();
        this.options = options;
        this.compositeErrorRegistry = schema.TypeRegistry.for(options.defaultNamespace);
        for (const etr of options.errorTypeRegistries ?? []) {
            this.compositeErrorRegistry.copyFrom(etr);
        }
    }
    getRequestType() {
        return protocolHttp.HttpRequest;
    }
    getResponseType() {
        return protocolHttp.HttpResponse;
    }
    setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
        this.serializer.setSerdeContext(serdeContext);
        this.deserializer.setSerdeContext(serdeContext);
        if (this.getPayloadCodec()) {
            this.getPayloadCodec().setSerdeContext(serdeContext);
        }
    }
    updateServiceEndpoint(request, endpoint) {
        if ("url" in endpoint) {
            request.protocol = endpoint.url.protocol;
            request.hostname = endpoint.url.hostname;
            request.port = endpoint.url.port ? Number(endpoint.url.port) : undefined;
            request.path = endpoint.url.pathname;
            request.fragment = endpoint.url.hash || void 0;
            request.username = endpoint.url.username || void 0;
            request.password = endpoint.url.password || void 0;
            if (!request.query) {
                request.query = {};
            }
            for (const [k, v] of endpoint.url.searchParams.entries()) {
                request.query[k] = v;
            }
            if (endpoint.headers) {
                for (const name in endpoint.headers) {
                    request.headers[name] = endpoint.headers[name].join(", ");
                }
            }
            return request;
        }
        else {
            request.protocol = endpoint.protocol;
            request.hostname = endpoint.hostname;
            request.port = endpoint.port ? Number(endpoint.port) : undefined;
            request.path = endpoint.path;
            request.query = {
                ...endpoint.query,
            };
            if (endpoint.headers) {
                for (const name in endpoint.headers) {
                    request.headers[name] = endpoint.headers[name];
                }
            }
            return request;
        }
    }
    setHostPrefix(request, operationSchema, input) {
        if (this.serdeContext?.disableHostPrefix) {
            return;
        }
        const inputNs = schema.NormalizedSchema.of(operationSchema.input);
        const opTraits = schema.translateTraits(operationSchema.traits ?? {});
        if (opTraits.endpoint) {
            let hostPrefix = opTraits.endpoint?.[0];
            if (typeof hostPrefix === "string") {
                for (const [name, member] of inputNs.structIterator()) {
                    if (!member.getMergedTraits().hostLabel) {
                        continue;
                    }
                    const replacement = input[name];
                    if (typeof replacement !== "string") {
                        throw new Error(`@smithy/core/schema - ${name} in input must be a string as hostLabel.`);
                    }
                    hostPrefix = hostPrefix.replace(`{${name}}`, replacement);
                }
                request.hostname = hostPrefix + request.hostname;
            }
        }
    }
    deserializeMetadata(output) {
        return {
            httpStatusCode: output.statusCode,
            requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
            extendedRequestId: output.headers["x-amz-id-2"],
            cfId: output.headers["x-amz-cf-id"],
        };
    }
    async serializeEventStream({ eventStream, requestSchema, initialRequest, }) {
        const eventStreamSerde = await this.loadEventStreamCapability();
        return eventStreamSerde.serializeEventStream({
            eventStream,
            requestSchema,
            initialRequest,
        });
    }
    async deserializeEventStream({ response, responseSchema, initialResponseContainer, }) {
        const eventStreamSerde = await this.loadEventStreamCapability();
        return eventStreamSerde.deserializeEventStream({
            response,
            responseSchema,
            initialResponseContainer,
        });
    }
    async loadEventStreamCapability() {
        const { EventStreamSerde } = await __nccwpck_require__.e(/* import() */ 702).then(__nccwpck_require__.t.bind(__nccwpck_require__, 3702, 19));
        return new EventStreamSerde({
            marshaller: this.getEventStreamMarshaller(),
            serializer: this.serializer,
            deserializer: this.deserializer,
            serdeContext: this.serdeContext,
            defaultContentType: this.getDefaultContentType(),
        });
    }
    getDefaultContentType() {
        throw new Error(`@smithy/core/protocols - ${this.constructor.name} getDefaultContentType() implementation missing.`);
    }
    async deserializeHttpMessage(schema, context, response, arg4, arg5) {
        return [];
    }
    getEventStreamMarshaller() {
        const context = this.serdeContext;
        if (!context.eventStreamMarshaller) {
            throw new Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
        }
        return context.eventStreamMarshaller;
    }
}

class HttpBindingProtocol extends HttpProtocol {
    async serializeRequest(operationSchema, _input, context) {
        const input = _input && typeof _input === "object" ? _input : {};
        const serializer = this.serializer;
        const query = {};
        const headers = {};
        const endpoint = await context.endpoint();
        const ns = schema.NormalizedSchema.of(operationSchema?.input);
        const payloadMemberNames = [];
        const payloadMemberSchemas = [];
        let hasNonHttpBindingMember = false;
        let payload;
        const request = new protocolHttp.HttpRequest({
            protocol: "",
            hostname: "",
            port: undefined,
            path: "",
            fragment: undefined,
            query: query,
            headers: headers,
            body: undefined,
        });
        if (endpoint) {
            this.updateServiceEndpoint(request, endpoint);
            this.setHostPrefix(request, operationSchema, input);
            const opTraits = schema.translateTraits(operationSchema.traits);
            if (opTraits.http) {
                request.method = opTraits.http[0];
                const [path, search] = opTraits.http[1].split("?");
                if (request.path == "/") {
                    request.path = path;
                }
                else {
                    request.path += path;
                }
                const traitSearchParams = new URLSearchParams(search ?? "");
                for (const [key, value] of traitSearchParams) {
                    query[key] = value;
                }
            }
        }
        for (const [memberName, memberNs] of ns.structIterator()) {
            const memberTraits = memberNs.getMergedTraits() ?? {};
            const inputMemberValue = input[memberName];
            if (inputMemberValue == null && !memberNs.isIdempotencyToken()) {
                if (memberTraits.httpLabel) {
                    if (request.path.includes(`{${memberName}+}`) || request.path.includes(`{${memberName}}`)) {
                        throw new Error(`No value provided for input HTTP label: ${memberName}.`);
                    }
                }
                continue;
            }
            if (memberTraits.httpPayload) {
                const isStreaming = memberNs.isStreaming();
                if (isStreaming) {
                    const isEventStream = memberNs.isStructSchema();
                    if (isEventStream) {
                        if (input[memberName]) {
                            payload = await this.serializeEventStream({
                                eventStream: input[memberName],
                                requestSchema: ns,
                            });
                        }
                    }
                    else {
                        payload = inputMemberValue;
                    }
                }
                else {
                    serializer.write(memberNs, inputMemberValue);
                    payload = serializer.flush();
                }
            }
            else if (memberTraits.httpLabel) {
                serializer.write(memberNs, inputMemberValue);
                const replacement = serializer.flush();
                if (request.path.includes(`{${memberName}+}`)) {
                    request.path = request.path.replace(`{${memberName}+}`, replacement.split("/").map(extendedEncodeURIComponent).join("/"));
                }
                else if (request.path.includes(`{${memberName}}`)) {
                    request.path = request.path.replace(`{${memberName}}`, extendedEncodeURIComponent(replacement));
                }
            }
            else if (memberTraits.httpHeader) {
                serializer.write(memberNs, inputMemberValue);
                headers[memberTraits.httpHeader.toLowerCase()] = String(serializer.flush());
            }
            else if (typeof memberTraits.httpPrefixHeaders === "string") {
                for (const key in inputMemberValue) {
                    const val = inputMemberValue[key];
                    const amalgam = memberTraits.httpPrefixHeaders + key;
                    serializer.write([memberNs.getValueSchema(), { httpHeader: amalgam }], val);
                    headers[amalgam.toLowerCase()] = serializer.flush();
                }
            }
            else if (memberTraits.httpQuery || memberTraits.httpQueryParams) {
                this.serializeQuery(memberNs, inputMemberValue, query);
            }
            else {
                hasNonHttpBindingMember = true;
                payloadMemberNames.push(memberName);
                payloadMemberSchemas.push(memberNs);
            }
        }
        if (hasNonHttpBindingMember && input) {
            const [namespace, name] = (ns.getName(true) ?? "#Unknown").split("#");
            const requiredMembers = ns.getSchema()[6];
            const payloadSchema = [
                3,
                namespace,
                name,
                ns.getMergedTraits(),
                payloadMemberNames,
                payloadMemberSchemas,
                undefined,
            ];
            if (requiredMembers) {
                payloadSchema[6] = requiredMembers;
            }
            else {
                payloadSchema.pop();
            }
            serializer.write(payloadSchema, input);
            payload = serializer.flush();
        }
        request.headers = headers;
        request.query = query;
        request.body = payload;
        return request;
    }
    serializeQuery(ns, data, query) {
        const serializer = this.serializer;
        const traits = ns.getMergedTraits();
        if (traits.httpQueryParams) {
            for (const key in data) {
                if (!(key in query)) {
                    const val = data[key];
                    const valueSchema = ns.getValueSchema();
                    Object.assign(valueSchema.getMergedTraits(), {
                        ...traits,
                        httpQuery: key,
                        httpQueryParams: undefined,
                    });
                    this.serializeQuery(valueSchema, val, query);
                }
            }
            return;
        }
        if (ns.isListSchema()) {
            const sparse = !!ns.getMergedTraits().sparse;
            const buffer = [];
            for (const item of data) {
                serializer.write([ns.getValueSchema(), traits], item);
                const serializable = serializer.flush();
                if (sparse || serializable !== undefined) {
                    buffer.push(serializable);
                }
            }
            query[traits.httpQuery] = buffer;
        }
        else {
            serializer.write([ns, traits], data);
            query[traits.httpQuery] = serializer.flush();
        }
    }
    async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = schema.NormalizedSchema.of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
            const bytes = await collectBody(response.body, context);
            if (bytes.byteLength > 0) {
                Object.assign(dataObject, await deserializer.read(15, bytes));
            }
            await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
            throw new Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
        }
        for (const header in response.headers) {
            const value = response.headers[header];
            delete response.headers[header];
            response.headers[header.toLowerCase()] = value;
        }
        const nonHttpBindingMembers = await this.deserializeHttpMessage(ns, context, response, dataObject);
        if (nonHttpBindingMembers.length) {
            const bytes = await collectBody(response.body, context);
            if (bytes.byteLength > 0) {
                const dataFromBody = await deserializer.read(ns, bytes);
                for (const member of nonHttpBindingMembers) {
                    if (dataFromBody[member] != null) {
                        dataObject[member] = dataFromBody[member];
                    }
                }
            }
        }
        else if (nonHttpBindingMembers.discardResponseBody) {
            await collectBody(response.body, context);
        }
        dataObject.$metadata = this.deserializeMetadata(response);
        return dataObject;
    }
    async deserializeHttpMessage(schema$1, context, response, arg4, arg5) {
        let dataObject;
        if (arg4 instanceof Set) {
            dataObject = arg5;
        }
        else {
            dataObject = arg4;
        }
        let discardResponseBody = true;
        const deserializer = this.deserializer;
        const ns = schema.NormalizedSchema.of(schema$1);
        const nonHttpBindingMembers = [];
        for (const [memberName, memberSchema] of ns.structIterator()) {
            const memberTraits = memberSchema.getMemberTraits();
            if (memberTraits.httpPayload) {
                discardResponseBody = false;
                const isStreaming = memberSchema.isStreaming();
                if (isStreaming) {
                    const isEventStream = memberSchema.isStructSchema();
                    if (isEventStream) {
                        dataObject[memberName] = await this.deserializeEventStream({
                            response,
                            responseSchema: ns,
                        });
                    }
                    else {
                        dataObject[memberName] = utilStream.sdkStreamMixin(response.body);
                    }
                }
                else if (response.body) {
                    const bytes = await collectBody(response.body, context);
                    if (bytes.byteLength > 0) {
                        dataObject[memberName] = await deserializer.read(memberSchema, bytes);
                    }
                }
            }
            else if (memberTraits.httpHeader) {
                const key = String(memberTraits.httpHeader).toLowerCase();
                const value = response.headers[key];
                if (null != value) {
                    if (memberSchema.isListSchema()) {
                        const headerListValueSchema = memberSchema.getValueSchema();
                        headerListValueSchema.getMergedTraits().httpHeader = key;
                        let sections;
                        if (headerListValueSchema.isTimestampSchema() &&
                            headerListValueSchema.getSchema() === 4) {
                            sections = serde.splitEvery(value, ",", 2);
                        }
                        else {
                            sections = serde.splitHeader(value);
                        }
                        const list = [];
                        for (const section of sections) {
                            list.push(await deserializer.read(headerListValueSchema, section.trim()));
                        }
                        dataObject[memberName] = list;
                    }
                    else {
                        dataObject[memberName] = await deserializer.read(memberSchema, value);
                    }
                }
            }
            else if (memberTraits.httpPrefixHeaders !== undefined) {
                dataObject[memberName] = {};
                for (const header in response.headers) {
                    if (header.startsWith(memberTraits.httpPrefixHeaders)) {
                        const value = response.headers[header];
                        const valueSchema = memberSchema.getValueSchema();
                        valueSchema.getMergedTraits().httpHeader = header;
                        dataObject[memberName][header.slice(memberTraits.httpPrefixHeaders.length)] = await deserializer.read(valueSchema, value);
                    }
                }
            }
            else if (memberTraits.httpResponseCode) {
                dataObject[memberName] = response.statusCode;
            }
            else {
                nonHttpBindingMembers.push(memberName);
            }
        }
        nonHttpBindingMembers.discardResponseBody = discardResponseBody;
        return nonHttpBindingMembers;
    }
}

class RpcProtocol extends HttpProtocol {
    async serializeRequest(operationSchema, _input, context) {
        const serializer = this.serializer;
        const query = {};
        const headers = {};
        const endpoint = await context.endpoint();
        const ns = schema.NormalizedSchema.of(operationSchema?.input);
        const schema$1 = ns.getSchema();
        let payload;
        const input = _input && typeof _input === "object" ? _input : {};
        const request = new protocolHttp.HttpRequest({
            protocol: "",
            hostname: "",
            port: undefined,
            path: "/",
            fragment: undefined,
            query: query,
            headers: headers,
            body: undefined,
        });
        if (endpoint) {
            this.updateServiceEndpoint(request, endpoint);
            this.setHostPrefix(request, operationSchema, input);
        }
        if (input) {
            const eventStreamMember = ns.getEventStreamMember();
            if (eventStreamMember) {
                if (input[eventStreamMember]) {
                    const initialRequest = {};
                    for (const [memberName, memberSchema] of ns.structIterator()) {
                        if (memberName !== eventStreamMember && input[memberName]) {
                            serializer.write(memberSchema, input[memberName]);
                            initialRequest[memberName] = serializer.flush();
                        }
                    }
                    payload = await this.serializeEventStream({
                        eventStream: input[eventStreamMember],
                        requestSchema: ns,
                        initialRequest,
                    });
                }
            }
            else {
                serializer.write(schema$1, input);
                payload = serializer.flush();
            }
        }
        request.headers = Object.assign(request.headers, headers);
        request.query = query;
        request.body = payload;
        request.method = "POST";
        return request;
    }
    async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = schema.NormalizedSchema.of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
            const bytes = await collectBody(response.body, context);
            if (bytes.byteLength > 0) {
                Object.assign(dataObject, await deserializer.read(15, bytes));
            }
            await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
            throw new Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
        }
        for (const header in response.headers) {
            const value = response.headers[header];
            delete response.headers[header];
            response.headers[header.toLowerCase()] = value;
        }
        const eventStreamMember = ns.getEventStreamMember();
        if (eventStreamMember) {
            dataObject[eventStreamMember] = await this.deserializeEventStream({
                response,
                responseSchema: ns,
                initialResponseContainer: dataObject,
            });
        }
        else {
            const bytes = await collectBody(response.body, context);
            if (bytes.byteLength > 0) {
                Object.assign(dataObject, await deserializer.read(ns, bytes));
            }
        }
        dataObject.$metadata = this.deserializeMetadata(response);
        return dataObject;
    }
}

const resolvedPath = (resolvedPath, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
    if (input != null && input[memberName] !== undefined) {
        const labelValue = labelValueProvider();
        if (labelValue == null || labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
        }
        resolvedPath = resolvedPath.replace(uriLabel, isGreedyLabel
            ? labelValue
                .split("/")
                .map((segment) => extendedEncodeURIComponent(segment))
                .join("/")
            : extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: " + memberName + ".");
    }
    return resolvedPath;
};

function requestBuilder(input, context) {
    return new RequestBuilder(input, context);
}
class RequestBuilder {
    input;
    context;
    query = {};
    method = "";
    headers = {};
    path = "";
    body = null;
    hostname = "";
    resolvePathStack = [];
    constructor(input, context) {
        this.input = input;
        this.context = context;
    }
    async build() {
        const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
        this.path = basePath;
        for (const resolvePath of this.resolvePathStack) {
            resolvePath(this.path);
        }
        return new protocolHttp.HttpRequest({
            protocol,
            hostname: this.hostname || hostname,
            port,
            method: this.method,
            path: this.path,
            query: this.query,
            body: this.body,
            headers: this.headers,
        });
    }
    hn(hostname) {
        this.hostname = hostname;
        return this;
    }
    bp(uriLabel) {
        this.resolvePathStack.push((basePath) => {
            this.path = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
        });
        return this;
    }
    p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
        this.resolvePathStack.push((path) => {
            this.path = resolvedPath(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
        });
        return this;
    }
    h(headers) {
        this.headers = headers;
        return this;
    }
    q(query) {
        this.query = query;
        return this;
    }
    b(body) {
        this.body = body;
        return this;
    }
    m(method) {
        this.method = method;
        return this;
    }
}

function determineTimestampFormat(ns, settings) {
    if (settings.timestampFormat.useTrait) {
        if (ns.isTimestampSchema() &&
            (ns.getSchema() === 5 ||
                ns.getSchema() === 6 ||
                ns.getSchema() === 7)) {
            return ns.getSchema();
        }
    }
    const { httpLabel, httpPrefixHeaders, httpHeader, httpQuery } = ns.getMergedTraits();
    const bindingFormat = settings.httpBindings
        ? typeof httpPrefixHeaders === "string" || Boolean(httpHeader)
            ? 6
            : Boolean(httpQuery) || Boolean(httpLabel)
                ? 5
                : undefined
        : undefined;
    return bindingFormat ?? settings.timestampFormat.default;
}

class FromStringShapeDeserializer extends SerdeContext {
    settings;
    constructor(settings) {
        super();
        this.settings = settings;
    }
    read(_schema, data) {
        const ns = schema.NormalizedSchema.of(_schema);
        if (ns.isListSchema()) {
            return serde.splitHeader(data).map((item) => this.read(ns.getValueSchema(), item));
        }
        if (ns.isBlobSchema()) {
            return (this.serdeContext?.base64Decoder ?? utilBase64.fromBase64)(data);
        }
        if (ns.isTimestampSchema()) {
            const format = determineTimestampFormat(ns, this.settings);
            switch (format) {
                case 5:
                    return serde._parseRfc3339DateTimeWithOffset(data);
                case 6:
                    return serde._parseRfc7231DateTime(data);
                case 7:
                    return serde._parseEpochTimestamp(data);
                default:
                    console.warn("Missing timestamp format, parsing value with Date constructor:", data);
                    return new Date(data);
            }
        }
        if (ns.isStringSchema()) {
            const mediaType = ns.getMergedTraits().mediaType;
            let intermediateValue = data;
            if (mediaType) {
                if (ns.getMergedTraits().httpHeader) {
                    intermediateValue = this.base64ToUtf8(intermediateValue);
                }
                const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
                if (isJson) {
                    intermediateValue = serde.LazyJsonString.from(intermediateValue);
                }
                return intermediateValue;
            }
        }
        if (ns.isNumericSchema()) {
            return Number(data);
        }
        if (ns.isBigIntegerSchema()) {
            return BigInt(data);
        }
        if (ns.isBigDecimalSchema()) {
            return new serde.NumericValue(data, "bigDecimal");
        }
        if (ns.isBooleanSchema()) {
            return String(data).toLowerCase() === "true";
        }
        return data;
    }
    base64ToUtf8(base64String) {
        return (this.serdeContext?.utf8Encoder ?? utilUtf8.toUtf8)((this.serdeContext?.base64Decoder ?? utilBase64.fromBase64)(base64String));
    }
}

class HttpInterceptingShapeDeserializer extends SerdeContext {
    codecDeserializer;
    stringDeserializer;
    constructor(codecDeserializer, codecSettings) {
        super();
        this.codecDeserializer = codecDeserializer;
        this.stringDeserializer = new FromStringShapeDeserializer(codecSettings);
    }
    setSerdeContext(serdeContext) {
        this.stringDeserializer.setSerdeContext(serdeContext);
        this.codecDeserializer.setSerdeContext(serdeContext);
        this.serdeContext = serdeContext;
    }
    read(schema$1, data) {
        const ns = schema.NormalizedSchema.of(schema$1);
        const traits = ns.getMergedTraits();
        const toString = this.serdeContext?.utf8Encoder ?? utilUtf8.toUtf8;
        if (traits.httpHeader || traits.httpResponseCode) {
            return this.stringDeserializer.read(ns, toString(data));
        }
        if (traits.httpPayload) {
            if (ns.isBlobSchema()) {
                const toBytes = this.serdeContext?.utf8Decoder ?? utilUtf8.fromUtf8;
                if (typeof data === "string") {
                    return toBytes(data);
                }
                return data;
            }
            else if (ns.isStringSchema()) {
                if ("byteLength" in data) {
                    return toString(data);
                }
                return data;
            }
        }
        return this.codecDeserializer.read(ns, data);
    }
}

class ToStringShapeSerializer extends SerdeContext {
    settings;
    stringBuffer = "";
    constructor(settings) {
        super();
        this.settings = settings;
    }
    write(schema$1, value) {
        const ns = schema.NormalizedSchema.of(schema$1);
        switch (typeof value) {
            case "object":
                if (value === null) {
                    this.stringBuffer = "null";
                    return;
                }
                if (ns.isTimestampSchema()) {
                    if (!(value instanceof Date)) {
                        throw new Error(`@smithy/core/protocols - received non-Date value ${value} when schema expected Date in ${ns.getName(true)}`);
                    }
                    const format = determineTimestampFormat(ns, this.settings);
                    switch (format) {
                        case 5:
                            this.stringBuffer = value.toISOString().replace(".000Z", "Z");
                            break;
                        case 6:
                            this.stringBuffer = serde.dateToUtcString(value);
                            break;
                        case 7:
                            this.stringBuffer = String(value.getTime() / 1000);
                            break;
                        default:
                            console.warn("Missing timestamp format, using epoch seconds", value);
                            this.stringBuffer = String(value.getTime() / 1000);
                    }
                    return;
                }
                if (ns.isBlobSchema() && "byteLength" in value) {
                    this.stringBuffer = (this.serdeContext?.base64Encoder ?? utilBase64.toBase64)(value);
                    return;
                }
                if (ns.isListSchema() && Array.isArray(value)) {
                    let buffer = "";
                    for (const item of value) {
                        this.write([ns.getValueSchema(), ns.getMergedTraits()], item);
                        const headerItem = this.flush();
                        const serialized = ns.getValueSchema().isTimestampSchema() ? headerItem : serde.quoteHeader(headerItem);
                        if (buffer !== "") {
                            buffer += ", ";
                        }
                        buffer += serialized;
                    }
                    this.stringBuffer = buffer;
                    return;
                }
                this.stringBuffer = JSON.stringify(value, null, 2);
                break;
            case "string":
                const mediaType = ns.getMergedTraits().mediaType;
                let intermediateValue = value;
                if (mediaType) {
                    const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
                    if (isJson) {
                        intermediateValue = serde.LazyJsonString.from(intermediateValue);
                    }
                    if (ns.getMergedTraits().httpHeader) {
                        this.stringBuffer = (this.serdeContext?.base64Encoder ?? utilBase64.toBase64)(intermediateValue.toString());
                        return;
                    }
                }
                this.stringBuffer = value;
                break;
            default:
                if (ns.isIdempotencyToken()) {
                    this.stringBuffer = serde.generateIdempotencyToken();
                }
                else {
                    this.stringBuffer = String(value);
                }
        }
    }
    flush() {
        const buffer = this.stringBuffer;
        this.stringBuffer = "";
        return buffer;
    }
}

class HttpInterceptingShapeSerializer {
    codecSerializer;
    stringSerializer;
    buffer;
    constructor(codecSerializer, codecSettings, stringSerializer = new ToStringShapeSerializer(codecSettings)) {
        this.codecSerializer = codecSerializer;
        this.stringSerializer = stringSerializer;
    }
    setSerdeContext(serdeContext) {
        this.codecSerializer.setSerdeContext(serdeContext);
        this.stringSerializer.setSerdeContext(serdeContext);
    }
    write(schema$1, value) {
        const ns = schema.NormalizedSchema.of(schema$1);
        const traits = ns.getMergedTraits();
        if (traits.httpHeader || traits.httpLabel || traits.httpQuery) {
            this.stringSerializer.write(ns, value);
            this.buffer = this.stringSerializer.flush();
            return;
        }
        return this.codecSerializer.write(ns, value);
    }
    flush() {
        if (this.buffer !== undefined) {
            const buffer = this.buffer;
            this.buffer = undefined;
            return buffer;
        }
        return this.codecSerializer.flush();
    }
}

exports.FromStringShapeDeserializer = FromStringShapeDeserializer;
exports.HttpBindingProtocol = HttpBindingProtocol;
exports.HttpInterceptingShapeDeserializer = HttpInterceptingShapeDeserializer;
exports.HttpInterceptingShapeSerializer = HttpInterceptingShapeSerializer;
exports.HttpProtocol = HttpProtocol;
exports.RequestBuilder = RequestBuilder;
exports.RpcProtocol = RpcProtocol;
exports.SerdeContext = SerdeContext;
exports.ToStringShapeSerializer = ToStringShapeSerializer;
exports.collectBody = collectBody;
exports.determineTimestampFormat = determineTimestampFormat;
exports.extendedEncodeURIComponent = extendedEncodeURIComponent;
exports.requestBuilder = requestBuilder;
exports.resolvedPath = resolvedPath;


/***/ }),

/***/ 9826:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var protocolHttp = __nccwpck_require__(4418);
var utilMiddleware = __nccwpck_require__(2390);
var endpoints = __nccwpck_require__(9745);

const deref = (schemaRef) => {
    if (typeof schemaRef === "function") {
        return schemaRef();
    }
    return schemaRef;
};

const operation = (namespace, name, traits, input, output) => ({
    name,
    namespace,
    traits,
    input,
    output,
});

const schemaDeserializationMiddleware = (config) => (next, context) => async (args) => {
    const { response } = await next(args);
    const { operationSchema } = utilMiddleware.getSmithyContext(context);
    const [, ns, n, t, i, o] = operationSchema ?? [];
    try {
        const parsed = await config.protocol.deserializeResponse(operation(ns, n, t, i, o), {
            ...config,
            ...context,
        }, response);
        return {
            response,
            output: parsed,
        };
    }
    catch (error) {
        Object.defineProperty(error, "$response", {
            value: response,
            enumerable: false,
            writable: false,
            configurable: false,
        });
        if (!("$metadata" in error)) {
            const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
            try {
                error.message += "\n  " + hint;
            }
            catch (e) {
                if (!context.logger || context.logger?.constructor?.name === "NoOpLogger") {
                    console.warn(hint);
                }
                else {
                    context.logger?.warn?.(hint);
                }
            }
            if (typeof error.$responseBodyText !== "undefined") {
                if (error.$response) {
                    error.$response.body = error.$responseBodyText;
                }
            }
            try {
                if (protocolHttp.HttpResponse.isInstance(response)) {
                    const { headers = {} } = response;
                    const headerEntries = Object.entries(headers);
                    error.$metadata = {
                        httpStatusCode: response.statusCode,
                        requestId: findHeader(/^x-[\w-]+-request-?id$/, headerEntries),
                        extendedRequestId: findHeader(/^x-[\w-]+-id-2$/, headerEntries),
                        cfId: findHeader(/^x-[\w-]+-cf-id$/, headerEntries),
                    };
                }
            }
            catch (e) {
            }
        }
        throw error;
    }
};
const findHeader = (pattern, headers) => {
    return (headers.find(([k]) => {
        return k.match(pattern);
    }) || [void 0, void 0])[1];
};

const schemaSerializationMiddleware = (config) => (next, context) => async (args) => {
    const { operationSchema } = utilMiddleware.getSmithyContext(context);
    const [, ns, n, t, i, o] = operationSchema ?? [];
    const endpoint = context.endpointV2
        ? async () => endpoints.toEndpointV1(context.endpointV2)
        : config.endpoint;
    const request = await config.protocol.serializeRequest(operation(ns, n, t, i, o), args.input, {
        ...config,
        ...context,
        endpoint,
    });
    return next({
        ...args,
        request,
    });
};

const deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: true,
};
const serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true,
};
function getSchemaSerdePlugin(config) {
    return {
        applyToStack: (commandStack) => {
            commandStack.add(schemaSerializationMiddleware(config), serializerMiddlewareOption);
            commandStack.add(schemaDeserializationMiddleware(config), deserializerMiddlewareOption);
            config.protocol.setSerdeContext(config);
        },
    };
}

class Schema {
    name;
    namespace;
    traits;
    static assign(instance, values) {
        const schema = Object.assign(instance, values);
        return schema;
    }
    static [Symbol.hasInstance](lhs) {
        const isPrototype = this.prototype.isPrototypeOf(lhs);
        if (!isPrototype && typeof lhs === "object" && lhs !== null) {
            const list = lhs;
            return list.symbol === this.symbol;
        }
        return isPrototype;
    }
    getName() {
        return this.namespace + "#" + this.name;
    }
}

class ListSchema extends Schema {
    static symbol = Symbol.for("@smithy/lis");
    name;
    traits;
    valueSchema;
    symbol = ListSchema.symbol;
}
const list = (namespace, name, traits, valueSchema) => Schema.assign(new ListSchema(), {
    name,
    namespace,
    traits,
    valueSchema,
});

class MapSchema extends Schema {
    static symbol = Symbol.for("@smithy/map");
    name;
    traits;
    keySchema;
    valueSchema;
    symbol = MapSchema.symbol;
}
const map = (namespace, name, traits, keySchema, valueSchema) => Schema.assign(new MapSchema(), {
    name,
    namespace,
    traits,
    keySchema,
    valueSchema,
});

class OperationSchema extends Schema {
    static symbol = Symbol.for("@smithy/ope");
    name;
    traits;
    input;
    output;
    symbol = OperationSchema.symbol;
}
const op = (namespace, name, traits, input, output) => Schema.assign(new OperationSchema(), {
    name,
    namespace,
    traits,
    input,
    output,
});

class StructureSchema extends Schema {
    static symbol = Symbol.for("@smithy/str");
    name;
    traits;
    memberNames;
    memberList;
    symbol = StructureSchema.symbol;
}
const struct = (namespace, name, traits, memberNames, memberList) => Schema.assign(new StructureSchema(), {
    name,
    namespace,
    traits,
    memberNames,
    memberList,
});

class ErrorSchema extends StructureSchema {
    static symbol = Symbol.for("@smithy/err");
    ctor;
    symbol = ErrorSchema.symbol;
}
const error = (namespace, name, traits, memberNames, memberList, ctor) => Schema.assign(new ErrorSchema(), {
    name,
    namespace,
    traits,
    memberNames,
    memberList,
    ctor: null,
});

const traitsCache = [];
function translateTraits(indicator) {
    if (typeof indicator === "object") {
        return indicator;
    }
    indicator = indicator | 0;
    if (traitsCache[indicator]) {
        return traitsCache[indicator];
    }
    const traits = {};
    let i = 0;
    for (const trait of [
        "httpLabel",
        "idempotent",
        "idempotencyToken",
        "sensitive",
        "httpPayload",
        "httpResponseCode",
        "httpQueryParams",
    ]) {
        if (((indicator >> i++) & 1) === 1) {
            traits[trait] = 1;
        }
    }
    return (traitsCache[indicator] = traits);
}

const anno = {
    it: Symbol.for("@smithy/nor-struct-it"),
    ns: Symbol.for("@smithy/ns"),
};
const simpleSchemaCacheN = [];
const simpleSchemaCacheS = {};
class NormalizedSchema {
    ref;
    memberName;
    static symbol = Symbol.for("@smithy/nor");
    symbol = NormalizedSchema.symbol;
    name;
    schema;
    _isMemberSchema;
    traits;
    memberTraits;
    normalizedTraits;
    constructor(ref, memberName) {
        this.ref = ref;
        this.memberName = memberName;
        const traitStack = [];
        let _ref = ref;
        let schema = ref;
        this._isMemberSchema = false;
        while (isMemberSchema(_ref)) {
            traitStack.push(_ref[1]);
            _ref = _ref[0];
            schema = deref(_ref);
            this._isMemberSchema = true;
        }
        if (traitStack.length > 0) {
            this.memberTraits = {};
            for (let i = traitStack.length - 1; i >= 0; --i) {
                const traitSet = traitStack[i];
                Object.assign(this.memberTraits, translateTraits(traitSet));
            }
        }
        else {
            this.memberTraits = 0;
        }
        if (schema instanceof NormalizedSchema) {
            const computedMemberTraits = this.memberTraits;
            Object.assign(this, schema);
            this.memberTraits = Object.assign({}, computedMemberTraits, schema.getMemberTraits(), this.getMemberTraits());
            this.normalizedTraits = void 0;
            this.memberName = memberName ?? schema.memberName;
            return;
        }
        this.schema = deref(schema);
        if (isStaticSchema(this.schema)) {
            this.name = `${this.schema[1]}#${this.schema[2]}`;
            this.traits = this.schema[3];
        }
        else {
            this.name = this.memberName ?? String(schema);
            this.traits = 0;
        }
        if (this._isMemberSchema && !memberName) {
            throw new Error(`@smithy/core/schema - NormalizedSchema member init ${this.getName(true)} missing member name.`);
        }
    }
    static [Symbol.hasInstance](lhs) {
        const isPrototype = this.prototype.isPrototypeOf(lhs);
        if (!isPrototype && typeof lhs === "object" && lhs !== null) {
            const ns = lhs;
            return ns.symbol === this.symbol;
        }
        return isPrototype;
    }
    static of(ref) {
        const keyAble = typeof ref === "function" || (typeof ref === "object" && ref !== null);
        if (typeof ref === "number") {
            if (simpleSchemaCacheN[ref]) {
                return simpleSchemaCacheN[ref];
            }
        }
        else if (typeof ref === "string") {
            if (simpleSchemaCacheS[ref]) {
                return simpleSchemaCacheS[ref];
            }
        }
        else if (keyAble) {
            if (ref[anno.ns]) {
                return ref[anno.ns];
            }
        }
        const sc = deref(ref);
        if (sc instanceof NormalizedSchema) {
            return sc;
        }
        if (isMemberSchema(sc)) {
            const [ns, traits] = sc;
            if (ns instanceof NormalizedSchema) {
                Object.assign(ns.getMergedTraits(), translateTraits(traits));
                return ns;
            }
            throw new Error(`@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(ref, null, 2)}.`);
        }
        const ns = new NormalizedSchema(sc);
        if (keyAble) {
            return (ref[anno.ns] = ns);
        }
        if (typeof sc === "string") {
            return (simpleSchemaCacheS[sc] = ns);
        }
        if (typeof sc === "number") {
            return (simpleSchemaCacheN[sc] = ns);
        }
        return ns;
    }
    getSchema() {
        const sc = this.schema;
        if (Array.isArray(sc) && sc[0] === 0) {
            return sc[4];
        }
        return sc;
    }
    getName(withNamespace = false) {
        const { name } = this;
        const short = !withNamespace && name && name.includes("#");
        return short ? name.split("#")[1] : name || undefined;
    }
    getMemberName() {
        return this.memberName;
    }
    isMemberSchema() {
        return this._isMemberSchema;
    }
    isListSchema() {
        const sc = this.getSchema();
        return typeof sc === "number"
            ? sc >= 64 && sc < 128
            : sc[0] === 1;
    }
    isMapSchema() {
        const sc = this.getSchema();
        return typeof sc === "number"
            ? sc >= 128 && sc <= 0b1111_1111
            : sc[0] === 2;
    }
    isStructSchema() {
        const sc = this.getSchema();
        if (typeof sc !== "object") {
            return false;
        }
        const id = sc[0];
        return (id === 3 ||
            id === -3 ||
            id === 4);
    }
    isUnionSchema() {
        const sc = this.getSchema();
        if (typeof sc !== "object") {
            return false;
        }
        return sc[0] === 4;
    }
    isBlobSchema() {
        const sc = this.getSchema();
        return sc === 21 || sc === 42;
    }
    isTimestampSchema() {
        const sc = this.getSchema();
        return (typeof sc === "number" &&
            sc >= 4 &&
            sc <= 7);
    }
    isUnitSchema() {
        return this.getSchema() === "unit";
    }
    isDocumentSchema() {
        return this.getSchema() === 15;
    }
    isStringSchema() {
        return this.getSchema() === 0;
    }
    isBooleanSchema() {
        return this.getSchema() === 2;
    }
    isNumericSchema() {
        return this.getSchema() === 1;
    }
    isBigIntegerSchema() {
        return this.getSchema() === 17;
    }
    isBigDecimalSchema() {
        return this.getSchema() === 19;
    }
    isStreaming() {
        const { streaming } = this.getMergedTraits();
        return !!streaming || this.getSchema() === 42;
    }
    isIdempotencyToken() {
        return !!this.getMergedTraits().idempotencyToken;
    }
    getMergedTraits() {
        return (this.normalizedTraits ??
            (this.normalizedTraits = {
                ...this.getOwnTraits(),
                ...this.getMemberTraits(),
            }));
    }
    getMemberTraits() {
        return translateTraits(this.memberTraits);
    }
    getOwnTraits() {
        return translateTraits(this.traits);
    }
    getKeySchema() {
        const [isDoc, isMap] = [this.isDocumentSchema(), this.isMapSchema()];
        if (!isDoc && !isMap) {
            throw new Error(`@smithy/core/schema - cannot get key for non-map: ${this.getName(true)}`);
        }
        const schema = this.getSchema();
        const memberSchema = isDoc
            ? 15
            : schema[4] ?? 0;
        return member([memberSchema, 0], "key");
    }
    getValueSchema() {
        const sc = this.getSchema();
        const [isDoc, isMap, isList] = [this.isDocumentSchema(), this.isMapSchema(), this.isListSchema()];
        const memberSchema = typeof sc === "number"
            ? 0b0011_1111 & sc
            : sc && typeof sc === "object" && (isMap || isList)
                ? sc[3 + sc[0]]
                : isDoc
                    ? 15
                    : void 0;
        if (memberSchema != null) {
            return member([memberSchema, 0], isMap ? "value" : "member");
        }
        throw new Error(`@smithy/core/schema - ${this.getName(true)} has no value member.`);
    }
    getMemberSchema(memberName) {
        const struct = this.getSchema();
        if (this.isStructSchema() && struct[4].includes(memberName)) {
            const i = struct[4].indexOf(memberName);
            const memberSchema = struct[5][i];
            return member(isMemberSchema(memberSchema) ? memberSchema : [memberSchema, 0], memberName);
        }
        if (this.isDocumentSchema()) {
            return member([15, 0], memberName);
        }
        throw new Error(`@smithy/core/schema - ${this.getName(true)} has no member=${memberName}.`);
    }
    getMemberSchemas() {
        const buffer = {};
        try {
            for (const [k, v] of this.structIterator()) {
                buffer[k] = v;
            }
        }
        catch (ignored) { }
        return buffer;
    }
    getEventStreamMember() {
        if (this.isStructSchema()) {
            for (const [memberName, memberSchema] of this.structIterator()) {
                if (memberSchema.isStreaming() && memberSchema.isStructSchema()) {
                    return memberName;
                }
            }
        }
        return "";
    }
    *structIterator() {
        if (this.isUnitSchema()) {
            return;
        }
        if (!this.isStructSchema()) {
            throw new Error("@smithy/core/schema - cannot iterate non-struct schema.");
        }
        const struct = this.getSchema();
        const z = struct[4].length;
        let it = struct[anno.it];
        if (it && z === it.length) {
            yield* it;
            return;
        }
        it = Array(z);
        for (let i = 0; i < z; ++i) {
            const k = struct[4][i];
            const v = member([struct[5][i], 0], k);
            yield (it[i] = [k, v]);
        }
        struct[anno.it] = it;
    }
}
function member(memberSchema, memberName) {
    if (memberSchema instanceof NormalizedSchema) {
        return Object.assign(memberSchema, {
            memberName,
            _isMemberSchema: true,
        });
    }
    const internalCtorAccess = NormalizedSchema;
    return new internalCtorAccess(memberSchema, memberName);
}
const isMemberSchema = (sc) => Array.isArray(sc) && sc.length === 2;
const isStaticSchema = (sc) => Array.isArray(sc) && sc.length >= 5;

class SimpleSchema extends Schema {
    static symbol = Symbol.for("@smithy/sim");
    name;
    schemaRef;
    traits;
    symbol = SimpleSchema.symbol;
}
const sim = (namespace, name, schemaRef, traits) => Schema.assign(new SimpleSchema(), {
    name,
    namespace,
    traits,
    schemaRef,
});
const simAdapter = (namespace, name, traits, schemaRef) => Schema.assign(new SimpleSchema(), {
    name,
    namespace,
    traits,
    schemaRef,
});

const SCHEMA = {
    BLOB: 0b0001_0101,
    STREAMING_BLOB: 0b0010_1010,
    BOOLEAN: 0b0000_0010,
    STRING: 0b0000_0000,
    NUMERIC: 0b0000_0001,
    BIG_INTEGER: 0b0001_0001,
    BIG_DECIMAL: 0b0001_0011,
    DOCUMENT: 0b0000_1111,
    TIMESTAMP_DEFAULT: 0b0000_0100,
    TIMESTAMP_DATE_TIME: 0b0000_0101,
    TIMESTAMP_HTTP_DATE: 0b0000_0110,
    TIMESTAMP_EPOCH_SECONDS: 0b0000_0111,
    LIST_MODIFIER: 0b0100_0000,
    MAP_MODIFIER: 0b1000_0000,
};

class TypeRegistry {
    namespace;
    schemas;
    exceptions;
    static registries = new Map();
    constructor(namespace, schemas = new Map(), exceptions = new Map()) {
        this.namespace = namespace;
        this.schemas = schemas;
        this.exceptions = exceptions;
    }
    static for(namespace) {
        if (!TypeRegistry.registries.has(namespace)) {
            TypeRegistry.registries.set(namespace, new TypeRegistry(namespace));
        }
        return TypeRegistry.registries.get(namespace);
    }
    copyFrom(other) {
        const { schemas, exceptions } = this;
        for (const [k, v] of other.schemas) {
            if (!schemas.has(k)) {
                schemas.set(k, v);
            }
        }
        for (const [k, v] of other.exceptions) {
            if (!exceptions.has(k)) {
                exceptions.set(k, v);
            }
        }
    }
    register(shapeId, schema) {
        const qualifiedName = this.normalizeShapeId(shapeId);
        for (const r of [this, TypeRegistry.for(qualifiedName.split("#")[0])]) {
            r.schemas.set(qualifiedName, schema);
        }
    }
    getSchema(shapeId) {
        const id = this.normalizeShapeId(shapeId);
        if (!this.schemas.has(id)) {
            throw new Error(`@smithy/core/schema - schema not found for ${id}`);
        }
        return this.schemas.get(id);
    }
    registerError(es, ctor) {
        const $error = es;
        const ns = $error[1];
        for (const r of [this, TypeRegistry.for(ns)]) {
            r.schemas.set(ns + "#" + $error[2], $error);
            r.exceptions.set($error, ctor);
        }
    }
    getErrorCtor(es) {
        const $error = es;
        if (this.exceptions.has($error)) {
            return this.exceptions.get($error);
        }
        const registry = TypeRegistry.for($error[1]);
        return registry.exceptions.get($error);
    }
    getBaseException() {
        for (const exceptionKey of this.exceptions.keys()) {
            if (Array.isArray(exceptionKey)) {
                const [, ns, name] = exceptionKey;
                const id = ns + "#" + name;
                if (id.startsWith("smithy.ts.sdk.synthetic.") && id.endsWith("ServiceException")) {
                    return exceptionKey;
                }
            }
        }
        return undefined;
    }
    find(predicate) {
        for (const schema of this.schemas.values()) {
            if (predicate(schema)) {
                return schema;
            }
        }
        return undefined;
    }
    clear() {
        this.schemas.clear();
        this.exceptions.clear();
    }
    normalizeShapeId(shapeId) {
        if (shapeId.includes("#")) {
            return shapeId;
        }
        return this.namespace + "#" + shapeId;
    }
}

exports.ErrorSchema = ErrorSchema;
exports.ListSchema = ListSchema;
exports.MapSchema = MapSchema;
exports.NormalizedSchema = NormalizedSchema;
exports.OperationSchema = OperationSchema;
exports.SCHEMA = SCHEMA;
exports.Schema = Schema;
exports.SimpleSchema = SimpleSchema;
exports.StructureSchema = StructureSchema;
exports.TypeRegistry = TypeRegistry;
exports.deref = deref;
exports.deserializerMiddlewareOption = deserializerMiddlewareOption;
exports.error = error;
exports.getSchemaSerdePlugin = getSchemaSerdePlugin;
exports.isStaticSchema = isStaticSchema;
exports.list = list;
exports.map = map;
exports.op = op;
exports.operation = operation;
exports.serializerMiddlewareOption = serializerMiddlewareOption;
exports.sim = sim;
exports.simAdapter = simAdapter;
exports.simpleSchemaCacheN = simpleSchemaCacheN;
exports.simpleSchemaCacheS = simpleSchemaCacheS;
exports.struct = struct;
exports.traitsCache = traitsCache;
exports.translateTraits = translateTraits;


/***/ }),

/***/ 7669:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var uuid = __nccwpck_require__(3634);

const copyDocumentWithTransform = (source, schemaRef, transform = (_) => _) => source;

const parseBoolean = (value) => {
    switch (value) {
        case "true":
            return true;
        case "false":
            return false;
        default:
            throw new Error(`Unable to parse boolean value "${value}"`);
    }
};
const expectBoolean = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "number") {
        if (value === 0 || value === 1) {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (value === 0) {
            return false;
        }
        if (value === 1) {
            return true;
        }
    }
    if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (lower === "false" || lower === "true") {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (lower === "false") {
            return false;
        }
        if (lower === "true") {
            return true;
        }
    }
    if (typeof value === "boolean") {
        return value;
    }
    throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
};
const expectNumber = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
            if (String(parsed) !== String(value)) {
                logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
            }
            return parsed;
        }
    }
    if (typeof value === "number") {
        return value;
    }
    throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
};
const MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
const expectFloat32 = (value) => {
    const expected = expectNumber(value);
    if (expected !== undefined && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
            throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
    }
    return expected;
};
const expectLong = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
    }
    throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
};
const expectInt = expectLong;
const expectInt32 = (value) => expectSizedInt(value, 32);
const expectShort = (value) => expectSizedInt(value, 16);
const expectByte = (value) => expectSizedInt(value, 8);
const expectSizedInt = (value, size) => {
    const expected = expectLong(value);
    if (expected !== undefined && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
    }
    return expected;
};
const castInt = (value, size) => {
    switch (size) {
        case 32:
            return Int32Array.of(value)[0];
        case 16:
            return Int16Array.of(value)[0];
        case 8:
            return Int8Array.of(value)[0];
    }
};
const expectNonNull = (value, location) => {
    if (value === null || value === undefined) {
        if (location) {
            throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
    }
    return value;
};
const expectObject = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "object" && !Array.isArray(value)) {
        return value;
    }
    const receivedType = Array.isArray(value) ? "array" : typeof value;
    throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
};
const expectString = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        return value;
    }
    if (["boolean", "number", "bigint"].includes(typeof value)) {
        logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
        return String(value);
    }
    throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
};
const expectUnion = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    const asObject = expectObject(value);
    const setKeys = [];
    for (const k in asObject) {
        if (asObject[k] != null) {
            setKeys.push(k);
        }
    }
    if (setKeys.length === 0) {
        throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
    }
    if (setKeys.length > 1) {
        throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
    }
    return asObject;
};
const strictParseDouble = (value) => {
    if (typeof value == "string") {
        return expectNumber(parseNumber(value));
    }
    return expectNumber(value);
};
const strictParseFloat = strictParseDouble;
const strictParseFloat32 = (value) => {
    if (typeof value == "string") {
        return expectFloat32(parseNumber(value));
    }
    return expectFloat32(value);
};
const NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
const parseNumber = (value) => {
    const matches = value.match(NUMBER_REGEX);
    if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
    }
    return parseFloat(value);
};
const limitedParseDouble = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return expectNumber(value);
};
const handleFloat = limitedParseDouble;
const limitedParseFloat = limitedParseDouble;
const limitedParseFloat32 = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return expectFloat32(value);
};
const parseFloatString = (value) => {
    switch (value) {
        case "NaN":
            return NaN;
        case "Infinity":
            return Infinity;
        case "-Infinity":
            return -Infinity;
        default:
            throw new Error(`Unable to parse float value: ${value}`);
    }
};
const strictParseLong = (value) => {
    if (typeof value === "string") {
        return expectLong(parseNumber(value));
    }
    return expectLong(value);
};
const strictParseInt = strictParseLong;
const strictParseInt32 = (value) => {
    if (typeof value === "string") {
        return expectInt32(parseNumber(value));
    }
    return expectInt32(value);
};
const strictParseShort = (value) => {
    if (typeof value === "string") {
        return expectShort(parseNumber(value));
    }
    return expectShort(value);
};
const strictParseByte = (value) => {
    if (typeof value === "string") {
        return expectByte(parseNumber(value));
    }
    return expectByte(value);
};
const stackTraceWarning = (message) => {
    return String(new TypeError(message).stack || message)
        .split("\n")
        .slice(0, 5)
        .filter((s) => !s.includes("stackTraceWarning"))
        .join("\n");
};
const logger = {
    warn: console.warn,
};

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function dateToUtcString(date) {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const dayOfWeek = date.getUTCDay();
    const dayOfMonthInt = date.getUTCDate();
    const hoursInt = date.getUTCHours();
    const minutesInt = date.getUTCMinutes();
    const secondsInt = date.getUTCSeconds();
    const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
    const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
    const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
    const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
    return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
const RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
const parseRfc3339DateTime = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    const year = strictParseShort(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    return buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
};
const RFC3339_WITH_OFFSET$1 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
const parseRfc3339DateTimeWithOffset = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339_WITH_OFFSET$1.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
    const year = strictParseShort(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    if (offsetStr.toUpperCase() != "Z") {
        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
    }
    return date;
};
const IMF_FIXDATE$1 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const RFC_850_DATE$1 = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const ASC_TIME$1 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
const parseRfc7231DateTime = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
    }
    let match = IMF_FIXDATE$1.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    match = RFC_850_DATE$1.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
            hours,
            minutes,
            seconds,
            fractionalMilliseconds,
        }));
    }
    match = ASC_TIME$1.exec(value);
    if (match) {
        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    throw new TypeError("Invalid RFC-7231 date-time value");
};
const parseEpochTimestamp = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    let valueAsDouble;
    if (typeof value === "number") {
        valueAsDouble = value;
    }
    else if (typeof value === "string") {
        valueAsDouble = strictParseDouble(value);
    }
    else if (typeof value === "object" && value.tag === 1) {
        valueAsDouble = value.value;
    }
    else {
        throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
    }
    if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
    }
    return new Date(Math.round(valueAsDouble * 1000));
};
const buildDate = (year, month, day, time) => {
    const adjustedMonth = month - 1;
    validateDayOfMonth(year, adjustedMonth, day);
    return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
};
const parseTwoDigitYear = (value) => {
    const thisYear = new Date().getUTCFullYear();
    const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort(stripLeadingZeroes(value));
    if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
    }
    return valueInThisCentury;
};
const FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1000;
const adjustRfc850Year = (input) => {
    if (input.getTime() - new Date().getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
    }
    return input;
};
const parseMonthByShortName = (value) => {
    const monthIdx = MONTHS.indexOf(value);
    if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
    }
    return monthIdx + 1;
};
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const validateDayOfMonth = (year, month, day) => {
    let maxDays = DAYS_IN_MONTH[month];
    if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
    }
    if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
    }
};
const isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
const parseDateValue = (value, type, lower, upper) => {
    const dateVal = strictParseByte(stripLeadingZeroes(value));
    if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
    }
    return dateVal;
};
const parseMilliseconds = (value) => {
    if (value === null || value === undefined) {
        return 0;
    }
    return strictParseFloat32("0." + value) * 1000;
};
const parseOffsetToMilliseconds = (value) => {
    const directionStr = value[0];
    let direction = 1;
    if (directionStr == "+") {
        direction = 1;
    }
    else if (directionStr == "-") {
        direction = -1;
    }
    else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
    }
    const hour = Number(value.substring(1, 3));
    const minute = Number(value.substring(4, 6));
    return direction * (hour * 60 + minute) * 60 * 1000;
};
const stripLeadingZeroes = (value) => {
    let idx = 0;
    while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
    }
    if (idx === 0) {
        return value;
    }
    return value.slice(idx);
};

const LazyJsonString = function LazyJsonString(val) {
    const str = Object.assign(new String(val), {
        deserializeJSON() {
            return JSON.parse(String(val));
        },
        toString() {
            return String(val);
        },
        toJSON() {
            return String(val);
        },
    });
    return str;
};
LazyJsonString.from = (object) => {
    if (object && typeof object === "object" && (object instanceof LazyJsonString || "deserializeJSON" in object)) {
        return object;
    }
    else if (typeof object === "string" || Object.getPrototypeOf(object) === String.prototype) {
        return LazyJsonString(String(object));
    }
    return LazyJsonString(JSON.stringify(object));
};
LazyJsonString.fromObject = LazyJsonString.from;

function quoteHeader(part) {
    if (part.includes(",") || part.includes('"')) {
        part = `"${part.replace(/"/g, '\\"')}"`;
    }
    return part;
}

const ddd = `(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:[ne|u?r]?s?day)?`;
const mmm = `(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)`;
const time = `(\\d?\\d):(\\d{2}):(\\d{2})(?:\\.(\\d+))?`;
const date = `(\\d?\\d)`;
const year = `(\\d{4})`;
const RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d\d)-(\d\d)[tT](\d\d):(\d\d):(\d\d)(\.(\d+))?(([-+]\d\d:\d\d)|[zZ])$/);
const IMF_FIXDATE = new RegExp(`^${ddd}, ${date} ${mmm} ${year} ${time} GMT$`);
const RFC_850_DATE = new RegExp(`^${ddd}, ${date}-${mmm}-(\\d\\d) ${time} GMT$`);
const ASC_TIME = new RegExp(`^${ddd} ${mmm} ( [1-9]|\\d\\d) ${time} ${year}$`);
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const _parseEpochTimestamp = (value) => {
    if (value == null) {
        return void 0;
    }
    let num = NaN;
    if (typeof value === "number") {
        num = value;
    }
    else if (typeof value === "string") {
        if (!/^-?\d*\.?\d+$/.test(value)) {
            throw new TypeError(`parseEpochTimestamp - numeric string invalid.`);
        }
        num = Number.parseFloat(value);
    }
    else if (typeof value === "object" && value.tag === 1) {
        num = value.value;
    }
    if (isNaN(num) || Math.abs(num) === Infinity) {
        throw new TypeError("Epoch timestamps must be valid finite numbers.");
    }
    return new Date(Math.round(num * 1000));
};
const _parseRfc3339DateTimeWithOffset = (value) => {
    if (value == null) {
        return void 0;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC3339 timestamps must be strings");
    }
    const matches = RFC3339_WITH_OFFSET.exec(value);
    if (!matches) {
        throw new TypeError(`Invalid RFC3339 timestamp format ${value}`);
    }
    const [, yearStr, monthStr, dayStr, hours, minutes, seconds, , ms, offsetStr] = matches;
    range(monthStr, 1, 12);
    range(dayStr, 1, 31);
    range(hours, 0, 23);
    range(minutes, 0, 59);
    range(seconds, 0, 60);
    const date = new Date(Date.UTC(Number(yearStr), Number(monthStr) - 1, Number(dayStr), Number(hours), Number(minutes), Number(seconds), Number(ms) ? Math.round(parseFloat(`0.${ms}`) * 1000) : 0));
    date.setUTCFullYear(Number(yearStr));
    if (offsetStr.toUpperCase() != "Z") {
        const [, sign, offsetH, offsetM] = /([+-])(\d\d):(\d\d)/.exec(offsetStr) || [void 0, "+", 0, 0];
        const scalar = sign === "-" ? 1 : -1;
        date.setTime(date.getTime() + scalar * (Number(offsetH) * 60 * 60 * 1000 + Number(offsetM) * 60 * 1000));
    }
    return date;
};
const _parseRfc7231DateTime = (value) => {
    if (value == null) {
        return void 0;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC7231 timestamps must be strings.");
    }
    let day;
    let month;
    let year;
    let hour;
    let minute;
    let second;
    let fraction;
    let matches;
    if ((matches = IMF_FIXDATE.exec(value))) {
        [, day, month, year, hour, minute, second, fraction] = matches;
    }
    else if ((matches = RFC_850_DATE.exec(value))) {
        [, day, month, year, hour, minute, second, fraction] = matches;
        year = (Number(year) + 1900).toString();
    }
    else if ((matches = ASC_TIME.exec(value))) {
        [, month, day, hour, minute, second, fraction, year] = matches;
    }
    if (year && second) {
        const timestamp = Date.UTC(Number(year), months.indexOf(month), Number(day), Number(hour), Number(minute), Number(second), fraction ? Math.round(parseFloat(`0.${fraction}`) * 1000) : 0);
        range(day, 1, 31);
        range(hour, 0, 23);
        range(minute, 0, 59);
        range(second, 0, 60);
        const date = new Date(timestamp);
        date.setUTCFullYear(Number(year));
        return date;
    }
    throw new TypeError(`Invalid RFC7231 date-time value ${value}.`);
};
function range(v, min, max) {
    const _v = Number(v);
    if (_v < min || _v > max) {
        throw new Error(`Value ${_v} out of range [${min}, ${max}]`);
    }
}

function splitEvery(value, delimiter, numDelimiters) {
    if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
        throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
    }
    const segments = value.split(delimiter);
    if (numDelimiters === 1) {
        return segments;
    }
    const compoundSegments = [];
    let currentSegment = "";
    for (let i = 0; i < segments.length; i++) {
        if (currentSegment === "") {
            currentSegment = segments[i];
        }
        else {
            currentSegment += delimiter + segments[i];
        }
        if ((i + 1) % numDelimiters === 0) {
            compoundSegments.push(currentSegment);
            currentSegment = "";
        }
    }
    if (currentSegment !== "") {
        compoundSegments.push(currentSegment);
    }
    return compoundSegments;
}

const splitHeader = (value) => {
    const z = value.length;
    const values = [];
    let withinQuotes = false;
    let prevChar = undefined;
    let anchor = 0;
    for (let i = 0; i < z; ++i) {
        const char = value[i];
        switch (char) {
            case `"`:
                if (prevChar !== "\\") {
                    withinQuotes = !withinQuotes;
                }
                break;
            case ",":
                if (!withinQuotes) {
                    values.push(value.slice(anchor, i));
                    anchor = i + 1;
                }
                break;
        }
        prevChar = char;
    }
    values.push(value.slice(anchor));
    return values.map((v) => {
        v = v.trim();
        const z = v.length;
        if (z < 2) {
            return v;
        }
        if (v[0] === `"` && v[z - 1] === `"`) {
            v = v.slice(1, z - 1);
        }
        return v.replace(/\\"/g, '"');
    });
};

const format = /^-?\d*(\.\d+)?$/;
class NumericValue {
    string;
    type;
    constructor(string, type) {
        this.string = string;
        this.type = type;
        if (!format.test(string)) {
            throw new Error(`@smithy/core/serde - NumericValue must only contain [0-9], at most one decimal point ".", and an optional negation prefix "-".`);
        }
    }
    toString() {
        return this.string;
    }
    static [Symbol.hasInstance](object) {
        if (!object || typeof object !== "object") {
            return false;
        }
        const _nv = object;
        return NumericValue.prototype.isPrototypeOf(object) || (_nv.type === "bigDecimal" && format.test(_nv.string));
    }
}
function nv(input) {
    return new NumericValue(String(input), "bigDecimal");
}

exports.generateIdempotencyToken = uuid.v4;
exports.LazyJsonString = LazyJsonString;
exports.NumericValue = NumericValue;
exports._parseEpochTimestamp = _parseEpochTimestamp;
exports._parseRfc3339DateTimeWithOffset = _parseRfc3339DateTimeWithOffset;
exports._parseRfc7231DateTime = _parseRfc7231DateTime;
exports.copyDocumentWithTransform = copyDocumentWithTransform;
exports.dateToUtcString = dateToUtcString;
exports.expectBoolean = expectBoolean;
exports.expectByte = expectByte;
exports.expectFloat32 = expectFloat32;
exports.expectInt = expectInt;
exports.expectInt32 = expectInt32;
exports.expectLong = expectLong;
exports.expectNonNull = expectNonNull;
exports.expectNumber = expectNumber;
exports.expectObject = expectObject;
exports.expectShort = expectShort;
exports.expectString = expectString;
exports.expectUnion = expectUnion;
exports.handleFloat = handleFloat;
exports.limitedParseDouble = limitedParseDouble;
exports.limitedParseFloat = limitedParseFloat;
exports.limitedParseFloat32 = limitedParseFloat32;
exports.logger = logger;
exports.nv = nv;
exports.parseBoolean = parseBoolean;
exports.parseEpochTimestamp = parseEpochTimestamp;
exports.parseRfc3339DateTime = parseRfc3339DateTime;
exports.parseRfc3339DateTimeWithOffset = parseRfc3339DateTimeWithOffset;
exports.parseRfc7231DateTime = parseRfc7231DateTime;
exports.quoteHeader = quoteHeader;
exports.splitEvery = splitEvery;
exports.splitHeader = splitHeader;
exports.strictParseByte = strictParseByte;
exports.strictParseDouble = strictParseDouble;
exports.strictParseFloat = strictParseFloat;
exports.strictParseFloat32 = strictParseFloat32;
exports.strictParseInt = strictParseInt;
exports.strictParseInt32 = strictParseInt32;
exports.strictParseLong = strictParseLong;
exports.strictParseShort = strictParseShort;


/***/ }),

/***/ 2687:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var protocolHttp = __nccwpck_require__(4418);
var querystringBuilder = __nccwpck_require__(8031);
var utilBase64 = __nccwpck_require__(5600);

function createRequest(url, requestOptions) {
    return new Request(url, requestOptions);
}

function requestTimeout(timeoutInMs = 0) {
    return new Promise((resolve, reject) => {
        if (timeoutInMs) {
            setTimeout(() => {
                const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
                timeoutError.name = "TimeoutError";
                reject(timeoutError);
            }, timeoutInMs);
        }
    });
}

const keepAliveSupport = {
    supported: undefined,
};
class FetchHttpHandler {
    config;
    configProvider;
    static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
            return instanceOrOptions;
        }
        return new FetchHttpHandler(instanceOrOptions);
    }
    constructor(options) {
        if (typeof options === "function") {
            this.configProvider = options().then((opts) => opts || {});
        }
        else {
            this.config = options ?? {};
            this.configProvider = Promise.resolve(this.config);
        }
        if (keepAliveSupport.supported === undefined) {
            keepAliveSupport.supported = Boolean(typeof Request !== "undefined" && "keepalive" in createRequest("https://[::1]"));
        }
    }
    destroy() {
    }
    async handle(request, { abortSignal, requestTimeout: requestTimeout$1 } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
        }
        const requestTimeoutInMs = requestTimeout$1 ?? this.config.requestTimeout;
        const keepAlive = this.config.keepAlive === true;
        const credentials = this.config.credentials;
        if (abortSignal?.aborted) {
            const abortError = buildAbortError(abortSignal);
            return Promise.reject(abortError);
        }
        let path = request.path;
        const queryString = querystringBuilder.buildQueryString(request.query || {});
        if (queryString) {
            path += `?${queryString}`;
        }
        if (request.fragment) {
            path += `#${request.fragment}`;
        }
        let auth = "";
        if (request.username != null || request.password != null) {
            const username = request.username ?? "";
            const password = request.password ?? "";
            auth = `${username}:${password}@`;
        }
        const { port, method } = request;
        const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
        const body = method === "GET" || method === "HEAD" ? undefined : request.body;
        const requestOptions = {
            body,
            headers: new Headers(request.headers),
            method: method,
            credentials,
        };
        if (this.config?.cache) {
            requestOptions.cache = this.config.cache;
        }
        if (body) {
            requestOptions.duplex = "half";
        }
        if (typeof AbortController !== "undefined") {
            requestOptions.signal = abortSignal;
        }
        if (keepAliveSupport.supported) {
            requestOptions.keepalive = keepAlive;
        }
        if (typeof this.config.requestInit === "function") {
            Object.assign(requestOptions, this.config.requestInit(request));
        }
        let removeSignalEventListener = () => { };
        const fetchRequest = createRequest(url, requestOptions);
        const raceOfPromises = [
            fetch(fetchRequest).then((response) => {
                const fetchHeaders = response.headers;
                const transformedHeaders = {};
                for (const pair of fetchHeaders.entries()) {
                    transformedHeaders[pair[0]] = pair[1];
                }
                const hasReadableStream = response.body != undefined;
                if (!hasReadableStream) {
                    return response.blob().then((body) => ({
                        response: new protocolHttp.HttpResponse({
                            headers: transformedHeaders,
                            reason: response.statusText,
                            statusCode: response.status,
                            body,
                        }),
                    }));
                }
                return {
                    response: new protocolHttp.HttpResponse({
                        headers: transformedHeaders,
                        reason: response.statusText,
                        statusCode: response.status,
                        body: response.body,
                    }),
                };
            }),
            requestTimeout(requestTimeoutInMs),
        ];
        if (abortSignal) {
            raceOfPromises.push(new Promise((resolve, reject) => {
                const onAbort = () => {
                    const abortError = buildAbortError(abortSignal);
                    reject(abortError);
                };
                if (typeof abortSignal.addEventListener === "function") {
                    const signal = abortSignal;
                    signal.addEventListener("abort", onAbort, { once: true });
                    removeSignalEventListener = () => signal.removeEventListener("abort", onAbort);
                }
                else {
                    abortSignal.onabort = onAbort;
                }
            }));
        }
        return Promise.race(raceOfPromises).finally(removeSignalEventListener);
    }
    updateHttpClientConfig(key, value) {
        this.config = undefined;
        this.configProvider = this.configProvider.then((config) => {
            config[key] = value;
            return config;
        });
    }
    httpHandlerConfigs() {
        return this.config ?? {};
    }
}
function buildAbortError(abortSignal) {
    const reason = abortSignal && typeof abortSignal === "object" && "reason" in abortSignal
        ? abortSignal.reason
        : undefined;
    if (reason) {
        if (reason instanceof Error) {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            abortError.cause = reason;
            return abortError;
        }
        const abortError = new Error(String(reason));
        abortError.name = "AbortError";
        return abortError;
    }
    const abortError = new Error("Request aborted");
    abortError.name = "AbortError";
    return abortError;
}

const streamCollector = async (stream) => {
    if ((typeof Blob === "function" && stream instanceof Blob) || stream.constructor?.name === "Blob") {
        if (Blob.prototype.arrayBuffer !== undefined) {
            return new Uint8Array(await stream.arrayBuffer());
        }
        return collectBlob(stream);
    }
    return collectStream(stream);
};
async function collectBlob(blob) {
    const base64 = await readToBase64(blob);
    const arrayBuffer = utilBase64.fromBase64(base64);
    return new Uint8Array(arrayBuffer);
}
async function collectStream(stream) {
    const chunks = [];
    const reader = stream.getReader();
    let isDone = false;
    let length = 0;
    while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
            chunks.push(value);
            length += value.length;
        }
        isDone = done;
    }
    const collected = new Uint8Array(length);
    let offset = 0;
    for (const chunk of chunks) {
        collected.set(chunk, offset);
        offset += chunk.length;
    }
    return collected;
}
function readToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            if (reader.readyState !== 2) {
                return reject(new Error("Reader aborted too early"));
            }
            const result = (reader.result ?? "");
            const commaIndex = result.indexOf(",");
            const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
            resolve(result.substring(dataOffset));
        };
        reader.onabort = () => reject(new Error("Read aborted"));
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(blob);
    });
}

exports.FetchHttpHandler = FetchHttpHandler;
exports.keepAliveSupport = keepAliveSupport;
exports.streamCollector = streamCollector;


/***/ }),

/***/ 3081:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var utilBufferFrom = __nccwpck_require__(1381);
var utilUtf8 = __nccwpck_require__(1895);
var buffer = __nccwpck_require__(4300);
var crypto = __nccwpck_require__(6113);

class Hash {
    algorithmIdentifier;
    secret;
    hash;
    constructor(algorithmIdentifier, secret) {
        this.algorithmIdentifier = algorithmIdentifier;
        this.secret = secret;
        this.reset();
    }
    update(toHash, encoding) {
        this.hash.update(utilUtf8.toUint8Array(castSourceData(toHash, encoding)));
    }
    digest() {
        return Promise.resolve(this.hash.digest());
    }
    reset() {
        this.hash = this.secret
            ? crypto.createHmac(this.algorithmIdentifier, castSourceData(this.secret))
            : crypto.createHash(this.algorithmIdentifier);
    }
}
function castSourceData(toCast, encoding) {
    if (buffer.Buffer.isBuffer(toCast)) {
        return toCast;
    }
    if (typeof toCast === "string") {
        return utilBufferFrom.fromString(toCast, encoding);
    }
    if (ArrayBuffer.isView(toCast)) {
        return utilBufferFrom.fromArrayBuffer(toCast.buffer, toCast.byteOffset, toCast.byteLength);
    }
    return utilBufferFrom.fromArrayBuffer(toCast);
}

exports.Hash = Hash;


/***/ }),

/***/ 780:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


const isArrayBuffer = (arg) => (typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
    Object.prototype.toString.call(arg) === "[object ArrayBuffer]";

exports.isArrayBuffer = isArrayBuffer;


/***/ }),

/***/ 2800:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var protocolHttp = __nccwpck_require__(4418);

const CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
    return (next) => async (args) => {
        const request = args.request;
        if (protocolHttp.HttpRequest.isInstance(request)) {
            const { body, headers } = request;
            if (body &&
                Object.keys(headers)
                    .map((str) => str.toLowerCase())
                    .indexOf(CONTENT_LENGTH_HEADER) === -1) {
                try {
                    const length = bodyLengthChecker(body);
                    request.headers = {
                        ...request.headers,
                        [CONTENT_LENGTH_HEADER]: String(length),
                    };
                }
                catch (error) {
                }
            }
        }
        return next({
            ...args,
            request,
        });
    };
}
const contentLengthMiddlewareOptions = {
    step: "build",
    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
    name: "contentLengthMiddleware",
    override: true,
};
const getContentLengthPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
    },
});

exports.contentLengthMiddleware = contentLengthMiddleware;
exports.contentLengthMiddlewareOptions = contentLengthMiddlewareOptions;
exports.getContentLengthPlugin = getContentLengthPlugin;


/***/ }),

/***/ 1518:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getEndpointFromConfig = void 0;
const node_config_provider_1 = __nccwpck_require__(3461);
const getEndpointUrlConfig_1 = __nccwpck_require__(7574);
const getEndpointFromConfig = async (serviceId) => (0, node_config_provider_1.loadConfig)((0, getEndpointUrlConfig_1.getEndpointUrlConfig)(serviceId ?? ""))();
exports.getEndpointFromConfig = getEndpointFromConfig;


/***/ }),

/***/ 7574:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getEndpointUrlConfig = void 0;
const shared_ini_file_loader_1 = __nccwpck_require__(3507);
const ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
const CONFIG_ENDPOINT_URL = "endpoint_url";
const getEndpointUrlConfig = (serviceId) => ({
    environmentVariableSelector: (env) => {
        const serviceSuffixParts = serviceId.split(" ").map((w) => w.toUpperCase());
        const serviceEndpointUrl = env[[ENV_ENDPOINT_URL, ...serviceSuffixParts].join("_")];
        if (serviceEndpointUrl)
            return serviceEndpointUrl;
        const endpointUrl = env[ENV_ENDPOINT_URL];
        if (endpointUrl)
            return endpointUrl;
        return undefined;
    },
    configFileSelector: (profile, config) => {
        if (config && profile.services) {
            const servicesSection = config[["services", profile.services].join(shared_ini_file_loader_1.CONFIG_PREFIX_SEPARATOR)];
            if (servicesSection) {
                const servicePrefixParts = serviceId.split(" ").map((w) => w.toLowerCase());
                const endpointUrl = servicesSection[[servicePrefixParts.join("_"), CONFIG_ENDPOINT_URL].join(shared_ini_file_loader_1.CONFIG_PREFIX_SEPARATOR)];
                if (endpointUrl)
                    return endpointUrl;
            }
        }
        const endpointUrl = profile[CONFIG_ENDPOINT_URL];
        if (endpointUrl)
            return endpointUrl;
        return undefined;
    },
    default: undefined,
});
exports.getEndpointUrlConfig = getEndpointUrlConfig;


/***/ }),

/***/ 2918:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var core = __nccwpck_require__(5829);
var utilMiddleware = __nccwpck_require__(2390);
var getEndpointFromConfig = __nccwpck_require__(1518);
var urlParser = __nccwpck_require__(4681);
var middlewareSerde = __nccwpck_require__(1238);

const resolveParamsForS3 = async (endpointParams) => {
    const bucket = endpointParams?.Bucket || "";
    if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
    }
    if (isArnBucketName(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
            throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
    }
    else if (!isDnsCompatibleBucketName(bucket) ||
        (bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:")) ||
        bucket.toLowerCase() !== bucket ||
        bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
    }
    if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
    }
    return endpointParams;
};
const DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
const IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
const DOTS_PATTERN = /\.\./;
const isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
const isArnBucketName = (bucketName) => {
    const [arn, partition, service, , , bucket] = bucketName.split(":");
    const isArn = arn === "arn" && bucketName.split(":").length >= 6;
    const isValidArn = Boolean(isArn && partition && service && bucket);
    if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
    }
    return isValidArn;
};

const createConfigValueProvider = (configKey, canonicalEndpointParamKey, config, isClientContextParam = false) => {
    const configProvider = async () => {
        let configValue;
        if (isClientContextParam) {
            const clientContextParams = config.clientContextParams;
            const nestedValue = clientContextParams?.[configKey];
            configValue = nestedValue ?? config[configKey] ?? config[canonicalEndpointParamKey];
        }
        else {
            configValue = config[configKey] ?? config[canonicalEndpointParamKey];
        }
        if (typeof configValue === "function") {
            return configValue();
        }
        return configValue;
    };
    if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
        return async () => {
            const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
            const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
            return configValue;
        };
    }
    if (configKey === "accountId" || canonicalEndpointParamKey === "AccountId") {
        return async () => {
            const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
            const configValue = credentials?.accountId ?? credentials?.AccountId;
            return configValue;
        };
    }
    if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async () => {
            if (config.isCustomEndpoint === false) {
                return undefined;
            }
            const endpoint = await configProvider();
            if (endpoint && typeof endpoint === "object") {
                if ("url" in endpoint) {
                    return endpoint.url.href;
                }
                if ("hostname" in endpoint) {
                    const { protocol, hostname, port, path } = endpoint;
                    return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
                }
            }
            return endpoint;
        };
    }
    return configProvider;
};

const toEndpointV1 = (endpoint) => {
    if (typeof endpoint === "object") {
        if ("url" in endpoint) {
            const v1Endpoint = urlParser.parseUrl(endpoint.url);
            if (endpoint.headers) {
                v1Endpoint.headers = {};
                for (const [name, values] of Object.entries(endpoint.headers)) {
                    v1Endpoint.headers[name.toLowerCase()] = values.join(", ");
                }
            }
            return v1Endpoint;
        }
        return endpoint;
    }
    return urlParser.parseUrl(endpoint);
};

const getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
    if (!clientConfig.isCustomEndpoint) {
        let endpointFromConfig;
        if (clientConfig.serviceConfiguredEndpoint) {
            endpointFromConfig = await clientConfig.serviceConfiguredEndpoint();
        }
        else {
            endpointFromConfig = await getEndpointFromConfig.getEndpointFromConfig(clientConfig.serviceId);
        }
        if (endpointFromConfig) {
            clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
            clientConfig.isCustomEndpoint = true;
        }
    }
    const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
    if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
    }
    const endpoint = clientConfig.endpointProvider(endpointParams, context);
    if (clientConfig.isCustomEndpoint && clientConfig.endpoint) {
        const customEndpoint = await clientConfig.endpoint();
        if (customEndpoint?.headers) {
            endpoint.headers ??= {};
            for (const [name, value] of Object.entries(customEndpoint.headers)) {
                endpoint.headers[name] = Array.isArray(value) ? value : [value];
            }
        }
    }
    return endpoint;
};
const resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
    const endpointParams = {};
    const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
    for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
            case "staticContextParams":
                endpointParams[name] = instruction.value;
                break;
            case "contextParams":
                endpointParams[name] = commandInput[instruction.name];
                break;
            case "clientContextParams":
            case "builtInParams":
                endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig, instruction.type !== "builtInParams")();
                break;
            case "operationContextParams":
                endpointParams[name] = instruction.get(commandInput);
                break;
            default:
                throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
    }
    if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
    }
    if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await resolveParamsForS3(endpointParams);
    }
    return endpointParams;
};

const endpointMiddleware = ({ config, instructions, }) => {
    return (next, context) => async (args) => {
        if (config.isCustomEndpoint) {
            core.setFeature(context, "ENDPOINT_OVERRIDE", "N");
        }
        const endpoint = await getEndpointFromInstructions(args.input, {
            getEndpointParameterInstructions() {
                return instructions;
            },
        }, { ...config }, context);
        context.endpointV2 = endpoint;
        context.authSchemes = endpoint.properties?.authSchemes;
        const authScheme = context.authSchemes?.[0];
        if (authScheme) {
            context["signing_region"] = authScheme.signingRegion;
            context["signing_service"] = authScheme.signingName;
            const smithyContext = utilMiddleware.getSmithyContext(context);
            const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
            if (httpAuthOption) {
                httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
                    signing_region: authScheme.signingRegion,
                    signingRegion: authScheme.signingRegion,
                    signing_service: authScheme.signingName,
                    signingName: authScheme.signingName,
                    signingRegionSet: authScheme.signingRegionSet,
                }, authScheme.properties);
            }
        }
        return next({
            ...args,
        });
    };
};

const endpointMiddlewareOptions = {
    step: "serialize",
    tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
    name: "endpointV2Middleware",
    override: true,
    relation: "before",
    toMiddleware: middlewareSerde.serializerMiddlewareOption.name,
};
const getEndpointPlugin = (config, instructions) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(endpointMiddleware({
            config,
            instructions,
        }), endpointMiddlewareOptions);
    },
});

const resolveEndpointConfig = (input) => {
    const tls = input.tls ?? true;
    const { endpoint, useDualstackEndpoint, useFipsEndpoint } = input;
    const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await utilMiddleware.normalizeProvider(endpoint)()) : undefined;
    const isCustomEndpoint = !!endpoint;
    const resolvedConfig = Object.assign(input, {
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: utilMiddleware.normalizeProvider(useDualstackEndpoint ?? false),
        useFipsEndpoint: utilMiddleware.normalizeProvider(useFipsEndpoint ?? false),
    });
    let configuredEndpointPromise = undefined;
    resolvedConfig.serviceConfiguredEndpoint = async () => {
        if (input.serviceId && !configuredEndpointPromise) {
            configuredEndpointPromise = getEndpointFromConfig.getEndpointFromConfig(input.serviceId);
        }
        return configuredEndpointPromise;
    };
    return resolvedConfig;
};

const resolveEndpointRequiredConfig = (input) => {
    const { endpoint } = input;
    if (endpoint === undefined) {
        input.endpoint = async () => {
            throw new Error("@smithy/middleware-endpoint: (default endpointRuleSet) endpoint is not set - you must configure an endpoint.");
        };
    }
    return input;
};

exports.endpointMiddleware = endpointMiddleware;
exports.endpointMiddlewareOptions = endpointMiddlewareOptions;
exports.getEndpointFromInstructions = getEndpointFromInstructions;
exports.getEndpointPlugin = getEndpointPlugin;
exports.resolveEndpointConfig = resolveEndpointConfig;
exports.resolveEndpointRequiredConfig = resolveEndpointRequiredConfig;
exports.resolveParams = resolveParams;
exports.toEndpointV1 = toEndpointV1;


/***/ }),

/***/ 6039:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var utilRetry = __nccwpck_require__(4902);
var protocolHttp = __nccwpck_require__(4418);
var serviceErrorClassification = __nccwpck_require__(6375);
var uuid = __nccwpck_require__(3634);
var utilMiddleware = __nccwpck_require__(2390);
var smithyClient = __nccwpck_require__(3570);
var isStreamingPayload = __nccwpck_require__(8977);
var serde = __nccwpck_require__(7669);

const asSdkError = (error) => {
    if (error instanceof Error)
        return error;
    if (error instanceof Object)
        return Object.assign(new Error(), error);
    if (typeof error === "string")
        return new Error(error);
    return new Error(`AWS SDK error wrapper for ${error}`);
};

const getDefaultRetryQuota = (initialRetryTokens, options) => {
    const MAX_CAPACITY = initialRetryTokens;
    const noRetryIncrement = utilRetry.NO_RETRY_INCREMENT;
    const retryCost = utilRetry.RETRY_COST;
    const timeoutRetryCost = utilRetry.TIMEOUT_RETRY_COST;
    let availableCapacity = initialRetryTokens;
    const getCapacityAmount = (error) => (error.name === "TimeoutError" ? timeoutRetryCost : retryCost);
    const hasRetryTokens = (error) => getCapacityAmount(error) <= availableCapacity;
    const retrieveRetryTokens = (error) => {
        if (!hasRetryTokens(error)) {
            throw new Error("No retry token available");
        }
        const capacityAmount = getCapacityAmount(error);
        availableCapacity -= capacityAmount;
        return capacityAmount;
    };
    const releaseRetryTokens = (capacityReleaseAmount) => {
        availableCapacity += capacityReleaseAmount ?? noRetryIncrement;
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
    };
    return Object.freeze({
        hasRetryTokens,
        retrieveRetryTokens,
        releaseRetryTokens,
    });
};

const defaultDelayDecider = (delayBase, attempts) => Math.floor(Math.min(utilRetry.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));

const defaultRetryDecider = (error) => {
    if (!error) {
        return false;
    }
    return serviceErrorClassification.isRetryableByTrait(error) || serviceErrorClassification.isClockSkewError(error) || serviceErrorClassification.isThrottlingError(error) || serviceErrorClassification.isTransientError(error);
};

class StandardRetryStrategy {
    maxAttemptsProvider;
    retryDecider;
    delayDecider;
    retryQuota;
    mode = utilRetry.RETRY_MODES.STANDARD;
    constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.retryDecider = options?.retryDecider ?? defaultRetryDecider;
        this.delayDecider = options?.delayDecider ?? defaultDelayDecider;
        this.retryQuota = options?.retryQuota ?? getDefaultRetryQuota(utilRetry.INITIAL_RETRY_TOKENS);
    }
    shouldRetry(error, attempts, maxAttempts) {
        return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
    }
    async getMaxAttempts() {
        let maxAttempts;
        try {
            maxAttempts = await this.maxAttemptsProvider();
        }
        catch (error) {
            maxAttempts = utilRetry.DEFAULT_MAX_ATTEMPTS;
        }
        return maxAttempts;
    }
    async retry(next, args, options) {
        let retryTokenAmount;
        let attempts = 0;
        let totalDelay = 0;
        const maxAttempts = await this.getMaxAttempts();
        const { request } = args;
        if (protocolHttp.HttpRequest.isInstance(request)) {
            request.headers[utilRetry.INVOCATION_ID_HEADER] = uuid.v4();
        }
        while (true) {
            try {
                if (protocolHttp.HttpRequest.isInstance(request)) {
                    request.headers[utilRetry.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
                }
                if (options?.beforeRequest) {
                    await options.beforeRequest();
                }
                const { response, output } = await next(args);
                if (options?.afterRequest) {
                    options.afterRequest(response);
                }
                this.retryQuota.releaseRetryTokens(retryTokenAmount);
                output.$metadata.attempts = attempts + 1;
                output.$metadata.totalRetryDelay = totalDelay;
                return { response, output };
            }
            catch (e) {
                const err = asSdkError(e);
                attempts++;
                if (this.shouldRetry(err, attempts, maxAttempts)) {
                    retryTokenAmount = this.retryQuota.retrieveRetryTokens(err);
                    const delayFromDecider = this.delayDecider(serviceErrorClassification.isThrottlingError(err) ? utilRetry.THROTTLING_RETRY_DELAY_BASE : utilRetry.DEFAULT_RETRY_DELAY_BASE, attempts);
                    const delayFromResponse = getDelayFromRetryAfterHeader(err.$response);
                    const delay = Math.max(delayFromResponse || 0, delayFromDecider);
                    totalDelay += delay;
                    await new Promise((resolve) => setTimeout(resolve, delay));
                    continue;
                }
                if (!err.$metadata) {
                    err.$metadata = {};
                }
                err.$metadata.attempts = attempts;
                err.$metadata.totalRetryDelay = totalDelay;
                throw err;
            }
        }
    }
}
const getDelayFromRetryAfterHeader = (response) => {
    if (!protocolHttp.HttpResponse.isInstance(response))
        return;
    const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
    if (!retryAfterHeaderName)
        return;
    const retryAfter = response.headers[retryAfterHeaderName];
    const retryAfterSeconds = Number(retryAfter);
    if (!Number.isNaN(retryAfterSeconds))
        return retryAfterSeconds * 1000;
    const retryAfterDate = new Date(retryAfter);
    return retryAfterDate.getTime() - Date.now();
};

class AdaptiveRetryStrategy extends StandardRetryStrategy {
    rateLimiter;
    constructor(maxAttemptsProvider, options) {
        const { rateLimiter, ...superOptions } = options ?? {};
        super(maxAttemptsProvider, superOptions);
        this.rateLimiter = rateLimiter ?? new utilRetry.DefaultRateLimiter();
        this.mode = utilRetry.RETRY_MODES.ADAPTIVE;
    }
    async retry(next, args) {
        return super.retry(next, args, {
            beforeRequest: async () => {
                return this.rateLimiter.getSendToken();
            },
            afterRequest: (response) => {
                this.rateLimiter.updateClientSendingRate(response);
            },
        });
    }
}

const ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
const CONFIG_MAX_ATTEMPTS = "max_attempts";
const NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        const value = env[ENV_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    configFileSelector: (profile) => {
        const value = profile[CONFIG_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    default: utilRetry.DEFAULT_MAX_ATTEMPTS,
};
const resolveRetryConfig = (input) => {
    const { retryStrategy, retryMode } = input;
    const maxAttempts = utilMiddleware.normalizeProvider(input.maxAttempts ?? utilRetry.DEFAULT_MAX_ATTEMPTS);
    let controller = retryStrategy
        ? Promise.resolve(retryStrategy)
        : undefined;
    const getDefault = async () => (await utilMiddleware.normalizeProvider(retryMode)()) === utilRetry.RETRY_MODES.ADAPTIVE
        ? new utilRetry.AdaptiveRetryStrategy(maxAttempts)
        : new utilRetry.StandardRetryStrategy(maxAttempts);
    return Object.assign(input, {
        maxAttempts,
        retryStrategy: () => (controller ??= getDefault()),
    });
};
const ENV_RETRY_MODE = "AWS_RETRY_MODE";
const CONFIG_RETRY_MODE = "retry_mode";
const NODE_RETRY_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[ENV_RETRY_MODE],
    configFileSelector: (profile) => profile[CONFIG_RETRY_MODE],
    default: utilRetry.DEFAULT_RETRY_MODE,
};

const omitRetryHeadersMiddleware = () => (next) => async (args) => {
    const { request } = args;
    if (protocolHttp.HttpRequest.isInstance(request)) {
        delete request.headers[utilRetry.INVOCATION_ID_HEADER];
        delete request.headers[utilRetry.REQUEST_HEADER];
    }
    return next(args);
};
const omitRetryHeadersMiddlewareOptions = {
    name: "omitRetryHeadersMiddleware",
    tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
    relation: "before",
    toMiddleware: "awsAuthMiddleware",
    override: true,
};
const getOmitRetryHeadersPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(omitRetryHeadersMiddleware(), omitRetryHeadersMiddlewareOptions);
    },
});

function parseRetryAfterHeader(response, logger) {
    if (!protocolHttp.HttpResponse.isInstance(response)) {
        return;
    }
    for (const header of Object.keys(response.headers)) {
        const h = header.toLowerCase();
        if (h === "retry-after") {
            const retryAfter = response.headers[header];
            let retryAfterSeconds = NaN;
            if (retryAfter.endsWith("GMT")) {
                try {
                    const date = serde.parseRfc7231DateTime(retryAfter);
                    retryAfterSeconds = (date.getTime() - Date.now()) / 1000;
                }
                catch (e) {
                    logger?.trace?.("Failed to parse retry-after header");
                    logger?.trace?.(e);
                }
            }
            else if (retryAfter.match(/ GMT, ((\d+)|(\d+\.\d+))$/)) {
                retryAfterSeconds = Number(retryAfter.match(/ GMT, ([\d.]+)$/)?.[1]);
            }
            else if (retryAfter.match(/^((\d+)|(\d+\.\d+))$/)) {
                retryAfterSeconds = Number(retryAfter);
            }
            else if (Date.parse(retryAfter) >= Date.now()) {
                retryAfterSeconds = (Date.parse(retryAfter) - Date.now()) / 1000;
            }
            if (isNaN(retryAfterSeconds)) {
                return;
            }
            return new Date(Date.now() + retryAfterSeconds * 1000);
        }
        else if (h === "x-amz-retry-after") {
            const v = response.headers[header];
            const backoffMilliseconds = Number(v);
            if (isNaN(backoffMilliseconds)) {
                logger?.trace?.(`Failed to parse x-amz-retry-after=${v}`);
                return;
            }
            return new Date(Date.now() + backoffMilliseconds);
        }
    }
}
function getRetryAfterHint(response, logger) {
    return parseRetryAfterHeader(response, logger);
}

const retryMiddleware = (options) => (next, context) => async (args) => {
    let retryStrategy = await options.retryStrategy();
    const maxAttempts = await options.maxAttempts();
    if (isRetryStrategyV2(retryStrategy)) {
        retryStrategy = retryStrategy;
        let retryToken = await retryStrategy.acquireInitialRetryToken((context["partition_id"] ?? "") + (context.__retryLongPoll ? ":longpoll" : ""));
        let lastError = new Error();
        let attempts = 0;
        let totalRetryDelay = 0;
        const { request } = args;
        const isRequest = protocolHttp.HttpRequest.isInstance(request);
        if (isRequest) {
            request.headers[utilRetry.INVOCATION_ID_HEADER] = uuid.v4();
        }
        while (true) {
            try {
                if (isRequest) {
                    request.headers[utilRetry.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
                }
                const { response, output } = await next(args);
                retryStrategy.recordSuccess(retryToken);
                output.$metadata.attempts = attempts + 1;
                output.$metadata.totalRetryDelay = totalRetryDelay;
                return { response, output };
            }
            catch (e) {
                const retryErrorInfo = getRetryErrorInfo(e, options.logger);
                lastError = asSdkError(e);
                if (isRequest && isStreamingPayload.isStreamingPayload(request)) {
                    (context.logger instanceof smithyClient.NoOpLogger ? console : context.logger)?.warn("An error was encountered in a non-retryable streaming request.");
                    throw lastError;
                }
                try {
                    retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
                }
                catch (refreshError) {
                    if (typeof refreshError.$backoff === "number") {
                        await cooldown(refreshError.$backoff);
                    }
                    if (!lastError.$metadata) {
                        lastError.$metadata = {};
                    }
                    lastError.$metadata.attempts = attempts + 1;
                    lastError.$metadata.totalRetryDelay = totalRetryDelay;
                    throw lastError;
                }
                attempts = retryToken.getRetryCount();
                const delay = retryToken.getRetryDelay();
                totalRetryDelay += delay;
                await cooldown(delay);
            }
        }
    }
    else {
        retryStrategy = retryStrategy;
        if (retryStrategy?.mode) {
            context.userAgent = [...(context.userAgent || []), ["cfg/retry-mode", retryStrategy.mode]];
        }
        return retryStrategy.retry(next, args);
    }
};
const cooldown = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" &&
    typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" &&
    typeof retryStrategy.recordSuccess !== "undefined";
const getRetryErrorInfo = (error, logger) => {
    const errorInfo = {
        error,
        errorType: getRetryErrorType(error),
    };
    const retryAfterHint = parseRetryAfterHeader(error.$response, logger);
    if (retryAfterHint) {
        errorInfo.retryAfterHint = retryAfterHint;
    }
    return errorInfo;
};
const getRetryErrorType = (error) => {
    if (serviceErrorClassification.isThrottlingError(error))
        return "THROTTLING";
    if (serviceErrorClassification.isTransientError(error))
        return "TRANSIENT";
    if (serviceErrorClassification.isServerError(error))
        return "SERVER_ERROR";
    return "CLIENT_ERROR";
};
const retryMiddlewareOptions = {
    name: "retryMiddleware",
    tags: ["RETRY"],
    step: "finalizeRequest",
    priority: "high",
    override: true,
};
const getRetryPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
    },
});

exports.AdaptiveRetryStrategy = AdaptiveRetryStrategy;
exports.CONFIG_MAX_ATTEMPTS = CONFIG_MAX_ATTEMPTS;
exports.CONFIG_RETRY_MODE = CONFIG_RETRY_MODE;
exports.ENV_MAX_ATTEMPTS = ENV_MAX_ATTEMPTS;
exports.ENV_RETRY_MODE = ENV_RETRY_MODE;
exports.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = NODE_MAX_ATTEMPT_CONFIG_OPTIONS;
exports.NODE_RETRY_MODE_CONFIG_OPTIONS = NODE_RETRY_MODE_CONFIG_OPTIONS;
exports.StandardRetryStrategy = StandardRetryStrategy;
exports.defaultDelayDecider = defaultDelayDecider;
exports.defaultRetryDecider = defaultRetryDecider;
exports.getOmitRetryHeadersPlugin = getOmitRetryHeadersPlugin;
exports.getRetryAfterHint = getRetryAfterHint;
exports.getRetryPlugin = getRetryPlugin;
exports.omitRetryHeadersMiddleware = omitRetryHeadersMiddleware;
exports.omitRetryHeadersMiddlewareOptions = omitRetryHeadersMiddlewareOptions;
exports.resolveRetryConfig = resolveRetryConfig;
exports.retryMiddleware = retryMiddleware;
exports.retryMiddlewareOptions = retryMiddlewareOptions;


/***/ }),

/***/ 8977:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isStreamingPayload = void 0;
const stream_1 = __nccwpck_require__(2781);
const isStreamingPayload = (request) => request?.body instanceof stream_1.Readable ||
    (typeof ReadableStream !== "undefined" && request?.body instanceof ReadableStream);
exports.isStreamingPayload = isStreamingPayload;


/***/ }),

/***/ 1238:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var protocolHttp = __nccwpck_require__(4418);
var endpoints = __nccwpck_require__(9745);

const deserializerMiddleware = (options, deserializer) => (next, context) => async (args) => {
    const { response } = await next(args);
    try {
        const parsed = await deserializer(response, options);
        return {
            response,
            output: parsed,
        };
    }
    catch (error) {
        Object.defineProperty(error, "$response", {
            value: response,
            enumerable: false,
            writable: false,
            configurable: false,
        });
        if (!("$metadata" in error)) {
            const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
            try {
                error.message += "\n  " + hint;
            }
            catch (e) {
                if (!context.logger || context.logger?.constructor?.name === "NoOpLogger") {
                    console.warn(hint);
                }
                else {
                    context.logger?.warn?.(hint);
                }
            }
            if (typeof error.$responseBodyText !== "undefined") {
                if (error.$response) {
                    error.$response.body = error.$responseBodyText;
                }
            }
            try {
                if (protocolHttp.HttpResponse.isInstance(response)) {
                    const { headers = {} } = response;
                    const headerEntries = Object.entries(headers);
                    error.$metadata = {
                        httpStatusCode: response.statusCode,
                        requestId: findHeader(/^x-[\w-]+-request-?id$/, headerEntries),
                        extendedRequestId: findHeader(/^x-[\w-]+-id-2$/, headerEntries),
                        cfId: findHeader(/^x-[\w-]+-cf-id$/, headerEntries),
                    };
                }
            }
            catch (e) {
            }
        }
        throw error;
    }
};
const findHeader = (pattern, headers) => {
    return (headers.find(([k]) => {
        return k.match(pattern);
    }) || [void 0, void 0])[1];
};

const serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
    const endpointConfig = options;
    const endpoint = context.endpointV2
        ? async () => endpoints.toEndpointV1(context.endpointV2)
        : endpointConfig.endpoint;
    if (!endpoint) {
        throw new Error("No valid endpoint provider available.");
    }
    const request = await serializer(args.input, { ...options, endpoint });
    return next({
        ...args,
        request,
    });
};

const deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: true,
};
const serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true,
};
function getSerdePlugin(config, serializer, deserializer) {
    return {
        applyToStack: (commandStack) => {
            commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
            commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
        },
    };
}

exports.deserializerMiddleware = deserializerMiddleware;
exports.deserializerMiddlewareOption = deserializerMiddlewareOption;
exports.getSerdePlugin = getSerdePlugin;
exports.serializerMiddleware = serializerMiddleware;
exports.serializerMiddlewareOption = serializerMiddlewareOption;


/***/ }),

/***/ 7911:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


const getAllAliases = (name, aliases) => {
    const _aliases = [];
    if (name) {
        _aliases.push(name);
    }
    if (aliases) {
        for (const alias of aliases) {
            _aliases.push(alias);
        }
    }
    return _aliases;
};
const getMiddlewareNameWithAliases = (name, aliases) => {
    return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
};
const constructStack = () => {
    let absoluteEntries = [];
    let relativeEntries = [];
    let identifyOnResolve = false;
    const entriesNameSet = new Set();
    const sort = (entries) => entries.sort((a, b) => stepWeights[b.step] - stepWeights[a.step] ||
        priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]);
    const removeByName = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            const aliases = getAllAliases(entry.name, entry.aliases);
            if (aliases.includes(toRemove)) {
                isRemoved = true;
                for (const alias of aliases) {
                    entriesNameSet.delete(alias);
                }
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const removeByReference = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            if (entry.middleware === toRemove) {
                isRemoved = true;
                for (const alias of getAllAliases(entry.name, entry.aliases)) {
                    entriesNameSet.delete(alias);
                }
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const cloneTo = (toStack) => {
        absoluteEntries.forEach((entry) => {
            toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
            toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        toStack.identifyOnResolve?.(stack.identifyOnResolve());
        return toStack;
    };
    const expandRelativeMiddlewareList = (from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        return expandedMiddlewareList;
    };
    const getMiddlewareList = (debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
                normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
                normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
            if (entry.toMiddleware) {
                const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
                if (toMiddleware === undefined) {
                    if (debug) {
                        return;
                    }
                    throw new Error(`${entry.toMiddleware} is not found when adding ` +
                        `${getMiddlewareNameWithAliases(entry.name, entry.aliases)} ` +
                        `middleware ${entry.relation} ${entry.toMiddleware}`);
                }
                if (entry.relation === "after") {
                    toMiddleware.after.push(entry);
                }
                if (entry.relation === "before") {
                    toMiddleware.before.push(entry);
                }
            }
        });
        const mainChain = sort(normalizedAbsoluteEntries)
            .map(expandRelativeMiddlewareList)
            .reduce((wholeList, expandedMiddlewareList) => {
            wholeList.push(...expandedMiddlewareList);
            return wholeList;
        }, []);
        return mainChain;
    };
    const stack = {
        add: (middleware, options = {}) => {
            const { name, override, aliases: _aliases } = options;
            const entry = {
                step: "initialize",
                priority: "normal",
                middleware,
                ...options,
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
                if (aliases.some((alias) => entriesNameSet.has(alias))) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                    for (const alias of aliases) {
                        const toOverrideIndex = absoluteEntries.findIndex((entry) => entry.name === alias || entry.aliases?.some((a) => a === alias));
                        if (toOverrideIndex === -1) {
                            continue;
                        }
                        const toOverride = absoluteEntries[toOverrideIndex];
                        if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                            throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ` +
                                `${toOverride.priority} priority in ${toOverride.step} step cannot ` +
                                `be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ` +
                                `${entry.priority} priority in ${entry.step} step.`);
                        }
                        absoluteEntries.splice(toOverrideIndex, 1);
                    }
                }
                for (const alias of aliases) {
                    entriesNameSet.add(alias);
                }
            }
            absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
            const { name, override, aliases: _aliases } = options;
            const entry = {
                middleware,
                ...options,
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
                if (aliases.some((alias) => entriesNameSet.has(alias))) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                    for (const alias of aliases) {
                        const toOverrideIndex = relativeEntries.findIndex((entry) => entry.name === alias || entry.aliases?.some((a) => a === alias));
                        if (toOverrideIndex === -1) {
                            continue;
                        }
                        const toOverride = relativeEntries[toOverrideIndex];
                        if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                            throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ` +
                                `${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden ` +
                                `by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} ` +
                                `"${entry.toMiddleware}" middleware.`);
                        }
                        relativeEntries.splice(toOverrideIndex, 1);
                    }
                }
                for (const alias of aliases) {
                    entriesNameSet.add(alias);
                }
            }
            relativeEntries.push(entry);
        },
        clone: () => cloneTo(constructStack()),
        use: (plugin) => {
            plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
            if (typeof toRemove === "string")
                return removeByName(toRemove);
            else
                return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
            let isRemoved = false;
            const filterCb = (entry) => {
                const { tags, name, aliases: _aliases } = entry;
                if (tags && tags.includes(toRemove)) {
                    const aliases = getAllAliases(name, _aliases);
                    for (const alias of aliases) {
                        entriesNameSet.delete(alias);
                    }
                    isRemoved = true;
                    return false;
                }
                return true;
            };
            absoluteEntries = absoluteEntries.filter(filterCb);
            relativeEntries = relativeEntries.filter(filterCb);
            return isRemoved;
        },
        concat: (from) => {
            const cloned = cloneTo(constructStack());
            cloned.use(from);
            cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
            return cloned;
        },
        applyToStack: cloneTo,
        identify: () => {
            return getMiddlewareList(true).map((mw) => {
                const step = mw.step ??
                    mw.relation +
                        " " +
                        mw.toMiddleware;
                return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
            });
        },
        identifyOnResolve(toggle) {
            if (typeof toggle === "boolean")
                identifyOnResolve = toggle;
            return identifyOnResolve;
        },
        resolve: (handler, context) => {
            for (const middleware of getMiddlewareList()
                .map((entry) => entry.middleware)
                .reverse()) {
                handler = middleware(handler, context);
            }
            if (identifyOnResolve) {
                console.log(stack.identify());
            }
            return handler;
        },
    };
    return stack;
};
const stepWeights = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1,
};
const priorityWeights = {
    high: 3,
    normal: 2,
    low: 1,
};

exports.constructStack = constructStack;


/***/ }),

/***/ 3461:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var propertyProvider = __nccwpck_require__(9721);
var sharedIniFileLoader = __nccwpck_require__(3507);

function getSelectorName(functionString) {
    try {
        const constants = new Set(Array.from(functionString.match(/([A-Z_]){3,}/g) ?? []));
        constants.delete("CONFIG");
        constants.delete("CONFIG_PREFIX_SEPARATOR");
        constants.delete("ENV");
        return [...constants].join(", ");
    }
    catch (e) {
        return functionString;
    }
}

const fromEnv = (envVarSelector, options) => async () => {
    try {
        const config = envVarSelector(process.env, options);
        if (config === undefined) {
            throw new Error();
        }
        return config;
    }
    catch (e) {
        throw new propertyProvider.CredentialsProviderError(e.message || `Not found in ENV: ${getSelectorName(envVarSelector.toString())}`, { logger: options?.logger });
    }
};

const fromSharedConfigFiles = (configSelector, { preferredFile = "config", ...init } = {}) => async () => {
    const profile = sharedIniFileLoader.getProfileName(init);
    const { configFile, credentialsFile } = await sharedIniFileLoader.loadSharedConfigFiles(init);
    const profileFromCredentials = credentialsFile[profile] || {};
    const profileFromConfig = configFile[profile] || {};
    const mergedProfile = preferredFile === "config"
        ? { ...profileFromCredentials, ...profileFromConfig }
        : { ...profileFromConfig, ...profileFromCredentials };
    try {
        const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
        const configValue = configSelector(mergedProfile, cfgFile);
        if (configValue === undefined) {
            throw new Error();
        }
        return configValue;
    }
    catch (e) {
        throw new propertyProvider.CredentialsProviderError(e.message || `Not found in config files w/ profile [${profile}]: ${getSelectorName(configSelector.toString())}`, { logger: init.logger });
    }
};

const isFunction = (func) => typeof func === "function";
const fromStatic = (defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : propertyProvider.fromStatic(defaultValue);

const loadConfig = ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => {
    const { signingName, logger } = configuration;
    const envOptions = { signingName, logger };
    return propertyProvider.memoize(propertyProvider.chain(fromEnv(environmentVariableSelector, envOptions), fromSharedConfigFiles(configFileSelector, configuration), fromStatic(defaultValue)));
};

exports.loadConfig = loadConfig;


/***/ }),

/***/ 258:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var protocolHttp = __nccwpck_require__(4418);
var querystringBuilder = __nccwpck_require__(8031);
var node_https = __nccwpck_require__(2286);
var node_stream = __nccwpck_require__(4492);
var http2 = __nccwpck_require__(2725);

function buildAbortError(abortSignal) {
    const reason = abortSignal && typeof abortSignal === "object" && "reason" in abortSignal
        ? abortSignal.reason
        : undefined;
    if (reason) {
        if (reason instanceof Error) {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            abortError.cause = reason;
            return abortError;
        }
        const abortError = new Error(String(reason));
        abortError.name = "AbortError";
        return abortError;
    }
    const abortError = new Error("Request aborted");
    abortError.name = "AbortError";
    return abortError;
}

const NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];

const getTransformedHeaders = (headers) => {
    const transformedHeaders = {};
    for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
    }
    return transformedHeaders;
};

const timing = {
    setTimeout: (cb, ms) => setTimeout(cb, ms),
    clearTimeout: (timeoutId) => clearTimeout(timeoutId),
};

const DEFER_EVENT_LISTENER_TIME$2 = 1000;
const setConnectionTimeout = (request, reject, timeoutInMs = 0) => {
    if (!timeoutInMs) {
        return -1;
    }
    const registerTimeout = (offset) => {
        const timeoutId = timing.setTimeout(() => {
            request.destroy();
            reject(Object.assign(new Error(`@smithy/node-http-handler - the request socket did not establish a connection with the server within the configured timeout of ${timeoutInMs} ms.`), {
                name: "TimeoutError",
            }));
        }, timeoutInMs - offset);
        const doWithSocket = (socket) => {
            if (socket?.connecting) {
                socket.on("connect", () => {
                    timing.clearTimeout(timeoutId);
                });
            }
            else {
                timing.clearTimeout(timeoutId);
            }
        };
        if (request.socket) {
            doWithSocket(request.socket);
        }
        else {
            request.on("socket", doWithSocket);
        }
    };
    if (timeoutInMs < 2000) {
        registerTimeout(0);
        return 0;
    }
    return timing.setTimeout(registerTimeout.bind(null, DEFER_EVENT_LISTENER_TIME$2), DEFER_EVENT_LISTENER_TIME$2);
};

const setRequestTimeout = (req, reject, timeoutInMs = 0, throwOnRequestTimeout, logger) => {
    if (timeoutInMs) {
        return timing.setTimeout(() => {
            let msg = `@smithy/node-http-handler - [${throwOnRequestTimeout ? "ERROR" : "WARN"}] a request has exceeded the configured ${timeoutInMs} ms requestTimeout.`;
            if (throwOnRequestTimeout) {
                const error = Object.assign(new Error(msg), {
                    name: "TimeoutError",
                    code: "ETIMEDOUT",
                });
                req.destroy(error);
                reject(error);
            }
            else {
                msg += ` Init client requestHandler with throwOnRequestTimeout=true to turn this into an error.`;
                logger?.warn?.(msg);
            }
        }, timeoutInMs);
    }
    return -1;
};

const DEFER_EVENT_LISTENER_TIME$1 = 3000;
const setSocketKeepAlive = (request, { keepAlive, keepAliveMsecs }, deferTimeMs = DEFER_EVENT_LISTENER_TIME$1) => {
    if (keepAlive !== true) {
        return -1;
    }
    const registerListener = () => {
        if (request.socket) {
            request.socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
        }
        else {
            request.on("socket", (socket) => {
                socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
            });
        }
    };
    if (deferTimeMs === 0) {
        registerListener();
        return 0;
    }
    return timing.setTimeout(registerListener, deferTimeMs);
};

const DEFER_EVENT_LISTENER_TIME = 3000;
const setSocketTimeout = (request, reject, timeoutInMs = 0) => {
    const registerTimeout = (offset) => {
        const timeout = timeoutInMs - offset;
        const onTimeout = () => {
            request.destroy();
            reject(Object.assign(new Error(`@smithy/node-http-handler - the request socket timed out after ${timeoutInMs} ms of inactivity (configured by client requestHandler).`), { name: "TimeoutError" }));
        };
        if (request.socket) {
            request.socket.setTimeout(timeout, onTimeout);
            request.on("close", () => request.socket?.removeListener("timeout", onTimeout));
        }
        else {
            request.setTimeout(timeout, onTimeout);
        }
    };
    if (0 < timeoutInMs && timeoutInMs < 6000) {
        registerTimeout(0);
        return 0;
    }
    return timing.setTimeout(registerTimeout.bind(null, timeoutInMs === 0 ? 0 : DEFER_EVENT_LISTENER_TIME), DEFER_EVENT_LISTENER_TIME);
};

const MIN_WAIT_TIME = 6_000;
async function writeRequestBody(httpRequest, request, maxContinueTimeoutMs = MIN_WAIT_TIME, externalAgent = false) {
    const headers = request.headers ?? {};
    const expect = headers.Expect || headers.expect;
    let timeoutId = -1;
    let sendBody = true;
    if (!externalAgent && expect === "100-continue") {
        sendBody = await Promise.race([
            new Promise((resolve) => {
                timeoutId = Number(timing.setTimeout(() => resolve(true), Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
            }),
            new Promise((resolve) => {
                httpRequest.on("continue", () => {
                    timing.clearTimeout(timeoutId);
                    resolve(true);
                });
                httpRequest.on("response", () => {
                    timing.clearTimeout(timeoutId);
                    resolve(false);
                });
                httpRequest.on("error", () => {
                    timing.clearTimeout(timeoutId);
                    resolve(false);
                });
            }),
        ]);
    }
    if (sendBody) {
        writeBody(httpRequest, request.body);
    }
}
function writeBody(httpRequest, body) {
    if (body instanceof node_stream.Readable) {
        body.pipe(httpRequest);
        return;
    }
    if (body) {
        const isBuffer = Buffer.isBuffer(body);
        const isString = typeof body === "string";
        if (isBuffer || isString) {
            if (isBuffer && body.byteLength === 0) {
                httpRequest.end();
            }
            else {
                httpRequest.end(body);
            }
            return;
        }
        const uint8 = body;
        if (typeof uint8 === "object" &&
            uint8.buffer &&
            typeof uint8.byteOffset === "number" &&
            typeof uint8.byteLength === "number") {
            httpRequest.end(Buffer.from(uint8.buffer, uint8.byteOffset, uint8.byteLength));
            return;
        }
        httpRequest.end(Buffer.from(body));
        return;
    }
    httpRequest.end();
}

const DEFAULT_REQUEST_TIMEOUT = 0;
let hAgent = undefined;
let hRequest = undefined;
class NodeHttpHandler {
    config;
    configProvider;
    socketWarningTimestamp = 0;
    externalAgent = false;
    metadata = { handlerProtocol: "http/1.1" };
    static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
            return instanceOrOptions;
        }
        return new NodeHttpHandler(instanceOrOptions);
    }
    static checkSocketUsage(agent, socketWarningTimestamp, logger = console) {
        const { sockets, requests, maxSockets } = agent;
        if (typeof maxSockets !== "number" || maxSockets === Infinity) {
            return socketWarningTimestamp;
        }
        const interval = 15_000;
        if (Date.now() - interval < socketWarningTimestamp) {
            return socketWarningTimestamp;
        }
        if (sockets && requests) {
            for (const origin in sockets) {
                const socketsInUse = sockets[origin]?.length ?? 0;
                const requestsEnqueued = requests[origin]?.length ?? 0;
                if (socketsInUse >= maxSockets && requestsEnqueued >= 2 * maxSockets) {
                    logger?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${socketsInUse} and ${requestsEnqueued} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`);
                    return Date.now();
                }
            }
        }
        return socketWarningTimestamp;
    }
    constructor(options) {
        this.configProvider = new Promise((resolve, reject) => {
            if (typeof options === "function") {
                options()
                    .then((_options) => {
                    resolve(this.resolveDefaultConfig(_options));
                })
                    .catch(reject);
            }
            else {
                resolve(this.resolveDefaultConfig(options));
            }
        });
    }
    destroy() {
        this.config?.httpAgent?.destroy();
        this.config?.httpsAgent?.destroy();
    }
    async handle(request, { abortSignal, requestTimeout } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
        }
        const config = this.config;
        const isSSL = request.protocol === "https:";
        if (!isSSL && !this.config.httpAgent) {
            this.config.httpAgent = await this.config.httpAgentProvider();
        }
        return new Promise((_resolve, _reject) => {
            let writeRequestBodyPromise = undefined;
            const timeouts = [];
            const resolve = async (arg) => {
                await writeRequestBodyPromise;
                timeouts.forEach(timing.clearTimeout);
                _resolve(arg);
            };
            const reject = async (arg) => {
                await writeRequestBodyPromise;
                timeouts.forEach(timing.clearTimeout);
                _reject(arg);
            };
            if (abortSignal?.aborted) {
                const abortError = buildAbortError(abortSignal);
                reject(abortError);
                return;
            }
            const headers = request.headers ?? {};
            const expectContinue = (headers.Expect ?? headers.expect) === "100-continue";
            let agent = isSSL ? config.httpsAgent : config.httpAgent;
            if (expectContinue && !this.externalAgent) {
                agent = new (isSSL ? node_https.Agent : hAgent)({
                    keepAlive: false,
                    maxSockets: Infinity,
                });
            }
            timeouts.push(timing.setTimeout(() => {
                this.socketWarningTimestamp = NodeHttpHandler.checkSocketUsage(agent, this.socketWarningTimestamp, config.logger);
            }, config.socketAcquisitionWarningTimeout ?? (config.requestTimeout ?? 2000) + (config.connectionTimeout ?? 1000)));
            const queryString = querystringBuilder.buildQueryString(request.query || {});
            let auth = undefined;
            if (request.username != null || request.password != null) {
                const username = request.username ?? "";
                const password = request.password ?? "";
                auth = `${username}:${password}`;
            }
            let path = request.path;
            if (queryString) {
                path += `?${queryString}`;
            }
            if (request.fragment) {
                path += `#${request.fragment}`;
            }
            let hostname = request.hostname ?? "";
            if (hostname[0] === "[" && hostname.endsWith("]")) {
                hostname = request.hostname.slice(1, -1);
            }
            else {
                hostname = request.hostname;
            }
            const nodeHttpsOptions = {
                headers: request.headers,
                host: hostname,
                method: request.method,
                path,
                port: request.port,
                agent,
                auth,
            };
            const requestFunc = isSSL ? node_https.request : hRequest;
            const req = requestFunc(nodeHttpsOptions, (res) => {
                const httpResponse = new protocolHttp.HttpResponse({
                    statusCode: res.statusCode || -1,
                    reason: res.statusMessage,
                    headers: getTransformedHeaders(res.headers),
                    body: res,
                });
                resolve({ response: httpResponse });
            });
            req.on("error", (err) => {
                if (NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
                    reject(Object.assign(err, { name: "TimeoutError" }));
                }
                else {
                    reject(err);
                }
            });
            if (abortSignal) {
                const onAbort = () => {
                    req.destroy();
                    const abortError = buildAbortError(abortSignal);
                    reject(abortError);
                };
                if (typeof abortSignal.addEventListener === "function") {
                    const signal = abortSignal;
                    signal.addEventListener("abort", onAbort, { once: true });
                    req.once("close", () => signal.removeEventListener("abort", onAbort));
                }
                else {
                    abortSignal.onabort = onAbort;
                }
            }
            const effectiveRequestTimeout = requestTimeout ?? config.requestTimeout;
            timeouts.push(setConnectionTimeout(req, reject, config.connectionTimeout));
            timeouts.push(setRequestTimeout(req, reject, effectiveRequestTimeout, config.throwOnRequestTimeout, config.logger ?? console));
            timeouts.push(setSocketTimeout(req, reject, config.socketTimeout));
            const httpAgent = nodeHttpsOptions.agent;
            if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
                timeouts.push(setSocketKeepAlive(req, {
                    keepAlive: httpAgent.keepAlive,
                    keepAliveMsecs: httpAgent.keepAliveMsecs,
                }));
            }
            writeRequestBodyPromise = writeRequestBody(req, request, effectiveRequestTimeout, this.externalAgent).catch((e) => {
                timeouts.forEach(timing.clearTimeout);
                return _reject(e);
            });
        });
    }
    updateHttpClientConfig(key, value) {
        this.config = undefined;
        this.configProvider = this.configProvider.then((config) => {
            return {
                ...config,
                [key]: value,
            };
        });
    }
    httpHandlerConfigs() {
        return this.config ?? {};
    }
    resolveDefaultConfig(options) {
        const { requestTimeout, connectionTimeout, socketTimeout, socketAcquisitionWarningTimeout, httpAgent, httpsAgent, throwOnRequestTimeout, logger, } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
            connectionTimeout,
            requestTimeout,
            socketTimeout,
            socketAcquisitionWarningTimeout,
            throwOnRequestTimeout,
            httpAgentProvider: async () => {
                const { Agent, request } = await Promise.resolve(/* import() */).then(__nccwpck_require__.t.bind(__nccwpck_require__, 8849, 23));
                hRequest = request;
                hAgent = Agent;
                if (httpAgent instanceof hAgent || typeof httpAgent?.destroy === "function") {
                    this.externalAgent = true;
                    return httpAgent;
                }
                return new hAgent({ keepAlive, maxSockets, ...httpAgent });
            },
            httpsAgent: (() => {
                if (httpsAgent instanceof node_https.Agent || typeof httpsAgent?.destroy === "function") {
                    this.externalAgent = true;
                    return httpsAgent;
                }
                return new node_https.Agent({ keepAlive, maxSockets, ...httpsAgent });
            })(),
            logger,
        };
    }
}

const ids = new Uint16Array(1);
class ClientHttp2SessionRef {
    id = ids[0]++;
    total = 0;
    max = 0;
    session;
    refs = 0;
    constructor(session) {
        session.unref();
        this.session = session;
    }
    retain() {
        if (this.session.destroyed) {
            throw new Error("@smithy/node-http-handler - cannot acquire reference to destroyed session.");
        }
        this.refs += 1;
        this.total += 1;
        this.max = Math.max(this.refs, this.max);
        this.session.ref();
    }
    free() {
        if (this.session.destroyed) {
            return;
        }
        this.refs -= 1;
        if (this.refs === 0) {
            this.session.unref();
        }
        if (this.refs < 0) {
            throw new Error("@smithy/node-http-handler - ClientHttp2Session refcount at zero, cannot decrement.");
        }
    }
    deref() {
        return this.session;
    }
    close() {
        if (!this.session.closed) {
            this.session.close();
        }
    }
    destroy() {
        this.refs = 0;
        if (!this.session.destroyed) {
            this.session.destroy();
        }
    }
    useCount() {
        return this.refs;
    }
}

class NodeHttp2ConnectionPool {
    sessions = [];
    maxConcurrency = 0;
    constructor(sessions) {
        this.sessions = (sessions ?? []).map((session) => new ClientHttp2SessionRef(session));
    }
    poll() {
        let cleanup = false;
        for (const session of this.sessions) {
            if (session.deref().destroyed) {
                cleanup = true;
                continue;
            }
            if (!this.maxConcurrency || session.useCount() < this.maxConcurrency) {
                return session;
            }
        }
        if (cleanup) {
            for (const session of this.sessions) {
                if (session.deref().destroyed) {
                    this.remove(session);
                }
            }
        }
    }
    offerLast(ref) {
        this.sessions.push(ref);
    }
    remove(ref) {
        const ix = this.sessions.indexOf(ref);
        if (ix > -1) {
            this.sessions.splice(ix, 1);
        }
    }
    [Symbol.iterator]() {
        return this.sessions[Symbol.iterator]();
    }
    setMaxConcurrency(maxConcurrency) {
        this.maxConcurrency = maxConcurrency;
    }
    destroy(ref) {
        this.remove(ref);
        ref.destroy();
    }
}

class NodeHttp2ConnectionManager {
    config;
    connectionPools = new Map();
    constructor(config) {
        this.config = config;
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
            throw new RangeError("maxConcurrency must be greater than zero.");
        }
    }
    lease(requestContext, connectionConfiguration) {
        const url = this.getUrlString(requestContext);
        const pool = this.getPool(url);
        if (!this.config.disableConcurrency && !connectionConfiguration.isEventStream) {
            const available = pool.poll();
            if (available) {
                available.retain();
                return available;
            }
        }
        const ref = new ClientHttp2SessionRef(http2.connect(url));
        const session = ref.deref();
        if (this.config.maxConcurrency) {
            session.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (err) => {
                if (err) {
                    throw new Error("Fail to set maxConcurrentStreams to " +
                        this.config.maxConcurrency +
                        "when creating new session for " +
                        requestContext.destination.toString());
                }
            });
        }
        const graceful = () => {
            this.removeFromPoolAndClose(url, ref);
        };
        const ensureDestroyed = () => {
            this.removeFromPoolAndCheckedDestroy(url, ref);
        };
        session.on("goaway", graceful);
        session.on("error", ensureDestroyed);
        session.on("frameError", ensureDestroyed);
        session.on("close", ensureDestroyed);
        if (connectionConfiguration.requestTimeout) {
            session.setTimeout(connectionConfiguration.requestTimeout, ensureDestroyed);
        }
        pool.offerLast(ref);
        ref.retain();
        return ref;
    }
    release(_requestContext, ref) {
        ref.free();
    }
    createIsolatedSession(requestContext, connectionConfiguration) {
        const url = this.getUrlString(requestContext);
        const ref = new ClientHttp2SessionRef(http2.connect(url));
        const session = ref.deref();
        session.settings({ maxConcurrentStreams: 1 });
        const ensureDestroyed = () => {
            ref.destroy();
        };
        session.on("error", ensureDestroyed);
        session.on("frameError", ensureDestroyed);
        session.on("close", ensureDestroyed);
        if (connectionConfiguration.requestTimeout) {
            session.setTimeout(connectionConfiguration.requestTimeout, ensureDestroyed);
        }
        ref.retain();
        return ref;
    }
    destroy() {
        for (const [url, connectionPool] of this.connectionPools) {
            for (const session of [...connectionPool]) {
                session.destroy();
            }
            this.connectionPools.delete(url);
        }
    }
    setMaxConcurrentStreams(maxConcurrentStreams) {
        if (maxConcurrentStreams && maxConcurrentStreams <= 0) {
            throw new RangeError("maxConcurrentStreams must be greater than zero.");
        }
        this.config.maxConcurrency = maxConcurrentStreams;
        for (const pool of this.connectionPools.values()) {
            pool.setMaxConcurrency(maxConcurrentStreams);
        }
    }
    setDisableConcurrentStreams(disableConcurrentStreams) {
        this.config.disableConcurrency = disableConcurrentStreams;
    }
    debug() {
        const pools = {};
        for (const [url, pool] of this.connectionPools) {
            const sessions = [];
            for (const ref of pool) {
                sessions.push({
                    id: ref.id,
                    active: ref.useCount(),
                    maxConcurrent: ref.max,
                    totalRequests: ref.total,
                });
            }
            pools[url] = { sessions };
        }
        return pools;
    }
    removeFromPoolAndClose(authority, ref) {
        this.connectionPools.get(authority)?.remove(ref);
        ref.close();
    }
    removeFromPoolAndCheckedDestroy(authority, ref) {
        this.connectionPools.get(authority)?.remove(ref);
        ref.destroy();
    }
    getPool(url) {
        if (!this.connectionPools.has(url)) {
            const pool = new NodeHttp2ConnectionPool();
            if (this.config.maxConcurrency) {
                pool.setMaxConcurrency(this.config.maxConcurrency);
            }
            this.connectionPools.set(url, pool);
        }
        return this.connectionPools.get(url);
    }
    getUrlString(request) {
        return request.destination.toString();
    }
}

class NodeHttp2Handler {
    config;
    configProvider;
    metadata = { handlerProtocol: "h2" };
    connectionManager = new NodeHttp2ConnectionManager({});
    static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
            return instanceOrOptions;
        }
        return new NodeHttp2Handler(instanceOrOptions);
    }
    constructor(options) {
        this.configProvider = new Promise((resolve, reject) => {
            if (typeof options === "function") {
                options()
                    .then((opts) => {
                    resolve(opts || {});
                })
                    .catch(reject);
            }
            else {
                resolve(options || {});
            }
        });
    }
    destroy() {
        this.connectionManager.destroy();
    }
    async handle(request, { abortSignal, requestTimeout, isEventStream } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
            const { disableConcurrentStreams, maxConcurrentStreams } = this.config;
            this.connectionManager.setDisableConcurrentStreams(disableConcurrentStreams ?? false);
            if (maxConcurrentStreams) {
                this.connectionManager.setMaxConcurrentStreams(maxConcurrentStreams);
            }
        }
        const { requestTimeout: configRequestTimeout, disableConcurrentStreams } = this.config;
        const useIsolatedSession = disableConcurrentStreams || isEventStream;
        const effectiveRequestTimeout = requestTimeout ?? configRequestTimeout;
        return new Promise((_resolve, _reject) => {
            let fulfilled = false;
            let writeRequestBodyPromise = undefined;
            const resolve = async (arg) => {
                await writeRequestBodyPromise;
                _resolve(arg);
            };
            const reject = async (arg) => {
                await writeRequestBodyPromise;
                _reject(arg);
            };
            if (abortSignal?.aborted) {
                fulfilled = true;
                const abortError = buildAbortError(abortSignal);
                reject(abortError);
                return;
            }
            const { hostname, method, port, protocol, query } = request;
            let auth = "";
            if (request.username != null || request.password != null) {
                const username = request.username ?? "";
                const password = request.password ?? "";
                auth = `${username}:${password}@`;
            }
            const authority = `${protocol}//${auth}${hostname}${port ? `:${port}` : ""}`;
            const requestContext = { destination: new URL(authority) };
            const connectConfig = {
                requestTimeout: this.config?.sessionTimeout,
                isEventStream,
            };
            const ref = useIsolatedSession
                ? this.connectionManager.createIsolatedSession(requestContext, connectConfig)
                : this.connectionManager.lease(requestContext, connectConfig);
            const session = ref.deref();
            const rejectWithDestroy = (err) => {
                if (useIsolatedSession) {
                    ref.destroy();
                }
                fulfilled = true;
                reject(err);
            };
            const queryString = querystringBuilder.buildQueryString(query ?? {});
            let path = request.path;
            if (queryString) {
                path += `?${queryString}`;
            }
            if (request.fragment) {
                path += `#${request.fragment}`;
            }
            const clientHttp2Stream = session.request({
                ...request.headers,
                [http2.constants.HTTP2_HEADER_PATH]: path,
                [http2.constants.HTTP2_HEADER_METHOD]: method,
            });
            if (effectiveRequestTimeout) {
                clientHttp2Stream.setTimeout(effectiveRequestTimeout, () => {
                    clientHttp2Stream.close();
                    const timeoutError = new Error(`Stream timed out because of no activity for ${effectiveRequestTimeout} ms`);
                    timeoutError.name = "TimeoutError";
                    rejectWithDestroy(timeoutError);
                });
            }
            if (abortSignal) {
                const onAbort = () => {
                    clientHttp2Stream.close();
                    const abortError = buildAbortError(abortSignal);
                    rejectWithDestroy(abortError);
                };
                if (typeof abortSignal.addEventListener === "function") {
                    const signal = abortSignal;
                    signal.addEventListener("abort", onAbort, { once: true });
                    clientHttp2Stream.once("close", () => signal.removeEventListener("abort", onAbort));
                }
                else {
                    abortSignal.onabort = onAbort;
                }
            }
            clientHttp2Stream.on("frameError", (type, code, id) => {
                rejectWithDestroy(new Error(`Frame type id ${type} in stream id ${id} has failed with code ${code}.`));
            });
            clientHttp2Stream.on("error", rejectWithDestroy);
            clientHttp2Stream.on("aborted", () => {
                rejectWithDestroy(new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${clientHttp2Stream.rstCode}.`));
            });
            clientHttp2Stream.on("response", (headers) => {
                const httpResponse = new protocolHttp.HttpResponse({
                    statusCode: headers[":status"] ?? -1,
                    headers: getTransformedHeaders(headers),
                    body: clientHttp2Stream,
                });
                fulfilled = true;
                resolve({ response: httpResponse });
                if (useIsolatedSession) {
                    session.close();
                }
            });
            clientHttp2Stream.on("close", () => {
                if (useIsolatedSession) {
                    ref.destroy();
                }
                else {
                    this.connectionManager.release(requestContext, ref);
                }
                if (!fulfilled) {
                    rejectWithDestroy(new Error("Unexpected error: http2 request did not get a response"));
                }
            });
            writeRequestBodyPromise = writeRequestBody(clientHttp2Stream, request, effectiveRequestTimeout);
        });
    }
    updateHttpClientConfig(key, value) {
        this.config = undefined;
        this.configProvider = this.configProvider.then((config) => {
            return {
                ...config,
                [key]: value,
            };
        });
    }
    httpHandlerConfigs() {
        return this.config ?? {};
    }
}

class Collector extends node_stream.Writable {
    bufferedBytes = [];
    _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
    }
}

const streamCollector = (stream) => {
    if (isReadableStreamInstance(stream)) {
        return collectReadableStream(stream);
    }
    return new Promise((resolve, reject) => {
        const collector = new Collector();
        stream.pipe(collector);
        stream.on("error", (err) => {
            collector.end();
            reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function () {
            const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
            resolve(bytes);
        });
    });
};
const isReadableStreamInstance = (stream) => typeof ReadableStream === "function" && stream instanceof ReadableStream;
async function collectReadableStream(stream) {
    const chunks = [];
    const reader = stream.getReader();
    let isDone = false;
    let length = 0;
    while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
            chunks.push(value);
            length += value.length;
        }
        isDone = done;
    }
    const collected = new Uint8Array(length);
    let offset = 0;
    for (const chunk of chunks) {
        collected.set(chunk, offset);
        offset += chunk.length;
    }
    return collected;
}

exports.DEFAULT_REQUEST_TIMEOUT = DEFAULT_REQUEST_TIMEOUT;
exports.NodeHttp2Handler = NodeHttp2Handler;
exports.NodeHttpHandler = NodeHttpHandler;
exports.streamCollector = streamCollector;


/***/ }),

/***/ 9721:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


class ProviderError extends Error {
    name = "ProviderError";
    tryNextLink;
    constructor(message, options = true) {
        let logger;
        let tryNextLink = true;
        if (typeof options === "boolean") {
            logger = undefined;
            tryNextLink = options;
        }
        else if (options != null && typeof options === "object") {
            logger = options.logger;
            tryNextLink = options.tryNextLink ?? true;
        }
        super(message);
        this.tryNextLink = tryNextLink;
        Object.setPrototypeOf(this, ProviderError.prototype);
        logger?.debug?.(`@smithy/property-provider ${tryNextLink ? "->" : "(!)"} ${message}`);
    }
    static from(error, options = true) {
        return Object.assign(new this(error.message, options), error);
    }
}

class CredentialsProviderError extends ProviderError {
    name = "CredentialsProviderError";
    constructor(message, options = true) {
        super(message, options);
        Object.setPrototypeOf(this, CredentialsProviderError.prototype);
    }
}

class TokenProviderError extends ProviderError {
    name = "TokenProviderError";
    constructor(message, options = true) {
        super(message, options);
        Object.setPrototypeOf(this, TokenProviderError.prototype);
    }
}

const chain = (...providers) => async () => {
    if (providers.length === 0) {
        throw new ProviderError("No providers in chain");
    }
    let lastProviderError;
    for (const provider of providers) {
        try {
            const credentials = await provider();
            return credentials;
        }
        catch (err) {
            lastProviderError = err;
            if (err?.tryNextLink) {
                continue;
            }
            throw err;
        }
    }
    throw lastProviderError;
};

const fromStatic = (staticValue) => () => Promise.resolve(staticValue);

const memoize = (provider, isExpired, requiresRefresh) => {
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async () => {
        if (!pending) {
            pending = provider();
        }
        try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
        }
        finally {
            pending = undefined;
        }
        return resolved;
    };
    if (isExpired === undefined) {
        return async (options) => {
            if (!hasResult || options?.forceRefresh) {
                resolved = await coalesceProvider();
            }
            return resolved;
        };
    }
    return async (options) => {
        if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
        }
        if (isConstant) {
            return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
        }
        if (isExpired(resolved)) {
            await coalesceProvider();
            return resolved;
        }
        return resolved;
    };
};

exports.CredentialsProviderError = CredentialsProviderError;
exports.ProviderError = ProviderError;
exports.TokenProviderError = TokenProviderError;
exports.chain = chain;
exports.fromStatic = fromStatic;
exports.memoize = memoize;


/***/ }),

/***/ 4418:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var types = __nccwpck_require__(5756);

const getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
    return {
        setHttpHandler(handler) {
            runtimeConfig.httpHandler = handler;
        },
        httpHandler() {
            return runtimeConfig.httpHandler;
        },
        updateHttpClientConfig(key, value) {
            runtimeConfig.httpHandler?.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs() {
            return runtimeConfig.httpHandler.httpHandlerConfigs();
        },
    };
};
const resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
    return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler(),
    };
};

class Field {
    name;
    kind;
    values;
    constructor({ name, kind = types.FieldPosition.HEADER, values = [] }) {
        this.name = name;
        this.kind = kind;
        this.values = values;
    }
    add(value) {
        this.values.push(value);
    }
    set(values) {
        this.values = values;
    }
    remove(value) {
        this.values = this.values.filter((v) => v !== value);
    }
    toString() {
        return this.values.map((v) => (v.includes(",") || v.includes(" ") ? `"${v}"` : v)).join(", ");
    }
    get() {
        return this.values;
    }
}

class Fields {
    entries = {};
    encoding;
    constructor({ fields = [], encoding = "utf-8" }) {
        fields.forEach(this.setField.bind(this));
        this.encoding = encoding;
    }
    setField(field) {
        this.entries[field.name.toLowerCase()] = field;
    }
    getField(name) {
        return this.entries[name.toLowerCase()];
    }
    removeField(name) {
        delete this.entries[name.toLowerCase()];
    }
    getByType(kind) {
        return Object.values(this.entries).filter((field) => field.kind === kind);
    }
}

class HttpRequest {
    method;
    protocol;
    hostname;
    port;
    path;
    query;
    headers;
    username;
    password;
    fragment;
    body;
    constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol
            ? options.protocol.slice(-1) !== ":"
                ? `${options.protocol}:`
                : options.protocol
            : "https:";
        this.path = options.path ? (options.path.charAt(0) !== "/" ? `/${options.path}` : options.path) : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
    }
    static clone(request) {
        const cloned = new HttpRequest({
            ...request,
            headers: { ...request.headers },
        });
        if (cloned.query) {
            cloned.query = cloneQuery(cloned.query);
        }
        return cloned;
    }
    static isInstance(request) {
        if (!request) {
            return false;
        }
        const req = request;
        return ("method" in req &&
            "protocol" in req &&
            "hostname" in req &&
            "path" in req &&
            typeof req["query"] === "object" &&
            typeof req["headers"] === "object");
    }
    clone() {
        return HttpRequest.clone(this);
    }
}
function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
            ...carry,
            [paramName]: Array.isArray(param) ? [...param] : param,
        };
    }, {});
}

class HttpResponse {
    statusCode;
    reason;
    headers;
    body;
    constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
    }
    static isInstance(response) {
        if (!response)
            return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
}

function isValidHostname(hostname) {
    const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
    return hostPattern.test(hostname);
}

exports.Field = Field;
exports.Fields = Fields;
exports.HttpRequest = HttpRequest;
exports.HttpResponse = HttpResponse;
exports.getHttpHandlerExtensionConfiguration = getHttpHandlerExtensionConfiguration;
exports.isValidHostname = isValidHostname;
exports.resolveHttpHandlerRuntimeConfig = resolveHttpHandlerRuntimeConfig;


/***/ }),

/***/ 8031:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var utilUriEscape = __nccwpck_require__(4197);

function buildQueryString(query) {
    const parts = [];
    for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = utilUriEscape.escapeUri(key);
        if (Array.isArray(value)) {
            for (let i = 0, iLen = value.length; i < iLen; i++) {
                parts.push(`${key}=${utilUriEscape.escapeUri(value[i])}`);
            }
        }
        else {
            let qsEntry = key;
            if (value || typeof value === "string") {
                qsEntry += `=${utilUriEscape.escapeUri(value)}`;
            }
            parts.push(qsEntry);
        }
    }
    return parts.join("&");
}

exports.buildQueryString = buildQueryString;


/***/ }),

/***/ 4769:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
        for (const pair of querystring.split("&")) {
            let [key, value = null] = pair.split("=");
            key = decodeURIComponent(key);
            if (value) {
                value = decodeURIComponent(value);
            }
            if (!(key in query)) {
                query[key] = value;
            }
            else if (Array.isArray(query[key])) {
                query[key].push(value);
            }
            else {
                query[key] = [query[key], value];
            }
        }
    }
    return query;
}

exports.parseQueryString = parseQueryString;


/***/ }),

/***/ 6375:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


const CLOCK_SKEW_ERROR_CODES = [
    "AuthFailure",
    "InvalidSignatureException",
    "RequestExpired",
    "RequestInTheFuture",
    "RequestTimeTooSkewed",
    "SignatureDoesNotMatch",
];
const THROTTLING_ERROR_CODES = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException",
];
const TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
const TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
const NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
const NODEJS_NETWORK_ERROR_CODES = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"];

const isRetryableByTrait = (error) => error?.$retryable !== undefined;
const isClockSkewError = (error) => CLOCK_SKEW_ERROR_CODES.includes(error.name);
const isClockSkewCorrectedError = (error) => error.$metadata?.clockSkewCorrected;
const isBrowserNetworkError = (error) => {
    const errorMessages = new Set([
        "Failed to fetch",
        "NetworkError when attempting to fetch resource",
        "The Internet connection appears to be offline",
        "Load failed",
        "Network request failed",
    ]);
    const isValid = error && error instanceof TypeError;
    if (!isValid) {
        return false;
    }
    return errorMessages.has(error.message);
};
const isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 ||
    THROTTLING_ERROR_CODES.includes(error.name) ||
    error.$retryable?.throttling == true;
const isTransientError = (error, depth = 0) => isRetryableByTrait(error) ||
    isClockSkewCorrectedError(error) ||
    (error.name === "InvalidSignatureException" && error.message?.includes("Signature expired")) ||
    TRANSIENT_ERROR_CODES.includes(error.name) ||
    NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") ||
    NODEJS_NETWORK_ERROR_CODES.includes(error?.code || "") ||
    TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0) ||
    isBrowserNetworkError(error) ||
    isNodeJsHttp2TransientError(error) ||
    (error.cause !== undefined && depth <= 10 && isTransientError(error.cause, depth + 1));
const isServerError = (error) => {
    if (error.$metadata?.httpStatusCode !== undefined) {
        const statusCode = error.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
            return true;
        }
        return false;
    }
    return false;
};
function isNodeJsHttp2TransientError(error) {
    return error.code === "ERR_HTTP2_STREAM_ERROR" && error.message.includes("NGHTTP2_REFUSED_STREAM");
}

exports.isBrowserNetworkError = isBrowserNetworkError;
exports.isClockSkewCorrectedError = isClockSkewCorrectedError;
exports.isClockSkewError = isClockSkewError;
exports.isNodeJsHttp2TransientError = isNodeJsHttp2TransientError;
exports.isRetryableByTrait = isRetryableByTrait;
exports.isServerError = isServerError;
exports.isThrottlingError = isThrottlingError;
exports.isTransientError = isTransientError;


/***/ }),

/***/ 8340:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getHomeDir = void 0;
const os_1 = __nccwpck_require__(2037);
const path_1 = __nccwpck_require__(1017);
const homeDirCache = {};
const getHomeDirCacheKey = () => {
    if (process && process.geteuid) {
        return `${process.geteuid()}`;
    }
    return "DEFAULT";
};
const getHomeDir = () => {
    const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${path_1.sep}` } = process.env;
    if (HOME)
        return HOME;
    if (USERPROFILE)
        return USERPROFILE;
    if (HOMEPATH)
        return `${HOMEDRIVE}${HOMEPATH}`;
    const homeDirCacheKey = getHomeDirCacheKey();
    if (!homeDirCache[homeDirCacheKey])
        homeDirCache[homeDirCacheKey] = (0, os_1.homedir)();
    return homeDirCache[homeDirCacheKey];
};
exports.getHomeDir = getHomeDir;


/***/ }),

/***/ 4740:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSSOTokenFilepath = void 0;
const crypto_1 = __nccwpck_require__(6113);
const path_1 = __nccwpck_require__(1017);
const getHomeDir_1 = __nccwpck_require__(8340);
const getSSOTokenFilepath = (id) => {
    const hasher = (0, crypto_1.createHash)("sha1");
    const cacheName = hasher.update(id).digest("hex");
    return (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "sso", "cache", `${cacheName}.json`);
};
exports.getSSOTokenFilepath = getSSOTokenFilepath;


/***/ }),

/***/ 9678:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSSOTokenFromFile = exports.tokenIntercept = void 0;
const promises_1 = __nccwpck_require__(3292);
const getSSOTokenFilepath_1 = __nccwpck_require__(4740);
exports.tokenIntercept = {};
const getSSOTokenFromFile = async (id) => {
    if (exports.tokenIntercept[id]) {
        return exports.tokenIntercept[id];
    }
    const ssoTokenFilepath = (0, getSSOTokenFilepath_1.getSSOTokenFilepath)(id);
    const ssoTokenText = await (0, promises_1.readFile)(ssoTokenFilepath, "utf8");
    return JSON.parse(ssoTokenText);
};
exports.getSSOTokenFromFile = getSSOTokenFromFile;


/***/ }),

/***/ 3507:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var getHomeDir = __nccwpck_require__(8340);
var getSSOTokenFilepath = __nccwpck_require__(4740);
var getSSOTokenFromFile = __nccwpck_require__(9678);
var path = __nccwpck_require__(1017);
var types = __nccwpck_require__(5756);
var readFile = __nccwpck_require__(1664);

const ENV_PROFILE = "AWS_PROFILE";
const DEFAULT_PROFILE = "default";
const getProfileName = (init) => init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE;

const CONFIG_PREFIX_SEPARATOR = ".";

const getConfigData = (data) => Object.entries(data)
    .filter(([key]) => {
    const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
    if (indexOfSeparator === -1) {
        return false;
    }
    return Object.values(types.IniSectionType).includes(key.substring(0, indexOfSeparator));
})
    .reduce((acc, [key, value]) => {
    const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
    const updatedKey = key.substring(0, indexOfSeparator) === types.IniSectionType.PROFILE ? key.substring(indexOfSeparator + 1) : key;
    acc[updatedKey] = value;
    return acc;
}, {
    ...(data.default && { default: data.default }),
});

const ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
const getConfigFilepath = () => process.env[ENV_CONFIG_PATH] || path.join(getHomeDir.getHomeDir(), ".aws", "config");

const ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
const getCredentialsFilepath = () => process.env[ENV_CREDENTIALS_PATH] || path.join(getHomeDir.getHomeDir(), ".aws", "credentials");

const prefixKeyRegex = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/;
const profileNameBlockList = ["__proto__", "profile __proto__"];
const parseIni = (iniData) => {
    const map = {};
    let currentSection;
    let currentSubSection;
    for (const iniLine of iniData.split(/\r?\n/)) {
        const trimmedLine = iniLine.split(/(^|\s)[;#]/)[0].trim();
        const isSection = trimmedLine[0] === "[" && trimmedLine[trimmedLine.length - 1] === "]";
        if (isSection) {
            currentSection = undefined;
            currentSubSection = undefined;
            const sectionName = trimmedLine.substring(1, trimmedLine.length - 1);
            const matches = prefixKeyRegex.exec(sectionName);
            if (matches) {
                const [, prefix, , name] = matches;
                if (Object.values(types.IniSectionType).includes(prefix)) {
                    currentSection = [prefix, name].join(CONFIG_PREFIX_SEPARATOR);
                }
            }
            else {
                currentSection = sectionName;
            }
            if (profileNameBlockList.includes(sectionName)) {
                throw new Error(`Found invalid profile name "${sectionName}"`);
            }
        }
        else if (currentSection) {
            const indexOfEqualsSign = trimmedLine.indexOf("=");
            if (![0, -1].includes(indexOfEqualsSign)) {
                const [name, value] = [
                    trimmedLine.substring(0, indexOfEqualsSign).trim(),
                    trimmedLine.substring(indexOfEqualsSign + 1).trim(),
                ];
                if (value === "") {
                    currentSubSection = name;
                }
                else {
                    if (currentSubSection && iniLine.trimStart() === iniLine) {
                        currentSubSection = undefined;
                    }
                    map[currentSection] = map[currentSection] || {};
                    const key = currentSubSection ? [currentSubSection, name].join(CONFIG_PREFIX_SEPARATOR) : name;
                    map[currentSection][key] = value;
                }
            }
        }
    }
    return map;
};

const swallowError$1 = () => ({});
const loadSharedConfigFiles = async (init = {}) => {
    const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
    const homeDir = getHomeDir.getHomeDir();
    const relativeHomeDirPrefix = "~/";
    let resolvedFilepath = filepath;
    if (filepath.startsWith(relativeHomeDirPrefix)) {
        resolvedFilepath = path.join(homeDir, filepath.slice(2));
    }
    let resolvedConfigFilepath = configFilepath;
    if (configFilepath.startsWith(relativeHomeDirPrefix)) {
        resolvedConfigFilepath = path.join(homeDir, configFilepath.slice(2));
    }
    const parsedFiles = await Promise.all([
        readFile.readFile(resolvedConfigFilepath, {
            ignoreCache: init.ignoreCache,
        })
            .then(parseIni)
            .then(getConfigData)
            .catch(swallowError$1),
        readFile.readFile(resolvedFilepath, {
            ignoreCache: init.ignoreCache,
        })
            .then(parseIni)
            .catch(swallowError$1),
    ]);
    return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1],
    };
};

const getSsoSessionData = (data) => Object.entries(data)
    .filter(([key]) => key.startsWith(types.IniSectionType.SSO_SESSION + CONFIG_PREFIX_SEPARATOR))
    .reduce((acc, [key, value]) => ({ ...acc, [key.substring(key.indexOf(CONFIG_PREFIX_SEPARATOR) + 1)]: value }), {});

const swallowError = () => ({});
const loadSsoSessionData = async (init = {}) => readFile.readFile(init.configFilepath ?? getConfigFilepath())
    .then(parseIni)
    .then(getSsoSessionData)
    .catch(swallowError);

const mergeConfigFiles = (...files) => {
    const merged = {};
    for (const file of files) {
        for (const [key, values] of Object.entries(file)) {
            if (merged[key] !== undefined) {
                Object.assign(merged[key], values);
            }
            else {
                merged[key] = values;
            }
        }
    }
    return merged;
};

const parseKnownFiles = async (init) => {
    const parsedFiles = await loadSharedConfigFiles(init);
    return mergeConfigFiles(parsedFiles.configFile, parsedFiles.credentialsFile);
};

const externalDataInterceptor = {
    getFileRecord() {
        return readFile.fileIntercept;
    },
    interceptFile(path, contents) {
        readFile.fileIntercept[path] = Promise.resolve(contents);
    },
    getTokenRecord() {
        return getSSOTokenFromFile.tokenIntercept;
    },
    interceptToken(id, contents) {
        getSSOTokenFromFile.tokenIntercept[id] = contents;
    },
};

exports.getSSOTokenFromFile = getSSOTokenFromFile.getSSOTokenFromFile;
exports.readFile = readFile.readFile;
exports.CONFIG_PREFIX_SEPARATOR = CONFIG_PREFIX_SEPARATOR;
exports.DEFAULT_PROFILE = DEFAULT_PROFILE;
exports.ENV_PROFILE = ENV_PROFILE;
exports.externalDataInterceptor = externalDataInterceptor;
exports.getProfileName = getProfileName;
exports.loadSharedConfigFiles = loadSharedConfigFiles;
exports.loadSsoSessionData = loadSsoSessionData;
exports.parseKnownFiles = parseKnownFiles;
Object.prototype.hasOwnProperty.call(getHomeDir, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: getHomeDir['__proto__']
    });

Object.keys(getHomeDir).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = getHomeDir[k];
});
Object.prototype.hasOwnProperty.call(getSSOTokenFilepath, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: getSSOTokenFilepath['__proto__']
    });

Object.keys(getSSOTokenFilepath).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = getSSOTokenFilepath[k];
});


/***/ }),

/***/ 1664:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.readFile = exports.fileIntercept = exports.filePromises = void 0;
const promises_1 = __nccwpck_require__(3977);
exports.filePromises = {};
exports.fileIntercept = {};
const readFile = (path, options) => {
    if (exports.fileIntercept[path] !== undefined) {
        return exports.fileIntercept[path];
    }
    if (!exports.filePromises[path] || options?.ignoreCache) {
        exports.filePromises[path] = (0, promises_1.readFile)(path, "utf8");
    }
    return exports.filePromises[path];
};
exports.readFile = readFile;


/***/ }),

/***/ 1528:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var utilHexEncoding = __nccwpck_require__(5364);
var utilUtf8 = __nccwpck_require__(1895);
var isArrayBuffer = __nccwpck_require__(780);
var protocolHttp = __nccwpck_require__(4418);
var utilMiddleware = __nccwpck_require__(2390);
var utilUriEscape = __nccwpck_require__(4197);

const ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
const CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
const AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
const SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
const EXPIRES_QUERY_PARAM = "X-Amz-Expires";
const SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
const TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
const REGION_SET_PARAM = "X-Amz-Region-Set";
const AUTH_HEADER = "authorization";
const AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
const DATE_HEADER = "date";
const GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
const SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
const SHA256_HEADER = "x-amz-content-sha256";
const TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
const HOST_HEADER = "host";
const ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true,
};
const PROXY_HEADER_PATTERN = /^proxy-/;
const SEC_HEADER_PATTERN = /^sec-/;
const UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
const ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
const ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
const EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
const UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
const MAX_CACHE_SIZE = 50;
const KEY_TYPE_IDENTIFIER = "aws4_request";
const MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;

const signingKeyCache = {};
const cacheQueue = [];
const createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
const getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
    const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${utilHexEncoding.toHex(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while (cacheQueue.length > MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
    }
    let key = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
    }
    return (signingKeyCache[cacheKey] = key);
};
const clearCredentialCache = () => {
    cacheQueue.length = 0;
    Object.keys(signingKeyCache).forEach((cacheKey) => {
        delete signingKeyCache[cacheKey];
    });
};
const hmac = (ctor, secret, data) => {
    const hash = new ctor(secret);
    hash.update(utilUtf8.toUint8Array(data));
    return hash.digest();
};

const getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == undefined) {
            continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS ||
            unsignableHeaders?.has(canonicalHeaderName) ||
            PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
            SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
            if (!signableHeaders || (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {
                continue;
            }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
    return canonical;
};

const getPayloadHash = async ({ headers, body }, hashConstructor) => {
    for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === SHA256_HEADER) {
            return headers[headerName];
        }
    }
    if (body == undefined) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    }
    else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer.isArrayBuffer(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update(utilUtf8.toUint8Array(body));
        return utilHexEncoding.toHex(await hashCtor.digest());
    }
    return UNSIGNED_PAYLOAD;
};

class HeaderFormatter {
    format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
            const bytes = utilUtf8.fromUtf8(headerName);
            chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
            out.set(chunk, position);
            position += chunk.byteLength;
        }
        return out;
    }
    formatHeaderValue(header) {
        switch (header.type) {
            case "boolean":
                return Uint8Array.from([header.value ? 0 : 1]);
            case "byte":
                return Uint8Array.from([2, header.value]);
            case "short":
                const shortView = new DataView(new ArrayBuffer(3));
                shortView.setUint8(0, 3);
                shortView.setInt16(1, header.value, false);
                return new Uint8Array(shortView.buffer);
            case "integer":
                const intView = new DataView(new ArrayBuffer(5));
                intView.setUint8(0, 4);
                intView.setInt32(1, header.value, false);
                return new Uint8Array(intView.buffer);
            case "long":
                const longBytes = new Uint8Array(9);
                longBytes[0] = 5;
                longBytes.set(header.value.bytes, 1);
                return longBytes;
            case "binary":
                const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
                binView.setUint8(0, 6);
                binView.setUint16(1, header.value.byteLength, false);
                const binBytes = new Uint8Array(binView.buffer);
                binBytes.set(header.value, 3);
                return binBytes;
            case "string":
                const utf8Bytes = utilUtf8.fromUtf8(header.value);
                const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
                strView.setUint8(0, 7);
                strView.setUint16(1, utf8Bytes.byteLength, false);
                const strBytes = new Uint8Array(strView.buffer);
                strBytes.set(utf8Bytes, 3);
                return strBytes;
            case "timestamp":
                const tsBytes = new Uint8Array(9);
                tsBytes[0] = 8;
                tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
                return tsBytes;
            case "uuid":
                if (!UUID_PATTERN.test(header.value)) {
                    throw new Error(`Invalid UUID received: ${header.value}`);
                }
                const uuidBytes = new Uint8Array(17);
                uuidBytes[0] = 9;
                uuidBytes.set(utilHexEncoding.fromHex(header.value.replace(/\-/g, "")), 1);
                return uuidBytes;
        }
    }
}
var HEADER_VALUE_TYPE;
(function (HEADER_VALUE_TYPE) {
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["short"] = 3] = "short";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["long"] = 5] = "long";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["string"] = 7] = "string";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
const UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
class Int64 {
    bytes;
    constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
            throw new Error("Int64 buffers must be exactly 8 bytes");
        }
    }
    static fromNumber(number) {
        if (number > 9_223_372_036_854_775_807 || number < -9223372036854776e3) {
            throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {
            bytes[i] = remaining;
        }
        if (number < 0) {
            negate(bytes);
        }
        return new Int64(bytes);
    }
    valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 0b10000000;
        if (negative) {
            negate(bytes);
        }
        return parseInt(utilHexEncoding.toHex(bytes), 16) * (negative ? -1 : 1);
    }
    toString() {
        return String(this.valueOf());
    }
}
function negate(bytes) {
    for (let i = 0; i < 8; i++) {
        bytes[i] ^= 0xff;
    }
    for (let i = 7; i > -1; i--) {
        bytes[i]++;
        if (bytes[i] !== 0)
            break;
    }
}

const hasHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return true;
        }
    }
    return false;
};

const moveHeadersToQuery = (request, options = {}) => {
    const { headers, query = {} } = protocolHttp.HttpRequest.clone(request);
    for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if ((lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) ||
            options.hoistableHeaders?.has(lname)) {
            query[name] = headers[name];
            delete headers[name];
        }
    }
    return {
        ...request,
        headers,
        query,
    };
};

const prepareRequest = (request) => {
    request = protocolHttp.HttpRequest.clone(request);
    for (const headerName of Object.keys(request.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
        }
    }
    return request;
};

const getCanonicalQuery = ({ query = {} }) => {
    const keys = [];
    const serialized = {};
    for (const key of Object.keys(query)) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
            continue;
        }
        const encodedKey = utilUriEscape.escapeUri(key);
        keys.push(encodedKey);
        const value = query[key];
        if (typeof value === "string") {
            serialized[encodedKey] = `${encodedKey}=${utilUriEscape.escapeUri(value)}`;
        }
        else if (Array.isArray(value)) {
            serialized[encodedKey] = value
                .slice(0)
                .reduce((encoded, value) => encoded.concat([`${encodedKey}=${utilUriEscape.escapeUri(value)}`]), [])
                .sort()
                .join("&");
        }
    }
    return keys
        .sort()
        .map((key) => serialized[key])
        .filter((serialized) => serialized)
        .join("&");
};

const iso8601 = (time) => toDate(time)
    .toISOString()
    .replace(/\.\d{3}Z$/, "Z");
const toDate = (time) => {
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
};

class SignatureV4Base {
    service;
    regionProvider;
    credentialProvider;
    sha256;
    uriEscapePath;
    applyChecksum;
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true, }) {
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = utilMiddleware.normalizeProvider(region);
        this.credentialProvider = utilMiddleware.normalizeProvider(credentials);
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest, algorithmIdentifier) {
        const hash = new this.sha256();
        hash.update(utilUtf8.toUint8Array(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${algorithmIdentifier}
${longDate}
${credentialScope}
${utilHexEncoding.toHex(hashedRequest)}`;
    }
    getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
            const normalizedPathSegments = [];
            for (const pathSegment of path.split("/")) {
                if (pathSegment?.length === 0)
                    continue;
                if (pathSegment === ".")
                    continue;
                if (pathSegment === "..") {
                    normalizedPathSegments.pop();
                }
                else {
                    normalizedPathSegments.push(pathSegment);
                }
            }
            const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
            const doubleEncoded = utilUriEscape.escapeUri(normalizedPath);
            return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
    }
    validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" ||
            typeof credentials.accessKeyId !== "string" ||
            typeof credentials.secretAccessKey !== "string") {
            throw new Error("Resolved credential object is not valid");
        }
    }
    formatDate(now) {
        const longDate = iso8601(now).replace(/[\-:]/g, "");
        return {
            longDate,
            shortDate: longDate.slice(0, 8),
        };
    }
    getCanonicalHeaderList(headers) {
        return Object.keys(headers).sort().join(";");
    }
}

class SignatureV4 extends SignatureV4Base {
    headerFormatter = new HeaderFormatter();
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true, }) {
        super({
            applyChecksum,
            credentials,
            region,
            service,
            sha256,
            uriEscapePath,
        });
    }
    async presign(originalRequest, options = {}) {
        const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, hoistableHeaders, signingRegion, signingService, } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { longDate, shortDate } = this.formatDate(signingDate);
        if (expiresIn > MAX_PRESIGNED_TTL) {
            return Promise.reject("Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future");
        }
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders, hoistableHeaders });
        if (credentials.sessionToken) {
            request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
        request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        request.query[SIGNED_HEADERS_QUERY_PARAM] = this.getCanonicalHeaderList(canonicalHeaders);
        request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
        return request;
    }
    async sign(toSign, options) {
        if (typeof toSign === "string") {
            return this.signString(toSign, options);
        }
        else if (toSign.headers && toSign.payload) {
            return this.signEvent(toSign, options);
        }
        else if (toSign.message) {
            return this.signMessage(toSign, options);
        }
        else {
            return this.signRequest(toSign, options);
        }
    }
    async signEvent({ headers, payload }, { signingDate = new Date(), priorSignature, signingRegion, signingService, eventStreamCredentials, }) {
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate, longDate } = this.formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = utilHexEncoding.toHex(await hash.digest());
        const stringToSign = [
            EVENT_ALGORITHM_IDENTIFIER,
            longDate,
            scope,
            priorSignature,
            hashedHeaders,
            hashedPayload,
        ].join("\n");
        return this.signString(stringToSign, {
            signingDate,
            signingRegion: region,
            signingService,
            eventStreamCredentials,
        });
    }
    async signMessage(signableMessage, { signingDate = new Date(), signingRegion, signingService, eventStreamCredentials }) {
        const promise = this.signEvent({
            headers: this.headerFormatter.format(signableMessage.message.headers),
            payload: signableMessage.message.body,
        }, {
            signingDate,
            signingRegion,
            signingService,
            priorSignature: signableMessage.priorSignature,
            eventStreamCredentials,
        });
        return promise.then((signature) => {
            return { message: signableMessage.message, signature };
        });
    }
    async signString(stringToSign, { signingDate = new Date(), signingRegion, signingService, eventStreamCredentials, } = {}) {
        const credentials = eventStreamCredentials ?? (await this.credentialProvider());
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate } = this.formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update(utilUtf8.toUint8Array(stringToSign));
        return utilHexEncoding.toHex(await hash.digest());
    }
    async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService, } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const request = prepareRequest(requestToSign);
        const { longDate, shortDate } = this.formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        request.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
            request.headers[TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await getPayloadHash(request, this.sha256);
        if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
            request.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[AUTH_HEADER] =
            `${ALGORITHM_IDENTIFIER} ` +
                `Credential=${credentials.accessKeyId}/${scope}, ` +
                `SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, ` +
                `Signature=${signature}`;
        return request;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest, ALGORITHM_IDENTIFIER);
        const hash = new this.sha256(await keyPromise);
        hash.update(utilUtf8.toUint8Array(stringToSign));
        return utilHexEncoding.toHex(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate, service) {
        return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
    }
}

const signatureV4aContainer = {
    SignatureV4a: null,
};

exports.ALGORITHM_IDENTIFIER = ALGORITHM_IDENTIFIER;
exports.ALGORITHM_IDENTIFIER_V4A = ALGORITHM_IDENTIFIER_V4A;
exports.ALGORITHM_QUERY_PARAM = ALGORITHM_QUERY_PARAM;
exports.ALWAYS_UNSIGNABLE_HEADERS = ALWAYS_UNSIGNABLE_HEADERS;
exports.AMZ_DATE_HEADER = AMZ_DATE_HEADER;
exports.AMZ_DATE_QUERY_PARAM = AMZ_DATE_QUERY_PARAM;
exports.AUTH_HEADER = AUTH_HEADER;
exports.CREDENTIAL_QUERY_PARAM = CREDENTIAL_QUERY_PARAM;
exports.DATE_HEADER = DATE_HEADER;
exports.EVENT_ALGORITHM_IDENTIFIER = EVENT_ALGORITHM_IDENTIFIER;
exports.EXPIRES_QUERY_PARAM = EXPIRES_QUERY_PARAM;
exports.GENERATED_HEADERS = GENERATED_HEADERS;
exports.HOST_HEADER = HOST_HEADER;
exports.KEY_TYPE_IDENTIFIER = KEY_TYPE_IDENTIFIER;
exports.MAX_CACHE_SIZE = MAX_CACHE_SIZE;
exports.MAX_PRESIGNED_TTL = MAX_PRESIGNED_TTL;
exports.PROXY_HEADER_PATTERN = PROXY_HEADER_PATTERN;
exports.REGION_SET_PARAM = REGION_SET_PARAM;
exports.SEC_HEADER_PATTERN = SEC_HEADER_PATTERN;
exports.SHA256_HEADER = SHA256_HEADER;
exports.SIGNATURE_HEADER = SIGNATURE_HEADER;
exports.SIGNATURE_QUERY_PARAM = SIGNATURE_QUERY_PARAM;
exports.SIGNED_HEADERS_QUERY_PARAM = SIGNED_HEADERS_QUERY_PARAM;
exports.SignatureV4 = SignatureV4;
exports.SignatureV4Base = SignatureV4Base;
exports.TOKEN_HEADER = TOKEN_HEADER;
exports.TOKEN_QUERY_PARAM = TOKEN_QUERY_PARAM;
exports.UNSIGNABLE_PATTERNS = UNSIGNABLE_PATTERNS;
exports.UNSIGNED_PAYLOAD = UNSIGNED_PAYLOAD;
exports.clearCredentialCache = clearCredentialCache;
exports.createScope = createScope;
exports.getCanonicalHeaders = getCanonicalHeaders;
exports.getCanonicalQuery = getCanonicalQuery;
exports.getPayloadHash = getPayloadHash;
exports.getSigningKey = getSigningKey;
exports.hasHeader = hasHeader;
exports.moveHeadersToQuery = moveHeadersToQuery;
exports.prepareRequest = prepareRequest;
exports.signatureV4aContainer = signatureV4aContainer;


/***/ }),

/***/ 3570:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var middlewareStack = __nccwpck_require__(7911);
var types = __nccwpck_require__(5756);
var schema = __nccwpck_require__(9826);
var serde = __nccwpck_require__(7669);
var protocols = __nccwpck_require__(2241);

class Client {
    config;
    middlewareStack = middlewareStack.constructStack();
    initConfig;
    handlers;
    constructor(config) {
        this.config = config;
        const { protocol, protocolSettings } = config;
        if (protocolSettings) {
            if (typeof protocol === "function") {
                config.protocol = new protocol(protocolSettings);
            }
        }
    }
    send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : undefined;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const useHandlerCache = options === undefined && this.config.cacheMiddleware === true;
        let handler;
        if (useHandlerCache) {
            if (!this.handlers) {
                this.handlers = new WeakMap();
            }
            const handlers = this.handlers;
            if (handlers.has(command.constructor)) {
                handler = handlers.get(command.constructor);
            }
            else {
                handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
                handlers.set(command.constructor, handler);
            }
        }
        else {
            delete this.handlers;
            handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        }
        if (callback) {
            handler(command)
                .then((result) => callback(null, result.output), (err) => callback(err))
                .catch(() => { });
        }
        else {
            return handler(command).then((result) => result.output);
        }
    }
    destroy() {
        this.config?.requestHandler?.destroy?.();
        delete this.handlers;
    }
}

const SENSITIVE_STRING$1 = "***SensitiveInformation***";
function schemaLogFilter(schema$1, data) {
    if (data == null) {
        return data;
    }
    const ns = schema.NormalizedSchema.of(schema$1);
    if (ns.getMergedTraits().sensitive) {
        return SENSITIVE_STRING$1;
    }
    if (ns.isListSchema()) {
        const isSensitive = !!ns.getValueSchema().getMergedTraits().sensitive;
        if (isSensitive) {
            return SENSITIVE_STRING$1;
        }
    }
    else if (ns.isMapSchema()) {
        const isSensitive = !!ns.getKeySchema().getMergedTraits().sensitive || !!ns.getValueSchema().getMergedTraits().sensitive;
        if (isSensitive) {
            return SENSITIVE_STRING$1;
        }
    }
    else if (ns.isStructSchema() && typeof data === "object") {
        const object = data;
        const newObject = {};
        for (const [member, memberNs] of ns.structIterator()) {
            if (object[member] != null) {
                newObject[member] = schemaLogFilter(memberNs, object[member]);
            }
        }
        return newObject;
    }
    return data;
}

class Command {
    middlewareStack = middlewareStack.constructStack();
    schema;
    static classBuilder() {
        return new ClassBuilder();
    }
    resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor, }) {
        for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
            this.middlewareStack.use(mw);
        }
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog,
            outputFilterSensitiveLog,
            [types.SMITHY_CONTEXT_KEY]: {
                commandInstance: this,
                ...smithyContext,
            },
            ...additionalContext,
        };
        const { requestHandler } = configuration;
        let requestOptions = options ?? {};
        if (smithyContext.eventStream) {
            requestOptions = {
                isEventStream: true,
                ...requestOptions,
            };
        }
        return stack.resolve((request) => requestHandler.handle(request.request, requestOptions), handlerExecutionContext);
    }
}
class ClassBuilder {
    _init = () => { };
    _ep = {};
    _middlewareFn = () => [];
    _commandName = "";
    _clientName = "";
    _additionalContext = {};
    _smithyContext = {};
    _inputFilterSensitiveLog = undefined;
    _outputFilterSensitiveLog = undefined;
    _serializer = null;
    _deserializer = null;
    _operationSchema;
    init(cb) {
        this._init = cb;
    }
    ep(endpointParameterInstructions) {
        this._ep = endpointParameterInstructions;
        return this;
    }
    m(middlewareSupplier) {
        this._middlewareFn = middlewareSupplier;
        return this;
    }
    s(service, operation, smithyContext = {}) {
        this._smithyContext = {
            service,
            operation,
            ...smithyContext,
        };
        return this;
    }
    c(additionalContext = {}) {
        this._additionalContext = additionalContext;
        return this;
    }
    n(clientName, commandName) {
        this._clientName = clientName;
        this._commandName = commandName;
        return this;
    }
    f(inputFilter = (_) => _, outputFilter = (_) => _) {
        this._inputFilterSensitiveLog = inputFilter;
        this._outputFilterSensitiveLog = outputFilter;
        return this;
    }
    ser(serializer) {
        this._serializer = serializer;
        return this;
    }
    de(deserializer) {
        this._deserializer = deserializer;
        return this;
    }
    sc(operation) {
        this._operationSchema = operation;
        this._smithyContext.operationSchema = operation;
        return this;
    }
    build() {
        const closure = this;
        let CommandRef;
        return (CommandRef = class extends Command {
            input;
            static getEndpointParameterInstructions() {
                return closure._ep;
            }
            constructor(...[input]) {
                super();
                this.input = input ?? {};
                closure._init(this);
                this.schema = closure._operationSchema;
            }
            resolveMiddleware(stack, configuration, options) {
                const op = closure._operationSchema;
                const input = op?.[4] ?? op?.input;
                const output = op?.[5] ?? op?.output;
                return this.resolveMiddlewareWithContext(stack, configuration, options, {
                    CommandCtor: CommandRef,
                    middlewareFn: closure._middlewareFn,
                    clientName: closure._clientName,
                    commandName: closure._commandName,
                    inputFilterSensitiveLog: closure._inputFilterSensitiveLog ?? (op ? schemaLogFilter.bind(null, input) : (_) => _),
                    outputFilterSensitiveLog: closure._outputFilterSensitiveLog ?? (op ? schemaLogFilter.bind(null, output) : (_) => _),
                    smithyContext: closure._smithyContext,
                    additionalContext: closure._additionalContext,
                });
            }
            serialize = closure._serializer;
            deserialize = closure._deserializer;
        });
    }
}

const SENSITIVE_STRING = "***SensitiveInformation***";

const createAggregatedClient = (commands, Client, options) => {
    for (const [command, CommandCtor] of Object.entries(commands)) {
        const methodImpl = async function (args, optionsOrCb, cb) {
            const command = new CommandCtor(args);
            if (typeof optionsOrCb === "function") {
                this.send(command, optionsOrCb);
            }
            else if (typeof cb === "function") {
                if (typeof optionsOrCb !== "object")
                    throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
                this.send(command, optionsOrCb || {}, cb);
            }
            else {
                return this.send(command, optionsOrCb);
            }
        };
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client.prototype[methodName] = methodImpl;
    }
    const { paginators = {}, waiters = {} } = options ?? {};
    for (const [paginatorName, paginatorFn] of Object.entries(paginators)) {
        if (Client.prototype[paginatorName] === void 0) {
            Client.prototype[paginatorName] = function (commandInput = {}, paginationConfiguration, ...rest) {
                return paginatorFn({
                    ...paginationConfiguration,
                    client: this,
                }, commandInput, ...rest);
            };
        }
    }
    for (const [waiterName, waiterFn] of Object.entries(waiters)) {
        if (Client.prototype[waiterName] === void 0) {
            Client.prototype[waiterName] = async function (commandInput = {}, waiterConfiguration, ...rest) {
                let config = waiterConfiguration;
                if (typeof waiterConfiguration === "number") {
                    config = {
                        maxWaitTime: waiterConfiguration,
                    };
                }
                return waiterFn({
                    ...config,
                    client: this,
                }, commandInput, ...rest);
            };
        }
    }
};

class ServiceException extends Error {
    $fault;
    $response;
    $retryable;
    $metadata;
    constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
    }
    static isInstance(value) {
        if (!value)
            return false;
        const candidate = value;
        return (ServiceException.prototype.isPrototypeOf(candidate) ||
            (Boolean(candidate.$fault) &&
                Boolean(candidate.$metadata) &&
                (candidate.$fault === "client" || candidate.$fault === "server")));
    }
    static [Symbol.hasInstance](instance) {
        if (!instance)
            return false;
        const candidate = instance;
        if (this === ServiceException) {
            return ServiceException.isInstance(instance);
        }
        if (ServiceException.isInstance(instance)) {
            if (candidate.name && this.name) {
                return this.prototype.isPrototypeOf(instance) || candidate.name === this.name;
            }
            return this.prototype.isPrototypeOf(instance);
        }
        return false;
    }
}
const decorateServiceException = (exception, additions = {}) => {
    Object.entries(additions)
        .filter(([, v]) => v !== undefined)
        .forEach(([k, v]) => {
        if (exception[k] == undefined || exception[k] === "") {
            exception[k] = v;
        }
    });
    const message = exception.message || exception.Message || "UnknownError";
    exception.message = message;
    delete exception.Message;
    return exception;
};

const throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
    const $metadata = deserializeMetadata(output);
    const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
    const response = new exceptionCtor({
        name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata,
    });
    throw decorateServiceException(response, parsedBody);
};
const withBaseException = (ExceptionCtor) => {
    return ({ output, parsedBody, errorCode }) => {
        throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
    };
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});

const loadConfigsForDefaultMode = (mode) => {
    switch (mode) {
        case "standard":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "in-region":
            return {
                retryMode: "standard",
                connectionTimeout: 1100,
            };
        case "cross-region":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "mobile":
            return {
                retryMode: "standard",
                connectionTimeout: 30000,
            };
        default:
            return {};
    }
};

let warningEmitted = false;
const emitWarningIfUnsupportedVersion = (version) => {
    if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 16) {
        warningEmitted = true;
    }
};

const knownAlgorithms = Object.values(types.AlgorithmId);
const getChecksumConfiguration = (runtimeConfig) => {
    const checksumAlgorithms = [];
    for (const id in types.AlgorithmId) {
        const algorithmId = types.AlgorithmId[id];
        if (runtimeConfig[algorithmId] === undefined) {
            continue;
        }
        checksumAlgorithms.push({
            algorithmId: () => algorithmId,
            checksumConstructor: () => runtimeConfig[algorithmId],
        });
    }
    for (const [id, ChecksumCtor] of Object.entries(runtimeConfig.checksumAlgorithms ?? {})) {
        checksumAlgorithms.push({
            algorithmId: () => id,
            checksumConstructor: () => ChecksumCtor,
        });
    }
    return {
        addChecksumAlgorithm(algo) {
            runtimeConfig.checksumAlgorithms = runtimeConfig.checksumAlgorithms ?? {};
            const id = algo.algorithmId();
            const ctor = algo.checksumConstructor();
            if (knownAlgorithms.includes(id)) {
                runtimeConfig.checksumAlgorithms[id.toUpperCase()] = ctor;
            }
            else {
                runtimeConfig.checksumAlgorithms[id] = ctor;
            }
            checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
            return checksumAlgorithms;
        },
    };
};
const resolveChecksumRuntimeConfig = (clientConfig) => {
    const runtimeConfig = {};
    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        const id = checksumAlgorithm.algorithmId();
        if (knownAlgorithms.includes(id)) {
            runtimeConfig[id] = checksumAlgorithm.checksumConstructor();
        }
    });
    return runtimeConfig;
};

const getRetryConfiguration = (runtimeConfig) => {
    return {
        setRetryStrategy(retryStrategy) {
            runtimeConfig.retryStrategy = retryStrategy;
        },
        retryStrategy() {
            return runtimeConfig.retryStrategy;
        },
    };
};
const resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
    const runtimeConfig = {};
    runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
    return runtimeConfig;
};

const getDefaultExtensionConfiguration = (runtimeConfig) => {
    return Object.assign(getChecksumConfiguration(runtimeConfig), getRetryConfiguration(runtimeConfig));
};
const getDefaultClientConfiguration = getDefaultExtensionConfiguration;
const resolveDefaultRuntimeConfig = (config) => {
    return Object.assign(resolveChecksumRuntimeConfig(config), resolveRetryRuntimeConfig(config));
};

const getArrayIfSingleItem = (mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray];

const getValueFromTextNode = (obj) => {
    const textNodeName = "#text";
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== undefined) {
            obj[key] = obj[key][textNodeName];
        }
        else if (typeof obj[key] === "object" && obj[key] !== null) {
            obj[key] = getValueFromTextNode(obj[key]);
        }
    }
    return obj;
};

const isSerializableHeaderValue = (value) => {
    return value != null;
};

class NoOpLogger {
    trace() { }
    debug() { }
    info() { }
    warn() { }
    error() { }
}

function map(arg0, arg1, arg2) {
    let target;
    let filter;
    let instructions;
    if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
        target = {};
        instructions = arg0;
    }
    else {
        target = arg0;
        if (typeof arg1 === "function") {
            filter = arg1;
            instructions = arg2;
            return mapWithFilter(target, filter, instructions);
        }
        else {
            instructions = arg1;
        }
    }
    for (const key of Object.keys(instructions)) {
        if (!Array.isArray(instructions[key])) {
            target[key] = instructions[key];
            continue;
        }
        applyInstruction(target, null, instructions, key);
    }
    return target;
}
const convertMap = (target) => {
    const output = {};
    for (const [k, v] of Object.entries(target || {})) {
        output[k] = [, v];
    }
    return output;
};
const take = (source, instructions) => {
    const out = {};
    for (const key in instructions) {
        applyInstruction(out, source, instructions, key);
    }
    return out;
};
const mapWithFilter = (target, filter, instructions) => {
    return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
        if (Array.isArray(value)) {
            _instructions[key] = value;
        }
        else {
            if (typeof value === "function") {
                _instructions[key] = [filter, value()];
            }
            else {
                _instructions[key] = [filter, value];
            }
        }
        return _instructions;
    }, {}));
};
const applyInstruction = (target, source, instructions, targetKey) => {
    if (source !== null) {
        let instruction = instructions[targetKey];
        if (typeof instruction === "function") {
            instruction = [, instruction];
        }
        const [filter = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
        if ((typeof filter === "function" && filter(source[sourceKey])) || (typeof filter !== "function" && !!filter)) {
            target[targetKey] = valueFn(source[sourceKey]);
        }
        return;
    }
    let [filter, value] = instructions[targetKey];
    if (typeof value === "function") {
        let _value;
        const defaultFilterPassed = filter === undefined && (_value = value()) != null;
        const customFilterPassed = (typeof filter === "function" && !!filter(void 0)) || (typeof filter !== "function" && !!filter);
        if (defaultFilterPassed) {
            target[targetKey] = _value;
        }
        else if (customFilterPassed) {
            target[targetKey] = value();
        }
    }
    else {
        const defaultFilterPassed = filter === undefined && value != null;
        const customFilterPassed = (typeof filter === "function" && !!filter(value)) || (typeof filter !== "function" && !!filter);
        if (defaultFilterPassed || customFilterPassed) {
            target[targetKey] = value;
        }
    }
};
const nonNullish = (_) => _ != null;
const pass = (_) => _;

const serializeFloat = (value) => {
    if (value !== value) {
        return "NaN";
    }
    switch (value) {
        case Infinity:
            return "Infinity";
        case -Infinity:
            return "-Infinity";
        default:
            return value;
    }
};
const serializeDateTime = (date) => date.toISOString().replace(".000Z", "Z");

const _json = (obj) => {
    if (obj == null) {
        return {};
    }
    if (Array.isArray(obj)) {
        return obj.filter((_) => _ != null).map(_json);
    }
    if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)) {
            if (obj[key] == null) {
                continue;
            }
            target[key] = _json(obj[key]);
        }
        return target;
    }
    return obj;
};

exports.collectBody = protocols.collectBody;
exports.extendedEncodeURIComponent = protocols.extendedEncodeURIComponent;
exports.resolvedPath = protocols.resolvedPath;
exports.Client = Client;
exports.Command = Command;
exports.NoOpLogger = NoOpLogger;
exports.SENSITIVE_STRING = SENSITIVE_STRING;
exports.ServiceException = ServiceException;
exports._json = _json;
exports.convertMap = convertMap;
exports.createAggregatedClient = createAggregatedClient;
exports.decorateServiceException = decorateServiceException;
exports.emitWarningIfUnsupportedVersion = emitWarningIfUnsupportedVersion;
exports.getArrayIfSingleItem = getArrayIfSingleItem;
exports.getDefaultClientConfiguration = getDefaultClientConfiguration;
exports.getDefaultExtensionConfiguration = getDefaultExtensionConfiguration;
exports.getValueFromTextNode = getValueFromTextNode;
exports.isSerializableHeaderValue = isSerializableHeaderValue;
exports.loadConfigsForDefaultMode = loadConfigsForDefaultMode;
exports.map = map;
exports.resolveDefaultRuntimeConfig = resolveDefaultRuntimeConfig;
exports.serializeDateTime = serializeDateTime;
exports.serializeFloat = serializeFloat;
exports.take = take;
exports.throwDefaultError = throwDefaultError;
exports.withBaseException = withBaseException;
Object.prototype.hasOwnProperty.call(serde, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: serde['__proto__']
    });

Object.keys(serde).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = serde[k];
});


/***/ }),

/***/ 5756:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.HttpAuthLocation = void 0;
(function (HttpAuthLocation) {
    HttpAuthLocation["HEADER"] = "header";
    HttpAuthLocation["QUERY"] = "query";
})(exports.HttpAuthLocation || (exports.HttpAuthLocation = {}));

exports.HttpApiKeyAuthLocation = void 0;
(function (HttpApiKeyAuthLocation) {
    HttpApiKeyAuthLocation["HEADER"] = "header";
    HttpApiKeyAuthLocation["QUERY"] = "query";
})(exports.HttpApiKeyAuthLocation || (exports.HttpApiKeyAuthLocation = {}));

exports.EndpointURLScheme = void 0;
(function (EndpointURLScheme) {
    EndpointURLScheme["HTTP"] = "http";
    EndpointURLScheme["HTTPS"] = "https";
})(exports.EndpointURLScheme || (exports.EndpointURLScheme = {}));

exports.AlgorithmId = void 0;
(function (AlgorithmId) {
    AlgorithmId["MD5"] = "md5";
    AlgorithmId["CRC32"] = "crc32";
    AlgorithmId["CRC32C"] = "crc32c";
    AlgorithmId["SHA1"] = "sha1";
    AlgorithmId["SHA256"] = "sha256";
})(exports.AlgorithmId || (exports.AlgorithmId = {}));
const getChecksumConfiguration = (runtimeConfig) => {
    const checksumAlgorithms = [];
    if (runtimeConfig.sha256 !== undefined) {
        checksumAlgorithms.push({
            algorithmId: () => exports.AlgorithmId.SHA256,
            checksumConstructor: () => runtimeConfig.sha256,
        });
    }
    if (runtimeConfig.md5 != undefined) {
        checksumAlgorithms.push({
            algorithmId: () => exports.AlgorithmId.MD5,
            checksumConstructor: () => runtimeConfig.md5,
        });
    }
    return {
        addChecksumAlgorithm(algo) {
            checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
            return checksumAlgorithms;
        },
    };
};
const resolveChecksumRuntimeConfig = (clientConfig) => {
    const runtimeConfig = {};
    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
    });
    return runtimeConfig;
};

const getDefaultClientConfiguration = (runtimeConfig) => {
    return getChecksumConfiguration(runtimeConfig);
};
const resolveDefaultRuntimeConfig = (config) => {
    return resolveChecksumRuntimeConfig(config);
};

exports.FieldPosition = void 0;
(function (FieldPosition) {
    FieldPosition[FieldPosition["HEADER"] = 0] = "HEADER";
    FieldPosition[FieldPosition["TRAILER"] = 1] = "TRAILER";
})(exports.FieldPosition || (exports.FieldPosition = {}));

const SMITHY_CONTEXT_KEY = "__smithy_context";

exports.IniSectionType = void 0;
(function (IniSectionType) {
    IniSectionType["PROFILE"] = "profile";
    IniSectionType["SSO_SESSION"] = "sso-session";
    IniSectionType["SERVICES"] = "services";
})(exports.IniSectionType || (exports.IniSectionType = {}));

exports.RequestHandlerProtocol = void 0;
(function (RequestHandlerProtocol) {
    RequestHandlerProtocol["HTTP_0_9"] = "http/0.9";
    RequestHandlerProtocol["HTTP_1_0"] = "http/1.0";
    RequestHandlerProtocol["TDS_8_0"] = "tds/8.0";
})(exports.RequestHandlerProtocol || (exports.RequestHandlerProtocol = {}));

exports.SMITHY_CONTEXT_KEY = SMITHY_CONTEXT_KEY;
exports.getDefaultClientConfiguration = getDefaultClientConfiguration;
exports.resolveDefaultRuntimeConfig = resolveDefaultRuntimeConfig;


/***/ }),

/***/ 4681:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var querystringParser = __nccwpck_require__(4769);

const parseUrl = (url) => {
    if (typeof url === "string") {
        return parseUrl(new URL(url));
    }
    const { hostname, pathname, port, protocol, search } = url;
    let query;
    if (search) {
        query = querystringParser.parseQueryString(search);
    }
    return {
        hostname,
        port: port ? parseInt(port) : undefined,
        protocol,
        path: pathname,
        query,
    };
};

exports.parseUrl = parseUrl;


/***/ }),

/***/ 305:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromBase64 = void 0;
const util_buffer_from_1 = __nccwpck_require__(1381);
const BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
const fromBase64 = (input) => {
    if ((input.length * 3) % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
    }
    if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
    }
    const buffer = (0, util_buffer_from_1.fromString)(input, "base64");
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
};
exports.fromBase64 = fromBase64;


/***/ }),

/***/ 5600:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var fromBase64 = __nccwpck_require__(305);
var toBase64 = __nccwpck_require__(4730);



Object.prototype.hasOwnProperty.call(fromBase64, '__proto__') &&
	!Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
	Object.defineProperty(exports, '__proto__', {
		enumerable: true,
		value: fromBase64['__proto__']
	});

Object.keys(fromBase64).forEach(function (k) {
	if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = fromBase64[k];
});
Object.prototype.hasOwnProperty.call(toBase64, '__proto__') &&
	!Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
	Object.defineProperty(exports, '__proto__', {
		enumerable: true,
		value: toBase64['__proto__']
	});

Object.keys(toBase64).forEach(function (k) {
	if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = toBase64[k];
});


/***/ }),

/***/ 4730:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toBase64 = void 0;
const util_buffer_from_1 = __nccwpck_require__(1381);
const util_utf8_1 = __nccwpck_require__(1895);
const toBase64 = (_input) => {
    let input;
    if (typeof _input === "string") {
        input = (0, util_utf8_1.fromUtf8)(_input);
    }
    else {
        input = _input;
    }
    if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    }
    return (0, util_buffer_from_1.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("base64");
};
exports.toBase64 = toBase64;


/***/ }),

/***/ 713:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


const TEXT_ENCODER = typeof TextEncoder == "function" ? new TextEncoder() : null;
const calculateBodyLength = (body) => {
    if (typeof body === "string") {
        if (TEXT_ENCODER) {
            return TEXT_ENCODER.encode(body).byteLength;
        }
        let len = body.length;
        for (let i = len - 1; i >= 0; i--) {
            const code = body.charCodeAt(i);
            if (code > 0x7f && code <= 0x7ff)
                len++;
            else if (code > 0x7ff && code <= 0xffff)
                len += 2;
            if (code >= 0xdc00 && code <= 0xdfff)
                i--;
        }
        return len;
    }
    else if (typeof body.byteLength === "number") {
        return body.byteLength;
    }
    else if (typeof body.size === "number") {
        return body.size;
    }
    throw new Error(`Body Length computation failed for ${body}`);
};

exports.calculateBodyLength = calculateBodyLength;


/***/ }),

/***/ 8075:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var node_fs = __nccwpck_require__(7561);

const calculateBodyLength = (body) => {
    if (!body) {
        return 0;
    }
    if (typeof body === "string") {
        return Buffer.byteLength(body);
    }
    else if (typeof body.byteLength === "number") {
        return body.byteLength;
    }
    else if (typeof body.size === "number") {
        return body.size;
    }
    else if (typeof body.start === "number" && typeof body.end === "number") {
        return body.end + 1 - body.start;
    }
    else if (body instanceof node_fs.ReadStream) {
        if (body.path != null) {
            return node_fs.lstatSync(body.path).size;
        }
        else if (typeof body.fd === "number") {
            return node_fs.fstatSync(body.fd).size;
        }
    }
    throw new Error(`Body Length computation failed for ${body}`);
};

exports.calculateBodyLength = calculateBodyLength;


/***/ }),

/***/ 1381:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var isArrayBuffer = __nccwpck_require__(780);
var buffer = __nccwpck_require__(4300);

const fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {
    if (!isArrayBuffer.isArrayBuffer(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
    }
    return buffer.Buffer.from(input, offset, length);
};
const fromString = (input, encoding) => {
    if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
    }
    return encoding ? buffer.Buffer.from(input, encoding) : buffer.Buffer.from(input);
};

exports.fromArrayBuffer = fromArrayBuffer;
exports.fromString = fromString;


/***/ }),

/***/ 3375:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


const booleanSelector = (obj, key, type) => {
    if (!(key in obj))
        return undefined;
    if (obj[key] === "true")
        return true;
    if (obj[key] === "false")
        return false;
    throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
};

const numberSelector = (obj, key, type) => {
    if (!(key in obj))
        return undefined;
    const numberValue = parseInt(obj[key], 10);
    if (Number.isNaN(numberValue)) {
        throw new TypeError(`Cannot load ${type} '${key}'. Expected number, got '${obj[key]}'.`);
    }
    return numberValue;
};

exports.SelectorType = void 0;
(function (SelectorType) {
    SelectorType["ENV"] = "env";
    SelectorType["CONFIG"] = "shared config entry";
})(exports.SelectorType || (exports.SelectorType = {}));

exports.booleanSelector = booleanSelector;
exports.numberSelector = numberSelector;


/***/ }),

/***/ 2429:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var configResolver = __nccwpck_require__(3098);
var nodeConfigProvider = __nccwpck_require__(3461);
var propertyProvider = __nccwpck_require__(9721);

const AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
const AWS_REGION_ENV = "AWS_REGION";
const AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
const ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
const DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
const IMDS_REGION_PATH = "/latest/meta-data/placement/region";

const AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
const AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
const NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        return env[AWS_DEFAULTS_MODE_ENV];
    },
    configFileSelector: (profile) => {
        return profile[AWS_DEFAULTS_MODE_CONFIG];
    },
    default: "legacy",
};

const resolveDefaultsModeConfig = ({ region = nodeConfigProvider.loadConfig(configResolver.NODE_REGION_CONFIG_OPTIONS), defaultsMode = nodeConfigProvider.loadConfig(NODE_DEFAULTS_MODE_CONFIG_OPTIONS), } = {}) => propertyProvider.memoize(async () => {
    const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
    switch (mode?.toLowerCase()) {
        case "auto":
            return resolveNodeDefaultsModeAuto(region);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
            return Promise.resolve(mode?.toLocaleLowerCase());
        case undefined:
            return Promise.resolve("legacy");
        default:
            throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
    }
});
const resolveNodeDefaultsModeAuto = async (clientRegion) => {
    if (clientRegion) {
        const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
        const inferredRegion = await inferPhysicalRegion();
        if (!inferredRegion) {
            return "standard";
        }
        if (resolvedRegion === inferredRegion) {
            return "in-region";
        }
        else {
            return "cross-region";
        }
    }
    return "standard";
};
const inferPhysicalRegion = async () => {
    if (process.env[AWS_EXECUTION_ENV] && (process.env[AWS_REGION_ENV] || process.env[AWS_DEFAULT_REGION_ENV])) {
        return process.env[AWS_REGION_ENV] ?? process.env[AWS_DEFAULT_REGION_ENV];
    }
    if (!process.env[ENV_IMDS_DISABLED]) {
        try {
            const { getInstanceMetadataEndpoint, httpRequest } = await __nccwpck_require__.e(/* import() */ 477).then(__nccwpck_require__.t.bind(__nccwpck_require__, 7477, 19));
            const endpoint = await getInstanceMetadataEndpoint();
            return (await httpRequest({ ...endpoint, path: IMDS_REGION_PATH })).toString();
        }
        catch (e) {
        }
    }
};

exports.resolveDefaultsModeConfig = resolveDefaultsModeConfig;


/***/ }),

/***/ 5473:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var types = __nccwpck_require__(5756);

class BinaryDecisionDiagram {
    nodes;
    root;
    conditions;
    results;
    constructor(bdd, root, conditions, results) {
        this.nodes = bdd;
        this.root = root;
        this.conditions = conditions;
        this.results = results;
    }
    static from(bdd, root, conditions, results) {
        return new BinaryDecisionDiagram(bdd, root, conditions, results);
    }
}

class EndpointCache {
    capacity;
    data = new Map();
    parameters = [];
    constructor({ size, params }) {
        this.capacity = size ?? 50;
        if (params) {
            this.parameters = params;
        }
    }
    get(endpointParams, resolver) {
        const key = this.hash(endpointParams);
        if (key === false) {
            return resolver();
        }
        if (!this.data.has(key)) {
            if (this.data.size > this.capacity + 10) {
                const keys = this.data.keys();
                let i = 0;
                while (true) {
                    const { value, done } = keys.next();
                    this.data.delete(value);
                    if (done || ++i > 10) {
                        break;
                    }
                }
            }
            this.data.set(key, resolver());
        }
        return this.data.get(key);
    }
    size() {
        return this.data.size;
    }
    hash(endpointParams) {
        let buffer = "";
        const { parameters } = this;
        if (parameters.length === 0) {
            return false;
        }
        for (const param of parameters) {
            const val = String(endpointParams[param] ?? "");
            if (val.includes("|;")) {
                return false;
            }
            buffer += val + "|;";
        }
        return buffer;
    }
}

class EndpointError extends Error {
    constructor(message) {
        super(message);
        this.name = "EndpointError";
    }
}

const debugId = "endpoints";

function toDebugString(input) {
    if (typeof input !== "object" || input == null) {
        return input;
    }
    if ("ref" in input) {
        return `$${toDebugString(input.ref)}`;
    }
    if ("fn" in input) {
        return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
    }
    return JSON.stringify(input, null, 2);
}

const customEndpointFunctions = {};

const booleanEquals = (value1, value2) => value1 === value2;

function coalesce(...args) {
    for (const arg of args) {
        if (arg != null) {
            return arg;
        }
    }
    return undefined;
}

const getAttrPathList = (path) => {
    const parts = path.split(".");
    const pathList = [];
    for (const part of parts) {
        const squareBracketIndex = part.indexOf("[");
        if (squareBracketIndex !== -1) {
            if (part.indexOf("]") !== part.length - 1) {
                throw new EndpointError(`Path: '${path}' does not end with ']'`);
            }
            const arrayIndex = part.slice(squareBracketIndex + 1, -1);
            if (Number.isNaN(parseInt(arrayIndex))) {
                throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
            }
            if (squareBracketIndex !== 0) {
                pathList.push(part.slice(0, squareBracketIndex));
            }
            pathList.push(arrayIndex);
        }
        else {
            pathList.push(part);
        }
    }
    return pathList;
};

const getAttr = (value, path) => getAttrPathList(path).reduce((acc, index) => {
    if (typeof acc !== "object") {
        throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
    }
    else if (Array.isArray(acc)) {
        const i = parseInt(index);
        return acc[i < 0 ? acc.length + i : i];
    }
    return acc[index];
}, value);

const isSet = (value) => value != null;

const VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
const isValidHostLabel = (value, allowSubDomains = false) => {
    if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
    }
    const labels = value.split(".");
    for (const label of labels) {
        if (!isValidHostLabel(label)) {
            return false;
        }
    }
    return true;
};

function ite(condition, trueValue, falseValue) {
    return condition ? trueValue : falseValue;
}

const not = (value) => !value;

const IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
const isIpAddress = (value) => IP_V4_REGEX.test(value) || (value.startsWith("[") && value.endsWith("]"));

const DEFAULT_PORTS = {
    [types.EndpointURLScheme.HTTP]: 80,
    [types.EndpointURLScheme.HTTPS]: 443,
};
const parseURL = (value) => {
    const whatwgURL = (() => {
        try {
            if (value instanceof URL) {
                return value;
            }
            if (typeof value === "object" && "hostname" in value) {
                const { hostname, port, protocol = "", path = "", query = {} } = value;
                const url = new URL(`${protocol}//${hostname}${port ? `:${port}` : ""}${path}`);
                url.search = Object.entries(query)
                    .map(([k, v]) => `${k}=${v}`)
                    .join("&");
                return url;
            }
            return new URL(value);
        }
        catch (error) {
            return null;
        }
    })();
    if (!whatwgURL) {
        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
        return null;
    }
    const urlString = whatwgURL.href;
    const { host, hostname, pathname, protocol, search } = whatwgURL;
    if (search) {
        return null;
    }
    const scheme = protocol.slice(0, -1);
    if (!Object.values(types.EndpointURLScheme).includes(scheme)) {
        return null;
    }
    const isIp = isIpAddress(hostname);
    const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) ||
        (typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`));
    const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
    return {
        scheme,
        authority,
        path: pathname,
        normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
        isIp,
    };
};

function split(value, delimiter, limit) {
    if (limit === 1) {
        return [value];
    }
    if (value === "") {
        return [""];
    }
    const parts = value.split(delimiter);
    if (limit === 0) {
        return parts;
    }
    return parts.slice(0, limit - 1).concat(parts.slice(1).join(delimiter));
}

const stringEquals = (value1, value2) => value1 === value2;

const substring = (input, start, stop, reverse) => {
    if (input == null || start >= stop || input.length < stop || /[^\u0000-\u007f]/.test(input)) {
        return null;
    }
    if (!reverse) {
        return input.substring(start, stop);
    }
    return input.substring(input.length - stop, input.length - start);
};

const uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);

const endpointFunctions = {
    booleanEquals,
    coalesce,
    getAttr,
    isSet,
    isValidHostLabel,
    ite,
    not,
    parseURL,
    split,
    stringEquals,
    substring,
    uriEncode,
};

const evaluateTemplate = (template, options) => {
    const evaluatedTemplateArr = [];
    const { referenceRecord, endpointParams } = options;
    let currentIndex = 0;
    while (currentIndex < template.length) {
        const openingBraceIndex = template.indexOf("{", currentIndex);
        if (openingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(currentIndex));
            break;
        }
        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
        const closingBraceIndex = template.indexOf("}", openingBraceIndex);
        if (closingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex));
            break;
        }
        if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
            currentIndex = closingBraceIndex + 2;
        }
        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
        if (parameterName.includes("#")) {
            const [refName, attrName] = parameterName.split("#");
            evaluatedTemplateArr.push(getAttr((referenceRecord[refName] ?? endpointParams[refName]), attrName));
        }
        else {
            evaluatedTemplateArr.push((referenceRecord[parameterName] ?? endpointParams[parameterName]));
        }
        currentIndex = closingBraceIndex + 1;
    }
    return evaluatedTemplateArr.join("");
};

const getReferenceValue = ({ ref }, options) => {
    return options.referenceRecord[ref] ?? options.endpointParams[ref];
};

const evaluateExpression = (obj, keyName, options) => {
    if (typeof obj === "string") {
        return evaluateTemplate(obj, options);
    }
    else if (obj["fn"]) {
        return group$2.callFunction(obj, options);
    }
    else if (obj["ref"]) {
        return getReferenceValue(obj, options);
    }
    throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
};
const callFunction = ({ fn, argv }, options) => {
    const evaluatedArgs = Array(argv.length);
    for (let i = 0; i < evaluatedArgs.length; ++i) {
        const arg = argv[i];
        if (typeof arg === "boolean" || typeof arg === "number") {
            evaluatedArgs[i] = arg;
        }
        else {
            evaluatedArgs[i] = group$2.evaluateExpression(arg, "arg", options);
        }
    }
    const namespaceSeparatorIndex = fn.indexOf(".");
    if (namespaceSeparatorIndex !== -1) {
        const namespaceFunctions = customEndpointFunctions[fn.slice(0, namespaceSeparatorIndex)];
        const customFunction = namespaceFunctions?.[fn.slice(namespaceSeparatorIndex + 1)];
        if (typeof customFunction === "function") {
            return customFunction(...evaluatedArgs);
        }
    }
    const callable = endpointFunctions[fn];
    if (typeof callable === "function") {
        return callable(...evaluatedArgs);
    }
    throw new Error(`function ${fn} not loaded in endpointFunctions.`);
};
const group$2 = {
    evaluateExpression,
    callFunction,
};

const evaluateCondition = (condition, options) => {
    const { assign } = condition;
    if (assign && assign in options.referenceRecord) {
        throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
    }
    const value = callFunction(condition, options);
    options.logger?.debug?.(`${debugId} evaluateCondition: ${toDebugString(condition)} = ${toDebugString(value)}`);
    const result = value === "" ? true : !!value;
    if (assign != null) {
        return { result, toAssign: { name: assign, value } };
    }
    return { result };
};

const getEndpointHeaders = (headers, options) => Object.entries(headers ?? {}).reduce((acc, [headerKey, headerVal]) => {
    acc[headerKey] = headerVal.map((headerValEntry) => {
        const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
        if (typeof processedExpr !== "string") {
            throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
        }
        return processedExpr;
    });
    return acc;
}, {});

const getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => {
    acc[propertyKey] = group$1.getEndpointProperty(propertyVal, options);
    return acc;
}, {});
const getEndpointProperty = (property, options) => {
    if (Array.isArray(property)) {
        return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
    }
    switch (typeof property) {
        case "string":
            return evaluateTemplate(property, options);
        case "object":
            if (property === null) {
                throw new EndpointError(`Unexpected endpoint property: ${property}`);
            }
            return group$1.getEndpointProperties(property, options);
        case "boolean":
            return property;
        default:
            throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
    }
};
const group$1 = {
    getEndpointProperty,
    getEndpointProperties,
};

const getEndpointUrl = (endpointUrl, options) => {
    const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
    if (typeof expression === "string") {
        try {
            return new URL(expression);
        }
        catch (error) {
            console.error(`Failed to construct URL with ${expression}`, error);
            throw error;
        }
    }
    throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
};

const RESULT = 100_000_000;
const decideEndpoint = (bdd, options) => {
    const { nodes, root, results, conditions } = bdd;
    let ref = root;
    const referenceRecord = {};
    const closure = {
        referenceRecord,
        endpointParams: options.endpointParams,
        logger: options.logger,
    };
    while (ref !== 1 && ref !== -1 && ref < RESULT) {
        const node_i = 3 * (Math.abs(ref) - 1);
        const [condition_i, highRef, lowRef] = [nodes[node_i], nodes[node_i + 1], nodes[node_i + 2]];
        const [fn, argv, assign] = conditions[condition_i];
        const evaluation = evaluateCondition({ fn, assign, argv }, closure);
        if (evaluation.toAssign) {
            const { name, value } = evaluation.toAssign;
            referenceRecord[name] = value;
        }
        ref = ref >= 0 === evaluation.result ? highRef : lowRef;
    }
    if (ref >= RESULT) {
        const result = results[ref - RESULT];
        if (result[0] === -1) {
            const [, errorExpression] = result;
            throw new EndpointError(evaluateExpression(errorExpression, "Error", closure));
        }
        const [url, properties, headers] = result;
        return {
            url: getEndpointUrl(url, closure),
            properties: getEndpointProperties(properties, closure),
            headers: getEndpointHeaders(headers ?? {}, closure),
        };
    }
    throw new EndpointError(`No matching endpoint.`);
};

const evaluateConditions = (conditions = [], options) => {
    const conditionsReferenceRecord = {};
    const conditionOptions = {
        ...options,
        referenceRecord: { ...options.referenceRecord },
    };
    let didAssign = false;
    for (const condition of conditions) {
        const { result, toAssign } = evaluateCondition(condition, conditionOptions);
        if (!result) {
            return { result };
        }
        if (toAssign) {
            didAssign = true;
            conditionsReferenceRecord[toAssign.name] = toAssign.value;
            conditionOptions.referenceRecord[toAssign.name] = toAssign.value;
            options.logger?.debug?.(`${debugId} assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
        }
    }
    if (didAssign) {
        return { result: true, referenceRecord: conditionsReferenceRecord };
    }
    return { result: true };
};

const evaluateEndpointRule = (endpointRule, options) => {
    const { conditions, endpoint } = endpointRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
        return;
    }
    const endpointRuleOptions = referenceRecord
        ? {
            ...options,
            referenceRecord: { ...options.referenceRecord, ...referenceRecord },
        }
        : options;
    const { url, properties, headers } = endpoint;
    options.logger?.debug?.(`${debugId} Resolving endpoint from template: ${toDebugString(endpoint)}`);
    const endpointToReturn = { url: getEndpointUrl(url, endpointRuleOptions) };
    if (headers != null) {
        endpointToReturn.headers = getEndpointHeaders(headers, endpointRuleOptions);
    }
    if (properties != null) {
        endpointToReturn.properties = getEndpointProperties(properties, endpointRuleOptions);
    }
    return endpointToReturn;
};

const evaluateErrorRule = (errorRule, options) => {
    const { conditions, error } = errorRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
        return;
    }
    const errorRuleOptions = referenceRecord
        ? {
            ...options,
            referenceRecord: { ...options.referenceRecord, ...referenceRecord },
        }
        : options;
    throw new EndpointError(evaluateExpression(error, "Error", errorRuleOptions));
};

const evaluateRules = (rules, options) => {
    for (const rule of rules) {
        if (rule.type === "endpoint") {
            const endpointOrUndefined = evaluateEndpointRule(rule, options);
            if (endpointOrUndefined) {
                return endpointOrUndefined;
            }
        }
        else if (rule.type === "error") {
            evaluateErrorRule(rule, options);
        }
        else if (rule.type === "tree") {
            const endpointOrUndefined = group.evaluateTreeRule(rule, options);
            if (endpointOrUndefined) {
                return endpointOrUndefined;
            }
        }
        else {
            throw new EndpointError(`Unknown endpoint rule: ${rule}`);
        }
    }
    throw new EndpointError(`Rules evaluation failed`);
};
const evaluateTreeRule = (treeRule, options) => {
    const { conditions, rules } = treeRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
        return;
    }
    const treeRuleOptions = referenceRecord
        ? { ...options, referenceRecord: { ...options.referenceRecord, ...referenceRecord } }
        : options;
    return group.evaluateRules(rules, treeRuleOptions);
};
const group = {
    evaluateRules,
    evaluateTreeRule,
};

const resolveEndpoint = (ruleSetObject, options) => {
    const { endpointParams, logger } = options;
    const { parameters, rules } = ruleSetObject;
    options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
    for (const paramKey in parameters) {
        const parameter = parameters[paramKey];
        const endpointParam = endpointParams[paramKey];
        if (endpointParam == null && parameter.default != null) {
            endpointParams[paramKey] = parameter.default;
            continue;
        }
        if (parameter.required && endpointParam == null) {
            throw new EndpointError(`Missing required parameter: '${paramKey}'`);
        }
    }
    const endpoint = evaluateRules(rules, { endpointParams, logger, referenceRecord: {} });
    options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
    return endpoint;
};

exports.BinaryDecisionDiagram = BinaryDecisionDiagram;
exports.EndpointCache = EndpointCache;
exports.EndpointError = EndpointError;
exports.customEndpointFunctions = customEndpointFunctions;
exports.decideEndpoint = decideEndpoint;
exports.isIpAddress = isIpAddress;
exports.isValidHostLabel = isValidHostLabel;
exports.resolveEndpoint = resolveEndpoint;


/***/ }),

/***/ 5364:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


const SHORT_TO_HEX = {};
const HEX_TO_SHORT = {};
for (let i = 0; i < 256; i++) {
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for (let i = 0; i < encoded.length; i += 2) {
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        }
        else {
            throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
    }
    return out;
}
function toHex(bytes) {
    let out = "";
    for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}

exports.fromHex = fromHex;
exports.toHex = toHex;


/***/ }),

/***/ 2390:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var types = __nccwpck_require__(5756);

const getSmithyContext = (context) => context[types.SMITHY_CONTEXT_KEY] || (context[types.SMITHY_CONTEXT_KEY] = {});

const normalizeProvider = (input) => {
    if (typeof input === "function")
        return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
};

exports.getSmithyContext = getSmithyContext;
exports.normalizeProvider = normalizeProvider;


/***/ }),

/***/ 4902:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var serviceErrorClassification = __nccwpck_require__(6375);

exports.RETRY_MODES = void 0;
(function (RETRY_MODES) {
    RETRY_MODES["STANDARD"] = "standard";
    RETRY_MODES["ADAPTIVE"] = "adaptive";
})(exports.RETRY_MODES || (exports.RETRY_MODES = {}));
const DEFAULT_MAX_ATTEMPTS = 3;
const DEFAULT_RETRY_MODE = exports.RETRY_MODES.STANDARD;

class DefaultRateLimiter {
    static setTimeoutFn = setTimeout;
    beta;
    minCapacity;
    minFillRate;
    scaleConstant;
    smooth;
    enabled = false;
    availableTokens = 0;
    lastMaxRate = 0;
    measuredTxRate = 0;
    requestCount = 0;
    fillRate;
    lastThrottleTime;
    lastTimestamp = 0;
    lastTxRateBucket;
    maxCapacity;
    timeWindow = 0;
    constructor(options) {
        this.beta = options?.beta ?? 0.7;
        this.minCapacity = options?.minCapacity ?? 1;
        this.minFillRate = options?.minFillRate ?? 0.5;
        this.scaleConstant = options?.scaleConstant ?? 0.4;
        this.smooth = options?.smooth ?? 0.8;
        this.lastThrottleTime = this.getCurrentTimeInSeconds();
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
    }
    async getSendToken() {
        return this.acquireTokenBucket(1);
    }
    updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        const retryErrorInfo = response;
        const isThrottling = retryErrorInfo?.errorType === "THROTTLING" || serviceErrorClassification.isThrottlingError(retryErrorInfo?.error ?? response);
        if (isThrottling) {
            const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
            this.lastMaxRate = rateToUse;
            this.calculateTimeWindow();
            this.lastThrottleTime = this.getCurrentTimeInSeconds();
            calculatedRate = this.cubicThrottle(rateToUse);
            this.enableTokenBucket();
        }
        else {
            this.calculateTimeWindow();
            calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
    }
    getCurrentTimeInSeconds() {
        return Date.now() / 1000;
    }
    async acquireTokenBucket(amount) {
        if (!this.enabled) {
            return;
        }
        this.refillTokenBucket();
        while (amount > this.availableTokens) {
            const delay = ((amount - this.availableTokens) / this.fillRate) * 1000;
            await new Promise((resolve) => DefaultRateLimiter.setTimeoutFn(resolve, delay));
            this.refillTokenBucket();
        }
        this.availableTokens = this.availableTokens - amount;
    }
    refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;
            return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.availableTokens = Math.min(this.maxCapacity, this.availableTokens + fillAmount);
        this.lastTimestamp = timestamp;
    }
    calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow((this.lastMaxRate * (1 - this.beta)) / this.scaleConstant, 1 / 3));
    }
    cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
    }
    cubicSuccess(timestamp) {
        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
        this.enabled = true;
    }
    updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.availableTokens = Math.min(this.availableTokens, this.maxCapacity);
    }
    updateMeasuredRate() {
        const t = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
            const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
            this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
            this.requestCount = 0;
            this.lastTxRateBucket = timeBucket;
        }
    }
    getPrecise(num) {
        return parseFloat(num.toFixed(8));
    }
}

const DEFAULT_RETRY_DELAY_BASE = 100;
const MAXIMUM_RETRY_DELAY = 20 * 1000;
const THROTTLING_RETRY_DELAY_BASE = 500;
const INITIAL_RETRY_TOKENS = 500;
const RETRY_COST = 5;
const TIMEOUT_RETRY_COST = 10;
const NO_RETRY_INCREMENT = 1;
const INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
const REQUEST_HEADER = "amz-sdk-request";

class Retry {
    static v2026 = typeof process !== "undefined" && process.env?.SMITHY_NEW_RETRIES_2026 === "true";
    static delay() {
        return Retry.v2026 ? 50 : 100;
    }
    static throttlingDelay() {
        return Retry.v2026 ? 1_000 : 500;
    }
    static cost() {
        return Retry.v2026 ? 14 : 5;
    }
    static throttlingCost() {
        return Retry.v2026 ? 5 : 10;
    }
    static modifiedCostType() {
        return Retry.v2026 ? "THROTTLING" : "TRANSIENT";
    }
}

class DefaultRetryBackoffStrategy {
    x = Retry.delay();
    computeNextBackoffDelay(i) {
        const b = Math.random();
        const r = 2;
        const t_i = b * Math.min(this.x * r ** i, MAXIMUM_RETRY_DELAY);
        return Math.floor(t_i);
    }
    setDelayBase(delay) {
        this.x = delay;
    }
}

class DefaultRetryToken {
    delay;
    count;
    cost;
    longPoll;
    constructor(delay, count, cost, longPoll) {
        this.delay = delay;
        this.count = count;
        this.cost = cost;
        this.longPoll = longPoll;
    }
    getRetryCount() {
        return this.count;
    }
    getRetryDelay() {
        return Math.min(MAXIMUM_RETRY_DELAY, this.delay);
    }
    getRetryCost() {
        return this.cost;
    }
    isLongPoll() {
        return this.longPoll;
    }
}

const refusal = {
    incompatible: 1,
    attempts: 2,
    capacity: 3,
};
class StandardRetryStrategy {
    mode = exports.RETRY_MODES.STANDARD;
    capacity = INITIAL_RETRY_TOKENS;
    retryBackoffStrategy;
    maxAttemptsProvider;
    baseDelay;
    constructor(arg1) {
        if (typeof arg1 === "number") {
            this.maxAttemptsProvider = async () => arg1;
        }
        else if (typeof arg1 === "function") {
            this.maxAttemptsProvider = arg1;
        }
        else if (arg1 && typeof arg1 === "object") {
            this.maxAttemptsProvider = async () => arg1.maxAttempts;
            this.baseDelay = arg1.baseDelay;
            this.retryBackoffStrategy = arg1.backoff;
        }
        this.maxAttemptsProvider ??= async () => DEFAULT_MAX_ATTEMPTS;
        this.baseDelay ??= Retry.delay();
        this.retryBackoffStrategy ??= new DefaultRetryBackoffStrategy();
    }
    async acquireInitialRetryToken(retryTokenScope) {
        return new DefaultRetryToken(Retry.delay(), 0, undefined, Retry.v2026 && retryTokenScope.includes(":longpoll"));
    }
    async refreshRetryTokenForRetry(token, errorInfo) {
        const maxAttempts = await this.getMaxAttempts();
        const retryCode = this.retryCode(token, errorInfo, maxAttempts);
        const shouldRetry = retryCode === 0;
        const isLongPoll = token.isLongPoll?.();
        if (shouldRetry || isLongPoll) {
            const errorType = errorInfo.errorType;
            this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? Retry.throttlingDelay() : this.baseDelay);
            const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
            let retryDelay = delayFromErrorType;
            if (errorInfo.retryAfterHint instanceof Date) {
                retryDelay = Math.max(delayFromErrorType, Math.min(errorInfo.retryAfterHint.getTime() - Date.now(), delayFromErrorType + 5_000));
            }
            if (!shouldRetry) {
                throw Object.assign(new Error("No retry token available"), {
                    $backoff: Retry.v2026 && retryCode === refusal.capacity && isLongPoll ? retryDelay : 0,
                });
            }
            else {
                const capacityCost = this.getCapacityCost(errorType);
                this.capacity -= capacityCost;
                return new DefaultRetryToken(retryDelay, token.getRetryCount() + 1, capacityCost, token.isLongPoll?.() ?? false);
            }
        }
        throw new Error("No retry token available");
    }
    recordSuccess(token) {
        this.capacity = Math.min(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
    }
    getCapacity() {
        return this.capacity;
    }
    async maxAttempts() {
        return this.maxAttemptsProvider();
    }
    async getMaxAttempts() {
        try {
            return await this.maxAttemptsProvider();
        }
        catch (error) {
            console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
            return DEFAULT_MAX_ATTEMPTS;
        }
    }
    retryCode(tokenToRenew, errorInfo, maxAttempts) {
        const attempts = tokenToRenew.getRetryCount() + 1;
        const retryableStatus = this.isRetryableError(errorInfo.errorType) ? 0 : refusal.incompatible;
        const attemptStatus = attempts < maxAttempts ? 0 : refusal.attempts;
        const capacityStatus = this.capacity >= this.getCapacityCost(errorInfo.errorType) ? 0 : refusal.capacity;
        return retryableStatus || attemptStatus || capacityStatus;
    }
    getCapacityCost(errorType) {
        return errorType === Retry.modifiedCostType() ? Retry.throttlingCost() : Retry.cost();
    }
    isRetryableError(errorType) {
        return errorType === "THROTTLING" || errorType === "TRANSIENT";
    }
}

class AdaptiveRetryStrategy {
    mode = exports.RETRY_MODES.ADAPTIVE;
    rateLimiter;
    standardRetryStrategy;
    constructor(maxAttemptsProvider, options) {
        const { rateLimiter } = options ?? {};
        this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
        this.standardRetryStrategy = options
            ? new StandardRetryStrategy({
                maxAttempts: typeof maxAttemptsProvider === "number" ? maxAttemptsProvider : 3,
                ...options,
            })
            : new StandardRetryStrategy(maxAttemptsProvider);
    }
    async acquireInitialRetryToken(retryTokenScope) {
        const token = this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
        await this.rateLimiter.getSendToken();
        return token;
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        this.rateLimiter.updateClientSendingRate(errorInfo);
        const token = this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
        await this.rateLimiter.getSendToken();
        return token;
    }
    recordSuccess(token) {
        this.rateLimiter.updateClientSendingRate({});
        this.standardRetryStrategy.recordSuccess(token);
    }
    async maxAttemptsProvider() {
        return this.standardRetryStrategy.maxAttempts();
    }
}

class ConfiguredRetryStrategy extends StandardRetryStrategy {
    computeNextBackoffDelay;
    constructor(maxAttempts, computeNextBackoffDelay = Retry.delay()) {
        super(typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts);
        if (typeof computeNextBackoffDelay === "number") {
            this.computeNextBackoffDelay = () => computeNextBackoffDelay;
        }
        else {
            this.computeNextBackoffDelay = computeNextBackoffDelay;
        }
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        const token = await super.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
        token.getRetryDelay = () => this.computeNextBackoffDelay(token.getRetryCount());
        return token;
    }
}

exports.AdaptiveRetryStrategy = AdaptiveRetryStrategy;
exports.ConfiguredRetryStrategy = ConfiguredRetryStrategy;
exports.DEFAULT_MAX_ATTEMPTS = DEFAULT_MAX_ATTEMPTS;
exports.DEFAULT_RETRY_DELAY_BASE = DEFAULT_RETRY_DELAY_BASE;
exports.DEFAULT_RETRY_MODE = DEFAULT_RETRY_MODE;
exports.DefaultRateLimiter = DefaultRateLimiter;
exports.INITIAL_RETRY_TOKENS = INITIAL_RETRY_TOKENS;
exports.INVOCATION_ID_HEADER = INVOCATION_ID_HEADER;
exports.MAXIMUM_RETRY_DELAY = MAXIMUM_RETRY_DELAY;
exports.NO_RETRY_INCREMENT = NO_RETRY_INCREMENT;
exports.REQUEST_HEADER = REQUEST_HEADER;
exports.RETRY_COST = RETRY_COST;
exports.Retry = Retry;
exports.StandardRetryStrategy = StandardRetryStrategy;
exports.THROTTLING_RETRY_DELAY_BASE = THROTTLING_RETRY_DELAY_BASE;
exports.TIMEOUT_RETRY_COST = TIMEOUT_RETRY_COST;


/***/ }),

/***/ 9361:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ByteArrayCollector = void 0;
class ByteArrayCollector {
    allocByteArray;
    byteLength = 0;
    byteArrays = [];
    constructor(allocByteArray) {
        this.allocByteArray = allocByteArray;
    }
    push(byteArray) {
        this.byteArrays.push(byteArray);
        this.byteLength += byteArray.byteLength;
    }
    flush() {
        if (this.byteArrays.length === 1) {
            const bytes = this.byteArrays[0];
            this.reset();
            return bytes;
        }
        const aggregation = this.allocByteArray(this.byteLength);
        let cursor = 0;
        for (let i = 0; i < this.byteArrays.length; ++i) {
            const bytes = this.byteArrays[i];
            aggregation.set(bytes, cursor);
            cursor += bytes.byteLength;
        }
        this.reset();
        return aggregation;
    }
    reset() {
        this.byteArrays = [];
        this.byteLength = 0;
    }
}
exports.ByteArrayCollector = ByteArrayCollector;


/***/ }),

/***/ 8551:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChecksumStream = void 0;
const ReadableStreamRef = typeof ReadableStream === "function" ? ReadableStream : function () { };
class ChecksumStream extends ReadableStreamRef {
}
exports.ChecksumStream = ChecksumStream;


/***/ }),

/***/ 6982:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChecksumStream = void 0;
const util_base64_1 = __nccwpck_require__(5600);
const stream_1 = __nccwpck_require__(2781);
class ChecksumStream extends stream_1.Duplex {
    expectedChecksum;
    checksumSourceLocation;
    checksum;
    source;
    base64Encoder;
    pendingCallback = null;
    constructor({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder, }) {
        super();
        if (typeof source.pipe === "function") {
            this.source = source;
        }
        else {
            throw new Error(`@smithy/util-stream: unsupported source type ${source?.constructor?.name ?? source} in ChecksumStream.`);
        }
        this.base64Encoder = base64Encoder ?? util_base64_1.toBase64;
        this.expectedChecksum = expectedChecksum;
        this.checksum = checksum;
        this.checksumSourceLocation = checksumSourceLocation;
        this.source.pipe(this);
    }
    _read(size) {
        if (this.pendingCallback) {
            const callback = this.pendingCallback;
            this.pendingCallback = null;
            callback();
        }
    }
    _write(chunk, encoding, callback) {
        try {
            this.checksum.update(chunk);
            const canPushMore = this.push(chunk);
            if (!canPushMore) {
                this.pendingCallback = callback;
                return;
            }
        }
        catch (e) {
            return callback(e);
        }
        return callback();
    }
    async _final(callback) {
        try {
            const digest = await this.checksum.digest();
            const received = this.base64Encoder(digest);
            if (this.expectedChecksum !== received) {
                return callback(new Error(`Checksum mismatch: expected "${this.expectedChecksum}" but received "${received}"` +
                    ` in response header "${this.checksumSourceLocation}".`));
            }
        }
        catch (e) {
            return callback(e);
        }
        this.push(null);
        return callback();
    }
}
exports.ChecksumStream = ChecksumStream;


/***/ }),

/***/ 2313:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createChecksumStream = void 0;
const util_base64_1 = __nccwpck_require__(5600);
const stream_type_check_1 = __nccwpck_require__(7578);
const ChecksumStream_browser_1 = __nccwpck_require__(8551);
const createChecksumStream = ({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder, }) => {
    if (!(0, stream_type_check_1.isReadableStream)(source)) {
        throw new Error(`@smithy/util-stream: unsupported source type ${source?.constructor?.name ?? source} in ChecksumStream.`);
    }
    const encoder = base64Encoder ?? util_base64_1.toBase64;
    if (typeof TransformStream !== "function") {
        throw new Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.");
    }
    const transform = new TransformStream({
        start() { },
        async transform(chunk, controller) {
            checksum.update(chunk);
            controller.enqueue(chunk);
        },
        async flush(controller) {
            const digest = await checksum.digest();
            const received = encoder(digest);
            if (expectedChecksum !== received) {
                const error = new Error(`Checksum mismatch: expected "${expectedChecksum}" but received "${received}"` +
                    ` in response header "${checksumSourceLocation}".`);
                controller.error(error);
            }
            else {
                controller.terminate();
            }
        },
    });
    source.pipeThrough(transform);
    const readable = transform.readable;
    Object.setPrototypeOf(readable, ChecksumStream_browser_1.ChecksumStream.prototype);
    return readable;
};
exports.createChecksumStream = createChecksumStream;


/***/ }),

/***/ 1927:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createChecksumStream = createChecksumStream;
const stream_type_check_1 = __nccwpck_require__(7578);
const ChecksumStream_1 = __nccwpck_require__(6982);
const createChecksumStream_browser_1 = __nccwpck_require__(2313);
function createChecksumStream(init) {
    if (typeof ReadableStream === "function" && (0, stream_type_check_1.isReadableStream)(init.source)) {
        return (0, createChecksumStream_browser_1.createChecksumStream)(init);
    }
    return new ChecksumStream_1.ChecksumStream(init);
}


/***/ }),

/***/ 3259:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createBufferedReadable = createBufferedReadable;
const node_stream_1 = __nccwpck_require__(4492);
const ByteArrayCollector_1 = __nccwpck_require__(9361);
const createBufferedReadableStream_1 = __nccwpck_require__(2558);
const stream_type_check_1 = __nccwpck_require__(7578);
function createBufferedReadable(upstream, size, logger) {
    if ((0, stream_type_check_1.isReadableStream)(upstream)) {
        return (0, createBufferedReadableStream_1.createBufferedReadableStream)(upstream, size, logger);
    }
    const downstream = new node_stream_1.Readable({ read() { } });
    let streamBufferingLoggedWarning = false;
    let bytesSeen = 0;
    const buffers = [
        "",
        new ByteArrayCollector_1.ByteArrayCollector((size) => new Uint8Array(size)),
        new ByteArrayCollector_1.ByteArrayCollector((size) => Buffer.from(new Uint8Array(size))),
    ];
    let mode = -1;
    upstream.on("data", (chunk) => {
        const chunkMode = (0, createBufferedReadableStream_1.modeOf)(chunk, true);
        if (mode !== chunkMode) {
            if (mode >= 0) {
                downstream.push((0, createBufferedReadableStream_1.flush)(buffers, mode));
            }
            mode = chunkMode;
        }
        if (mode === -1) {
            downstream.push(chunk);
            return;
        }
        const chunkSize = (0, createBufferedReadableStream_1.sizeOf)(chunk);
        bytesSeen += chunkSize;
        const bufferSize = (0, createBufferedReadableStream_1.sizeOf)(buffers[mode]);
        if (chunkSize >= size && bufferSize === 0) {
            downstream.push(chunk);
        }
        else {
            const newSize = (0, createBufferedReadableStream_1.merge)(buffers, mode, chunk);
            if (!streamBufferingLoggedWarning && bytesSeen > size * 2) {
                streamBufferingLoggedWarning = true;
                logger?.warn(`@smithy/util-stream - stream chunk size ${chunkSize} is below threshold of ${size}, automatically buffering.`);
            }
            if (newSize >= size) {
                downstream.push((0, createBufferedReadableStream_1.flush)(buffers, mode));
            }
        }
    });
    upstream.on("end", () => {
        if (mode !== -1) {
            const remainder = (0, createBufferedReadableStream_1.flush)(buffers, mode);
            if ((0, createBufferedReadableStream_1.sizeOf)(remainder) > 0) {
                downstream.push(remainder);
            }
        }
        downstream.push(null);
    });
    return downstream;
}


/***/ }),

/***/ 2558:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createBufferedReadable = void 0;
exports.createBufferedReadableStream = createBufferedReadableStream;
exports.merge = merge;
exports.flush = flush;
exports.sizeOf = sizeOf;
exports.modeOf = modeOf;
const ByteArrayCollector_1 = __nccwpck_require__(9361);
function createBufferedReadableStream(upstream, size, logger) {
    const reader = upstream.getReader();
    let streamBufferingLoggedWarning = false;
    let bytesSeen = 0;
    const buffers = ["", new ByteArrayCollector_1.ByteArrayCollector((size) => new Uint8Array(size))];
    let mode = -1;
    const pull = async (controller) => {
        const { value, done } = await reader.read();
        const chunk = value;
        if (done) {
            if (mode !== -1) {
                const remainder = flush(buffers, mode);
                if (sizeOf(remainder) > 0) {
                    controller.enqueue(remainder);
                }
            }
            controller.close();
        }
        else {
            const chunkMode = modeOf(chunk, false);
            if (mode !== chunkMode) {
                if (mode >= 0) {
                    controller.enqueue(flush(buffers, mode));
                }
                mode = chunkMode;
            }
            if (mode === -1) {
                controller.enqueue(chunk);
                return;
            }
            const chunkSize = sizeOf(chunk);
            bytesSeen += chunkSize;
            const bufferSize = sizeOf(buffers[mode]);
            if (chunkSize >= size && bufferSize === 0) {
                controller.enqueue(chunk);
            }
            else {
                const newSize = merge(buffers, mode, chunk);
                if (!streamBufferingLoggedWarning && bytesSeen > size * 2) {
                    streamBufferingLoggedWarning = true;
                    logger?.warn(`@smithy/util-stream - stream chunk size ${chunkSize} is below threshold of ${size}, automatically buffering.`);
                }
                if (newSize >= size) {
                    controller.enqueue(flush(buffers, mode));
                }
                else {
                    await pull(controller);
                }
            }
        }
    };
    return new ReadableStream({
        pull,
    });
}
exports.createBufferedReadable = createBufferedReadableStream;
function merge(buffers, mode, chunk) {
    switch (mode) {
        case 0:
            buffers[0] += chunk;
            return sizeOf(buffers[0]);
        case 1:
        case 2:
            buffers[mode].push(chunk);
            return sizeOf(buffers[mode]);
    }
}
function flush(buffers, mode) {
    switch (mode) {
        case 0:
            const s = buffers[0];
            buffers[0] = "";
            return s;
        case 1:
        case 2:
            return buffers[mode].flush();
    }
    throw new Error(`@smithy/util-stream - invalid index ${mode} given to flush()`);
}
function sizeOf(chunk) {
    return chunk?.byteLength ?? chunk?.length ?? 0;
}
function modeOf(chunk, allowBuffer = true) {
    if (allowBuffer && typeof Buffer !== "undefined" && chunk instanceof Buffer) {
        return 2;
    }
    if (chunk instanceof Uint8Array) {
        return 1;
    }
    if (typeof chunk === "string") {
        return 0;
    }
    return -1;
}


/***/ }),

/***/ 1273:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAwsChunkedEncodingStream = void 0;
const getAwsChunkedEncodingStream = (readableStream, options) => {
    const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
    const checksumRequired = base64Encoder !== undefined &&
        bodyLengthChecker !== undefined &&
        checksumAlgorithmFn !== undefined &&
        checksumLocationName !== undefined &&
        streamHasher !== undefined;
    const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : undefined;
    const reader = readableStream.getReader();
    return new ReadableStream({
        async pull(controller) {
            const { value, done } = await reader.read();
            if (done) {
                controller.enqueue(`0\r\n`);
                if (checksumRequired) {
                    const checksum = base64Encoder(await digest);
                    controller.enqueue(`${checksumLocationName}:${checksum}\r\n`);
                    controller.enqueue(`\r\n`);
                }
                controller.close();
            }
            else {
                controller.enqueue(`${(bodyLengthChecker(value) || 0).toString(16)}\r\n${value}\r\n`);
            }
        },
    });
};
exports.getAwsChunkedEncodingStream = getAwsChunkedEncodingStream;


/***/ }),

/***/ 3636:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAwsChunkedEncodingStream = getAwsChunkedEncodingStream;
const node_stream_1 = __nccwpck_require__(4492);
const getAwsChunkedEncodingStream_browser_1 = __nccwpck_require__(1273);
const stream_type_check_1 = __nccwpck_require__(7578);
function getAwsChunkedEncodingStream(stream, options) {
    const readable = stream;
    const readableStream = stream;
    if ((0, stream_type_check_1.isReadableStream)(readableStream)) {
        return (0, getAwsChunkedEncodingStream_browser_1.getAwsChunkedEncodingStream)(readableStream, options);
    }
    const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
    const checksumRequired = base64Encoder !== undefined &&
        checksumAlgorithmFn !== undefined &&
        checksumLocationName !== undefined &&
        streamHasher !== undefined;
    const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readable) : undefined;
    const awsChunkedEncodingStream = new node_stream_1.Readable({
        read: () => { },
    });
    readable.on("data", (data) => {
        const length = bodyLengthChecker(data) || 0;
        if (length === 0) {
            return;
        }
        awsChunkedEncodingStream.push(`${length.toString(16)}\r\n`);
        awsChunkedEncodingStream.push(data);
        awsChunkedEncodingStream.push("\r\n");
    });
    readable.on("end", async () => {
        awsChunkedEncodingStream.push(`0\r\n`);
        if (checksumRequired) {
            const checksum = base64Encoder(await digest);
            awsChunkedEncodingStream.push(`${checksumLocationName}:${checksum}\r\n`);
            awsChunkedEncodingStream.push(`\r\n`);
        }
        awsChunkedEncodingStream.push(null);
    });
    return awsChunkedEncodingStream;
}


/***/ }),

/***/ 6711:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.headStream = headStream;
async function headStream(stream, bytes) {
    let byteLengthCounter = 0;
    const chunks = [];
    const reader = stream.getReader();
    let isDone = false;
    while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
            chunks.push(value);
            byteLengthCounter += value?.byteLength ?? 0;
        }
        if (byteLengthCounter >= bytes) {
            break;
        }
        isDone = done;
    }
    reader.releaseLock();
    const collected = new Uint8Array(Math.min(bytes, byteLengthCounter));
    let offset = 0;
    for (const chunk of chunks) {
        if (chunk.byteLength > collected.byteLength - offset) {
            collected.set(chunk.subarray(0, collected.byteLength - offset), offset);
            break;
        }
        else {
            collected.set(chunk, offset);
        }
        offset += chunk.length;
    }
    return collected;
}


/***/ }),

/***/ 6708:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.headStream = void 0;
const stream_1 = __nccwpck_require__(2781);
const headStream_browser_1 = __nccwpck_require__(6711);
const stream_type_check_1 = __nccwpck_require__(7578);
const headStream = (stream, bytes) => {
    if ((0, stream_type_check_1.isReadableStream)(stream)) {
        return (0, headStream_browser_1.headStream)(stream, bytes);
    }
    return new Promise((resolve, reject) => {
        const collector = new Collector();
        collector.limit = bytes;
        stream.pipe(collector);
        stream.on("error", (err) => {
            collector.end();
            reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function () {
            const bytes = new Uint8Array(Buffer.concat(this.buffers));
            resolve(bytes);
        });
    });
};
exports.headStream = headStream;
class Collector extends stream_1.Writable {
    buffers = [];
    limit = Infinity;
    bytesBuffered = 0;
    _write(chunk, encoding, callback) {
        this.buffers.push(chunk);
        this.bytesBuffered += chunk.byteLength ?? 0;
        if (this.bytesBuffered >= this.limit) {
            const excess = this.bytesBuffered - this.limit;
            const tailBuffer = this.buffers[this.buffers.length - 1];
            this.buffers[this.buffers.length - 1] = tailBuffer.subarray(0, tailBuffer.byteLength - excess);
            this.emit("finish");
        }
        callback();
    }
}


/***/ }),

/***/ 6607:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var utilBase64 = __nccwpck_require__(5600);
var utilUtf8 = __nccwpck_require__(1895);
var ChecksumStream = __nccwpck_require__(6982);
var createChecksumStream = __nccwpck_require__(1927);
var createBufferedReadable = __nccwpck_require__(3259);
var getAwsChunkedEncodingStream = __nccwpck_require__(3636);
var headStream = __nccwpck_require__(6708);
var sdkStreamMixin = __nccwpck_require__(4515);
var splitStream = __nccwpck_require__(8321);
var streamTypeCheck = __nccwpck_require__(7578);

class Uint8ArrayBlobAdapter extends Uint8Array {
    static fromString(source, encoding = "utf-8") {
        if (typeof source === "string") {
            if (encoding === "base64") {
                return Uint8ArrayBlobAdapter.mutate(utilBase64.fromBase64(source));
            }
            return Uint8ArrayBlobAdapter.mutate(utilUtf8.fromUtf8(source));
        }
        throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
    }
    static mutate(source) {
        Object.setPrototypeOf(source, Uint8ArrayBlobAdapter.prototype);
        return source;
    }
    transformToString(encoding = "utf-8") {
        if (encoding === "base64") {
            return utilBase64.toBase64(this);
        }
        return utilUtf8.toUtf8(this);
    }
}

exports.isBlob = streamTypeCheck.isBlob;
exports.isReadableStream = streamTypeCheck.isReadableStream;
exports.Uint8ArrayBlobAdapter = Uint8ArrayBlobAdapter;
Object.prototype.hasOwnProperty.call(ChecksumStream, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: ChecksumStream['__proto__']
    });

Object.keys(ChecksumStream).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = ChecksumStream[k];
});
Object.prototype.hasOwnProperty.call(createChecksumStream, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: createChecksumStream['__proto__']
    });

Object.keys(createChecksumStream).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = createChecksumStream[k];
});
Object.prototype.hasOwnProperty.call(createBufferedReadable, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: createBufferedReadable['__proto__']
    });

Object.keys(createBufferedReadable).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = createBufferedReadable[k];
});
Object.prototype.hasOwnProperty.call(getAwsChunkedEncodingStream, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: getAwsChunkedEncodingStream['__proto__']
    });

Object.keys(getAwsChunkedEncodingStream).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = getAwsChunkedEncodingStream[k];
});
Object.prototype.hasOwnProperty.call(headStream, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: headStream['__proto__']
    });

Object.keys(headStream).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = headStream[k];
});
Object.prototype.hasOwnProperty.call(sdkStreamMixin, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: sdkStreamMixin['__proto__']
    });

Object.keys(sdkStreamMixin).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = sdkStreamMixin[k];
});
Object.prototype.hasOwnProperty.call(splitStream, '__proto__') &&
    !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
    Object.defineProperty(exports, '__proto__', {
        enumerable: true,
        value: splitStream['__proto__']
    });

Object.keys(splitStream).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = splitStream[k];
});


/***/ }),

/***/ 2942:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sdkStreamMixin = void 0;
const fetch_http_handler_1 = __nccwpck_require__(2687);
const util_base64_1 = __nccwpck_require__(5600);
const util_hex_encoding_1 = __nccwpck_require__(5364);
const util_utf8_1 = __nccwpck_require__(1895);
const stream_type_check_1 = __nccwpck_require__(7578);
const ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
const sdkStreamMixin = (stream) => {
    if (!isBlobInstance(stream) && !(0, stream_type_check_1.isReadableStream)(stream)) {
        const name = stream?.__proto__?.constructor?.name || stream;
        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);
    }
    let transformed = false;
    const transformToByteArray = async () => {
        if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await (0, fetch_http_handler_1.streamCollector)(stream);
    };
    const blobToWebStream = (blob) => {
        if (typeof blob.stream !== "function") {
            throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\n" +
                "If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
        }
        return blob.stream();
    };
    return Object.assign(stream, {
        transformToByteArray: transformToByteArray,
        transformToString: async (encoding) => {
            const buf = await transformToByteArray();
            if (encoding === "base64") {
                return (0, util_base64_1.toBase64)(buf);
            }
            else if (encoding === "hex") {
                return (0, util_hex_encoding_1.toHex)(buf);
            }
            else if (encoding === undefined || encoding === "utf8" || encoding === "utf-8") {
                return (0, util_utf8_1.toUtf8)(buf);
            }
            else if (typeof TextDecoder === "function") {
                return new TextDecoder(encoding).decode(buf);
            }
            else {
                throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
            }
        },
        transformToWebStream: () => {
            if (transformed) {
                throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
            }
            transformed = true;
            if (isBlobInstance(stream)) {
                return blobToWebStream(stream);
            }
            else if ((0, stream_type_check_1.isReadableStream)(stream)) {
                return stream;
            }
            else {
                throw new Error(`Cannot transform payload to web stream, got ${stream}`);
            }
        },
    });
};
exports.sdkStreamMixin = sdkStreamMixin;
const isBlobInstance = (stream) => typeof Blob === "function" && stream instanceof Blob;


/***/ }),

/***/ 4515:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sdkStreamMixin = void 0;
const node_http_handler_1 = __nccwpck_require__(258);
const util_buffer_from_1 = __nccwpck_require__(1381);
const stream_1 = __nccwpck_require__(2781);
const sdk_stream_mixin_browser_1 = __nccwpck_require__(2942);
const ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
const sdkStreamMixin = (stream) => {
    if (!(stream instanceof stream_1.Readable)) {
        try {
            return (0, sdk_stream_mixin_browser_1.sdkStreamMixin)(stream);
        }
        catch (e) {
            const name = stream?.__proto__?.constructor?.name || stream;
            throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${name}`);
        }
    }
    let transformed = false;
    const transformToByteArray = async () => {
        if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await (0, node_http_handler_1.streamCollector)(stream);
    };
    return Object.assign(stream, {
        transformToByteArray,
        transformToString: async (encoding) => {
            const buf = await transformToByteArray();
            if (encoding === undefined || Buffer.isEncoding(encoding)) {
                return (0, util_buffer_from_1.fromArrayBuffer)(buf.buffer, buf.byteOffset, buf.byteLength).toString(encoding);
            }
            else {
                const decoder = new TextDecoder(encoding);
                return decoder.decode(buf);
            }
        },
        transformToWebStream: () => {
            if (transformed) {
                throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
            }
            if (stream.readableFlowing !== null) {
                throw new Error("The stream has been consumed by other callbacks.");
            }
            if (typeof stream_1.Readable.toWeb !== "function") {
                throw new Error("Readable.toWeb() is not supported. Please ensure a polyfill is available.");
            }
            transformed = true;
            return stream_1.Readable.toWeb(stream);
        },
    });
};
exports.sdkStreamMixin = sdkStreamMixin;


/***/ }),

/***/ 4693:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.splitStream = splitStream;
async function splitStream(stream) {
    if (typeof stream.stream === "function") {
        stream = stream.stream();
    }
    const readableStream = stream;
    return readableStream.tee();
}


/***/ }),

/***/ 8321:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.splitStream = splitStream;
const stream_1 = __nccwpck_require__(2781);
const splitStream_browser_1 = __nccwpck_require__(4693);
const stream_type_check_1 = __nccwpck_require__(7578);
async function splitStream(stream) {
    if ((0, stream_type_check_1.isReadableStream)(stream) || (0, stream_type_check_1.isBlob)(stream)) {
        return (0, splitStream_browser_1.splitStream)(stream);
    }
    const stream1 = new stream_1.PassThrough();
    const stream2 = new stream_1.PassThrough();
    stream.pipe(stream1);
    stream.pipe(stream2);
    return [stream1, stream2];
}


/***/ }),

/***/ 7578:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isBlob = exports.isReadableStream = void 0;
const isReadableStream = (stream) => typeof ReadableStream === "function" &&
    (stream?.constructor?.name === ReadableStream.name || stream instanceof ReadableStream);
exports.isReadableStream = isReadableStream;
const isBlob = (blob) => {
    return typeof Blob === "function" && (blob?.constructor?.name === Blob.name || blob instanceof Blob);
};
exports.isBlob = isBlob;


/***/ }),

/***/ 4197:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


const escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
const hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;

const escapeUriPath = (uri) => uri.split("/").map(escapeUri).join("/");

exports.escapeUri = escapeUri;
exports.escapeUriPath = escapeUriPath;


/***/ }),

/***/ 1895:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var utilBufferFrom = __nccwpck_require__(1381);

const fromUtf8 = (input) => {
    const buf = utilBufferFrom.fromString(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};

const toUint8Array = (data) => {
    if (typeof data === "string") {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
};

const toUtf8 = (input) => {
    if (typeof input === "string") {
        return input;
    }
    if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
    }
    return utilBufferFrom.fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
};

exports.fromUtf8 = fromUtf8;
exports.toUint8Array = toUint8Array;
exports.toUtf8 = toUtf8;


/***/ }),

/***/ 3634:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var randomUUID = __nccwpck_require__(7448);

const decimalToHex = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
const v4 = () => {
    if (randomUUID.randomUUID) {
        return randomUUID.randomUUID();
    }
    const rnds = new Uint8Array(16);
    crypto.getRandomValues(rnds);
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    return (decimalToHex[rnds[0]] +
        decimalToHex[rnds[1]] +
        decimalToHex[rnds[2]] +
        decimalToHex[rnds[3]] +
        "-" +
        decimalToHex[rnds[4]] +
        decimalToHex[rnds[5]] +
        "-" +
        decimalToHex[rnds[6]] +
        decimalToHex[rnds[7]] +
        "-" +
        decimalToHex[rnds[8]] +
        decimalToHex[rnds[9]] +
        "-" +
        decimalToHex[rnds[10]] +
        decimalToHex[rnds[11]] +
        decimalToHex[rnds[12]] +
        decimalToHex[rnds[13]] +
        decimalToHex[rnds[14]] +
        decimalToHex[rnds[15]]);
};

exports.v4 = v4;


/***/ }),

/***/ 7448:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.randomUUID = void 0;
const tslib_1 = __nccwpck_require__(4351);
const crypto_1 = tslib_1.__importDefault(__nccwpck_require__(6113));
exports.randomUUID = crypto_1.default.randomUUID.bind(crypto_1.default);


/***/ }),

/***/ 4351:
/***/ ((module) => {

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, Symbol, Reflect, Promise, SuppressedError, Iterator */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __esDecorate;
var __runInitializers;
var __propKey;
var __setFunctionName;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __classPrivateFieldIn;
var __createBinding;
var __addDisposableResource;
var __disposeResources;
var __rewriteRelativeImportExtension;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if ( true && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __esDecorate = function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access) context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0) continue;
                if (result === null || typeof result !== "object") throw new TypeError("Object expected");
                if (_ = accept(result.get)) descriptor.get = _;
                if (_ = accept(result.set)) descriptor.set = _;
                if (_ = accept(result.init)) initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field") initializers.unshift(_);
                else descriptor[key] = _;
            }
        }
        if (target) Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    };

    __runInitializers = function (thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    };

    __propKey = function (x) {
        return typeof x === "symbol" ? x : "".concat(x);
    };

    __setFunctionName = function (f, name, prefix) {
        if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
        return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
        function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
        function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    __classPrivateFieldIn = function (state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    };

    __addDisposableResource = function (env, value, async) {
        if (value !== null && value !== void 0) {
            if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
            var dispose, inner;
            if (async) {
                if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
                if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                dispose = value[Symbol.dispose];
                if (async) inner = dispose;
            }
            if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
            if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
            env.stack.push({ value: value, dispose: dispose, async: async });
        }
        else if (async) {
            env.stack.push({ async: true });
        }
        return value;
    };

    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    __disposeResources = function (env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while (r = env.stack.pop()) {
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                    }
                    else s |= 1;
                }
                catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };

    __rewriteRelativeImportExtension = function (path, preserveJsx) {
        if (typeof path === "string" && /^\.\.?\//.test(path)) {
            return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
                return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
            });
        }
        return path;
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__esDecorate", __esDecorate);
    exporter("__runInitializers", __runInitializers);
    exporter("__propKey", __propKey);
    exporter("__setFunctionName", __setFunctionName);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
    exporter("__addDisposableResource", __addDisposableResource);
    exporter("__disposeResources", __disposeResources);
    exporter("__rewriteRelativeImportExtension", __rewriteRelativeImportExtension);
});

0 && (0);


/***/ }),

/***/ 4294:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(4219);


/***/ }),

/***/ 4219:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var net = __nccwpck_require__(1808);
var tls = __nccwpck_require__(4404);
var http = __nccwpck_require__(3685);
var https = __nccwpck_require__(5687);
var events = __nccwpck_require__(2361);
var assert = __nccwpck_require__(9491);
var util = __nccwpck_require__(3837);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 9491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 4300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 2081:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 2361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 3292:
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ 3685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 1808:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 2761:
/***/ ((module) => {

"use strict";
module.exports = require("node:async_hooks");

/***/ }),

/***/ 7718:
/***/ ((module) => {

"use strict";
module.exports = require("node:child_process");

/***/ }),

/***/ 6005:
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ 7561:
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ 3977:
/***/ ((module) => {

"use strict";
module.exports = require("node:fs/promises");

/***/ }),

/***/ 8849:
/***/ ((module) => {

"use strict";
module.exports = require("node:http");

/***/ }),

/***/ 2725:
/***/ ((module) => {

"use strict";
module.exports = require("node:http2");

/***/ }),

/***/ 2286:
/***/ ((module) => {

"use strict";
module.exports = require("node:https");

/***/ }),

/***/ 612:
/***/ ((module) => {

"use strict";
module.exports = require("node:os");

/***/ }),

/***/ 9411:
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ 7742:
/***/ ((module) => {

"use strict";
module.exports = require("node:process");

/***/ }),

/***/ 4492:
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ 7261:
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ 2037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 2781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 1576:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 9512:
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 4404:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 4577:
/***/ ((module) => {

(()=>{"use strict";var t={d:(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{XMLBuilder:()=>Bt,XMLParser:()=>Tt,XMLValidator:()=>Ut});const n=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",i=new RegExp("^["+n+"]["+n+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");function s(t,e){const n=[];let i=e.exec(t);for(;i;){const s=[];s.startIndex=e.lastIndex-i[0].length;const r=i.length;for(let t=0;t<r;t++)s.push(i[t]);n.push(s),i=e.exec(t)}return n}const r=function(t){return!(null==i.exec(t))},o=["hasOwnProperty","toString","valueOf","__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__"],a=["__proto__","constructor","prototype"],h={allowBooleanAttributes:!1,unpairedTags:[]};function l(t,e){e=Object.assign({},h,e);const n=[];let i=!1,s=!1;"\ufeff"===t[0]&&(t=t.substr(1));for(let r=0;r<t.length;r++)if("<"===t[r]&&"?"===t[r+1]){if(r+=2,r=p(t,r),r.err)return r}else{if("<"!==t[r]){if(u(t[r]))continue;return b("InvalidChar","char '"+t[r]+"' is not expected.",w(t,r))}{let o=r;if(r++,"!"===t[r]){r=c(t,r);continue}{let a=!1;"/"===t[r]&&(a=!0,r++);let h="";for(;r<t.length&&">"!==t[r]&&" "!==t[r]&&"\t"!==t[r]&&"\n"!==t[r]&&"\r"!==t[r];r++)h+=t[r];if(h=h.trim(),"/"===h[h.length-1]&&(h=h.substring(0,h.length-1),r--),!E(h)){let e;return e=0===h.trim().length?"Invalid space after '<'.":"Tag '"+h+"' is an invalid name.",b("InvalidTag",e,w(t,r))}const l=g(t,r);if(!1===l)return b("InvalidAttr","Attributes for '"+h+"' have open quote.",w(t,r));let d=l.value;if(r=l.index,"/"===d[d.length-1]){const n=r-d.length;d=d.substring(0,d.length-1);const s=x(d,e);if(!0!==s)return b(s.err.code,s.err.msg,w(t,n+s.err.line));i=!0}else if(a){if(!l.tagClosed)return b("InvalidTag","Closing tag '"+h+"' doesn't have proper closing.",w(t,r));if(d.trim().length>0)return b("InvalidTag","Closing tag '"+h+"' can't have attributes or invalid starting.",w(t,o));if(0===n.length)return b("InvalidTag","Closing tag '"+h+"' has not been opened.",w(t,o));{const e=n.pop();if(h!==e.tagName){let n=w(t,e.tagStartPos);return b("InvalidTag","Expected closing tag '"+e.tagName+"' (opened in line "+n.line+", col "+n.col+") instead of closing tag '"+h+"'.",w(t,o))}0==n.length&&(s=!0)}}else{const a=x(d,e);if(!0!==a)return b(a.err.code,a.err.msg,w(t,r-d.length+a.err.line));if(!0===s)return b("InvalidXml","Multiple possible root nodes found.",w(t,r));-1!==e.unpairedTags.indexOf(h)||n.push({tagName:h,tagStartPos:o}),i=!0}for(r++;r<t.length;r++)if("<"===t[r]){if("!"===t[r+1]){r++,r=c(t,r);continue}if("?"!==t[r+1])break;if(r=p(t,++r),r.err)return r}else if("&"===t[r]){const e=N(t,r);if(-1==e)return b("InvalidChar","char '&' is not expected.",w(t,r));r=e}else if(!0===s&&!u(t[r]))return b("InvalidXml","Extra text at the end",w(t,r));"<"===t[r]&&r--}}}return i?1==n.length?b("InvalidTag","Unclosed tag '"+n[0].tagName+"'.",w(t,n[0].tagStartPos)):!(n.length>0)||b("InvalidXml","Invalid '"+JSON.stringify(n.map(t=>t.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1}):b("InvalidXml","Start tag expected.",1)}function u(t){return" "===t||"\t"===t||"\n"===t||"\r"===t}function p(t,e){const n=e;for(;e<t.length;e++)if("?"==t[e]||" "==t[e]){const i=t.substr(n,e-n);if(e>5&&"xml"===i)return b("InvalidXml","XML declaration allowed only at the start of the document.",w(t,e));if("?"==t[e]&&">"==t[e+1]){e++;break}continue}return e}function c(t,e){if(t.length>e+5&&"-"===t[e+1]&&"-"===t[e+2]){for(e+=3;e<t.length;e++)if("-"===t[e]&&"-"===t[e+1]&&">"===t[e+2]){e+=2;break}}else if(t.length>e+8&&"D"===t[e+1]&&"O"===t[e+2]&&"C"===t[e+3]&&"T"===t[e+4]&&"Y"===t[e+5]&&"P"===t[e+6]&&"E"===t[e+7]){let n=1;for(e+=8;e<t.length;e++)if("<"===t[e])n++;else if(">"===t[e]&&(n--,0===n))break}else if(t.length>e+9&&"["===t[e+1]&&"C"===t[e+2]&&"D"===t[e+3]&&"A"===t[e+4]&&"T"===t[e+5]&&"A"===t[e+6]&&"["===t[e+7])for(e+=8;e<t.length;e++)if("]"===t[e]&&"]"===t[e+1]&&">"===t[e+2]){e+=2;break}return e}const d='"',f="'";function g(t,e){let n="",i="",s=!1;for(;e<t.length;e++){if(t[e]===d||t[e]===f)""===i?i=t[e]:i!==t[e]||(i="");else if(">"===t[e]&&""===i){s=!0;break}n+=t[e]}return""===i&&{value:n,index:e,tagClosed:s}}const m=new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");function x(t,e){const n=s(t,m),i={};for(let t=0;t<n.length;t++){if(0===n[t][1].length)return b("InvalidAttr","Attribute '"+n[t][2]+"' has no space in starting.",v(n[t]));if(void 0!==n[t][3]&&void 0===n[t][4])return b("InvalidAttr","Attribute '"+n[t][2]+"' is without value.",v(n[t]));if(void 0===n[t][3]&&!e.allowBooleanAttributes)return b("InvalidAttr","boolean attribute '"+n[t][2]+"' is not allowed.",v(n[t]));const s=n[t][2];if(!y(s))return b("InvalidAttr","Attribute '"+s+"' is an invalid name.",v(n[t]));if(Object.prototype.hasOwnProperty.call(i,s))return b("InvalidAttr","Attribute '"+s+"' is repeated.",v(n[t]));i[s]=1}return!0}function N(t,e){if(";"===t[++e])return-1;if("#"===t[e])return function(t,e){let n=/\d/;for("x"===t[e]&&(e++,n=/[\da-fA-F]/);e<t.length;e++){if(";"===t[e])return e;if(!t[e].match(n))break}return-1}(t,++e);let n=0;for(;e<t.length;e++,n++)if(!(t[e].match(/\w/)&&n<20)){if(";"===t[e])break;return-1}return e}function b(t,e,n){return{err:{code:t,msg:e,line:n.line||n,col:n.col}}}function y(t){return r(t)}function E(t){return r(t)}function w(t,e){const n=t.substring(0,e).split(/\r?\n/);return{line:n.length,col:n[n.length-1].length+1}}function v(t){return t.startIndex+t[1].length}const S=t=>o.includes(t)?"__"+t:t,_={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,entityDecoder:null,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(t,e,n){return t},captureMetaData:!1,maxNestedTags:100,strictReservedNames:!0,jPath:!0,onDangerousProperty:S};function A(t,e){if("string"!=typeof t)return;const n=t.toLowerCase();if(o.some(t=>n===t.toLowerCase()))throw new Error(`[SECURITY] Invalid ${e}: "${t}" is a reserved JavaScript keyword that could cause prototype pollution`);if(a.some(t=>n===t.toLowerCase()))throw new Error(`[SECURITY] Invalid ${e}: "${t}" is a reserved JavaScript keyword that could cause prototype pollution`)}function T(t,e){return"boolean"==typeof t?{enabled:t,maxEntitySize:1e4,maxExpansionDepth:1e4,maxTotalExpansions:1/0,maxExpandedLength:1e5,maxEntityCount:1e3,allowedTags:null,tagFilter:null,appliesTo:"all"}:"object"==typeof t&&null!==t?{enabled:!1!==t.enabled,maxEntitySize:Math.max(1,t.maxEntitySize??1e4),maxExpansionDepth:Math.max(1,t.maxExpansionDepth??1e4),maxTotalExpansions:Math.max(1,t.maxTotalExpansions??1/0),maxExpandedLength:Math.max(1,t.maxExpandedLength??1e5),maxEntityCount:Math.max(1,t.maxEntityCount??1e3),allowedTags:t.allowedTags??null,tagFilter:t.tagFilter??null,appliesTo:t.appliesTo??"all"}:T(!0)}const C=function(t){const e=Object.assign({},_,t),n=[{value:e.attributeNamePrefix,name:"attributeNamePrefix"},{value:e.attributesGroupName,name:"attributesGroupName"},{value:e.textNodeName,name:"textNodeName"},{value:e.cdataPropName,name:"cdataPropName"},{value:e.commentPropName,name:"commentPropName"}];for(const{value:t,name:e}of n)t&&A(t,e);return null===e.onDangerousProperty&&(e.onDangerousProperty=S),e.processEntities=T(e.processEntities,e.htmlEntities),e.unpairedTagsSet=new Set(e.unpairedTags),e.stopNodes&&Array.isArray(e.stopNodes)&&(e.stopNodes=e.stopNodes.map(t=>"string"==typeof t&&t.startsWith("*.")?".."+t.substring(2):t)),e};let P;P="function"!=typeof Symbol?"@@xmlMetadata":Symbol("XML Node Metadata");class O{constructor(t){this.tagname=t,this.child=[],this[":@"]=Object.create(null)}add(t,e){"__proto__"===t&&(t="#__proto__"),this.child.push({[t]:e})}addChild(t,e){"__proto__"===t.tagname&&(t.tagname="#__proto__"),t[":@"]&&Object.keys(t[":@"]).length>0?this.child.push({[t.tagname]:t.child,":@":t[":@"]}):this.child.push({[t.tagname]:t.child}),void 0!==e&&(this.child[this.child.length-1][P]={startIndex:e})}static getMetaDataSymbol(){return P}}class ${constructor(t){this.suppressValidationErr=!t,this.options=t}readDocType(t,e){const n=Object.create(null);let i=0;if("O"!==t[e+3]||"C"!==t[e+4]||"T"!==t[e+5]||"Y"!==t[e+6]||"P"!==t[e+7]||"E"!==t[e+8])throw new Error("Invalid Tag instead of DOCTYPE");{e+=9;let s=1,r=!1,o=!1,a="";for(;e<t.length;e++)if("<"!==t[e]||o)if(">"===t[e]){if(o?"-"===t[e-1]&&"-"===t[e-2]&&(o=!1,s--):s--,0===s)break}else"["===t[e]?r=!0:a+=t[e];else{if(r&&D(t,"!ENTITY",e)){let s,r;if(e+=7,[s,r,e]=this.readEntityExp(t,e+1,this.suppressValidationErr),-1===r.indexOf("&")){if(!1!==this.options.enabled&&null!=this.options.maxEntityCount&&i>=this.options.maxEntityCount)throw new Error(`Entity count (${i+1}) exceeds maximum allowed (${this.options.maxEntityCount})`);n[s]=r,i++}}else if(r&&D(t,"!ELEMENT",e)){e+=8;const{index:n}=this.readElementExp(t,e+1);e=n}else if(r&&D(t,"!ATTLIST",e))e+=8;else if(r&&D(t,"!NOTATION",e)){e+=9;const{index:n}=this.readNotationExp(t,e+1,this.suppressValidationErr);e=n}else{if(!D(t,"!--",e))throw new Error("Invalid DOCTYPE");o=!0}s++,a=""}if(0!==s)throw new Error("Unclosed DOCTYPE")}return{entities:n,i:e}}readEntityExp(t,e){const n=e=I(t,e);for(;e<t.length&&!/\s/.test(t[e])&&'"'!==t[e]&&"'"!==t[e];)e++;let i=t.substring(n,e);if(M(i),e=I(t,e),!this.suppressValidationErr){if("SYSTEM"===t.substring(e,e+6).toUpperCase())throw new Error("External entities are not supported");if("%"===t[e])throw new Error("Parameter entities are not supported")}let s="";if([e,s]=this.readIdentifierVal(t,e,"entity"),!1!==this.options.enabled&&null!=this.options.maxEntitySize&&s.length>this.options.maxEntitySize)throw new Error(`Entity "${i}" size (${s.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`);return[i,s,--e]}readNotationExp(t,e){const n=e=I(t,e);for(;e<t.length&&!/\s/.test(t[e]);)e++;let i=t.substring(n,e);!this.suppressValidationErr&&M(i),e=I(t,e);const s=t.substring(e,e+6).toUpperCase();if(!this.suppressValidationErr&&"SYSTEM"!==s&&"PUBLIC"!==s)throw new Error(`Expected SYSTEM or PUBLIC, found "${s}"`);e+=s.length,e=I(t,e);let r=null,o=null;if("PUBLIC"===s)[e,r]=this.readIdentifierVal(t,e,"publicIdentifier"),'"'!==t[e=I(t,e)]&&"'"!==t[e]||([e,o]=this.readIdentifierVal(t,e,"systemIdentifier"));else if("SYSTEM"===s&&([e,o]=this.readIdentifierVal(t,e,"systemIdentifier"),!this.suppressValidationErr&&!o))throw new Error("Missing mandatory system identifier for SYSTEM notation");return{notationName:i,publicIdentifier:r,systemIdentifier:o,index:--e}}readIdentifierVal(t,e,n){let i="";const s=t[e];if('"'!==s&&"'"!==s)throw new Error(`Expected quoted string, found "${s}"`);const r=++e;for(;e<t.length&&t[e]!==s;)e++;if(i=t.substring(r,e),t[e]!==s)throw new Error(`Unterminated ${n} value`);return[++e,i]}readElementExp(t,e){const n=e=I(t,e);for(;e<t.length&&!/\s/.test(t[e]);)e++;let i=t.substring(n,e);if(!this.suppressValidationErr&&!r(i))throw new Error(`Invalid element name: "${i}"`);let s="";if("E"===t[e=I(t,e)]&&D(t,"MPTY",e))e+=4;else if("A"===t[e]&&D(t,"NY",e))e+=2;else if("("===t[e]){const n=++e;for(;e<t.length&&")"!==t[e];)e++;if(s=t.substring(n,e),")"!==t[e])throw new Error("Unterminated content model")}else if(!this.suppressValidationErr)throw new Error(`Invalid Element Expression, found "${t[e]}"`);return{elementName:i,contentModel:s.trim(),index:e}}readAttlistExp(t,e){let n=e=I(t,e);for(;e<t.length&&!/\s/.test(t[e]);)e++;let i=t.substring(n,e);for(M(i),n=e=I(t,e);e<t.length&&!/\s/.test(t[e]);)e++;let s=t.substring(n,e);if(!M(s))throw new Error(`Invalid attribute name: "${s}"`);e=I(t,e);let r="";if("NOTATION"===t.substring(e,e+8).toUpperCase()){if(r="NOTATION","("!==t[e=I(t,e+=8)])throw new Error(`Expected '(', found "${t[e]}"`);e++;let n=[];for(;e<t.length&&")"!==t[e];){const i=e;for(;e<t.length&&"|"!==t[e]&&")"!==t[e];)e++;let s=t.substring(i,e);if(s=s.trim(),!M(s))throw new Error(`Invalid notation name: "${s}"`);n.push(s),"|"===t[e]&&(e++,e=I(t,e))}if(")"!==t[e])throw new Error("Unterminated list of notations");e++,r+=" ("+n.join("|")+")"}else{const n=e;for(;e<t.length&&!/\s/.test(t[e]);)e++;r+=t.substring(n,e);const i=["CDATA","ID","IDREF","IDREFS","ENTITY","ENTITIES","NMTOKEN","NMTOKENS"];if(!this.suppressValidationErr&&!i.includes(r.toUpperCase()))throw new Error(`Invalid attribute type: "${r}"`)}e=I(t,e);let o="";return"#REQUIRED"===t.substring(e,e+8).toUpperCase()?(o="#REQUIRED",e+=8):"#IMPLIED"===t.substring(e,e+7).toUpperCase()?(o="#IMPLIED",e+=7):[e,o]=this.readIdentifierVal(t,e,"ATTLIST"),{elementName:i,attributeName:s,attributeType:r,defaultValue:o,index:e}}}const I=(t,e)=>{for(;e<t.length&&/\s/.test(t[e]);)e++;return e};function D(t,e,n){for(let i=0;i<e.length;i++)if(e[i]!==t[n+i+1])return!1;return!0}function M(t){if(r(t))return t;throw new Error(`Invalid entity name ${t}`)}const j=/^[-+]?0x[a-fA-F0-9]+$/,V=/^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/,L={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0,infinity:"original"};const k=/^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;class F{constructor(t){this._matcher=t}get separator(){return this._matcher.separator}getCurrentTag(){const t=this._matcher.path;return t.length>0?t[t.length-1].tag:void 0}getCurrentNamespace(){const t=this._matcher.path;return t.length>0?t[t.length-1].namespace:void 0}getAttrValue(t){const e=this._matcher.path;if(0!==e.length)return e[e.length-1].values?.[t]}hasAttr(t){const e=this._matcher.path;if(0===e.length)return!1;const n=e[e.length-1];return void 0!==n.values&&t in n.values}getPosition(){const t=this._matcher.path;return 0===t.length?-1:t[t.length-1].position??0}getCounter(){const t=this._matcher.path;return 0===t.length?-1:t[t.length-1].counter??0}getIndex(){return this.getPosition()}getDepth(){return this._matcher.path.length}toString(t,e=!0){return this._matcher.toString(t,e)}toArray(){return this._matcher.path.map(t=>t.tag)}matches(t){return this._matcher.matches(t)}matchesAny(t){return t.matchesAny(this._matcher)}}class R{constructor(t={}){this.separator=t.separator||".",this.path=[],this.siblingStacks=[],this._pathStringCache=null,this._view=new F(this)}push(t,e=null,n=null){this._pathStringCache=null,this.path.length>0&&(this.path[this.path.length-1].values=void 0);const i=this.path.length;this.siblingStacks[i]||(this.siblingStacks[i]=new Map);const s=this.siblingStacks[i],r=n?`${n}:${t}`:t,o=s.get(r)||0;let a=0;for(const t of s.values())a+=t;s.set(r,o+1);const h={tag:t,position:a,counter:o};null!=n&&(h.namespace=n),null!=e&&(h.values=e),this.path.push(h)}pop(){if(0===this.path.length)return;this._pathStringCache=null;const t=this.path.pop();return this.siblingStacks.length>this.path.length+1&&(this.siblingStacks.length=this.path.length+1),t}updateCurrent(t){if(this.path.length>0){const e=this.path[this.path.length-1];null!=t&&(e.values=t)}}getCurrentTag(){return this.path.length>0?this.path[this.path.length-1].tag:void 0}getCurrentNamespace(){return this.path.length>0?this.path[this.path.length-1].namespace:void 0}getAttrValue(t){if(0!==this.path.length)return this.path[this.path.length-1].values?.[t]}hasAttr(t){if(0===this.path.length)return!1;const e=this.path[this.path.length-1];return void 0!==e.values&&t in e.values}getPosition(){return 0===this.path.length?-1:this.path[this.path.length-1].position??0}getCounter(){return 0===this.path.length?-1:this.path[this.path.length-1].counter??0}getIndex(){return this.getPosition()}getDepth(){return this.path.length}toString(t,e=!0){const n=t||this.separator;if(n===this.separator&&!0===e){if(null!==this._pathStringCache)return this._pathStringCache;const t=this.path.map(t=>t.namespace?`${t.namespace}:${t.tag}`:t.tag).join(n);return this._pathStringCache=t,t}return this.path.map(t=>e&&t.namespace?`${t.namespace}:${t.tag}`:t.tag).join(n)}toArray(){return this.path.map(t=>t.tag)}reset(){this._pathStringCache=null,this.path=[],this.siblingStacks=[]}matches(t){const e=t.segments;return 0!==e.length&&(t.hasDeepWildcard()?this._matchWithDeepWildcard(e):this._matchSimple(e))}_matchSimple(t){if(this.path.length!==t.length)return!1;for(let e=0;e<t.length;e++)if(!this._matchSegment(t[e],this.path[e],e===this.path.length-1))return!1;return!0}_matchWithDeepWildcard(t){let e=this.path.length-1,n=t.length-1;for(;n>=0&&e>=0;){const i=t[n];if("deep-wildcard"===i.type){if(n--,n<0)return!0;const i=t[n];let s=!1;for(let t=e;t>=0;t--)if(this._matchSegment(i,this.path[t],t===this.path.length-1)){e=t-1,n--,s=!0;break}if(!s)return!1}else{if(!this._matchSegment(i,this.path[e],e===this.path.length-1))return!1;e--,n--}}return n<0}_matchSegment(t,e,n){if("*"!==t.tag&&t.tag!==e.tag)return!1;if(void 0!==t.namespace&&"*"!==t.namespace&&t.namespace!==e.namespace)return!1;if(void 0!==t.attrName){if(!n)return!1;if(!e.values||!(t.attrName in e.values))return!1;if(void 0!==t.attrValue&&String(e.values[t.attrName])!==String(t.attrValue))return!1}if(void 0!==t.position){if(!n)return!1;const i=e.counter??0;if("first"===t.position&&0!==i)return!1;if("odd"===t.position&&i%2!=1)return!1;if("even"===t.position&&i%2!=0)return!1;if("nth"===t.position&&i!==t.positionValue)return!1}return!0}matchesAny(t){return t.matchesAny(this)}snapshot(){return{path:this.path.map(t=>({...t})),siblingStacks:this.siblingStacks.map(t=>new Map(t))}}restore(t){this._pathStringCache=null,this.path=t.path.map(t=>({...t})),this.siblingStacks=t.siblingStacks.map(t=>new Map(t))}readOnly(){return this._view}}class G{constructor(t,e={},n){this.pattern=t,this.separator=e.separator||".",this.segments=this._parse(t),this.data=n,this._hasDeepWildcard=this.segments.some(t=>"deep-wildcard"===t.type),this._hasAttributeCondition=this.segments.some(t=>void 0!==t.attrName),this._hasPositionSelector=this.segments.some(t=>void 0!==t.position)}_parse(t){const e=[];let n=0,i="";for(;n<t.length;)t[n]===this.separator?n+1<t.length&&t[n+1]===this.separator?(i.trim()&&(e.push(this._parseSegment(i.trim())),i=""),e.push({type:"deep-wildcard"}),n+=2):(i.trim()&&e.push(this._parseSegment(i.trim())),i="",n++):(i+=t[n],n++);return i.trim()&&e.push(this._parseSegment(i.trim())),e}_parseSegment(t){const e={type:"tag"};let n=null,i=t;const s=t.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);if(s&&(i=s[1]+s[3],s[2])){const t=s[2].slice(1,-1);t&&(n=t)}let r,o,a=i;if(i.includes("::")){const e=i.indexOf("::");if(r=i.substring(0,e).trim(),a=i.substring(e+2).trim(),!r)throw new Error(`Invalid namespace in pattern: ${t}`)}let h=null;if(a.includes(":")){const t=a.lastIndexOf(":"),e=a.substring(0,t).trim(),n=a.substring(t+1).trim();["first","last","odd","even"].includes(n)||/^nth\(\d+\)$/.test(n)?(o=e,h=n):o=a}else o=a;if(!o)throw new Error(`Invalid segment pattern: ${t}`);if(e.tag=o,r&&(e.namespace=r),n)if(n.includes("=")){const t=n.indexOf("=");e.attrName=n.substring(0,t).trim(),e.attrValue=n.substring(t+1).trim()}else e.attrName=n.trim();if(h){const t=h.match(/^nth\((\d+)\)$/);t?(e.position="nth",e.positionValue=parseInt(t[1],10)):e.position=h}return e}get length(){return this.segments.length}hasDeepWildcard(){return this._hasDeepWildcard}hasAttributeCondition(){return this._hasAttributeCondition}hasPositionSelector(){return this._hasPositionSelector}toString(){return this.pattern}}class B{constructor(){this._byDepthAndTag=new Map,this._wildcardByDepth=new Map,this._deepWildcards=[],this._patterns=new Set,this._sealed=!1}add(t){if(this._sealed)throw new TypeError("ExpressionSet is sealed. Create a new ExpressionSet to add more expressions.");if(this._patterns.has(t.pattern))return this;if(this._patterns.add(t.pattern),t.hasDeepWildcard())return this._deepWildcards.push(t),this;const e=t.length,n=t.segments[t.segments.length-1],i=n?.tag;if(i&&"*"!==i){const n=`${e}:${i}`;this._byDepthAndTag.has(n)||this._byDepthAndTag.set(n,[]),this._byDepthAndTag.get(n).push(t)}else this._wildcardByDepth.has(e)||this._wildcardByDepth.set(e,[]),this._wildcardByDepth.get(e).push(t);return this}addAll(t){for(const e of t)this.add(e);return this}has(t){return this._patterns.has(t.pattern)}get size(){return this._patterns.size}seal(){return this._sealed=!0,this}get isSealed(){return this._sealed}matchesAny(t){return null!==this.findMatch(t)}findMatch(t){const e=t.getDepth(),n=`${e}:${t.getCurrentTag()}`,i=this._byDepthAndTag.get(n);if(i)for(let e=0;e<i.length;e++)if(t.matches(i[e]))return i[e];const s=this._wildcardByDepth.get(e);if(s)for(let e=0;e<s.length;e++)if(t.matches(s[e]))return s[e];for(let e=0;e<this._deepWildcards.length;e++)if(t.matches(this._deepWildcards[e]))return this._deepWildcards[e];return null}}const U={cent:"¢",pound:"£",curren:"¤",yen:"¥",euro:"€",dollar:"$",euro:"€",fnof:"ƒ",inr:"₹",af:"؋",birr:"ብር",peso:"₱",rub:"₽",won:"₩",yuan:"¥",cedil:"¸"},W={amp:"&",apos:"'",gt:">",lt:"<",quot:'"'},X={nbsp:" ",copy:"©",reg:"®",trade:"™",mdash:"—",ndash:"–",hellip:"…",laquo:"«",raquo:"»",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",para:"¶",sect:"§",deg:"°",frac12:"½",frac14:"¼",frac34:"¾"},Y=new Set("!?\\\\/[]$%{}^&*()<>|+");function z(t){if("#"===t[0])throw new Error(`[EntityReplacer] Invalid character '#' in entity name: "${t}"`);for(const e of t)if(Y.has(e))throw new Error(`[EntityReplacer] Invalid character '${e}' in entity name: "${t}"`);return t}function q(...t){const e=Object.create(null);for(const n of t)if(n)for(const t of Object.keys(n)){const i=n[t];if("string"==typeof i)e[t]=i;else if(i&&"object"==typeof i&&void 0!==i.val){const n=i.val;"string"==typeof n&&(e[t]=n)}}return e}const Z="external",J="base",K="all",Q=Object.freeze({allow:0,leave:1,remove:2,throw:3}),H=new Set([9,10,13]);class tt{constructor(t={}){var e;this._limit=t.limit||{},this._maxTotalExpansions=this._limit.maxTotalExpansions||0,this._maxExpandedLength=this._limit.maxExpandedLength||0,this._postCheck="function"==typeof t.postCheck?t.postCheck:t=>t,this._limitTiers=(e=this._limit.applyLimitsTo??Z)&&e!==Z?e===K?new Set([K]):e===J?new Set([J]):Array.isArray(e)?new Set(e):new Set([Z]):new Set([Z]),this._numericAllowed=t.numericAllowed??!0,this._baseMap=q(W,t.namedEntities||null),this._externalMap=Object.create(null),this._inputMap=Object.create(null),this._totalExpansions=0,this._expandedLength=0,this._removeSet=new Set(t.remove&&Array.isArray(t.remove)?t.remove:[]),this._leaveSet=new Set(t.leave&&Array.isArray(t.leave)?t.leave:[]);const n=function(t){if(!t)return{xmlVersion:1,onLevel:Q.allow,nullLevel:Q.remove};const e=1.1===t.xmlVersion?1.1:1,n=Q[t.onNCR]??Q.allow,i=Q[t.nullNCR]??Q.remove;return{xmlVersion:e,onLevel:n,nullLevel:Math.max(i,Q.remove)}}(t.ncr);this._ncrXmlVersion=n.xmlVersion,this._ncrOnLevel=n.onLevel,this._ncrNullLevel=n.nullLevel}setExternalEntities(t){if(t)for(const e of Object.keys(t))z(e);this._externalMap=q(t)}addExternalEntity(t,e){z(t),"string"==typeof e&&-1===e.indexOf("&")&&(this._externalMap[t]=e)}addInputEntities(t){this._totalExpansions=0,this._expandedLength=0,this._inputMap=q(t)}reset(){return this._inputMap=Object.create(null),this._totalExpansions=0,this._expandedLength=0,this}setXmlVersion(t){this._ncrXmlVersion=1.1===t?1.1:1}decode(t){if("string"!=typeof t||0===t.length)return t;const e=t,n=[],i=t.length;let s=0,r=0;const o=this._maxTotalExpansions>0,a=this._maxExpandedLength>0,h=o||a;for(;r<i;){if(38!==t.charCodeAt(r)){r++;continue}let e=r+1;for(;e<i&&59!==t.charCodeAt(e)&&e-r<=32;)e++;if(e>=i||59!==t.charCodeAt(e)){r++;continue}const l=t.slice(r+1,e);if(0===l.length){r++;continue}let u,p;if(this._removeSet.has(l))u="",void 0===p&&(p=Z);else{if(this._leaveSet.has(l)){r++;continue}if(35===l.charCodeAt(0)){const t=this._resolveNCR(l);if(void 0===t){r++;continue}u=t,p=J}else{const t=this._resolveName(l);u=t?.value,p=t?.tier}}if(void 0!==u){if(r>s&&n.push(t.slice(s,r)),n.push(u),s=e+1,r=s,h&&this._tierCounts(p)){if(o&&(this._totalExpansions++,this._totalExpansions>this._maxTotalExpansions))throw new Error(`[EntityReplacer] Entity expansion count limit exceeded: ${this._totalExpansions} > ${this._maxTotalExpansions}`);if(a){const t=u.length-(l.length+2);if(t>0&&(this._expandedLength+=t,this._expandedLength>this._maxExpandedLength))throw new Error(`[EntityReplacer] Expanded content length limit exceeded: ${this._expandedLength} > ${this._maxExpandedLength}`)}}}else r++}s<i&&n.push(t.slice(s));const l=0===n.length?t:n.join("");return this._postCheck(l,e)}_tierCounts(t){return!!this._limitTiers.has(K)||this._limitTiers.has(t)}_resolveName(t){return t in this._inputMap?{value:this._inputMap[t],tier:Z}:t in this._externalMap?{value:this._externalMap[t],tier:Z}:t in this._baseMap?{value:this._baseMap[t],tier:J}:void 0}_classifyNCR(t){return 0===t?this._ncrNullLevel:t>=55296&&t<=57343||1===this._ncrXmlVersion&&t>=1&&t<=31&&!H.has(t)?Q.remove:-1}_applyNCRAction(t,e,n){switch(t){case Q.allow:return String.fromCodePoint(n);case Q.remove:return"";case Q.leave:return;case Q.throw:throw new Error(`[EntityDecoder] Prohibited numeric character reference &${e}; (U+${n.toString(16).toUpperCase().padStart(4,"0")})`);default:return String.fromCodePoint(n)}}_resolveNCR(t){const e=t.charCodeAt(1);let n;if(n=120===e||88===e?parseInt(t.slice(2),16):parseInt(t.slice(1),10),Number.isNaN(n)||n<0||n>1114111)return;const i=this._classifyNCR(n);if(!this._numericAllowed&&i<Q.remove)return;const s=-1===i?this._ncrOnLevel:Math.max(this._ncrOnLevel,i);return this._applyNCRAction(s,t,n)}}function et(t,e){if(!t)return{};const n=e.attributesGroupName?t[e.attributesGroupName]:t;if(!n)return{};const i={};for(const t in n)t.startsWith(e.attributeNamePrefix)?i[t.substring(e.attributeNamePrefix.length)]=n[t]:i[t]=n[t];return i}function nt(t){if(!t||"string"!=typeof t)return;const e=t.indexOf(":");if(-1!==e&&e>0){const n=t.substring(0,e);if("xmlns"!==n)return n}}class it{constructor(t,e){var n;this.options=t,this.currentNode=null,this.tagsNodeStack=[],this.parseXml=ht,this.parseTextData=st,this.resolveNameSpace=rt,this.buildAttributesMap=at,this.isItStopNode=ct,this.replaceEntitiesValue=ut,this.readStopNodeData=mt,this.saveTextToParentTag=pt,this.addChild=lt,this.ignoreAttributesFn="function"==typeof(n=this.options.ignoreAttributes)?n:Array.isArray(n)?t=>{for(const e of n){if("string"==typeof e&&t===e)return!0;if(e instanceof RegExp&&e.test(t))return!0}}:()=>!1,this.entityExpansionCount=0,this.currentExpandedLength=0;let i={...W};this.options.entityDecoder?this.entityDecoder=this.options.entityDecoder:("object"==typeof this.options.htmlEntities?i=this.options.htmlEntities:!0===this.options.htmlEntities&&(i={...X,...U}),this.entityDecoder=new tt({namedEntities:{...i,...e},numericAllowed:this.options.htmlEntities,limit:{maxTotalExpansions:this.options.processEntities.maxTotalExpansions,maxExpandedLength:this.options.processEntities.maxExpandedLength,applyLimitsTo:this.options.processEntities.appliesTo}})),this.matcher=new R,this.readonlyMatcher=this.matcher.readOnly(),this.isCurrentNodeStopNode=!1,this.stopNodeExpressionsSet=new B;const s=this.options.stopNodes;if(s&&s.length>0){for(let t=0;t<s.length;t++){const e=s[t];"string"==typeof e?this.stopNodeExpressionsSet.add(new G(e)):e instanceof G&&this.stopNodeExpressionsSet.add(e)}this.stopNodeExpressionsSet.seal()}}}function st(t,e,n,i,s,r,o){const a=this.options;if(void 0!==t&&(a.trimValues&&!i&&(t=t.trim()),t.length>0)){o||(t=this.replaceEntitiesValue(t,e,n));const i=a.jPath?n.toString():n,h=a.tagValueProcessor(e,t,i,s,r);return null==h?t:typeof h!=typeof t||h!==t?h:a.trimValues||t.trim()===t?xt(t,a.parseTagValue,a.numberParseOptions):t}}function rt(t){if(this.options.removeNSPrefix){const e=t.split(":"),n="/"===t.charAt(0)?"/":"";if("xmlns"===e[0])return"";2===e.length&&(t=n+e[1])}return t}const ot=new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?","gm");function at(t,e,n,i=!1){const r=this.options;if(!0===i||!0!==r.ignoreAttributes&&"string"==typeof t){const i=s(t,ot),o=i.length,a={},h=new Array(o);let l=!1;const u={};for(let t=0;t<o;t++){const e=this.resolveNameSpace(i[t][1]),s=i[t][4];if(e.length&&void 0!==s){let i=s;r.trimValues&&(i=i.trim()),i=this.replaceEntitiesValue(i,n,this.readonlyMatcher),h[t]=i,u[e]=i,l=!0}}l&&"object"==typeof e&&e.updateCurrent&&e.updateCurrent(u);const p=r.jPath?e.toString():this.readonlyMatcher;let c=!1;for(let t=0;t<o;t++){const e=this.resolveNameSpace(i[t][1]);if(this.ignoreAttributesFn(e,p))continue;let n=r.attributeNamePrefix+e;if(e.length)if(r.transformAttributeName&&(n=r.transformAttributeName(n)),n=bt(n,r),void 0!==i[t][4]){const i=h[t],s=r.attributeValueProcessor(e,i,p);a[n]=null==s?i:typeof s!=typeof i||s!==i?s:xt(i,r.parseAttributeValue,r.numberParseOptions),c=!0}else r.allowBooleanAttributes&&(a[n]=!0,c=!0)}if(!c)return;if(r.attributesGroupName&&!r.preserveOrder){const t={};return t[r.attributesGroupName]=a,t}return a}}const ht=function(t){t=t.replace(/\r\n?/g,"\n");const e=new O("!xml");let n=e,i="";this.matcher.reset(),this.entityDecoder.reset(),this.entityExpansionCount=0,this.currentExpandedLength=0;const s=this.options,r=new $(s.processEntities),o=t.length;for(let a=0;a<o;a++)if("<"===t[a]){const h=t.charCodeAt(a+1);if(47===h){const e=dt(t,">",a,"Closing Tag is not closed.");let r=t.substring(a+2,e).trim();if(s.removeNSPrefix){const t=r.indexOf(":");-1!==t&&(r=r.substr(t+1))}r=Nt(s.transformTagName,r,"",s).tagName,n&&(i=this.saveTextToParentTag(i,n,this.readonlyMatcher));const o=this.matcher.getCurrentTag();if(r&&s.unpairedTagsSet.has(r))throw new Error(`Unpaired tag can not be used as closing tag: </${r}>`);o&&s.unpairedTagsSet.has(o)&&(this.matcher.pop(),this.tagsNodeStack.pop()),this.matcher.pop(),this.isCurrentNodeStopNode=!1,n=this.tagsNodeStack.pop(),i="",a=e}else if(63===h){let e=gt(t,a,!1,"?>");if(!e)throw new Error("Pi Tag is not closed.");i=this.saveTextToParentTag(i,n,this.readonlyMatcher);const r=this.buildAttributesMap(e.tagExp,this.matcher,e.tagName,!0);if(r){const t=r[this.options.attributeNamePrefix+"version"];this.entityDecoder.setXmlVersion(Number(t)||1)}if(s.ignoreDeclaration&&"?xml"===e.tagName||s.ignorePiTags);else{const t=new O(e.tagName);t.add(s.textNodeName,""),e.tagName!==e.tagExp&&e.attrExpPresent&&!0!==s.ignoreAttributes&&(t[":@"]=r),this.addChild(n,t,this.readonlyMatcher,a)}a=e.closeIndex+1}else if(33===h&&45===t.charCodeAt(a+2)&&45===t.charCodeAt(a+3)){const e=dt(t,"--\x3e",a+4,"Comment is not closed.");if(s.commentPropName){const r=t.substring(a+4,e-2);i=this.saveTextToParentTag(i,n,this.readonlyMatcher),n.add(s.commentPropName,[{[s.textNodeName]:r}])}a=e}else if(33===h&&68===t.charCodeAt(a+2)){const e=r.readDocType(t,a);this.entityDecoder.addInputEntities(e.entities),a=e.i}else if(33===h&&91===t.charCodeAt(a+2)){const e=dt(t,"]]>",a,"CDATA is not closed.")-2,r=t.substring(a+9,e);i=this.saveTextToParentTag(i,n,this.readonlyMatcher);let o=this.parseTextData(r,n.tagname,this.readonlyMatcher,!0,!1,!0,!0);null==o&&(o=""),s.cdataPropName?n.add(s.cdataPropName,[{[s.textNodeName]:r}]):n.add(s.textNodeName,o),a=e+2}else{let r=gt(t,a,s.removeNSPrefix);if(!r){const e=t.substring(Math.max(0,a-50),Math.min(o,a+50));throw new Error(`readTagExp returned undefined at position ${a}. Context: "${e}"`)}let h=r.tagName;const l=r.rawTagName;let u=r.tagExp,p=r.attrExpPresent,c=r.closeIndex;if(({tagName:h,tagExp:u}=Nt(s.transformTagName,h,u,s)),s.strictReservedNames&&(h===s.commentPropName||h===s.cdataPropName||h===s.textNodeName||h===s.attributesGroupName))throw new Error(`Invalid tag name: ${h}`);n&&i&&"!xml"!==n.tagname&&(i=this.saveTextToParentTag(i,n,this.readonlyMatcher,!1));const d=n;d&&s.unpairedTagsSet.has(d.tagname)&&(n=this.tagsNodeStack.pop(),this.matcher.pop());let f=!1;u.length>0&&u.lastIndexOf("/")===u.length-1&&(f=!0,"/"===h[h.length-1]?(h=h.substr(0,h.length-1),u=h):u=u.substr(0,u.length-1),p=h!==u);let g,m=null,x={};g=nt(l),h!==e.tagname&&this.matcher.push(h,{},g),h!==u&&p&&(m=this.buildAttributesMap(u,this.matcher,h),m&&(x=et(m,s))),h!==e.tagname&&(this.isCurrentNodeStopNode=this.isItStopNode());const N=a;if(this.isCurrentNodeStopNode){let e="";if(f)a=r.closeIndex;else if(s.unpairedTagsSet.has(h))a=r.closeIndex;else{const n=this.readStopNodeData(t,l,c+1);if(!n)throw new Error(`Unexpected end of ${l}`);a=n.i,e=n.tagContent}const i=new O(h);m&&(i[":@"]=m),i.add(s.textNodeName,e),this.matcher.pop(),this.isCurrentNodeStopNode=!1,this.addChild(n,i,this.readonlyMatcher,N)}else{if(f){({tagName:h,tagExp:u}=Nt(s.transformTagName,h,u,s));const t=new O(h);m&&(t[":@"]=m),this.addChild(n,t,this.readonlyMatcher,N),this.matcher.pop(),this.isCurrentNodeStopNode=!1}else{if(s.unpairedTagsSet.has(h)){const t=new O(h);m&&(t[":@"]=m),this.addChild(n,t,this.readonlyMatcher,N),this.matcher.pop(),this.isCurrentNodeStopNode=!1,a=r.closeIndex;continue}{const t=new O(h);if(this.tagsNodeStack.length>s.maxNestedTags)throw new Error("Maximum nested tags exceeded");this.tagsNodeStack.push(n),m&&(t[":@"]=m),this.addChild(n,t,this.readonlyMatcher,N),n=t}}i="",a=c}}}else i+=t[a];return e.child};function lt(t,e,n,i){this.options.captureMetaData||(i=void 0);const s=this.options.jPath?n.toString():n,r=this.options.updateTag(e.tagname,s,e[":@"]);!1===r||("string"==typeof r?(e.tagname=r,t.addChild(e,i)):t.addChild(e,i))}function ut(t,e,n){const i=this.options.processEntities;if(!i||!i.enabled)return t;if(i.allowedTags){const s=this.options.jPath?n.toString():n;if(!(Array.isArray(i.allowedTags)?i.allowedTags.includes(e):i.allowedTags(e,s)))return t}if(i.tagFilter){const s=this.options.jPath?n.toString():n;if(!i.tagFilter(e,s))return t}return this.entityDecoder.decode(t)}function pt(t,e,n,i){return t&&(void 0===i&&(i=0===e.child.length),void 0!==(t=this.parseTextData(t,e.tagname,n,!1,!!e[":@"]&&0!==Object.keys(e[":@"]).length,i))&&""!==t&&e.add(this.options.textNodeName,t),t=""),t}function ct(){return 0!==this.stopNodeExpressionsSet.size&&this.matcher.matchesAny(this.stopNodeExpressionsSet)}function dt(t,e,n,i){const s=t.indexOf(e,n);if(-1===s)throw new Error(i);return s+e.length-1}function ft(t,e,n,i){const s=t.indexOf(e,n);if(-1===s)throw new Error(i);return s}function gt(t,e,n,i=">"){const s=function(t,e,n=">"){let i=0;const s=t.length,r=n.charCodeAt(0),o=n.length>1?n.charCodeAt(1):-1;let a="",h=e;for(let n=e;n<s;n++){const e=t.charCodeAt(n);if(i)e===i&&(i=0);else if(34===e||39===e)i=e;else if(e===r){if(-1===o)return a+=t.substring(h,n),{data:a,index:n};if(t.charCodeAt(n+1)===o)return a+=t.substring(h,n),{data:a,index:n}}else 9!==e||i||(a+=t.substring(h,n)+" ",h=n+1)}}(t,e+1,i);if(!s)return;let r=s.data;const o=s.index,a=r.search(/\s/);let h=r,l=!0;-1!==a&&(h=r.substring(0,a),r=r.substring(a+1).trimStart());const u=h;if(n){const t=h.indexOf(":");-1!==t&&(h=h.substr(t+1),l=h!==s.data.substr(t+1))}return{tagName:h,tagExp:r,closeIndex:o,attrExpPresent:l,rawTagName:u}}function mt(t,e,n){const i=n;let s=1;const r=t.length;for(;n<r;n++)if("<"===t[n]){const r=t.charCodeAt(n+1);if(47===r){const r=ft(t,">",n,`${e} is not closed`);if(t.substring(n+2,r).trim()===e&&(s--,0===s))return{tagContent:t.substring(i,n),i:r};n=r}else if(63===r)n=dt(t,"?>",n+1,"StopNode is not closed.");else if(33===r&&45===t.charCodeAt(n+2)&&45===t.charCodeAt(n+3))n=dt(t,"--\x3e",n+3,"StopNode is not closed.");else if(33===r&&91===t.charCodeAt(n+2))n=dt(t,"]]>",n,"StopNode is not closed.")-2;else{const i=gt(t,n,">");i&&((i&&i.tagName)===e&&"/"!==i.tagExp[i.tagExp.length-1]&&s++,n=i.closeIndex)}}}function xt(t,e,n){if(e&&"string"==typeof t){const e=t.trim();return"true"===e||"false"!==e&&function(t,e={}){if(e=Object.assign({},L,e),!t||"string"!=typeof t)return t;let n=t.trim();if(0===n.length)return t;if(void 0!==e.skipLike&&e.skipLike.test(n))return t;if("0"===n)return 0;if(e.hex&&j.test(n))return function(t){if(parseInt)return parseInt(t,16);if(Number.parseInt)return Number.parseInt(t,16);if(window&&window.parseInt)return window.parseInt(t,16);throw new Error("parseInt, Number.parseInt, window.parseInt are not supported")}(n);if(isFinite(n)){if(n.includes("e")||n.includes("E"))return function(t,e,n){if(!n.eNotation)return t;const i=e.match(k);if(i){let s=i[1]||"";const r=-1===i[3].indexOf("e")?"E":"e",o=i[2],a=s?t[o.length+1]===r:t[o.length]===r;return o.length>1&&a?t:(1!==o.length||!i[3].startsWith(`.${r}`)&&i[3][0]!==r)&&o.length>0?n.leadingZeros&&!a?(e=(i[1]||"")+i[3],Number(e)):t:Number(e)}return t}(t,n,e);{const s=V.exec(n);if(s){const r=s[1]||"",o=s[2];let a=(i=s[3])&&-1!==i.indexOf(".")?("."===(i=i.replace(/0+$/,""))?i="0":"."===i[0]?i="0"+i:"."===i[i.length-1]&&(i=i.substring(0,i.length-1)),i):i;const h=r?"."===t[o.length+1]:"."===t[o.length];if(!e.leadingZeros&&(o.length>1||1===o.length&&!h))return t;{const i=Number(n),s=String(i);if(0===i)return i;if(-1!==s.search(/[eE]/))return e.eNotation?i:t;if(-1!==n.indexOf("."))return"0"===s||s===a||s===`${r}${a}`?i:t;let h=o?a:n;return o?h===s||r+h===s?i:t:h===s||h===r+s?i:t}}return t}}var i;return function(t,e,n){const i=e===1/0;switch(n.infinity.toLowerCase()){case"null":return null;case"infinity":return e;case"string":return i?"Infinity":"-Infinity";default:return t}}(t,Number(n),e)}(t,n)}return void 0!==t?t:""}function Nt(t,e,n,i){if(t){const i=t(e);n===e&&(n=i),e=i}return{tagName:e=bt(e,i),tagExp:n}}function bt(t,e){if(a.includes(t))throw new Error(`[SECURITY] Invalid name: "${t}" is a reserved JavaScript keyword that could cause prototype pollution`);return o.includes(t)?e.onDangerousProperty(t):t}const yt=O.getMetaDataSymbol();function Et(t,e){if(!t||"object"!=typeof t)return{};if(!e)return t;const n={};for(const i in t)i.startsWith(e)?n[i.substring(e.length)]=t[i]:n[i]=t[i];return n}function wt(t,e,n,i){return vt(t,e,n,i)}function vt(t,e,n,i){let s;const r={};for(let o=0;o<t.length;o++){const a=t[o],h=St(a);if(void 0!==h&&h!==e.textNodeName){const t=Et(a[":@"]||{},e.attributeNamePrefix);n.push(h,t)}if(h===e.textNodeName)void 0===s?s=a[h]:s+=""+a[h];else{if(void 0===h)continue;if(a[h]){let t=vt(a[h],e,n,i);const s=At(t,e);if(a[":@"]?_t(t,a[":@"],i,e):1!==Object.keys(t).length||void 0===t[e.textNodeName]||e.alwaysCreateTextNode?0===Object.keys(t).length&&(e.alwaysCreateTextNode?t[e.textNodeName]="":t=""):t=t[e.textNodeName],void 0!==a[yt]&&"object"==typeof t&&null!==t&&(t[yt]=a[yt]),void 0!==r[h]&&Object.prototype.hasOwnProperty.call(r,h))Array.isArray(r[h])||(r[h]=[r[h]]),r[h].push(t);else{const n=e.jPath?i.toString():i;e.isArray(h,n,s)?r[h]=[t]:r[h]=t}void 0!==h&&h!==e.textNodeName&&n.pop()}}}return"string"==typeof s?s.length>0&&(r[e.textNodeName]=s):void 0!==s&&(r[e.textNodeName]=s),r}function St(t){const e=Object.keys(t);for(let t=0;t<e.length;t++){const n=e[t];if(":@"!==n)return n}}function _t(t,e,n,i){if(e){const s=Object.keys(e),r=s.length;for(let o=0;o<r;o++){const r=s[o],a=r.startsWith(i.attributeNamePrefix)?r.substring(i.attributeNamePrefix.length):r,h=i.jPath?n.toString()+"."+a:n;i.isArray(r,h,!0,!0)?t[r]=[e[r]]:t[r]=e[r]}}}function At(t,e){const{textNodeName:n}=e,i=Object.keys(t).length;return 0===i||!(1!==i||!t[n]&&"boolean"!=typeof t[n]&&0!==t[n])}class Tt{constructor(t){this.externalEntities={},this.options=C(t)}parse(t,e){if("string"!=typeof t&&t.toString)t=t.toString();else if("string"!=typeof t)throw new Error("XML data is accepted in String or Bytes[] form.");if(e){!0===e&&(e={});const n=l(t,e);if(!0!==n)throw Error(`${n.err.msg}:${n.err.line}:${n.err.col}`)}const n=new it(this.options,this.externalEntities),i=n.parseXml(t);return this.options.preserveOrder||void 0===i?i:wt(i,this.options,n.matcher,n.readonlyMatcher)}addEntity(t,e){if(-1!==e.indexOf("&"))throw new Error("Entity value can't have '&'");if(-1!==t.indexOf("&")||-1!==t.indexOf(";"))throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if("&"===e)throw new Error("An entity with value '&' is not permitted");this.externalEntities[t]=e}static getMetaDataSymbol(){return O.getMetaDataSymbol()}}function Ct(t,e){let n="";e.format&&e.indentBy.length>0&&(n="\n");const i=[];if(e.stopNodes&&Array.isArray(e.stopNodes))for(let t=0;t<e.stopNodes.length;t++){const n=e.stopNodes[t];"string"==typeof n?i.push(new G(n)):n instanceof G&&i.push(n)}return Pt(t,e,n,new R,i)}function Pt(t,e,n,i,s){let r="",o=!1;if(e.maxNestedTags&&i.getDepth()>e.maxNestedTags)throw new Error("Maximum nested tags exceeded");if(!Array.isArray(t)){if(null!=t){let n=t.toString();return n=Vt(n,e),n}return""}for(let a=0;a<t.length;a++){const h=t[a],l=Dt(h);if(void 0===l)continue;const u=Ot(h[":@"],e);i.push(l,u);const p=jt(i,s);if(l===e.textNodeName){let t=h[l];p||(t=e.tagValueProcessor(l,t),t=Vt(t,e)),o&&(r+=n),r+=t,o=!1,i.pop();continue}if(l===e.cdataPropName){o&&(r+=n);const t=h[l][0][e.textNodeName];r+=`<![CDATA[${String(t).replace(/\]\]>/g,"]]]]><![CDATA[>")}]]>`,o=!1,i.pop();continue}if(l===e.commentPropName){const t=h[l][0][e.textNodeName];r+=n+`\x3c!--${String(t).replace(/--/g,"- -").replace(/-$/,"- ")}--\x3e`,o=!0,i.pop();continue}if("?"===l[0]){const t=Mt(h[":@"],e,p),s="?xml"===l?"":n;let a=h[l][0][e.textNodeName];a=0!==a.length?" "+a:"",r+=s+`<${l}${a}${t}?>`,o=!0,i.pop();continue}let c=n;""!==c&&(c+=e.indentBy);const d=n+`<${l}${Mt(h[":@"],e,p)}`;let f;f=p?$t(h[l],e):Pt(h[l],e,c,i,s),-1!==e.unpairedTags.indexOf(l)?e.suppressUnpairedNode?r+=d+">":r+=d+"/>":f&&0!==f.length||!e.suppressEmptyNode?f&&f.endsWith(">")?r+=d+`>${f}${n}</${l}>`:(r+=d+">",f&&""!==n&&(f.includes("/>")||f.includes("</"))?r+=n+e.indentBy+f+n:r+=f,r+=`</${l}>`):r+=d+"/>",o=!0,i.pop()}return r}function Ot(t,e){if(!t||e.ignoreAttributes)return null;const n={};let i=!1;for(let s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s.startsWith(e.attributeNamePrefix)?s.substr(e.attributeNamePrefix.length):s]=t[s],i=!0);return i?n:null}function $t(t,e){if(!Array.isArray(t))return null!=t?t.toString():"";let n="";for(let i=0;i<t.length;i++){const s=t[i],r=Dt(s);if(r===e.textNodeName)n+=s[r];else if(r===e.cdataPropName)n+=s[r][0][e.textNodeName];else if(r===e.commentPropName)n+=s[r][0][e.textNodeName];else{if(r&&"?"===r[0])continue;if(r){const t=It(s[":@"],e),i=$t(s[r],e);i&&0!==i.length?n+=`<${r}${t}>${i}</${r}>`:n+=`<${r}${t}/>`}}}return n}function It(t,e){let n="";if(t&&!e.ignoreAttributes)for(let i in t){if(!Object.prototype.hasOwnProperty.call(t,i))continue;let s=t[i];!0===s&&e.suppressBooleanAttributes?n+=` ${i.substr(e.attributeNamePrefix.length)}`:n+=` ${i.substr(e.attributeNamePrefix.length)}="${s}"`}return n}function Dt(t){const e=Object.keys(t);for(let n=0;n<e.length;n++){const i=e[n];if(Object.prototype.hasOwnProperty.call(t,i)&&":@"!==i)return i}}function Mt(t,e,n){let i="";if(t&&!e.ignoreAttributes)for(let s in t){if(!Object.prototype.hasOwnProperty.call(t,s))continue;let r;n?r=t[s]:(r=e.attributeValueProcessor(s,t[s]),r=Vt(r,e)),!0===r&&e.suppressBooleanAttributes?i+=` ${s.substr(e.attributeNamePrefix.length)}`:i+=` ${s.substr(e.attributeNamePrefix.length)}="${r}"`}return i}function jt(t,e){if(!e||0===e.length)return!1;for(let n=0;n<e.length;n++)if(t.matches(e[n]))return!0;return!1}function Vt(t,e){if(t&&t.length>0&&e.processEntities)for(let n=0;n<e.entities.length;n++){const i=e.entities[n];t=t.replace(i.regex,i.val)}return t}const Lt={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1,maxNestedTags:100,jPath:!0};function kt(t){if(this.options=Object.assign({},Lt,t),this.options.stopNodes&&Array.isArray(this.options.stopNodes)&&(this.options.stopNodes=this.options.stopNodes.map(t=>"string"==typeof t&&t.startsWith("*.")?".."+t.substring(2):t)),this.stopNodeExpressions=[],this.options.stopNodes&&Array.isArray(this.options.stopNodes))for(let t=0;t<this.options.stopNodes.length;t++){const e=this.options.stopNodes[t];"string"==typeof e?this.stopNodeExpressions.push(new G(e)):e instanceof G&&this.stopNodeExpressions.push(e)}var e;!0===this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.ignoreAttributesFn="function"==typeof(e=this.options.ignoreAttributes)?e:Array.isArray(e)?t=>{for(const n of e){if("string"==typeof n&&t===n)return!0;if(n instanceof RegExp&&n.test(t))return!0}}:()=>!1,this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=Gt),this.processTextOrObjNode=Ft,this.options.format?(this.indentate=Rt,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}function Ft(t,e,n,i){const s=this.extractAttributes(t);if(i.push(e,s),this.checkStopNode(i)){const s=this.buildRawContent(t),r=this.buildAttributesForStopNode(t);return i.pop(),this.buildObjectNode(s,e,r,n)}const r=this.j2x(t,n+1,i);return i.pop(),void 0!==t[this.options.textNodeName]&&1===Object.keys(t).length?this.buildTextValNode(t[this.options.textNodeName],e,r.attrStr,n,i):this.buildObjectNode(r.val,e,r.attrStr,n)}function Rt(t){return this.options.indentBy.repeat(t)}function Gt(t){return!(!t.startsWith(this.options.attributeNamePrefix)||t===this.options.textNodeName)&&t.substr(this.attrPrefixLen)}kt.prototype.build=function(t){if(this.options.preserveOrder)return Ct(t,this.options);{Array.isArray(t)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(t={[this.options.arrayNodeName]:t});const e=new R;return this.j2x(t,0,e).val}},kt.prototype.j2x=function(t,e,n){let i="",s="";if(this.options.maxNestedTags&&n.getDepth()>=this.options.maxNestedTags)throw new Error("Maximum nested tags exceeded");const r=this.options.jPath?n.toString():n,o=this.checkStopNode(n);for(let a in t)if(Object.prototype.hasOwnProperty.call(t,a))if(void 0===t[a])this.isAttribute(a)&&(s+="");else if(null===t[a])this.isAttribute(a)||a===this.options.cdataPropName?s+="":"?"===a[0]?s+=this.indentate(e)+"<"+a+"?"+this.tagEndChar:s+=this.indentate(e)+"<"+a+"/"+this.tagEndChar;else if(t[a]instanceof Date)s+=this.buildTextValNode(t[a],a,"",e,n);else if("object"!=typeof t[a]){const h=this.isAttribute(a);if(h&&!this.ignoreAttributesFn(h,r))i+=this.buildAttrPairStr(h,""+t[a],o);else if(!h)if(a===this.options.textNodeName){let e=this.options.tagValueProcessor(a,""+t[a]);s+=this.replaceEntitiesValue(e)}else{n.push(a);const i=this.checkStopNode(n);if(n.pop(),i){const n=""+t[a];s+=""===n?this.indentate(e)+"<"+a+this.closeTag(a)+this.tagEndChar:this.indentate(e)+"<"+a+">"+n+"</"+a+this.tagEndChar}else s+=this.buildTextValNode(t[a],a,"",e,n)}}else if(Array.isArray(t[a])){const i=t[a].length;let r="",o="";for(let h=0;h<i;h++){const i=t[a][h];if(void 0===i);else if(null===i)"?"===a[0]?s+=this.indentate(e)+"<"+a+"?"+this.tagEndChar:s+=this.indentate(e)+"<"+a+"/"+this.tagEndChar;else if("object"==typeof i)if(this.options.oneListGroup){n.push(a);const t=this.j2x(i,e+1,n);n.pop(),r+=t.val,this.options.attributesGroupName&&i.hasOwnProperty(this.options.attributesGroupName)&&(o+=t.attrStr)}else r+=this.processTextOrObjNode(i,a,e,n);else if(this.options.oneListGroup){let t=this.options.tagValueProcessor(a,i);t=this.replaceEntitiesValue(t),r+=t}else{n.push(a);const t=this.checkStopNode(n);if(n.pop(),t){const t=""+i;r+=""===t?this.indentate(e)+"<"+a+this.closeTag(a)+this.tagEndChar:this.indentate(e)+"<"+a+">"+t+"</"+a+this.tagEndChar}else r+=this.buildTextValNode(i,a,"",e,n)}}this.options.oneListGroup&&(r=this.buildObjectNode(r,a,o,e)),s+=r}else if(this.options.attributesGroupName&&a===this.options.attributesGroupName){const e=Object.keys(t[a]),n=e.length;for(let s=0;s<n;s++)i+=this.buildAttrPairStr(e[s],""+t[a][e[s]],o)}else s+=this.processTextOrObjNode(t[a],a,e,n);return{attrStr:i,val:s}},kt.prototype.buildAttrPairStr=function(t,e,n){return n||(e=this.options.attributeValueProcessor(t,""+e),e=this.replaceEntitiesValue(e)),this.options.suppressBooleanAttributes&&"true"===e?" "+t:" "+t+'="'+e+'"'},kt.prototype.extractAttributes=function(t){if(!t||"object"!=typeof t)return null;const e={};let n=!1;if(this.options.attributesGroupName&&t[this.options.attributesGroupName]){const i=t[this.options.attributesGroupName];for(let t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t.startsWith(this.options.attributeNamePrefix)?t.substring(this.options.attributeNamePrefix.length):t]=i[t],n=!0)}else for(let i in t){if(!Object.prototype.hasOwnProperty.call(t,i))continue;const s=this.isAttribute(i);s&&(e[s]=t[i],n=!0)}return n?e:null},kt.prototype.buildRawContent=function(t){if("string"==typeof t)return t;if("object"!=typeof t||null===t)return String(t);if(void 0!==t[this.options.textNodeName])return t[this.options.textNodeName];let e="";for(let n in t){if(!Object.prototype.hasOwnProperty.call(t,n))continue;if(this.isAttribute(n))continue;if(this.options.attributesGroupName&&n===this.options.attributesGroupName)continue;const i=t[n];if(n===this.options.textNodeName)e+=i;else if(Array.isArray(i)){for(let t of i)if("string"==typeof t||"number"==typeof t)e+=`<${n}>${t}</${n}>`;else if("object"==typeof t&&null!==t){const i=this.buildRawContent(t),s=this.buildAttributesForStopNode(t);e+=""===i?`<${n}${s}/>`:`<${n}${s}>${i}</${n}>`}}else if("object"==typeof i&&null!==i){const t=this.buildRawContent(i),s=this.buildAttributesForStopNode(i);e+=""===t?`<${n}${s}/>`:`<${n}${s}>${t}</${n}>`}else e+=`<${n}>${i}</${n}>`}return e},kt.prototype.buildAttributesForStopNode=function(t){if(!t||"object"!=typeof t)return"";let e="";if(this.options.attributesGroupName&&t[this.options.attributesGroupName]){const n=t[this.options.attributesGroupName];for(let t in n){if(!Object.prototype.hasOwnProperty.call(n,t))continue;const i=t.startsWith(this.options.attributeNamePrefix)?t.substring(this.options.attributeNamePrefix.length):t,s=n[t];!0===s&&this.options.suppressBooleanAttributes?e+=" "+i:e+=" "+i+'="'+s+'"'}}else for(let n in t){if(!Object.prototype.hasOwnProperty.call(t,n))continue;const i=this.isAttribute(n);if(i){const s=t[n];!0===s&&this.options.suppressBooleanAttributes?e+=" "+i:e+=" "+i+'="'+s+'"'}}return e},kt.prototype.buildObjectNode=function(t,e,n,i){if(""===t)return"?"===e[0]?this.indentate(i)+"<"+e+n+"?"+this.tagEndChar:this.indentate(i)+"<"+e+n+this.closeTag(e)+this.tagEndChar;{let s="</"+e+this.tagEndChar,r="";return"?"===e[0]&&(r="?",s=""),!n&&""!==n||-1!==t.indexOf("<")?!1!==this.options.commentPropName&&e===this.options.commentPropName&&0===r.length?this.indentate(i)+`\x3c!--${t}--\x3e`+this.newLine:this.indentate(i)+"<"+e+n+r+this.tagEndChar+t+this.indentate(i)+s:this.indentate(i)+"<"+e+n+r+">"+t+s}},kt.prototype.closeTag=function(t){let e="";return-1!==this.options.unpairedTags.indexOf(t)?this.options.suppressUnpairedNode||(e="/"):e=this.options.suppressEmptyNode?"/":`></${t}`,e},kt.prototype.checkStopNode=function(t){if(!this.stopNodeExpressions||0===this.stopNodeExpressions.length)return!1;for(let e=0;e<this.stopNodeExpressions.length;e++)if(t.matches(this.stopNodeExpressions[e]))return!0;return!1},kt.prototype.buildTextValNode=function(t,e,n,i,s){if(!1!==this.options.cdataPropName&&e===this.options.cdataPropName){const e=String(t).replace(/\]\]>/g,"]]]]><![CDATA[>");return this.indentate(i)+`<![CDATA[${e}]]>`+this.newLine}if(!1!==this.options.commentPropName&&e===this.options.commentPropName){const e=String(t).replace(/--/g,"- -").replace(/-$/,"- ");return this.indentate(i)+`\x3c!--${e}--\x3e`+this.newLine}if("?"===e[0])return this.indentate(i)+"<"+e+n+"?"+this.tagEndChar;{let s=this.options.tagValueProcessor(e,t);return s=this.replaceEntitiesValue(s),""===s?this.indentate(i)+"<"+e+n+this.closeTag(e)+this.tagEndChar:this.indentate(i)+"<"+e+n+">"+s+"</"+e+this.tagEndChar}},kt.prototype.replaceEntitiesValue=function(t){if(t&&t.length>0&&this.options.processEntities)for(let e=0;e<this.options.entities.length;e++){const n=this.options.entities[e];t=t.replace(n.regex,n.val)}return t};const Bt=kt,Ut={validate:l};module.exports=e})();

/***/ }),

/***/ 1838:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"@aws-sdk/client-codeartifact","description":"AWS SDK for JavaScript Codeartifact Client for Node.js, Browser and React Native","version":"3.1038.0","scripts":{"build":"concurrently \'yarn:build:types\' \'yarn:build:es\' && yarn build:cjs","build:cjs":"node ../../scripts/compilation/inline client-codeartifact","build:es":"tsc -p tsconfig.es.json","build:include:deps":"yarn g:turbo run build -F=\\"$npm_package_name\\"","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4","clean":"premove dist-cjs dist-es dist-types tsconfig.cjs.tsbuildinfo tsconfig.es.tsbuildinfo tsconfig.types.tsbuildinfo","extract:docs":"api-extractor run --local","generate:client":"node ../../scripts/generate-clients/single-service --solo codeartifact","test:index":"tsc --noEmit ./test/index-types.ts && node ./test/index-objects.spec.mjs"},"main":"./dist-cjs/index.js","types":"./dist-types/index.d.ts","module":"./dist-es/index.js","sideEffects":false,"dependencies":{"@aws-crypto/sha256-browser":"5.2.0","@aws-crypto/sha256-js":"5.2.0","@aws-sdk/core":"^3.974.6","@aws-sdk/credential-provider-node":"^3.972.37","@aws-sdk/middleware-host-header":"^3.972.10","@aws-sdk/middleware-logger":"^3.972.10","@aws-sdk/middleware-recursion-detection":"^3.972.11","@aws-sdk/middleware-user-agent":"^3.972.36","@aws-sdk/region-config-resolver":"^3.972.13","@aws-sdk/types":"^3.973.8","@aws-sdk/util-endpoints":"^3.996.8","@aws-sdk/util-user-agent-browser":"^3.972.10","@aws-sdk/util-user-agent-node":"^3.973.22","@smithy/config-resolver":"^4.4.17","@smithy/core":"^3.23.17","@smithy/fetch-http-handler":"^5.3.17","@smithy/hash-node":"^4.2.14","@smithy/invalid-dependency":"^4.2.14","@smithy/middleware-content-length":"^4.2.14","@smithy/middleware-endpoint":"^4.4.32","@smithy/middleware-retry":"^4.5.6","@smithy/middleware-serde":"^4.2.20","@smithy/middleware-stack":"^4.2.14","@smithy/node-config-provider":"^4.3.14","@smithy/node-http-handler":"^4.6.1","@smithy/protocol-http":"^5.3.14","@smithy/smithy-client":"^4.12.13","@smithy/types":"^4.14.1","@smithy/url-parser":"^4.2.14","@smithy/util-base64":"^4.3.2","@smithy/util-body-length-browser":"^4.2.2","@smithy/util-body-length-node":"^4.2.3","@smithy/util-defaults-mode-browser":"^4.3.49","@smithy/util-defaults-mode-node":"^4.2.54","@smithy/util-endpoints":"^3.4.2","@smithy/util-middleware":"^4.2.14","@smithy/util-retry":"^4.3.5","@smithy/util-stream":"^4.5.25","@smithy/util-utf8":"^4.2.2","tslib":"^2.6.2"},"devDependencies":{"@tsconfig/node20":"20.1.8","@types/node":"^20.14.8","concurrently":"7.0.0","downlevel-dts":"0.10.1","premove":"4.0.0","typescript":"~5.8.3"},"engines":{"node":">=20.0.0"},"typesVersions":{"<4.5":{"dist-types/*":["dist-types/ts3.4/*"]}},"files":["dist-*/**"],"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","browser":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},"homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-codeartifact","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-codeartifact"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nccwpck_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__nccwpck_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__nccwpck_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__nccwpck_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__nccwpck_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__nccwpck_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__nccwpck_require__.f).reduce((promises, key) => {
/******/ 				__nccwpck_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__nccwpck_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".index.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__nccwpck_require__.o(moreModules, moduleId)) {
/******/ 					__nccwpck_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__nccwpck_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__nccwpck_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __nccwpck_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
const core = __nccwpck_require__(2186);
const {
  CodeartifactClient,
  GetAuthorizationTokenCommand,
  GetRepositoryEndpointCommand,
  // eslint-disable-next-line no-unused-vars
  GetRepositoryEndpointCommandOutput,
} = __nccwpck_require__(2523);

async function run() {
  try {
    const region = core.getInput("region");
    const repository = core.getInput("repository");
    const domain = core.getInput("domain");
    const domainOwner = core.getInput("domain-owner");
    const format = core.getInput("format");
    const durationSeconds = parseInt(core.getInput("duration-seconds"));

    if (!region || !domain) {
      core.setFailed("Required inputs 'region', 'domain' must be provided.");
      return;
    }

    const client = new CodeartifactClient({
      region: region,
    });

    if (repository) {
      const getRepositoryEndpointCmd = new GetRepositoryEndpointCommand({
        domain,
        domainOwner,
        repository,
        format: format,
      });

      /** @type GetRepositoryEndpointCommandOutput */
      const endpointResult = await client.send(getRepositoryEndpointCmd);

      if (!endpointResult.repositoryEndpoint) {
        core.setFailed(
          "Failed to retrieve repository endpoint from CodeArtifact.",
        );
        return;
      }

      core.exportVariable(
        "CODEARTIFACT_REPOSITORY_ENDPOINT",
        endpointResult.repositoryEndpoint,
      );
      core.setOutput("endpoint", endpointResult.repositoryEndpoint);
    }

    const getAuthorizationTokenCmd = new GetAuthorizationTokenCommand({
      domain,
      domainOwner,
      durationSeconds: durationSeconds !== 0 ? durationSeconds : null,
    });

    const tokenResult = await client.send(getAuthorizationTokenCmd);

    if (!tokenResult.authorizationToken) {
      core.setFailed(
        "Failed to retrieve authorization token from CodeArtifact.",
      );
      return;
    }

    core.exportVariable(
      "CODEARTIFACT_AUTH_TOKEN",
      tokenResult.authorizationToken,
    );
    core.setSecret(tokenResult.authorizationToken);
  } catch (error) {
    core.setFailed(error.message);
  }
}

exports.run = run;

if (require.main === require.cache[eval('__filename')]) {
  run();
}

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map