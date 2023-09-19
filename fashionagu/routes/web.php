<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VendorController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


/* The general Dashboard for buyers/users that first registers with us, since you have to be a buyer and then request to be a vendor. */
Route::get('/dashboard', function () {
    if (Auth::user()->code=='007') {
        return view('admin/dashboard');
    }elseif (Auth::user()->code=='008') {
        return view('dashboard');
    }
    elseif (Auth::user()->code=='009') {
        return view('dashboard');
    }
    else{
        return view('dashboard');
    }

})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->prefix('/vendor')->group(function () {

    /* the edit section */

    /* edit-view */
    Route::get('/edit_product/view/{p}', [VendorController::class, 'editProductView'])->name('v_editProductView');
    /* edit-action */
    Route::post('/edit_product/action/{p_edit}', [VendorController::class, 'editProduct'])->name('v_editProduct');

    /* duplicating-view */
    Route::get('/duplicate_product/view/{p_dup}', [VendorController::class, 'duplicateProductView'])->name('v_duplicateProductView');
    /* duplicating-action */
    Route::post('/duplicate_product/action/{p_dup}', [VendorController::class, 'duplicateProduct'])->name('v_duplicateProduct');

    /* deleting section  */
    Route::get('/delete_product/action/{p_del}', [VendorController::class, 'deleteProduct'])->name('v_deleteProduct');
    /* detail of product */
    Route::get('/detail_product/view/{p_det}', [VendorController::class, 'detailProductView'])->name('v_detailProductView');



    Route::get('/all_products/view', [VendorController::class, 'allProductsView'])->name('v_allProductsView');

    Route::get('/add_products/view', [VendorController::class, 'addProductsView'])->name('v_addProductsView');
    Route::post('/add_products/action', [VendorController::class, 'addProducts'])->name('v_addProducts');

});

/* the admin section */
Route::middleware('auth')->prefix('/admin')->group(function () {

    Route::get('/all_users/view', [AdminController::class, 'allUsersView'])->name('a_allUsersView');

    Route::get('/all_products/view', [VendorController::class, 'allProductsView'])->name('v_allProductsView');

    Route::get('/add_products/view', [VendorController::class, 'addProductsView'])->name('v_addProductsView');
    Route::post('/add_products/action', [VendorController::class, 'addProducts'])->name('v_addProducts');

});

require __DIR__.'/auth.php';
