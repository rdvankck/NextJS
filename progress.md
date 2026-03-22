# Next.js Öğrenme İlerlemesi

## Genel Durum
- **Başlangıç Tarihi:** 2026-02-28
- **Mevcut Hafta:** Hafta 3
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

## Hafta 2: Data Fetching & Caching ✅ TAMAMLANDI

### ✅ Konu 1: Server-side Data Fetching

#### Öğrenilen Konular:
- [x] Async component'ler yazma
- [x] Component içinde direkt `fetch` kullanımı
- [x] TypeScript ile tip güvenliği

#### Yapılan Uygulamalar:
- [x] `/users` sayfası oluşturuldu (JSONPlaceholder API)
- [x] `User` type tanımlandı
- [x] `getUsers()` async fonksiyonu yazıldı

---

### ✅ Konu 2: Caching Strategies

#### Öğrenilen Konular:
- [x] `force-cache`: Statik veri için
- [x] `no-store`: Her zaman güncel veri için
- [x] `revalidate`: ISR (Incremental Static Regeneration)

#### Yapılan Uygulamalar:
- [x] `/products` sayfası (`force-cache` ile FakeStore API)
- [x] `/news` sayfası (`revalidate: 120` ile ISR)

---

### ✅ Konu 3: Server Actions

#### Öğrenilen Konular:
- [x] Server Action nedir
- [x] `"use server"` direktifi
- [x] Form submission ile Server Action
- [x] `formData.get()` ile veri alma

#### Yapılan Uygulamalar:
- [x] `/contacts` sayfası (iletişim formu)
- [x] Form ile Server Action bağlama

---

### ✅ Konu 4: Data Mutations

#### Öğrenilen Konular:
- [x] `revalidatePath` ile cache yenileme
- [x] `redirect()` ile sayfa yönlendirme

#### Yapılan Uygulamalar:
- [x] `/thank-you` sayfası (yönlendirme)
- [x] `/todos` sayfası (todo ekleme + revalidatePath)

---

## Hafta 2 Özet

| Konu | Durum |
|------|-------|
| Server-side Data Fetching | ✅ Tamamlandı |
| Caching (force-cache, revalidate) | ✅ Tamamlandı |
| Server Actions | ✅ Tamamlandı |
| redirect() & revalidatePath() | ✅ Tamamlandı |

---

## Hafta 3: ⏳ SONRAKİ

### Konu 1: API Routes
- [ ] Route Handlers (`route.ts`)
- [ ] GET, POST, PUT, DELETE
- [ ] JSON response

### Konu 2: Middleware
- [ ] `middleware.ts` dosyası
- [ ] Request拦截 (interception)
- [ ] Authentication kontrolü

### Konu 3: SEO & Metadata
- [ ] `metadata` export
- [ ] Dinamik metadata
- [ ] Open Graph

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
├── posts/
│   ├── page.tsx            → /posts (liste)
│   ├── not-found.tsx       → Post bulunamadı
│   └── [id]/
│       └── page.tsx        → /posts/1, /posts/2...
├── users/
│   └── page.tsx            → /users (server-side fetch)
├── products/
│   └── page.tsx            → /products (force-cache)
├── news/
│   └── page.tsx            → /news (ISR revalidate)
├── contacts/
│   └── page.tsx            → /contacts (Server Action form)
├── thank-you/
│   └── page.tsx            → /thank-you (redirect)
└── todos/
    └── page.tsx            → /todos (revalidatePath)
```

---

## Önemli Notlar

### Server Action
```tsx
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function submitForm(formData: FormData) {
  "use server";

  const name = formData.get("name");
  revalidatePath("/todos");  // Cache yenile
  redirect("/thank-you");    // Yönlendir
}
```

### Caching Strategies
```tsx
// Cache'le, bir daha istek atma
cache: "force-cache"

// Her zaman yeni veri çek
cache: "no-store"

// 60 saniyede bir yenile
next: { revalidate: 60 }
```

### Dynamic Routes
```tsx
// app/posts/[id]/page.tsx
type Props = {
  params: Promise<{ id: string }>;
};

const { id } = await params;  // Next.js 15: await gerekli!
```

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

---

*Son Güncelleme: 2026-03-22*
