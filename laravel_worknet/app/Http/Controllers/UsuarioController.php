<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario; 
use Exception;

class UsuarioController extends Controller
{
    public function store(Request $request)
    {
        try {
            $usuario = Usuario::create([
                'usuario'            => $request->usuario,
                'clave'              => bcrypt($request->clave), 
                'nombre'             => $request->nombre,
                'apellido'           => $request->apellido,
                'telefono'           => $request->telefono,
                'correo_electronico' => $request->correo_electronico,
                'direccion'          => $request->direccion,
                'ciudad'             => $request->ciudad,
                'fecha_nacimiento'   => $request->fecha_nacimiento,
            ]);

            return response()->json([
                'mensaje' => '¡Usuario registrado con éxito en la base de datos!'
            ], 201);

        } catch (Exception $e) {
            return response()->json([
                'mensaje' => 'Error en la base de datos',
                'error_real' => $e->getMessage()
            ], 400); 
        }
    }
}