( function( $ ) {

    $.fn.spanLetters = function() {

        // Loop through each element on which this function has been called
        this.each( function() {   
            
            // Scope the variables
            var words, i, text;
          
            // Make an array with each letter of the string as a value
            words = $( this ).text().split( '' );

            // Loop through the letters and wrap each one in a span
            for ( i = 0; i in words; i++ ) {
                words[i] = '<span class="sl' + ( i + 1 ) + ' span-letter">' + words[i] + '</span>'
            };

            // Join our array of span-wrapped letters back into a string
            text = words.join( '' );

            // Replace the original string with the new string
            $( this ).html( text );
        })
    }
}( jQuery ));

// Call spanLetters on our target
$( ".container" ).spanLetters();

targets = $( ".container span" ); // Select our spans
duration = 400; // Set duration of the effect here
speed = 100; // Set animation speed through the letters here
infiniteLoop = false // Set whether animation should keep triggering

// Add the animation class to the letter, then remove it later
function animateLetter( value ) {

  if ( turnedOn ) {
  
    $( value ).addClass( "active" );

    setTimeout( function() {

      stopAnimateLetter( value );  

    }, duration );
    
  }
  
};

// Remove the animation class from the letter
function stopAnimateLetter( value ) {

  $( value ).removeClass( "active" );
  
};

// Trigger function
function startEverything() {
  
  // Loop through our collection of spans
  targets.each( function( index, value ) {

    // Sequentially delay the firing of the animation through the letters
    timer = setTimeout( function() {

      animateLetter( value );

    }, speed*index );

  });    
  
  // No looping if trigger was a click
  if ( clicked ) {
    
    clicked = false; 
    
  } else {
    
    // Logic for infinite loop
    if ( infiniteLoop ) { // If looping is on
      if ( turnedOn ) { // If animation is still happening
        setTimeout( function() {

          startEverything();  

        }, i*speed );
      }  
    }
    
  }
  
}

// Kill everything function
function stopEverything() {
  
  clearTimeout( timer );
  
  turnedOn = false;
  
  // Delay the kill just a bit
  setTimeout( function() {

    targets.each( function( index, value ) {

      stopAnimateLetter( value );

    });

  }, 200 );
  
}

// Hover trigger logic
$( ".container" )
    .mouseenter( function() {
  
        turnedOn = true;
        clicked = false;
  
        startEverything();
        
    })
    .mouseleave( function() {
  
        stopEverything();

    });

// Aparecer projectos Javascript
$("#js-logo").mouseover( function() {
  $("#main-head").addClass("getdown");

  $("#projects-java").hide(460);
  $("#projects-react").hide(460);
  $("#projects-js").show(860);
})

// Aparecer projectos React
$("#react-logo").mouseover( function() {
  $("#main-head").addClass("getdown");

  $("#projects-java").hide(460);
  $("#projects-js").hide(460);
  $("#projects-react").show(860);
})

// Aparecer projectos Java
$("#java-logo").mouseover( function() {
  $("#main-head").addClass("getdown");

  $("#projects-js").hide(460);
  $("#projects-react").hide(460);
  $("#projects-java").show(860);
})