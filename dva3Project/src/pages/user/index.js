import React from 'react';
import { connect } from 'dva';
import { Drag } from '../../components/drag';
import ReactJson from 'react-json-view'
 
// use the component in your app!
import styles from './index.css';

class UserPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // const d = new Drag();
    // console.log(d)
    // drag()
    // d()
  }
  render() {
    const userId = this.props.match.params.userId;
    const data = {
      "a": 1,
      "b": {
        "bb": "222",
        "c": {
          "test": 23141233
        }
      }
    }
      return(
      <div>{userId}
        <div>112222221</div>
        <textarea style={{width: "500px"}} readOnly>{JSON.stringify(data, null, 4)}</textarea>
        <ReactJson src={data} />

      </div>
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
