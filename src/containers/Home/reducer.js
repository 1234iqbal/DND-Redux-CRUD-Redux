const initialState = {
  tasks: [
    {
      id: "1",
      taskName: "Read book",
      type: "inProgress",
      backgroundColor: "red"
    },
    {
      id: "2",
      taskName: "Pay bills",
      type: "inProgress",
      backgroundColor: "green"
    },
    {
      id: "3",
      taskName: "Go to the gym",
      type: "Done",
      backgroundColor: "blue"
    },
    {
      id: "4",
      taskName: "Play baseball",
      type: "Done",
      backgroundColor: "green"
    }
  ]
};

function authReducer(state = initialState, action) {
  if (action.type == "onDrop") {
    const taskName = action.event.dataTransfer.getData("taskName");
    let tasks = state.tasks.filter(task => {
      if (task.taskName == taskName) {
        task.type = action.cat;
      }
      return task;
    });

    return {
      ...state,
      tasks
    };
  } else if (action.type == "onDragStart") {
    action.event.dataTransfer.setData("taskName", action.taskName);
  }
  return state;
}

export default authReducer;
