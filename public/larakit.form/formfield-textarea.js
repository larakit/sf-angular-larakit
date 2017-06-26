angular
    .module('larakit.form')
    .component('formfieldTextarea', {
        templateUrl: '/packages/larakit/sf-angular-larakit/larakit.form/formfield-textarea.html',
        transclude: true,
        bindings: {
            error: '=',
            desc: '=',
            examples: '=',
            label: '=',
            rows: '=',
            cols: '=',
            isExampleAppend: '=?',
            model: '='
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
            self.setExample = function (val) {
                console.log(self.isExampleAppend);
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

        }
    });