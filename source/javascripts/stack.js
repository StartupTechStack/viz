;(function() {
  var Stack = function(data) {
    this.init(data);
  };

  Stack.prototype.init = function(data) {
    this.data = data;
    if ($('.tooltip').length > 0)
      this.tooltip = d3.select("body div.tooltip");
    else
      this.tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip");
  };

  Stack.prototype.show = function() {
    this.faded = false;
    this.$svg.animate({ opacity: 1, display: 'block' });
    this.$svg.find('g').show();
  };

  Stack.prototype.fade = function() {
    this.faded = true;
    this.$svg.animate({ opacity: 0.5 });
    this.$svg.find('g').hide();
  };

  Stack.prototype.setConstants = function() {
    this.faded = false;
    this.width = $("#stack").width();
    this.height = 300;
    this.formatMoney = d3.format(",.2f");
    this.padding = 50;
  };

  Stack.prototype.setScales = function() {
    this.xScale = d3.scale.ordinal()
      .domain($.map(this.data, function(e, i) { return e.year; }))
      .rangeBands([this.padding, this.width - this.padding * 2], 0.5);

    this.yScale = d3.scale.linear()
      .domain([
        0, d3.max(this.data, function(d) { return d.count; })
      ])
      .range([this.height - this.padding, this.padding])
      .nice();
  };

  Stack.prototype.setAxes = function() {
    this.xAxis = d3.svg.axis()
      .scale(this.xScale)
      .orient("bottom");
  };

  Stack.prototype.draw = function() {
    if (this.$svg) {
      this.$svg.remove();
    }
    this.svg = d3.select("#stack").append("svg").attr("class", "Stack");
    this.$svg = $(this.svg[0]);

    this.setConstants();
    this.setScales();
    this.setAxes();

    var self = this,
        svg = this.svg;

    svg.attr('width', this.width)
      .attr('height', this.height);

    $.each(this.data, function(i, e) {
      for (var j = 1; j <= e.count; j++) {
        svg.append("svg:rect")
          .attr("x", self.xScale(e.year))
          .attr("y", self.yScale(j))
          .attr("data-j", j)
          .attr("data-year", e.year)
          .attr("width", self.xScale.rangeBand())
          .attr("height", self.yScale(8).toString())
          .on("mouseover", function() {
            self.tooltip.style("visibility", "visible");
          })
          .on("mousemove", function() {
            self.tooltip.text(e.stack[$(this).data('j') - 1]);
            var top = parseInt(self.tooltip.style("height"), 10);
            self.tooltip.
              style("top", (event.pageY - top / 2) + "px")
              .style("left", (event.pageX + 10) + "px");
          })
          .on("mouseout", function() {
            self.tooltip.style("visibility", "hidden");
          })
          .on("click", function(e) {
            companies.showCompanies($(this).data('year'));
          });
        }
    });

    svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + (this.height - this.padding) + ")")
      .call(this.xAxis);

    svg.append("text")
      .attr("x", this.padding)
      .attr("y", this.padding / 2)
      .attr("text-anchor", "left")
      .text("Funded");
  };

  window.Stack = Stack;
})();
