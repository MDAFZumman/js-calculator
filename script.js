var result = document.getElementById("result");

        function calculate(newValue) {
            result.value += newValue;
        }

        function answer() {
            var a = result.value;
            var b = eval(a);
            result.value = b;
        }

        function del() {
            result.value = result.value.slice(0,-1); 
        }

        function clearAll() {
            result.value = " ";
        }