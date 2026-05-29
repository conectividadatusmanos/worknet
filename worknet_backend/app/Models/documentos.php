<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Documentos extends Model
{
    // El nombre exacto de tu tabla de documentos
    protected $table = 'documentos';

    // Las columnas que se pueden llenar (ajústalas a tus columnas reales, ej: titulo, archivo, usuario_id)
    protected $fillable = ['fecha_subida', 'id_usuario', 'ruta_archivo', 'tipo_documento'];

    // Igual que antes, pon false si tu tabla no maneja fechas automáticas de creación
    public $timestamps = false;
}