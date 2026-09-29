<?php

namespace App\Http\Controllers;

use App\Docs\TaskDoc;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    use TaskDoc;

    public function index(Request $request): JsonResponse
    {
        $tasks = $request->user()->tasks()->latest()->get();

        return response()->json([
            'data' => TaskResource::collection($tasks),
        ]);
    }

    public function store(StoreTaskRequest $request): JsonResponse
    {
        $task = $request->user()->tasks()->create($request->validated());

        return response()->json([
            'message' => 'Tạo công việc thành công',
            'data' => new TaskResource($task),
        ], 201);
    }

    public function show(Task $task): JsonResponse
    {
        $this->authorizeTaskAccess($task);

        return response()->json([
            'data' => new TaskResource($task),
        ]);
    }

    public function update(UpdateTaskRequest $request, Task $task): JsonResponse
    {
        $this->authorizeTaskAccess($task);

        $task->update($request->validated());

        return response()->json([
            'message' => 'Cập nhật công việc thành công',
            'data' => new TaskResource($task->fresh()),
        ]);
    }

    public function destroy(Task $task): JsonResponse
    {
        $this->authorizeTaskAccess($task);

        $task->delete();

        return response()->json([
            'message' => 'Xóa công việc thành công',
        ]);
    }

    protected function authorizeTaskAccess(Task $task): void
    {
        if ($task->user_id !== auth()->id()) {
            abort(403, 'Bạn không có quyền truy cập công việc này.');
        }
    }
}
