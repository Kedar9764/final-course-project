import React from 'react'
import './Homepage.css';
import photo from "../../assets/images/5b33e9cd6067eb9aa7ce588a24f8a5d73bf37ee0.jpg";
import Card from '../Card';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
        <div className='banner'>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <img class="w-100 shadow" src={photo} alt="chef" />
                    </div>
                    <div class="col-lg-6">
                    <div class="p-5">
                        <h1 class="display-4">Little Lemon</h1>
                        <p class="lead">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <Link to={'/reservation'}> <button class="btn btn-outline-light">Reserve Table</button> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Card/>
    </>
  )
}

export default HomePage