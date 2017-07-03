import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// Components
import Notifications from 'react-notification-system-redux';
// Styles

const style = {
  NotificationItem: { // Override the notification item
    DefaultStyle: { // Applied to every notification, regardless of the notification level
      margin: '10px 5px 2px 1px'
    }
  }
};

class NotificationsContainer extends Component {
  render() {
    return (
      <Notifications
        notifications={this.props.notifications}
        style={style}
      />
    );
  }
}

NotificationsContainer.propTypes = {
    notifications: PropTypes.array
  };

const mapStateToProps = (state) => ({
  notifications: state.notifications
});

export default connect(mapStateToProps)(NotificationsContainer);
