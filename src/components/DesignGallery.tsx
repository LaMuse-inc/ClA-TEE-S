"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Heart, Download, Eye } from "lucide-react";

interface DesignTemplate {
  id: string;
  name: string;
  category: string;
  tags: string[];
  image: string;
  likes: number;
  downloads: number;
}

const designTemplates: DesignTemplate[] = [
  {
    id: "1",
    name: "クラスNo.1デザイン",
    category: "class",
    tags: ["クラスT", "人気", "シンプル"],
    image: "https://ext.same-assets.com/1649376393/1201096869.png",
    likes: 1234,
    downloads: 567,
  },
  {
    id: "2",
    name: "部活チームデザイン",
    category: "club",
    tags: ["部活", "スポーツ", "チーム"],
    image: "https://ext.same-assets.com/1649376393/360949789.png",
    likes: 890,
    downloads: 345,
  },
  {
    id: "3",
    name: "体育祭デザイン",
    category: "sports",
    tags: ["体育祭", "イベント", "カラフル"],
    image: "https://ext.same-assets.com/1649376393/2446643628.jpeg",
    likes: 2345,
    downloads: 890,
  },
  {
    id: "4",
    name: "文化祭テーマ",
    category: "festival",
    tags: ["文化祭", "イベント", "おしゃれ"],
    image: "https://ext.same-assets.com/1649376393/1864766904.jpeg",
    likes: 1567,
    downloads: 678,
  },
  {
    id: "5",
    name: "卒業記念デザイン",
    category: "graduation",
    tags: ["卒業", "記念", "思い出"],
    image: "https://ext.same-assets.com/1649376393/900757316.jpeg",
    likes: 3456,
    downloads: 1234,
  },
  {
    id: "6",
    name: "かわいい系デザイン",
    category: "cute",
    tags: ["かわいい", "ポップ", "女子"],
    image: "https://ext.same-assets.com/1649376393/4169590172.jpeg",
    likes: 2890,
    downloads: 987,
  },
];

const categories = [
  { id: "all", name: "すべて", icon: "🎨" },
  { id: "class", name: "クラスT", icon: "👕" },
  { id: "club", name: "部活", icon: "⚽" },
  { id: "sports", name: "体育祭", icon: "🏃" },
  { id: "festival", name: "文化祭", icon: "🎭" },
  { id: "graduation", name: "卒業", icon: "🎓" },
  { id: "cute", name: "かわいい", icon: "💕" },
];

export const DesignGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [likedDesigns, setLikedDesigns] = useState<string[]>([]);
  const [selectedDesign, setSelectedDesign] = useState<DesignTemplate | null>(null);

  const filteredTemplates = designTemplates.filter((template) => {
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    const matchesSearch =
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleLike = (id: string) => {
    setLikedDesigns(prev =>
      prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            デザインテンプレートギャラリー
          </h2>
          <p className="text-gray-600 mb-8">
            800種類以上のデザインから選べる！もちろんカスタマイズもOK
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="デザインを検索（例：クラスT、体育祭、かわいい）"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-sparkle-pink focus:outline-none"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-bold transition flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? "bg-sparkle-pink text-white"
                    : "bg-white border-2 border-gray-200 hover:border-sparkle-pink"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group"
            >
              <div
                className="relative h-80 bg-gray-100 cursor-pointer overflow-hidden"
                onClick={() => setSelectedDesign(template)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Eye className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-48 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-300">
                      デザイン
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {template.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{template.name}</h3>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Heart className={`w-4 h-4 ${likedDesigns.includes(template.id) ? "fill-red-500 text-red-500" : ""}`} />
                      {template.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {template.downloads}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => toggleLike(template.id)}
                    className={`flex-1 py-2 rounded-lg font-bold transition ${
                      likedDesigns.includes(template.id)
                        ? "bg-red-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <Heart className={`inline w-4 h-4 mr-1 ${likedDesigns.includes(template.id) ? "fill-white" : ""}`} />
                    いいね
                  </button>
                  <button className="flex-1 bg-sparkle-turquoise text-white py-2 rounded-lg font-bold hover:bg-sparkle-turquoise-dark transition">
                    <Download className="inline w-4 h-4 mr-1" />
                    使用する
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredTemplates.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-sparkle-pink text-white px-8 py-3 rounded-full font-bold hover:bg-sparkle-pink-dark transition">
              もっと見る
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              該当するデザインが見つかりませんでした
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="mt-4 text-sparkle-pink font-bold hover:underline"
            >
              フィルターをクリア
            </button>
          </div>
        )}
      </div>

      {/* Design Preview Modal */}
      {selectedDesign && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDesign(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedDesign.name}</h3>
                  <div className="flex gap-2">
                    {selectedDesign.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-sparkle-pink/10 text-sparkle-pink px-3 py-1 rounded-full text-sm font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDesign(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="bg-gray-100 rounded-2xl p-8 mb-6">
                <div className="aspect-square max-w-md mx-auto bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-300">
                    デザインプレビュー
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-sparkle-pink text-white py-3 rounded-full font-bold hover:bg-sparkle-pink-dark transition">
                  このデザインを使用
                </button>
                <button className="flex-1 bg-sparkle-turquoise text-white py-3 rounded-full font-bold hover:bg-sparkle-turquoise-dark transition">
                  カスタマイズする
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
