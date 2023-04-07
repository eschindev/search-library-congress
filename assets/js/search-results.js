var searchBtnEl = $("search-btn");
var searchBoxEl = $("search-box");
var searchFormatEl = $("search-format");
var outputEl = $("output-col");

//
var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var searchTerm = searchBoxEl.value.trim();
    var format = ;

    if (searchTerm) {
      getLibraryContent(searchTerm, format)
    } else {
      alert('Please enter a search term and format');
    }
  };

 //fetch content from LoC api 
var getLibraryContent = function (searchTerm, format) {
    var apiUrl = `https://www.loc.gov/${format}/?q=${searchTerm}&fo=json`
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          return response.json();
          
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to Library of Congress');
      })

      .then(function (placeholder) {
        //generate the contents that were searched based on format and searchTerm

      })
  };

