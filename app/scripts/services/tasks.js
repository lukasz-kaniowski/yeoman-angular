'use strict';

yeomanAngularApp.factory('tasks', function () {

    var tasks = [];

    // Public API here
    return {
        getAll: function () {
            return tasks;
        },
        add: function (task) {
            tasks.push(task);
        }
    };
});
