import React, { useState, useEffect } from "react";

const StatusWithHooks = (props) => {
  let [isInEditMode, setIsInEditode] = useState(false);
  let [statusText, setStatusText] = useState(props.userStatus);

  useEffect(() => {
    setStatusText(props.userStatus);
  }, [props.userStatus]);

  const onStatusChange = (e) => {
    setStatusText(e.target.value);
  };

  const toggleEditMode = (e) => {
    setIsInEditode(!isInEditMode);

    if (isInEditMode) {
      props.updateStatus(e.target.value);
    }
  };

  return (
    <div className="status">
      {isInEditMode ? (
        <input
          onChange={onStatusChange}
          autoFocus={true}
          onBlur={toggleEditMode}
          value={statusText}
        />
      ) : (
        <span onClick={toggleEditMode}>{props.userStatus || "No status."}</span>
      )}
    </div>
  );
};

export default StatusWithHooks;
