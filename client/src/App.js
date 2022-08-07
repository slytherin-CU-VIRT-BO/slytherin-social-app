import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import './index.css'

//import components/pages
import FriendsList from "./components/FriendsList/FriendsList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ForgetPassword from "./components/ForgotPassword/ForgotPassword";
import Dashboard from "./components/Dashboard/Dashboard";
import NewPost from "./components/NewPost/NewPost";
import NoMatch from "./components/NoMatch/NoMatch";
import Trending from "./components/Trending/Trending";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ProfilePage from "./components/ProfilePage/ProfilePage";

const httpLink = createHttpLink({
  uri: "graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgetpassword" element={<ForgetPassword />} />
              <Route path="/newpost" element={<NewPost />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
