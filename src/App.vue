<template>
  <div class="app" :class="{ otherImage: isHome }" id="app">
    <div id="wrapper">

      <!-- Sidebar -->
      <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
          <li class="sidebar-brand">
            <a class="navbar-brand" href="#"></a>
          </li>

          <li>
            <a href="#" v-if="is_auth" v-on:click="loadHome"><i class="fa fa-landmark fa-lg"></i> Home</a>
          </li>

          <li data-bs-toggle="collapse" href="#collapse-1" role="button" aria-expanded="false"
            aria-controls="collapseExample" class="collapsed active">
            <a href="#"><i class="fa fa-dashboard fa-lg"></i> Doctors <span class="arrow">
                <ion-icon name="chevron-down-outline"></ion-icon>
              </span></a>
          </li>
          <ul class="sub-menu collapse" id="collapse-1">
            <li class="active"><a href="#" v-on:click="loadSignUpDoctor">Register Doctor </a></li>
            <li><a href="#" v-on:click="loadListDestroyDoctor">Doctor's Data</a></li>
          </ul>

          <li data-bs-toggle="collapse" href="#collapse-2" role="button" aria-expanded="false"
            aria-controls="collapseExample" class="collapsed active">
            <a href="#"><i class="fa fa-dashboard fa-lg"></i> Patients <span class="arrow">
                <ion-icon name="chevron-down-outline"></ion-icon>
              </span></a>
          </li>
          <ul class="sub-menu collapse" id="collapse-2">
            <li class="active"><a href="#" v-on:click="loadSignUpPatient">Register Patient </a></li>
            <li><a href="#" v-on:click="loadListDestroyPatient">Patient's Data</a></li>
          </ul>

          <li data-bs-toggle="collapse" href="#collapse-3" role="button" aria-expanded="false"
            aria-controls="collapseExample" class="collapsed active">
            <a href="#"><i class="fa fa-dashboard fa-lg"></i> Familiars <span class="arrow">
                <ion-icon name="chevron-down-outline"></ion-icon>
              </span></a>
          </li>
          <ul class="sub-menu collapse" id="collapse-3">
            <li class="active"><a href="#" v-on:click="loadSignUpFamiliar">Register Familiar </a></li>
            <li><a href="#" v-on:click="loadListDestroyFamiliar">Familiar's Data</a></li>
          </ul>

          <li data-bs-toggle="collapse" href="#collapse-4" role="button" aria-expanded="false"
            aria-controls="collapseExample" class="collapsed active">
            <a href="#"><i class="fa fa-globe fa-lg"></i> Clinical history <span class="arrow">
                <ion-icon name="chevron-down-outline"></ion-icon>
              </span></a>
          </li>
          <ul class="sub-menu collapse" id="collapse-4">
            <li class="active"><a href="#" v-on:click="loadNewClinicalHistory">New history </a></li>
            <li><a href="#">Historical</a></li>
          </ul>

          <li>
            <a href="#" v-if="is_auth" v-on:click="logOut"><i class="fa fa-power-off fa-lg"></i> LogOut</a>
          </li>

        </ul>
      </div>
      <!-- /#sidebar-wrapper -->

      <!-- Page Content -->
      <div id="page-content-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">

              <nav class="navbar navbar-expand-lg border-bottom nav-controls">
                <div class="container">
                  <div class="d-grid gap-3 d-md-block btn-group" role="group">
                    <button class="btn btn-outline-primary" id="menu-toggle" v-if="!is_auth"
                      v-on:click="loadLogIn">Log-In</button>
                    <button class="btn btn-outline-info" id="menu-toggle" data-bs-toggle="modal"
                      data-bs-target="#exampleModal" v-if="!is_auth">Sign-Up</button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                      aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Choose A Role</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">

                            <div class="content">
                              <div class="social">
                                <div class="social-rol">
                                  <a class="circle usr-doctor" data-bs-dismiss="modal" href="#"
                                    v-on:click="loadSignUpDoctor">
                                    <i class="fa fa-user-plus fa-fw"></i>
                                  </a>
                                  <p>Doctor</p>
                                </div>
                                <div class="social-rol">
                                  <a class="circle usr-patient" data-bs-dismiss="modal" href="#"
                                    v-on:click="loadSignUpPatient">
                                    <i class="fa fa-user fa-fw"></i>
                                  </a>
                                  <p>Patient</p>
                                </div>
                                <div class="social-rol">
                                  <a class="circle usr-familiar" data-bs-dismiss="modal" href="#"
                                    v-on:click="loadSignUpFamiliar">
                                    <i class="fa fa-user-shield fa-fw"></i>
                                  </a>
                                  <p>Familiar</p>
                                </div>
                              </div>

                            </div>

                          </div>

                        </div>
                      </div>
                    </div>

                    <div class="collapse navbar-collapse" v-if="is_auth" id="navbarNavDarkDropdown">
                      <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" class="rounded-circle"
                              height="40" alt="Avatar" loading="lazy" />
                          </a>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">My profile</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Logout</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                  </div>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-outline-danger" id="menu-toggle" v-if="is_auth"
                      v-on:click="logOut">Log-Out</button>
                  </div>
                </div>
              </nav>

              <div class="main-component">
                <router-view v-on:completedLogIn="completedLogIn" 
                  v-on:completedSignUp="completedSignUp"
                  v-on:loadListDestroyDoctor="loadListDestroyDoctor"
                  v-on:loadListDestroyPatient="loadListDestroyPatient"
                  v-on:loadListDestroyFamiliar="loadListDestroyFamiliar" 
                  v-on:loadDetailDoctor="loadDetailDoctor"
                  v-on:loadDetailPatient="loadDetailPatient"
                  v-on:loadDetailFamiliar="loadDetailFamiliar"
                  v-on:loadUpdateDoctor="loadUpdateDoctor"
                  v-on:loadUpdatePatient="loadUpdatePatient"
                  v-on:loadUpdateFamiliar="loadUpdateFamiliar"
                  v-on:loadNewClinicalHistory="loadNewClinicalHistory"
                  v-on:logOut="logOut">
                </router-view>
              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    isHome() {
      if(this.is_selected == true){
        return this.$route.path === '/user/newClinicalHistory';
      }else{
        return this.$route.path === '/user/home';
      }
    },
    
      
  },
  data: function () {
    return
    {
      is_auth: false;
      is_selected: false
    }
  },
  components: {

  }
  ,
  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;
      if (this.is_auth == false) {
        this.$router.push({ name: "logIn" })
      } else {
        this.$router.push({ name: "home" })
      }
    },
    loadLogIn: function () {
      this.$router.push({ name: "logIn" })
    },
    loadSignUpDoctor: function () {
      this.$router.push({ name: "signUpDoctor" })
    },
    loadSignUpPatient: function () {
      this.$router.push({ name: "signUpPatient" })
    },
    loadSignUpFamiliar: function () {
      this.$router.push({ name: "signUpFamiliar" })
    },
    loadListDestroyDoctor: function () {
      this.$router.push({ name: "listDestroyDoctor" });
    },
    loadListDestroyPatient: function () {
      this.$router.push({ name: "listDestroyPatient" });
    },
    loadListDestroyFamiliar: function () {
      this.$router.push({ name: "listDestroyFamiliar" });
    },
    loadDetailDoctor: function () {
      this.$router.push({ name: "detailDoctor" });
    },
    loadDetailPatient: function () {
      this.$router.push({ name: "detailPatient" });
    },
    loadDetailFamiliar: function () {
      this.$router.push({ name: "detailFamiliar" });
    },
    loadUpdateDoctor: function () {
      this.$router.push({ name: "updateDoctor" });
    },
    loadUpdatePatient: function () {
      this.$router.push({ name: "updatePatient" });
    },
    loadUpdateFamiliar: function () {
      this.$router.push({ name: "updateFamiliar" });
    },
    loadHome: function () {
      this.$router.push({ name: "home" })
      this.is_selected = false
    },
    loadNewClinicalHistory: function () {
      this.$router.push({ name: "newClinicalHistory" })
      this.is_selected = true
    },
    logOut: function () {
      localStorage.clear();

      setTimeout(() => {
        Swal.fire({
          icon: 'warning',
          title: 'CLOSED SESSION!',
          text: 'Your session has been closed'
        })
      }, 250)

      // alert('Closed session!')
      this.verifyAuth();
    },
    loadAccount: function () {
      this.$router.push({ name: "account" })
    },
    completedLogIn: function (data) {
      localStorage.setItem("isAuth", true)
      localStorage.setItem("username", data.username)
      localStorage.setItem("token_access", data.token_access)
      localStorage.setItem("token_refresh", data.token_refresh)

      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: 'SUCCESSFUL AUTHENTICATION!',
          text: 'Your credentials has been validated'
        })
      }, 250)

      // alert('Successful authentication!')
      this.verifyAuth()
    },
    completedSignUp: function (data) {

      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: 'SUCCESSFUL REGISTRATION!',
          text: 'Your Registration has been Received'
        })
      }, 250)

      // alert("Successful registration!")
      this.completedLogIn(data)
    },
  },
  created: function () {
    this.verifyAuth()
  }
}
</script>
<style>
.app {
  overflow-x: hidden;
  background-image: url("./assets/personnel.png");
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
}

.otherImage {
  background-image: none;
}

.main-component {
  height: 100vh;
}

.navbar-brand {
  background-image: url("./assets/MediCare2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  object-fit: cover;
  width: 180px;
  height: 180px;
  margin-left: 1rem;
}

.nav-controls {
  background: linear-gradient(rgba(255, 255, 255, 0.7), transparent 75%);
  margin: 0 3rem;
}

/* Toggle Styles */

#wrapper {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled {
  padding-left: 250px;
}

#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 0;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: #06949f;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled #sidebar-wrapper {
  width: 250px;
}

#page-content-wrapper {
  width: 100%;
  height: 100vh;
  position: absolute;
  padding: 15px;
}

#wrapper.toggled #page-content-wrapper {
  position: absolute;
  margin-right: -250px;
}

/* Sidebar Styles */

.sidebar-nav {
  position: absolute;
  top: 0;
  width: 250px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sidebar-nav li {
  text-indent: 20px;
  line-height: 40px;
}

.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #ecf1ff;
}

.sidebar-nav li a:hover {
  text-decoration: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav>.sidebar-brand {
  height: 200px;
  font-size: 18px;
  line-height: 60px;
}

.sidebar-nav>.sidebar-brand a {
  color: #999999;
}

.sidebar-nav>.sidebar-brand a:hover {
  color: #fff;
  background: none;
}

/* --------------------------- */

.sidebar-nav .toggle-btn {
  display: none;
}

.sidebar-nav ul,
.sidebar-nav li {
  list-style: none;
  padding: 0px;
  margin: 0px;
  line-height: 35px;
  cursor: pointer;
}

.sidebar-nav ul :not(collapsed) .arrow,
.sidebar-nav li :not(collapsed) .arrow {
  /* font-family: FontAwesome;
  content: "\f078"; */
  display: inline-block;
  padding-left: 10px;
  padding-right: 20px;
  vertical-align: middle;
  float: right;
}

.sidebar-nav ul .active,
.sidebar-nav li .active {
  border-left: 3px solid #d19b3d;
  background-color: #327d9c;
}

.sidebar-nav ul .sub-menu li.active,
.sidebar-nav li .sub-menu li.active {
  color: #d19b3d;
}

.sidebar-nav ul .sub-menu li.active a,
.sidebar-nav li .sub-menu li.active a {
  color: #d19b3d;
}

.sidebar-nav ul .sub-menu li,
.sidebar-nav li .sub-menu li {
  background-color: #181c20;
  border: none;
  line-height: 28px;
  border-bottom: 1px solid #1e8793;
  margin-left: 0px;
}

.sidebar-nav ul .sub-menu li:hover,
.sidebar-nav li .sub-menu li:hover {
  background-color: #007a8d;
}

.sidebar-nav ul .sub-menu li:before,
.sidebar-nav li .sub-menu li:before {
  /* font-family: FontAwesome;
  content: "\f105"; */
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: middle;
}

.sidebar-nav li {
  padding-left: 0px;
  border-left: 3px solid #2e353d;
  border-bottom: 1px solid #4dadb8;
}

.sidebar-nav li a {
  text-decoration: none;
  color: #e1ffff;
}

.sidebar-nav li a i {
  padding-left: 10px;
  width: 20px;
  padding-right: 20px;
}

.sidebar-nav li:hover {
  border-left: 3px solid #d19b3d;
  background-color: #327d9c;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}

/* --------------------------- */

@media(min-width:768px) {
  #wrapper {
    padding-left: 250px;
  }

  #wrapper.toggled {
    padding-left: 0;
  }

  #sidebar-wrapper {
    width: 250px;
  }

  #wrapper.toggled #sidebar-wrapper {
    width: 0;
  }

  #page-content-wrapper {
    padding: 20px;
    position: relative;
  }

  #wrapper.toggled #page-content-wrapper {
    position: relative;
    margin-right: 0;
  }

  .content .social {
    float: none;
    display: flex;
    justify-content: center;
    margin: 0 auto 30px;
    text-align: center;
  }

  .content .social .social-rol {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content .social .circle {
    background-color: #EEEEEE;
    color: #FFFFFF;
    width: 80px;
    height: 80px;
    font-size: 2rem;
    border-radius: 100%;
    display: inline-block;
    margin: 0 17px;
    padding: 15px;
  }

  .content .social .circle .fa {
    font-size: 16px;
  }

  .content .social .usr-familiar {
    background-color: #455CA8;
    color: #FFFFFF;
  }

  .content .social .usr-patient {
    background-color: #2c2754;
  }

  .content .social .usr-doctor {
    background-color: #463d72;
  }

  .content .usr-familiar:hover {
    background-color: #6E83CD;
  }

  .content .usr-patient:hover {
    background-color: #7a26f9;
  }

  .content .usr-doctor:hover {
    background-color: #a674de;
    ;
  }

}
</style>
