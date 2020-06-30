import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import UsersContainer from "./components/Users/UsersContainer";
import { Route, BrowserRouter } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app_wrapper container">
        <HeaderContainer />
        <Sidebar />
        <div className="app_content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <Dialogs />} />
          <Route path="/users" render={() => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
