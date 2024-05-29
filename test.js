const x = () => Math.floor(Math.random() * 10) + 1;

let p1 = new Promise((resolve, reject) => {
    let x = 5;
    resolve(x);
})

p1.then(() => {
    console.log(ex);
})