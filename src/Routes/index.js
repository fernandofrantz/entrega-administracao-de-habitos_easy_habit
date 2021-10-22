import { Route, Switch } from "react-router-dom";
import { About } from "../Pages/About";
import { DetailGroup } from "../Pages/DetailGroup";
import { Group } from "../Pages/Groups";
import { Habit } from "../Pages/Habit";
import { Homepage } from "../Pages/Homepage";
import { Login } from "../Pages/Login";
import { Perfil } from "../Pages/Perfil";
import { Register } from "../Pages/Register";
import { VaiDiabo } from "../Pages/VaiDiabo";

export const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/habit">
        <Habit />
      </Route>
      <Route path="/group">
        <Group />
      </Route>

      <Route path="/group/:id">
        <DetailGroup />
      </Route>

      <Route>
        <VaiDiabo />
      </Route>

      <Route path="/perfil">
        <Perfil />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
};
