import { create } from 'zustand';

type SearchState = {
	isOpen: boolean;
	toggle: () => void;
	onOpen: () => void;
	onClose: () => void;
};

export const useSearch = create<SearchState>((set, get) => ({
	isOpen: false,
	toggle: () => set({ isOpen: !get().isOpen }),
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));
