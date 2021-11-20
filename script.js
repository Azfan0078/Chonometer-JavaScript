//Elements
    const spanMinutes = document.createElement('span')
        spanMinutes.setAttribute('id', 'minutes')
        spanMinutes.innerText = '0'
    const spanHours = document.createElement('span')
        spanHours.setAttribute('id', 'hours')
        spanHours.innerText = '0'   
//Indexes   
    let hours = 0
    let minutes = 0
    let seconds = 0
    let milliseconds = 0
    //counterLoops is a counting of loops
    let counterLoops = 1

let chronometer

//Functions
    function start() {
        //Alternating buttons       
            const buttonStart = document.getElementById('start')
                buttonStart.setAttribute('value' , 'Pause')
                buttonStart.setAttribute('onclick', 'pause()')
            const buttonReset = document.getElementById('reset')
                buttonReset.setAttribute('value', 'Loop')
                buttonReset.setAttribute('onclick', 'loop()')
        //Setting interval
            chronometer = setInterval(() => { timer() },10)
    }
    function pause() {
        //Alternating buttons
            const buttonStart = document.getElementById('start')
                buttonStart.setAttribute('value', 'Start')
                buttonStart.setAttribute('onclick', 'start()')
            const buttonReset = document.getElementById('reset')
                buttonReset.setAttribute('value', 'Reset')
                buttonReset.setAttribute('onclick', 'reset()')
        //Stoping interval
            clearInterval(chronometer)
    }
    function reset() {
        //Reset indexes
            seconds = 0
            milliseconds = 0
            minutes = 0
            hours = 0
            counterLoops = 1
        //Reset divs
            document.getElementById('divLoop').innerHTML = ''
            document.getElementById('seconds').innerHTML = '00s'
            document.getElementById('milliseconds').innerHTML = '000'
            spanMinutes.remove()
            spanHours.remove()        
    }
    function loop() {
        //Saving loops
            if(seconds >= 60 && minutes < 60){
                document.getElementById('divLoop').innerHTML += `<strong>${counterLoops}</strong>: ${minutes}m ${seconds}s ${milliseconds}ms<br>` 
            }else if(minutes >= 60){
                document.getElementById('divLoop').innerHTML += `<strong>${counterLoops}</strong>: ${hours}h ${minutes}m ${seconds}s ${milliseconds}ms<br>`
            }else{
                document.getElementById('divLoop').innerHTML += `<strong>${counterLoops}</strong>: ${seconds}s ${milliseconds}ms<br>`
            }
        //counterLoops is a counting of loops
            counterLoops++  
    }

    function timer() {
        //OBS: I'am using the tag "**" for agroup some lines.
        //A comand in the tag call a function, and write in screen  
        
        //Milliseconds counting
            if((milliseconds += 10) === 1000){
                milliseconds = 0
                seconds++
            }
        //Seconds counting
            if(seconds == 60){      
                document.getElementById('stopWatch').insertBefore(spanMinutes , document.getElementById('seconds'))           
                seconds = 0
                minutes++
                //** 
                    spanMinutes.innerText = returnData(minutes,minutes)
            }
        //Minutes counting
            if(minutes == 60){
                document.getElementById('stopWatch').insertBefore(spanHours , spanMinutes)
                minutes = 0
                hours++
                //**
                    spanHours.innerText = returnData(hours,hours)
            }
        //**
            document.getElementById('seconds').innerHTML = returnData(seconds, seconds)
            document.getElementById('milliseconds').innerHTML = returnData(milliseconds, milliseconds)
    
    }
    function returnData(i, unit ) {
        //Adding a unit of measurement
            if(unit === seconds){
                return i >= 10 ? `${i}s` : `0${i}s`
            }
            if(unit === milliseconds){
                return i >= 10 ? `${i}` : `${i}`
            }
            if(unit === minutes){
                return i >= 10 ? `${i}m ` : `0${i}m `
            }
            if(unit === hours){
                return i >= 10 ? `${i}h ` : `0${i}h `
            }       
    }
