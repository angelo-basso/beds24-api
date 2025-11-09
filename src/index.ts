import {createServer} from "./server";
import repository from "./db/repository";

const server = createServer();

const port = process.env.PORT || 3000;

server.listen(port, async () => {
    console.log(`API is running on ${port}`);
});