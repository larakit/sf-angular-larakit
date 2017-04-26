angular
    .module('larakit.form')
    .component('formfieldSelect', {
        templateUrl: '/packages/larakit/sf-angular-larakit/larakit.form/formfield-select.html',
        transclude: true,

        bindings: {
            error: '=',
            multiple: '=',
            desc: '=',
            label: '=',
            options: '=',
            groupField: '=',
            model: '=',
            optionKey: '='
        },
        controller: function () {
            var self = this;
            self.multiple = false;
            self.select_model = {id: 0};
            self.selected = function () {
                self.model = self.select_model.id;
                console.log(self.model, self.select_model.id);
            };

            self.getLabel = function () {
                var selected = _.find(self.options, {id: self.model});
                if (self.model) {
                    if (undefined != selected) {
                        var val = selected[self.optionKey];
                        if (undefined != val) {
                            return val;
                        }
                    }
                }
                return '-';
            };
            self.$onInit = function () {
                if (true != self.multiple) {
                    self.multiple = false;
                    self.select_model.id = self.model;
                }
            };
            self.groupBy = function (item) {
                return _.get(item, self.groupField);
            };


        }
    });
