import { shallowMount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";

describe("Navbar component", () => {
  it("Display heading and set prop total", () => {
    const wrapper = shallowMount(Navbar, {
      propsData: {
        total: 0,
      },
    });
    expect(wrapper.vm.total).toBe(0);
    expect(wrapper.find("h1").text()).toMatch("Reggae");
  });
});
