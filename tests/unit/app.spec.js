import { mount } from "@vue/test-utils";
import App from "../../src/App.vue";
import Navbar from "@/components/Navbar.vue";
import MusicDetails from "@/components/MusicDetails.vue";

describe("App component", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(App, {
      data() {
        return {
          music: [],
          artiste: "",
          title: "",
          id: "",
        };
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("it renders no music div and navbar component", () => {
    const text = wrapper.find(".empty");
    expect(text.text()).toContain("No Music");
    expect(wrapper.findComponent(Navbar).exists()).toBeTruthy();
  });

  it("submit music list and navbar component", async () => {
    expect(wrapper.findComponent(Navbar).exists()).toBeTruthy();
    const button = wrapper.find("button");
    button.trigger("click");
    await wrapper.setData({
      music: [
        {
          artiste: "bob",
          title: "One Love",
          id: 30,
        },
      ],
    });
    expect(wrapper.vm.music).toStrictEqual([
      {
        artiste: "bob",
        id: 30,
        title: "One Love",
      },
    ]);
    expect(wrapper.findComponent(MusicDetails).exists()).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
