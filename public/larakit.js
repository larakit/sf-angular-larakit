(function () {
    angular
        .module('larakit',
            [
                "ngNamedRoute",
                "ui.tree",
                "ui.bootstrap",
                "ngSanitize",
                "ngResource",
                "ngRoute",
                "larakit.form",
                "larakit.entity"
            ]);
})();