# Hướng dẫn thêm Translation cho toàn bộ Website

## Bước 1: Cập nhật file translation

Mở 2 file sau và thêm key-value pairs:
- `src/locales/en.json` (Tiếng Anh)
- `src/locales/vi.json` (Tiếng Việt)

## Bước 2: Sử dụng trong Component

### Import hook
```typescript
import { useLanguage } from '../contexts/LanguageContext';
```

### Sử dụng trong component
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

## Cấu trúc Translation đề xuất

```json
{
  "common": {
    "learnMore": "Learn More",
    "contactUs": "Contact Us",
    "readMore": "Read More"
  },
  "home": {
    "banner": {
      "title": "Technology for Business",
      "description": "..."
    },
    "services": {
      "title": "Our Services",
      "description": "..."
    }
  }
}
```

## Ví dụ cụ thể

### Before (Hard-coded text):
```tsx
<h2>Our Latest Case Studies</h2>
<p>Showcasing projects we've developed</p>
```

### After (With translation):
```tsx
const { t } = useLanguage();

<h2>{t('projects.title')}</h2>
<p>{t('projects.description')}</p>
```

## Script tự động để test translation

Chạy lệnh sau để kiểm tra các key bị thiếu:

```bash
npm run check-translations
```

(Cần thêm script này vào package.json)
