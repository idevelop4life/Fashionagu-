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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->double('price');
            $table->double('old_price')->default('0');
            $table->string('delivery_time')->nullable();
            $table->longText('description')->nullable();
            $table->string('in_stock')->default('Yes');
            $table->string('is_deleted')->nullable();
            $table->double('weight')->default('0.0');
            $table->string('package')->nullable();
            $table->string('vendor');
            $table->string('p_code');/* this is the product code which is a combinatio
            of a generated code and the vendorcode */
            $table->string('category_id');
            $table->string('gender')->default('male');
            $table->string('color')->nullable();
            $table->string('size')->nullable();
            $table->longText('image')->nullable();
            $table->string('quantity')->nullable();
            $table->string('grade')->nullable();
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
        Schema::dropIfExists('products');
    }
};
