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
const cli_1 = require("@flagfw/cli");
(() => __awaiter(void 0, void 0, void 0, function* () {
    cli_1.FlagCLI
        .outn("CLI Text Sample....")
        .outn("........");
    cli_1.FlagCLI
        .outn("Red Text ...... OK", { color: cli_1.CLIColorType.red })
        .redn("Red Text 2 ...... OK")
        .yellown("Yellow Text ...... OK")
        .greenn("Green Text ...... OK")
        .bluen("Blue Text ...... OK")
        .grayn("Gray Text ...... OK")
        .orangen("Orange Text ...... OK");
    cli_1.FlagCLI
        .indent(4)
        .outn("Indent Text Sample Text Sample Text Sample Text Sample Text Sample")
        .outn("Indent Text Sample Text Sample Text Sample Text Sample Text Sample")
        .indent(6)
        .outn("Indent Text Sample Text Sample Text Sample Text Sample Text Sample")
        .indent(0);
    cli_1.FlagCLI.outn(".....").br();
    const val = yield cli_1.FlagCLI.in("prease key");
    cli_1.FlagCLI.outn("key=" + val);
    cli_1.FlagCLI.outData({
        name: "aaaaa",
        age: 32 + "\n" + cli_1.FlagCLI.getGreen("# ") + "option text text text...\nbbbbbbbbbb",
    });
}))();
