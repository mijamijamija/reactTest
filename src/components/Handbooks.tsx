import React, { Component } from 'react';
import HanbookItem from './HanbookItem';
import PropTypes from 'prop-types';
import IMyAppState from '/repo/ReactTest/handbooks/src/interfaces/IHandbooks'

class Handbooks extends Component<IMyAppState> {
  static propTypes: { handbooks: PropTypes.Validator<any[]>; };
 
  render() {
    const handbooks = this.props.handbooks;

    return handbooks.map((handbook) => (
        <HanbookItem key = { handbook.id } itemHandbook = { handbook } />
    ))
  }
}

Handbooks.propTypes = {
  handbooks: PropTypes.array.isRequired
}

export default Handbooks;