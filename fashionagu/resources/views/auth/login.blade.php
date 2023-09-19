
    <!-- Session Status -->

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
                                                 <h4 class="mt-3 mb-1 fw-semibold text-white font-18">Let's Get Started With FashionAgu</h4>
                                                 <p class="text-muted  mb-0">Sign in to FashionAgu.</p>
                                             </div>
                                         </div>
                                         <div class="card-body pt-0">
                                             <form class="my-4" action="{{route('login')}}" method="POST">
                                                @csrf

                                                 <div class="form-group mb-2">

                                                <x-auth-session-status class="mb-4" :status="session('status')" />

                                                     <label class="form-label" for="username">Email</label>
                                                     <input type="email" class="form-control" id="username" name="email" placeholder="Enter Your Email">
                                                 </div><!--end form-group-->

                                                 <div class="form-group">
                                                     <label class="form-label" for="userpassword">Password</label>
                                                     <input type="password" class="form-control" name="password" id="userpassword" placeholder="Enter password">
                                                 </div><!--end form-group-->

                                                 <div class="form-group row mt-3">
                                                     <div class="col-sm-6">
                                                         <div class="form-check form-switch form-switch-success">
                                                             <input class="form-check-input" type="checkbox" id="customSwitchSuccess">
                                                             <label class="form-check-label" for="customSwitchSuccess">Remember me</label>
                                                         </div>
                                                     </div><!--end col-->
                                                     <div class="col-sm-6 text-end">
                                                         <a href="auth-recover-pw.html" class="text-muted font-13"><i class="dripicons-lock"></i> Forgot password?</a>
                                                     </div><!--end col-->
                                                 </div><!--end form-group-->

                                                 <div class="form-group mb-0 row">
                                                     <div class="col-12">
                                                         <div class="d-grid mt-3">
                                                             <button class="btn btn-primary" type="submit">Log In <i class="fas fa-sign-in-alt ms-1"></i></button>
                                                         </div>
                                                     </div><!--end col-->
                                                 </div> <!--end form-group-->
                                             </form><!--end form-->
                                             <div class="m-3 text-center text-muted">
                                                 <p class="mb-0">Don't have an account ?  <a href="{{route('register')}}" class="text-primary ms-2">Free Resister</a></p>
                                             </div>
                                             <hr class="hr-dashed mt-4">
                                             {{-- <div class="text-center mt-n5">
                                                 <h6 class="card-bg px-3 my-4 d-inline-block">Or Login With</h6>
                                             </div>
                                             <div class="d-flex justify-content-center mb-1">
                                                 <a href="#" class="d-flex justify-content-center align-items-center thumb-sm bg-soft-primary rounded-circle me-2">
                                                     <i class="fab fa-facebook align-self-center"></i>
                                                 </a>
                                                 <a href="#" class="d-flex justify-content-center align-items-center thumb-sm bg-soft-info rounded-circle me-2">
                                                     <i class="fab fa-twitter align-self-center"></i>
                                                 </a>
                                                 <a href="#" class="d-flex justify-content-center align-items-center thumb-sm bg-soft-danger rounded-circle">
                                                     <i class="fab fa-google align-self-center"></i>
                                                 </a>
                                             </div> --}}
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

