
# CVEEEZ Corporate Profile

منصة احترافية لشركة **CVEEEZ** مبنية باستخدام Next.js، TailwindCSS، ودعم كامل للغتين (العربية/الإنجليزية).

## 🚀 حل مشكلة Authentication Failed (GitHub)
إذا واجهت مشكلة في الرفع، شغّل هذه الأوامر في الـ Terminal (استبدل YOUR_TOKEN بالتوكن الخاص بك):

```bash
git remote set-url origin https://YOUR_TOKEN@github.com/Osama-Nabil-Mahmoud/cveeez.git
git push
```

---

## 🛠️ إعادة ضبط المشروع (Project Reset)
إذا كنت تريد فصل المشروع عن GitHub و Firebase والبدء من جديد، انسخ وشغّل هذه الأوامر بالترتيب:

### 1) عرض الحالة الحالية
```bash
pwd && ls -la
git status || true
git remote -v || true
ls -la .firebaserc firebase.json .firebase 2>/dev/null || true
```

### 2) فصل GitHub و Firebase
```bash
# فصل GitHub
git remote remove origin || true
git branch --unset-upstream || true

# حذف ملفات Firebase
rm -f .firebaserc firebase.json
rm -rf .firebase
```

### 3) إعادة ضبط Git بالكامل (Reset Git)
**تنبيه:** هذا سيحذف تاريخ الـ Git بالكامل وينشئ مستودعاً جديداً:
```bash
rm -rf .git
git init
git add .
git commit -m "Initial commit"
```

### 4) التحقق من النجاح
```bash
git status || true
git remote -v || true
ls -la
```

---

## المميزات الحالية
- **نبذة عنا**: ترتيب بصري محسن (النص يسبق الصورة).
- **فريق العمل**: قائمة كاملة بـ 16 عضواً.
- **دعم اللغات**: تبديل فوري بين العربية (RTL) والإنجليزية (LTR).
- **الوضع الليلي**: دعم كامل للـ Dark Mode.

جميع الحقوق محفوظة © CVEEEZ 2026
