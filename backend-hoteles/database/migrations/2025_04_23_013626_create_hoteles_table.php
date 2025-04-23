<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('hoteles', function (Blueprint $table) {
            $table->id();
            $table->string('nombre')->unique();
            $table->text('direccion');
            $table->string('ciudad');
            $table->string('nit')->unique();
            $table->integer('numero_habitaciones')->unsigned()->check('numero_habitaciones > 0');
            $table->timestamps();

            $table->index('ciudad');
            $table->index('nit');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hoteles');
    }
};
