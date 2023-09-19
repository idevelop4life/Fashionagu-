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
                                        <li class="breadcrumb-item"><a href="#">Metric</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="breadcrumb-item"><a href="#">Dashboard</a>
                                        </li>
                                        <!--end nav-item-->
                                        <li class="breadcrumb-item active">Analytics</li>
                                    </ol>
                                </div>
                                <h4 class="page-title">Analytics</h4>
                            </div>
                            <!--end page-title-box-->
                        </div>
                        <!--end col-->
                    </div>
                    <!-- end page title end breadcrumb -->


                    {{-- the add product form --}}

                    <!-- end page title end breadcrumb -->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Add Products</h4>
                                    <p class="text-muted mb-0">Products added here will be displayed on your store and
                                        in the market please. Take caution in entering the details. Although, for your
                                        convinience, should you make any error you can always edit.
                                    </p>
                                </div>
                                <!--end card-header-->
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-lg-6">

                                            <form action="{{route('v_addProducts')}}" method="POST">
                                                @csrf
                                                <div class="mb-3 row">
                                                    <label for="example-text-input"
                                                        class="col-sm-2 col-form-label text-end">Product Name</label>
                                                    <div class="col-sm-10">
                                                        <input class="form-control" type="text" name="title"
                                                            placeholder="Enter your product name."
                                                            id="example-text-input">
                                                    </div>
                                                </div>

                                                {{-- this should be automatically lifted and dropped here --}}
                                                <div class="mb-3 row">
                                                    <label for="example-text-input"
                                                        class="col-sm-2 col-form-label text-end">Vendor Name</label>
                                                    <div class="col-sm-10">
                                                        <input class="form-control" type="text" name="vendor"
                                                            placeholder="Enter vendor name." id="example-text-input">
                                                    </div>
                                                </div>


                                                <div class="input-group row mb-3">
                                                    <label for="example-text-input"
                                                        class="col-sm-2 col-form-label text-end"> Old Price</label>
                                                    <span class="col-sm-1 input-group-text">$</span>
                                                    <input type="text" name="old_price"
                                                        placeholder="This is the old price."
                                                        class="form-control col-sm-8"
                                                        aria-label="Amount (to the nearest dollar)">
                                                    <span class=" col-sm-1 input-group-text">.00</span>
                                                </div>
                                                <div class="input-group row mb-3">
                                                    <label for="example-text-input"
                                                        class="col-sm-2 col-form-label text-end">Price</label>
                                                    <span class="col-sm-1 input-group-text">$</span>
                                                    <input type="text" name="price"
                                                        placeholder="This is the actual price."
                                                        class="form-control col-sm-8"
                                                        aria-label="Amount (to the nearest dollar)">
                                                    <span class=" col-sm-1 input-group-text">.00</span>
                                                </div>
                                                <div class="input-group row mb-3">
                                                    <label for="example-text-input"
                                                        class="col-sm-2 col-form-label text-end">Weight</label>
                                                    <span class="col-sm-1 input-group-text">kg</span>
                                                    <input type="text" name="weight"
                                                        placeholder="Enter the weight of this product."
                                                        class="form-control col-sm-8"
                                                        aria-label="Amount (to the nearest dollar)">
                                                    <span class=" col-sm-1 input-group-text">.00</span>
                                                </div>

                                                <div class="mb-3 row">
                                                    <label for="example-datetime-local-input"
                                                        class="col-sm-2 col-form-label text-end">Date/Time of
                                                        delivery</label>
                                                    <div class="col-sm-10">
                                                        <input class="form-control" type="datetime-local"
                                                            name="delivery_time" id="example-datetime-local-input">
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <label for="example-datetime-local-input"
                                                        class="col-sm-2 col-form-label text-end">Description</label>
                                                    <div class="col-sm-10">
                                                        <div class="mb-3">
                                                            <textarea class="form-control"
                                                                placeholder="Enter the details of the product."
                                                                name="description" rows="5" id="message"></textarea>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="mb-3 row">
                                                    <label class="col-sm-2 col-form-label text-end">In Stock ?</label>
                                                    <div class="col-sm-10">
                                                        <select name="in_stock" class="form-select"
                                                            aria-label="Default select example">
                                                            <option selected>Select an option</option>
                                                            <option value="Yes(in-stock)">Yes(in-stock)</option>
                                                            <option value="No(available-on-demand)">
                                                                No(available-on-demand)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label class="col-sm-2 col-form-label text-end">In Deleted ?</label>
                                                    <div class="col-sm-10">
                                                        <select name="is_deleted" class="form-select"
                                                            aria-label="Default select example">
                                                            <option selected>Select an option</option>
                                                            <option value="Yes">Yes</option>
                                                            <option value="No">No</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label class="col-sm-2 col-form-label text-end">Package ?</label>
                                                    <div class="col-sm-10">
                                                        <select name="package" class="form-select"
                                                            aria-label="Default select example">
                                                            <option selected>Select an option</option>
                                                            <option value="Yes(pack available)">Yes(pack available)
                                                            </option>
                                                            <option value="No(pack not available)">No(pack not
                                                                available)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label class="col-sm-2 col-form-label text-end">Gender ?</label>
                                                    <div class="col-sm-10">
                                                        <select name="gender" class="form-select"
                                                            aria-label="Default select example">
                                                            <option selected>Select an option</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                {{-- this will be modified as this method is too generic --}}
                                                <div class="mb-3 row">
                                                    <label class="col-sm-2 col-form-label text-end">Size ?</label>
                                                    <div class="col-sm-10">
                                                        <select name="size" class="form-select"
                                                            aria-label="Default select example">
                                                            <option selected>Select an option</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label class="col-sm-2 col-form-label text-end">Grade ?</label>
                                                    <div class="col-sm-10">
                                                        <select name="grade" class="form-select"
                                                            aria-label="Default select example">
                                                            <option selected>Select an option</option>
                                                            <option value="A">A</option>
                                                            <option value="B">B</option>
                                                        </select>
                                                    </div>
                                                </div>


                                                <div class="mb-3 row">
                                                    <label for="example-password-input"
                                                        class="col-sm-2 col-form-label text-end">Quantity</label>
                                                    <div class="col-sm-10">
                                                        <input class="form-control" type="number" name="quantity"
                                                            id="example-password-input">
                                                    </div>
                                                </div>

                                                <div class="mb-3 row">
                                                    <label for="exampleColorInput"
                                                        class="col-sm-2 col-form-label text-end">Color</label>
                                                    <div class="col-sm-10">
                                                        <input type="color" class="form-control form-control-color"
                                                            id="exampleColorInput" name="color"
                                                            title="Choose your color">
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-sm-12 text-end">
                                                        <button type="submit" class="btn btn-de-primary px-4">Add Product</button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>

                                    </div>
                                </div>
                                <!--end card-body-->
                            </div>
                            <!--end card-->
                        </div>
                        <!--end col-->
                    </div>
                    <!--end row-->

                </div><!-- container -->

                <!--Start Rightbar-->
                <!--Start Rightbar/offcanvas-->
                <div class="offcanvas offcanvas-end" tabindex="-1" id="Appearance" aria-labelledby="AppearanceLabel">
                    <div class="offcanvas-header border-bottom">
                        <h5 class="m-0 font-14" id="AppearanceLabel">Appearance</h5>
                        <button type="button" class="btn-close text-reset p-0 m-0 align-self-center"
                            data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <h6>Account Settings</h6>
                        <div class="p-2 text-start mt-3">
                            <div class="form-check form-switch mb-2">
                                <input class="form-check-input" type="checkbox" id="settings-switch1">
                                <label class="form-check-label" for="settings-switch1">Auto updates</label>
                            </div>
                            <!--end form-switch-->
                            <div class="form-check form-switch mb-2">
                                <input class="form-check-input" type="checkbox" id="settings-switch2" checked>
                                <label class="form-check-label" for="settings-switch2">Location Permission</label>
                            </div>
                            <!--end form-switch-->
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="settings-switch3">
                                <label class="form-check-label" for="settings-switch3">Show offline Contacts</label>
                            </div>
                            <!--end form-switch-->
                        </div>
                        <!--end /div-->
                        <h6>General Settings</h6>
                        <div class="p-2 text-start mt-3">
                            <div class="form-check form-switch mb-2">
                                <input class="form-check-input" type="checkbox" id="settings-switch4">
                                <label class="form-check-label" for="settings-switch4">Show me Online</label>
                            </div>
                            <!--end form-switch-->
                            <div class="form-check form-switch mb-2">
                                <input class="form-check-input" type="checkbox" id="settings-switch5" checked>
                                <label class="form-check-label" for="settings-switch5">Status visible to all</label>
                            </div>
                            <!--end form-switch-->
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="settings-switch6">
                                <label class="form-check-label" for="settings-switch6">Notifications Popup</label>
                            </div>
                            <!--end form-switch-->
                        </div>
                        <!--end /div-->
                    </div>
                    <!--end offcanvas-body-->
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
