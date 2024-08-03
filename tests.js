const { exec } = require('node:child_process');

const p = exec('ollama ls && exit');

p.stdout.on('data', data => {
    process.stdout.write(data)
})
process.stdin.on("data", data => {
    data = data.toString().toUpperCase()
    process.stdout.write(data)
})