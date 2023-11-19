import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import('preline')

import { Provider } from 'react-redux'
import {  createStore } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
//  import thunk from 'redux-thunk'


// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = createStore(rootReducer,composeWithDevTools());

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
     <Provider store={store}>
      <App />
     </Provider>
  </>,
)
