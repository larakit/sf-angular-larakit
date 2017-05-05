angular
    .module('larakit.form')
    .component('formfieldNumber', {
        templateUrl: '/packages/larakit/sf-angular-larakit/larakit.form/formfield-number.html',
        transclude: true,
        bindings: {
            error: '=?',
            examples: '=?',
            desc: '=?',
            model: '='
        }
    });