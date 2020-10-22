import { shallowMount } from "@vue/test-utils";
import MusicDetails from "@/components/MusicDetails.vue";

describe("Music Details component", () => {
  it("set prop data and emit custom event", () => {
    const music = { title: "destiny", artiste: "buju banton" };
    const wrapper = shallowMount(MusicDetails, {
      propsData: {
        music,
      },
    });

    expect(wrapper.vm.music.title).toBe("destiny");
    expect(wrapper.vm.music.artiste).toBe("buju banton");
    expect(wrapper.findAll("div").exists()).toBe(true);

    //emit event
    wrapper.find("li").trigger("click");
    expect(wrapper.emitted("delete-List")).toBeTruthy();
  });
});
