<template>
    <div class="greetings" >

        <h6 class="usr-name"> <span class="title-btn">{{username}}</span>, Welcome !</h6>

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/Medical_1.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption">
                        <h3>Welcom to <br ><h2>Home Medicine</h2></h3>
                        <p>Exerci tation ullamcorpe suscipt lobortis<br> ex ea commodo consequat duis autem</p>
                    </div>
                    <div class="slider-buttons">
                        <a href="#" class="button-cta btn-primarys margin-right">
                            <span class="title-btn">Learn more</span>      
                            <img src="../assets/arrow.png" alt="Icon play" aria-hidden="true">
                            
                        </a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/Medical_2.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption">
                        <h3>Dedication <br ><h2>And Commitment</h2></h3>
                        <p>Exerci tation ullamcorpe suscipt lobortis<br> ex ea commodo consequat duis autem</p>
                    </div>
                    <div class="slider-buttons">
                        <a href="#" class="button-cta btn-primarys margin-right">
                            <span class="title-btn">Learn more</span>
                            <img src="../assets/arrow.png" alt="Icon play" aria-hidden="true">
                        </a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/Medical_3.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption">
                        <h3>We Have the <br><h2>Fitnest Physicians</h2></h3>
                        <p>Exerci tation ullamcorpe suscipt lobortis<br> ex ea commodo consequat duis autem</p>
                    </div>
                    <div class="slider-buttons">
                        <a href="#" class="button-cta btn-primarys margin-right">
                            <span class="title-btn">Learn more</span>
                            <img src="../assets/arrow.png" alt="Icon play" aria-hidden="true">
                        </a>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>


        


         <!-- Portfolio -->
    <div class="portfolio">
        <!-- Title -->
        <h2 class="portfolio__title">
            Gallery of Our Clinic
        </h2>
        <!-- Description -->
        <p class="portfolio__description">
            Congueo leo eget malesuada. Vivamus magna justo, lacinia
            eget nconsectetur sed, convallis at tellus. Praesent
            sapien massa, convallis a pellestesque nec, egestas non
            nisi.
        </p>
        <!-- Navbar -->
        <nav class="portfolio__nav">
            <a href="#" class="portfolio__link">
                All
            </a>
            <a href="#" class="portfolio__link">
                Cardiology
            </a>
            <a href="#" class="portfolio__link">
                Rehabilitation
            </a>
            <a href="#" class="portfolio__link">
                Gynecology
            </a>
            <a href="#" class="portfolio__link">
                About
            </a>
        </nav>
        <!-- Gallery -->
        <div class="portfolio__gallery">
            <!-- img #1 -->
            <article class="wrapper-img">
                <!-- Image -->
                <img src="../assets/gallery_6.jpg" alt="product-01" class="wrapper-img__img">
                <!-- Information -->
                <div class="wrapper-img__info">
                    <!-- Title -->
                    <h3 class="wrapper-img__title">
                        Health Section
                    </h3>
                    <!-- Description -->
                    <p class="wrapper-img__description">
                        Congueo leo eget malesuada. Vivamus magna justo, lacinia
                        eget nconsectetur sed, convallis at tellus. Praesent
                        sapien massa, convallis a pellestesque nec, egestas non
                        nisi.
                    </p>
                    <!-- Button -->
                    <a href="#" class="wrapper-img__btn">
                        View more
                    </a>
                </div>
            </article>
            <!-- img #2 -->
            <article class="wrapper-img">
                <!-- Image -->
                <img src="../assets/gallery_5.jpg" alt="product-02" class="wrapper-img__img">
                <!-- Information -->
                <div class="wrapper-img__info">
                    <!-- Title -->
                    <h3 class="wrapper-img__title">
                        Health Section
                    </h3>
                    <!-- Description -->
                    <p class="wrapper-img__description">
                        Congueo leo eget malesuada. Vivamus magna justo, lacinia
                        eget nconsectetur sed, convallis at tellus. Praesent
                        sapien massa, convallis a pellestesque nec, egestas non
                        nisi.
                    </p>
                    <!-- Button -->
                    <a href="#" class="wrapper-img__btn">
                        View more
                    </a>
                </div>
            </article>
            <!-- img #3 -->
            <article class="wrapper-img">
                <!-- Image -->
                <img src="../assets/gallery_4.jpg" alt="product-03" class="wrapper-img__img">
                <!-- Information -->
                <div class="wrapper-img__info">
                    <!-- Title -->
                    <h3 class="wrapper-img__title">
                        Health Section
                    </h3>
                    <!-- Description -->
                    <p class="wrapper-img__description">
                        Congueo leo eget malesuada. Vivamus magna justo, lacinia
                        eget nconsectetur sed, convallis at tellus. Praesent
                        sapien massa, convallis a pellestesque nec, egestas non
                        nisi.
                    </p>
                    <!-- Button -->
                    <a href="#" class="wrapper-img__btn">
                        View more
                    </a>
                </div>
            </article>
            <!-- img #4 -->
            <article class="wrapper-img">
                <!-- Image -->
                <img src="../assets/gallery_3.jpg" alt="product-04" class="wrapper-img__img">
                <!-- Information -->
                <div class="wrapper-img__info">
                    <!-- Title -->
                    <h3 class="wrapper-img__title">
                        Health Section
                    </h3>
                    <!-- Description -->
                    <p class="wrapper-img__description">
                        Congueo leo eget malesuada. Vivamus magna justo, lacinia
                        eget nconsectetur sed, convallis at tellus. Praesent
                        sapien massa, convallis a pellestesque nec, egestas non
                        nisi.
                    </p>
                    <!-- Button -->
                    <a href="#" class="wrapper-img__btn">
                        View more
                    </a>
                </div>
            </article>
            <!-- img #5 -->
            <article class="wrapper-img">
                <!-- Image -->
                <img src="../assets/gallery_2.jpg" alt="product-05" class="wrapper-img__img">
                <!-- Information -->
                <div class="wrapper-img__info">
                    <!-- Title -->
                    <h3 class="wrapper-img__title">
                        Health Section
                    </h3>
                    <!-- Description -->
                    <p class="wrapper-img__description">
                        Congueo leo eget malesuada. Vivamus magna justo, lacinia
                        eget nconsectetur sed, convallis at tellus. Praesent
                        sapien massa, convallis a pellestesque nec, egestas non
                        nisi.
                    </p>
                    <!-- Button -->
                    <a href="#" class="wrapper-img__btn">
                        View more
                    </a>
                </div>
            </article>
            <!-- img #6 -->
            <article class="wrapper-img">
                <!-- Image -->
                <img src="../assets/gallery_1.jpg" alt="product-06" class="wrapper-img__img">
                <!-- Information -->
                <div class="wrapper-img__info">
                    <!-- Title -->
                    <h3 class="wrapper-img__title">
                        Health Section
                    </h3>
                    <!-- Description -->
                    <p class="wrapper-img__description">
                        Congueo leo eget malesuada. Vivamus magna justo, lacinia
                        eget nconsectetur sed, convallis at tellus. Praesent
                        sapien massa, convallis a pellestesque nec, egestas non
                        nisi.
                    </p>
                    <!-- Button -->
                    <a href="#" class="wrapper-img__btn">
                        View more
                    </a>
                </div>
            </article>
        </div>
    </div>

    <!-- Creative service -->
    <div class="container">
        <section class="services-plus container__row">
            <!-- Title -->
            <h2 class="services-plus__title">
                Our Services
            </h2>
            <!-- Description -->
            <p class="services-plus__description">
                Congueo leo eget malesuada. Vivamus magna justo, lacinia
                eget nconsectetur sed, convallis at tellus. Praesent
                sapien massa, convallis a pellestesque nec, egestas non
                nisi.
            </p>
            <!-- Services -->
            <!-- service #1 -->
            <article class="service-plus">
                <!-- Title -->
                <h3 class="service-plus__title">
                    <img src="../assets/icon_1.png" alt="Logo brandfolder" class="icon_1">
                    Cardiac Clinic
                </h3>
                <!-- Description -->
                <p class="service-plus__description">
                    Class aptent taciti estied aliquam ellus person
                    piciat unde.
                </p>
                <!-- Link -->
                <a href="#" class="service-plus__link">
                    See service
                </a>
            </article>
            <!-- service #2 -->
            <article class="service-plus">
                <!-- Title -->
                <h3 class="service-plus__title">
                    <img src="../assets/icon_2.png" alt="Logo brandfolder" class="icon_2">
                    Primary Care
                </h3>
                <!-- Description -->
                <p class="service-plus__description">
                    Class aptent taciti estied aliquam ellus person
                    piciat unde.
                </p>
                <!-- Link -->
                <a href="#" class="service-plus__link">
                    See service
                </a>
            </article>
            <!-- service #3 -->
            <article class="service-plus">
                <!-- Title -->
                <h3 class="service-plus__title">
                    <img src="../assets/icon_3.png" alt="Logo brandfolder" class="icon_3">
                    Emergency Clinic
                </h3>
                <!-- Description -->
                <p class="service-plus__description">
                    Class aptent taciti estied aliquam ellus person
                    piciat unde.
                </p>
                <!-- Link -->
                <a href="#" class="service-plus__link">
                    See service
                </a>
            </article>
            <!-- service #4 -->
            <article class="service-plus">
                <!-- Title -->
                <h3 class="service-plus__title">
                    <img src="../assets/icon_4.png" alt="Logo brandfolder" class="icon_4">
                    Vascular Surgery
                </h3>
                <!-- Description -->
                <p class="service-plus__description">
                    Class aptent taciti estied aliquam ellus person
                    piciat unde.
                </p>
                <!-- Link -->
                <a href="#" class="service-plus__link">
                    See service
                </a>
            </article>
            <!-- service #5 -->
            <article class="service-plus">
                <!-- Title -->
                <h3 class="service-plus__title">
                    <img src="../assets/icon_5.png" alt="Logo brandfolder" class="icon_5">
                    Precise Diagnosis
                </h3>
                <!-- Description -->
                <p class="service-plus__description">
                    Class aptent taciti estied aliquam ellus person
                    piciat unde.
                </p>
                <!-- Link -->
                <a href="#" class="service-plus__link">
                    See service
                </a>
            </article>
            <!-- service #6 -->
            <article class="service-plus">
                <!-- Title -->
                <h3 class="service-plus__title">
                    <img src="../assets/icon_6.png" alt="Logo brandfolder" class="icon_6">
                    General Surgery
                </h3>
                <!-- Description -->
                <p class="service-plus__description">
                    Class aptent taciti estied aliquam ellus person
                    piciat unde.
                </p>
                <!-- Link -->
                <a href="#" class="service-plus__link">
                    See service
                </a>
            </article>
        </section>
    </div>

    </div>
</template>
<script>
export default {
    name: "Home",
    data: function () {
        return {
            username: localStorage.getItem('username') || 'none'
        }
    }
    
}
</script>
<style>
:root{
    /* Fonts */
    --font-regular:'Open Sans', sans-serif;
    --font-cursive: 'Dancing Script', cursive;
    
    /* Color  */

    --color-skyeblue-1: #cae6e7;
    --color-skyeblue-2: #aedddd;
    --color-skyeblue-3: #c7f7f7;
    --color-skyeblue-4: #e4fbfb;
    --color-skyeblue-5: #ddffff;
    --color-skyeblue-6: #b2dafa;

    --color-blue-medium: #2296f3;
    --color-blue-light: #01bcd5;
}

.greetings {
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}

.carousel {
    justify-content: flex-start;
}

.greetings h1 {
    font-size: 50px;
    color: #283747;
}

.greetings span {
    color: crimson;
    font-weight: bold;
}
/* Portfolio */

.portfolio__title,
.services-plus__title,
.customers__title,
.team__title,
.contact__title{
    text-transform: capitalize;
    font-size: 1.7em;
}
.portfolio__description,
.services-plus__description,
.customers__description,
.team__description,
.contact__description{
    margin-bottom: 1rem;
    font-size: 0.9em;
    color: var(--color-gray-medium);
}
.portfolio__title,
.portfolio__description, 
.portfolio__nav{
    text-align: center;
    margin-bottom: 1.5em;
}
.portfolio__nav{
    margin-bottom: 2.5em;
}
.portfolio__nav .portfolio__link{
    text-decoration:none;
    color:var(--color-blue-light);
}
.portfolio__link{
    display: inline-block;
    padding: 0.5em 1em;
    margin: 0.5rem 1rem;
    border: 2px solid var(--color-blue-light);
}
.portfolio__link:hover{
    background: var(--color-blue-light);
    color: #fff;
}
.portfolio__gallery{
    display: grid;
    grid-template-columns: repeat(10 , 1fr);
    grid-template-rows: repeat(2 , minmax(200px , 300px));  
}
.wrapper-img{
    position: relative; 
}
.wrapper-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.wrapper-img__info{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 1.5em;
    color:#fff;
    background: rgba(6, 148, 159, 0.9);
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    transition-duration: 0.6s;
}
.wrapper-img:hover .wrapper-img__info{
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
.wrapper-img:nth-child(1){
    grid-area: span 2 / span 2;
}
.wrapper-img:nth-child(2),
.wrapper-img:nth-child(3){
    grid-column: span 4;
}
.wrapper-img:nth-child(4),
.wrapper-img:nth-child(6){
    grid-column: span 3;
}
.wrapper-img:nth-child(5){
    grid-column: span 2;
}
.wrapper-img__title{
    text-transform: capitalize;
    font-size: 1.2em;
}
.wrapper-img__description{
    font-size: 0.9em;
}
.wrapper-img__title,
.wrapper-img__description{
    margin-bottom:1.2em;
}

.wrapper-img__btn{
    text-decoration:none;
    width: 150px;
    padding: 0.5em;
    text-align: center;
    text-transform: capitalize;
    font-size: 0.8rem;
    color:#fff;
    border: 1px solid #fff;
}

/* Services */
.services-plus{
    display:grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2 , 100px);
    grid-auto-rows: 300px;
    gap: 1.5em;
    text-align: center;
}
.services-plus__title,
.services-plus__description{
    grid-column: span 6;
    align-self: center;
}
.service-plus{
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5em;
    color: #fff;
}
.service-plus *{
    margin-bottom: 1.2em;
}
.service-plus__title{
    text-transform: capitalize;
    font-size: 1.2em;
}
.service-plus__description{
    font-size: 1em;
}
.service-plus__link{
    text-decoration: underline;
    color: var(--color-yellow-medium);
}
.service-plus:nth-of-type(1){
    background: var(--color-skyeblue-1);
    color:#5271d4; 
}
.service-plus:nth-of-type(2){
    background: var(--color-skyeblue-2);
    color:#5271d4; 
}
.service-plus:nth-of-type(3){
    background: var(--color-skyeblue-3);
    color:#5271d4; 
}
.service-plus:nth-of-type(4){
    background: var(--color-skyeblue-4);
    color:#5271d4; 
}
.service-plus:nth-of-type(5){
    background: var(--color-skyeblue-5);
    color:#5271d4; 
}
.service-plus:nth-of-type(6){
    background: var(--color-skyeblue-6);
    color:#5271d4; 
}
.portfolio{
    margin-top:2rem;
}
.container .services-plus{
    margin-bottom: 2rem;
}
.service-plus__title{
    display:flex;
    flex-direction: column;
    align-items: center;
}
.service-plus__title img{
    width: 80px;
    height: 80px;
}
.slider-buttons {
    position: absolute;
    left:4.5rem;
    bottom: 3rem;
}
.button-cta {
    text-decoration: none;
    padding: 1rem 2rem;
    border-radius: 4px;
    text-align: center;
    display: flex;
    justify-content:space-between;
    box-sizing: border-box;
}

.button-cta img {
    vertical-align: middle;
}
.margin-right {
    margin-right: 1rem;
}

.btn-primarys {
    width: 100%;
    background: #37c7be;
    color: #fff;
}
.btn-primarys .title-btn{
    color: #fff;
}
.carousel-item .carousel-caption{
    color:#000;
}
.carousel-item .carousel-caption h3{
    font-weight: bold;
}
.greetings .usr-name{
   position: absolute;
   top: 3em;
   left: 10em;
}
</style>