import { createSlice } from "@reduxjs/toolkit";


const albumsSlice = createSlice({
    name:'albums',
    initialState:{
        items:[],
        state:'idle',
        error:null,
    },
    reducers:{
        fetchAlbumsLoading: (state) => {
          state.status = 'loading';
        },
        fetchAlbumsSuccess: (state, action) => {
          state.status = 'succeeded';
          state.items = action.payload;
        },
        fetchAlbumsFailed: (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        },
      },
});

export const {fetchAlbumsFailed,fetchAlbumsLoading,fetchAlbumsSuccess} = albumsSlice.actions;
export default albumsSlice.reducer;