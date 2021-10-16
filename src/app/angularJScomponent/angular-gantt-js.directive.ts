import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import 'angular-gantt';


// angularJS style component declaration

export const angularGanttJsComponent = {
    transclude: true,
    controller: ['$scope', function ganttController($scope) {
        this.data = [
            {
                name: 'row1', tasks: [
                    { name: 'task1', from: new Date(2021, 10, 1), to: new Date(2021, 10, 30) },
                    { name: 'task2', from: new Date(2021, 11, 1), to: new Date(2021, 11, 30) }
                ]
            },
            {
                name: 'row2', tasks: [
                    { name: 'task3', from: new Date(2021, 10, 1), to: new Date(2021, 10, 30) },
                    { name: 'task4', from: new Date(2021, 11, 1), to: new Date(2021, 11, 30) }
                ]
            }
        ]
    }],
    template: `<div gantt data="$ctrl.data" show-side="false" task-out-of-range="truncate" allow-side-resizing="false"><gantt-table></gantt-table><gantt-movable></gantt-movable><gantt-tooltips></gantt-tooltips></div>`
};


// wrapping the angularJS component into a Angular directive
@Directive({ selector: 'angular-gantt-js' })
export class AngularGanttJsDirective extends UpgradeComponent {

    constructor(elementRef: ElementRef, injector: Injector) {
        super('ganttcomp', elementRef, injector);
    }
}
