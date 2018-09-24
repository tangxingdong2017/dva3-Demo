import React from 'react';
import { connect } from 'dva';
import { Drag } from '../../components/drag';
import styles from './index.css';

class UserPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const d = new Drag();
    console.log(d)
    // drag()
    // d()
  }
  render() {
    const userId = this.props.match.params.userId;
    return(
      <div>{userId}<div>112222221</div></div>
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
