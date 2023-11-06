import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { IBlackListItem } from '@/../types';
import { DB } from '@/database/db';
import { AppThunk } from '..';

export interface BlackListState {
  list: IBlackListItem[] | [];
  loading: boolean;
  error: null | string;
}

const initialState: BlackListState = {
  list: [],
  loading: true,
  error: null,
};

export const blackListSlice = createSlice({
  name: 'blackList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IBlackListItem>) => {
      return {
        ...state,
        list: [action.payload, ...state.list],
      };
    },
    removeItem: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        list: state.list.filter((p) => p.id !== action.payload),
      };
    },
    updateItem: (state, action: PayloadAction<{ id: string; title: string }>) => {
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              title: action.payload.title,
            };
          }
          return item;
        }),
      };
    },
    loadItems: (state, action: PayloadAction<Array<IBlackListItem>>) => {
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    },
    showError: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    clearError: (state) => {
      return {
        ...state,
        error: null,
      };
    },
  },
});

export const { addItem, removeItem, loadItems, updateItem, showError, clearError } =
  blackListSlice.actions;

export const addItemToBlackList =
  (title: string): AppThunk =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(clearError());
      const payload = { title, date: new Date().toLocaleString() };
      const id = await DB.createItem(payload);
      const newItem = { ...payload, id };
      dispatch(addItem(newItem));
    } catch (e) {
      dispatch(showError('During adding to the black list something went wrong'));
    }
  };

export const loadBlackListItems = (): AppThunk => async (dispatch: Dispatch) => {
  try {
    dispatch(clearError());
    const data = await DB.getItems();
    dispatch(loadItems(data));
  } catch (e) {
    dispatch(showError('During loading the black list something went wrong'));
  }
};

export const removeBlackListItem =
  (id: string): AppThunk =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(clearError());
      await DB.removeItem(id);
      dispatch(removeItem(id));
    } catch (e) {
      dispatch(showError('During removing item from the black list something went wrong'));
    }
  };

export const updateBlackListItem =
  (id: string, title: string): AppThunk =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(clearError());
      await DB.updateItem(id, title);
      dispatch(updateItem({ id, title }));
    } catch (e) {
      dispatch(showError('During removing item from the black list something went wrong'));
    }
  };

export default blackListSlice;
