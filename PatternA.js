const readLine = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});

readLine.question("Enter Row (min 5 and !<5) ",string=>{
    row=Number(string);

    for(let i=0;i<=row*2-1;i++){
        for(let j=0;j<=row*2;j++){
            if(i+j==row || i+row==j || (i==Math.trunc(row/2) && (i+j>row && i+row>j)))
            process.stdout.write("*");
            else
            process.stdout.write(" ");
        }
        console.log();
    }



    readLine.close();
});