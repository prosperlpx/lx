import { writable } from 'svelte/store'

export const isOpenMenu = writable(true);
export const isDarkMode = writable(false);
export const mainColor = writable('bg-[#098F90]');
export const bgColor = writable('bg-white');
export const mainTxtColor = writable('text-black');
export const heroHeadingTxtCol = writable('text-[#000000d5]')
export const headingTxtLgScreen = writable('text-6xl');
export const headingTxtSmScreen = writable('text-5xl');
// bg-white: for background would be updated later 
// main-text-color: text-white woule be updated later 
//  hero heading text color  hex code #000000d5

