'use strict';

function DatePickerDirective() {

  return {
    restrict: 'E',
    templateUrl: 'templates/datepicker.html',
    scope: {
      modelDate: '=',
      fromYear: '=',
      toYear: '=',
      dayBeforeMonth: '=',
      tryDateInput: '='
    },
    controller: DatePickerController,
    controllerAs: 'ctrl',
    bindToController: true
  };

}

function DatePickerController() {

  this.viaDateInput = (this.tryDateInput === undefined || this.tryDateInput === true) && dateInputSupported();

  if (this.viaDateInput) {
    return;
  }

  if (!this.fromYear != !this.toYear) {
    throw 'bresson: when specifying fromYear you should als specify toYear';
  }

  if (this.fromYear && this.modelDate && (this.modelDate.getFullYear() < this.fromYear || this.modelDate.getFullYear() > this.toYear)) {
    throw 'bresson: given modelDate does not fall between given fromYear and toYear';
  }

  if (!this.modelDate) {
    this.modelDate = new Date();
  }

  if (!this.fromYear) {
    this.fromYear = this.modelDate.getFullYear() - 50;
    this.toYear = this.modelDate.getFullYear() + 50;
  }

  this.viewDate = {
    day: {id: this.modelDate.getDate(), label: this.modelDate.getDate()},
    month: {id: this.modelDate.getMonth() + 1, label: this.modelDate.getMonth() + 1},
    year: {id: this.modelDate.getFullYear(), label: this.modelDate.getFullYear()}
  };
  this.viewDate.toDate = function () {
    return (this.day && this.month && this.year) ? new Date(this.year.id, this.month.id - 1, this.day.id) : null;
  }.bind(this.viewDate);

  this.days = options(1, daysInMonth(this.modelDate.getMonth() + 1, this.modelDate.getFullYear()));
  this.months = options(1, 12);
  this.years = options(this.fromYear, this.toYear);

  if (this.dayBeforeMonth === undefined) {
    var now = new Date(Date.UTC(1972, 5, 9, 0, 0));
    this.dayBeforeMonth = '09/05/1972' === now.toLocaleDateString();
  }

  this.dayChanged = function () {
    this.modelDate = this.viewDate.toDate();
  };

  this.monthOrYearChanged = function () {
    var days = daysInMonth(this.viewDate.month.id, this.viewDate.year.id);
    if (this.viewDate.day && this.viewDate.day.id > days) {
      this.viewDate.day = null;
    }
    this.modelDate = this.viewDate.toDate();
    this.days = options(1, days);
  };

}

function options(from, to) {
  var result = [];
  for (var i = from; i <= to; i++) {
    result.push({id: i, label: i});
  }
  return result;
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

//cf. http://stackoverflow.com/questions/10193294/how-can-i-tell-if-a-browser-supports-input-type-date
function dateInputSupported() {
  var input = document.createElement('input');
  input.setAttribute('type','date');

  var notADateValue = 'not-a-date';
  input.setAttribute('value', notADateValue);

  return !(input.value === notADateValue);
}
