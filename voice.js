       
/* 
   if (annyang) {
   
  
  /*  annyang.addCallback('result', function() {
    console.log('soundstart');
    $('div.move').each(function(i, obj) {
      $(this).removeClass('big-vibe' + i);
    });
  });

  annyang.addCallback('end', function() {
    console.log('ended');
    //restart();
    $('div.move').each(function(i, obj) {
      $(this).removeClass('big-vibe' + i);
      $(this).addClass('small-vibe' + i);
    });
  });

  annyang.addCallback('result', function() {
    console.log('result');
    //restart();
    $('div.move').each(function(i, obj) {
      $(this).removeClass('big-vibe' + i);
      $(this).addClass('small-vibe' + i);
    });  
  }); */
/*
  var voiceCommands = {


   
    'fondo (color) *tag': function(fondo)
      {
        var element = document.getElementById("bodys");
        element.style.backgroundColor = dict_color[fondo];

      },
  'texto *tag': function(color)
    {$('pre').css('color', dict_color[color])},
    'hola' : function() {
     alert("Holaaaaaaaaaa");
    },
    'letra *tag': function(letra)
    {
      
    txt = document.getElementById('id2');
     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
     currentSize = parseFloat(style);
     txt.style.fontSize = (letra) + 'px';
    }


  

	};
  
  	annyang.addCommands(voiceCommands);
    annyang.setLanguage('es-ES');
    annyang.addCommands(voiceCommands);
	var voicebutton = document.getElementById("voice-button");
	
	voicebutton.addEventListener("click", function ()
	{
		annyang.start();
		
	});
  	
    //annyang.start();
}




function speech(id)
{
let txt = document.getElementById(id).textContent;
let utter = new SpeechSynthesisUtterance();
utter.lang = "es-ES";
utter.text = txt;
utter.volume = 0.8;
window.speechSynthesis.getVoices()
utter.onend = function() {
	alert('Speech has finished');
}
window.speechSynthesis.speak(utter);
} */

if (annyang) {
  var voiceCommands = {
 
      'hola': function() {
        alert("Holala");
      }
   
    };
    // Add our commands to annyang

    annyang.addCommands(voiceCommands);
    annyang.setLanguage('es-ES');
	var voicebutton = document.getElementById("voice-button");
	
	voicebutton.addEventListener("click", function ()
	{
		if (annyang.isListening())
		{
			voicebutton.style.color = 'white';
			annyang.abort();
		}
		else{
			annyang.start();
			voicebutton.style.color = 'green';
		}
		
	});
}
    annyang.start();
