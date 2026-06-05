<?php

namespace App\Http\Controllers;

use App\Models\Usuarios; // Tu modelo que ya está listo
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsuariosController extends Controller {

    // 1. Método para listar usuarios (el que ya tenías)
    public function index() {
        $usuarios = Usuarios::all();
        return response()->json($usuarios, 200);
    }

    // 2. NUEVO Método para insertar el usuario desde React
    public function store(Request $request) {
        // Validar que el correo sea único en la tabla 'usuarios'
        $request->validate([
            'correo' => 'required|email|unique:usuarios,correo',
            'contrasena' => 'required|min:6',
        ]);

        try {
            // Insertar solo los datos de la cuenta en la tabla 'usuarios'
            $usuario = Usuarios::create([
                'correo' => $request->correo,
                'contrasena' => Hash::make($request->contrasena), // Encripta la contraseña por seguridad
                'activo' => 1
            ]);

            return response()->json([
                'mensaje' => '¡Usuario registrado con éxito en la tabla usuarios!'
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al intentar registrar en la base de datos',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}