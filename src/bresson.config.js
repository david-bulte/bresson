'use strict';

function Config($templateCache) {

  $templateCache.put('templates/datepicker.html',
    '<any ng-switch="ctrl.viaDateInput">' +

      '<input type="date" ng-model="ctrl.modelDate" ng-switch-when="true">' +

      '<any ng-switch-default ng-switch="ctrl.dayBeforeMonth">' +
        '<span ng-switch-when="true">' +
          '<select ng-model="ctrl.viewDate.day.id" ng-options="day.label as day.id for day in ctrl.days" ng-change="ctrl.dayChanged()"></select> ' +
          '<select ng-model="ctrl.viewDate.month.id" ng-options="month.label as month.id for month in ctrl.months" ng-change="ctrl.monthOrYearChanged()"></select> ' +
          '<select ng-model="ctrl.viewDate.year.id" ng-options="year.label as year.id for year in ctrl.years" ng-change="ctrl.monthOrYearChanged()"></select>' +
        '</span>' +
        '<span ng-switch-default>' +
            '<select ng-model="ctrl.viewDate.month.id" ng-options="month.label as month.id for month in ctrl.months" ng-change="ctrl.monthOrYearChanged()"></select> ' +
            '<select ng-model="ctrl.viewDate.day.id" ng-options="day.label as day.id for day in ctrl.days" ng-change="ctrl.dayChanged()"></select> ' +
            '<select ng-model="ctrl.viewDate.year.id" ng-options="year.label as year.id for year in ctrl.years" ng-change="ctrl.monthOrYearChanged()"></select>' +
        '</span>' +
      '</any>' +

    '</any>');

}

Config.$inject = ['$templateCache'];
