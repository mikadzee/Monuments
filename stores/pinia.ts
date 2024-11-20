import { defineStore } from 'pinia'


export const useActiveSlideStore = defineStore({
	id: 'activeSlide',
	state: () => ({
		activeSlideNum: 0,
	}),
	actions: {
		setActiveSlide(num: number) {
			this.activeSlideNum = num
			console.log(this.activeSlideNum)
		},
	},
})
