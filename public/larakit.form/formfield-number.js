angular
    .module('larakit.form')
    .component('formfieldNumber', {
        templateUrl: '/packages/larakit/sf-angular-larakit/larakit.form/formfield-number.html',
        transclude: true,
        bindings: {
            error: '=?',
            examples: '=?',
            append: '=?',
            prepend: '=?',
            desc: '=?',
            step: '=?',
            change: '&?',
            model: '='
        },
        controller: function ($transclude) {
            var $ctrl = this;
            $ctrl.isLabel = $transclude.isSlotFilled(false);
            $ctrl.preparedExamples = [];
            $ctrl.getStep = function (va) {
                return (undefined == $ctrl.step) ? 1 : 'any';
            };
            $ctrl.setExample = function (val) {
                    $ctrl.model = parseFloat(val);
            };
            $ctrl.onChange = function () {
                if ($ctrl.change) {
                    $ctrl.change();
                }
            };
            if (undefined != $ctrl.examples) {
                var title, value;
                _.each($ctrl.examples, function (v, k) {
                    value = v[0];
                    title = (undefined !== v[1]) ? v[1] : value;
                    $ctrl.preparedExamples.push({value: value, title: title});
                });
            }
        }
    });