# Next.js Öğrenme İlerlemesi

## Genel Durum
- **Başlangıç Tarihi:** 2026-02-28
- **Mevcut Hafta:** Hafta 4
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

## Hafta 3: API Routes & Middleware ✅ TAMAMLANDI

### ✅ Konu 1: API Routes

#### Öğrenilen Konular:
- [x] Route Handlers (`route.ts`)
- [x] GET, POST, PUT, DELETE
- [x] `NextResponse.json()` ile response
- [x] Dinamik API Routes (`[id]/route.ts`)

#### Yapılan Uygulamalar:
- [x] `/api/users` - GET (listele), POST (ekle)
- [x] `/api/users/[id]` - GET (tek), PUT (güncelle), DELETE (sil)

---

### ✅ Konu 2: Middleware

#### Öğrenilen Konular:
- [x] `middleware.ts` dosyası
- [x] `NextResponse.next()` ve `NextResponse.redirect()`
- [x] `matcher` config ile route filtreleme
- [x] Cookie'den veri okuma

#### Yapılan Uygulamalar:
- [x] `/admin` korumalı route
- [x] Token kontrolü ile authentication

---

### ✅ Konu 3: SEO & Metadata

#### Öğrenilen Konular:
- [x] `metadata` export
- [x] `title`, `description`, `keywords`
- [x] `generateMetadata` ile dinamik metadata

#### Yapılan Uygulamalar:
- [x] Ana sayfa metadata eklendi

---

## Hafta 3 Özet

| Konu | Durum |
|------|-------|
| API Routes (GET, POST) | ✅ Tamamlandı |
| Dinamik API Routes (PUT, DELETE) | ✅ Tamamlandı |
| Middleware | ✅ Tamamlandı |
| SEO & Metadata | ✅ Tamamlandı |

---

## Hafta 4: ⏳ SONRAKİ

### Konu 1: Authentication
- [ ] NextAuth.js kurulumu
- [ ] Login/Logout
- [ ] Protected routes

### Konu 2: Database
- [ ] Prisma kurulumu
- [ ] CRUD işlemleri

### Konu 3: Deployment
- [ ] Vercel deploy
- [ ] Environment variables

---

## Proje Yapısı

```
src/
├── middleware.ts           → Admin route koruması
├── app/
│   ├── layout.tsx          → Root layout
│   ├── page.tsx            → Ana sayfa (/)
│   ├── loading.tsx         → Yükleme UI
│   ├── error.tsx           → Hata UI
│   ├── not-found.tsx       → 404 sayfası
│   ├── components/
│   │   ├── Counter.tsx     → Client Component
│   │   ├── BackButton.tsx  → Geri dön butonu
│   │   └── Navigation.tsx  → Navigation buttons
│   ├── api/
│   │   └── users/
│   │       ├── route.ts    → GET, POST /api/users
│   │       └── [id]/
│   │           └── route.ts → GET, PUT, DELETE /api/users/:id
│   ├── about/
│   │   └── page.tsx        → /about
│   ├── posts/
│   │   ├── page.tsx        → /posts (liste)
│   │   ├── not-found.tsx   → Post bulunamadı
│   │   └── [id]/
│   │       └── page.tsx    → /posts/1, /posts/2...
│   ├── users/
│   │   └── page.tsx        → /users (server-side fetch)
│   ├── products/
│   │   └── page.tsx        → /products (force-cache)
│   ├── news/
│   │   └── page.tsx        → /news (ISR revalidate)
│   ├── contacts/
│   │   └── page.tsx        → /contacts (Server Action form)
│   ├── thank-you/
│   │   └── page.tsx        → /thank-you (redirect)
│   ├── todos/
│   │   ├── actions.ts      → Server Action
│   │   └── page.tsx        → /todos (revalidatePath)
│   ├── admin/
│   │   └── page.tsx        → /admin (korumalı)
│   └── login/
│       └── page.tsx        → /login
```

---

## Önemli Notlar

### API Routes
```tsx
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json(newUser, { status: 201 });
}
```

### Middleware
```tsx
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
```

### Server Action
```tsx
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function submitForm(formData: FormData) {
  "use server";

  const name = formData.get("name");
  revalidatePath("/todos");
  redirect("/thank-you");
}
```

### Caching Strategies
```tsx
cache: "force-cache"        // Statik veri
cache: "no-store"           // Her zaman güncel
next: { revalidate: 60 }    // 60 saniyede bir yenile
```

### Metadata (SEO)
```tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My App",
  description: "Açıklama",
  keywords: ["Next.js", "React"],
};
```

---

*Son Güncelleme: 2026-03-31*
