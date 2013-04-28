var dataset = [
  [ 'xxx',  200000 ],
  [ 'xxx',  900000 ],
  [ 'xxx',  500000 ],
  [ 'xxx',  500000 ],
  [ 'xyy',  330000 ],
  [ 'xyy',  950000 ],
  [ 'yyx',  120000 ],
  [ 'yyy',  440000 ],
  [ 'yyx',  670000 ],
  [ 'yyy',  210000 ],
  [ 'yyy',  880000 ]
];


var w = 800,
    h = 300,
    formatMoney = d3.format("$0.1d"),
    padding = 50,
    xScale = d3.scale.ordinal()
      .domain([
          'xxx', 'xyy', 'yyx', 'yyy'
      ])
      .rangePoints([padding, w - padding * 2]),
    yScale = d3.scale.linear()
      .domain([
          d3.min(dataset, function(d) { return d[1]; }),
          d3.max(dataset, function(d) { return d[1]; })
      ])
      .range([h - padding, padding])
      .nice(),
    xAxis = d3.svg.axis()
      .scale(xScale)
      .orient("bottom"),
    yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left")
      .ticks(5)
      .tickFormat(formatMoney)
    ;

var svg = d3.select("body").append("svg");

svg.attr('width', w)
  .attr('height', h);

svg.selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle")
   .attr("cx", function(d) {
     return xScale(d[0]);
   })
   .attr("cy", function(d) { return yScale(d[1]); })
   .attr("r", 5);

svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(function(d) { return d[0] + "," + d[1]; })
   .attr("x", function(d) { return xScale(d[0]); })
   .attr("y", function(d) { return yScale(d[1]); })
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "red");

svg.append("g")
  .attr("class", "axis")
  .attr("transform", "translate(0," + (h - padding) + ")")
  .call(xAxis);

svg.append("g")
  .attr("class", "axis")
  .attr("transform", "translate(" + padding + ", 0)")
  .call(yAxis);
