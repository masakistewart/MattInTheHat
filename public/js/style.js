$(document).ready(function(){
 $('.parallax').parallax();
 SC.initialize({
    client_id: 'dabf914acbf33b065ea1a28fd92fc296',
    redirect_uri: 'http://localhost:8000'
  });

 SC.get('users/14978515').then(function(data) {
 	console.log(data);
 })

 SC.oEmbed('http://soundcloud.com/m_i_t_h', {element: document.getElementById('sound')})
});