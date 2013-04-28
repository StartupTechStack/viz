;(function() {
  var Slide = function(data) {
    this.init(data);
  };

  Slide.prototype.init = function(data) {
    this.data = data;
    if ($('.tooltip').length > 0)
      this.tooltip = d3.select("body div.tooltip");
    else
      this.tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip");
  };

  Slide.prototype.show = function() {
    this.faded = false;
    this.$svg.animate({ opacity: 1, display: 'block' });
    this.$svg.find('g').show();
  };

  Slide.prototype.fade = function() {
    this.faded = true;
    this.$svg.animate({ opacity: 0.5 });
    this.$svg.find('g').hide();
  };

  Slide.prototype.setConstants = function() {
    this.faded = false;
    this.width = $("#slides").width();
    this.height = 500;
    this.formatMoney = d3.format(",.f");
    this.padding = 50;
  };

  Slide.prototype.setScales = function() {
    this.xScale = d3.scale.ordinal()
      .domain($.map(this.data.companies, function(e, i) { return e.category; }))
      .rangePoints([this.padding, this.width - this.padding * 2], 0.5);

    this.yScale = d3.scale.linear()
      .domain([
        0, d3.max(this.data.companies, function(d) { return d.amount; })
      ])
      .range([this.height - this.padding, this.padding])
      .nice();

    this.colorScale = d3.scale.ordinal()
      .domain($.map(this.data.companies, function(e, i) { return e.name; }))
      .range(['#58d6c4', 'green']);
  };

  Slide.prototype.setAxes = function() {
    this.xAxis = d3.svg.axis()
      .scale(this.xScale)
      .orient("bottom");

    this.yAxis = d3.svg.axis()
      .scale(this.yScale)
      .orient("left")
      .ticks(5)
      .tickFormat(this.formatMoney);
  };

  Slide.prototype.draw = function() {
    if (this.$svg) {
      this.$svg.remove();
    }
    this.svg = d3.select("#slides").append("svg").attr("class", "slide");
    this.$svg = $(this.svg[0]);

    this.setConstants();
    this.setScales();
    this.setAxes();

    var self = this,
        svg = this.svg;

    svg.attr('width', this.width)
      .attr('height', this.height);

    svg.selectAll("circle")
      .data(this.data.companies)
      .enter()
      .append("circle")
      .attr("cx", function(d) {
        return self.xScale(d.category);
      })
      .attr("cy", function(d) {
        return self.yScale(d.amount);
      })
      .attr("r", 5)
      .attr("fill", function(d) {
        return self.colorScale(d.name);
      })
      .on("mouseover", function() {
        if (!self.faded)
          self.tooltip.style("visibility", "visible");
      })
      .on("mousemove", function(d) {
        if (!self.faded) {
          self.tooltip.text(d.name);
          var top = parseInt(self.tooltip.style("height"), 10);
          self.tooltip.
            style("top", (event.pageY - top / 2) + "px")
            .style("left", (event.pageX + 10) + "px");
        }
      })
      .on("mouseout", function() {
        self.tooltip.style("visibility", "hidden");
      })
      .on("click", function(e) {
        window.company.showCompany(e.name);
      });

    svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + (this.height - this.padding) + ")")
      .call(this.xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-45)");

    svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(" + this.padding + ", 0)")
      .call(this.yAxis)
      .selectAll("text")
      .text(function(d) {
        return "$" + self.formatMoney(d) + "M";
      });

    svg.append("text")
      .attr("x", this.width / 2)
      .attr("y", this.padding / 2)
      .attr("text-anchor", "middle")
      .text("Funding by category for " + this.data.year);
  };

  window.Slide = Slide;
})();
