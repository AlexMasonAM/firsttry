var body = d3.select('body');
// var data = [40, 8, 15, 16, 23, 42];
var data = [
  {"color": "red", "size": 40},
  {"color": "blue", "size": 8},
  {"color": "green", "size": 15},
  {"color": "tomato", "size": 16},
  {"color": "dodgerblue", "size": 23},
  {"color": "peachpuff", "size": 42}
];

body.selectAll("p")
    .data(data)
    .enter().append("p")
    .style("font-size", function(d) { return d.size/10 + "em"; })
    .style("color", function(d) { return d.color; } );

body.selectAll("p").text("hello");