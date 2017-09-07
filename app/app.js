var app = angular.module("convertorModule",[]);

app.controller("convertorCtrl", function ($scope) {
    
    var thousandAndAbove = ['', 'thousand', 'million', 'billion', 'trillion'];
    var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; 
    var teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; 

    $scope.convertNum = function (input) {
        
        input = input.toString(); 
        input = input.replace(/[\, ]/g,''); 
        var inputSize = input.indexOf('.');
        
        if (inputSize === -1) {
            inputSize = input.length;
        }
        
        var n = input.split(''); 
        var outputString = ''; 
        var sk = 0;
        
        for (var i = 0; i < inputSize; i++) 
        {
            if ((inputSize - i) % 3 === 2) 
            {
                if (n[i] === '1') 
                {
                    outputString += teen[Number(n[i + 1])] + ' '; 
                    i++; 
                    sk = 1;
                }
                else if (n[i] !== 0) 
                {
                    outputString += tens[n[i] - 2] + ' ';
                    sk = 1;
                }
            }
            else if (n[i] !== 0) 
            {
                outputString += ones[n[i]] + ' '; 
                if ((inputSize - i) % 3 === 0) outputString += 'hundred ';
                sk = 1;
            }

            if ((inputSize - i) % 3 ===1)
            {
                if (sk) outputString += thousandAndAbove[(inputSize-i-1) / 3] + ' ';
                sk = 0;
            }
        }
        if (inputSize !== input.length)
        {
            var y = input.length; 
            outputString += 'and '; 
            for (var i = inputSize + 1; i < y; i++){
                if(input.substring(input.indexOf(".") + 1) > 0){
                    outputString = outputString.substring(0, outputString.indexOf("and") + 3);
                    outputString += " " + input.substring(input.indexOf(".") + 1) + '/100' + ' ';
                }else if(input.substring(input.indexOf(".") + 1) < 0.1){
                    outputString = outputString.substring(0, outputString.indexOf("and")) + "only";
                }

            } 
        }
        $scope.output = outputString.replace(/\s+/g, ' ');
        return outputString.replace(/\s+/g, ' ');
    }

});