angular
    .module('larakit.form')
    .component('formfieldPriority', {
        templateUrl: '/packages/larakit/sf-angular-larakit/larakit.form/formfield-priority.html',
        bindings: {
            error: '=?',
            examples: '=?',
            append: '=?',
            prepend: '=?',
            desc: '=?',
            step: '=?',
            change: '&?',
            model: '='
        }
    });