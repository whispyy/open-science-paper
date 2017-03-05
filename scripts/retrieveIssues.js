(function(){
  console.log(theme);
  if(theme == "classic")
  	$(body).load(Request.loadComment(userrepo,repo));
  if (theme == "material")
  	$(body).load(Request.loadComment2(userrepo,repo));
})();
