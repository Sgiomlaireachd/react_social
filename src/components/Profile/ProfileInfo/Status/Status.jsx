import React from "react";
import "./Status.css";

class Status extends React.Component {
  state = {
    isInEditMode: false,
    statusText: this.props.userStatus,
  };

  toggleEditMode = (e) => {
    this.setState({
      isInEditMode: !this.state.isInEditMode,
    });

    if (this.state.isInEditMode) {
      this.props.updateStatus(e.target.value);
    }
  };

  onStatusChange = (e) => {
    this.setState({
      statusText: e.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.userStatus !== prevProps.userStatus) {
      this.setState({
        statusText: this.props.userStatus,
      });
    }
  }

  render() {
    return (
      <div className="status">
        {this.state.isInEditMode ? (
          <input
            onChange={this.onStatusChange}
            autoFocus={true}
            onBlur={this.toggleEditMode}
            value={this.state.statusText}
          />
        ) : (
          <span onClick={this.toggleEditMode} className="status__text">
            {this.props.userStatus || "No status."}
          </span>
        )}
      </div>
    );
  }
}

export default Status;
