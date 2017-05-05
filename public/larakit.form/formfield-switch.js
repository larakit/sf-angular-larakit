angular
    .module('larakit.form')
    .component('formfieldSwitch', {
        templateUrl: '/packages/larakit/sf-angular-larakit/larakit.form/formfield-switch.html',
        transclude: true,
        bindings: {
            error: '=?',
            switchOn: '=?',
            switchOff: '=?',
            switchInverse: '=?',
            switchClass: '=?',
            desc: '=',
            label: '=',
            model: '='
        },
        controller: function () {
            var self = this;
            self.switchOn = (undefined == self.switchOn) ? 'Да' : self.switchOn;
            self.switchOff = (undefined == self.switchOff) ? 'Нет' : self.switchOff;
            self.switchClass = (undefined == self.switchClass) ? 'wide' : self.switchClass;
        }
    });