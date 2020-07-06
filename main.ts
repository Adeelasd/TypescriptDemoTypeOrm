import Express from "express";
import bodyParser from "body-parser";
import RouteHandeler from "./router";

let app = Express()
app.use(bodyParser.json())

app.use(RouteHandeler)

app.listen(3000)