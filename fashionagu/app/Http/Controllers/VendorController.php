<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class VendorController extends Controller
{



    /* duplicate product */
    // eg of a duplicate function if u have same product with different
    //  brand names you can make one and then change a few things 
    // on the new one and the 
    // duplicate you dont need to go over the stress 
    // of redoing the whole process again
    
    public function duplicateProduct(Request $req)
    {

        $p_dup = new Product();
        $p_dup->title = $req->title;
        $p_dup->price = $req->price;
        $p_dup->old_price = $req->old_price;
        $p_dup->delivery_time = $req->delivery_time;
        $p_dup->description = $req->description;
        $p_dup->in_stock = $req->in_stock;
        $p_dup->is_deleted = $req->is_deleted;
        $p_dup->weight = $req->weight;
        $p_dup->package = $req->package;
        $p_dup->vendor = $req->vendor;
        $p_dup->gender = $req->gender;
        $p_dup->color = $req->color;
        $p_dup->size = $req->size;
        $p_dup->quantity = $req->quantity;
        $p_dup->grade = $req->grade;
        $p_dup->p_code = Str::random(3);/* this the generated
     code the vendor code will be added soon  */
        $p_dup->image = 'test';
        $p_dup->category_id = '1';
        $p_dup->save();

         return  redirect('/vendor/all_products/view');

    }

    public function duplicateProductView(Product $p_dup)
    {

        $product = Product::find($p_dup->id);

        return view('vendor_dashboard.duplicate_product', compact('product'));
    }

    /* edit product */
    public function editProduct(Request $req, Product $p_edit)
    {

        $p_edit->title = $req->title;
        $p_edit->price = $req->price;
        $p_edit->old_price = $req->old_price;
        $p_edit->delivery_time = $req->delivery_time;
        $p_edit->description = $req->description;
        $p_edit->in_stock = $req->in_stock;
        $p_edit->is_deleted = $req->is_deleted;
        $p_edit->weight = $req->weight;
        $p_edit->package = $req->package;
        $p_edit->vendor = $req->vendor;
        $p_edit->gender = $req->gender;
        $p_edit->color = $req->color;
        $p_edit->size = $req->size;
        $p_edit->quantity = $req->quantity;
        $p_edit->grade = $req->grade;
        $p_edit->image = 'test';
        $p_edit->category_id = '1';
        $p_edit->save();

        return back();
    }

    public function editProductView(Product $p)
    {

        $product = Product::find($p->id);

        return view('vendor_dashboard.edit_product', compact('product'));
    }

    /* deleting a product  */

    public function deleteProduct(Product $p_del)
    {

        // we can check if the deleter has the right to delete this product
        // using spatie later.
        $p_del->delete();
        return back();
    }



    /* view products */
    public function allProductsView()
    {

        $products = Product::latest()->get();
        return view('vendor_dashboard.all_products', compact('products'));
    }

    public function detailProductView(Product $p_det)
    {

        $product = Product::find($p_det->id);
        return view('vendor_dashboard.detail_product', compact('product'));
    }

    /* add product section */
    public function addProductsView()
    {

        return view('vendor_dashboard.add_products');
    }

    public function addProducts(Request $req)
    {

        $v_add = new Product();
        $v_add->title = $req->title;
        $v_add->price = $req->price;
        $v_add->old_price = $req->old_price;
        $v_add->delivery_time = $req->delivery_time;
        $v_add->description = $req->description;
        $v_add->in_stock = $req->in_stock;
        $v_add->is_deleted = $req->is_deleted;
        $v_add->weight = $req->weight;
        $v_add->package = $req->package;
        $v_add->vendor = $req->vendor;
        $v_add->gender = $req->gender;
        $v_add->color = $req->color;
        $v_add->size = $req->size;
        $v_add->quantity = $req->quantity;
        $v_add->grade = $req->grade;
        $v_add->image = 'test';
        $v_add->p_code = Str::random(3);/* this the generated
     code the vendor code will be added soon  */
        $v_add->category_id = '1';
        $v_add->save();
        return back();
    }
}
