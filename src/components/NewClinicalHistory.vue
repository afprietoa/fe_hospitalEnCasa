<template>
    <div class="clinical-form">
 <form id="accordion">
    <h1 class="text-center">Clinical History </h1>
    <div class="panel panel-default">
      <!--Company Information -->
      <div class="panel panel-heading">
        <h4 class="section-header" data-toggle="collapse" data-target="#CompanySection">Medical data</h4>
      </div>
      <div class="panel panel-body">
        <div class="multi-collapse focused" id="CompanySection">
          <div class="panel-body">

            <div class="form-row form-flexs">
                <div class="form-group form-gr col-md-4">
                <label for="inputStartDate">Date Time</label>
                <input type="datetime-local" class="form-control form-field" id="inputStartDate" v-model="historic.date_time">
              </div>
                <div class="form-group form-gr col-md-4">
                <label for="inputState">Doctor</label>
                <select id="inputState" class="form-control form-field" v-model="historic.medic">
                  <option v-for="usr in doctorList" :value="usr.id">{{usr.user.first_name}} {{usr.user.last_name}}</option>
                </select>
              </div>
              <div class="form-group form-gr col-md-4">
                <label for="inputState">Patient</label>
                <select id="inputState" class="form-control form-field" v-model="historic.patient">
                  <option v-for="usr in patientList" :value="usr.id">{{usr.user.first_name}} {{usr.user.last_name}}</option>
                </select>
            </div>
            </div>

            <div class="clear"></div>
            <div class="form-row form-flex">
              <div class="form-group form-gr col-md-6">
                <label for="inputNotes">Diagnostic</label>
                <textarea id="inputNotes" class="form-control form-ctn" v-model="historic.diagnostic"></textarea>
              </div>
              <div class="form-group form-gr col-md-6">
                <label for="inputPlanDesign">Description</label>
                <textarea id="inputPlanDesign" class="form-control form-ctn" placeholder="" v-model="historic.description"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
    <!--Company Information -->
    <div class="clear"></div>
    <div class="panel panel-default">
      <!--TPA Information -->
      <div class="panel panel-heading">
        <h4 class="section-header" data-toggle="collapse" data-target="#TPASection">Vital Signs</h4>
      </div>
      <div class="panel panel-body">
        <div class="multi-collapse focused" id="FirstSection">
          <div class="panel-body">
            <div class="form-row">
              <div class="form-group form-gr col-md-6"></div>
            </div>

            <div class="form-group form-gr">
              <label for="inputTPAAddress">Date time</label>
              <input type="datetime-local" class="form-control form-ctn" id="inputTPAAddress" placeholder="1234 Main St." v-model="historic.vital_signs.date_time">
            </div>

            <div class="form-row form-flexs">
              <div class="form-group form-gr col-md-6">
                <label for="inputTPAName">Oximetry</label>
                <input type="text" class="form-control form-ctn" id="inputTPAName" placeholder="" v-model="historic.vital_signs.oximetry">
              </div>
              <div class="form-group form-gr col-md-6">
                <label for="inputTPAContactName">Glycemia</label>
                <input type="text" class="form-control form-ctn" id="inputTPAContactName" placeholder="" v-model="historic.vital_signs.glycemia">
              </div>
            </div>
            <div class="form-row form-flexs">
              <div class="form-group form-gr col-md-6">
                <label for="inputTPAEmail">Blood Pressure</label>
                <input type="email" class="form-control form-ctn" id="inputTPAEmail" placeholder="" v-model="historic.vital_signs.blood_pressure">
              </div>
              <div class="form-group form-gr col-md-6">
                <label for="inputTPAPhone">Temperature</label>
                <input type="tel" class="form-control form-ctn" id="inputTPAPhone" placeholder="" v-model="historic.vital_signs.temperature">
              </div>
            </div>
            <div class="form-row form-flexs">
              <div class="form-group form-gr col-md-6">
                <label for="inputTPAEmail">Heart Rate</label>
                <input type="email" class="form-control form-ctn" id="inputTPAEmail" placeholder="" v-model="historic.vital_signs.heart_rate">
              </div>
              <div class="form-group form-gr col-md-6">
                <label for="inputTPAPhone">Respiratory Rate</label>
                <input type="tel" class="form-control form-ctn" id="inputTPAPhone" placeholder="" v-model="historic.vital_signs.respiratory_rate">
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!--TPA Information -->
    <div class="clear"></div>
    <div class="panel panel-default">
      <!--PBM Information -->
      <div class="panel panel-heading">
        <h4 class="section-header" data-toggle="collapse" data-target="#FirstSection">Suggestions </h4>
      </div>
      <div class="panel panel-body">
        <div class="multi-collapse focused" id="FirstSection">
          <div class="panel-body">
            <div class="form-row">
              <div class="form-group form-gr col-md-6"></div>
            </div>
            <div class="form-row form-flexs">
              <div class="form-group form-gr col-md-6">
                <label for="inputPBMName">Health Benefits</label>
                <input type="text" class="form-control form-ctn" id="inputPBMName" placeholder="" v-model="historic.suggestions.health_benefits">
              </div>
              <div class="form-group form-gr col-md-6">
                <label for="inputPBMContactName">Health Risks</label>
                <input type="text" class="form-control form-ctn" id="inputPBMContactName" placeholder="" v-model="historic.suggestions.health_risks">
              </div>
            </div>
   
            <div class="form-group form-gr">
              <label for="inputAgentAddress">Description</label>
              <textarea id="inputPlanDesign" class="form-control form-ctn" placeholder="" v-model="historic.suggestions.description"></textarea>
            </div>


          </div>
        </div>
      </div>
    </div>
    
    <!--Agent Information -->
    <button type="submit" class="btn-submit btn-control">Submit</button>
  </form>
</div>
</template>

<script>
import axios from 'axios';
export default{
        name: "NewClinicalHistory",
        data: function () {
    return {
      steps: {},
      step: 1,
      historic: {
            "date_time": (new Date()).toJSON().toString(),
            "patient": "",
            "medic": "",
            "diagnostic": "",
            "description": "",
            "vital_signs" :{
                "date_time": (new Date()).toJSON().toString(),
                "oximetry": "",
                "glycemia": "",
                "blood_pressure": "",
                "temperature": "",
                "heart_rate":"",
                "respiratory_rate": ""
            },
            "suggestions" :{
                "health_benefits": "",
                "health_risks": "",
                "description": "",
            }
        },
    doctorList: [],
    patientList: []
    }
  },
  methods: {
    getData: async function () {
        axios.all([axios.get('http://127.0.0.1:8000/user/'),axios.get('http://127.0.0.1:8000/medic/'),axios.get('http://127.0.0.1:8000/patient/')])
                     .then(axios.spread((...responses)=>{
                        let users = responses[0].data
                        let medics = responses[1].data
                        let patients = responses[2].data
                        let array1 = []
                        let array2 = []
                        users.forEach( user =>{
                            medics.forEach(medic=>{
                                if(user.id == medic.user){

                                    array1.push(
                                    {
                                        "id": medic.id,
                                        "user":{
                                            "id": user.id,
                                            "rol": user.rol,
                                            "doc_type": user.doc_type,
                                            "doc_number": user.doc_number,
                                            "first_name": user.first_name,
                                            "last_name": user.last_name,
                                            "e_mail": user.e_mail,
                                            "cellphone": user.cellphone,
                                            "genre": user.genre,
                                            "username": user.username,
                                            "password": user.password
                                            
                                        },
                                        "professional_card": medic.professional_card,
                                        "speciality": medic.speciality
                                    }    
                                    )
                                }
                            })
                        })

                        this.doctorList = array1

                        users.forEach( user =>{
                            patients.forEach(patient=>{
                                if(user.id == patient.user){

                                    array2.push(
                                    {
                                        "id": patient.id,
                                        "user":{
                                            "id": user.id,
                                            "rol": user.rol,
                                            "doc_type": user.doc_type,
                                            "doc_number": user.doc_number,
                                            "first_name": user.first_name,
                                            "last_name": user.last_name,
                                            "e_mail": user.e_mail,
                                            "cellphone": user.cellphone,
                                            "genre": user.genre,
                                            "username": user.username,
                                            "password": user.password
                                            
                                        },
                                        "birth_date": patient.birth_date, 
                                        "address": patient.address, 
                                        "city": patient.city, 
                                        "longitude": patient.longitude,
                                        "latitude": patient.latitude 
                                    }    
                                    )
                                }
                            })
                        })

                        this.patientList = array2

                     }))
                    .catch((errors) => {
                    
                    setTimeout(() => {
                        Swal.fire({
                        icon: 'error',
                        title: 'ERROR !',
                        text: 'Wrong in the consult'
                        })
                    }, 250)
                    // alert("Error")

                })

        },
    processSignUp: function () {
      axios.post(
        "http://127.0.0.1:8000/clinicHistory/",
        this.historic,
        { headers: {} }
      )
        .then((result) => {

        })
        .catch((error) => {
          console.log(error)

          setTimeout(() => {
            Swal.fire({
              icon: 'error',
              title: 'ERROR !',
              text: 'Wrong in the register'
            })
          }, 250)

          // alert("Error: Wrong in the register")
        })
    },
        },
    created: async function () {
        this.getData();
    },
}
</script>
<style>
.clinical-form{
    max-width: 90%; 
    margin:5% auto; 
    font-family:open sans; 
    font-size:16px !important; 
    color:#20336b; 
}

.blue {
    color:#2D54C6;
} 
.light-grey{
    color:#F8F9FC;
} 
.blue-grey{
    color:#607FD9;
} 
.dark-grey{
    color:#231F20;
}

.btn-submit{
    margin-top:2.5rem;
    width: 50%;   
}



/* Form fields design */
.form-ctn form-cnts{
    border-radius: .5em !important; 
    border-color:#a4b5e7 !important; 
    color:#20336b;
}
.form-ctn form-cnts:focused{
    color:#2D54C6 !important;
}
.form-gr{
    margin-bottom:.75rem !important;
}
label{
    margin: 0 0 .1em .25em !important;
}
::placeholder{color:#a4b5e7 !important;}
.form-check-inline{
    margin-left:1em;
}
.form-check-inline .form-check-input{
    height:1em; 
    width:1em; 
    background-color:#ffffff !important;
}

.focused{
    background:#ecf1ff; 
    padding: 3% 5%;
} /* this style would only apply to panels the user is currently engaged with - would trigger with a javascript child :active or .open trigger */

/* Section header */
.section-header{
    font-size:1.8em; 
    font-weight:400; 
    border-bottom:1px solid;
    display:block; width:100%; 
    position:relative; 
    margin:1em 0 0 0; 
    padding: 0 .25em .25em;
}
.section-header > i{
    position:absolute; 
    right:.5em; top:.4em; 
    font-size:.6em; 
    transition:300ms ease-in-out;
} /* the transition here was to help make a smooth rotation of the icon, but I couldn't get the accordion to work so... the chevron would be in the current position when 'closed' and rotate to point v when 'open' */

.subtitle{
    font-size:1.2em; 
    margin-bottom:.25em; 
    padding-top:.25em; 
    border-top:1px solid #a4b5e7;
}
hr{
    border-color:#a4b5e7 !important;
}
.form-flex{
    display:flex;
    gap: 1em;
}
.form-flexs{
    display:flex;
    gap: 0.5em;
}
</style>