<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h2>Log In</h2>
                <form>
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

                    <button type="submit" class="loginbtn">Log In</button>
                    <button type="button" class="cancelbtn">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</template>