import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

// ...
import { reducer } from "./module/redux/reducer";
import saga from "./module/redux/saga";
import { composeWithDevTools } from "redux-devtools-extension";
import Home from "./module/pages/home";
import { Provider } from "react-redux";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(saga);


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
