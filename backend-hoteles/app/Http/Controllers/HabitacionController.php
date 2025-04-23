<?php

namespace App\Http\Controllers;

use App\Models\Habitacion;
use App\Models\Hotel;
use Illuminate\Http\Request;

class HabitacionController extends Controller
{

    public function index($hotelId)
    {
        // Buscar el hotel por su ID, si no existe lanzar un error
        $hotel = Hotel::findOrFail($hotelId);

        // Obtener las habitaciones del hotel con los datos de tipo de habitación y acomodación
        $habitaciones = Habitacion::where('hotel_id', $hotelId)
            ->with(['tipoHabitacion', 'acomodacion']) // Usamos las relaciones para cargar los datos asociados
            ->get();  // Obtenemos todas las habitaciones para ese hotel

        // Retornar las habitaciones con la información adicional
        return response()->json($habitaciones);
    }

    // Crear una nueva habitación
    public function store(Request $request, $hotelId)
    {
        // Validar los datos de la habitación
        $this->validateHabitacion($request);

        // Obtener el hotel
        $hotel = Hotel::findOrFail($hotelId);

        // Validar las reglas de negocio
        $this->validateHotelHabitaciones($hotel, $request->cantidad);
        $this->validateTipoYacomodacionUnicas($hotel, $request->tipo_habitacion_id, $request->acomodacion_id);

        // Crear la nueva habitación
        $habitacion = $this->crearHabitacion($hotelId, $request);

        return response()->json($habitacion, 201); // Devuelve la habitación recién creada
    }

    // Validación de los datos de la habitación
    private function validateHabitacion(Request $request)
    {
        $request->validate([
            'tipo_habitacion_id' => 'required|exists:tipos_habitacion,id',
            'acomodacion_id' => 'required|exists:acomodaciones,id',
            'cantidad' => 'required|integer|min:1', // La cantidad de habitaciones que se van a agregar
        ]);
    }

   // Validar si la cantidad de habitaciones no excede el límite del hotel
   private function validateHotelHabitaciones(Hotel $hotel, $cantidad)
    {
        $habitacionesActuales = $hotel->habitaciones->sum('cantidad'); // Sumar las habitaciones existentes

        if (($habitacionesActuales + $cantidad) > $hotel->numero_habitaciones) {
            $remaining = $hotel->numero_habitaciones - $habitacionesActuales;
            // Lanzar una excepción de validación con el mensaje adecuado
            throw \Illuminate\Validation\ValidationException::withMessages([
                'cantidad' => ['El número total de habitaciones no puede superar el máximo permitido por el hotel. Habitaciones restantes: ' . $remaining],
            ]);
        }
    }


    // Validar si el tipo de habitación y acomodación ya están asignados al hotel
    private function validateTipoYacomodacionUnicas(Hotel $hotel, $tipoHabitacionId, $acomodacionId)
    {
        // Buscar si ya existe una habitación con esa combinación en el mismo hotel
        $habitacionExistente = Habitacion::where('hotel_id', $hotel->id)
            ->where('tipo_habitacion_id', $tipoHabitacionId)
            ->where('acomodacion_id', $acomodacionId)
            ->exists();  // Usar exists para verificar existencia sin obtener la habitación completa
        
        if ($habitacionExistente) {
            // Lanzar una excepción de validación con el mensaje adecuado
            throw \Illuminate\Validation\ValidationException::withMessages([
                'tipo_habitacion_id' => ['Este tipo de habitación y acomodación ya están asignados a este hotel.'],
            ]);
        }
    }

    // Crear la nueva habitación
    private function crearHabitacion($hotelId, Request $request)
    {
        $habitacion = new Habitacion();
        $habitacion->hotel_id = $hotelId;
        $habitacion->tipo_habitacion_id = $request->tipo_habitacion_id;
        $habitacion->acomodacion_id = $request->acomodacion_id;
        $habitacion->cantidad = $request->cantidad;
        $habitacion->save();

        return $habitacion;
    }
}
