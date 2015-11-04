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

    // SUBMIT NEW MESSAGE
    submitMessage: function () {
    var messageData = []
    $('form').on('submit', function(event) {
      event.preventDefault();
      var newMessage = {
        avatar: "http://www.fillmurray.com/200/300",
        username: "Bill Murray",
        content: $('textarea').val(),
      };
      messageData.push(newMessage);
      page.loadTemplate($('.col-md-8'), newMessage, $('#test').html());
      $('textarea').val('');

      // AJAX PUSH MESSAGE TO SERVER
      $.ajax({
        url: "http://tiny-tiny.herokuapp.com/collections/chatorex/messages",
        method: 'POST',
        data: newMessage,
        success: function() {
          console.log("SUCCESS");
        },
        failure: function () {
          console.log("FAILURE");
        }
      })
     }
    });

    // DELETE ANY MESSAGE
    deleteMessage: function () {
    $('.col-md-8').on('click', 'button[type="submit"]', function () {
      $(this).parent('li').remove();
      }
    });

  },

    // FUNCTION TO LOAD TEMPLATES
  loadTemplate: function ($el, data, tmpl) {
    var template = _.template(tmpl);
    var html = template(data);
    $el.prepend(html);
  },


    page.loginSub();

  },

  loginSub: function(){
   $(".container").on("click", "#loginSubmit", function(event){
     event.preventDefault;
     var $submitBtn = $(this);//WASNT SURE IF I NEEDED THIS
     $(".col-md-8").removeClass("hidden-class"); //REMOVES ALL HIDDEN CLASSES FROM CHATBOX
     $(".col-md-4").removeClass("hidden-class");
     $("#loginContainer").addClass("hidden-class");
     var userName = $("input[name='username']").val();//USER INPUT COLLECTION STRINGIFIED
     var userEmail = $("input[name='email']").val();
     var userAvatar = $("input[name='avatar']").val();
     userLoginAdd = new User({  //ADDING DATA TO CONSTRUCTOR
       username: userName,
       email: userEmail,
       avatar: userAvatar,
     });
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
