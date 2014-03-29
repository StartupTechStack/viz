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

    $('[data-name="snapshot"]').text(year + " Snapshot");
    $('[data-name="companies"]').text(year);

    var logos = $("#companies .logos");
    logos.html("");
    $.each(DATA.by_year[year], function(i, e) {
      var logo = $("<div/>").addClass("logo");

      if (i % 2 === 0)
        logo.addClass("even");

      logo.append($("<img/>").attr('src', e.logoUrl));

      logos.append(logo);
    });
    console.log(DATA.by_year[year]);
  };

  window.Companies = Companies;
})();
