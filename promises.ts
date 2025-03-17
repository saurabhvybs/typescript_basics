// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.

const myPromise = new Promise<string>((resolve, reject) => {
    let success = true; // Simulating success or failure

    setTimeout(() => {
        if (success) {
            resolve("Promise resolved! ");
        } else {
            reject("Promise rejected! ");
        }
    }, 2000);
});

// Consuming the promise
myPromise
    .then(result => console.log(result)) // If resolved
    .catch(error => console.log(error)) // If rejected

// Promise chaining

interface User {
    id: number;
    name: string;
}

function fetchUserData(): Promise<User> {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id: 1, name: "John Doe" }), 1000);
    });
}

function fetchUserPosts(userId: number): Promise<string[]> {
    return new Promise(resolve => {
        setTimeout(() => resolve(["Post 1", "Post 2"]), 1000);
    });
}

// Chaining
fetchUserData()
    .then((user) => {
        console.log("User:", user);
        return fetchUserPosts(user.id);
    })
    .then(posts => console.log("Posts:", posts))
    .catch(error => console.log("Error:", error));

// Async/Await
async function fetch_Data() {
    try {
        let user = await fetchUserData();
        console.log("User:", user);

        let posts = await fetchUserPosts(user.id);
        console.log("Posts:", posts);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Completed!");
    }
}

fetch_Data();