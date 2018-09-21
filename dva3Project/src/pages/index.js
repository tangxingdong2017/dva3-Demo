import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Spin } from 'antd';
import TodoList from './todolist';
import styles from './index.css';

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'home/fetch'
    })
  }
  render() {
    const { loading, userId } = this.props;
    return (
      <Spin spinning={loading.global}>
        <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        </ul>
        <Link to={`/user/${userId}`}>路由跳转11</Link>
        <TodoList />
      </div>
    </Spin>
    )
  }
}

IndexPage.propTypes = {
};

export default connect((state) => {
  const { loading } = state;
  const { userId } = state.home;
  return {
    loading,
    userId,
  }
})(IndexPage);
