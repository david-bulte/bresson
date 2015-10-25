'use strict';

angular.module('bresson', [])
  .run(Config)
  .directive('bressonDatepicker', DatePickerDirective);
