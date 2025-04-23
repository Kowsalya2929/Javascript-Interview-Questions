function getRandomNum (){
    return Math.random()*10 // 0 to 9
}

for(let i = 0;i<5;i++){
    console.log(getRandomNum())
}

//Math.random() =>  0 to 1 
//Math.ceil() => rounded up
//Math.floor() => rounded down