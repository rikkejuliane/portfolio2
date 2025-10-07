import { create } from "zustand";


export type ContentTab = "about" | "projects" | "contact";


type State = {
active: ContentTab;
setActive: (tab: ContentTab) => void;
};


/**
* useContentTabs
*
* Lightweight Zustand store for the active content tab.
* - Default: "about"
* - Global (client-side) state shared across the page.
* - Not persisted; resets on full reload.
*/
export const useContentTabs = create<State>((set) => ({
active: "about",
setActive: (tab) => set({ active: tab }),
}));