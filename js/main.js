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
    page.loginSub();
  },

  initStyling: function () {
    page.loadMessages();
  },

  initEvents: function () {
    page.submitMessage();
    page.deleteMessage();
  },

    // AJAX - LOAD OLD MESSAGES
    loadMessages: function() {
      $.ajax({
        url: "http://tiny-tiny.herokuapp.com/collections/chatorexM",
        method: 'GET',
        success: function(mData) {
          var MessageTmpl = _.template(templates.message);
          _.each(mData, function (el, idx, arr) {
            var oldMessages = {
              avatar: el.avatar,
              username: el.username,
              content: el.content,
              messageid: el._id
            };
            var html = MessageTmpl(oldMessages);
            $('.col-md-8').prepend(html);
          })
        },
        failure: function () {
          console.log("FAILURE")
        },
      })
    },

    // DOM - SUBMIT NEW MESSAGE
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
        var MessageTmpl = _.template(templates.message);
        var html = MessageTmpl(newMessage);
        $('.col-md-8').prepend(html);

      // AJAX - SUBMIT NEW MESSAGE
      $.ajax ({
        url: "http://tiny-tiny.herokuapp.com/collections/chatorexM",
        method: 'POST',
        data: newMessage,
        success: function() {
          console.log("SUCCESS");
        },
        failure: function () {
          console.log("FAILURE");
        },
      })
    });
  },

    // DOM DELETE ANY MESSAGE
    deleteEventMessage: function (event) {
      event.preventDefault();
      var messageId = $(this).closest('li').data('messageid');
      $(this).closest('li').remove();
      page.deleteMessage(messageId);
      page.loadMessages();
      page.deleteMessage();

      $('.col-md-8').on('click', 'button[type="submit"]', function () {
        $(this).parent('li').remove();
      });

      deleteMessage: function () {
      $.ajax ({
        url: "http://tiny-tiny.herokuapp.com/collections/chatorexM",
        method: 'DELETE',
        success: function (res) {
          console.log("SUCCESS"),
        },
        failure: function () {
        },
      })

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

    $.ajax({
      url: page.url,
      method: 'GET',
      success: function(data) {
        console.log(data);
        userObj = data[uindex];
      }
    });
  },

  loadSideBar: function() {
    page.retrieveUser();
    siderTempl = _.template(templates.sideBarUser);
    console.log(data);
  },

};
