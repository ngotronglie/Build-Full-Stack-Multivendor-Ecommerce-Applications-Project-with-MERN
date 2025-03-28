import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../api/api';

export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async(info, {rejectWithValue, fulfillWithValue}) =>{
        console.log(info);
        try {
            const {data} = await api.post('/admin-login',info,{withCredentials:true});
            localStorage.setItem('accessToken',data.token);
            return fulfillWithValue(data);
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
)

export const seller_register = createAsyncThunk(
    'auth/seller_register',
    async(info, {rejectWithValue, fulfillWithValue}) =>{
        // console.log(info);
        try {
            console.log(info);
            const {data} = await api.post('/seller-register',info,{withCredentials:true});
            // localStorage.setItem('accessToken',data.token);
            return fulfillWithValue(data);
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
)


export const authReducer = createSlice({
    name: 'auth',
    initialState: {
       successMessage: '',
         errorMessage: '',
         loader: false,
         userInfor : ''
    },
    reducers: {
        messageClear: (state,_) => {
            state.errorMessage = '';
        }

    },
    extraReducers: (builder) => {
        builder
             .addCase(admin_login.pending, (state, {payload}) =>{
                state.loader = true;
             } )
             .addCase(admin_login.rejected, (state, {payload}) => {
                state.loader = false;
                state.errorMessage = payload.error;
             })
             .addCase(admin_login.fulfilled, (state, {payload}) => {
                state.loader = false;
                state.successMessage = payload.message;
                state.userInfor = payload.data;
             })
            
    },
})

export const {messageClear} = authReducer.actions;
export default  authReducer.reducer;