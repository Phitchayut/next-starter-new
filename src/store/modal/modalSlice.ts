import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  title?: string;
  isOpen?: boolean;
  bodyType?: string;
  size?: string;
  fullScreen?: boolean;
  extraObject?: any;
}

const initialState: ModalState = {
  title: '',
  isOpen: false,
  bodyType: '',
  size: '',
  fullScreen: false,
  extraObject: {},
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalState>) => {
      const { title, bodyType, extraObject, size, fullScreen } = action.payload;
      state.isOpen = true;
      state.bodyType = bodyType;
      state.title = title;
      state.size = size || 'md';
      state.fullScreen = fullScreen;
      state.extraObject = extraObject;
    },

    closeModal: (state) => {
      state.isOpen = false;
      state.bodyType = '';
      state.title = '';
      state.extraObject = {};
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
