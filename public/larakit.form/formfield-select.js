angular
    .module('lk.form')
    .component('formfieldSelect', {
        templateUrl: '/packages/larakit/sf-angular-larakit/larakit.form/components/formfield-select.html',
        transclude: true,

        bindings: {
            error: '=',
            label: '=',
            options: '=',
            groupField: '=',
            model: '=',
            optionKey: '='
        },
        controller: function () {
            var self = this;

            self.selected = function () {
                self.model = self.select_model.id;
                console.log(self.model, self.select_model.id);
            };
            self.groupBy = function (item) {
                return _.get(item, self.groupField);
            };

            var selected = _.find(self.options, {id: self.model});
            if (self.model) {
                self.select_model = {id: self.model};
                self.select_model[self.optionKey] = selected[self.optionKey];
            }
        }
    });
