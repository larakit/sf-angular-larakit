angular
    .module('larakit.form')
    .component('formfieldTime', {
        templateUrl: '/packages/larakit/sf-angular-larakit/larakit.form/formfield-time.html',
        transclude: true,
        bindings: {
            error: '=',
            desc: '=',
            label: '=',
            model: '=',
            isEdit: '='
        },
        compile: function(elem, attrs, transcludeFn) {
            transcludeFn(elem, function(clone) {
                /* clone is element containing html that will be transcludded*/
                var show=clone.text().length?'1':'0';
                attrs.ngShow=show;
            });
        }
    });