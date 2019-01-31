import React from 'react';
import {FormGroup, ControlLabel} from 'react-bootstrap';

export const WithInputLabelDecorator = ComposedComponent => ({label, ...props}) => {
  if (label) {
    return (
      <FormGroup>
        <ControlLabel>{label}</ControlLabel>
        <ComposedComponent {...props} />
      </FormGroup>
    );
  }
  return <ComposedComponent {...props} />;
};

// Usage:
// const BaseInput = WithInputLabelDecorator(class extends Component { });
