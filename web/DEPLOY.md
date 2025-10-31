# Deployment Guide

## 🚀 Quick Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Visit https://vercel.com/new
2. Import repository: `durellwilson/DetroitTechEquity`
3. Configure:
   - **Root Directory**: `web`
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

4. Add Environment Variable:
   ```
   OPENAI_API_KEY = [your-openai-api-key]
   ```

5. Click **Deploy**

### Option 2: Vercel CLI

```bash
cd web
vercel login
vercel --prod
```

Follow prompts to link project and deploy.

## 🎨 Deploy to v0.dev

### Copy Components to v0

1. Visit https://v0.dev
2. Create new project
3. Copy component code from:
   - `app/page.tsx` (Home)
   - `app/career-coach/page.tsx` (AI Coach)
   - `app/transit/page.tsx` (Transit)
   - `app/community/page.tsx` (Community)

4. v0 will generate optimized versions

### v0 Prompt Template

```
Create a Detroit Tech Equity platform with:
- Detroit brand colors (Blue #002D72, Gold #FDB913, Red #CE1126)
- Glass-morphism design
- AI Career Coach with streaming chat
- Transit Assistant with real-time data
- Community Hub with mentors and events
- Responsive mobile-first design
```

## 📊 Features Live

- ✅ AI Career Coach (OpenAI streaming)
- ✅ Transit Assistant (API ready)
- ✅ Community Hub
- ✅ Responsive design
- ✅ Detroit branding
- ✅ Edge runtime

## 🔧 Environment Variables

Required:
- `OPENAI_API_KEY` - For AI Career Coach (get from OpenAI dashboard)

Optional:
- `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` - Analytics

## 🌐 Custom Domain

In Vercel dashboard:
1. Go to Project Settings
2. Domains
3. Add: `detroittechequity.com` or your domain
4. Follow DNS configuration

## 📈 Monitoring

- Vercel Analytics: Automatic
- OpenAI Usage: Check dashboard
- Error Tracking: Vercel logs

---

**Deployment Time**: ~2 minutes
**Build Time**: ~30 seconds
**Cold Start**: <100ms (Edge)
