console.log("This works");

var body = d3.select('body');
body.append('h1').text("hello there");
body.select('h1')
  .style({
    "color": "red",
    "font-family": "sans-serif"
  })
  .classed({'foo': true, 'bar': false})
  .html("<span> Hi I'm an H1 </span>");
body.append('p').text("Im a paragraph");
