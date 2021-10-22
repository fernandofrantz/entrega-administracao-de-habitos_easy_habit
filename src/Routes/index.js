import { Route, Switch } from "react-router-dom";
import DetailsGroup from "../Components/DetailsGroup";
import { About } from "../Pages/About";
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
      <Route path="/detailgroup/:id">
        <DetailGroup />
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
