;(function() {
  var Companies = function() {
  };

  Companies.prototype.showCompanies = function(year) {
    window.slide1.$svg.remove();
    window.slide1 = new Slide({
      year: year,
      companies: DATA.by_year[year]
    });
    slide1.draw();
  };

  window.Companies = Companies;
})();
