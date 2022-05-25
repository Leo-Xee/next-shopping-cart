import { setupServer, SetupServerApi } from "msw/node";
import handlers from "./handlers";

const server: SetupServerApi = setupServer(...handlers);

export default server;
