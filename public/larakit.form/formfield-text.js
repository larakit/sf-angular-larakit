angular
    .module('lk.form')
    .component('formfieldText', {
        templateUrl: '/packages/larakit/sf-angular-larakit/larakit.form/components/formfield-text.html',
        transclude: true,
        bindings: {
            error: '=',
            label: '=',
            model: '=',
            isEdit: '='
        }
    });