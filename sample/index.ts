import { FlagCLI , CLIColorType } from "@flagfw/cli";

(async () => {

    FlagCLI
        .outn("CLI Text Sample....")
        .outn("........")
    ;

    FlagCLI
        .outn("Red Text ...... OK", { color: CLIColorType.red })
        .redn("Red Text 2 ...... OK")
        .yellown("Yellow Text ...... OK")
        .greenn("Green Text ...... OK")
        .bluen("Blue Text ...... OK")
        .grayn("Gray Text ...... OK")
        .orangen("Orange Text ...... OK")
    ;

    FlagCLI
        .indent(4)
        .outn("Indent Text Sample Text Sample Text Sample Text Sample Text Sample")
        .outn("Indent Text Sample Text Sample Text Sample Text Sample Text Sample")
        .indent(6)
        .outn("Indent Text Sample Text Sample Text Sample Text Sample Text Sample")
        .indent(0)
    ;

    FlagCLI.outn(".....").br();

    const val = await FlagCLI.in("prease key");

    FlagCLI.outn("key=" + val);

    FlagCLI.outData({
        name: "aaaaa",
        age: 32 + "\n" + FlagCLI.getGreen("# ") + "option text text text...\nbbbbbbbbbb",   
    });

    
})();