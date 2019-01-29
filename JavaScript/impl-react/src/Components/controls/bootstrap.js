import React, { Component } from 'react';

export class Email extends Component {
  render() {
    const {config} = this.props;
    return (
      <div className="form-group">
        <label>{config.label}</label>
        <input type="email" className="form-control" placeholder={config.placeholder} />
        <small className="form-text text-muted">{config.hint}</small>
      </div>
    );
  }
}

export class Secret extends Component {
  render() {
    const {config} = this.props;
    return (
      <div className="form-group">
        <label>{config.label}</label>
        <input type="password" className="form-control" placeholder={config.placeholder} />
      </div>
    );
  }
}

export class Toggle extends Component {
  render() {
    const {config} = this.props;
    return (
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" />
        <label className="form-check-label">{config.label}</label>
      </div>
    );
  }
}


export class Submit extends Component {
  render() {
    const {config} = this.props;
    return (
      <button type="submit" className="btn btn-primary">{config.label}</button>
    );
  }
}
