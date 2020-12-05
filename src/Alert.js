import React from 'react';

const Alert = ()=>{
    return (
      <>
        <div className="notification">
          <h3 className="notify">Notification</h3>
          <hr />
          <div className="note">
            <h3 className="note-note">
              you currently do not have notification
            </h3>
            <p className="note-p">
              Update your category list to get notified every time you lecturer
              goes live.
            </p>
          </div>
        </div>
      </>
    );
}

export default Alert;