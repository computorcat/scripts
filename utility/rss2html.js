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
        htmlOutput += '<h2><a href="' + link + '">' + title + '</a></h2>';
        htmlOutput += '<p>' + description + '</p>';
        htmlOutput += '<p><small>'+date+'</small><p>';
        htmlOutput += '#divider';
    });
    console.log(htmlOutput);
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
