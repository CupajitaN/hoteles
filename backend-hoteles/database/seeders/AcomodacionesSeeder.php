<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Acomodacion;

class AcomodacionesSeeder extends Seeder
{
    public function run()
    {
        Acomodacion::create(['nombre' => 'SENCILLA']);
        Acomodacion::create(['nombre' => 'TRIPLE']);
        Acomodacion::create(['nombre' => 'DOBLE']);
        Acomodacion::create(['nombre' => 'CUÁDRUPLE']);
    }
}