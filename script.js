const shapeContainer = document.getElementById('circle')
// const shapeElement = document.getElementById('square');
const shapeElement = document.querySelector('#shape');
const changeColorBtn = document.getElementById('colorChange');

const shapeChangeBtn = document.querySelector('#shapeChange');
console.log(shapeChangeBtn)

// Random color generator function
function randomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}
// add event listner to change color

changeColorBtn.addEventListener('click', function(){
    const newColor = randomColor();
    shapeContainer.style.backgroundColor = newColor;
});

// Array of shapes to cycle through
const shapes = ['inner-square','circle', 'triangle', 'oval', 'rectangle','diamond','heart','star','octagon',
    'parallelogram','crescent','trapezoid',
];
let index = 0;

// Function to change shape
shapeChangeBtn.addEventListener('click', function () {
       console.log(index);
        if (shapeElement.classList.contains(shapes[index])) {
            shapeElement.classList.remove(shapes[index]);
        }
        // Increment the index, but keep it within the bounds of the shapes array
        index = (index + 1) % shapes.length;

        // Add the new shape class
        shapeElement.classList.add(shapes[index]);
});