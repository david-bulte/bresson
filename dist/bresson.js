/**
 * bresson
 * @version v0.0.1 - 2015-10-28
 * @link https://github.com/david-bulte/bresson
 * @author  <>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';

angular.module('bresson', [])
  .run(Config)
  .directive('brDateSelector', DateSelectorDirective);

'use strict';

function Config($templateCache) {

  $templateCache.put('templates/dateselector.html',
    '<any ng-switch="ctrl.viaDateInput">' +

      '<input type="date" ng-model="ctrl.modelDate" ng-switch-when="true" class="{{ctrl.brAttributes.class}}" placeholder="{{ctrl.brAttributes.placeholder}}">' +

      '<any ng-switch-default ng-switch="ctrl._dayBeforeMonth">' +
        '<any ng-switch-when="true">' +
          '<select class="{{ctrl.brAttributes.class}}" ng-model="ctrl.viewDate.day.id" ng-options="day.label as day.id for day in ctrl.days" ng-change="ctrl.dayChanged()"></select> ' +
          '<select class="{{ctrl.brAttributes.class}}" ng-model="ctrl.viewDate.month.id" ng-options="month.label as month.id for month in ctrl.months" ng-change="ctrl.monthOrYearChanged()"></select> ' +
          '<select class="{{ctrl.brAttributes.class}}" ng-model="ctrl.viewDate.year.id" ng-options="year.label as year.id for year in ctrl.years" ng-change="ctrl.monthOrYearChanged()"></select>' +
        '</any>' +
        '<any ng-switch-default>' +
          '<select class="{{ctrl.brAttributes.class}}" ng-model="ctrl.viewDate.month.id" ng-options="month.label as month.id for month in ctrl.months" ng-change="ctrl.monthOrYearChanged()"></select> ' +
          '<select class="{{ctrl.brAttributes.class}}" ng-model="ctrl.viewDate.day.id" ng-options="day.label as day.id for day in ctrl.days" ng-change="ctrl.dayChanged()"></select> ' +
          '<select class="{{ctrl.brAttributes.class}}" ng-model="ctrl.viewDate.year.id" ng-options="year.label as year.id for year in ctrl.years" ng-change="ctrl.monthOrYearChanged()"></select>' +
        '</any>' +
      '</any>' +

    '</any>');

}

Config.$inject = ['$templateCache'];
