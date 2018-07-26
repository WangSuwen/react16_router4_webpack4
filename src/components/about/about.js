import React from 'react';
import Loadable from 'react-loadable';
import Loading from '@components/loading';

const _About = Loadable({
  loader: () => import('@components/about'),
  loading: Loading,
})

export default class About extends React.Component {
  render() {
    return <_About />;
  }
}