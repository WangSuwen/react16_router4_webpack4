import React from 'react';
import asyncRouteList from './asyncRouteList';

/**
 * 对所有 按需加载的组件做处理
 */
export default class AsyncLoad extends React.Component {
  render() {
    const _A = asyncRouteList[this.props.compPath]
    return <_A {...this.props}/>;
  }
}