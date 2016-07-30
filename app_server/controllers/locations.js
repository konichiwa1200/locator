/* GET Home page. */
module.exports.homelist = function(req, res, next) {
  res.render('locations-list', { 
    title: 'Locator - find a place to work iwth wifi',
    pageHeader: {
      title: 'Locator',
      strapline: 'Find places to work with wifi near you!'
    },
    locations: [
      {
        name: 'Starcups',
        address: '123 High Street, Reading, RG6 1PS',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '100m'
      },
      {
        name: 'Cafe Hero',
        address: '123 High Street, Reading, RG6 1PS',
        rating: 4,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '200m'
      },      
      {
        name: 'Burger Queen',
        address: '123 High Street, Reading, RG6 1PS',
        rating: 2,
        facilities: ['Food', 'Premium wifi'],
        distance: '250m'
      }
    ]
  });
};

/* GET Location page. */
module.exports.locationInfo = function(req, res, next) {
  res.render('location-info', { title: 'Location info' });
};

/* GET Add review page. */
module.exports.addReview = function(req, res, next) {
  res.render('location-review-form', { title: 'Add review' });
};

/* GET About page. */
module.exports.about = function(req, res, next) {
  res.render('generic-text', { title: 'About' });
};