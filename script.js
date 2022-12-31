let now = new Date, refreshID = null;
const [timerThisYear, timerNextYear] = [new Timer(new Date(now.getFullYear(), 0, 1, 0, 0, 0, 0)), new Timer(new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0, 0))],
	[daysThis, hoursThis, minutesThis, secondsThis] = [document.querySelector('#days-this'), document.querySelector('#hours-this'), document.querySelector('#minutes-this'), document.querySelector('#seconds-this')],
	[daysNext, hoursNext, minutesNext, secondsNext] = [document.querySelector('#days-next'), document.querySelector('#hours-next'), document.querySelector('#minutes-next'), document.querySelector('#seconds-next')];


function refresh() {
	let [timingThisYear, timingNextYear] = [timerThisYear.timing(), timerNextYear.timing()];

	if (!timerNextYear.countdown) {
		now = new Date;
		timerThisYear.reset(new Date(now.getFullYear(), 0, 1, 0, 0, 0, 0));
		timerNextYear.reset(new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0, 0));
		[timingThisYear, timingNextYear] = [timerThisYear.timing(), timerNextYear.timing()];
	}

	[daysThis.innerText, hoursThis.innerText, minutesThis.innerText, secondsThis.innerText]
		= [timingThisYear.days, timingThisYear.hours, timingThisYear.minutes, timingThisYear.seconds];

	[daysNext.innerText, hoursNext.innerText, minutesNext.innerText, secondsNext.innerText]
		= [timingNextYear.days, timingNextYear.hours, timingNextYear.minutes, timingNextYear.seconds];
}

function startRefresh() {
	return refreshID = setInterval(refresh, 200);
}

function stopRefresh() {
	refreshID = clearInterval(refreshID);
}


[document.querySelector('#thisYear').innerText, document.querySelector('#nextYear').innerText] = [now.getFullYear(), now.getFullYear() + 1];
console.log(`Refresh ID: ${startRefresh()}`);