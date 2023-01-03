const colorState = (color, action) => {
  switch (action.type) {
    case "danger":
      return "red";
      break;
    case "success":
      return "green";
      break;
    default:
      return "blue";
      break;
  }
};

const color = "green";
const tinkerColor = {
  type: "success"
};
//console.log (colorState (color, tinkerColor))

const toDoReducer = (state, action) => {
  switch (action.type) {
    case "DONE":
      state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...state,
            status: true,
          };
        }
      });
      return state;
      break;
    case "NOT_DONE":
      state.map(item => {
        if (
            item.id === action.payload.id
        ){
            return item = {
                ...item,
                status: false
            };
        };
      });
      return state;
      break;
    default:
        return  new Error;
  }
};

const todo = [
  {
    activity: "Read react",
    status: false,
    id: 1
  },
  {
    activity: "Practise react code",
    status: false,
    id: 2
  },
  {
    activity: "Read JavaScript reducer",
    status: false,
    id: 3
  }
];

const todoUpdater = {
    type: 'DONE',
    payload: {
        id: 1,
    }
}

console.log (toDoReducer (todo, todoUpdater));