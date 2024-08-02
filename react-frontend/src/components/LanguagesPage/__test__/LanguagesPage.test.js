import React from "react";
import { render, screen } from "@testing-library/react";

import LanguagesPage from "../LanguagesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders languages page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <LanguagesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("languages-datatable")).toBeInTheDocument();
    expect(screen.getByRole("languages-add-button")).toBeInTheDocument();
});
