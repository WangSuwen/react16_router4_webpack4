import React from "react";
import PropTypes from 'prop-types';

export default class TodoList extends React.Component{
  constructor(props) {
    super(props);
    this.state = { value: props.defaultMsgFromContainer }
  }
  static propTypes = {
    clearMsg: PropTypes.func,
    inputChange: PropTypes.func,
    defaultMsgFromContainer: PropTypes.string
  };
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
