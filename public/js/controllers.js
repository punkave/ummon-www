'use strict';

/* Controllers */

function AppCtrl($scope) {
  // socket.on('send:name', function (data) {
  //   $scope.name = data.name;
  // });
}

function TasksCtrl($scope, Task) {
  $scope.tasks = Task.query();
}

function PsCtrl($scope, Ps) {
  $scope.ps = Ps.query();

  $scope.poll = window.setInterval(function(){
    $scope.ps = Ps.query();
  }, 5000);
}