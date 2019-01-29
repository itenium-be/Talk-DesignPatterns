import React, { Component } from 'react';


export class Secret extends Component {
  render() {
    const {config} = this.props;
    return (
      <div>
        <label>
          {config.label}
          <input type="password" placeholder={config.placeholder} />
        </label>
      </div>
    );
  }
}

export class Toggle extends Component {
  render() {
    const {config} = this.props;
    return (
      <div>
        <input type="checkbox" />
        <label>{config.label}</label>
      </div>
    );
  }
}


export class Submit extends Component {
  render() {
    const {config} = this.props;
    return (
      <button type="submit" className="success button">{config.label}</button>
    );
  }
}


export class Email extends Component {
  render() {
    const {config} = this.props;
    return (
      <>
        <label>
          {config.label}
          <input type="email" className="form-control" placeholder={config.placeholder} />
        </label>
        <p className="help-text">{config.hint}</p>
      </>
    );
  }
}
