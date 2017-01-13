angular
    .module('lk.form')
    .component('formfieldTextarea', {
        templateUrl: '/packages/larakit/sf-angular-larakit/lk.form/components/formfield-textarea.html',
        transclude: true,
        bindings: {
            error: '=',
            label: '=',
            model: '='
        }
    });