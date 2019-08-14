import React, { Component } from "react";
import { Card, CardContent, Grid, Divider } from "@material-ui/core";
import { connect } from "react-redux";
import { onDragStart, onDrop, onDragOver } from "./action";

class index extends Component {
  render() {
    var tasks = {
      inProgress: [],
      Done: []
    };

    const { onDrop, onDragStart, state } = this.props;

    state.tasks.forEach(task => {
      tasks[task.type].push(
        <div
          key={task.id}
          onDragStart={event => onDragStart(event, task.taskName)}
          draggable
          className="draggable"
          style={{ backgroundColor: task.bgcolor }}
        >
          <Card>
            <CardContent>{task.taskName}</CardContent>
          </Card>
        </div>
      );
    });

    return (
      <div className="drag-container">
        <center>
          <h2 className="head">To Do List Drag & Drop</h2>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div
                className="inProgress"
                onDragOver={event => onDragOver(event)}
                onDrop={event => onDrop(event, "inProgress")}
              >
                <div className="group-header" style={{ marginBottom: 20 }}>
                  <b>In Progress</b>
                </div>

                {tasks.inProgress}
              </div>
            </Grid>
            <Grid item xs={6}>
              <div
                className="droppable"
                onDragOver={event => onDragOver(event)}
                onDrop={event => onDrop(event, "Done")}
              >
                <div className="group-header" style={{ marginBottom: 20 }}>
                  <b>Done</b>
                </div>
                {tasks.Done}
              </div>
            </Grid>
          </Grid>
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.home
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDragStart: (event, taskName) => dispatch(onDragStart(event, taskName)),
    onDragOver: event => dispatch(onDragOver(event)),
    onDrop: (event, cat) => dispatch(onDrop(event, cat))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
