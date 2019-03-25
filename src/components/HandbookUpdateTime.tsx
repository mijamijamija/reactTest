import React, { Component } from 'react'

export class HandbookUpdateTime extends Component<{lastedited: string}> {
  render() {
    return (
      <div>
        <p>{ this.props.lastedited }</p>
      </div>
    )
  }
}

export default HandbookUpdateTime
