import React from "react";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoList from '@components/todos';
import { clearMsg, inputChange } from '@actions/todos';

class TodoContainer extends React.Component{
  constructor(props) {
    super(props);
  }
  static propTypes = {
    clearMsg: PropTypes.func,
    inputChange: PropTypes.func,
    defaultMsgFromContainer: PropTypes.string,
  };
  componentDidMount () {
    const childState = TodoList.hello();
    console.log(childState);
  }
  render(){
    const { todos, inputChange, clearMsg } = this.props;
    return (
      <div>
        <h1>我是 Container 组件</h1>
        子组件 Component 输入的值时，我可以动态获取： {todos.inputValue}
        <hr/>
        <TodoList
          defaultMsgFromContainer={todos.defaultValue}
          inputChange={inputChange}
          clearMsg={clearMsg}
        />
      </div>
    );
  }
}


const mapStateToProps = ({ todos }) => ({
  todos
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ clearMsg, inputChange }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer)