<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PerfilEmpresa extends Model
{
    protected $table = 'perfiles_empresas';
    protected $fillable = [
        'usuario_id',
        'nit_empresa',
        'razon_social',
        'telefono_contacto ',
        'direccion_oficina',
        'ciudada',
        'sector_industrial',
        'nombre_representante',
        'sitio_web',
    ];
    public $timestamps = false;
}
