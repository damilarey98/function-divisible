function divisible(arr) {
    let data = []
    for (i = 1; i <=arr; i++){
        if((i%2===0) && (i%3===0) && (i%5===0)){
            data.push(console.log("yu-gi-oh"));
        }
        else if((i%2===0) && (i%3===0) && (i%5!==0)){
            data.push(console.log("yu-gi"));
        }
        else if((i%2===0) && (i%3!==0) && (i%5===0)){
            data.push(console.log("yu-oh"));
        }
        else if((i%2!==0) && (i%3===0) && (i%5===0)){
            data.push(console.log("gi-oh"));
        }
        else if((i%2===0) && (i%3!==0) && (i%5!==0)){
            data.push(console.log("yu"));
        }
        else if((i%2!==0) && (i%3===0) && (i%5!==0)){
            data.push(console.log("gi"));
        }
        else if((i%2!==0) && (i%3!==0) && (i%5===0)){
            data.push(console.log("oh"));
        }
        else {
            data.push(console.log(i))
        }
    }
}
divisible(100)
divisible(10)
