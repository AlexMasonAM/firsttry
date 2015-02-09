var width = 600;
var height = 400;

var svg = d3.select("body")
  .append("svg")
  .attr({
    width: width,
    height: height
  });


d3.json("/dataset.json", function(error, dataset){
  if (error) {
    console.warn(error);
  }
  else {
  svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr({
      x: function(d,i) { return i * (width/dataset.length); },
      y: function(d) { return height - (d*5); },
      width: function() { return (width/dataset.length) - 1; },
      height: function(d) { return d * 5; },
      "fill": "orange"
    });
  }
})