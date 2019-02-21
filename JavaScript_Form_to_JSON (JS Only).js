/*JSON stands for JavaScript Object Notation
/*JSON stores data that is both machine and human readable. */
/*JSON does this by formatting data as array text files.*/
/*This script demonstrates the process of converting a user input form into a JSON file format and storing it as a local file.*/
/*The script makes use of JavaScript, JQuery, Ajax, HTML and JSON Simplify.*/


    (function($){
        function processForm(e){
         $.ajax({
          url: 'data.json',
          dataType: 'json',
          type: 'post',
          contentType: 'application/json',
          data: JSON.stringify( { "first-name": $('#first-name').val(), "last-name": $('#last-name').val() } ),
          processData: false,
          success: function(data, textStatus, jQxhr){
          $('#response pre').html(JSON.stringify(data));
            },
          error: function(jqXhr, textStatus, errorThrown){
          document.write(errorThrown);
            }
          });

            e.preventDefault();
        }

        $('#my-form').submit(processForm);
    })(jQuery);
