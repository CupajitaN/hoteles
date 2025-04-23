<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use App\Models\TipoHabitacion;
use Illuminate\Http\Request;

class TipoHabitacionController extends Controller
{
    public function index()
    {
        // Obtén todos los tipos de habitación desde la base de datos
        $tiposHabitacion = TipoHabitacion::all();

        // Devuelve los tipos de habitación en formato JSON
        return response()->json($tiposHabitacion);
    }
}
