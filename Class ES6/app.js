function makeClass() {
    class Thermostat {
        constructor(farenheitTemp) {
            this._temperature = (farenheitTemp - 32) * 5/9
        }

        get temperature(){
            return this._temperature;
        }

        set temperature(parTemperature){
            this._temperature = parTemperature
        }
    }
    return Thermostat
}

const Thermostat = makeClass()
const thermos = new Thermostat(76)
let temp = thermos.temperature
console.log(temp)

thermos.temperature = 26
temp = thermos.temperature

console.log(temp)