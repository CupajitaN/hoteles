<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TipoHabitacion;

class TipoHabitacionsSeeder extends Seeder
{
    public function run()
    {
        TipoHabitacion::create(['nombre' => 'ESTANDAR']);
        TipoHabitacion::create(['nombre' => 'JUNIOR']);
        TipoHabitacion::create(['nombre' => 'SUITE']);
    }
}