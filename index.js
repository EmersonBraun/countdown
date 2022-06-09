const deadline = new Date(Date.parse(new Date()) + 1000 * 60 * 60 * 24 * 10)// 10 dias

function getTimeRemaining(endTime) {
    const total = Date.parse(endTime) - Date.parse(new Date())
    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
    const days = Math.floor((total / (1000 * 60 * 60 * 24)))

    return {
        seconds,
        minutes,
        hours,
        days
    }
}

function addZero(value) {
    if(value >= 10) return value
    return '0' + value
}

function initilizeClock(id, endTime) {
    const clock = document.getElementById(id)
    const daysSpan = clock.querySelector('#days')
    const hoursSpan = clock.querySelector('#hours')
    const minutesSpan = clock.querySelector('#minutes')
    const secondsSpan = clock.querySelector('#seconds')

    function updateClock() {
        const timeRemaining = getTimeRemaining(endTime)
        daysSpan.innerHTML = addZero(timeRemaining.days)
        hoursSpan.innerHTML = addZero(timeRemaining.hours)
        minutesSpan.innerHTML = addZero(timeRemaining.minutes)
        secondsSpan.innerHTML = addZero(timeRemaining.seconds)

        if(timeRemaining.total <= 0) {
            clearInterval(timeInterval)
        }
    }

    updateClock()
    const timeInterval = setInterval(updateClock, 1000)
}

initilizeClock('clock', deadline)