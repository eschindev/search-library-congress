var searchBtnEl = $("search-btn");
var searchBoxEl = $("search-box");
var searchFormatEl = $("search-format");
var outputEl = $("output-col");

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
      });
  };