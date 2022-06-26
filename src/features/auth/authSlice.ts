import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import agent from "../../api/agent";
import { User } from "../../interfaces/User";

interface AuthState {
    user: null | User;
    token: string;
    loggedIn: boolean;
    error: any|string;
}

const initialState = {
    user: null,
    token: "",
    loggedIn: false,
    error: "",
}

export const signupUser = createAsyncThunk<string, User>(
    "auth/signupUser",
    async (data, thunkAPI) => {
        try {
            const response = await agent.post("/users/signup", data);
            console.log(response.data);
            return response.data;
        } catch (error:any) {
            toast.error(error.response.data)
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoggedIn: (state, action:PayloadAction<boolean>) => {
            state.loggedIn = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signupUser.fulfilled, (state, action) => {
            state.token = action.payload;
            state.loggedIn = true;
        });
        builder.addCase(signupUser.rejected, (state, action) => {
            state.error = String(action.payload);
        })
    }

});

export default authSlice.reducer;
export const { setLoggedIn } = authSlice.actions;