;(function() {
  window.DATA = [
    {
      year : 2012,
      companies: [
        {
          'name': 'Foursquare',
          'category': 'social',
          'amount': 111
        },
        {
          'name': 'Some Other',
          'category': 'food',
          'amount': 333
        },
        {
          'name': '123',
          'category': 'social',
          'amount': 234
        },
        {
          'name': 'yoo1',
          'category': 'social',
          'amount': 121
        },
        {
          'name': 'bar',
          'category': 'food',
          'amount': 500
        },
        {
          name: 'foo',
          'category': 'yadda',
          'amount': 100
        }
      ]
    },
    {
      year : 2013,
      companies: [
        {
          'name': 'Foursquare',
          'category': 'social',
          'amount': 170
        },
        {
          'name': 'Some Other',
          'category': 'food',
          'amount': 333
        },
        {
          'name': '123',
          'category': 'social',
          'amount': 234
        },
        {
          'name': 'yoo1',
          'category': 'social',
          'amount': 121
        },
        {
          'name': 'bar',
          'category': 'food',
          'amount': 500
        },
        {
          name: 'foo',
          'category': 'yadda',
          'amount': 100
        }
      ]
    },
    {
      year : 1999,
      total : 123456,
      categories : [
        {
          'name': 'finance',
          'amount': 111,
          'companies': ['1', '2']
        },
        {
          'name': 'food',
          'amount': 333,
          'companies': ['2', '123']
        }
      ]
    }
  ];

  window.COMPANIES = {
    'Foursquare': {
      'name': 'Foursquare',
      'url': 'http://foursquare.com',
      'category': 'social',
      'techStack': ['objc', 'rails', 'jquery', 'mysql'],
      'launchDate': '2009-03',
      'fundingEvents': [
        {
          'type': 'angel',
          'date': '2009-09',
          'amount': 1.3
        },
        {
          'type': 'series-b',
          'date': '2010-06',
          'amount': 20
        },
        {
          'type': 'series-c',
          'date': '2011-06',
          'amount': 50
        },
        {
          'type': 'series-d',
          'date': '2012-04',
          'amount': 41
        }
      ],
      'score': 0.5,
      'logoUrl': 'https://ss1.4sqi.net/img/chrome/logo@2x-a49810b71b04213ca1ec0b41d2f1ff34.png'
    },
    'Some Other': {
      'name': 'Some Other',
      'url': 'http://yadda.com',
      'category': 'food',
      'techStack': ['objc', 'mysql'],
      'launchDate': '2009-03',
      'fundingEvents': [
        {
          'type': 'angel',
          'date': '2009-09',
          'amount': 1.3
        },
        {
          'type': 'series-b',
          'date': '2010-06',
          'amount': 20
        },
        {
          'type': 'series-c',
          'date': '2011-06',
          'amount': 50
        },
        {
          'type': 'series-d',
          'date': '2012-04',
          'amount': 41
        }
      ],
      'score': 0.5,
      'logoUrl': 'https://www.digitalocean.com/assets/digital-ocean-logo.png'
    }
  };

  window.STACK = [
    { year: 2006, count: 2, stack: ['rails', 'yadda'] },
    { year: 2007, count: 1, stack: ['fjdisofjsadio'] },
    { year: 2008, count: 4, stack: ['jioi90', 'jiosijfsda', 'jfiosdjfsioa', 'ciweo'] },
    { year: 2009, count: 3, stack: ['aiodcsa23', 'jifo', 'iojfios'] },
    { year: 2010, count: 5, stack: ['fjiofjdsioa', 'jiofdsjio', 'jifos', 'jiofsjfiodsanc'] },
    { year: 2011, count: 7, stack: ['jidojfiodsa', 'jifojifodsa', 'jfiodsjfiosd', 'jfidosji', '03jiosda', '123', 'poop'] },
    { year: 2012, count: 3, stack: ['hello', 'world', 'blah'] }
  ];
})();
