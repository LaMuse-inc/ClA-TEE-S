"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Menu, X, Phone, Mail, ArrowRight } from "lucide-react";
import { WavePatternTop, WavePatternBottom } from "@/components/WavePattern";
import { ProductTabs } from "@/components/ProductTabs";
import { PriceCalculator } from "@/components/PriceCalculator";
import { DesignGallery } from "@/components/DesignGallery";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://ext.same-assets.com/1649376393/3469806900.png",
      title: "クラスTシャツ・ポロシャツ・ユニフォームもお任せ！",
      subtitle: "サイズが合わなくても大丈夫、安心の「サイズ交換保証」付き。【先生分無料！】",
    },
    {
      image: "https://ext.same-assets.com/1649376393/3657139855.png",
      title: "LINEで完結！カンタン注文",
      subtitle: "面倒な手続き不要、チャットで全て完了",
    },
    {
      image: "https://ext.same-assets.com/1649376393/897169503.png",
      title: "最短翌日お届け可能",
      subtitle: "急ぎの注文も安心サポート",
    },
  ];

  const products = [
    { name: "ドライTシャツ", price: "¥400〜", image: "https://ext.same-assets.com/1649376393/3361116398.png", sizes: "XS-5XL" },
    { name: "スタンダードTシャツ", price: "¥520〜", image: "https://ext.same-assets.com/1649376393/2847859190.png", sizes: "100-5XL", kids: true },
    { name: "ラグランTシャツ", price: "¥700〜", image: "https://ext.same-assets.com/1649376393/2117706410.png", sizes: "S-XL" },
  ];

  const printMethods = [
    {
      title: "シルクスクリーン",
      description: "大量生産に最適！",
      price: "1枚あたり¥400〜",
      icon: "🎨",
      color: "bg-sparkle-pink",
    },
    {
      title: "DTFプリント",
      description: "フルカラー対応",
      price: "1枚から可能",
      icon: "🖨️",
      color: "bg-sparkle-turquoise",
    },
    {
      title: "刺繍",
      description: "高級感のある仕上がり",
      price: "お見積もり",
      icon: "🪡",
      color: "bg-sparkle-yellow",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Mobile First */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        {/* Top Bar - Mobile Optimized */}
        <div className="bg-sparkle-pink text-white py-2">
          <div className="px-4 text-center">
            <span className="text-sm font-bold">🎉 LINEで簡単注文 | 学生の味方！</span>
          </div>
        </div>

        {/* Main Navigation - Mobile First */}
        <nav className="bg-white">
          <div className="px-4">
            <div className="flex items-center justify-between py-3">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="SPARKLE"
                  width={120}
                  height={48}
                  className="h-10 w-auto"
                />
              </Link>

              {/* Mobile CTA & Menu */}
              <div className="flex items-center gap-2">
                {/* Primary CTA Button */}
                <Link
                  href="https://line.me/R/ti/p/@895gydcc"
                  className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-green-600 transition flex items-center gap-1"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z"/>
                  </svg>
                  LINE相談
                </Link>

                {/* Menu Toggle */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Full Screen Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col">
            {/* Header in Menu */}
            <div className="flex items-center justify-between p-4 border-b">
              <Image
                src="/logo.png"
                alt="SPARKLE"
                width={120}
                height={48}
                className="h-10 w-auto"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 p-6">
              <div className="space-y-6">
                {/* Primary Actions */}
                <div className="space-y-4">
                  <Link
                    href="https://line.me/R/ti/p/@895gydcc"
                    className="block w-full bg-green-500 text-white text-center py-4 rounded-full font-bold text-lg hover:bg-green-600 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🎯 LINEで相談・見積もり
                  </Link>
                  <button 
                    className="block w-full bg-sparkle-yellow text-gray-800 text-center py-4 rounded-full font-bold text-lg hover:bg-sparkle-yellow-light transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    💰 料金シミュレーター
                  </button>
                </div>

                {/* Menu Links */}
                <div className="space-y-4 pt-6 border-t">
                  <Link 
                    href="/guide" 
                    className="block text-lg font-medium text-gray-700 py-3 hover:text-sparkle-pink transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    📋 ご利用ガイド
                  </Link>
                  <Link 
                    href="/products" 
                    className="block text-lg font-medium text-gray-700 py-3 hover:text-sparkle-pink transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    👕 商品カタログ
                  </Link>
                  <Link 
                    href="/design" 
                    className="block text-lg font-medium text-gray-700 py-3 hover:text-sparkle-pink transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🎨 デザイン作成
                  </Link>
                  <Link 
                    href="/faq" 
                    className="block text-lg font-medium text-gray-700 py-3 hover:text-sparkle-pink transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ❓ よくある質問
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="pt-6 border-t text-center text-sm text-gray-500">
                  <p>📞 070-9362-9828（24時間受付）</p>
                  <p>📧 info@s-parkle.co.jp</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Carousel - Mobile Optimized */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <div className="px-4 h-full flex items-center justify-center">
                  <div className="text-white text-center max-w-md">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4 animate-slideIn leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-base sm:text-lg mb-8 animate-slideIn animation-delay-200 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <div className="space-y-3">
                      <Link
                        href="https://line.me/R/ti/p/@895gydcc"
                        className="block w-full bg-green-500 text-white py-4 rounded-full font-bold text-lg hover:bg-green-600 transition animate-slideIn animation-delay-400"
                      >
                        🎯 LINEで無料相談
                      </Link>
                      <button className="block w-full bg-sparkle-yellow text-gray-800 py-4 rounded-full font-bold text-lg hover:bg-sparkle-yellow-light transition animate-slideIn animation-delay-500">
                        💰 料金を見る
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls - Mobile Optimized */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-3 hover:bg-white transition shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-3 hover:bg-white transition shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Carousel Indicators - Mobile Optimized */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? "bg-white shadow-lg" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="relative bg-gradient-to-r from-sparkle-pink to-sparkle-pink-light py-8">
        <WavePatternBottom color="#ffffff" opacity={0.2} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">オリジナルプリントの専門店</h2>
            <div className="flex flex-wrap justify-center gap-8 mb-4">
              <div className="bg-white/20 backdrop-blur rounded-full px-6 py-3">
                <span className="font-bold text-lg">デザイン＆見積無料</span>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-full px-6 py-3">
                <span className="font-bold text-lg">納期を必ず守ります</span>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-full px-6 py-3">
                <span className="font-bold text-lg">お支払いは後払い</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LINE CTA */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto shadow-xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-sparkle-pink">サイズ交換保証</span>で安心！ぴったりのクラスTシャツをお届け
                </h3>
                <p className="text-xl font-bold text-green-600 mb-6">
                  どんな事でもOK！スタッフに聞いてみよう
                </p>
                <Link
                  href="https://line.me/R/ti/p/@895gydcc"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z"/>
                  </svg>
                  LINEで質問
                </Link>
              </div>
              <div className="relative">
                <div className="w-48 h-48 bg-white rounded-xl shadow-lg p-4">
                  <Image
                    src="/line-qr.jpeg"
                    alt="LINE QRコード"
                    width={180}
                    height={180}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              ※LINEは相談窓口となりますので注文は出来かねます。
            </p>
          </div>
        </div>
      </section>

      {/* Order Flow */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            今日注文して、<span className="text-sparkle-pink">最短明日お届け！</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-sparkle-turquoise text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-xl font-bold mb-2">商品を選ぶ</h3>
              <p className="text-gray-600">豊富なラインナップから選択</p>
            </div>
            <div className="text-center">
              <div className="bg-sparkle-turquoise text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-xl font-bold mb-2">デザインを決める</h3>
              <p className="text-gray-600">無料テンプレートも豊富</p>
            </div>
            <div className="text-center">
              <div className="bg-sparkle-turquoise text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-xl font-bold mb-2">注文・お届け</h3>
              <p className="text-gray-600">最短翌日お届け可能</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sparkle-pink font-bold text-lg hover:underline"
            >
              詳しく見る
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section with Tabs */}
      <ProductTabs />

      {/* Price Calculator */}
      <PriceCalculator />

      {/* Design Gallery */}
      <DesignGallery />

      {/* Uniform Templates Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            デザインに悩んだらコレ！選べるユニフォームテンプレートは全16種！
          </h2>
          <p className="text-center text-gray-600 mb-12">
            「どんなデザインにしようか決まらない…」そんな時もご安心ください！<br />
            プロがデザインした高品質なユニフォーム風テンプレートを16種類ご用意しました。
          </p>

          <div className="bg-sparkle-turquoise/10 rounded-2xl p-8 max-w-4xl mx-auto mb-12">
            <p className="text-center text-lg font-bold mb-4">
              お好きなテンプレートを選ぶだけで、
              <span className="text-sparkle-turquoise text-2xl">【前面プリント代込み1,300円】</span>
              で本格的なオリジナルTシャツが簡単に作成できます。
            </p>
            <p className="text-center text-gray-600">
              クラス名や個人名、背番号などを追加して、世界に一つだけのユニフォームを完成させましょう！
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-sparkle-turquoise to-sparkle-turquoise-light rounded-t-xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">#{i + 1}</div>
                    <div className="text-sm">テンプレート</div>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <p className="text-sm font-bold">デザイン {i + 1}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-sparkle-turquoise text-white px-8 py-3 rounded-full font-bold hover:bg-sparkle-turquoise-dark transition">
              全テンプレートを見る
            </button>
          </div>
        </div>
      </section>

      {/* Let's Get Started Section */}
      <section className="relative py-16 bg-sparkle-turquoise-light">
        <WavePatternTop color="#FF5A9D" opacity={0.1} />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            Let's get Started!
          </h2>
          <p className="text-center text-gray-700 mb-12">
            はじめての方へ
          </p>

          <div className="text-center mb-8">
            <p className="text-lg mb-4">ご安心ください！</p>
            <p className="text-lg mb-8">
              スパークルなら「安心」「楽しい」クラT作りをお約束します！
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="text-5xl mb-4">👕</div>
              <h3 className="text-xl font-bold mb-2">商品を決めよう！</h3>
              <p className="text-gray-600">大人気のドライTシャツから ユニフォーム風商品まで スウェットパーカーなど豊富なラインナップ！</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">デザインを決めよう！</h3>
              <p className="text-gray-600">創刊号のデザインテンプレート 800種類以上！ もちろんオリジナルデザインも大歓迎</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">加工方法を決めよう！</h3>
              <p className="text-gray-600">シルクプリント・刺繍 写真やフルカラーのイラストまで 様々なプリント一人ひとり異なるチームナンバー</p>
            </div>
          </div>
        </div>
      </section>

      {/* Print Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            ご注文方法のご案内
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {printMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className={`${method.color} p-8 text-center text-white`}>
                  <div className="text-6xl mb-4">{method.icon}</div>
                  <h3 className="text-2xl font-bold">{method.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="text-2xl font-bold text-gray-800">{method.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-16 bg-sparkle-turquoise-light">
        <WavePatternBottom color="#FF5A9D" opacity={0.1} />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">
            制作事例
          </h2>
          <p className="text-center text-gray-600 mb-8">
            実際に作成された素敵な作品たち。制作のヒントも見つけよう！
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-sparkle-pink to-sparkle-turquoise opacity-75"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                  {i}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-sparkle-pink text-white px-8 py-3 rounded-full font-bold hover:bg-sparkle-pink-dark transition">
              一覧を見る
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ご注文について</h3>
              <ul className="space-y-2">
                <Link href="#" className="block hover:text-sparkle-pink transition">注文用紙</Link>
                <Link href="#" className="block hover:text-sparkle-pink transition">安払い方法</Link>
                <Link href="#" className="block hover:text-sparkle-pink transition">配送事項</Link>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">プリントについて</h3>
              <ul className="space-y-2">
                <Link href="#" className="block hover:text-sparkle-pink transition">商品</Link>
                <Link href="#" className="block hover:text-sparkle-pink transition">デザインサンプル</Link>
                <Link href="#" className="block hover:text-sparkle-pink transition">全般の詳細</Link>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">加工方法について</h3>
              <ul className="space-y-2">
                <Link href="#" className="block hover:text-sparkle-pink transition">お見積もり診断</Link>
                <Link href="#" className="block hover:text-sparkle-pink transition">加工方法</Link>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">スパークルについて</h3>
              <ul className="space-y-2">
                <Link href="#" className="block hover:text-sparkle-pink transition">会社概要</Link>
                <Link href="#" className="block hover:text-sparkle-pink transition">ご挨拶</Link>
                <Link href="#" className="block hover:text-sparkle-pink transition">採用情報</Link>
                <Link href="#" className="block hover:text-sparkle-pink transition">プライバシーポリシー</Link>
                <Link href="#" className="block hover:text-sparkle-pink transition">ブログ / コラム</Link>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="text-center">
              <div className="text-xs text-gray-400 space-y-2">
                <div className="flex justify-center items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3" />
                    <span>070-9362-9828（24時間受付）</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3 h-3" />
                    <span>info@s-parkle.co.jp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p className="text-sm">
              © ORIGINAL PRINTING S PARKLE
            </p>
            <p className="text-xs mt-2">
              思い出作りを全力でサポート致します。
            </p>
          </div>
        </div>
      </footer>


    </div>
  );
}
