import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Ads from "./pages/Ads";
import Home from "./pages/Home";
import Ad from "./pages/id/Ad";
import FavouriteAds from "./pages/id/FavouriteAds";
import MyAds from "./pages/id/MyAds";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ad/:id" element={<Ad />} />
        <Route path="/favourites/:id" element={<FavouriteAds />} />
        <Route path="/myads/:id" element={<MyAds />} />
      </Routes>
    </Router>
  )
}

export default App