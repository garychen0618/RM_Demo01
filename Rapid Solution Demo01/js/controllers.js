angular.module('rmApp.controllers', [])

    .controller('RMListCtrl', function ($scope, RMFactory) {

        $scope.searchKey = "";

        $scope.clearSearch = function () {
            $scope.searchKey = "";
            findAllEmployees();
        }

        $scope.search = function () {
            RMFactory.findByName($scope.searchKey).then(function (employees) {
                $scope.employees = employees;
            });
        }

        var findAllEmployees = function() {
            RMFactory.findAll().then(function (employees) {
                $scope.employees = employees;
            });
        }

        //findAllEmployees();
        $scope.rmlists = RMFactory.Rmlist.query();

    })

    .controller('EmployeeDetailCtrl', function ($scope, $stateParams, RMFactory) {
        RMFactory.findById($stateParams.employeeId).then(function(employee) {
            $scope.employee = employee;
        });
    })
    
	.controller('PRACtroller', function($scope, RMFactory){
        $scope.device = device;
        alert('aa');
        alert(navigator.connection.type);
     })

    .controller('POACtroller', function($scope, RMFactory){
        //$scope.poas = EmployeeService.getlist.query();
//        $scope.REL_CODE = '';
//        $scope.REL_GROUP = '';
        
        $scope.po_rel =[];
        $scope.P_Title = "PO Search";
        
        $scope.page_po_query = "true";
        $scope.page_po_list = "false";
        
        //alert('bbb');
        $scope.POQuery = function() {
            //var p_bapi_param = 'event=0001&REL_GROUP=02&REL_CODE=PU';
            //alert('aaaa');
            var p_bapi_param = 'event=0001&REL_GROUP=' + $scope.po_rel.REL_GROUP + '&REL_CODE=' + $scope.po_rel.REL_CODE;
            //alert(p_bapi_param );
            console.log($scope.po_rel.REL_GROUP);
            $scope.PurchaseOrders = RMFactory.getplist.get({p_bapi_param:p_bapi_param},function(PurchaseOrders)
            {
                //console.log(PurchaseOrders.RETURN[0].TYPE);
                if(PurchaseOrders.RETURN[0].TYPE == 'E')
                {
                    alert('No PO Number exist!');
                    $scope.page_po_query = "true";
                    $scope.page_po_list = "false";
                    $scope.P_Title = "PO Search";
                }
                else
                {
                $scope.page_po_query = "false";
                $scope.page_po_list = "true";
                $scope.P_Title = "Purchase Order List";
                }
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
            var p_bapi_param = 'event=0002&PO_REL_CODE=' + $scope.po_rel.REL_CODE + '&PURCHASEORDER=' + $scope.PurchaseOrders.PO_HEADERS[idx].PO_NUMBER;
            $scope.Result_App = RMFactory.getlist.get({p_bapi_param: p_bapi_param}, function(Result_App) {
                if (Result_App.RETURN[0].TYPE == 'E')
                {
                    alert('Approve Operation Error!');
                }
                else
                {
                    $scope.PurchaseOrders.PO_HEADERS.splice(idx, 1);
                }
                
            });
            $scope.page_po_query = "false";
            $scope.page_po_list = "true";
            $scope.page_po_item_list = "false";
            $scope.page_po_item_detail = "false";
            $scope.P_Title = "Purchase Order List";
        };
        
        //var p_bapi_param = 'event=0001&REL_GROUP=02&REL_CODE=PU';
        //$scope.poas = RMFactory.getplist.get({p_bapi_param:p_bapi_param});
        //EmployeeService.gettlist.query(function(data){$scope.poas = data;});
    })

    .controller('EmployeeReportsCtrl', function ($scope, $stateParams, RMFactory) {
        RMFactory.findByManager($stateParams.employeeId).then(function(employees) {
            $scope.employees = employees;
        });
    });
