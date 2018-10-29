import React from "react";
import PropTypes from 'prop-types';

export default class TodoList extends React.Component{
  /**
   * 子组件暴露给外界的 方法
   */
  static hello () {
    return this.staticState;
  }
  static staticState = {}; // 子组件暴露给外界的 静态属性
  static propTypes = {
    clearMsg: PropTypes.func,
    inputChange: PropTypes.func,
    defaultMsgFromContainer: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.state = { value: props.defaultMsgFromContainer };
    this.constructor.staticState = this.state; // 将实例的state 赋值给 类的静态属性
    console.log('我收构建函数');
  }
  clearInput = () => {
    document.getElementById('input').value = '';
    this.setState({value: ''});
    this.props.clearMsg();
  }
  inputChangeHandler = (e) => {
    const _value = e.target.value;
    this.setState({ value: _value });
    console.log(`你输入的是：${_value}`);
    this.props.inputChange(_value);
  }
  render() {
    return (
      <div>
        <h3>我是 TodoList 的 component</h3>
        输点啥：
        <input
          id="input"
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.value}
          style={{width: 300}}
        />
        <button onClick={this.clearInput}>清空</button>
      </div>
    );
  }
};
