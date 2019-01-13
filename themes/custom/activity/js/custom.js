/**
 * @file
 * Custom javascript file.
 */

(function($, Drupal) {
  // Slick Carousel JS
  Drupal.behaviors.slickCarousel = {
    attach: function (context) {
	  $('.field--name-field-carousel-image .field--items').slick({
	    slidesToShow: 3,
		  dots:true,
		  centerMode: true,
	  });
	}
  };

  // Form JS
  Drupal.behaviors.frontpageFormValidation = {
    attach: function (context) {
	  $('.front-page-form .submit-btn').click(function(){
	    var getUserInput = $(".custom-text-input").val();
	    var longSubString = longest_substring_without_repeating_characters(getUserInput);
	    alert(longSubString);
	  });

	  // Function to find the largest substring w/o repeating characters
	  function longest_substring_without_repeating_characters(input) {
			var chars = input.split('');
			var curr_char;
			var str = "";
			var longest_string = "";
			var hash = {};
			for (var i = 0; i < chars.length; i++) {
			  curr_char = chars[i];
			  if (!hash[chars[i]]) { 
			    str += curr_char; 
			    hash[chars[i]] = {index:i};
			  }
			  else {
				if(longest_string.length <= str.length) {
				longest_string = str;
				}
				var prev_dupeIndex = hash[curr_char].index;
				var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
				str = str_FromPrevDupe + curr_char;
				hash = {};
				for (var j = prev_dupeIndex + 1; j <= i; j++) {
				hash[input.charAt(j)] = {index:j};
			    }
			  }
			}
		  return longest_string.length > str.length ? longest_string : str;
		}
	}
  };
}(jQuery, Drupal));
