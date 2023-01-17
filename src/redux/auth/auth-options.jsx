import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await axios.post('/api/auth/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error('Користувача з такою поштою вже зареєстровано');
      return thunkAPI.rejectWithValue();
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const {
      data: { data },
    } = await axios.post('/api/auth/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error('Неправильний пароль або пошта');
    return thunkAPI.rejectWithValue();
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.get('/api/auth/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const {
        data: { data },
      } = await axios.get('/api/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const refreshParameters = createAsyncThunk(
  'auth/refreshParams',
  async (parameters, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await axios.post('/api/products/calculatorPagePrivate', parameters);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const setTempParameters = createAction('auth/tempParameters');

export {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
  setTempParameters,
  refreshParameters,
};
