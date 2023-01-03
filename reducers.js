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
//console.log (colorState (color, tinkerColor))

const toDoReducer =  (state, acton) => {

};

const todo = [
    {
        activity: 'Read react',
        status: false,
        id: 1,
    },
    {
        activity: 'Practise react code',
        status: false,
        id: 2,
    },
    {
        activity: 'Read JavaScript reducer',
        status: false,
        id: 3,
    }
];
