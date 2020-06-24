import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app_wrapper container">
        <Header />
        <Sidebar />
        <div className="app_content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                state={props.store.getState().profilePage}
                store={props.store}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                state={props.store.getState().dialogsPage}
                store={props.store}
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
