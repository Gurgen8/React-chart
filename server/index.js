import express from "express";
import { dataChartLine,dataChartPie,dataGoogleChart,userData,traficData } from "./data";
const app = express();


///routes

app.use("/chartdataline", (req, res) => {
   
    res.status(200).json(dataChartLine)
})

app.use("/chartdatapie", (req, res) => {
    
    res.status(200).json(dataChartPie)

})
app.use("/chartdatagoogle", (req, res) => {
    
    res.status(200).json(dataGoogleChart)

})
app.use("/traficdata", (req, res) => {
    
    res.status(200).json(traficData)

})
app.use("/userdata", (req, res) => {
    
    res.status(200).json(userData)

})


//runing server

app.listen(5000 || process.env.PORT, () => {
    console.log("Server is running!");
});