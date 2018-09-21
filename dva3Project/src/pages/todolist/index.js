import React from 'react';

import styles from './index.less';

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    handelChange = (e) => {
        const { list } = this.state;
        e.persist();
        // console.log(e.charCode, e.target.value)
        if (e.charCode === 13) {
            list.push({
                content: e.target.value,
                done: false,
            })
            this.setState({
                list        
            })
        }
    }
    handleClick = (e) => {
        const { list } = this.state;
        e.persist();
        this.state.list.map(item => {
            if (item.content === e.target.textContent) {
                item.done = true;
            }
            return item;
        })
        this.setState({
            list
        })
    }
    render() {
        const { list } = this.state;
        return (
            <div>
                <input onKeyPress = { (e) => this.handelChange(e) }/>
                <ul>
                    {
                        Array.isArray(list) && list.map((item, index) => {
                            console.log(item)
                            return (
                                <li key={index.toString()} onClick={ (e) => this.handleClick(e) } className={item.done ? 'done' : 'notdone'}>{item.content}</li>
                            )
                        })
                    }
                </ul>
                <div>totle: {this.state.list.length}</div>
                <div>已完成的: {(this.state.list.filter(item => item.done)).length}</div>
                <div>未完成的: {(this.state.list.filter(item => !item.done)).length}</div>
            </div>
        )
    }
}
export default TodoList;