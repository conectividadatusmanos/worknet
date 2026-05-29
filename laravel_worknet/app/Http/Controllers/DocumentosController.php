<?php

namespace App\Http\Controllers;

use App\Models\Documento;
use Illuminate\Http\Request;

class DocumentoController extends Controller
{
    public function store(Request $request, $usuarioId)
    {
        // 1. Validar que venga el tipo de documento y el archivo físico
        $request->validate([
            'tipo_documento' => 'required|string|max:100',
            'archivo' => 'required|file|mimes:pdf,jpg,png,jpeg|max:2048', // Máximo 2MB
        ]);

        // 2. Procesar y guardar el archivo físico en el servidor
        if ($request->hasFile('archivo')) {
            $archivoFisico = $request->file('archivo');
            
            // Generar un nombre único para que no se sobreescriban (Ej: 1685300000_certificado.pdf)
            $nombreArchivo = time() . '_' . $archivoFisico->getClientOriginalName();
            
            // Lo guarda en la carpeta 'storage/app/public/documentos'
            $ruta = $archivoFisico->storeAs('documentos', $nombreArchivo, 'public');

            // 3. Guardar el registro en la tabla de la base de datos
            $documento = Documento::create([
                'usuario_id' => $usuarioId, // El ID que viene en la URL
                'tipo_documento' => $request->tipo_documento,
                'nombre_archivo' => $nombreArchivo,
                'ruta_archivo' => '/storage/' . $ruta, // Ruta accesible desde la web
            ]);

            return response()->json([
                'mensaje' => 'Documento subido y registrado con éxito',
                'documento' => $documento
            ], 21);
        }

        return response()->json(['error' => 'No se encontró ningún archivo'], 400);
    }
}