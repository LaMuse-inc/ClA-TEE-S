"use client";

import React, { useState, useEffect } from "react";
import { Calculator, Package, Palette, Users } from "lucide-react";

interface PriceBreakdown {
  basePrice: number;
  printPrice: number;
  setupFee: number;
  designFee: number;
  discount: number;
  subtotal: number;
  tax: number;
  total: number;
  unitPrice: number;
}

export const PriceCalculator: React.FC = () => {
  const [productType, setProductType] = useState("tshirt");
  const [quantity, setQuantity] = useState(30);
  const [colors, setColors] = useState(1);
  const [printMethod, setPrintMethod] = useState("silk");
  const [includeDesign, setIncludeDesign] = useState(false);
  const [isStudent, setIsStudent] = useState(true);
  const [breakdown, setBreakdown] = useState<PriceBreakdown | null>(null);

  const products = {
    tshirt: { name: "ドライTシャツ", basePrice: 400 },
    polo: { name: "ポロシャツ", basePrice: 800 },
    parker: { name: "パーカー", basePrice: 1500 },
    uniform: { name: "ユニフォーム", basePrice: 2000 },
  };

  const printMethods = {
    silk: { name: "シルクスクリーン", pricePerColor: 50, setupFee: 5000 },
    dtf: { name: "DTFプリント", pricePerColor: 200, setupFee: 0 },
    embroidery: { name: "刺繍", pricePerColor: 500, setupFee: 10000 },
  };

  useEffect(() => {
    calculatePrice();
  }, [productType, quantity, colors, printMethod, includeDesign, isStudent]);

  const calculatePrice = () => {
    const product = products[productType as keyof typeof products];
    const method = printMethods[printMethod as keyof typeof printMethods];

    // 基本価格
    const basePrice = product.basePrice * quantity;

    // プリント料金
    const printPrice = method.pricePerColor * colors * quantity;

    // セットアップ料金
    const setupFee = method.setupFee;

    // デザイン料金
    const designFee = includeDesign ? 10000 : 0;

    // 小計
    let subtotal = basePrice + printPrice + setupFee + designFee;

    // 学割（10%オフ）
    const studentDiscount = isStudent ? subtotal * 0.1 : 0;
    subtotal -= studentDiscount;

    // 数量割引
    let quantityDiscount = 0;
    if (quantity >= 100) {
      quantityDiscount = subtotal * 0.15;
    } else if (quantity >= 50) {
      quantityDiscount = subtotal * 0.1;
    } else if (quantity >= 30) {
      quantityDiscount = subtotal * 0.05;
    }
    subtotal -= quantityDiscount;

    const totalDiscount = studentDiscount + quantityDiscount;

    // 税金
    const tax = subtotal * 0.1;

    // 合計
    const total = subtotal + tax;

    // 単価
    const unitPrice = total / quantity;

    setBreakdown({
      basePrice,
      printPrice,
      setupFee,
      designFee,
      discount: totalDiscount,
      subtotal,
      tax,
      total,
      unitPrice,
    });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-sparkle-pink/10 to-sparkle-turquoise/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <Calculator className="inline-block w-8 h-8 mr-2 text-sparkle-pink" />
            価格シミュレーター
          </h2>
          <p className="text-gray-600">
            リアルタイムで概算見積もりを確認できます
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* 入力フォーム */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">
                    <Package className="inline w-4 h-4 mr-1" />
                    商品タイプ
                  </label>
                  <select
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-sparkle-pink focus:outline-none"
                  >
                    {Object.entries(products).map(([key, product]) => (
                      <option key={key} value={key}>
                        {product.name} (¥{product.basePrice}〜)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    <Users className="inline w-4 h-4 mr-1" />
                    数量（枚）
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="200"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="flex-1"
                    />
                    <input
                      type="number"
                      min="1"
                      max="200"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-20 p-2 border-2 border-gray-200 rounded-lg text-center"
                    />
                  </div>
                  {quantity >= 100 && (
                    <p className="text-sm text-green-600 mt-1">
                      ✨ 大量注文割引15%適用！
                    </p>
                  )}
                  {quantity >= 50 && quantity < 100 && (
                    <p className="text-sm text-green-600 mt-1">
                      ✨ 数量割引10%適用！
                    </p>
                  )}
                  {quantity >= 30 && quantity < 50 && (
                    <p className="text-sm text-green-600 mt-1">
                      ✨ 数量割引5%適用！
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    <Palette className="inline w-4 h-4 mr-1" />
                    プリント色数
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        onClick={() => setColors(num)}
                        className={`px-4 py-2 rounded-lg font-bold transition ${
                          colors === num
                            ? "bg-sparkle-pink text-white"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        {num}色
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    プリント方法
                  </label>
                  <div className="space-y-2">
                    {Object.entries(printMethods).map(([key, method]) => (
                      <label
                        key={key}
                        className="flex items-center p-3 border-2 rounded-lg cursor-pointer hover:bg-gray-50"
                      >
                        <input
                          type="radio"
                          name="printMethod"
                          value={key}
                          checked={printMethod === key}
                          onChange={(e) => setPrintMethod(e.target.value)}
                          className="mr-3"
                        />
                        <span className="font-medium">{method.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={includeDesign}
                      onChange={(e) => setIncludeDesign(e.target.checked)}
                      className="mr-3 w-5 h-5"
                    />
                    <span>デザイン制作を依頼する（+¥10,000）</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={isStudent}
                      onChange={(e) => setIsStudent(e.target.checked)}
                      className="mr-3 w-5 h-5"
                    />
                    <span className="font-bold text-sparkle-pink">
                      学割を適用する（10%OFF）
                    </span>
                  </label>
                </div>
              </div>

              {/* 価格内訳 */}
              {breakdown && (
                <div className="bg-gradient-to-br from-sparkle-pink/5 to-sparkle-turquoise/5 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">お見積もり内訳</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>商品代金</span>
                      <span>¥{breakdown.basePrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>プリント料金</span>
                      <span>¥{breakdown.printPrice.toLocaleString()}</span>
                    </div>
                    {breakdown.setupFee > 0 && (
                      <div className="flex justify-between">
                        <span>版代・セットアップ料</span>
                        <span>¥{breakdown.setupFee.toLocaleString()}</span>
                      </div>
                    )}
                    {breakdown.designFee > 0 && (
                      <div className="flex justify-between">
                        <span>デザイン制作料</span>
                        <span>¥{breakdown.designFee.toLocaleString()}</span>
                      </div>
                    )}
                    {breakdown.discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>割引額</span>
                        <span>-¥{breakdown.discount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="border-t pt-3">
                      <div className="flex justify-between">
                        <span>小計</span>
                        <span>¥{breakdown.subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>消費税（10%）</span>
                        <span>¥{Math.floor(breakdown.tax).toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-2xl font-bold">
                        <span>合計金額</span>
                        <span className="text-sparkle-pink">
                          ¥{Math.floor(breakdown.total).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>1枚あたり</span>
                        <span>
                          ¥{Math.floor(breakdown.unitPrice).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <button className="w-full bg-sparkle-pink text-white py-3 rounded-full font-bold hover:bg-sparkle-pink-dark transition">
                      正式な見積もりを依頼
                    </button>
                    <button className="w-full bg-sparkle-turquoise text-white py-3 rounded-full font-bold hover:bg-sparkle-turquoise-dark transition">
                      LINEで相談する
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 mt-4">
                    ※ こちらは概算です。正確な金額は正式見積もりをご確認ください。
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
