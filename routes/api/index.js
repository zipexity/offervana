const router = require("express").Router();

const checkLog = require("./account/checkLog");
const listnonAgents = require("./account/listnonAgents");
const listAgents = require("./account/listAgents");
const login = require("./account/login");
const logout = require("./account/logout");
const signUp = require("./account/signUp");

const agentCreate = require("./agent/agentCreate");
const dashboard = require("./agent/dashboard");
const findAgent = require("./agent/findAgent");
const upgradeAgent = require("./agent/upgradeAgent");
const agentList = require("./agent/agentList");

const uploadImages = require("./cloudinary/uploadImages");
const viewImages = require("./cloudinary/viewImages");

const sendEmail = require("./email/sendEmail");

const agentViewMessages = require("./messages/agentViewMessages");
const sendMessage = require("./messages/sendMessage");
const userViewMessages = require("./messages/userViewMessages");

const buildOffer = require("./offers/buildOffer");
const viewOffer = require("./offers/viewOffer");
const updateOffer = require("./offers/updateOffer");
const deleteOffer = require("./offers/deleteOffer");

const agentSurveyView = require("./survey/agentSurveyView");
const postSurvey = require("./survey/postSurvey");
const userSurveyDetails = require("./survey/userSurveyDetails");

const createUser = require("./user/createUser");
const returnUser = require("./user/returnUser");
const returnUserAgent = require("./user/returnUserAgent");
const updateUser = require("./user/updateUser");
const dashboardUserDisplay = require("./user/dashboardUserDisplay");

const sendText = require("./Sms/sendText");
const autoSend = require("./Sms/autoSend");

router.use("/sendtext", sendText);
router.use("/autosend", autoSend);

router.use("/api/checklog", checkLog);
router.use("/createagent", listnonAgents);
router.use("/agentcount", listAgents);
router.use("/login", login);
router.use("/api/logout", logout);
router.use("/api/signup", signUp);

router.use("/agentcreate", agentCreate);
router.use("/dashboard", dashboard);
router.use("/findagent", findAgent);
router.use("/upgradeuser", upgradeAgent);
router.use("/agentlist", agentList);

router.use("/imagesupload", uploadImages);
router.use("/images", viewImages);

router.use("/api/send", sendEmail);

router.use("/adminmessages", agentViewMessages);
router.use("/multi", sendMessage);
router.use("/usermessages", userViewMessages);

router.use("/buildoffer", buildOffer);
router.use("/profilemain", viewOffer);
router.use("/updateoffer", updateOffer);
router.use("/deleteoffer", deleteOffer);

router.use("/viewsurveys", agentSurveyView);
router.use("/api/surveys/:id", postSurvey);
router.use("/detailsupgrades", userSurveyDetails);

router.use("/createuser", createUser);
router.use("/dashboarduserreturn", dashboardUserDisplay);
router.use("/homesurvey/q45", returnUser);
router.use("/multiuser", returnUserAgent);
router.use("/api/updateuser", updateUser);

module.exports = router;
