modules = {

    app {
        dependsOn 'jquery, angular-resource, bootstrap'
        resource url: 'css/main.css'
        resource url: 'css/app.css'
        resource url: 'angular/app/js/app.js'
        resource url: 'angular/app/js/controllers.js'
        resource url: 'angular/app/js/filters.js'
        resource url: 'angular/app/js/services.js'
    }

    bootstrap {
        dependsOn 'jquery'
        resource url: 'bootstrap/css/bootstrap.min.css'
        resource url: 'bootstrap/js/bootstrap.min.js'
    }

    angular {
        resource id: 'js', url: [dir: 'angular/app/lib/angular', file: "angular.js"], nominify: true
    }

    'angular-resource' {
        dependsOn 'angular'
        resource id: 'js', url: [dir: 'angular/app/lib/angular', file: "angular-resource.js"], nominify: true
    }

}
