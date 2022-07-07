<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->string('business_name');
            $table->string('code');
            $table->string('created_at');
            $table->string('customer_email');
            $table->string('customer_name');
            $table->string('hosted_url');
            $table->string('cid');
            $table->string('amount');
            $table->string('currency');
            $table->string('memo');
            $table->string('resource');
            $table->string('status');
            $table->string('updated_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoices');
    }
}
