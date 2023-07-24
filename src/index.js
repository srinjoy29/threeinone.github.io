
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Home.jsx"
import UserManual from "./UserManual.jsx";
import ContactUs from "./ContactUs.jsx";

ReactDOM.render(
<Router>
  <Routes>
     <Route path='/' element={<App />} />
     <Route path='/' element={<Home />} />
     <Route path='/UserManual' element={<UserManual />} />
     <Route path='/ContactUs' element={<ContactUs />} />
   </Routes>
</Router> ,
document.getElementById('root')
);
