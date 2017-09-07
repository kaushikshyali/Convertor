(function () {
    'use strict';

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

            describe('Convert given currency in digits into amount in words', function () {
                it('should return amount in words along with cents', function () {
                    var input = '123.75';
                    scope.convertNum(input);
                    expect(scope.output).toEqual('one hundred twenty three and 75/100 ');
                });
                it('should return amount in words when value is 123', function () {
                    var input = '123';
                    scope.convertNum(input);
                    expect(scope.output).toEqual('one hundred twenty three ');
                });
                it('should return amount in words with only at the end when value is 123.0', function () {
                    var input = '123.0';
                    scope.convertNum(input);
                    expect(scope.output).toEqual('one hundred twenty three only');
                });
            });

        });
})();
