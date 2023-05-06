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

    this.getArgsOption = function(){
        
        var options = {
            _any : [],
        };

        var field = null;
        for(var n = 0 ; n < args.length ; n++){
            var a = args[n];

            if(a.indexOf("--") === 0){
                if(field){
                    options[field] = true;
                }
                field = a.substring(2);
            }
            else{
                if(!field){
                    options._any.push(a);
                    continue;
                }
                options[field] = a;
                field = null;
            }
        }

        if(field){
            options[field] = true;
        }

        return options;
    };

    this.indent = function(indent){
        _indent = indent;
        return this;
    };

    this.color = function(string, red, green, blue){
        this.out("\x1b[38;2;" + red + ";" + green + ";" + blue + "m" + string + "\x1b[39m");
        return this;
    };

    this.red = function(string){
        return this.color(string, 255, 20, 20);
    };

    this.green = function(string){
        return this.color(string, 20, 255, 20);
    };

    this.yellow = function(string){
        return this.color(string, 255,255,15);
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
            readInterface.question(getIndentSpace() + string + " :", function(input){
                readInterface.close();
                resolve(input);
            });
        });
    };


};