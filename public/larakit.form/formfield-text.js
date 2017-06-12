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
            self.preparedExamples = [];
            self.setExample = function (val) {
                if (true == self.isExampleAppend) {
                    if (undefined == self.model || 0 == self.model.length) {
                        self.model = val;
                    } else {
                        self.model = self.model + ', ' + val;
                    }
                } else {
                    self.model = val;
                }

            };
            self.onChange = function () {
                if (self.change) {
                    self.change();
                }
            };
            if (undefined != self.examples) {
                var title, value;
                _.each(self.examples, function (v, k) {
                    value = v[0];
                    title = (undefined !== v[1]) ? v[1] : value;
                    self.preparedExamples.push({value: value, title: title});
                });
            }
        }
    });