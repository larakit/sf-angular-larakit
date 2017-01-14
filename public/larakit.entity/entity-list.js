angular
    .module('larakit.entity')
    .component('entityList', {
        templateUrl: '/packages/larakit/sf-angular-larakit/larakit.entity/entity-list.html',
        bindings: {
            items: '=',
            edited: '=',
            loader: '=',
            disableEdit: '=',
            selected: '=',
            enableSelect: '=',
            tpl: '='
        },
        controller: function () {
            var self = this;
            //режим: "отображение списка"
            self.currentPage = 1;
            self.numPerPage = 10;
            self.editedId = function () {
                var id = parseInt(self.edited.id);
                return isNaN(id) ? -1 : id;
            };

            self.selectedId = function (item) {
                var id = parseInt(self.selected.id);
                return isNaN(id) ? -1 : id;
            };

            self.toggleSelect = function (item) {
                if (item.id == self.selectedId()) {
                    self.selected = {};
                } else {
                    self.selected = item;
                }
            };

            self.edit = function (item) {
                self.edited = item;
            };
        }
    });