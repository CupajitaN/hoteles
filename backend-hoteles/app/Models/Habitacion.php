<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Habitacion extends Model
{
    use HasFactory;

    protected $table = 'habitaciones';
    protected $fillable = [
        'hotel_id', 'tipo_habitacion_id', 'acomodacion_id', 'cantidad'
    ];

    public function hotel()
    {
        return $this->belongsTo(Hotel::class);
    }

     // Relación con el tipo de habitación
     public function tipoHabitacion()
     {
         return $this->belongsTo(TipoHabitacion::class, 'tipo_habitacion_id');
     }
 
     // Relación con la acomodación
     public function acomodacion()
     {
         return $this->belongsTo(Acomodacion::class, 'acomodacion_id');
     }
}
