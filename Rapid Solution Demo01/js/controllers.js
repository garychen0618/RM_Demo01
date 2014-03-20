angular.module('rmApp.controllers', [])

    .controller('CheckInCtrl', function ($scope,$location, RMService) {
        $scope.user = [];
        $scope.CheckIn = function()
        {
                var LoginData = {
                    "username": $scope.user.user_name,
                    "password": $scope.user.password,
                    "grant_type": "password"
                };
                RMService.CheckIn(LoginData).success(function() {
                    //alert('OK');
                    $location.path('/rm-home');
                }).error(function(dataResponse) {
                    alert(dataResponse.message);
                });
        };
        })
    .controller('CreateAccountCtrl', function ($scope,$location, RMService) {
        $scope.user = [];
        $scope.CreateAccount = function()
        {
                var RegistData = {
                    "Username": $scope.user.username,
                    "Password": $scope.user.password,
                    "DisplayName": $scope.user.display_name,
                    "Email": $scope.user.email
                };
                RMService.CreateAccount(RegistData).success(function() {
                    //alert('OK');
                    $location.path('#/home');
                }).error(function(dataResponse) {
                    console.log($scope.user.username);
                    console.log($scope.user.password);
                    console.log($scope.user.display_name);
                    console.log($scope.user.email);
                    alert(dataResponse.message);
                });
        };
        })
        
    .controller('RMListCtrl', function ($scope, RMService) {
        RMService.Rmlist().success(function(dataResponse) {
        $scope.rmlists = dataResponse;
    }).error(function(){});
    })
    
    .controller('POACtroller', function($scope, RMService)
    {
        $scope.po_rel =[];
        $scope.P_Title = "PO Search";
        
        $scope.page_po_query = "true";
        $scope.page_po_list = "false";
        
        //alert('bbb');
        $scope.POQuery = function()
        {
            //var p_bapi_param = 'event=0001&REL_GROUP=02&REL_CODE=PU';
            //alert('aaaa');
            //var p_bapi_param = 'event=0001&REL_GROUP=' + $scope.po_rel.REL_GROUP + '&REL_CODE=' + $scope.po_rel.REL_CODE;
            //alert(p_bapi_param );
            //console.log($scope.po_rel.REL_GROUP);
            RMService.getpolist($scope.po_rel.REL_GROUP,$scope.po_rel.REL_CODE).success(function(polist)
            {
                //console.log(PurchaseOrders.RETURN[0].TYPE);
                if(polist.RETURN[0].TYPE == 'E')
                {
                    alert('No PO Number exist!');
                    //navigator.notification.alert('No PO Number exist!');
                    $scope.page_po_query = "true";
                    $scope.page_po_list = "false";
                    $scope.P_Title = "PO Search";
                }
                else
                {
                    $scope.PurchaseOrders = polist;
                    $scope.page_po_query = "false";
                    $scope.page_po_list = "true";
                    $scope.P_Title = "Purchase Order List";
                }
            }).error(function(){
                    $scope.page_po_query = "true";
                    $scope.page_po_list = "false";
                    $scope.P_Title = "PO Search";
                });
        };
        
        $scope.Back1 = function(){
            $scope.page_po_query = "true";
            $scope.page_po_list = "false";
            $scope.page_po_item_list = "false";
            $scope.P_Title = "PO Search";
        };
        
        $scope.Back2 = function(){
            $scope.page_po_query = "false";
            $scope.page_po_list = "true";
            $scope.page_po_item_list = "false";
            $scope.P_Title = "Purchase Order List";
        };
        
        $scope.DisplayPO = function(idx) {
            $scope.po_index = idx;
            $scope.po = $scope.PurchaseOrders.PO_HEADERS[idx];
            //console.log($scope.po.PO_NUMBER);
            $scope.page_po_query = "false";
            $scope.page_po_list = "false";
            $scope.page_po_item_list = "true";
            $scope.P_Title = "Purchase Order for: "+$scope.po.PO_NUMBER;
        };
        
        $scope.DisplayPOItem = function(idx) {

            $scope.poItem_index = idx;
            $scope.poItem = $scope.po.PO_ITEMS[idx];
            $scope.page_po_query = "false";
            $scope.page_po_list = "false";
            $scope.page_po_item_list = "false";
            $scope.page_po_item_detail = "true";
            $scope.P_Title = "Purchase Order Item for: "+$scope.po.PO_NUMBER+"/"+$scope.poItem.PO_ITEM;
        };
        
        $scope.ApprovePO = function(idx) {
            
            //event=0002&PO_REL_CODE=PU&PURCHASEORDER=4500017457
            //var p_bapi_param = 'event=0002&PO_REL_CODE=' + $scope.po_rel.REL_CODE + '&PURCHASEORDER=' + $scope.PurchaseOrders.PO_HEADERS[idx].PO_NUMBER;
            RMService.poapprove($scope.po_rel.REL_CODE,$scope.PurchaseOrders.PO_HEADERS[idx].PO_NUMBER).success(function(Result_App)
            {
                if (Result_App.RETURN[0].TYPE == 'E')
                {
                    alert('Approve Operation Error!');
                }
                else
                {
                    $scope.PurchaseOrders.PO_HEADERS.splice(idx, 1);
                }
            }).error(function(){
                });
            $scope.page_po_query = "false";
            $scope.page_po_list = "true";
            $scope.page_po_item_list = "false";
            $scope.page_po_item_detail = "false";
            $scope.P_Title = "Purchase Order List";
        };
    })
                
        
//        
        
//        
        
//        
        
//        
        
        
        //var p_bapi_param = 'event=0001&REL_GROUP=02&REL_CODE=PU';
        //$scope.poas = RMFactory.getplist.get({p_bapi_param:p_bapi_param});
        //EmployeeService.gettlist.query(function(data){$scope.poas = data;});
    
    
    .controller('PRACtroller', function($scope, RMService){
        $scope.device = device;
        //alert('aa');
        $scope.connection =[];
        $scope.connection = navigator.connection.type;
        //alert(navigator.connection.type);
     })
	
    .controller('SETCtroller', function($scope, RMService){
        $scope.device = device;
        //alert('aa');
        var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.CELL]     = 'Cell generic connection';
            states[Connection.NONE]     = 'No network connection';
        var networkState = navigator.connection.type;
        $scope.connection = states[networkState];
        $scope.connect_time = new Date().toLocaleTimeString().split(" ")[0];
        //alert(navigator.connection.type);
     })

