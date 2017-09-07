(function () {
    'use strict';

        describe('specs/app.spec.js', function () {
            describe('convertorCtrl controller of convertorModule', function () {
                var controller, scope, $rootScope;

                beforeEach(function () {
                    
                    module('convertorModule');
                    
                    inject(function ($injector) {
                        controller = $injector.get('$controller');
                        $rootScope = $injector.get('$rootScope');
                        scope = $rootScope.$new();


                        // Instantiates controller
                        controller('convertorCtrl', {
                            $scope: scope
                        });
                    });
                    $rootScope.$digest();
                });

                describe('Basic functionality', function () {
                    it('should return input currency converted into amount in words', function () {
                        var input = 'ho are csdc';
                        scope.convertNum(input);
                        expect(scope.output).toEqual('one hundred twenty three and 75/100 ');
                    });
                });

            });
        });

})();