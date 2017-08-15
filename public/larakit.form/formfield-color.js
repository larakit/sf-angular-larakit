angular
    .module('larakit.form')
    .component('formfieldColor', {
        templateUrl: '/packages/larakit/sf-angular-larakit/larakit.form/formfield-color.html',
        transclude: true,
        bindings: {
            error: '=',
            desc: '=',
            label: '=',
            model: '='
        },
        controller: function () {
            var $ctrl = this;
            $ctrl.options = {
                inputClass: 'form-control',
                format: 'hex',
                case: 'lower'
            };
        }
    });