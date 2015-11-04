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
    page.loginSub();

  },

  loginSub: function(){
    $(".container").on("click", "#loginSubmit", function(event){
      event.preventDefault;
      var $submitBtn = $(this);//WASNT SURE IF I NEEDED THIS
      $(".col-md-8").removeClass(hidden-class); //REMOVES ALL HIDDEN CLASSES FROM CHATBOX
      $(".col-md-4").removeClass(hidden-class);
      $(".col.md-12").addClass(hidden-class);
      var userName = $("input[name='username']").val("");//USER INPUT COLLECTION STRINGIFIED
      var userEmail = $("input[name='email']").val("");
      var userAvatar = $("input[name='avatar']").val("");
      userLoginAdd = new User { //ADDING DATA TO CONSTRUCTOR
        username: userName;
        email: userEmail;
        avatar: userAvatar;
        $.ajax({     //AJAX PUSH TO SERVER
          url: page.url,
          method:"POST",
          data: userLoginAdd,
          success: function (data){
            console.log("SUCCESS!", data);
          },
          failure: function (data) {
            console.log("FAILURE!!!");
          }
        });
      };
    });
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
