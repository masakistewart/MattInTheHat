window.fbAsyncInit = function() {
    FB.init({
      appId      : '737162956417049',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

$(document).ready(function(){
 $('.parallax').parallax();
 $(".button-collapse").sideNav();
 $('.modal-trigger').leanModal();
 SC.initialize({
    client_id: 'dabf914acbf33b065ea1a28fd92fc296',
    redirect_uri: 'http://localhost:8000'
  });

 SC.get('users/14978515').then(function(data) {
 	console.log(data);
 })

 SC.oEmbed('http://soundcloud.com/m_i_t_h', {
 	element: document.getElementById('soundCloudTarget'),
 	minwidth: "100%",
 	maxheight: "400"
 })
});