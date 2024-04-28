import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateCampaign from "./CreateCampaign";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Home from "./home";
import CampaignDetails from "./CampaignDetails";
import { ToastContainer } from "react-toastify";
import Auth from "./Auth";
import Register_ii from "./Register_ii";
import Profile from "./Profile";

function MainContent() {
  // <ToastContainer
  //     position="top-right"
  //     autoClose={5000}
  //     hideProgressBar={false}
  //     newestOnTop={false}
  //     closeOnClick
  //     rtl={false}
  //     pauseOnFocusLoss
  //     draggable
  //     pauseOnHover
  //     theme="light"
  // />
  // {/* Same as */ }
  // <ToastContainer />

  return (
    <div className="relative bg-gray-100 min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 fixed">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<Register_ii />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainContent;
