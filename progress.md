# Next.js Öğrenme İlerlemesi

## Genel Durum
- **Başlangıç Tarihi:** 2026-02-28
- **Mevcut Hafta:** Hafta 1
- **Proje:** my-next-app

---

## Hafta 1: Temeller - "Yeni Dünyaya Giriş" ✅ TAMAMLANDI

### ✅ Konu 1: File-based Routing

#### Öğrenilen Konular:
- [x] `app` klasör yapısı
- [x] `layout.tsx` dosyasının rolü ve yapısı
- [x] `page.tsx` ile sayfa oluşturma
- [x] `{children}` prop'unun anlamı ve kullanımı
- [x] `loading.tsx` ile yükleme durumları
- [x] `error.tsx` ile hata yönetimi
- [x] Header/Footer ekleme

#### Yapılan Uygulamalar:
- [x] Ana sayfa (`page.tsx`) oluşturuldu
- [x] About sayfası (`about/page.tsx`) oluşturuldu
- [x] Root layout'a Header/Footer eklendi
- [x] `loading.tsx` oluşturuldu (spinner animasyonu)
- [x] `error.tsx` oluşturuldu (hata yönetimi + reset butonu)

---

### ✅ Konu 2: Server vs Client Components

#### Öğrenilen Konular:
- [x] Server Component nedir (varsayılan, server'da çalışır)
- [x] Client Component ne zaman kullanılır (useState, onClick, useEffect)
- [x] `"use client"` direktifi
- [x] İki component türü arasındaki farklar

#### Yapılan Uygulamalar:
- [x] `Counter.tsx` Client Component oluşturuldu
- [x] `useState` ile sayaç state'i yönetimi
- [x] `onClick` event'ları ile artırma/azaltma

---

### ✅ Konu 3: Special Files & Dynamic Routes

#### Öğrenilen Konular:
- [x] `not-found.tsx` ile 404 sayfası (root)
- [x] `posts/not-found.tsx` ile özel 404 sayfası
- [x] `[id]/page.tsx` ile dinamik rotalar
- [x] `params: Promise<{ id: string }>` ile parametre erişimi
- [x] `notFound()` fonksiyonu ile manuel 404 tetikleme

#### Yapılan Uygulamalar:
- [x] `/posts` liste sayfası oluşturuldu
- [x] `/posts/[id]` dinamik sayfa oluşturuldu
- [x] Post bulunamadığında 404 gösterme

---

### ✅ Konu 4: Navigation

#### Öğrenilen Konular:
- [x] `next/link` component'i kullanımı
- [x] `<a href>` vs `<Link href>` farkı
- [x] `useRouter` hook'u
- [x] `router.push()`, `router.back()`, `router.refresh()`
- [x] `usePathname` ile mevcut URL'yi öğrenme
- [x] `useSearchParams` ile query parametreleri

#### Yapılan Uygulamalar:
- [x] `Navigation.tsx` component oluşturuldu
- [x] `BackButton.tsx` component oluşturuldu
- [x] Layout'ta `<Link>` kullanımı
- [x] Pathname ve searchParams görüntüleme

---

## Hafta 1 Özet

| Konu | Durum |
|------|-------|
| File-based Routing | ✅ Tamamlandı |
| Server vs Client Components | ✅ Tamamlandı |
| Dynamic Routes & 404 | ✅ Tamamlandı |
| Navigation | ✅ Tamamlandı |

---

## Hafta 2: Data Fetching & Caching ⏳ SONRAKİ

### Konu 1: Server-side Data Fetching
- [ ] Async component'ler yazma
- [ ] Component içinde direkt `fetch` kullanımı
- [ ] TypeScript ile tip güvenliği

### Konu 2: Caching Strategies
- [ ] `force-cache`: Statik veri için
- [ ] `no-store`: Her zaman güncel veri için
- [ ] `revalidate`: ISR (Incremental Static Regeneration)

### Konu 3: Server Actions
- [ ] Server Action nedir
- [ ] `"use server"` direktifi
- [ ] Form submission ile Server Action

### Konu 4: Data Mutations
- [ ] `revalidatePath` ile cache yenileme
- [ ] `revalidateTag` ile tag-based revalidation

---

## Proje Yapısı

```
src/app/
├── layout.tsx              → Root layout (Header + Footer)
├── page.tsx                → Ana sayfa (/)
├── loading.tsx             → Yükleme UI
├── error.tsx               → Hata UI
├── not-found.tsx           → 404 sayfası
├── components/
│   ├── Counter.tsx         → Client Component (useState)
│   ├── BackButton.tsx      → Geri dön butonu
│   └── Navigation.tsx      → Navigation buttons
├── about/
│   └── page.tsx            → /about
└── posts/
    ├── page.tsx            → /posts (liste)
    ├── not-found.tsx       → Post bulunamadı
    └── [id]/
        └── page.tsx        → /posts/1, /posts/2...
```

---

## Önemli Notlar

### Navigation Hooks
```tsx
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const router = useRouter();
const pathname = usePathname();
const searchParams = useSearchParams();

router.push("/");      // Sayfaya git
router.back();         // Geri dön
router.refresh();      // Yenile
```

### Dynamic Routes
```tsx
// app/posts/[id]/page.tsx
type Props = {
  params: Promise<{ id: string }>;
};

const { id } = await params;  // Next.js 15: await gerekli!
```

### notFound() Fonksiyonu
```tsx
import { notFound } from "next/navigation";

if (!post) {
  notFound();  // En yakın not-found.tsx'e gider
}
```

---

*Son Güncelleme: 2026-02-28*
