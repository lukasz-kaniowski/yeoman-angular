'use strict';

describe('Service: tasks', function () {

    // load the service's module
    beforeEach(module('yeomanAngularApp'));

    // instantiate service
    var tasks;
    beforeEach(inject(function (_tasks_) {
        tasks = _tasks_;
    }));

    it('returns empty tasks', function () {
        expect(tasks.getAll().length).toBe(0);
    });

});
