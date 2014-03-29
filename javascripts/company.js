;(function() {
  var Company = function() {

  };

  Company.prototype.showCompany = function(name) {
    var data = DATA.companies[name];
     console.log(data);

    if (data) {
      $('[data-name="logo"]').html($('<img/>').attr('src', data.logoUrl));
      $('[data-name="url"]').html($('<a/>').attr("href", data.url).text(data.url));
      $('[data-name="date-founded"]').html(data.launchDate);
      $('[data-name="industry"]').html(data.category);

      $.each(data.fundingEvent, function(i, e) {
        if (e.year.toString() == slide1.year) {
          $('[data-name="funding-amount"]').html(e.amount);
        }
      });
      if (data.techStack)
        $('[data-name="tech-stack"]').html(data.techStack.join(", "));
      $('[data-name="location"]').html(data.location);
    }
  };

  window.Company = Company;
})();
