const colorState = (color, action) =>{
    switch (action.type) {
        case 'danger':
            return 'red';
            break;
        case 'success':
            return 'green';
            break;
        default:
            return 'blue';
            break;
    }
};

const color = 'green';
const tinkerColor = {
    type: 'success',
}
console.log (colorState (color, tinkerColor))