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
                "ngCookies",
                "cfp.hotkeys",
                "larakit.form",
                "larakit.entity"
            ]);
})();