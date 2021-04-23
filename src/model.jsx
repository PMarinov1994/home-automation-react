const temp = (state = dataTemp, action) => {
    return state;
}

const battery = (state = dataBattery, action) => {
    return state;
}

const humidity = (state = dataHumidity, action) => {
    return state;
}

const pressure = (state = dataPressure, action) => {
    return state;
}

export {
    temp,
    battery,
    humidity,
    pressure
}


const dataTemp = [
    {
        name: "10.03 12:06",
        temp: 18,
    },
    {
        name: "12.03 12:01",
        temp: 10,
    },
    {
        name: "12.03 12:03",
        temp: 30,
    },
    {
        name: "12.01 12:00",
        temp: 20,
    },
    {
        name: "12.03 12:05",
        temp: 27,
    },
    {
        name: "12.03 12:07",
        temp: 23,
    },
    {
        name: "12.03 12:07",
        temp: 23,
    },
    {
        name: "12.03 12:07",
        temp: 23,
    },
    {
        name: "12.03 12:07",
        temp: 23,
    },
    {
        name: "12.03 12:07",
        temp: 23,
    },
    {
        name: "12.03 12:07",
        temp: 23,
    },
    {
        name: "12.03 12:07",
        temp: 23,
    },
    {
        name: "12.03 12:07",
        temp: 23,
    },
    {
        name: "12.03 12:07",
        temp: 23,
    },
    {
        name: "12.03 12:08",
        temp: 34,
    }
];


const dataBattery = [
    {
        name: "10.03 12:06",
        battery: 3.3,
    },
    {
        name: "12.03 12:01",
        battery: 3.4,
    },
    {
        name: "12.03 12:03",
        battery: 3.4,
    },
    {
        name: "12.01 12:00",
        battery: 4,
    },
    {
        name: "12.03 12:05",
        battery: 4.4,
    },
    {
        name: "12.03 12:07",
        battery: 2.8,
    },
    {
        name: "12.03 12:07",
        battery: 2.8,
    }
];

const dataHumidity = [
    {
        name: "10.03 12:06",
        humidity: 20,
    },
    {
        name: "12.03 12:01",
        humidity: 40,
    },
    {
        name: "12.03 12:03",
        humidity: 46,
    },
    {
        name: "12.01 12:00",
        humidity: 70,
    },
    {
        name: "12.03 12:05",
        humidity: 30,
    },
    {
        name: "12.03 12:07",
        humidity: 10,
    },
    {
        name: "12.03 12:07",
        humidity: 2.8,
    }
];

const dataPressure = [
    {
        name: "10.03 12:06",
        pressure: 1000,
    },
    {
        name: "12.03 12:01",
        pressure: 1001,
    },
    {
        name: "12.03 12:03",
        pressure: 1002,
    },
    {
        name: "12.01 12:00",
        pressure: 1003,
    },
    {
        name: "12.03 12:05",
        pressure: 995,
    },
    {
        name: "12.03 12:07",
        pressure: 990,
    },
    {
        name: "12.03 12:07",
        pressure: 980,
    }
];
