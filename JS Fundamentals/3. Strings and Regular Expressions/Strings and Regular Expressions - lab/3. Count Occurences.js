    function countOccurences(filterString, string) {
        var counter =0;
        if(filterString=== undefined){
            filterString = '';
        }
        if(string=== undefined){
            string = '';
        }
        while(string.indexOf(filterString)>-1){
            counter++;   
            string = string.replace(filterString, '');
        }
        console.log(counter);
    }