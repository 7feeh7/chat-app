import { serverHttp } from "./app";
import "dotenv/config";
import "./websocket";

serverHttp.listen(process.env.PORT || 3333);