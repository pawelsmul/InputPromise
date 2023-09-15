document.getElementById("createPromise").addEventListener("click", function () {
    const numberInput = parseInt(document.getElementById("numberInput").value);

    const promise = new Promise((resolve, reject) => {
        if (isNaN(numberInput)) {
            reject("Input is not a number");
        } else if (numberInput < 0) {            // numberInput negative
            setTimeout(() => {
                resolve("Promise rejected after 2 seconds");
            }, 2000);
        } else if (numberInput % 2 !== 0) {      // numberInput odd
            setTimeout(() => {
                resolve("Promise resolved after 5 seconds");
            }, 5000);
        } else if (numberInput % 2 === 0) {      // numberInput even
            setTimeout(() => {
                resolve("Promise resolved after 10 seconds");
            }, 10000);
        }
    });

    promise.then((message) => {
        const promiseContainer = document.getElementById("promiseContainer");
        const pElement = document.createElement("p");
        pElement.innerText = `Promise: ${numberInput} - ${message}`;
        promiseContainer.appendChild(pElement);

        pElement.classList.add("resolved");

        setTimeout(() => {
            promiseContainer.removeChild(pElement);
        }, 1000);
    })
        .catch((error) => {
            const promiseContainer = document.getElementById("promiseContainer");
            const pElement = document.createElement("p");
            pElement.innerText = `Promise: ${numberInput} - ${error}`;
            promiseContainer.appendChild(pElement);

            pElement.classList.add("rejected");
        });
});