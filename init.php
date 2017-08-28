<?php
\Larakit\StaticFiles\Manager::package('larakit/sf-angular-larakit')
    ->usePackage('larakit/sf-angular-route')
    ->usePackage('larakit/sf-angular-named-route')
    ->usePackage('larakit/sf-angular-resource')
    ->usePackage('larakit/sf-angular-sanitize')
    ->usePackage('larakit/sf-angular-ui-bootstrap')
    ->usePackage('larakit/sf-angular-ui-tree')
    ->usePackage('larakit/sf-angular-ui-switch')
    ->usePackage('larakit/sf-angular-ui-select')
    ->usePackage('larakit/sf-angular-quilljs')
    ->usePackage('larakit/sf-angular-hotkeys')
    ->usePackage('larakit/sf-angular-cookies')
    ->usePackage('larakit/sf-bootstrap')
    ->usePackage('larakit/sf-toastrjs')
    ->setSourceDir('public')
    ->jsPackage('larakit.form.js')
    ->jsPackage('larakit.form/form-examples.js')
    ->jsPackage('larakit.form/formfield-textarea.js')
    ->jsPackage('larakit.form/formfield-text.js')
    ->jsPackage('larakit.form/formfield-priority.js')
    ->jsPackage('larakit.form/formfield-number.js')
    ->jsPackage('larakit.form/formfield-radio.js')
    ->jsPackage('larakit.form/formfield-select.js')
    ->jsPackage('larakit.form/formfield-color.js')
    ->jsPackage('larakit.form/formfield-checkbox.js')
    ->jsPackage('larakit.form/formfield-date.js')
    ->jsPackage('larakit.form/formfield-icons.js')
    ->jsPackage('larakit.form/formfield-switch.js')
    ->jsPackage('larakit.form/formfield-quill.js')
    ->cssPackage('larakit.form/formfield-quill.css')
    ->cssPackage('larakit.form/example.css')
    ->jsPackage('larakit.entity.js')
    ->jsPackage('larakit.entity/entity-form.js')
    ->jsPackage('larakit.entity/entity-list.js')
    ->jsPackage('larakit.js');
