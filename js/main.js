$(document).ready(function () {
  page.init();
});
////////////////////////////// Global Variables ////////////////////

// index number for retrieving json objects //
// redefine this for functions //
uindex = 0;

////////////////////////////// Main Functions //////////////////////
var page = {

  url: "http://tiny-tiny.herokuapp.com/collections/chatorex",

  init: function () {
    page.initStyling();
    page.initEvents();
  },

  initStyling: function () {

  },

  initEvents: function () {

  },

  createUser: function() {

  },

  deleteUser: function() {

  },

  retrieveUser: function() {
    ///call this variable after the function runs///
    userObj = {};
    allData = [];

    $.ajax({
      url: page.url,
      method: 'GET',
      success: function(data) {
        allData = data;
        userObj = data[uindex];
      }
    });
  },

  loadSideBar: function() {
    page.retrieveUser();
    siderTempl = _.template(templates.sideBarUser);
    console.log(allData);
  },

};
