var request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'js/info.json');
request.onreadystatechange = function() {
  if ((request.readyState===4) && (request.status===200)) {
      var items = JSON.parse(request.responseText);

      for (key in items) {
        var output = '<div class="goods__item">' +
                        '<img class="goods__img" id="img_' + key + '" src="img/' + items[key].url_small +'.jpg" />' +
                        '<div class="goods__info">' + 
                          '<h2 class="goods__h2">' + items[key].name + '</h2>' +
                          '<div class="goods__desc">' + items[key].short_desc + '</div>' +
                        '</div>' +
                      '</div>';
        $('#goods_container').append(output);

        $('#img_' + key).bind('click', function(){
          console.log(this);
          $('#popup, #overlay').css({'opacity':'1', 'visibility':'visible'});
          var id = $(this).attr('id').charAt(4);
          var out = '<div class="more-info">' 
                    +  '<img class="more-info__img" src="img/' + items[id].url_big +'.jpg" />' +
                      '<h2 class="more-info__title">' + items[id].name + '</h2>' +
                      '<p class="more-info__desc">' + items[id].desc + '</p>' +
                    '</div>';
          $('#popup').html(out);
        });
      }
      
      }
    }
request.send(); 




function hideModalWindow(){
  $('#popup, #overlay').css({'opacity':'0', 'visibility':'hidden'});
}

$(document).ready(function (){
    $('#popup').dblclick(function (){
      hideModalWindow();
    });
});

$(document).keydown(function(eventObject){
  if( eventObject.which == 27 ){
    hideModalWindow();
  };
});






