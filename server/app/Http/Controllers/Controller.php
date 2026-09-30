<?php

namespace App\Http\Controllers;

use OpenApi\Attributes as OA;
if (!defined('L5_SWAGGER_CONST_HOST')) {
    define('L5_SWAGGER_CONST_HOST', env('L5_SWAGGER_CONST_HOST', 'http://localhost:8000/api'));
}
#[
    OA\Info(
        version: "1.0.0",
        title: "Laravel API Documentation",
        description: "Tài liệu RESTful API hệ thống",
        
    ),
    OA\Server(
        url: L5_SWAGGER_CONST_HOST,
        description: "Local API Server"
    ),
    OA\SecurityScheme(
        securityScheme: "bearerAuth",
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
    )
]
abstract class Controller
{
    // 
    #[OA\Get(
        path: "/health-check",
        summary: "Kiểm tra trạng thái server",
        tags: ["System"],
        responses: [
            new OA\Response(
                response: 200,
                description: "Server hoạt động bình thường",
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: "status", type: "string", example: "ok")
                    ]
                )
            )
        ]
    )]
    public function healthCheck()
    {
        return response()->json(['status' => 'ok']);
    }
}