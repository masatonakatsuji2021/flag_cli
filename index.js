const readline = require('readline');

module.exports = new function(){

    var cwd = process.cwd();
    var args = process.argv;
    var _indent = 0;

    args.shift();
    args.shift();

    const getIndentSpace = function(){
        var indentStr = "";
        for(var n = 0 ; n < _indent ; n++){
            indentStr += " ";
        }
        return indentStr;
    };

    this.getArgs = function(){
        return args;
    };

    this.indent = function(indent){
        _indent = indent;
        return this;
    };

    this.out = function(string){
        
        if(string == undefined){
            string = "";
        }
        
        process.stdout.write(getIndentSpace() + string);
        return this;
    };

    this.outn = function(string){
                
        if(string == undefined){
            string = "";
        }
        return this.out(string + "\n");
    };

    this.in = function(string){

        if(!string){
            string = "";
        }

        const readInterface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise(function(resolve){
            readInterface.question(string + ":", function(input){
                readInterface.close();
                resolve(input);
            });
        });
    };


};