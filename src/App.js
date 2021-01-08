// import "./App.css";
// import Beranda from "./Component/Class/Beranda";
// import Home from "./Component/Fungsional/Home";
// import Parent from "./Component/Class/Parent/Parent";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarComp from "./Component/Fungsional/NavbarComp/NavbarComp";
import Home from "./Component/Fungsional/Home";
import About from "./Component/Fungsional/About";
import BlogPage from "./Component/Fungsional/BlogPage";
import BlogDetail from "./Component/Fungsional/BlogDetail";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/detail/:id" component={BlogDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
