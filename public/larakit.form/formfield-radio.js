angular
    .module('larakit.form')
    .component('formfieldRadio', {
        templateUrl: '/packages/larakit/sf-angular-larakit/larakit.form/formfield-radio.html',
        transclude: true,
        bindings: {
            error: '=',
            isVertical: '=?',
            isFull: '=?',
            desc: '=',
            options: '=',
            label: '=',
            model: '='
        }
    });