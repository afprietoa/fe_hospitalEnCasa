<template>

    <div class="signUp_user">
      <div class="container_signUp_user">
  
  
        <section class="register">
          <div class="register-icon">
            <img class="register-icon-item" src="../assets/MediCare3.png" alt="vue logo">
  
          </div>
  
          <h2 class="register-title">Patient Sign Up Form</h2>
  
          <div class="register-stepper">
            <div class="step" :class="{'step-active' : step === 1, 'step-done': step > 1}"><span
                class="step-number">1</span></div>
            <div class="step" :class="{'step-active' : step === 2, 'step-done': step > 2}"><span
                class="step-number">2</span></div>
            <div class="step" :class="{'step-active' : step === 3, 'step-done': step > 3}"><span
                class="step-number">3</span></div>
            <div class="step" :class="{'step-active' : step === 4, 'step-done': step > 4}"><span
                class="step-number">4</span></div>
          </div>
          
  
          <transition name="slide-fade">
            <section v-show="step === 1">
              <form class="form" method="post" action="javascript:void(0)">
  
                
              <div class="label-ele">
                <label for="rol">Rol</label><br>
              </div>
                  <div class="form-group">
                  <select name="rol" id="rol" v-model="usr.user.rol">
                      <option value="Doctor">Doctor</option>
                      <option value="Patient">Patient</option>
                      <option value="Familiar">Familiar</option>
                  </select>
                  </div>
                  
                  <div class="label-group">
                    <label for="doc_type">Document Type</label>
                    <label for="doc_number">Document Number</label>
                  </div>
  
                  <div class="form-group">
                  <select name="doc_type" id="doc_type" v-model="usr.user.doc_type">
                      <option value="TI">TI</option>
                      <option value="CC">CC</option>
                      <option value="TE">TE</option>
                      <option value="NIT">NIT</option>
                      <option value="PAS">PAS</option>
                  </select>
  
                  <input type="number" name="doc_number" id="doc_number" v-model="usr.user.doc_number" autocomplete="usr.user.doc_number" required />
                </div>
  
                <div class="label-group">
                    <label for="first_name">First Name</label>
                    <label for="last_name">Last Name</label>
                  </div>
  
                  <div class="form-group">
                  <input type="text" name="first_name" id="first_name" v-model="usr.user.first_name" autocomplete='usr.user.first_name' placeholder="First Name" required />
  
                  <input type="text" name="last_name" id="last_name" v-model="usr.user.last_name" autocomplete='usr.user.last_name' placeholder="Last Name" required />
                </div>
  
                
  
                <div class="">
                  <a href="#" class="btn-control width-50 ml-auto" @click.next="next()">Next</a>
                </div>
              </form>
            </section>
          </transition>
          <transition name="slide-fade">
            <section v-show="step === 2">
              <form class="form" method="post" action="javascript:void(0)">
  
                <div class="label-group">
                <label for="genre">Genre</label><br>
                <label for="bith_date">Date of Birth</label>
              </div>
                <div class="form-group">
                  <select name="genre" id="genre" v-model="usr.user.genre">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Non-Binary">Non-Binary</option>
                  </select>
                  <input type="date" name="birth_date" id="bith_date" v-model="usr.birth_date" autocomplete='usr.birth_date' placeholder="Date of Birth" required />
                  </div>
  
                <div class="label-group">
                    <label for="e_mail">E-mail</label>
                    <label for="cellphone">Cellphone</label>
                  </div>
                <div class="form-group">
                  <input type="email" name="e_mail" id="e_mail" v-model="usr.user.e_mail" autocomplete='usr.user.e_mail' placeholder="Email" required />
                  <input type="number" name="cellphone" id="cellphone" v-model="usr.user.cellphone" autocomplete="usr.user.cellphone" required />
                </div>
  
                <div class="btns-group">
                  <a class="btn-control" href="#" @click.prevent="prev()">Previous</a>
                  <a href="#" class="btn-control" @click.next="next()">Next</a>
                </div>
  
              </form>
            </section>
          </transition>
          <transition name="slide-fade">
            <section v-show="step === 3">
              <form class="form" method="post" action="javascript:void(0)">
  
  
                <div class="label-group">
                    <label for="city">City</label>
                    <label for="address">Address</label>
                  </div>
                  <div class="form-group">
                    <input type="text" name="city" id="city" v-model="usr.city" autocomplete='usr.city' placeholder="City" required />
                    <input type="text" name="address" id="address" v-model="usr.address" autocomplete='usr.address' placeholder="Address" required />
                </div>
  
                  <div class="label-group">
                    <label for="longitude">Longitude</label>
                    <label for="latitude">Latitude</label>
                  </div>
                  <div class="form-group">
                    <input type="text" name="longitude" id="longitude" v-model="usr.longitude" autocomplete='usr.longitude' placeholder="Longitude" required />
                    <input type="text" name="latitude" id="latitude" v-model="usr.latitude" autocomplete='usr.latitude' placeholder="Latitude" required />
                </div>
  
                <div class="btns-group">
                  <a class="btn-control" href="#" @click.prevent="prev()">Previous</a>
                  <a href="#" class="btn-control" @click.next="next()">Next</a>
                </div>
  
              </form>
            </section>
          </transition>
          <transition name="slide-fade">
            <section v-show="step === 4">
              <form class="form" action="#" @submit.prevent="processSignUpUser">
  
                <div class="label-elem">
                <label for="username">Username</label><br>
              </div>
                <input type="text" name="username" id="username" v-model="usr.user.username" autocomplete='user.user.username' placeholder="Username"
                    required />
  
                <div class="label-elem">
                <label for="password">Password</label><br>
              </div>
                  <input type="password" name="password" id="password" v-model="usr.user.password" autocomplete='user.user.password' placeholder="Password"
                    required />
  
                <div class="btns-group">
                  <a href="#" class="btn-control" @click.prevent="prev()">Previous</a>
                  <input type="submit" value="Submit" class="btn-control">
                </div>
  
              </form>
            </section>
          </transition>
        </section>
  
      </div>
    </div>
  
  </template>
  <script>
  import axios from 'axios';
  
  export default {
    name: "SignUpPatient",
    data: function () {
      return {
        steps: {},
        step: 1,
        usr: {
          "user": {
            "rol": "",
            "doc_type": "",
            "doc_number": 0,
            "first_name": "",
            "last_name": "",
            "e_mail": "",
            "cellphone": 0,
            "genre": "",
            "username": "",
            "password": ""
  
          },
          "birth_date": (new Date()).toJSON().toString(), 
          "address": "", 
          "city": "", 
          "longitude": "",
          "latitude": "" 
        }
  
      }
    },
    methods: {
      processSignUpUser: function () {
        axios.post(
          "http://127.0.0.1:8000/patient/",
          this.usr,
          { headers: {} }
        )
          .then((result) => {
            let dataSignUp = {
              username: this.usr.user.username,
              token_access: result.data.access,
              token_refresh: result.data.refresh,
            }
            this.$emit('completedSignUp', dataSignUp)
          })
          .catch((error) => {
            console.log(error)
  
            setTimeout(() => {
              Swal.fire({
                icon: 'error',
                title: 'ERROR !',
                text: 'Wrong in the registe'
              })
            }, 250)
  
            // alert("Error: Wrong in the register")
          })
      },
      prev() {
        this.step--;
      },
  
      next() {
        this.step++;
      }  
    //   customerRegister: function () {
    //     this.hasSeenCongrats = true;
    //   }
    }
  }
  </script>
  <style>
  .register {
    display: block;
    color: #20336b;
    max-width: 540px;
    margin: 2rem auto;
    padding: 2rem;
    border-radius: 4rem;
    background: #ecf1ff;
    border: 1px solid #ccc;
  
  }
  
  .register-icon {
    display: flex;
    background: #fff;
    border-radius: 2rem;
    width: 80px;
    height: 80px;
    margin: -50px auto 20px;
  }
  
  .register-icon-item {
    width: 100%;
  }
  
  .register-title {
    font-weight: 300;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    text-align: center;
    color: #20336b;
    padding: 0 2rem;
    margin-top: 2rem;
  }
  
  .register-stepper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    margin: 0 auto 1.5em;
  }
  
  .register-stepper::before {
    z-index: 0;
    content: "";
    display: block;
    position: absolute;
    height: 2px;
    top: calc(50% - 1px);
    background: #cecece;
    width: calc(100% - 20px);
  }
  
  .register-stepper .step {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    border: 2px solid #cecece;
    color: #cecece;
    background-color: #fff;
    border-radius: 50%;
    min-width: 25px;
    min-height: 25px;
    line-height: 20px;
    font-size: 16px;
  }
  
  .register-stepper .step-active {
    color: #00c4b5;
    background-color: #fff;
    border-color: #00c4b5;
  }
  
  .register-stepper .step-done {
    color: #a7e4b5;
    border-color: #a7e4b5;
  }
  
  .register-stepper .step-number {
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    line-height: 1;
    vertical-align: middle;
  }
  
  .register .form-group {
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: baseline;
  }
  
  .register .form-group label {
    text-align: left;
    font-size: 1.1rem;
    line-height: 1.1;
    padding-bottom: 0.5rem;
  }
  
  .register .form-group.cta-step {
    color: #fff;
    justify-content: space-between;
  }
  
  .register .form-group.cta-step .cta.prev {
    padding: 10px 30px;
  }
  
  .register .form-group.new-password {
    margin-top: 2rem;
  }
  
  .register input[type=text],
  .register input[type=password],
  .register input[type=email],
  .register input[type=number],
  .register select {
    /* -webkit-appearance: none;
    border: 0; */
    border-radius: 5px;
    padding: 1.3rem 1rem;
    width: 100%;
    margin: 0.5rem;
  }
  
  .register .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  
  .register .slide-fade-leave-active {
    display: none;
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
  }
  
  .register .slide-fade-enter,
  .register .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
  
  .congrats {
    background: #fff;
    color: #00c4b5;
    padding: 4rem;
    text-align: center;
  }
  
  .congrats-subtitle {
    line-height: 1.3;
  }
  
  .congrats-subtitle strong {
    font-size: 2rem;
  }
  
  
  .btns-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .btn-control {
    padding: 0.75rem;
    display: block;
    text-align: center;
    text-decoration: none;
    color: #f3f3f3;
    background-color: #06949f;
    border-radius: .25rem;
    cursor: pointer;
    transition: all 250ms ease-in-out;
  }
  
  .width-50 {
    width: 50%;
  }
  
  .ml-auto {
    margin-left: auto;
  }
  
  .btn-control:hover {
    box-shadow: 0 0 0 2px #fff, 0 0 0 3px #06949f;
  }
  
  .btn-control:active {
    transform: scale(0.98);
  }
  .label-group{
    display: flex;
    justify-content:space-around;
  }
  .label-ele{
    width: 100%;
    text-align:center;
  }
  .label-elem{
  padding-left:1rem ;
  }
  .label-ele,
  .label-elem{
    color: #20336b;
  }
  </style>