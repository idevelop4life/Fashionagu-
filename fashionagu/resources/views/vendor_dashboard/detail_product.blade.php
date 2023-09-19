<x-app-layout>
    <x-slot name="admin_content">

        <div class="page-wrapper">

            <!-- Page Content-->
            <div class="page-content-tab">

                <div class="container-fluid">
                    <!-- Page-Title -->
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="page-title-box">
                                <div class="float-end">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#">Metrica</a>
                                        </li><!--end nav-item-->
                                        <li class="breadcrumb-item"><a href="#">Ecommerce</a>
                                        </li><!--end nav-item-->
                                        <li class="breadcrumb-item active">Detail</li>
                                    </ol>
                                </div>
                                <h4 class="page-title">Product Detail</h4>
                            </div><!--end page-title-box-->
                        </div><!--end col-->
                    </div>
                    <!-- end page title end breadcrumb -->
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-lg-6 align-self-center">
                                            <img src="/admin_assets/images/products/02.png" alt="" class="mx-auto  d-block" height="300">
                                                    
                                        </div><!--end col-->
                                        <div class="col-lg-6 align-self-center">
                                            <div class="">
                                                <span class="badge badge-soft-danger font-13 fw-semibold mb-2">{{$product->vendor}}</span>
                                                <h5 class="font-24 mb-0">{{$product->title}}</h5>
                                                <p class="text-muted mb-2">{{$product->in_stock}}</p> 
                                                <ul class="list-inline mb-2">
                                                    <li class="list-inline-item me-0"><i class="mdi mdi-star text-warning font-16"></i></li>
                                                    <li class="list-inline-item me-0"><i class="mdi mdi-star text-warning font-16"></i></li>
                                                    <li class="list-inline-item me-0"><i class="mdi mdi-star text-warning font-16"></i></li>
                                                    <li class="list-inline-item me-0"><i class="mdi mdi-star text-warning font-16"></i></li>
                                                    <li class="list-inline-item"><i class="mdi mdi-star-half text-warning font-16"></i></li>
                                                    <li class="list-inline-item">4.5 (9830 reviews)</li>
                                                </ul>
                                                <h6 class="font-20 fw-bold">${{$product->price}} <span class="font-14 text-muted fw-semibold"><del>$180.00</del></span><span class="text-danger font-14 fw-semibold ms-2">50% Off</span></h6>
                                                <h6 class="font-13">Detail :</h6> 
                                                <p class="text-muted">{{$product->description}}
                                                </p>                                                 
                                                <h6 class="font-13">Features :</h6> 
                                                <ul class="list-unstyled border-0">
                                                    <li class="mb-2"><i class="las la-check-circle text-success me-1"></i>It is a long established fact that a reader will be distracted.</li>
                                                    <li class="mb-2"><i class="las la-check-circle text-success me-1"></i>Contrary to popular belief, Lorem Ipsum is not text. </li>
                                                    <li><i class="las la-check-circle text-success me-1"></i>There are many variations of passages of Lorem Ipsum available. </li>
                                                </ul>                                                                                    
                                                <div class="mt-3">
                                                    <input class="form-control form-control-sm d-inline-block" style="width:100px;" type="number" min="0" value="0" id="example-number-input">
                                                    <a href="#" class="btn btn-de-primary btn-sm px-4 d-inline-block"><i class="mdi mdi-cart me-2"></i>Add to Cart</a>
                                                </div>                                             
                                            </div>
                                        </div><!--end col-->                                            
                                    </div><!--end row-->
                                </div><!--end card-body-->
                            </div><!--end card-->
                        </div><!--end col-->
                    </div><!--end row-->

                    <div class="row">
                        <div class="col-lg-3">
                            <div class="card">
                               <div class="card-body">
                                    <i class="mdi mdi-truck-fast text-success font-30"></i>
                                    <h4 class="header-title">Fast Delivery</h4>
                                    <p class="text-muted mb-0">
                                        It is a long established fact that a reader will be distracted.
                                        Contrary to popular belief.
                                    </p>
                                </div><!--end card-body-->
                            </div><!--end card-->
                        </div><!--end col-->
                        <div class="col-lg-3">
                            <div class="card">
                               <div class="card-body">
                                    <i class="mdi mdi-refresh text-danger font-30"></i>
                                    <h4 class="header-title">Returns in 30 Days</h4>
                                    <p class="text-muted mb-0">
                                        It is a long established fact that a reader will be distracted.
                                        Contrary to popular belief.
                                    </p>
                                </div><!--end card-body-->
                            </div><!--end card-->
                        </div><!--end col-->
                        <div class="col-lg-3">
                            <div class="card">
                               <div class="card-body">
                                    <i class="mdi mdi-headset text-warning font-30"></i>
                                    <h4 class="header-title">Online Support 24/7</h4>
                                    <p class="text-muted mb-0">
                                        It is a long established fact that a reader will be distracted.
                                        Contrary to popular belief.
                                    </p>
                                </div><!--end card-body-->
                            </div><!--end card-->
                        </div><!--end col-->
                        <div class="col-lg-3">
                            <div class="card">
                               <div class="card-body">
                                    <i class="mdi mdi-wallet text-purple font-30"></i>
                                    <h4 class="header-title">Secure Payment</h4>
                                    <p class="text-muted mb-0">
                                        It is a long established fact that a reader will be distracted.
                                        Contrary to popular belief.
                                    </p>
                                </div><!--end card-body-->
                            </div><!--end card-->
                        </div><!--end col-->                                        
                    </div><!--end row-->
                    
                    

                </div><!-- container -->

                <!--Start Rightbar-->
                <!--Start Rightbar/offcanvas-->
                <div class="offcanvas offcanvas-end" tabindex="-1" id="Appearance" aria-labelledby="AppearanceLabel">
                    <div class="offcanvas-header border-bottom">
                      <h5 class="m-0 font-14" id="AppearanceLabel">Appearance</h5>
                      <button type="button" class="btn-close text-reset p-0 m-0 align-self-center" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">  
                        <h6>Account Settings</h6>
                        <div class="p-2 text-start mt-3">
                            <div class="form-check form-switch mb-2">
                                <input class="form-check-input" type="checkbox" id="settings-switch1">
                                <label class="form-check-label" for="settings-switch1">Auto updates</label>
                            </div><!--end form-switch-->
                            <div class="form-check form-switch mb-2">
                                <input class="form-check-input" type="checkbox" id="settings-switch2" checked>
                                <label class="form-check-label" for="settings-switch2">Location Permission</label>
                            </div><!--end form-switch-->
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="settings-switch3">
                                <label class="form-check-label" for="settings-switch3">Show offline Contacts</label>
                            </div><!--end form-switch-->
                        </div><!--end /div-->
                        <h6>General Settings</h6>
                        <div class="p-2 text-start mt-3">
                            <div class="form-check form-switch mb-2">
                                <input class="form-check-input" type="checkbox" id="settings-switch4">
                                <label class="form-check-label" for="settings-switch4">Show me Online</label>
                            </div><!--end form-switch-->
                            <div class="form-check form-switch mb-2">
                                <input class="form-check-input" type="checkbox" id="settings-switch5" checked>
                                <label class="form-check-label" for="settings-switch5">Status visible to all</label>
                            </div><!--end form-switch-->
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="settings-switch6">
                                <label class="form-check-label" for="settings-switch6">Notifications Popup</label>
                            </div><!--end form-switch-->
                        </div><!--end /div-->               
                    </div><!--end offcanvas-body-->
                </div>
                <!--end Rightbar/offcanvas-->
                 <!--end Rightbar-->
                 
                <!--Start Footer-->
                <!-- Footer Start -->
                <footer class="footer text-center text-sm-start">
                    &copy; <script>
                        document.write(new Date().getFullYear())
                    </script> Metrica <span class="text-muted d-none d-sm-inline-block float-end">Crafted with <i
                            class="mdi mdi-heart text-danger"></i> by Mannatthemes</span>
                </footer>
                <!-- end Footer -->                
                <!--end footer-->
            </div>
            <!-- end page content -->
        </div>
        <!-- end page-wrapper -->

    </x-slot>
 </x-app-layout>
