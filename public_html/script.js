('document').ready(function(){
   $('.yeah').css('background-color', 'yellow');
  
    $('#superHumans').accordion({header: "h3"});
    //$('#superHumans').css('width', '400px');
    
    //$('h3').css('background', 'cyan');
    
  $('.2').css({'visibility': 'hidden', 'position': 'absolute'});
  
    $('div:last p:nth-child(3)').css('background-color', 'pink');
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $('h1').bind('click', mouseClick);
    $('#replaceWText').css('color', 'blue');
    
    
    $('#replaceWText').bind('click', replaceWText);
   
   $('#randPara').bind('click', addAPara);
    
   $('#removePara').bind('click', removeAPara);
    
     $('#show').css('visibility', 'hidden');
    
    $('#hide').bind('click', hideThePage);
    
    $('#show').bind('click', showThePage);
});

function hideThePage(){
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage(){
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}

function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
   $('#randPara').append('<p>ADDED</p>');
}


function replaceWText(){
    //finds the element on index.html that has an ID of randPara (3)
    //replaces it with html creating an H1 that says Dany loves Twilight
    $('#randPara').html('<h1>Dany loves Twilight</h1>');
}

function mouseOverMe(){
    $("h1").html("This is easy");
}

function mouseOutMe(){
    $('h1').html('');
}

function mouseClick(){
    
    $('p').html('jadoifjadoia[dhgiuahguishfuisdshdfgiusdhfgi');
}
