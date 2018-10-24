'use strict';

module.exports = function(Orders) {
/**
 * show user's orders
 * @param {number} _id user id
 * @param {number} usertype type of user
 * @param {Function(Error, object)} callback
 */

orders.showMyOrders = function(_id, callback) {
    let myorders = await order.find({
        where:{
            "touristId":_id
        }
    });
    var result = myorders;
    // TODO
    callback(null, result);
  };
};
