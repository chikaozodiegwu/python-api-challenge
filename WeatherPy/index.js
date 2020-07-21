const express = require('express');
const Datastore = require("nedb")
const fetch = require('node-fetch')
require('dotenv').config()

const App = () => {
    return (<button on Click={() => {
        console.log(process.env.weather_api_key, g_key);
    }}>Click Me</button>
}
export default App;