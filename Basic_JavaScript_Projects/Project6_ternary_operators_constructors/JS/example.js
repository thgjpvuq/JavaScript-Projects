function countFunction()    {
    document.getElementById("counting").innerHTML = count();
    function count()    {
        var start_point = 9;
        function plus_one() {start_point += 1;}
        plus_one();
        return start_point;
    }
}