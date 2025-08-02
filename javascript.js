const container = document.querySelector(".container");
const button = document.querySelector("button");


function buttonClick() {
    button.addEventListener("click", () => {
        container.replaceChildren();
        let total = +prompt("Enter size of grid: ");
        add(Math.min(total, 100));
        hover();
    }
    )
}

function add(total) {
 
    const minimum = 800/total;

    if (total) {
        for (let i = 0; i < total**2; i++) {
            let div = document.createElement("div");
            div.setAttribute("style", `flex: 1 1 ${minimum}; min-width: ${minimum}px; opacity: 0;`)
            container.appendChild(div);   
        }
        
    }
}

function hover() {
    const divs = document.querySelectorAll('.container div');
    divs.forEach(div => {
        div.addEventListener('mouseenter', () => {
            let array = randomIntegersArray();

            div.style.backgroundColor = `rgb(${array})`;
            
            let currentOpacity = parseFloat(window.getComputedStyle(div).opacity);

            let newOpacity = Math.min(currentOpacity + 0.1, 1);
            div.style.opacity = newOpacity;
        }
    )
    })

}

function randomIntegersArray() {
    let array = [0,0,0];
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 256)
    }
    return array.join(', ')
}

buttonClick();
