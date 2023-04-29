import ReactDOMServer from 'react-dom/server';
import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import store from 'store/store';

export const SSRRender = (url: string | Partial<Location>) => {
  return ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>
  );
};
