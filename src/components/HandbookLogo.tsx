import React, { Component } from 'react'

export class HandbookLogo extends Component<{ logo: string}> {
  render() {
    return (
      <div>
        <img src = { this.props.logo } alt="logo" />
      </div>
    )
  }
}

export default HandbookLogo
