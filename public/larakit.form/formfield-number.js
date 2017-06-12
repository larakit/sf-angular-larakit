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
            $ctrl.isLabel = $transclude.isSlotFilled();
            $ctrl.preparedExamples = [];
            $ctrl.getStep = function (va) {
                return (undefined == $ctrl.step) ? 1 : 'any';
            };
            $ctrl.setExample = function (val) {
                if (true == $ctrl.isExampleAppend) {
                    if (undefined == $ctrl.model || 0 == $ctrl.model.length) {
                        $ctrl.model = val;
                    } else {
                        $ctrl.model = $ctrl.model + ', ' + val;
                    }
                } else {
                    $ctrl.model = val;
                }

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