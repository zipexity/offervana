import React from "react";
import PostSurvey from "./Pages/PostSurvey/PostSurvey";
import faq from "./Pages/FAQ/FAQ";
import About from "./Pages/AboutUs/AboutUs.jsx";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import LogoutPage from "./Pages/LogoutPage/LogoutPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import BuildOffer from "./Pages/BuildOffer/BuildOffer";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProfileMain from "./Pages/ProfileMain/ProfileMain";
import CreateUser from "./Pages/CreateUser/CreateUser";
import ViewSurvey from "./Pages/ViewSurvey/ViewSurvey";
import ImageTest from "./Pages/ImageTest/ImageTest";
import ImagePost from "./Pages/ImagePost/ImagePost";
import Multioffer from "./Pages/Multioffer/Multioffer";
import SurveyHome from "./Pages/SurveyPages/SurveyHome";
import BackLandScape from "./Pages/SurveyPages/BackLandScape";
import BathRemod from "./Pages/SurveyPages/BathRemod";
import Builder from "./Pages/SurveyPages/Builder";
import CloseTime from "./Pages/SurveyPages/CloseTime";
import KtApplyReplace from "./Pages/SurveyPages/KtApplyReplace";
import CounterType from "./Pages/SurveyPages/CounterType";
import ExtraKt from "./Pages/SurveyPages/ExtraKt";
import ExtraMBath from "./Pages/SurveyPages/ExtraMBath";
import ExtraRoom from "./Pages/SurveyPages/ExtraRoom";
import ExtraYard from "./Pages/SurveyPages/ExtraYard";
import Facade from "./Pages/SurveyPages/Facade";
import Fence from "./Pages/SurveyPages/Fence";
import FloorType from "./Pages/SurveyPages/FloorType";
import FloorDamage from "./Pages/SurveyPages/FloorDamage";
import FloorLocation from "./Pages/SurveyPages/FloorLocation";
import FrontLandScape from "./Pages/SurveyPages/FrontLandScape";
import HomeExtras from "./Pages/SurveyPages/HomeExtras";
import HomeListed from "./Pages/SurveyPages/HomeListed";
import HowFindUs from "./Pages/SurveyPages/HowFindUs";
import IntPaintCond from "./Pages/SurveyPages/IntPaintCond";
import KtApply from "./Pages/SurveyPages/KtApply";
import HomeIssues from "./Pages/SurveyPages/HomeIssues";
import KtCondition from "./Pages/SurveyPages/KtCondition";
import KtRemod from "./Pages/SurveyPages/KtRemod";
import SolarChemFound from "./Pages/SurveyPages/SolarChemFound";
import TaxRecordInfo from "./Pages/SurveyPages/TaxRecordInfo";
import WallColor from "./Pages/SurveyPages/WallColor";
import HomeRating from "./Pages/SurveyPages/HomeRating";
import WasteWellAC from "./Pages/SurveyPages/WasteWellAC";
import FullRepaint from "./Pages/SurveyPages/FullRepaint";
import MainFloorReplace from "./Pages/SurveyPages/MainFloorReplace";
import MBathCondition from "./Pages/SurveyPages/MBathCondition";
import Pool from "./Pages/SurveyPages/Pool";
import NeighborHoodExt from "./Pages/SurveyPages/NeighborHoodExt";
import OwnerAgent from "./Pages/SurveyPages/OwnerAgent";
import PowerLines from "./Pages/SurveyPages/PowerLines";
import RoofType from "./Pages/SurveyPages/RoofType";
import { Router, Route, Switch } from "react-router-dom";
import DetailsUpgrades from "./Pages/DetailsUpgrades/DetailsUpgrades";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import EstSales from "./Pages/EstSales/EstSales";
import iBuyEstSales from "./Pages/iBuyEstSales/iBuyEstSales";
import BuildComparables from "./Pages/BuildComparables/BuildComparables";
import iBuyBuildComparables from "./Pages/iBuyBuildComparables/iBuyBuildComparables";
import AgentOffer from "./Pages/AgentOffer/AgentOffer";
import CreateAgent from "./Pages/CreateAgent/CreateAgent";
import UpgradeUser from "./Pages/UpgradeUser/UpgradesUser";
import MarketTrends from "./Pages/MarketTrends/MarketTrends";
import BuildMarketTrends from "./Pages/BuildMarketTrends/BuildMarketTrends";
import UserConcerns from "./Pages/SurveyPages/UserConcerns";
import Contract from "./Pages/Contract/Contract";
import { createBrowserHistory } from "history";
import "../src/Pages/HomePage/homepage.css";
// import "./App.css";

// const loader = document.querySelector(".loader");

// if you want to show the loader when React loads data again
// const showLoader = () => loader.classList.remove("loader--hide");

// const hideLoader = () => loader.classList.add("loader--hide");

const history = createBrowserHistory();

class App extends React.Component {
  // componentDidMount() {
  //   this.props.hideLoader();
  // }

  render() {
    return (
      <Router history={history}>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/images" component={ImageTest} />
            <Route exact path="/api/images" component={ImagePost} />
            <Route exact path="/api/surveys/:id" component={PostSurvey} />
            <Route exact path="/viewsurveys" component={ViewSurvey} />
            <Route exact path="/createuser" component={CreateUser} />
            <Route exact path="/createagent" component={CreateAgent} />
            <Route exact path="/upgradeuser" component={UpgradeUser} />
            <Route exact path="/faq" component={faq} />
            <Route exact path="/profilemain" component={ProfileMain} />
            <Route exact path="/estsales" component={EstSales} />
            <Route exact path="/ibuyestsales" component={iBuyEstSales} />
            <Route exact path="/detailsupgrades" component={DetailsUpgrades} />
            <Route exact path="/agentoffer" component={AgentOffer} />
            <Route exact path="/buildoffer" component={BuildOffer} />
            <Route
              exact
              path="/buildcomparables"
              component={BuildComparables}
            />
            <Route
              exact
              path="/ibuybuildcomparables"
              component={iBuyBuildComparables}
            />
            <Route
              exact
              path="/buildmarkettrends"
              component={BuildMarketTrends}
            />
            <Route exact path="/markettrends" component={MarketTrends} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile/:id" component={ProfilePage} />
            <Route exact path="/api/signup" component={SignUpPage} />
            <Route exact path="/api/login" component={LoginPage} />
            <Route exact path="/api/logout" component={LogoutPage} />
            <Route exact path="/multi" component={Multioffer} />

            <Route exact path="/abouthome" component={SurveyHome} />
            <Route exact path="/homesurvey/q1" component={TaxRecordInfo} />
            <Route exact path="/homesurvey/q2" component={NeighborHoodExt} />
            <Route exact path="/homesurvey/q3" component={WasteWellAC} />
            <Route exact path="/homesurvey/q4" component={ExtraRoom} />
            <Route exact path="/homesurvey/q5" component={SolarChemFound} />

            <Route exact path="/homesurvey/q6" component={KtRemod} />
            <Route exact path="/homesurvey/q7" component={CounterType} />
            <Route exact path="/homesurvey/q8" component={KtApply} />
            <Route exact path="/homesurvey/q9" component={KtApplyReplace} />
            <Route exact path="/homesurvey/q10" component={ExtraKt} />
            <Route exact path="/homesurvey/q11" component={KtCondition} />

            <Route exact path="/homesurvey/q12" component={BathRemod} />
            <Route exact path="/homesurvey/q13" component={ExtraMBath} />
            <Route exact path="/homesurvey/q14" component={MBathCondition} />

            <Route exact path="/homesurvey/q15" component={FrontLandScape} />
            <Route exact path="/homesurvey/q16" component={BackLandScape} />
            <Route exact path="/homesurvey/q17" component={Fence} />
            <Route exact path="/homesurvey/q18" component={PowerLines} />
            <Route exact path="/homesurvey/q19" component={ExtraYard} />
            <Route exact path="/homesurvey/q20" component={Pool} />

            <Route exact path="/homesurvey/q21" component={FullRepaint} />

            <Route exact path="/homesurvey/q22" component={IntPaintCond} />
            <Route exact path="/homesurvey/q23" component={WallColor} />

            <Route exact path="/homesurvey/q24" component={MainFloorReplace} />

            <Route exact path="/homesurvey/q25" component={FloorType} />
            <Route exact path="/homesurvey/q26" component={FloorDamage} />
            <Route exact path="/homesurvey/q27" component={FloorLocation} />
            <Route exact path="/homesurvey/q28" component={Facade} />
            <Route exact path="/homesurvey/q29" component={HomeExtras} />
            <Route exact path="/homesurvey/q30" component={RoofType} />
            <Route exact path="/homesurvey/q31" component={HomeIssues} />

            <Route exact path="/homesurvey/q32" component={HomeListed} />
            <Route exact path="/homesurvey/q33" component={OwnerAgent} />
            <Route exact path="/homesurvey/q34" component={HomeRating} />
            <Route exact path="/homesurvey/q35" component={Builder} />
            <Route exact path="/homesurvey/q36" component={CloseTime} />
            <Route exact path="/homesurvey/q37" component={UserConcerns} />
            <Route exact path="/homesurvey/q38" component={HowFindUs} />
            <Route exact path="/contract" component={Contract} />
            <Route path="/aboutUs" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  // hideLoader={hideLoader} showLoader={showLoader}
  <App />,
  document.getElementById("root")
);
serviceWorker.unregister();
