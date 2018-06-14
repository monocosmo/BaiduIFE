
        // add
        function add(){
            var first = Number(document.getElementById("first-number").value);
            var second = Number(document.getElementById("second-number").value);
            var result = first + second;
            document.getElementById("result").innerHTML = result;
        }
        // minus
        function minus(){
            var first = Number(document.getElementById("first-number").value);
            var second = Number(document.getElementById("second-number").value);
            var result = first - second;
            document.getElementById("result").innerHTML = result;
        }
        // times
        function times(){
            var first = Number(document.getElementById("first-number").value);
            var second = Number(document.getElementById("second-number").value);
            var result = first * second;
            document.getElementById("result").innerHTML = result;
        }
        // divide
        function divide(){
            var first = Number(document.getElementById("first-number").value);
            var second = Number(document.getElementById("second-number").value);
            if (second == 0){
                result = "0: invalid input"
            } else{
                var result = first / second;
            }
            document.getElementById("result").innerHTML = result;
        }