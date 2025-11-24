// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios';

// const initialState = {
//     person: null,
//     users: []
// }

// export const getUser = createAsyncThunk("getUser", async () => {
//     try {
//         let { data } = await axios.get("https://691c726e3aaeed735c90e303.mockapi.io/persondata")
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// })

// export const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         users: [],
//         loading: false
//     },
//     reducers: {
//         getCheckLogin: (state, action) => {
//             let userfind = state.users.find(
//                 (item) => item.email == action.payload.email && item.password == action.payload.password
//             );

//             console.log(userfind);
//             if (userfind) {
//                 let user = JSON.parse(localStorage.getItem("user")) || {};
//                 if (user) {
//                     user = userfind;
//                     localStorage.setItem("user", JSON.stringify(user))
//                    state.person=user
//                     console.log(userfind);
//                 }

//                 window.location.href = "/";
//             } else {
//                 alert("didn't find user, please check again your information ");
//             }
//         }

//     },

//     extraReducers: (builder) => {
//         builder.addCase(getUser.fulfilled, (state, action) => {
//             state.users = action.payload
//         })
//     }
// })

// export const { getCheckLogin } = userSlice.actions
// export default userSlice.reducer