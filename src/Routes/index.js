import { Route, Switch } from "react-router-dom";
import { DetailGroup } from "../Pages/DetailGroup";
import { Group } from "../Pages/Groups";
import { Habit } from "../Pages/Habit";
import { Homepage } from "../Pages/Homepage";
import { Login } from "../Pages/Login";
import { Perfil } from "../Pages/Perfil";
import { Register } from "../Pages/Register";

export const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
        <div></div>
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/habit">
        <Habit />
      </Route>
      <Route exact path="/group">
        <Group />
      </Route>
      <Route exact path="/group/:id">
        {/* <DetailGroup /> */}
      </Route>
      <Route exact path="/perfil">
        {/* <Perfil /> */}
      </Route>
    </Switch>
  );
};
