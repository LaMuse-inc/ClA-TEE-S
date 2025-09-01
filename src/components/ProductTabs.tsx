"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  sizes?: string;
  isNew?: boolean;
  isSale?: boolean;
  isTemplate?: boolean;
  colors?: number;
}

const productCategories: Record<string, { label: string; products: Product[] }> = {
  tshirts: {
    label: "Tシャツ",
    products: [
      {
        id: "1",
        name: "ドライTシャツ",
        price: "¥980〜",
        image: "https://ext.same-assets.com/1649376393/3361116398.png",
        sizes: "XS-5XL",
        colors: 20,
      },
    ],
  },
  polo: {
    label: "ポロシャツ",
    products: [
      {
        id: "2",
        name: "ポロシャツ",
        price: "¥1,180〜",
        image: "https://ext.same-assets.com/1649376393/433771961.png",
        sizes: "XS-5XL",
        colors: 15,
      },
      {
        id: "2-1",
        name: "ドライポロシャツ",
        price: "¥1,280〜",
        image: "https://ext.same-assets.com/1649376393/433771961.png",
        sizes: "XS-5XL",
        colors: 12,
      },
      {
        id: "2-2",
        name: "スポーツポロシャツ",
        price: "¥1,380〜",
        image: "https://ext.same-assets.com/1649376393/433771961.png",
        sizes: "XS-5XL",
        colors: 10,
      },
    ],
  },
  soccer: {
    label: "⚽ サッカーユニ",
    products: [
      {
        id: "3",
        name: "サッカーユニフォーム",
        price: "¥1,300〜",
        image: "https://ext.same-assets.com/1649376393/2094887123.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
       {
        id: "3",
        name: "サッカーユニフォーム",
        price: "¥1,300〜",
        image: "https://ext.same-assets.com/1649376393/2094887123.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
       {
        id: "3",
        name: "サッカーユニフォーム",
        price: "¥1,300〜",
        image: "https://ext.same-assets.com/1649376393/2094887123.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
    ],
  },
  basketball: {
    label: "🏀 バスケユニ",
    products: [
      {
        id: "4",
        name: "バスケットユニフォーム",
        price: "¥1,300〜",
        image: "https://ext.same-assets.com/1649376393/467570851.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
    ],
  },
  templates: {
    label: "🎨 デザインテンプレート",
    products: [
      {
        id: "5",
        name: "クラTテンプレート 1",
        price: "¥1,300〜",
        image: "/templates/10.png",
        sizes: "XS-5XL",
        colors: 0,
        isTemplate: true,
      },
      {
        id: "6",
        name: "クラTテンプレート 2",
        price: "¥1,300〜",
        image: "/templates/13.png",
        sizes: "XS-5XL",
        colors: 0,
        isTemplate: true,
      },
      {
        id: "7",
        name: "クラTテンプレート 3",
        price: "¥1,300〜",
        image: "/templates/16.png",
        sizes: "XS-5XL",
        colors: 0,
        isTemplate: true,
      },
      {
        id: "8",
        name: "クラTテンプレート 4",
        price: "¥1,300〜",
        image: "/templates/17.png",
        sizes: "XS-5XL",
        colors: 0,
        isTemplate: true,
      },
      {
        id: "9",
        name: "クラTテンプレート 5",
        price: "¥1,300〜",
        image: "/templates/18.png",
        sizes: "XS-5XL",
        colors: 0,
        isTemplate: true,
      },
      {
        id: "10",
        name: "クラTテンプレート 6",
        price: "¥1,300〜",
        image: "/templates/Image from Shuto Nii via Slack.png",
        sizes: "XS-5XL",
        colors: 0,
        isTemplate: true,
      },
      {
        id: "11",
        name: "クラTテンプレート 7",
        price: "¥1,300〜",
        image: "/templates/Image from Shuto Nii via Slack (1).png",
        sizes: "XS-5XL",
        colors: 0,
        isTemplate: true,
      },
      {
        id: "12",
        name: "クラTテンプレート 8",
        price: "¥1,300〜",
        image: "/templates/Image from Shuto Nii via Slack (2).png",
        sizes: "XS-5XL",
        colors: 0,
        isTemplate: true,
      },
      {
        id: "13",
        name: "クラTテンプレート 9",
        price: "¥1,300〜",
        image: "/templates/Image from Shuto Nii via Slack (3).png",
        sizes: "XS-5XL",
        colors: 0,
        isTemplate: true,
      },
      {
        id: "14",
        name: "クラTテンプレート 10",
        price: "¥1,300〜",
        image: "/templates/Image from Shuto Nii via Slack (4).png",
        sizes: "XS-5XL",
        colors: 0,
        isTemplate: true,
      },
    ],
  },
};


export const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tshirts");

  return (
    <section className="py-16 bg-white">
      <div className="px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">商品ラインナップ</h2>
        <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">クラT・ユニフォーム・デザインテンプレートから選択</p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(productCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-3 rounded-full font-bold transition text-sm ${
                activeTab === key
                  ? "bg-sparkle-pink text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mx-auto max-w-4xl">
          {activeTab === 'templates' ? (
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1.5}
              centeredSlides={false}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={true}
              breakpoints={{
                640: { slidesPerView: 2.5 },
                768: { slidesPerView: 3 },
              }}
            >
              {productCategories.templates.products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group"
                  >
                    <div className="relative h-48 bg-gray-50 overflow-hidden">
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
                      {product.isTemplate && (
                        <span className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                          テンプレート
                        </span>
                      )}
                      {product.colors && product.colors > 0 && (
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
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid gap-6 grid-cols-1 max-w-md mx-auto">
              {productCategories[activeTab as keyof typeof productCategories].products.map((product) => (
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
                    {product.isTemplate && (
                      <span className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                        テンプレート
                      </span>
                    )}
                    {product.colors && product.colors > 0 && (
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
              ))}
            </div>
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
