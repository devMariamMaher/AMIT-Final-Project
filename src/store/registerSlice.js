import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosConfig } from "../axios/axiosConfig"

const initialState = {
    data: {},
    isLoading: false,
    error: null,
}


export const RegisterForm = createAsyncThunk("registerAction", async (data) => {
    return await axiosConfig({
        url: "/register",
        method: "POST",
        data: data,
    })
})

const registerSlice = createSlice({
    name: "register",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(RegisterForm.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export const registerReducer = registerSlice.reducer