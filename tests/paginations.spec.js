import {
	mount
} from "@vue/test-utils"
import Paginator from "../src/components/Paginator.vue"

describe("Pagination Components ", () => {

	const wrapper = mount(Paginator, {
		propsData: {
			dataLength: 25,
			dataLimit: 5,
		}
	})

	it("will render the html correclty", () => {
		expect(wrapper.find('ul').isVisible()).toBe(true)
	})


	it("will hide the previous button if there it's on the first page", () => {
		expect(wrapper.find("a[rel='previous']").isVisible()).toBe(false)
	})

	it("will display the previous button if it's not on the first page", () => {
		let button = wrapper.find("a[rel='next']");
		button.trigger('click')
		expect(wrapper.find("a[rel='previous']").isVisible()).toBe(true)
	})
	it("will trigger an event when the current page is changed", () => {
		let button = wrapper.find("a[rel='next']");
		button.trigger('click');
		expect(wrapper.emitted().changed).toBeTruthy()
	})

	it("will hide the next button if the user on the last page", () => {
		let button = wrapper.find("a[rel='next']");
		for (let index = 0; index < 5; index++) {
			button.trigger('click')
		}
		expect(wrapper.find("a[rel='next']").isVisible()).toBe(false)
	})
})