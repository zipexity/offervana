import axios from "axios";

export default {
  signup: function(email, password) {
    return axios.post("/api/api/signup", {
      email: email,
      password: password
    });
  },
  login: function(email, password) {
    return axios.post("/api/login", {
      email: email,
      password: password
    });
  },
  isLogged: function() {
    return axios.get("/api/api/checklog");
  },
  logout: function() {
    return axios.get("/api/api/logout");
  },
  surveyReturn: function(id) {
    return axios.get("/api/viewsurveys", { params: { UserId: id } });
  },
  dashboardUserDisplay: function(id) {
    return axios.get("/api/dashboarduserreturn", { params: { UserId: id } });
  },
  userReturn: function(id) {
    return axios.get("/api/dashboard", { params: { AgentId: id } });
  },
  singleUserReturn: function() {
    return axios.get("/api/homesurvey/q45");
  },
  surveyPost: function(survey) {
    return axios.post("/api/api/surveys/:id", survey);
  },
  offerPost: function(offer) {
    return axios.post("/api/buildoffer", offer);
  },
  offerReturn: function(id) {
    return axios.get("/api/profilemain", { params: { UserId: id } });
  },
  createuser: function(
    firstname,
    lastname,
    phone,
    address,
    accountId,
    agentId
  ) {
    return axios.post("/api/createuser", {
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      address: address,
      accountId: accountId,
      agentId: agentId
    });
  },
  sendmessage: function(to, from, body, stepinProcess) {
    return axios.post("/api/multi", {
      to: to,
      from: from,
      body: body,
      stepinProcess: stepinProcess
    });
  },
  updateUser: function(update) {
    return axios.put("/api/api/updateuser", update);
  },
  updateOffer: function(update) {
    return axios.put("/api/updateoffer", update);
  },
  deleteOffer: function(id) {
    return axios.delete("/api/deleteoffer", { params: { OfferId: id } });
  },
  updateAccount: function(update) {
    return axios.put("/api/upgradeuser", update);
  },
  imageUpload: function(id) {
    return axios.post("/api/imagesupload", { params: { UserId: id } });
  },
  imageReturn: function(id) {
    return axios.get("/api/images", { params: { UserId: id } });
  },
  multiofferUserReturn: function(id) {
    return axios.get("/api/multiuser", { params: { UserId: id } });
  },
  multiofferAgentReturn: function() {
    return axios.get("/api/agent");
  },
  detailsUpgradesReturn: function(id) {
    return axios.get("/api/detailsupgrades", { params: { UserId: id } });
  },
  usermessages: function(userId) {
    return axios.get("/api/usermessages");
  },
  returnUsers: function() {
    return axios.get("/api/createagent");
  },
  returnAgents: function() {
    return axios.get("/api/agentcount");
  },
  returnAgent: function(id) {
    return axios.get("/api/findagent", id);
  },
  agentcreate: function(firstname, lastname, phone, email, accountId) {
    return axios.post("/api/agentcreate", {
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      email: email,
      accountId: accountId
    });
  },
  sendText: function(firstname, lastname, phone, agentid, message) {
    return axios.post("/api/sendtext", {
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      agentid: agentid,
      message: message
    });
  },
  autoSend: function() {
    return axios.post("/api/autosend");
  },
  listAgents: function(id) {
    return axios.get("/api/agentlist", { params: { AgentId: id } });
  }
};
