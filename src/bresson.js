'use strict';

angular.module('bresson', [])
  .run(Config)
  .directive('bresson-datepicker', DatePickerDirective);
