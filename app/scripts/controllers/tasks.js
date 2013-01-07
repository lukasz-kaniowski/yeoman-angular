'use strict';

yeomanAngularApp.controller('TasksCtrl', function ($scope, tasks) {

    $scope.tasks = tasks.getAll();


    $scope.addTask = function () {
        tasks.add($scope.newTask);
        $scope.newTask = null;
    }

});
