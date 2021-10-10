function padLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function _timer(callback)
{
    var time = 0;     //  The default time of the timer
    var status = 0;    //    Status: timer is running or stoped
    var timer_id;    //    This is used by setInterval function
    var start_time = 0;
    var end_time = 0;
    var counter = 0;
    var url = "";
    var saved_json = {};
    var npyArray = [724,1532,1584,2006,5037,6040,6723,7088,7386,8762,9769,9891,10363,11197,11615,13348,14380,15338,15440,15517,17029,
                    17178,17207,17627,18837,19042,21839,22755,23272,25393,26204,26926,27768,30828,31118,32334,32941,33109,33221,33759,
                    33854,38048,39484,40083,41633,42070,43737,44590,45596,46872,47828,50679,52007,52412,53529,53994,54593,54967,55150,
                    55167,57149,57597,57672,58539,59386,61108,64523,65350,65485,67213,67616,68093,69138,69356,74058,74256,76416,76417,
                    78823,79034,81394,82821,82846,84170,84362,84492,84752,85376,86220,86483,87144,88432,88462,89556,90208,93154,94751]
 
    // this will start the timer ex. start the timer with 1 second interval timer.start(1000) 
    this.start = function()
    { 
        url = "coco-images-test/" + padLeadingZeros(npyArray[counter], 12).toString() + ".jpg";
        counter++;
        var myImageElement = document.getElementById('image');
        myImageElement.src = url;
        
        if(status == 0)
        {
            status = 1;
            start_time = performance.now();
        }


    }
    
    //  Same as the name, this will stop or pause the timer ex. timer.stop()
    this.stop =  function()
    {
        if(status == 1)
        {
            status = 0;
            end_time = performance.now();
            time = end_time - start_time 
            generateTime(); 
        }
    }
    
    // Reset the timer to zero or reset it to your own custom time ex. reset to zero second timer.reset(0)
    this.reset =  function(sec)
    {
        generateTime();
        start_time = 0;
        end_time = 0;   
        time = 0;
        //generateTime();
    }

    this.save = function(){
        var x = document.getElementById("Objects").value;
        document.getElementById("value").innerHTML = x;
        var time = getTime();
        var json_var = {"time" : time, "NumObjects" : x, "filename" : padLeadingZeros(npyArray[counter-1], 12).toString() + ".jpg"};
        saved_json[counter.toString()] = json_var         
    }

    this.submit = function(){

        ///json stringify-> use that variable
        const myJSON = JSON.stringify(saved_json)
        var blob = new Blob([myJSON],
            { type: "text/plain;charset=utf-8" });
        saveAs(blob, "test_save.txt");
    }
    
    function getTime()
    {
        var millisecond = Math.floor(time % 1000);
        var second = Math.floor(time / 1000) % 60;
        var minute = Math.floor(time / 60000) % 60;

        return [millisecond, second, minute];
    }

    // This methode will render the time variable to hour:minute:second format
    function generateTime()
    {
        var millisecond = Math.floor(time % 1000);
        var second = Math.floor(time / 1000) % 60;
        var minute = Math.floor(time / 60000) % 60;
        
        millisecond = (millisecond < 10) ? '0'+millisecond : millisecond;
        second = (second < 10) ? '0'+second : second;
        minute = (minute < 10) ? '0'+minute : minute;
        
        $('div.timer span.millisecond').html(millisecond);
        $('div.timer span.second').html(second);
        $('div.timer span.minute').html(minute);
    }
 


    function writeTextFile(afilename, output)
    {
        var txtFile =new File(afilename);
        txtFile.writeln(output);
        txtFile.close();
    }

}
 
// example use
var timer;
 
$(document).ready(function(e) 
{
    function myFunction(){

    }
 
    timer = new _timer
    (
        function(time)
        {
            if(time == 0)
            {
                timer.stop();
                alert('time out');
            }
        }
    );
    timer.reset(0);
});


