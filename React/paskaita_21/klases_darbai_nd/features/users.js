import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",

  initialState: {
    value: {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29WlEjdL3m7gv607vTvEE5HPyrRq8JZcYslOY95v5lTr4nLK8T4h72Pku9rJ1OJ8MddM&usqp=CAU",
      username: "Andrius",
      userEmail: "asa@asa.as",
      location: "Kaunas",

      posts: [],
    },
  },
  reducers: {
    changeImage: (state, action) => {
      state.value.image = action.payload;
    },
    addItem: (state, action) => {
      state.value.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.value.posts = action.payload;
    },
  },
});

export const { changeImage, addItem, deletePost } = userSlice.actions;

export default userSlice.reducer;
