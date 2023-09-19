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
        Schema::create('wallets', function (Blueprint $table) {
            $table->id();
            $table->string('wallet_title');/* this can be the vendor name as default */
            $table->string('acct_number');
            $table->double('balance');
            $table->string('vendor_id')->nullable();
            $table->string('buyer_id')->nullable();
            $table->double('credit')->nullable();
            $table->double('debit')->nullable();
            $table->double('charge')->nullable();
            $table->string('status')->nullable();
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
        Schema::dropIfExists('wallets');
    }
};
