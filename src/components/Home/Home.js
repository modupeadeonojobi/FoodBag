import React from 'react';
import './Home.css';
import Select from '../Location/Select';
import Interest from '../Interest/Interest';
import fastFood from '../../Assests/Images/fast-food.svg';
import vegetablesDrinks from '../../Assests/Images/Vegetables _ Drinks.svg';
import drinksCocktails from '../../Assests/Images/Drinks _ Cocktails.svg';
import restaurant from '../../Assests/Images/resturant.svg';
import Service from '../Service/Service';
import illustrator1 from '../../Assests/Images/Illustration_1.svg';
import illustrator2 from '../../Assests/Images/illustration_2.svg';
import illustrator3 from '../../Assests/Images/illustration_3.svg';



const Home = () => {
    return (
        <div className="home_section">
            <section>
                <div className="text-center mt-5 mb-2 pt-5 pb-5">
                    <h1>FoodBag</h1>
                    <p>Anything food, we have you covered</p>
                </div>

            </section>
            <section className="interest ">
                <Select />
                <h5 className="pt-5">Pick an interest</h5>
                <div className="row">
                    <div className="col-sm-3">
                        <Interest imageUrl={fastFood} category="Food Food" text="All sorrows are less with bread." />

                    </div>
                    <div className="col-sm-3">
                        <Interest imageUrl={vegetablesDrinks} category="Vegetable & Fruits" text="May not want it, but good for you." />

                    </div>
                    <div className="col-sm-3">
                        <Interest imageUrl={drinksCocktails} category="Drinks & Cocktail" text="I feel sad for those who don't drink." />

                    </div>
                    <div className="col-sm-3">
                        <Interest imageUrl={restaurant} category="Restaurant" text="All sorrows are less with bread." />

                    </div>
                </div>
            </section>
            <section className="services">
                <h4 className="text-center">How we serve you</h4>
                <div className="row">
                    <div className="col-sm-4">
                        <Service imageUrl={illustrator1} info="Select the location you want us to deliver" text="Tell us where you are" />
                    </div>
                    <div className="col-sm-4">
                        <Service imageUrl={illustrator2} info="Browse the time of food that interest you" text="Tell us what you want" />
                    </div>
                    <div className="col-sm-4">
                        <Service imageUrl={illustrator3} info="Your order will be delivered to you in no time" text="We'll come running" />
                    </div>
                </div>
            </section>

        </div>

    )

}

export default Home;