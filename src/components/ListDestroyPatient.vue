<template>
    <div>
        <section class="hero is-medium is-info is-bold">
            <div class="hero-body">
                <div class="container mt-5 pb-5">
                    <h1 class="title">Patient's Data table</h1>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="content">

                    <div class="box">
                        <vue-scrolling-table :scroll-horizontal="scrollHorizontal" :scroll-vertical="scrollVertical"
                            :sync-header-scroll="syncHeaderScroll" :sync-footer-scroll="syncFooterScroll"
                            :include-footer="includeFooter" :dead-area-color="deadAreaColor"
                            :class="{ freezeFirstColumn: freezeFirstColumn }">
                            <template #thead>

                                <tr>
                                    <th>Username</th>
                                    <th>Rol</th>
                                    <th>Document Type</th>
                                    <th>Document Number</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>E-mail</th>
                                    <th>Cellphone</th>
                                    <th>Genre</th>
                                    <th>Date of Birth</th>
                                    <th>Address</th>
                                    <th>Geopositioning</th>
                                    <th>Controls</th>
                                </tr>
                            </template>
                            <template #tbody>

                                <tr v-for="usr in patientList">
                                    <td>
                                        {{usr.user.username}}
                                    </td>
                                    <td>
                                        {{usr.user.rol}}
                                    </td>
                                    <td>
                                        {{usr.user.doc_type}}
                                    </td>
                                    <td>
                                        {{usr.user.doc_number}}
                                    </td>
                                    <td>
                                        {{usr.user.first_name}}
                                    </td>
                                    <td>
                                        {{usr.user.last_name}}
                                    </td>
                                    <td>
                                        {{usr.user.e_mail}}
                                    </td>
                                    <td>
                                        {{usr.user.cellphone}}
                                    </td>
                                    <td>
                                        {{usr.user.genre}}
                                    </td>
                                    <td>
                                        {{usr.birth_date}}
                                    </td>
                                    <td>
                                        {{usr.address}} , {{usr.city}}
                                    </td>
                                    <td>
                                        longitude: {{usr.longitude}} <br> latitude: {{usr.latitude}}
                                    </td>
                                    <td>
                                        <div class="tb-flex">

                                            <div>
                                                <!-- v-on:click="assignPatient(usr)" -->
                                                <button type="button" data-bs-toggle="modal" data-bs-target="#exaModal" v-on:click="assignPatient(usr)">
                                                    <i class="fa fa-calendar-plus fa-lg"></i>
                                                </button>
                                            </div>

                                            <div>
                                                <button v-on:click="detailRecord(usr.user.id)">
                                                    <i class="fa fa-search fa-lg"></i>
                                                </button>
                                                <button v-on:click="updateRecord(usr.uer.id)">
                                                    <i class="fa fa-pen fa-lg"></i>
                                                </button>
                                                <button v-on:click="deleteRecord(usr.user.id)">
                                                    <i class="fa fa-trash fa-lg"></i>
                                                </button>
                                            </div>

                                        </div>
                                    </td>
                                </tr>

                                <!-- ************ -->
                                <div class="modal fade" id="exaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <div>
                                                    <h4 class="modal-title ">Doctors Schedule</h4>
                                                </div>
                                                <button type="button" data-bs-dismiss="modal" class="close">
                                                    <span>×</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="payment-note-wrapper">
                                                    <div class="payment-note-container">
                                                        <table class="table table-bordered">
                                                            <!-- ngIf: pendingPayments.payments['id_' + ui.newPaymentNote.paymentId].notes.length > 0 -->
                                                            <thead
                                                                
                                                                class="">
                                                                <tr>
                                                                    <th>
                                                                        <div class="th-inner">First Name</div>
                                                                    </th>
                                                                    <th>
                                                                        <div class="th-inner">Last Name</div>
                                                                    </th>
                                                                    <th>
                                                                        <div class="th-inner">Speciality</div>
                                                                    </th>
                                                                    <th>
                                                                        <div class="th-inner">&nbsp;</div>
                                                                    </th>
                                                                </tr>


                                                            </thead>
                                                            
                                                            <tbody>
                                                                
                                                                <tr class="" v-for="usr in doctorList">
                                                                    <td class="">{{usr.user.first_name}}</td>
                                                                    <td class="">{{usr.user.last_name}}</td>
                                                                    <td class="">{{usr.speciality}}</td>
                                                                    <td class="close-column text-center">
                                                                        <button class="close" data-bs-target="#exaModal2" data-bs-toggle="modal"><i
                                                                                class="fa fa-id-badge fa-lg"></i></button>
                                                                    </td>
                                                                </tr>

                                                                
                                                            </tbody>

                                                        </table>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" data-bs-dismiss="modal"
                                                    class="btn btn-default">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- ************ -->
                                <div class="modal fade" id="exaModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <div>
                                                    <h4 class="modal-title ">Scheduled Patients</h4>
                                                </div>
                                                <button type="button" data-bs-dismiss="modal" class="close">
                                                    <span>×</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="payment-note-wrapper">
                                                    <div class="payment-note-container">
                                                        <table class="table table-bordered">
                                                            <!-- ngIf: pendingPayments.payments['id_' + ui.newPaymentNote.paymentId].notes.length > 0 -->
                                                            <thead
                                                                
                                                                class="">
                                                                <tr>
                                                                    <th>
                                                                        <div class="th-inner">First Name</div>
                                                                    </th>
                                                                    <th>
                                                                        <div class="th-inner">Last Name</div>
                                                                    </th>
                                                                    <th>
                                                                        <div class="th-inner">Email</div>
                                                                    </th>
                                                                    <th>
                                                                        <div class="th-inner">&nbsp;</div>
                                                                    </th>
                                                                </tr>


                                                            </thead>
                                                            
                                                            <tbody>
                                                                
                                                                <tr class="" v-for="usr in patientList">
                                                                    <td class="">{{usr.user.first_name}}</td>
                                                                    <td class="">{{usr.user.last_name}}</td>
                                                                    <td class="">{{usr.user.e_mail}}</td>
                                                                    <td class="close-column text-center">
                                                                        <button class="close" v-on:click="removePatient(usr.id)">
                                                                            <ion-icon name="close-outline"></ion-icon></button>
                                                                    </td>
                                                                </tr>

                                                                
                                                            </tbody>

                                                        </table>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" data-bs-dismiss="modal"
                                                    class="btn btn-default">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- ********** -->
                            </template>
                        </vue-scrolling-table>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import "/node_modules/vue-scrolling-table/dist/style.css";
import VueScrollingTable from "vue-scrolling-table";
export default {
    name: "ListDestroyPatient",
    components: {
        VueScrollingTable,
    },
    data: function () {
        return {
            scrollVertical: true,
            scrollHorizontal: true,
            syncHeaderScroll: true,
            syncFooterScroll: true,
            includeFooter: true,
            deadAreaColor: "#DDDDDD",
            maxRows: 100,
            freezeFirstColumn: false,
            list: [],
            patientList: [],
            doctorList: []
        }
    },
    methods: {
        getData: async function () {

            axios.all([axios.get('http://127.0.0.1:8000/user/'), axios.get('http://127.0.0.1:8000/medic/'), axios.get('http://127.0.0.1:8000/patient/')])
                .then(axios.spread((...responses) => {
                    let users = responses[0].data
                    let medics = responses[1].data
                    let patients = responses[2].data
                    let array1 = []
                    let array2 = []
                    users.forEach(user => {
                        medics.forEach(medic => {
                            if (user.id == medic.user) {

                                array1.push(
                                    {
                                        "id": medic.id,
                                        "user": {
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

                    users.forEach(user => {
                        patients.forEach(patient => {
                            if (user.id == patient.user) {

                                array2.push(
                                    {
                                        "id": patient.id,
                                        "user": {
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
        updateRecord(id) {
            this.$router.push('updatePatient/' + id)
        },
        detailRecord(id) {
            this.$router.push('detailPatient/' + id)
        },
        deleteRecord(id) {
            axios.delete(`http://127.0.0.1:8000/user/${id}/`)
                .then(result => {
                    this.getData();
                })
        },
        assignPatient(usr) {
            this.patientList.push(usr)
        },
        removePatient(id){
            this.patientList = thisl.patienList.filter((item) => item.id != id)
        }                                                                        

    },
    created: async function () {
        this.getData();
    },
}
</script>
<style>
table.scrolling .w2 {
    width: 20em;
    min-width: 20em;
    max-width: 20em;
}

table.scrolling tfoot tr th {
    width: 130em;
    min-width: 130em;
    max-width: 130em;
}

table.freezeFirstColumn thead tr,
table.freezeFirstColumn tbody tr {
    display: block;
    width: min-content;
}

table.freezeFirstColumn thead td:first-child,
table.freezeFirstColumn tbody td:first-child,
table.freezeFirstColumn thead th:first-child,
table.freezeFirstColumn tbody th:first-child {
    position: sticky;
    position: -webkit-sticky;
    left: 0;
}

.box {
    clear: both;
    padding: 0;
    min-height: 300px;
    height: 40vh;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
}

table {
    width: 800px;
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

th,
td {
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #333;
}

th {
    text-align: left;
}

thead th {
    background-color: #55608f;
    color: #fff
}

tbody tr:hover {
    background-color: rgba(207, 207, 207, 0.475);
}

tbody td {
    position: relative;
}

tbody td:hover:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -9999px;
    bottom: -9999px;
    background-color: rgba(130, 125, 125, 0.2);
    z-index: -1;
}

.detalle {
    font-weight: 400;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.tb-flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
}

.fa-trash {
    color: crimson !important;
}

.fa-calendar-plus {
    color: darkturquoise;
}


/* The following I am keeping since I need them for modal styles */
div #deletePendingPaymentConfirmation .modal-title,
div #paymentNoteModal .modal-title {
    display: inline-block;
    vertical-align: middle;
}

div #paymentNoteModal textarea #newPaymentNote {
    resize: vertical;
}

div #paymentNoteModal td .close-column {
    vertical-align: middle;
}


/* The rest of these styles are the ones that are trivial to me currenty */

div #paymentNoteModal div .modal-dialog {
    overflow-y: initial !important;
}


/* .hidden-header .th-inner {
    position: static;
    overflow-y: hidden;
    height: 0;
    white-space: nowrap;
    padding-right: 5px;
} */

.th-inner {
    width: 100%;
    /* position: absolute;
    top: 0; */
    z-index: 5;
    line-height: 37px;
    text-align: left;
    /* border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd; */
    color: #000;
    /* padding-left: 8px;
    margin-left: -9px; */
    background: #f4f4f4;

}

.payment-note-container {
    max-height: 500px;
    overflow-y: auto;
}

.payment-note-container table {
    margin-bottom: 0;
}

.payment-note-wrapper {
    position: relative;
    overflow: hidden;
}
.payment-note-container  .table thead tr{
    background:#f4f4f4;
}
.payment-note-container  .table thead tr th{
    background:#f4f4f4;
}

</style>