<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    // Mostrar todos los hoteles
    public function index()
    {
        $hoteles = Hotel::all();
        return response()->json($hoteles);
    }

    // Crear un nuevo hotel
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nombre' => 'required|string|max:255',
            'direccion' => 'required|string|max:255',
            'ciudad' => 'required|string|max:255',
            'nit' => 'required|string|max:255|unique:hoteles', 
            'numero_habitaciones' => 'required|integer',
        ]);

        $hotelExistente = Hotel::where('nit', $request->nit)->first();
        if ($hotelExistente) {
            return response()->json(['error' => 'Ya existe un hotel con ese NIT.'], 400);
        }

        $hotel = Hotel::create($validatedData);

        return response()->json($hotel, 201);
    }

    // Mostrar un hotel específico
     public function show($id)
    {
        $hotel = Hotel::findOrFail($id);
        return response()->json($hotel);
    }

    // Actualizar un hotel existente
    public function update(Request $request, $id)
    {
        $hotel = Hotel::findOrFail($id);

        // Validación de los datos
        $validatedData = $request->validate([
            'nombre' => 'required|string|max:255',
            'direccion' => 'required|string|max:255',
            'ciudad' => 'required|string|max:255',
            'nit' => 'required|string|max:255',
            'numero_habitaciones' => 'required|integer',
        ]);

        $hotel->update($validatedData);
        return response()->json($hotel);
    }

    // Eliminar un hotel
    public function destroy($id)
    {
        $hotel = Hotel::findOrFail($id);
        $hotel->delete();
        return response()->json(['message' => 'Hotel eliminado exitosamente']);
    }
}
