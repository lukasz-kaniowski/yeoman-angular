'use strict';

describe('Controller: TasksCtrl', function () {

    // load the controller's module
    beforeEach(module('yeomanAngularApp'));

    var TasksCtrl,
        scope,
        tasks = { getAll: function () {
            return [
                {name: 'task_1'}
            ]
        }};

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller) {
        scope = {};

        TasksCtrl = $controller('TasksCtrl', {
            $scope: scope,
            tasks: tasks
        });
    }));

    it('gets all tasks from service', function () {


        expect(scope.tasks.length).toBe(1);
        expect(scope.tasks[0].name).toBe('task_1');
    });
});
