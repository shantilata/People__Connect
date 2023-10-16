import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../AllSlice/AuthSlice";
import UsersReducer from "../AllSlice/UsersSlice";
import FeedReducer from "../AllSlice/FeedSlice";



const store = configureStore({
    reducer: {
        auth: AuthReducer,
        users: UsersReducer,
        feed: FeedReducer
    }
})

export default store;
