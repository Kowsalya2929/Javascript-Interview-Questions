const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('What is your first name - ',function(firstname){
    rl.question('What is your last name - ',function(lastname){
        console.log(`Welcome ${firstname} ${lastname} `)
        rl.close()
    })
})