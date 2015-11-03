var templates = {
  sideBarUser: [
    "<li><img src='<%= avatar %>' /><h5><%= username %></h5></li>"
  ].join(""),
  message: [
    "<li><img src='<%= avatar %>' /><h3><%= username %></h3>",
    "<p><%= message %></p></li>"
  ].join("")
};
