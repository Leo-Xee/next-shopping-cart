import "@testing-library/jest-dom/extend-expect";
import server from "./src/mocks/server";
import { fetch, Headers, Request, Response } from "cross-fetch";
import AbortController from "abort-controller";

/* https://github.com/reduxjs/redux-toolkit/issues/1271 */
global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;
global.AbortController = AbortController;

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
