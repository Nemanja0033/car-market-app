import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Ads from "./pages/Ads";
import Home from "./pages/Home";
import Ad from "./pages/id/Ad";
import FavouriteAds from "./pages/id/FavouriteAds";
import MyAds from "./pages/id/MyAds";
import Login from "./pages/Login";
import Navbar from "./view/lg/Navbar";
import SmNavbar from "./view/sm/SmNavbar";
import CreateAdd from "./pages/CreateAdd";
import { useState, useEffect } from "react";
import { useAuth } from "./context/AuthContext";
import Loader from "./loaders/Loader";

const App = () => {

  const { isAuth } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const screenLoader = () => {
      setLoading(false)
    }

    setTimeout(screenLoader, 400)
  })

  if(loading){
    return(
      <Loader />
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ad/:id" element={<Ad />} />
        <Route path="/favourites/:id" element={isAuth ? <FavouriteAds /> : <Login />} />
        <Route path="/myads/:id" element={<MyAds />} />
        <Route path="/createadd" element={isAuth ? <CreateAdd /> : <Login />} />
      </Routes>
      <SmNavbar />
    </Router>
  )
}

export default App