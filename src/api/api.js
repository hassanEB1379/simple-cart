export const getAllProducts = () => {
    return fetch("https://fakestoreapi.com/products").then(res => res.json());
};

// fake login http request
export const loginApi = info => {
    const loginPromise = new Promise((resolve, _) => {
        setTimeout(() => {
            resolve({ token: Math.floor(Math.random() * 1000), info });
        }, 3000);
    });

    return loginPromise;
};
