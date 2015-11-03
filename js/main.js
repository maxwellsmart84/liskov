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

  loadSideBar: function() {
    
  },

  createUser: function() {

  },

  deleteUser: function() {

  },

  retrieveUser: function() {
    ///call this variable after the function runs///
    userObj = {};

    $.ajax({
      url: page.url,
      method: 'GET',
      success: function(data) {
        userObj = data[uindex];
      }
    });
  }

};
