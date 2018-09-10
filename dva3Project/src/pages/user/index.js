import React from 'react';
import { connect } from 'dva';
import styles from './index.css';

class UserPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const userId = this.props.match.params.userId;
    return(
      <div>{userId}</div>
    )
  }
}


export default connect((state) => {
  const {

  } = state.home;
  const { loading } = state;
  return {
    loading
  }
})(UserPage);
