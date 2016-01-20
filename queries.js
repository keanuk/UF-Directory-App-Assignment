/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

var findLibraryWest = function(err, listingSchema) {
  if(err) throw err;

  Listing.find({ name : 'Library West'});
  console.log("Found Library West");

  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
};
var removeCable = function(err, listingSchema) {
  if(err) throw err;

  Listing.find({ code : 'CABL'});
  console.log("Removed buildings with the code: CABL");

  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
};
var updatePhelpsMemorial = function(err, listingSchema) {
  if(err) throw err;

  db.listings.update(
    {"name" : "Phelps Memorial Hospital Center"},
    {

    }
  )
  console.log("Updated the Phelps Memorial Hospital Center");

  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
};
var retrieveAllListings = function(err, listingSchema) {
  if(err) throw err;

  db.listings.find();
  console.log("Here are all of the listings");

  /*
    Retrieve all listings in the database, and log them to the console.
   */
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
