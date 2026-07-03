//promise example
//this is the example of promise in js which is used to handle asynchronous operations and provide a way to handle success
//and error cases in a more structured manner. It allowed us to write cleaner and more maintainable code when dealing
//with asynchronous tasks like fetchning data from an API, reading files, or performing time-consuming operations.
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched successfully" };
            resolve(data);
        }, 2000);
    }   );

fetchDataPromise()
    .then((data) => {
        console.log(data.message);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}
