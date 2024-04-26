const abc = new Promise((resolve, reject) => {
    const x = 200;
    setTimeout(() => {
        if (x === 200) resolve('Success');
        else
            reject('Failure')
    },
        6000)
});

async function asss() {
    abc.then(res => {
        console.log(res)

        console.log("hemlooo")
        console.log("hemlooo")
        console.log("hemlooo")
        console.log("hemlooo")
        console.log("hemlooo")

    });
}

asss();
//callback -> asss)()
//abc.then(res => console.log(res)).catch(res => console.log(res + "In catch block"))
getComputedStyles
SVGFEDisplacementMapElementfse

FocusEventfse

FileSystemWritableFileStreamf

FileSystem