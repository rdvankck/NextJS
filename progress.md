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

#### Yapılan Uygulamalar:
- [x] Ana sayfa (`page.tsx`) oluşturuldu
- [x] About sayfası (`about/page.tsx`) oluşturuldu ve push edildi

#### Anlaşılan Kavramlar:
| Kavram | Durum |
|--------|-------|
| File-based Routing | ✅ Anlaşıldı |
| layout.tsx | ✅ Anlaşıldı |
| page.tsx | ✅ Anlaşıldı |
| children prop | ✅ Anlaşıldı |
| Link component | ✅ Anlaşıldı |

---

### 🔄 Sonraki Adım: Layout'a Header/Footer Ekleme

#### Yapılacaklar:
- [ ] Layout'a Header component ekle
- [ ] Layout'a Footer component ekle
- [ ] children konseptini pekiştir

---

### ⏳ Bekleyen Konular (Hafta 1)

#### Konu 1 (Kalan):
- [ ] `loading.tsx` ile yükleme durumları
- [ ] `error.tsx` ile hata yönetimi

#### Konu 2: Server vs Client Components
- [ ] Server Component nedir
- [ ] Client Component ne zaman kullanılır
- [ ] `"use client"` direktifi
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

### Klasör Yapısı = URL Yapısı
```
app/
├── page.tsx      → /
├── about/
│   └── page.tsx  → /about
└── layout.tsx    → Tüm sayfaları sarmalar
```

---

*Son Güncelleme: 2026-02-22*
