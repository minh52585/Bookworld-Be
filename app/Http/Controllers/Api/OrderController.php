<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'dia_chi_id' => 'required|exists:addresses,id',
            'voucher_id' => 'nullable|exists:vouchers,id',
            'tong_tien' => 'required|numeric|min:0',
            'items' => 'required|array',
            'items.*.san_pham_id' => 'required|exists:products,id',
            'items.*.so_luong' => 'required|integer|min:1',
        ]);

        try {
            DB::beginTransaction();

            // Tạo đơn hàng
            $order = Order::create([
                'nguoi_dung_id' => Auth::id(), 
                'dia_chi_id' => $request->dia_chi_id,
                'voucher_id' => $request->voucher_id,
                'ma_van_don' => 'DH' . now()->format('YmdHis'),
                'tong_tien' => $request->tong_tien,
                'trang_thai' => 'Chờ xác nhận',
            ]);

            // Tạo chi tiết đơn hàng
            foreach ($request->items as $item) {
                $product = Product::find($item['san_pham_id']);
                if ($product) {
                    OrderItem::create([
                        'don_hang_id' => $order->id,
                        'san_pham_id' => $product->id,
                        'so_luong' => $item['so_luong'],
                        'gia' => $product->gia,
                    ]);
                }
            }

            DB::commit();

            return response()->json([
                'message' => 'Tạo đơn hàng thành công!',
                'data' => $order->load('orderItems'),
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json([
                'message' => 'Lỗi khi tạo đơn hàng!',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
