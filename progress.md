# Next.js Öğrenme İlerlemesi

## Genel Durum
- **Başlangıç Tarihi:** 2026-02-22
- **Mevcut Hafta:** Hafta 1
- **Proje:** my-next-app

---

## Hafta 1: Temeller - "Yeni Dünyaya Giriş"

### ✅ Konu 1: File-based Routing (TAMAMLANDI)

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

#### Anlaşılan Kavramlar:
| Kavram | Durum |
|--------|-------|
| File-based Routing | ✅ Anlaşıldı |
| layout.tsx | ✅ Anlaşıldı |
| page.tsx | ✅ Anlaşıldı |
| children prop | ✅ Anlaşıldı |
| loading.tsx | ✅ Anlaşıldı |
| error.tsx | ✅ Anlaşıldı |
| "use client" | ✅ Anlaşıldı |

---

### ⏳ Bekleyen Konular (Hafta 1)

#### Konu 2: Server vs Client Components
- [ ] Server Component nedir
- [ ] Client Component ne zaman kullanılır
- [ ] `"use client"` direktifi (detaylı)
- [ ] İki component türü arasındaki farklar

#### Konu 3: Special Files & Dynamic Routes
- [ ] `not-found.tsx` ile 404 sayfası
- [ ] `[id]/page.tsx` ile dinamik rotalar
- [ ] `[...slug]/page.tsx` ile catch-all rotalar
- [ ] Route parametrelerine erişim

#### Konu 4: Navigation
- [ ] `next/link` component'i kullanımı
- [ ] `useRouter` hook'u
- [ ] Programatik yönlendirme
- [ ] `usePathname` ve `useSearchParams` hooks

---

## Hafta 2-5: Bekliyor

### Hafta 2: Data Fetching & Caching
### Hafta 3: Rendering Strategies
### Hafta 4: Full-stack Features & Optimization
### Final Hafta: Advanced Topics & Deployment

---

## Önemli Notlar

### children Nedir?
```
children = İçine konulan içeriği temsil eder

Layout (children alır)
    ↓
    └── page.tsx içeriği buraya gelir

┌────────┬────────────────────────┐
│  URL   │   children ne olur?    │
├────────┼────────────────────────┤
│ /      │ page.tsx içeriği       │
├────────┼────────────────────────┤
│ /about │ about/page.tsx içeriği │
└────────┴────────────────────────┘
```

### loading.tsx
- Otomatik Suspense boundary oluşturur
- Sayfa yüklenirken gösterilir
- `animate-spin` ile döndürme animasyonu

### error.tsx
- `"use client"` ZORUNLU (event handler var)
- `error` ve `reset` props alır
- `reset()` ile sayfayı tekrar yükler

### Klasör Yapısı = URL Yapısı
```
app/
├── layout.tsx    → Root layout (tüm sayfaları sarmalar)
├── page.tsx      → /
├── loading.tsx   → Yükleme UI
├── error.tsx     → Hata UI
├── about/
│   └── page.tsx  → /about
```

---

*Son Güncelleme: 2026-02-22*
