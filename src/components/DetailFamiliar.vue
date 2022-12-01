<template>
    <div class='user-card'>
        <div class='left'>
          <div class='title-wrap'>
            <h1 class='title'>{{usr.user.first_name}} {{usr.user.last_name}} </h1>
            <h3 class='title'>( {{usr.user.username}} )</h3>
            <span class='subtitle'>{{usr.user.rol}}</span>
          </div>
          <hr />
          <div class='user-info'>
            <ul>
              <li><span>email</span><br /> {{usr.user.e_mail}}</li>
              <li><span>Cellphone</span><br /> {{usr.user.cellphone}}</li>
            </ul>

            <table class="results">

                        <tr class="result-description">
                            <td class="result-description__concept">Document </td>
                            <td class="result-description__value">{{usr.user.doc_number}} {{usr.user.doc_type}} </td>
                        </tr>
                        <tr class="result-description">
                            <td class="result-description__concept">Genre</td>
                            <td class="result-description__value" >{{usr.user.genre}}</td>
                        </tr>
                        <tr class="result-description">
                            <td class="result-description__concept">Relationship</td>
                            <td class="result-description__value" >{{usr.relationship}}</td>
                        </tr>

                    </table>
          </div>
          <div class='button'><span>Back</span></div>
        </div>
        <div class='right'>
          <img src='https://placeimg.com/400/500/persons' />
        </div>
      </div>
</template>

<script>
    import axios from 'axios';
    export default{
        name: "DetailFamiliar",
        data: function(){
            return{
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
          "relationship": ""
        }
            }
        },
        methods:{
            getData:function(){
                axios.all([axios.get(`http://127.0.0.1:8000/user/${this.$route.params.id}/`),axios.get('http://127.0.0.1:8000/familair/')])
                     .then(axios.spread((...responses)=>{
                        let user = responses[0].data
                        let familiars = responses[1].data
                        let partner = []
                        console.log(user)
                        console.log(partner)
                            familiars.forEach(familiar=>{
                                if(user.id == familiar.user && user.id == this.$route.params.id){
                                    
                                    partner =
                                    {
                                        "id": familiar.id,
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
                                        "relationship": familiar.relationship
                                    }   
                                    
                                    
                                }
                            })
                       
                        
                            this.usr = partner

                     }))
                    .catch((errors) => {
                    
                    setTimeout(() => {
                        Swal.fire({
                        icon: 'error',
                        title: 'ERROR !',
                        text: "Wrong in obtaining the familiar's data"
                        })
                    }, 250)
                    // alert("Error")

                })
            }
        },
    created: async function () {
        this.getData();
    },
    }
</script>
<style>
 .user-card {
	 text-align: center;
	 background: #fefefe;
	 min-height: 500px;
	 margin-top: 100px;
	 display: flex;
	 flex-direction: row;
	 align-items: center;
	 justify-content: center;
	 border-radius: 10px;
	 box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
}
 @media (max-width: 850px) {
	 .user-card {
		 flex-direction: column-reverse;
	}
}
 .left {
	 padding: 30px;
	 display: flex;
	 flex-direction: column;
	 align-items: center;
}
 .right {
	 display: flex;
}
 .right img {
	 align-self: flex-end;
	 border-radius: 0 10px 10px 0;
}
 @media (max-width: 850px) {
	 .right img {
		 border-radius: 10px 10px 0 0;
		 width: 100%;
	}
}
 @media (max-width: 850px) {
	 .right {
		 width: 100%;
	}
}
 .title-wrap {
	 padding: 15px 0;
}
 .title {
	 margin: 0;
	 padding: 0;
}
 .subtitle {
	 margin-bottom: 60px;
	 position: relative;
	 color: rgba(0, 0, 0, .5);
}
 hr {
	 width: 50px;
	 border-top: 1px solid rgba(0, 0, 0, .2);
}
 .user-info {
	 display: flex;
	 flex-direction: column;
	 max-width: 400px;
	 text-align: center;
}
 .user-info ul {
	 display: flex;
	 align-self: center;
	 margin: 0;
	 padding: 0;
}
 .user-info li {
	 list-style: none;
	 margin: 0;
	 padding: 0;
	 padding: 15px 30px;
}
 .user-info li span {
	 font-size: 12px;
	 font-weight: 700;
}
 .user-info p {
	 line-height: 1.5rem;
}
 .button {
	 background: #2c0da8;
	 color: white;
	 padding: 18px;
	 margin-top: 10px;
	 border-radius: 25px;
	 width: 150px;
	 font-weight: bold;
	 cursor: pointer;
	 box-shadow: 0 5px 30px rgba(0, 0, 0, .2);
	 transition: 0.1s ease-in-out;
}
 .button:hover {
	 background: #3816bf;
	 box-shadow: 0 5px 30px rgba(0, 0, 0, .3);
}
/* table */
.results{
    border:none;
    background: inherit;
    width:100%;
    box-shadow:none;
}
.result-title{
    padding-left: 0;
}
.result-description__concept{
    font-weight: bold;
    text-align: left;
    padding-left: 2rem;
}
.result-description__value{
    text-align: right;
    padding-right: 2rem;
}
</style>