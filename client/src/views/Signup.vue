<template>
   <div class='container'>
       <div class='row'>
           <div class='col-md-8'>
               <h2>Create An Account</h2>
               <form @submit.prevent = 'registerUser'>
                   <div class="form-group text-left">
                       <label for='First Name'>First Name</label>
                       <input type='text' name ='fname' id = 'fname' placeholder='Enter first name' v-model='fname' class='form-control'>
                   </div>
                   <div class="form-group text-left">
                       <label for='Middle Name'>Middle Name</label>
                       <input type='text' name = 'mname' id = 'mname' placeholder='Enter middle name' v-model='mname' class='form-control'>
                    </div>
                    <div class="form-group text-left">
                       <label for='Last Name'>Last Name</label>
                       <input type='text' name = 'lname' id = 'lname'
                       placeholder='Enter last name' v-model='lname' class='form-control'>
                    </div>
                    <div class="form-group text-left">
                       <label for='Address'>Address</label>
                       <input type='text'
                       name = 'address ' id = 'address' placeholder='Enter address' v-model='address' class='form-control'>
                    </div>
                    <div class="form-group text-left">
                       <label for='Birthday'>Birthday</label>
                       <input type='text' name = 'birthday' id = birthday placeholder='Enter Birthday' v-model='birthday' class='form-control'>
                    </div>
                    <div class="form-group text-left">
                       <label for='Email'>Email</label>
                       <input type='text'
                       name = 'email'
                       id = 'email'
                       placeholder='Enter Email'
                       v-model='email'
                       class='form-control'>
                    </div>
                    <div class="form-group text-left">
                       <label for='Username'>Username</label>
                       <input type='text'
                       name = 'username'
                       id = 'username'
                       placeholder='Enter Username'
                       v-model='username'
                       class='form-control'>
                    </div>
                    <div class="form-group text-left">
                       <label for='Password'>Password</label>
                       <input type='password'
                       name = 'password'
                       id = 'password'
                       placeholder='Enter Password'
                       v-model='password'
                       class='form-control'>
                    </div>
                    
                        <button type="submit" class="signupbtn">Sign Up</button>
                       <button type="button" class="cancelbtn">Cancel</button>
                       
               </form>
           </div>
       </div>
   </div>
</template>

<script>
// import axios from 'axios'
// import router from '../router'
export default{
    data() {
        return{
            fname: '',
            midini: '',
            lname: '',
            address: '',
            bdate: '',
            contact: '',
            email: '',
            uname: '',
            pass: ''
        }
    },
    methods:{
        registerUser(){
            if(this.fname === ''){
                alert('Please enter your First Name.')
            }
        }
    }
}

</script>

<style>

</style>