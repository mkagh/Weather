//mora da se ukuca celo ime grada
//ako bi hteo da pozovem sve gradove koji sadrze neko slovo morao
//bih da pozovem sve pa da ih filterujem u mome kodu
const key = "d0c14c1d4f9851bd4d6c51cede0f2abf"
const klik = document.querySelector(".klik")
const wrapper = document.querySelector(".wrapper")
const input = document.querySelector("input")
const grad = document.querySelector(".grad")
const temper = document.querySelector(".temp")
const des = document.querySelector(".des")
const wind = document.querySelector(".wind")
const imageDiv = document.querySelector(".image")
const image = document.querySelector(".image img")
let isBright;

klik.addEventListener("click", () => {
    const inp = input.value
    console.log(inp)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=${key}`)
        .then((response) => response.json()
        )
        .then((data) => {
            console.log(data)
            const { speed, deg } = data.wind
            const { temp } = data.main
            const { description } = data.weather[0]
            function contains(search) {
                return description.includes(search);
            }
            switch (true) {
                case contains("clear"):
                    isBright = "images/sun.jpg"
                    break;
                case contains("haze"):
                    isBright = "images/fog.jpg"
                    break;
                case contains("clouds"):
                    isBright = "images/clouds.jpg"
                    break;


            }
            return (
                grad.innerHTML = inp.toUpperCase(),
                wind.innerHTML = "Speed and deg are <br/> " + speed + " i " + deg,
                temper.innerHTML = temp + " far ",
                des.innerHTML = description,
                wrapper.style.backgroundImage = `url(./${isBright}) `


            )
        })

})
/* klik.addEventListener("click", async () => {

    console.log("klik")
    const inp = input.value
    console.log(inp)
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=${key}`)
    const data = response.data
    const { speed, deg } = data.wind
    const { temp } = data.main
    const { description } = data.weather[0]
    console.log(wind)
    return (
        grad.innerHTML = inp,
        wind.innerHTML = "Brzina i deg su" + speed + " " + deg,
        temper.innerHTML = temp,
        des.innerHTML = description

    )
})
 */
