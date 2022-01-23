import { shallow, mount } from "enzyme";
import Country from "./Country";

import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Country component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Country />
      </Provider>
    );
  });

  test("render country input", () => {
    expect(wrapper.find("input#country").length).toEqual(1);
  });

  test("render change country btn", () => {
    expect(wrapper.find("button#change-country").length).toEqual(1);
  });

  test("render current location btn", () => {
    expect(wrapper.find("button#current-location").length).toEqual(1);
  });
});
