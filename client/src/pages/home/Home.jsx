import React, { useEffect, useState } from 'react'
import "./home.css";
import Header from '../../compenents/header/Header';
import Posts from '../../compenents/posts/Posts';
import Sidebar from '../../compenents/sidebar/Sidebar'
import axios from "axios";
import { useLocation } from 'react-router-dom';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);
    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div></>
    )
}
