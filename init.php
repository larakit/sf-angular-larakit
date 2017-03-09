<?php
\Larakit\StaticFiles\Manager::package('larakit/sf-angular-larakit')
    ->usePackage('larakit/sf-angular-route')
    ->usePackage('larakit/sf-angular-named-route')
    ->usePackage('larakit/sf-angular-resource')
    ->usePackage('larakit/sf-angular-sanitize')
    ->usePackage('larakit/sf-angular-ui-bootstrap')
    ->usePackage('larakit/sf-angular-ui-tree')
    ->usePackage('larakit/sf-bootstrap')
    ->usePackage('larakit/sf-toastrjs')
    ->setSourceDir('public')
    //larakit.form
    ->ngModule('larakit.form')
    ->jsPackage('larakit.form.js')
    ->jsPackage('larakit.form/formfield-textarea.js')
    ->jsPackage('larakit.form/formfield-text.js')
    ->jsPackage('larakit.form/formfield-radio.js')
    ->jsPackage('larakit.form/formfield-select.js')
    ->jsPackage('larakit.form/formfield-date.js')
    ->cssPackage('larakit.form/example.css')
    //larakit.entity
    ->ngModule('larakit.entity')
    ->jsPackage('larakit.entity.js')
    ->jsPackage('larakit.entity/entity-form.js')
    ->jsPackage('larakit.entity/entity-list.js')
    //larakit
    
;
