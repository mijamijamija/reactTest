import React, { Component } from 'react'

import IHandbookContent from '/repo/ReactTest/handbooks/src/interfaces/IHandbookContent'

export class HandbookContent extends Component<{ content: IHandbookContent }> {
  render() {
    return (
      <div>
        <h3>{ this.props.content.type }</h3>
        <h1>{ this.props.content.title }</h1>
        <span>{ this.props.content.description }</span>
      </div>
    )
  }
}

export default HandbookContent
