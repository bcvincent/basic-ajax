var xhr = new XMLHttpRequest(); //new XMLHttpRequest object

xhr.onload = function(){
  if(xhr.status=200){ //if okay
    responseObject = JSON.parse(xhr.responseText);

    var newContent = '';
    for (var i = 0; i< responseObject.events.length; i++){
      newContent +='<div class="event">';
      newContent +='<p><b>'+responseObject.events[i].location+'</b><br>';
      newContent += responseObject.events[i].date + '</p>';
      newContent += '</div>';
    }

  document.getElementById('content').innerHTML=newContent;
  }
};

xhr.open('GET', 'data/data.json', true); //prep
xhr.send(null); //send
