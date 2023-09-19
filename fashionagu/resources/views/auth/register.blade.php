<x-auth-component>
    <x-slot name="authStuff">

        <body id="body" class="auth-page" style="background-image: url('assets/images/p-1.png'); background-size: cover; background-position: center center;">
            <!-- Log In page -->
             <div class="container-md">
                 <div class="row vh-100 d-flex justify-content-center">
                     <div class="col-12 align-self-center">
                         <div class="card-body">
                             <div class="row">
                                 <div class="col-lg-4 mx-auto">
                                     <div class="card">
                                         <div class="card-body p-0 auth-header-box">
                                             <div class="text-center p-3">
                                                 <a href="index.html" class="logo logo-admin">
                                                     <img src="/admin_assets/images/logo-sm.png" height="50" alt="logo" class="auth-logo">
                                                 </a>
                                                 <h4 class="mt-3 mb-1 fw-semibold text-white font-18">Let's Get Started With Fashion Agu </h4>
                                                 <p class="text-muted  mb-0">Sign up as a User/Buyer.</p>
                                             </div>
                                         </div>
                                         <div class="card-body pt-0">
                                             <form class="my-4" action="{{route('register')}}" method="POST">
                                                @csrf
                                                 <div class="form-group mb-2">
                                                     <label class="form-label" for="username">Name</label>
                                                     <input type="text" class="form-control" id="username" name="name" placeholder="Enter Your Name">
                                                     <x-input-error :messages="$errors->get('name')" class="mt-2" />
                                                    </div><!--end form-group-->

                                                 <div class="form-group mb-2">
                                                     <label class="form-label" for="useremail">Email</label>
                                                     <input type="email" class="form-control" id="useremail" name="email" placeholder="Enter Your Email">
                                                     <x-input-error :messages="$errors->get('email')" class="mt-2" />
                                                    </div><!--end form-group-->

                                                 <div class="form-group mb-2">
                                                     <label class="form-label" for="userpassword">Password</label>
                                                     <input type="password" class="form-control" name="password" id="userpassword" placeholder="Enter password">
                                                     <x-input-error :messages="$errors->get('password')" class="mt-2" />

                                                    </div><!--end form-group-->

                                                 <div class="form-group mb-2">
                                                     <label class="form-label" for="Confirmpassword">ConfirmPassword</label>
                                                     <input type="password" class="form-control" name="password_confirmation" id="Confirmpassword" placeholder="Enter Confirm password">
                                                     <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />

                                                    </div><!--end form-group-->

                                                 <div class="form-group mb-2">
                                                     <label class="form-label" for="mobileNo">Mobile Number</label>
                                                     <input type="text" class="form-control" id="mobileNo" name="phone" placeholder="Enter Mobile Number">
                                                     <x-input-error :messages="$errors->get('phone')" class="mt-2" />

                                                    </div><!--end form-group-->

                                                 <div class="form-group row mt-3">
                                                     <div class="col-12">
                                                         <div class="form-check form-switch form-switch-success">
                                                             <input class="form-check-input" type="checkbox" id="customSwitchSuccess">
                                                             <label class="form-check-label" for="customSwitchSuccess">By registering you agree to the FashionAgu <a href="#" class="text-primary">Terms of Use</a></label>
                                                         </div>
                                                     </div><!--end col-->
                                                 </div><!--end form-group-->

                                                 <div class="form-group mb-0 row">
                                                     <div class="col-12">
                                                         <div class="d-grid mt-3">
                                                             <button class="btn btn-primary" type="submit">Register <i class="fas fa-sign-in-alt ms-1"></i></button>
                                                         </div>
                                                     </div><!--end col-->
                                                 </div> <!--end form-group-->
                                             </form><!--end form-->
                                             <div class="m-3 text-center text-muted">
                                                 <p class="mb-0">Already have an account ? <a href="{{route('login')}}" class="text-primary ms-2">Log in</a></p>
                                             </div>
                                         </div><!--end card-body-->
                                     </div><!--end card-->
                                 </div><!--end col-->
                             </div><!--end row-->
                         </div><!--end card-body-->
                     </div><!--end col-->
                 </div><!--end row-->
             </div><!--end container-->
             <!-- vendor js -->

             <script src="/admin_assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
             <script src="/admin_assets/libs/simplebar/simplebar.min.js"></script>
             <script src="/admin_assets/libs/feather-icons/feather.min.js"></script>
             <!-- App js -->
             <script src="/admin_assets/js/app.js"></script>

         </body>

    </x-slot>
</x-auth-component>




