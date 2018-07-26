import React from 'react';
import Loadable from 'react-loadable';
import Loading from '@components/loading';

export default class AsyncLoad extends React.Component {
  render() {
    console.log(this.props);
    const _AsyncLoad = Loadable({
      loader: () => import(`@components/about`),
      loading: Loading,
    });
    return <_AsyncLoad />;
  }
}