import { render, screen } from "@testing-library/react";
import App from "./App";

import { shallow, mount } from "enzyme";
import Country from "./Components/Country/Country";
import Weather from "./Components/Weather/Weather";

import { Provider } from "react-redux";
import store from "./redux/store";

describe("Main page", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test("render the title", () => {
    expect(wrapper.find("h1").text()).toContain("What's the weather today");
  });

  test("render country component", () => {
    expect(wrapper.find(Country).length).toEqual(1);
  });

  test("render weather component", () => {
    expect(wrapper.find(Weather).length).toEqual(1);
  });

  test("weather should render when the country changes", () => {
    const mock = jest.fn();
    expect(wrapper.find("h2#country-name").length).toEqual(0);

    const input = wrapper.find("input#country");
    const btnChangeCountry = wrapper.find("button#change-country");
    const btnCurrentLocation = wrapper.find("button#current-location");

    console.log(btnChangeCountry.length);
    console.log(input.instance().value);

    input.simulate("change", { target: { value: "Rome" } });
    console.log(input.instance().value);
    // btnChangeCountry.simulate("click", mock);
    // expect(mock).toHaveBeenCalled();
    expect(wrapper.find("h2#country-name").length).toEqual(1);
  });
});
