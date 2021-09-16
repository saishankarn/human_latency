function _timer(callback)
{
    var time = 0;     //  The default time of the timer
    var status = 0;    //    Status: timer is running or stoped
    var timer_id;    //    This is used by setInterval function
    var start_time = 0;
    var end_time = 0;
    var counter = 3;
    var url = "";
    
    // this will start the timer ex. start the timer with 1 second interval timer.start(1000) 
    this.start = function()
    { 
        
        url = "images/reference_" + counter.toString() + ".jpg";
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
        start_time = 0;
        end_time = 0;   
        time = 0;
        generateTime();
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
    function myFunction() 
    {
        var x = document.getElementById("Num Objects").value;
        document.getElementById("value").innerHTML = x;
        writeTextFile('/home/saisai/labels.txt', 'jjjjj');
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


