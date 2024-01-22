import { create } from "zustand";

interface PlayerStore {
  ids: string[];
  activeId?: string;
  show: boolean;
  setId: (id: string) => void;
  setIds: (ids: string[]) => void;
  reset: () => void;
  setShow: (state: boolean) => void;
}

export const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  activeId: undefined,
  show: false,
  setId: (id: string) => set({ activeId: id }),
  setIds: (ids: string[]) => set({ ids }),
  reset: () => set({ ids: [], activeId: undefined }),
  setShow: (state: boolean) => set({ show: state }),
}));
