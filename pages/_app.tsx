import 'antd/dist/antd.css';
import App from 'next/app';
import { withApollo } from '../components/WithApolloClient';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default withApollo(MyApp);
