'use strict';

/* Services */

var host = 'http://localhost/api';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('ummon.services', ['ngResource'])
  .value('version', '0.1')
  // factory('socket', function ($rootScope) {
  //   var socket = io.connect();
  //   return {
  //     on: function (eventName, callback) {
  //       socket.on(eventName, function () {  
  //         var args = arguments;
  //         $rootScope.$apply(function () {
  //           callback.apply(socket, args);
  //         });
  //       });
  //     },
  //     emit: function (eventName, data, callback) {
  //       socket.emit(eventName, data, function () {
  //         var args = arguments;
  //         $rootScope.$apply(function () {
  //           if (callback) {
  //             callback.apply(socket, args);
  //           }
  //         });
  //       })
  //     }
  //   };
  // }).
  .factory('Task', function($resource){
    return $resource(host+'/tasks/:taskid', {}, {
      query: {method:'GET', isArray:true }
    });
  })
  .factory('Ps', function($resource){
    return $resource(host+'/ps/:psid', {}, {
      query: {method:'GET'}
    });
  });