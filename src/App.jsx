import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Edit from "./components/Edit";
import Connections from "./components/Connections";
import Request from "./components/Request";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />}></Route>
              <Route path="/edit" element={<Edit />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/connections" element={<Connections />}></Route>
              <Route path="/request" element={<Request />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
