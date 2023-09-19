<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vendors', function (Blueprint $table) {
            $table->id();
            $table->string('store_title');
            $table->longText('description')->nullable();
            $table->longText('store_image');
            $table->longText('vendor_image')->nullable();
            $table->string('v_code');/* a generated code for this vendor */
            $table->string('email')->unique();
            $table->longText('location')->nullable();
            $table->string('role');
            $table->string('user_id');
            $table->string('wallet_id');/* the vendor must have a wallet to recieve and send cash */
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vendors');
    }
};
