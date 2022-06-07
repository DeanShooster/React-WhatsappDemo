import { Fragment, Suspense } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Chatroom from "./components/chatroom/Chatroom";
import UserContextProvider from './components/context/UserContextProvider';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <UserContextProvider>
          <Suspense fallback={ <div>Loading...</div> }>
              <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/chatroom' element={<Chatroom />}/>
              </Routes>
          </Suspense>
        </UserContextProvider>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
