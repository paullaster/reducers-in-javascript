const colorState = (color, action) =>{
    if (action.type === 'danger') {
        return 'red';
    }
    return color;
};

const color = 'green';
const tinkerColor = {
    type: 'danger',
}
console.log (colorState (color, tinkerColor))