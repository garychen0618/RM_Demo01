angular.module('rmApp.services', [])
    .service('RMService', function($http) {
        var ResultAPI = {};
        ResultAPI.CheckIn = function(LoginData)
        {
            return $http({
                method: 'POST',
                url: 'http://api.everlive.com/v1/FrJpUatB0N9yp35W/oauth/token',
                data: LoginData,
                headers: {'Content-Type': 'application/json'}
            });
        };
        ResultAPI.CreateAccount = function(RegistData)
        {
            return $http({
                method: 'POST',
                url: 'http://api.everlive.com/v1/FrJpUatB0N9yp35W/Users',
                data: RegistData,
                headers: {'Content-Type': 'application/json'}
            });
        };
        ResultAPI.Rmlist = function()
        {
            return $http({
                method: 'GET',
                url: 'http://api.everlive.com/v1/FrJpUatB0N9yp35W/rm_apps'
                //url: 'json_data/rmlist.json'
            });
        };
        ResultAPI.getpolist = function(REL_GROUP,REL_CODE)
        {
            return $http({
                method: 'GET',
                url: 'http://10.58.79.222:8080/MerpConsole/MerpServlet?event=0001&REL_GROUP='+REL_GROUP+'&REL_CODE='+REL_CODE
            });
        };
        ResultAPI.poapprove = function(REL_CODE,PURCHASEORDER)
        {
            return $http({
                method: 'GET',
                url: 'http://10.58.79.222:8080/MerpConsole/MerpServlet?event=0002&PO_REL_CODE='+REL_CODE+'&PURCHASEORDER='+PURCHASEORDER
            });
        };
        return ResultAPI;
});
//        return {
//            Rmlist: $resource('json_data/rmlist.json', {}, {
//                query: {method: 'GET', isArray: true}
//            }),
//            getlist: $resource('http://10.58.79.222:8080/MerpConsole/MerpServlet?event=0001&REL_GROUP=02&REL_CODE=PU', {}, {
//                query: {method: 'GET', isArray: true}
//
//            }),
//            test: $resource('http://api.everlive.com/v1/FrJpUatB0N9yp35W/rm_apps', {}, {
//                query: {method: 'GET', isArray: true}
//
//            }),
//            getplist: $resource('http://10.58.79.222:8080/MerpConsole/MerpServlet?:p_bapi_param', {}, {
//                query: {method: 'GET', params: {p_bapi_param: ''}}
//            }),
//            gettlist: $resource('http://10.58.79.222:8080/MerpConsole/MerpServlet?:p_bapi_param', {p_bapi_param:'@p_bapi_param'}, {
//                query: {method: 'GET', isArray: false}
//            })
//        }

