angular.module('rmApp.services', ['ngResource'])

    .factory('RMFactory',['$resource', function($resource) {


        return {
            Rmlist: $resource('json_data/rmlist.json', {}, {
                query: {method: 'GET', isArray: true}
            }),
            getlist: $resource('http://10.58.79.222:8080/MerpConsole/MerpServlet?event=0001&REL_GROUP=02&REL_CODE=PU', {}, {
                query: {method: 'GET', isArray: true}

            }),
             getplist: $resource('http://10.58.79.222:8080/MerpConsole/MerpServlet?:p_bapi_param', {}, {
                query: {method: 'GET', params: {p_bapi_param: ''}}
            }),
            gettlist: $resource('http://10.58.79.222:8080/MerpConsole/MerpServlet?:p_bapi_param', {p_bapi_param:'@p_bapi_param'}, {
                query: {method: 'GET', isArray: false}
            })
                
            
            
//            findAll: function() {
//                var deferred = $q.defer();
//                deferred.resolve(employees);
//                return deferred.promise;
//            },
//
//            findById: function(employeeId) {
//                var deferred = $q.defer();
//                var employee = employees[employeeId - 1];
//                deferred.resolve(employee);
//                return deferred.promise;
//            },
//
//            findByName: function(searchKey) {
//                var deferred = $q.defer();
//                var results = employees.filter(function(element) {
//                    var fullName = element.firstName + " " + element.lastName;
//                    return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
//                });
//                deferred.resolve(results);
//                return deferred.promise;
//            },
//
//            findByManager: function (managerId) {
//                var deferred = $q.defer(),
//                    results = employees.filter(function (element) {
//                        return parseInt(managerId) === element.managerId;
//                    });
//                deferred.resolve(results);
//                return deferred.promise;
//            }

        }

    }]);