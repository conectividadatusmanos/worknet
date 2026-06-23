<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PerfilConductor extends Model
{
    protected $table = 'perfiles_conductores';
    protected $fillable = [
        'usuario_id',
        'tipo_licencia',
        'fecha_vencimiento_licencia',
        'tiene_camioneta_duster',
        'placa_vehiculo',
    ];
    public $timestamps = false;
}
