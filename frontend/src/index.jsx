import ReactDOM from "react-dom/client";
import {Provider} from 'react-redux'
import { createStore,compose,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import App from "./App";
import './index.css'
import reducers from "./reducers";
const store = createStore(reducers,compose(applyMiddleware(thunk)))
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App/>
    </Provider>
)