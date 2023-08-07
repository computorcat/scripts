// if you have file where you keep all the javascripts, copy paste this into the file and put rss2html in onload function
// if not just take out the function part and put it into <script> tags and that should do the trick
// credit would be nice but idrc
// modify all you like !!
function rss2html(){
var rssFeedUrl = 'insert rss feed here';
var xhr = new XMLHttpRequest();
xhr.open('GET', rssFeedUrl, true);
xhr.responseType = 'document';
xhr.onload = function () 
{
  if (xhr.status === 200) 
  {
    var items = xhr.responseXML.querySelectorAll('item');
    var htmlOutput = '';
    items.forEach(function (item) {
        var title = item.querySelector('title').textContent;
        var link = item.querySelector('link').textContent;
        var description = item.querySelector('description').textContent;
        var date = item.querySelector('date').textContent;
        // idk how to explain this but put the html tags around the thing and it should display like that element eg. '<h2>+title+<h2>'
        // use double quotes for tags that need them
        htmlOutput += '<a href="' + link + '">' + title + '</a>';
        htmlOutput += 'description';
        htmlOutput += 'date';
    });
    document.getElementById("div where you want the html to go").innerHTML = htmlOutput;
  } 
  else 
  {
    console.error('Error fetching the RSS feed. Status code:', xhr.status);
  }
};
xhr.onerror = function () {
  console.error('Network error occurred while fetching the RSS feed.');
};
xhr.send();

}
