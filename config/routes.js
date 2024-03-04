/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/':                                  'homepage',
  '/pastures':                          'pastures/view-pastures',
  'POST /pastures':                    'pastures/create-pasture',
  'GET /pastures/:id':                  'pastures/view-pasture',
  'GET /pastures/new':                  'pastures/view-new',
  'GET /pastures/:id/edit':             'pastures/view-edit',
  'POST /pastures/:id/delete':          'pastures/delete-pasture',
  'GET /squarespace/get_products':      'squarespace/get-products',
  'GET /squarespace/products':          'squarespace/view-products',
  'GET /squarespace/get_orders':        'squarespace/get-orders',
  'GET /squarespace/orders':            'squarespace/view-orders',
  'GET /squarespace/get_transactions':  'squarespace/get-transactions',
  'GET /squarespace/transactions':      'squarespace/view-transactions',


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
