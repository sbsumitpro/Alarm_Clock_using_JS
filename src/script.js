const setAlarmBtn = $("from button")
const alarmList = $(".alarm-time-container")
let count = 1   // This is helpful for deleting a alarm from all the alarm-lists


// Display the current time
const displayTime = $(".current-time")
setInterval(() => {
    let currentTime =new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric',second: 'numeric', hour12: true })
    displayTime.html(currentTime)
}, 1000);


function handleSetAlramButtonClick(e){
    e.preventDefault()
    let hr = $("#hour").val()
    let min = $("#minute").val()
    let sec =$("#second").val()
    let AMPM = $("#AMPM").val()
    // console.log(hr,min, sec, typeof(AMPM));
    alarmList.append('<li><div class="alarm-time"> <span>'+hr+':'+min+':'+sec+' '+ AMPM+'</span><button id="delete-alarm" data_id="'+count+'" type="submit">Delete</button></div></li>')

    count += 1
    let deleteAlarmBtn = $(".alarm-time")
    handleAlarm()

    localStorage.setItem("hr",hr)
    localStorage.setItem("min",min)
    localStorage.setItem("sec",sec)
    localStorage.setItem("AMPM",AMPM)
}

function handleDeleteAlarmButtonClick(e){
    // alert("inisde delete")
    let deleted_id = $(e.target).attr("data_id")
    let delete_btn = document.querySelectorAll(".alarm-time button")
    // console.log(delete_btn);
    delete_btn[deleted_id-1].parentElement.remove()

}

setInterval(handleAlarm,1000)

function handleAlarm(){
        let alarmList = $(".alarm-time span")

     // iterating over all the list of alarm set by the user
        for(let elm of alarmList){
            alarm_time = elm.innerHTML;
            curr_time = $(".current-time").html()
            if(alarm_time == curr_time){
                alert("It's alarm Time!",elm.innerHTML)
            }
        }
}

// click events

$(document).on("click", function(e){
    e.preventDefault()
    let id = e.target.id;
    if(id == "set-alarm"){
        handleSetAlramButtonClick(e)
    }else if(id == "delete-alarm"){
        handleDeleteAlarmButtonClick(e)
    }
})

