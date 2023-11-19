"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlagCLI = exports.CLIColorType = void 0;
const readline = require("readline");
let args = process.argv;
let _indent = 0;
args.shift();
args.shift();
/**
 * ***CLIColorType***
 * Static variable for preset text color.
 * It can be set as below.
 *
 * Example:)
 *
 * FlagCLI.outn("Hallo Red", {
 * 　color: CLIColorType.red,
 * });
 *
 *
 */
exports.CLIColorType = {
    default: [255, 255, 255],
    red: [255, 40, 40],
    yellow: [255, 255, 20],
    green: [40, 255, 40],
    blue: [70, 130, 255],
    gray: [140, 140, 140],
    orange: [255, 180, 20],
};
class FlagCLI {
    static getIndentSpace() {
        let indentStr = "";
        for (let n = 0; n < _indent; n++) {
            indentStr += " ";
        }
        return indentStr;
    }
    static getArgs() {
        return args;
    }
    getArgs() {
        return FlagCLI.getArgs();
    }
    static getArgsOption() {
        var options = {
            _any: [],
        };
        var field = null;
        for (var n = 0; n < args.length; n++) {
            var a = args[n];
            if (a.indexOf("--") === 0) {
                if (field) {
                    options[field] = true;
                }
                field = a.substring(2);
            }
            else {
                if (!field) {
                    options._any.push(a);
                    continue;
                }
                options[field] = a;
                field = null;
            }
        }
        if (field) {
            options[field] = true;
        }
        return options;
    }
    getArgsOption() {
        return FlagCLI.getArgsOption();
    }
    static indent(indent) {
        _indent = indent;
        FlagCLI.out("\r" + FlagCLI.getIndentSpace());
        return this;
    }
    indent(indent) {
        return FlagCLI.indent(indent);
    }
    static getColor(string, rgb) {
        return "\x1b[38;2;" + rgb[0] + ";" + rgb[1] + ";" + rgb[2] + "m" + string + "\x1b[39m";
    }
    static color(string, rgb) {
        return FlagCLI.out(string, {
            color: rgb,
        });
    }
    color(string, rgb) {
        return FlagCLI.color(string, rgb);
    }
    static colorn(string, rgb) {
        return FlagCLI.outn(string, {
            color: rgb,
        });
    }
    colorn(string, rgb) {
        return FlagCLI.colorn(string, rgb);
    }
    static getRed(string) {
        return FlagCLI.getColor(string, exports.CLIColorType.red);
    }
    static red(string) {
        return FlagCLI.color(string, exports.CLIColorType.red);
    }
    red(string) {
        return FlagCLI.red(string);
    }
    static redn(string) {
        return FlagCLI.colorn(string, exports.CLIColorType.red);
    }
    redn(string) {
        return FlagCLI.redn(string);
    }
    static getYellow(string) {
        return FlagCLI.getColor(string, exports.CLIColorType.yellow);
    }
    static yellow(string) {
        return FlagCLI.color(string, exports.CLIColorType.yellow);
    }
    yellow(string) {
        return FlagCLI.yellow(string);
    }
    static yellown(string) {
        return FlagCLI.colorn(string, exports.CLIColorType.yellow);
    }
    yellown(string) {
        return FlagCLI.yellown(string);
    }
    static getGreen(string) {
        return FlagCLI.getColor(string, exports.CLIColorType.green);
    }
    static green(string) {
        return FlagCLI.color(string, exports.CLIColorType.green);
    }
    green(string) {
        return FlagCLI.green(string);
    }
    static greenn(string) {
        return FlagCLI.colorn(string, exports.CLIColorType.green);
    }
    greenn(string) {
        return FlagCLI.greenn(string);
    }
    static getBlue(string) {
        return FlagCLI.getColor(string, exports.CLIColorType.blue);
    }
    static blue(string) {
        return FlagCLI.color(string, exports.CLIColorType.blue);
    }
    blue(string) {
        return FlagCLI.blue(string);
    }
    static bluen(string) {
        return FlagCLI.colorn(string, exports.CLIColorType.blue);
    }
    bluen(string) {
        return FlagCLI.bluen(string);
    }
    static getGray(string) {
        return FlagCLI.getColor(string, exports.CLIColorType.gray);
    }
    static gray(string) {
        return FlagCLI.color(string, exports.CLIColorType.gray);
    }
    gray(string) {
        return FlagCLI.gray(string);
    }
    static grayn(string) {
        return FlagCLI.colorn(string, exports.CLIColorType.gray);
    }
    grayn(string) {
        return FlagCLI.grayn(string);
    }
    static getOrange(string) {
        return FlagCLI.getColor(string, exports.CLIColorType.orange);
    }
    static orange(string) {
        return FlagCLI.color(string, exports.CLIColorType.orange);
    }
    orange(string) {
        return FlagCLI.orange(string);
    }
    static orangen(string) {
        return FlagCLI.colorn(string, exports.CLIColorType.orange);
    }
    orangen(string) {
        return FlagCLI.orangen(string);
    }
    static out(string, option) {
        if (!option) {
            option = {};
        }
        if (option.indent) {
            const beforeIndent = _indent;
            FlagCLI.indent(option.indent);
            string = FlagCLI.getIndentSpace() + string;
            FlagCLI.indent(beforeIndent);
        }
        if (option.color) {
            string = "\x1b[38;2;" + option.color[0] + ";" + option.color[1] + ";" + option.color[2] + "m" + string + "\x1b[39m";
        }
        process.stdout.write(string);
        return this;
    }
    ;
    out(string, option) {
        return FlagCLI.out(string, option);
    }
    static outn(string, option) {
        if (!option) {
            option = {};
        }
        string = string + "\n";
        if (!option.noIndent) {
            string = string + FlagCLI.getIndentSpace();
        }
        return FlagCLI.out(string, option);
    }
    outn(string, option) {
        return FlagCLI.outn(string, option);
    }
    static br() {
        return FlagCLI.outn("");
    }
    br() {
        return FlagCLI.br();
    }
    static in(string, option) {
        if (string) {
            FlagCLI.out(string, option);
        }
        FlagCLI.out(" :", option);
        const readInterface = readline.createInterface({
            input: process.stdin,
        });
        return new Promise(function (resolve) {
            readInterface.question(" : ", (input) => {
                readInterface.close();
                if (_indent) {
                    FlagCLI.out(FlagCLI.getIndentSpace());
                }
                resolve(input.trim());
            });
        });
    }
    ;
    in(string, option) {
        return FlagCLI.in(string, option);
    }
    static outData(data) {
        var c = Object.keys(data);
        var maxKeyLength = 0;
        for (var n = 0; n < c.length; n++) {
            var key = c[n];
            if (maxKeyLength < key.length) {
                maxKeyLength = key.length;
            }
        }
        for (var n = 0; n < c.length; n++) {
            var key = c[n];
            var val = data[key];
            if (typeof val != "string") {
                val = val.toString();
            }
            val = val.split("\n").join("\n" + " ".padEnd(_indent + maxKeyLength + 3));
            let keystr = key.padEnd(maxKeyLength) + " : ";
            FlagCLI.outn(keystr + val);
        }
        return this;
    }
    outData(data) {
        return FlagCLI.outData(data);
    }
    static wait() {
    }
}
exports.FlagCLI = FlagCLI;
;
