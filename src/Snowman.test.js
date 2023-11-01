import React from "react";
import { render, fireEvent, toBeInTheDocument, toContainHTML } from "@testing-library/react";
import Snowman from "./Snowman";

describe("Snowman", function () {
    test("renders without crashing", function () {
        render(<Snowman />);
    });

    test("start matches snapshot", function () {
        const { container } = render(<Snowman />);
        expect(container).toMatchSnapshot();
    });

    test("lose state matches snapshot", function () {
        const { container } = render(<Snowman />);
        fireEvent.click(container.querySelector("#m"));
        fireEvent.click(container.querySelector("#o"));
        fireEvent.click(container.querySelector("#h"));
        fireEvent.click(container.querySelector("#f"));
        fireEvent.click(container.querySelector("#w"));
        fireEvent.click(container.querySelector("#v"));
        expect(container).toMatchSnapshot();
    });

    test("lose state does has final image", function () {
        const { container } = render(<Snowman />);
        fireEvent.click(container.querySelector("#m"));
        fireEvent.click(container.querySelector("#o"));
        fireEvent.click(container.querySelector("#h"));
        fireEvent.click(container.querySelector("#f"));
        fireEvent.click(container.querySelector("#w"));
        fireEvent.click(container.querySelector("#v"));
        console.log(container);
        expect(container.querySelector("img")).toContainHTML(`src="6.png"`);
    });

    test("lose state does not show button-area and shows 'You lose' ", function () {
        const { container } = render(<Snowman />);
        fireEvent.click(container.querySelector("#m"));
        fireEvent.click(container.querySelector("#o"));
        fireEvent.click(container.querySelector("#h"));
        fireEvent.click(container.querySelector("#f"));
        fireEvent.click(container.querySelector("#w"));
        fireEvent.click(container.querySelector("#v"));
        expect(container.querySelector(".snowman-button-area")).not.toBeInTheDocument();
        expect(container).toContainHTML("<p>You Lose</p>");
    });
});