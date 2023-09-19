<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function  allUsersView(){

        $users = User::latest()->get();
        return view('admin.all_users', compact('users'));
    }
}
