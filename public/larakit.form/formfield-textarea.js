angular
    .module('larakit.form')
    .component('formfieldTextarea', {
        templateUrl: '/packages/larakit/sf-angular-larakit/larakit.form/formfield-textarea.html',
        transclude: true,
        bindings: {
            error: '=',
            label: '=',
            model: '='
        }
    });