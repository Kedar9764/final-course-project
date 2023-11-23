import React from 'react'
import image from '../assets/images/5a56cb0a6cea7dd9e4260ae87b268bd3eee8527d.jpg'
import image1 from '../assets/images/5b33e9cd6067eb9aa7ce588a24f8a5d73bf37ee0.jpg'
import image2 from '../assets/images/3b97d1aaeb0c85a7222b2a4f2553d496ed5bd115.jpg'
import './second.css';

const Card = () => {
  return (
    <div class="container">
        <h1 className='display-4 heading'>Our Menu</h1>
        <div class="row second">
            <div class="col-12 col-sm-8 col-md-6 col-lg-4">
                <div class="card">
                    <img class="card-img-top" src={image} alt="Bologna"/>
                    <div class="card-body">
                    <h4 class="card-title">Toast</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Emilia-Romagna Region, Italy</h6>
                    <p class="card-text text-secondary">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-8 col-md-6 col-lg-4">
                <div class="card">
                    <img class="card-img-top" src={image1} alt="Bologna"/>
                    <div class="card-body">
                    <h4 class="card-title">Pasta</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Emilia-Romagna Region, Italy</h6>
                    <p class="card-text text-secondary">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-8 col-md-6 col-lg-4">
                <div class="card">
                    <img class="card-img-top" src={image2} alt="Bologna"/>
                    <div class="card-body">
                    <h4 class="card-title">Salad</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Emilia-Romagna Region, Italy</h6>
                    <p class="card-text text-secondary">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card