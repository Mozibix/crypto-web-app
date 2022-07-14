import "./App.css";
import "./dashboardmain.scss";

import Dashboard from "./components/pages/Dashboard";
// import { DashBoardNav } from "./components/pages/DashBoardNav";
// import { DashBoardTop } from "./components/pages/DashBoardTop";
// import { CoinSec } from "./components/pages/CoinSec";
// import { MarketCapPage } from "./components/pages/MarketCapPage";
// import { Navbar } from "./components/Navbar";
// import { AddCardPage } from "./components/pages/AddCardPage";
// import { Home } from "./components/pages/Home";
// import { WalletPage } from "./components/pages/WalletPage";

const App = () => {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <WalletPage /> */}
      {/* <AddCardPage /> */}
      {/* <CoinSec /> */}
      {/* <MarketCapPage /> */}
      {/* <DashBoardNav /> */}
      {/* <DashBoardTop /> */}
      <Dashboard />
    </div>
  );
};

export default App;
