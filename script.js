let arr = [];

function generateBars(){

    const input =
    document.getElementById("numbers").value;

    arr = input.split(",").map(Number);

    displayBars(arr);
}

function displayBars(array){

    const container =
    document.getElementById("array-container");

    container.innerHTML = "";

    array.forEach(value => {

        const bar = document.createElement("div");

        bar.classList.add("bar");

        bar.style.height = value * 3 + "px";

        bar.innerHTML = value;

        container.appendChild(bar);
    });
}

async function insertionSort(){

    const bars =
    document.getElementsByClassName("bar");

    for(let i=1;i<arr.length;i++){

        let key = arr[i];

        let j = i - 1;

        bars[i].style.background = "red";

        await sleep(700);

        while(j >= 0 && arr[j] > key){

            bars[j].style.background = "yellow";

            await sleep(700);

            arr[j+1] = arr[j];

            bars[j+1].style.height =
            arr[j] * 3 + "px";

            bars[j+1].innerHTML = arr[j];

            j--;

            await sleep(700);
        }

        arr[j+1] = key;

        bars[j+1].style.height =
        key * 3 + "px";

        bars[j+1].innerHTML = key;

        for(let k=0;k<bars.length;k++){

            bars[k].style.background = "cyan";
        }
    }

    document.getElementById("result").innerHTML =
    "Array Sorted Successfully!";
}

function sleep(ms){

    return new Promise(resolve =>
    setTimeout(resolve,ms));
}
