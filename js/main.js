$(document).ready(function () {
  page.init();
});

var page = {

  url: "http://tiny-tiny.herokuapp.com/collections/chatorex",

  init: function () {
    page.initStyling();
    page.initEvents();
  },

  initStyling: function () {

  },

  initEvents: function () {
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
    });

    $('li').on('click', 'button', function () {

    })

  },

  loadTemplate: function ($el, data, tmpl) {
    var template = _.template(tmpl);
    var html = template(data);
    $el.prepend(html);
  },

  deleteMessage: function () {
    
  }


};
