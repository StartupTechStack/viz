;(function() {
  var Company = function() {

  };

  Company.prototype.showCompany = function(name) {
    var data = DATA.companies[name];

    if (data) {
      $('[data-name="logo"]').html($('<img/>').attr('src', data.logoUrl));
      $('[data-name="url"]').html($('<a/>').attr("href", data.url).text(data.url));
      $('[data-name="date-founded"]').html(data.launchDate);
      $('[data-name="industry"]').html(data.category);
      $('[data-name="funding-amount"]').html(data.amount);
      $('[data-name="tech-stack"]').html(data.techStack.join(", "));
      $('[data-name="location"]').html(data.location);
    }
  };

  window.Company = Company;
})();
