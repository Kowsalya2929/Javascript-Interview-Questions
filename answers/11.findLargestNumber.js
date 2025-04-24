function findLargestNum(n1,n2,n3){
    if(n1 >= n3 && n1 >= n2)
        return `${n1} is largest number`
    if(n2 >= n1 && n2 >= n3)
        return `${n2} is largest number`
    return `${n3} is largest number`
}

console.log(findLargestNum(2,12,4))        // 4 is largest number 

console.log(Math.max(2,12,4,100,12,1,90))  // 100