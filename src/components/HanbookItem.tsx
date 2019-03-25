import React, { Component } from 'react'
import HandbookContent from './HandbookContent';
import HandbookUpdateTime from './HandbookUpdateTime';
import HandbookLogo from './HandbookLogo';

import IHandbook from '/repo/ReactTest/handbooks/src/interfaces/IHandbook'

export class HanbookItem extends Component<{ itemHandbook: IHandbook }> {
  render() {
    return (
    <div>
        <HandbookLogo logo = { this.props.itemHandbook.logo } />
        <HandbookContent content = { this.props.itemHandbook.content } />   
        <HandbookUpdateTime lastedited = { this.props.itemHandbook.lastedited } />
    </div>
    )
  }
}

export default HanbookItem
