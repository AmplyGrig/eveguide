'use strict';

module.exports = function(Excursions) {
    
/**
 * order this excursion
 * @param {number} qantity number of people
 * @param {Function(Error, object)} callback
 */

Excursions.order = function(qantity, callback) {
    //  orders = require('loopback').getModel('orders');
    //  let order = orders.create({"qantity":qantity,"status":'1'});
    var result = {
        status:'you order an excursion for $(qantity) people'
    };
    // TODO
    callback(null, result);
  };
};
