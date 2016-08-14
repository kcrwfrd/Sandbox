import React from 'react'
import { connect } from 'react-redux'

const Foo = ({ foo }) => (
  <div>
    <h2>Foo Count</h2>
    <p>{foo}</p>
  </div>
)

const mapStateToProps = (state) => {
  return {
    foo: state.foo.length
  }
}

export default connect(
  mapStateToProps
)(Foo)
