<template>
    <div class="logIn_user">
        <div class="container_logIn_user">

            <form class="forms" v-on:submit.prevent="processLogInUser">
                <h1 class="text-center">LogIn Form</h1>

                <div class="input-group">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" v-model="user.username" placeholder="Username">
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" v-model="user.password" placeholder="Password">
                </div>
                <div class="">
                    <input type="submit" value="Submit" class="btn-log btn-next width-50 ml-auto">
                </div>

            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "LogIn",
    data: function () {
        return {
            user: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        processLogInUser: function () {
            axios.post(
                "http://127.0.0.1:8000/login/",
                this.user,
                { headers: {} }
            ).then((result) => {
                let dataLogIn = {
                    username: this.user.username,
                    token_access: result.data.access,
                    token_refresh: result.data.refresh
                }
                this.$emit('completedLogIn', dataLogIn)
            })
                .catch((error) => {
                    if (error.response.status == "401") {

                        setTimeout(() => {
                            Swal.fire({
                                icon: 'error',
                                title: 'ERROR !',
                                text: 'Wrong Credentials'
                            })
                        }, 250)
                        // alert("Error 401: Wrong Credentials.")
                    }
                })
        }
    }

}
</script>
<style>
.logIn_user {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 80%;
    display: grid;
    place-items: center;
}

.forms {
    background: #ecf1ff;
    border: 1px solid #ccc;
    width: clamp(320px, 30%, 430px);
    color: #20336b;
    margin: 0 auto;
    border-radius: 1.5rem;
    padding: 1.5rem;

}

input {
    display: block;
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #a4b5e7;
    border-radius: 0.25rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
}

.input-group {
    margin: 2rem 0;
}

.btn-log {
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

.btn-log:hover {
    box-shadow: 0 0 0 2px #fff, 0 0 0 3px #06949f;
}

.btn-log:active {
    transform: scale(0.98);
}

.text-center {
    text-align: center;
    color: #2c3e50;
}
</style>