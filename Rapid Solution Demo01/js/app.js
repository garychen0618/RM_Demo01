// angular.module is a global place for creating, registering and retrieving Angular modules
// 'directory' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'directory.services' is found in services.js
// 'directory.controllers' is found in controllers.js
angular.module('rmApp', ['ionic', 'rmApp.services', 'rmApp.controllers'])


    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'templates/login.html',
                controller: 'CheckInCtrl'
            })
            
            .state('create', {
                url: '/home/create',
                templateUrl: 'templates/create.html',
                controller: 'CreateAccountCtrl'
            })
            
            .state('rm-home', {
                url: '/rm-home',
                templateUrl: 'templates/rm-home.html',
                controller: 'RMListCtrl'
            })

//            .state('employee-detail', {
//                url: '/employee/:employeeId',
//                templateUrl: 'templates/employee-detail.html',
//                controller: 'EmployeeDetailCtrl'
//            })
            
            .state('poa', {
                url: '/rm-home/poa',
                templateUrl: 'templates/poa.html',
                controller: 'POACtroller'
            })
        
        	.state('pra', {
                url: '/rm-home/pra',
                templateUrl: 'templates/pra.html',
                controller: 'PRACtroller'
            })
        
//        	.state('tea', {
//                url: '/rm-home/tea',
//                templateUrl: 'templates/tea.html',
//                controller: 'TEACtroller'
//            })
        
        	.state('setting', {
                url: '/rm-home/setting',
                templateUrl: 'templates/setting.html',
                controller: 'SETCtroller'
            })
            
            .state('userinfo', {
                url: '/rm-home/userinfo',
                templateUrl: 'templates/userinfo.html'
                //controller: 'UserInfoCtroller'
            })
            .state('retrieve', {
                url: '/rm-home/userinfo/retrieve',
                templateUrl: 'templates/retrieve.html'
                //controller: 'UserInfoCtroller'
            })
            .state('update', {
                url: '/rm-home/userinfo/update',
                templateUrl: 'templates/update.html'
                //controller: 'UserInfoCtroller'
            })
            .state('change', {
                url: '/rm-home/userinfo/change',
                templateUrl: 'templates/change.html'
                //controller: 'UserInfoCtroller'
            })
//            .state('employee-reports', {
//                url: '/employee/:employeeId/reports',
//                templateUrl: 'templates/employee-reports.html',
//                controller: 'EmployeeReportsCtrl'
//            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/home');

    });
