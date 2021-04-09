import React from "react";
import Header from "./Header";
import Home from "./Home";
import SuratPage from "./SuratPage";
import SurahRender from "./SurahRender";
import { Route, Switch } from "react-router-dom";
import { motion } from "framer-motion";

function MainComponent() {
  return (
    <>
      <div>
        <Switch>
          <Route path="/surat" exact component={SuratPage}></Route>
          <Route path="/surat/:id" component={SurahRender}></Route>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </div>
    </>
  );
}
export default MainComponent;
