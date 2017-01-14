angular
    .module('larakit.entity')
    .component('entityForm', {
        templateUrl: '/packages/larakit/sf-angular-larakit/larakit.entity/entity-form.html',
        bindings: {
            model: '=',
            urlSave: '=',
            urlDelete: '=',
            tpl: '='
        },
        controller: function ($http) {
            var self = this;
            self.cancel = function () {
                self.model = {};
            };
            self.editedId = function () {
                var id = parseInt(self.model.id);
                return isNaN(id) ? -1 : id;
            };

            self.save = function () {
                $http.post(self.urlSave, self.model)
                    .then(
                        function (response) {
                            if ('error' == response.data.result) {
                                self.errors = response.data.errors;
                                larakit_toastr(response.data);
                            } else {
                                larakit_toastr(response.data);
                                self.errors = {};
                                self.cancel();
                            }
                        }, function () {

                        }
                    );
            };
        }
    });