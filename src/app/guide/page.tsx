"use client";

import Link from "next/link";
import { ChevronRight, MessageCircle, Palette, Package, Truck, CreditCard, CheckCircle } from "lucide-react";

export default function GuidePage() {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "LINEで友だち追加",
      description: "公式LINEアカウントを友だち追加するだけでスタート。面倒な会員登録は不要です。",
      detail: "QRコードを読み取るか、LINE IDで検索してください。",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "商品を選択",
      description: "豊富なラインナップから、用途に合った商品をお選びください。",
      detail: "Tシャツ、ポロシャツ、パーカーなど多数ご用意。",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "デザインを決定",
      description: "テンプレートから選ぶか、オリジナルデザインをアップロード。",
      detail: "デザイン制作のサポートも無料で承ります。",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "見積もり確認",
      description: "LINEで即座に見積もりをお送りします。学割適用も自動計算。",
      detail: "納得いただけたら、そのまま注文確定へ。",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "商品お届け",
      description: "最短翌日発送。全国どこでも配送可能です。",
      detail: "配送状況もLINEでリアルタイムにお知らせ。",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "アフターサポート",
      description: "商品到着後も、LINEで気軽にご相談いただけます。",
      detail: "追加注文も簡単。履歴から再注文可能。",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-sparkle-pink text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm mb-4">
            <Link href="/" className="hover:underline">ホーム</Link>
            <ChevronRight className="w-4 h-4" />
            <span>ご利用ガイド</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">ご利用ガイド</h1>
          <p className="text-xl">LINEで完結！簡単6ステップで注文完了</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* LINE CTA */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 mb-16 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              まずはLINEで友だち追加！
            </h2>
            <p className="text-xl mb-8">
              面倒な会員登録不要。LINEだけで注文が完結します。
            </p>
            <Link
              href="https://line.me/R/ti/p/@895gydcc"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition"
            >
              <MessageCircle className="w-6 h-6" />
              今すぐLINEで友だち追加
            </Link>
          </div>
        </div>

        {/* Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            注文の流れ
          </h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-sparkle-turquoise text-white w-16 h-16 rounded-full flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="bg-sparkle-pink text-white px-3 py-1 rounded-full text-sm font-bold">
                        STEP {index + 1}
                      </span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-lg mb-2">{step.description}</p>
                    <p className="text-gray-600">{step.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            LINE注文のメリット
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-sparkle-pink/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="text-xl font-bold mb-2">スマホだけで完結</h3>
              <p className="text-gray-600">
                PCやメールアドレス不要。いつものLINEアプリだけで注文できます。
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sparkle-turquoise/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💬</span>
              </div>
              <h3 className="text-xl font-bold mb-2">リアルタイム相談</h3>
              <p className="text-gray-600">
                デザインや数量の相談も、チャット感覚で気軽にできます。
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sparkle-yellow/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📋</span>
              </div>
              <h3 className="text-xl font-bold mb-2">注文履歴管理</h3>
              <p className="text-gray-600">
                過去の注文履歴もLINEで確認。追加注文も簡単です。
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="bg-gray-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">よくあるご質問</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-1">Q. LINEでの注文に料金はかかりますか？</h3>
              <p className="text-gray-600">A. いいえ、LINE利用料は完全無料です。商品代金のみお支払いください。</p>
            </div>
            <div>
              <h3 className="font-bold mb-1">Q. 支払い方法は何が使えますか？</h3>
              <p className="text-gray-600">A. 銀行振込、クレジットカード、後払いからお選びいただけます。</p>
            </div>
          </div>
          <Link href="/faq" className="inline-flex items-center gap-2 text-sparkle-pink font-bold mt-4 hover:underline">
            もっと見る
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
