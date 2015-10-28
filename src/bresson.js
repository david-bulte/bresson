'use strict';

angular.module('bresson', [])
  .run(Config)
  .directive('brDateSelector', DateSelectorDirective);
