import { shallow } from "enzyme";
import Weather from "./Weather";

import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Weather component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Weather />
      </Provider>
    );
  });

  test("render", () => {});
});
