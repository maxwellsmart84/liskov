var templates = {
  sideBarUser: [
    "<li><img src='<%= avatar %>' /><h5><%= username %></h5></li>"
  ].join(""),
  message: [
    "<li><img src='<%= avatar %>' /><h3><%= username %></h3>",
<<<<<<< HEAD
    "<p><%= message %></p></li>"
  ].join(""),
  loginDisplay: [
    "<li><img src='<%= avatar %>' /><p><%= username %></p></li>"
=======
    "<p><%= content %></p>",
    "<button type='submit'>X</button></li>"
>>>>>>> 461585bd0e0d1829663dfbfa98310fedc51d2867
  ].join("")
};
