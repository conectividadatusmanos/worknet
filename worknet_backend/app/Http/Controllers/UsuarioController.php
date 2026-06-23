<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{
    public function index() {
        // Usamos el modelo correcto
        $Usuario = Usuario::all();
        return response()->json($Usuario, 200);
    }

   public function store(Request $request) {
        // 1. Creamos el registro en la tabla 'usuarios'
        $nuevoUsuario = Usuario::create([
            'correo' => $request->correo,
            'contrasena' => Hash::make($request->contrasena), // Encriptamos la clave
            'activo' => 1 // Le asignamos 1 (activo) por defecto
        ]);

        // 2. Retornamos una respuesta diciendo que el usuario se creó, y le mandamos el ID generado
        return response()->json([
            'mensaje' => '¡Usuario creado con éxito en la base de datos!',
            'usuario_id' => $nuevoUsuario->id // Esto nos servirá después para el perfil
        ], 201);
    }
}