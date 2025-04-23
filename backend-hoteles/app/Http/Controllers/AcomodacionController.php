<?php

namespace App\Http\Controllers;

use App\Models\Acomodacion;
use App\Models\Hotel;
use Illuminate\Http\Request;

class AcomodacionController extends Controller
{
    public function index()
    {
        // Obtén todas las acomodaciones desde la base de datos
        $acomodaciones = Acomodacion::all();

        // Devuelve las acomodaciones en formato JSON
        return response()->json($acomodaciones);
    }
}
