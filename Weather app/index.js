var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
apik = "f8461d5b910bd501592d457d67a37628"
function convertion(val)
{
	return (val-273).toFixed(3)/*toFixed(3) is used to limit the decimal to 3 digits*/
}
btn.addEventListener('click',function()
{
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
	.then(res => res.json())

	.then(data =>
	{
		var nameval = data['name']
		var descri = data['weather']['0']['description']
		var temperature = data['main']['temp']
		var wndspeed = data['wind']['speed']

		city.innerHTML = `Weather of <span>${nameval}<span>`
		temp.innerHTML = `Tempature: <span>${convertion(temperature)} C<span>`
		description.innerHTML = `Sky Conditions:<span>${descri}<span>`
		wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h<span>`
	})

	.catch(err => alert('You entered wrong city name'))
})
