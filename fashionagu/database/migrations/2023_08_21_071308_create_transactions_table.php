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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->double('amount');
            $table->string('wallet_id')->nullable();
            $table->string('vendor_id')->nullable();
            $table->string('buyer_id')->nullable();
            $table->double('credit')->nullable();
            $table->double('debit')->nullable();
            $table->double('charge')->nullable();
            $table->string('status')->nullable();
            $table->longText('description')->nullable();
            $table->string('cuopon_code')->nullable();
            $table->string('order_id')->nullable();
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
        Schema::dropIfExists('transactions');
    }
};
