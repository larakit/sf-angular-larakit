angular
    .module('larakit.form')
    .component('formfieldText', {
        templateUrl: '/packages/larakit/sf-angular-larakit/larakit.form/formfield-text.html',
        transclude: true,
        bindings: {
            error: '=',
            examples: '=',
            desc: '=',
            label: '=',
            model: '=',
            isEdit: '='
        },
        compile: function (elem, attrs, transcludeFn) {
            transcludeFn(elem, function (clone) {
                /* clone is element containing html that will be transcludded*/
                var show = clone.text().length ? '1' : '0';
                attrs.ngShow = show;
            });
        },
        controller: function () {
            var self = this;
            self.preparedExamples = [];
            if(undefined != self.examples) {
                var title, value;
                _.each(self.examples, function (v, k) {
                    value = v[0];
                    title = (undefined !== v[1]) ? v[1] : value;
                    self.preparedExamples.push({value:value, title:title});
                });
            }
        }
    });