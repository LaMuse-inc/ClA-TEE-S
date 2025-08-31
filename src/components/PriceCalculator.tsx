"use client";

import React, { useState } from "react";
import { Calculator, Package, Shirt, Trophy } from "lucide-react";

export const PriceCalculator: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<"custom" | "uniform">("custom");
  const [productType, setProductType] = useState<"tshirt" | "polo">("tshirt");
  const [printSides, setPrintSides] = useState<"none" | "single" | "double">("single");
  const [uniformOption, setUniformOption] = useState<"basic" | "double">("basic");
  const [quantity, setQuantity] = useState(30);
  const [sizeProtection, setSizeProtection] = useState(false);

  // プラン①：クラT・ポロシャツの価格計算
  const calculateCustomPrice = () => {
    const basePrices = {
      tshirt: { none: 980, single: 1300, double: 1600 },
      polo: { none: 1180, single: 1500, double: 1800 }
    };
    
    const basePrice = basePrices[productType][printSides];
    const sizeProtectionCost = sizeProtection ? 500 * quantity : 0;
    const subtotal = (basePrice * quantity) + sizeProtectionCost;
    const unitPrice = basePrice + (sizeProtection ? 500 : 0);
    
    return { subtotal, unitPrice, sizeProtectionCost };
  };

  // プラン②：ユニフォーム風カスタムTシャツの価格計算
  const calculateUniformPrice = () => {
    const prices = {
      basic: 1300,
      double: 1600
    };
    
    const basePrice = prices[uniformOption];
    const sizeProtectionCost = sizeProtection ? 500 * quantity : 0;
    const subtotal = (basePrice * quantity) + sizeProtectionCost;
    const unitPrice = basePrice + (sizeProtection ? 500 : 0);
    
    return { subtotal, unitPrice, sizeProtectionCost };
  };

  const priceInfo = selectedPlan === "custom" ? calculateCustomPrice() : calculateUniformPrice();

  return (
    <section className="py-16 bg-gradient-to-br from-sparkle-pink/10 to-sparkle-turquoise/10">
      <div className="px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            圧倒的コスパ！選べる2つの料金プラン
          </h2>
          <p className="text-gray-600 text-lg">
            用途に合わせて最適なプランをお選びください
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* プラン選択タブ */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <button
              onClick={() => setSelectedPlan("custom")}
              className={`flex-1 p-6 rounded-2xl border-2 transition-all ${
                selectedPlan === "custom"
                  ? "border-sparkle-pink bg-white shadow-lg"
                  : "border-gray-200 bg-gray-50 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-center mb-3">
                <Shirt className="w-8 h-8 mr-2 text-sparkle-pink" />
                <h3 className="text-xl font-bold">プラン①：クラT・ポロシャツ</h3>
              </div>
              <p className="text-sm text-gray-600">
                自由なデザインで作る！Tシャツやポロシャツをベースに、オリジナルデザインをプリント
              </p>
            </button>
            
            <button
              onClick={() => setSelectedPlan("uniform")}
              className={`flex-1 p-6 rounded-2xl border-2 transition-all ${
                selectedPlan === "uniform"
                  ? "border-sparkle-turquoise bg-white shadow-lg"
                  : "border-gray-200 bg-gray-50 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-center mb-3">
                <Trophy className="w-8 h-8 mr-2 text-sparkle-turquoise" />
                <h3 className="text-xl font-bold">プラン②：ユニフォーム風カスタム</h3>
              </div>
              <p className="text-sm text-gray-600">
                選ぶだけで簡単！16種類のテンプレートから選ぶだけで本格的なユニフォームが完成
              </p>
            </button>
          </div>

          {/* 料金表と計算機 */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            {selectedPlan === "custom" ? (
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">
                  プラン①：自由なデザインで作る！【クラT・ポロシャツ】
                </h3>
                
                {/* 料金表 */}
                <div className="mb-8 overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-3 text-left">商品</th>
                        <th className="border p-3 text-center">① 無地</th>
                        <th className="border p-3 text-center">② 片面プリント<br /><span className="text-sm font-normal">(前面 or 背面)</span></th>
                        <th className="border p-3 text-center">③ 両面プリント<br /><span className="text-sm font-normal">(前面 ＋ 背面)</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-3 font-bold">Tシャツ</td>
                        <td className="border p-3 text-center">980円</td>
                        <td className="border p-3 text-center font-bold text-sparkle-pink">1,300円</td>
                        <td className="border p-3 text-center">1,600円</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-bold">ポロシャツ</td>
                        <td className="border p-3 text-center">1,180円</td>
                        <td className="border p-3 text-center font-bold text-sparkle-pink">1,500円</td>
                        <td className="border p-3 text-center">1,800円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 選択フォーム */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">商品タイプ</label>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setProductType("tshirt")}
                          className={`flex-1 py-3 px-4 rounded-lg font-bold transition ${
                            productType === "tshirt"
                              ? "bg-sparkle-pink text-white"
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                        >
                          Tシャツ
                        </button>
                        <button
                          onClick={() => setProductType("polo")}
                          className={`flex-1 py-3 px-4 rounded-lg font-bold transition ${
                            productType === "polo"
                              ? "bg-sparkle-pink text-white"
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                        >
                          ポロシャツ
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">プリント面</label>
                      <div className="space-y-2">
                        <button
                          onClick={() => setPrintSides("none")}
                          className={`w-full py-3 px-4 rounded-lg text-left transition ${
                            printSides === "none"
                              ? "bg-sparkle-pink text-white"
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                        >
                          ① 無地
                        </button>
                        <button
                          onClick={() => setPrintSides("single")}
                          className={`w-full py-3 px-4 rounded-lg text-left transition ${
                            printSides === "single"
                              ? "bg-sparkle-pink text-white"
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                        >
                          ② 片面プリント（前面 or 背面）
                        </button>
                        <button
                          onClick={() => setPrintSides("double")}
                          className={`w-full py-3 px-4 rounded-lg text-left transition ${
                            printSides === "double"
                              ? "bg-sparkle-pink text-white"
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                        >
                          ③ 両面プリント（前面 ＋ 背面）
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">数量（枚）</label>
                      <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-full p-3 border-2 border-gray-200 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={sizeProtection}
                          onChange={(e) => setSizeProtection(e.target.checked)}
                          className="mr-3 w-5 h-5"
                        />
                        <span>サイズ交換保証を追加（1枚500円）</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">
                  プラン②：選ぶだけで簡単！【ユニフォーム風カスタムTシャツ】
                </h3>
                
                <div className="bg-sparkle-turquoise/10 rounded-xl p-6 mb-6">
                  <p className="text-center text-lg mb-4">
                    <span className="font-bold text-sparkle-turquoise">16種類のテンプレート</span>から選ぶだけ！
                  </p>
                  <p className="text-center text-sm text-gray-600">
                    最初から前面プリント込みのお得なプランです
                  </p>
                </div>

                {/* 料金表 */}
                <div className="mb-8 overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-3 text-left">プラン内容</th>
                        <th className="border p-3 text-center">料金（1枚あたり）</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-3">
                          <span className="font-bold">基本プラン</span><br />
                          <span className="text-sm text-gray-600">テンプレートデザイン ＋ 前面プリント</span>
                        </td>
                        <td className="border p-3 text-center font-bold text-sparkle-turquoise text-xl">1,300円</td>
                      </tr>
                      <tr>
                        <td className="border p-3">
                          <span className="font-bold">両面プラン</span><br />
                          <span className="text-sm text-gray-600">基本プラン ＋ 背面プリント</span>
                        </td>
                        <td className="border p-3 text-center font-bold text-xl">1,600円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 選択フォーム */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">プラン選択</label>
                      <div className="space-y-2">
                        <button
                          onClick={() => setUniformOption("basic")}
                          className={`w-full py-3 px-4 rounded-lg text-left transition ${
                            uniformOption === "basic"
                              ? "bg-sparkle-turquoise text-white"
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                        >
                          基本プラン（前面プリント込み）
                        </button>
                        <button
                          onClick={() => setUniformOption("double")}
                          className={`w-full py-3 px-4 rounded-lg text-left transition ${
                            uniformOption === "double"
                              ? "bg-sparkle-turquoise text-white"
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                        >
                          両面プラン（前面＋背面プリント）
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">数量（枚）</label>
                      <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-full p-3 border-2 border-gray-200 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={sizeProtection}
                          onChange={(e) => setSizeProtection(e.target.checked)}
                          className="mr-3 w-5 h-5"
                        />
                        <span>サイズ交換保証を追加（1枚500円）</span>
                      </label>
                    </div>

                    <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
                      <p className="text-sm font-bold text-yellow-800 mb-2">
                        💡 ユニフォーム風の特徴
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• クラス名や個人名を追加可能</li>
                        <li>• 背番号も自由に設定</li>
                        <li>• プロデザインのテンプレート使用</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 価格表示 */}
            <div className="mt-8 bg-gradient-to-r from-sparkle-pink/10 to-sparkle-turquoise/10 rounded-2xl p-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">お見積もり金額</p>
                <div className="text-4xl font-bold text-sparkle-pink mb-2">
                  ¥{priceInfo.subtotal.toLocaleString()}
                  <span className="text-sm text-gray-600 ml-2">（税込）</span>
                </div>
                <p className="text-lg">
                  1枚あたり <span className="font-bold">¥{priceInfo.unitPrice.toLocaleString()}</span>
                </p>
                {priceInfo.sizeProtectionCost > 0 && (
                  <p className="text-sm text-gray-600 mt-2">
                    （サイズ交換保証料 ¥{priceInfo.sizeProtectionCost.toLocaleString()} 含む）
                  </p>
                )}
              </div>

              <div className="mt-6 space-y-3">
                <button className="w-full bg-sparkle-pink text-white py-3 rounded-full font-bold hover:bg-sparkle-pink-dark transition">
                  正式な見積もりを依頼
                </button>
                <button className="w-full bg-green-500 text-white py-3 rounded-full font-bold hover:bg-green-600 transition">
                  LINEで相談する
                </button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  ※ 上記はすべて税込み価格です<br />
                  ※ 30枚以上のご注文で送料無料！
                </p>
              </div>
            </div>
          </div>

          {/* 共通オプション */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
            <h4 className="text-lg font-bold mb-4">【共通オプション】</h4>
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-2">サイズ交換保証</td>
                  <td className="py-2 text-right font-bold">1枚 500円</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">先生分</td>
                  <td className="py-2 text-right font-bold text-sparkle-pink">無料！</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};