<template>
    <div>
        <section class="hero is-medium is-info is-bold">
            <div class="hero-body">
                <div class="container mt-5 pb-5">
                    <h1 class="title">Familiar's Data table</h1>
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
                                    <th>Relationship</th>
                                    <th>controls</th>
                                </tr>
                            </template>
                            <template #tbody>

                                <tr v-for="usr in list">
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
                                        {{usr.relationship}}
                                    </td>
                                    <td>
                                        <button v-on:click="detailRecord(usr.user.id)">
                                            <i class="fa fa-search fa-lg"></i>
                                        </button>
                                        <button v-on:click="updateRecord(usr.user.id)">
                                            <i class="fa fa-pen fa-lg"></i>
                                        </button>
                                        <button v-on:click="deleteRecord(usr.user.id)">
                                            <i class="fa fa-trash fa-lg"></i>
                                        </button>
                                    </td>
                                </tr>

                            </template>
                        </vue-scrolling-table>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
import "/node_modules/vue-scrolling-table/dist/style.css";
import VueScrollingTable from "vue-scrolling-table";
import axios from 'axios';
export default {
    name: "ListDestroyFamiliar",
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
        }
    },
    methods: {
        getData: async function () {


            axios.all([axios.get('http://127.0.0.1:8000/user/'), axios.get('http://127.0.0.1:8000/familiar/')])
                .then(axios.spread((...responses) => {
                    let users = responses[0].data
                    let familiars = responses[1].data
                    let array = []
                    users.forEach(user => {
                        familiars.forEach(familiar => {
                            if (user.id == familiar.user) {

                                array.push(
                                    {
                                        "id": familiar.id,
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
                                        "relationship": familiar.relationship
                                    }
                                )
                            }
                        })
                    })

                    this.list = array

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
            this.$router.push('updateDoctor/' + id)
        },
        detailRecord(id) {
            this.$router.push('detailDoctor/' + id)
        },
        deleteRecord(id) {
            axios.delete(`http://127.0.0.1:8000/user/${id}/`)
                .then(result => {
                    this.getData();
                })
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
</style>