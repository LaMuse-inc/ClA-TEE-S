"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  sizes?: string;
  isNew?: boolean;
  isSale?: boolean;
  colors?: number;
}

const productCategories: Record<string, { label: string; products: Product[] }> = {
  tshirts: {
    label: "Tシャツ",
    products: [
      {
        id: "1",
        name: "ドライTシャツ",
        price: "¥400〜",
        image: "https://ext.same-assets.com/1649376393/3361116398.png",
        sizes: "XS-5XL",
        colors: 20,
      },
      {
        id: "2",
        name: "スタンダードTシャツ",
        price: "¥520〜",
        image: "https://ext.same-assets.com/1649376393/2847859190.png",
        sizes: "100-5XL",
        colors: 52,
        isNew: true,
      },
      {
        id: "3",
        name: "ラグランTシャツ",
        price: "¥700〜",
        image: "https://ext.same-assets.com/1649376393/2117706410.png",
        sizes: "S-XL",
        colors: 7,
      },
    ],
  },
  polo: {
    label: "ポロシャツ",
    products: [
      {
        id: "4",
        name: "ドライポロシャツ",
        price: "¥800〜",
        image: "https://ext.same-assets.com/1649376393/433771961.png",
        sizes: "S-5XL",
        colors: 15,
      },
      {
        id: "5",
        name: "ポケット付きポロ",
        price: "¥950〜",
        image: "https://ext.same-assets.com/1649376393/2105023763.png",
        sizes: "S-XL",
        colors: 10,
      },
    ],
  },
  parker: {
    label: "パーカー",
    products: [
      {
        id: "6",
        name: "プルオーバーパーカー",
        price: "¥1,500〜",
        image: "https://ext.same-assets.com/1649376393/3775348145.png",
        sizes: "S-XL",
        colors: 12,
      },
      {
        id: "7",
        name: "ジップパーカー",
        price: "¥1,800〜",
        image: "https://ext.same-assets.com/1649376393/212328064.png",
        sizes: "S-XL",
        colors: 8,
      },
    ],
  },
  uniform: {
    label: "ユニフォーム",
    products: [
      {
        id: "8",
        name: "サッカーユニフォーム",
        price: "¥2,000〜",
        image: "https://ext.same-assets.com/1649376393/2094887123.png",
        sizes: "S-XL",
        isSale: true,
      },
      {
        id: "9",
        name: "ベースボールシャツ",
        price: "¥1,800〜",
        image: "https://ext.same-assets.com/1649376393/467570851.png",
        sizes: "S-XL",
      },
    ],
  },
  goods: {
    label: "グッズ等",
    products: [
      {
        id: "10",
        name: "トートバッグ",
        price: "¥500〜",
        image: "https://ext.same-assets.com/1649376393/1530691411.png",
      },
      {
        id: "11",
        name: "キャップ",
        price: "¥800〜",
        image: "https://ext.same-assets.com/1649376393/646837938.png",
      },
    ],
  },
};

export const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tshirts");

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">商品紹介</h2>
        <p className="text-center text-gray-600 mb-8">豊富なラインナップから選べる！</p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(productCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full font-bold transition ${
                activeTab === key
                  ? "bg-sparkle-pink text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {productCategories[activeTab as keyof typeof productCategories].products.map(
            (product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group"
              >
                <div className="relative h-64 bg-gray-50 overflow-hidden">
                  <Image
                    src={product.image || "/api/placeholder/400/400"}
                    alt={product.name}
                    fill
                    className="object-contain hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-sparkle-pink text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                      NEW
                    </span>
                  )}
                  {product.isSale && (
                    <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                      SALE
                    </span>
                  )}
                  {product.colors && (
                    <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold shadow z-10">
                      {product.colors}色
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-3xl font-bold text-sparkle-pink mb-2">
                    {product.price}
                  </p>
                  {product.sizes && (
                    <p className="text-gray-600 text-sm mb-4">
                      サイズ: {product.sizes}
                    </p>
                  )}
                  <button className="w-full bg-sparkle-pink text-white py-3 rounded-full font-bold hover:bg-sparkle-pink-dark transition group-hover:scale-105">
                    詳細を見る
                  </button>
                </div>
              </div>
            )
          )}
        </div>

        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 bg-sparkle-turquoise text-white px-8 py-3 rounded-full font-bold hover:bg-sparkle-turquoise-dark transition">
            すべての商品を見る
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
