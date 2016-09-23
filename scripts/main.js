'use strict';
//on page load the elements with the 'invis' attribute are made invisible
$(document).ready(function(){
$("div[data-vis='invis']").hide();
});

// //this is a test function
// function clicker(){
//   $('div').on('click', function(){
//     $(this).fadeOut('slow');
//   });
// };

//This function displays the contact links when clicked
function linkBar(){
  $("div[data-vis='vis']").on('click', function(){
    $(this).slideUp('slow');
    $(this).prev().slideDown('slow');
  });
};

//This function displays contact button again when clicked
function linkBarReturn(){
  $("div[data-vis='invis']").on('click', function(){
    $(this).slideUp('slow');
    $(this).next().slideDown('slow');
  });
};

//clicker();
linkBar();
linkBarReturn();
