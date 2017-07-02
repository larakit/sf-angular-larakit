angular
    .module('larakit.form')
    .component('formfieldText', {
        templateUrl: '/packages/larakit/sf-angular-larakit/larakit.form/formfield-text.html',
        transclude: true,
        bindings: {
            error: '=?',
            examples: '=?',
            append: '=?',
            prepend: '=?',
            desc: '=?',
            change: '&?',
            model: '=',
            isExampleAppend: '=?'
        },
        controller: function () {
            var self = this;
            self.onChange = function () {
                if (self.change) {
                    self.change();
                }
            };
        }
    });