import React from "react";
import ReactDOM from "react-dom/client";
import {Appointment} from "../src/Appointment";
import {act} from "react-dom/test-utils";


describe("Appointment", () => {
    let container;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.replaceChildren(container);
    });

    const render = (component) => act(() => ReactDOM.createRoot(container).render(component));

    it("renders the customer firstName", () => {
        const customer = {firstName: "Ashely"};
        render(<Appointment customer={customer} />);
        expect(document.body.textContent).toContain("Ashely");
    });

    it("renders another customer firstName", () => {
        const customer = {firstName: "Jordan"};
        render(<Appointment customer={customer} />);
        expect(document.body.textContent).toContain("Jordan");
    });
});
