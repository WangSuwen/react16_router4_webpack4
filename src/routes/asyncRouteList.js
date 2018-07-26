import Loadable from 'react-loadable';
import Loading from '@components/loading';

// 这里对需要按需加载的组件进行 loadable 处理
export default { 
    '@components/about' : Loadable({ loader: () => import('@components/about'), loading: Loading }),
    '@components/topics' : Loadable({ loader: () => import('@components/topics'), loading: Loading }),
    '@components/topics/topic' : Loadable({ loader: () => import('@components/topics/topic'), loading: Loading }),
};

