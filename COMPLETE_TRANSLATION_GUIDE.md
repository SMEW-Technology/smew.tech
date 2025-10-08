# Hướng dẫn hoàn chỉnh hệ thống đa ngôn ngữ SMEW Tech

## ✅ Đã hoàn thành

### 1. Hệ thống cơ bản
- ✅ Language Context (`src/contexts/LanguageContext.tsx`)
- ✅ Translation files (`src/locales/en.json`, `src/locales/vi.json`)
- ✅ Floating Action Buttons (góc dưới bên phải)
- ✅ Integration vào _app.tsx

### 2. Components đã được translate
- ✅ NavBar - Menu điều hướng
- ✅ HomeBanner - Banner trang chủ

## 📋 Cần làm tiếp

### Components cần thêm translation:
1. **AboutUs.tsx** - Phần giới thiệu
2. **Offer.tsx** - Giá trị cốt lõi
3. **Footer.tsx** - Footer
4. **Testimonial.tsx** - Đánh giá khách hàng
5. **AboutBanner.tsx** - Banner trang About
6. **ServiceBanner.tsx** - Banner trang Services
7. **ProjectBanner.tsx** - Banner trang Projects

### Pages cần thêm translation:
1. **index.tsx** - Trang chủ
2. **about.tsx** - Trang giới thiệu
3. **services.tsx** - Trang dịch vụ
4. **projects.tsx** - Trang dự án
5. **contact.tsx** - Trang liên hệ

## 🎯 Cách thêm translation vào component

### Bước 1: Import hook
```typescript
import { useLanguage } from '../contexts/LanguageContext';
```

### Bước 2: Sử dụng trong component
```typescript
export default function MyComponent() {
    const { t } = useLanguage();

    return (
        <div>
            <h1>{t('section.title')}</h1>
            <p>{t('section.description')}</p>
        </div>
    );
}
```

### Bước 3: Thêm translation keys vào files
Thêm key vào `src/locales/en.json`:
```json
{
  "section": {
    "title": "My Section Title",
    "description": "Description text here"
  }
}
```

Thêm key vào `src/locales/vi.json`:
```json
{
  "section": {
    "title": "Tiêu đề phần của tôi",
    "description": "Mô tả văn bản ở đây"
  }
}
```

## 🔧 Ví dụ cụ thể

### Ví dụ 1: Text đơn giản
**Before:**
```tsx
<h2>About Us</h2>
```

**After:**
```tsx
const { t } = useLanguage();
<h2>{t('about.title')}</h2>
```

### Ví dụ 2: Text có HTML
**Before:**
```tsx
<p>Welcome to <b>SMEW Tech</b></p>
```

**After:**
```tsx
const { t } = useLanguage();
<p dangerouslySetInnerHTML={{ __html: t('welcome.message') }}></p>
```

Translation trong JSON:
```json
{
  "welcome": {
    "message": "Welcome to <b>SMEW Tech</b>"
  }
}
```

### Ví dụ 3: List items
**Before:**
```tsx
<ul>
  <li>Service 1</li>
  <li>Service 2</li>
</ul>
```

**After:**
```tsx
const { t } = useLanguage();
<ul>
  <li>{t('services.service1')}</li>
  <li>{t('services.service2')}</li>
</ul>
```

## 🌍 Floating Action Buttons

Buttons hiện tại:
1. 🟠 **Main Toggle** - Mở/đóng menu
2. 🔵 **Language Switcher** (EN/VI) - Chuyển ngôn ngữ
3. 🟢 **WhatsApp** - Link đến WhatsApp (+84963190925)
4. 🔴 **Email/Contact** - Link đến trang contact

## 📝 Template để thêm translation nhanh

Copy đoạn code này vào đầu component:

```typescript
import { useLanguage } from '../contexts/LanguageContext';

export default function YourComponent() {
    const { t } = useLanguage();

    // Rest of your component code
}
```

Sau đó thay thế tất cả hard-coded text bằng `{t('key.name')}`.

## 🚀 Next Steps

1. Xác định tất cả text cần translate trong component
2. Tạo keys trong translation files (en.json và vi.json)
3. Thêm useLanguage hook vào component
4. Thay thế hard-coded text bằng translation keys
5. Test chuyển ngôn ngữ bằng floating button

## 💡 Tips

- Đặt tên key rõ ràng, dễ hiểu (vd: `banner.title`, `services.odc.description`)
- Nhóm keys theo sections (nav, banner, about, services, etc.)
- Với text dài, xem xét chia nhỏ thành nhiều keys
- Luôn test cả EN và VI sau khi thêm translation
- Sử dụng `dangerouslySetInnerHTML` cho text có HTML tags

## 🐛 Troubleshooting

**Vấn đề:** Translation không hiển thị
- Kiểm tra key có đúng trong file JSON không
- Kiểm tra đã import `useLanguage` chưa
- Kiểm tra console có lỗi không

**Vấn đề:** Button không chuyển ngôn ngữ
- Kiểm tra FloatingButtons có được render trong _app.tsx không
- Kiểm tra LanguageProvider có wrap toàn bộ app không

**Vấn đề:** Text hiển thị key thay vì translation
- Key không tồn tại trong file JSON
- Sai cú pháp key (vd: `banner.title` thay vì `banner-title`)
