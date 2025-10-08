# Translation Guide for SMEW Tech Website

## Overview
The website now supports multi-language functionality (English and Vietnamese). Users can switch languages using the floating button in the bottom-right corner.

## How to Use Translation in Components

### 1. Import the useLanguage Hook
```typescript
import { useLanguage } from "../contexts/LanguageContext";
```

### 2. Use the Translation Function
```typescript
export default function YourComponent() {
    const { t } = useLanguage();

    return (
        <div>
            <h1>{t('nav.home')}</h1>
            <p>{t('about.description')}</p>
        </div>
    );
}
```

## Translation Files Location
- English: `src/locales/en.json`
- Vietnamese: `src/locales/vi.json`

## Translation Keys Structure

### Navigation
- `nav.home` - Home
- `nav.about` - About
- `nav.services` - Services
- `nav.projects` - Projects
- `nav.contact` - Contact

### Banner
- `banner.title` - Main title
- `banner.subtitle` - Subtitle
- `banner.description` - Description text
- `banner.cta` - Call to action button

### About Section
- `about.title` - Section title
- `about.mission` - Mission heading
- `about.missionText` - Mission description
- `about.vision` - Vision heading
- `about.visionText` - Vision description

### Services
- `services.title` - Services title
- `services.odc.title` - ODC service title
- `services.odc.description` - ODC description
- `services.mobile.title` - Mobile development title
- `services.mobile.description` - Mobile description
- `services.web.title` - Web development title
- `services.web.description` - Web description

### Footer
- `footer.tagline` - Company tagline
- `footer.email` - Email label
- `footer.quickLinks` - Quick links heading
- `footer.copyright` - Copyright text

## Adding New Translations

1. Add the key-value pair to both `en.json` and `vi.json`:

**en.json:**
```json
{
  "newSection": {
    "title": "New Section Title",
    "description": "Description text"
  }
}
```

**vi.json:**
```json
{
  "newSection": {
    "title": "Tiêu đề phần mới",
    "description": "Mô tả văn bản"
  }
}
```

2. Use it in your component:
```typescript
const { t } = useLanguage();
<h1>{t('newSection.title')}</h1>
```

## Floating Action Buttons

The website includes floating action buttons in the bottom-right corner:

1. **Language Switcher** (Blue) - Toggle between EN/VI
2. **Email/Contact** (Red) - Navigate to contact page
3. **WhatsApp** (Green) - Direct WhatsApp chat to +84963190925
4. **Main Toggle** (Orange gradient) - Show/hide action buttons

### Customizing Floating Buttons

Edit `src/components/FloatingButtons.tsx` to:
- Change colors
- Modify positions
- Add more buttons
- Update WhatsApp number or email link

## Example: Updating a Component

**Before:**
```typescript
export default function Example() {
    return <h1>About Us</h1>;
}
```

**After:**
```typescript
import { useLanguage } from "../contexts/LanguageContext";

export default function Example() {
    const { t } = useLanguage();
    return <h1>{t('about.subtitle')}</h1>;
}
```

## Notes

- The language preference is saved in localStorage
- Default language is English
- Translations load dynamically when language changes
- The NavBar component has been updated as an example

## Need Help?

Check `src/components/NavBar.tsx` for a complete example of translation implementation.
