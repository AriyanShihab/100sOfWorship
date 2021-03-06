const count = document.getElementById(`counter1`);
const count2 = document.getElementById(`counter2`);
const count3 = document.getElementById(`counter3`);
const controlSpeed = document.getElementById(`speedControler`);
const controlSpeed2 = document.getElementById(`speedControler2`);
const btn = document.getElementById(`btn`);
const txt = document.getElementById(`text`);
const t1 = document.querySelector(`.t1`);
const t2 = document.querySelector(`.t2`);
const t3 = document.querySelector(`.t3`);
const popupButton = document.getElementsByClassName(`popup-colse-button`).value;
console.log(controlSpeed);

// pop up function
function showPopup() {
    popup.style.transform = "scale(1)";
}
// pop up close
function closePopup() {
    popup.style.transform = "scale(0)";
}
// relod on click function

function relodWindow() {
    closePopup();
    location.reload();
}

// =======================================

// `timer` accepts a count, and the element
// to apply the count to
function timer(count, el) {
    // Return a promise that basically says:
    // once I'm done doing this work, resolve,
    // and then the event queue can
    // get on with the next thing
    return new Promise((resolve) => {
        // So we create a loop that logs the numbers
        // in our element up to the count we specified.
        // and when that number is reached, resolve the promise
        function loop(n = 0) {
            // If our current `n` value is <= count
            if (n <= count) {
                // Set the content of the element
                el.textContent = n;

                // Call `loop` again after a second
                // with an incremented `n` value
                setTimeout(loop, 1000, ++n);

                // Otherwise resolve the promise
            } else {
                resolve();
            }
        }

        loop();
    });
}

async function main() {
    await timer(33, count);
    await timer(33, count2);
    await timer(34, count3);
    showPopup();
}

main();