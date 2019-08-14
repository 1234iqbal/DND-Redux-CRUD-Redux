import { dispatch } from "rxjs/internal/observable/range";

export function onDragStart(event, taskName) {
  return dispatch => {
    dispatch({
      type: "onDragStart",
      event: event,
      taskName: taskName
    });
  };

  // event.dataTransfer.setData("taskName", taskName);
}

export function onDragOver(event) {
  event.preventDefault();
}

export function onDrop(event, taskName) {
  return dispatch => {
    dispatch({
      type: "onDrop",
      event: event,
      cat: taskName
    });
  };
}
