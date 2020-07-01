import React from "react";

class Status extends React.Component {
  state = {
    isInEditMode: false,
    statusText: "",
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
          <span onClick={this.toggleEditMode}>
            {this.props.userStatus || "No status."}
          </span>
        )}
      </div>
    );
  }
}

export default Status;
