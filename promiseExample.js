const myFirstPromise = new Promise((resolve, reject) => {
    resolve({
        message: "Sucess!",
        food: "Cheeseburger",
        price: 10.99
    })
    reject("Failure!")
});
myFirstPromise.then((data) => console.log("yay " + data.food))



/*
  makes
  => Promise {}
yay Cheeseburger
   */