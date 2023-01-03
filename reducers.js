const colorState = (color, action) =>{
    if (action.type === 'danger') {
        return 'red';
    }
    return color;
};

const color = 'green';
const tinkerColor = {
    type: 'normal',
}
console.log (colorState (color, tinkerColor))