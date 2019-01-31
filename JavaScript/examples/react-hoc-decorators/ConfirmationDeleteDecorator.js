import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Popup} from '../controls/Popup.js';

export const ConfirmationDeleteDecorator = ComposedComponent => class extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
  };

  constructor() {
    super();
    this.state = {popupActive: false};
  }

  render() {
    const {onClick, children,...props} = this.props;
    const hidePopup = () => this.setState({popupActive: false});
    const popupButtons = [
      {text: 'No', onClick: hidePopup)},
      {text: 'Delete', onClick: () => {hidePopup(); onClick();}}
    ];

    return (
      <div>
        {this.state.popupActive ? (
          <div>
            <Popup buttons={popupButtons} onHide={hidePopup}>
              {children}
            </Popup>
            <ComposedComponent {...props} onClick={hidePopup} />
          </div>
        ) : (
          <ComposedComponent {...props} onClick={() => this.setState({popupActive: true})} />
        )}
      </div>
    );
  }
};

// Usage:
// const BaseInput = ConfirmationDeleteDecorator(class extends ButtonComponent { });
