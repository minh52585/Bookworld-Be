<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('variants', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade');
            $table->string('variant_name', 100)->nullable();
            $table->decimal('price', 10, 2)->nullable();
            $table->integer('stock')->default(0);
        });
    }

    public function down(): void {
        Schema::dropIfExists('variants');
    }
};

