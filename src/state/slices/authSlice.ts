import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInterface } from "../../Theming/modelTypes";
// import { setLocalStorage } from "../../serviceFunctions/resources";
// import { login } from "../../serviceFunctions/backendAPIs";


type initUserInterface = {
    data: userInterface,
    status: "init" | "pending" | "success" | "error"
};

const initialState: initUserInterface = {
    data: {
        id: "",
        name: "",
        email: "",
        phoneNumber: "",
        createdAt: "",
        updatedAt: ""
    },
    status: "init"
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // getUserDetails: (state, action: PayloadAction<userInterface>) => {
        //     state.push(action.payload);
        //     setLocalStorage("user", state);
        // },
        // login: (state, action: PayloadAction<userInterface>) => {
        //     const result = state.filter(item => item.id !== action.payload.id);
        //     setLocalStorage("user", result);
        //     return result;
        // },
        // signup: (state, action: PayloadAction<userInterface>) => {
        //     const result = state.map(obj => {
        //         if (obj.id === action.payload.id) {
        //             return action.payload;
        //         }
        //         // If the ID doesn't match, return the original object
        //         return obj;
        //     });
        //     return result;
        // },
        // forgotPassword: (state, action: PayloadAction<userInterface[]>) => {
        //     const result = action.payload;
        //     return result;
        // },
    },

    extraReducers: (builder) => {
        builder
        .addCase(
            loginAsync.pending,
            (state) => {
                state.status = "pending";
                console.log("loginAsync.pending");
            }
        )
        .addCase(
            loginAsync.fulfilled,
            (state, action: PayloadAction<userInterface>) => {
                state.data = action.payload;
                state.status = "success";
            }
        )
        .addCase(
            loginAsync.rejected,
            (state) => {
                // state.data = ;
                state.status = "error";
            }
        )
    },

});


export const loginAsync = createAsyncThunk(
    "user/login",
    async (params: any) => {
        const response = await fetch('https://example.com/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers required by your API
            },
            body: JSON.stringify(params),
        });
    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    
        const result = await response.json();
        return result;
    }
)

export const {  } = userSlice.actions;
export default userSlice.reducer;
