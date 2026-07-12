# SpaceX IPO Investing Brokerage Platform

A full-stack, enterprise-grade IPO and investment brokerage system with real-time trading, cryptocurrency support, and AI-powered customer service.

## 🚀 Technology Stack

**Frontend:**
- React 19 + TypeScript
- Tailwind CSS 4 (Dark SpaceX theme)
- Vite 5 (lightning-fast builds)
- React Query + tRPC client

**Backend:**
- Express 4 (Node.js runtime)
- tRPC 11 (end-to-end type safety)
- Drizzle ORM (type-safe database)
- JWT authentication
- bcryptjs (password hashing)

**Database:**
- MySQL 8.0 / TiDB
- 20+ normalized tables
- Connection pooling

**Real-Time Data:**
- Finnhub API (stock prices) - FREE
- CoinGecko API (crypto prices) - FREE
- 1-second update intervals

## ✨ Features

1. **User Authentication & KYC** - Manus OAuth, 3-state KYC tracking
2. **Dashboard & Portfolio** - Real-time holdings, P&L, transaction history
3. **IPO Investments** - Browse, subscribe, track allocations
4. **Stock Trading** - Buy/sell with live prices, watchlists
5. **Cryptocurrency Trading** - Multi-asset crypto portfolio
6. **Price Alerts** - Custom price targets with notifications
7. **Payment System** - Multi-channel deposits/withdrawals
8. **Admin Panel** - User management, KYC review, IPO control
9. **Super Admin Portal** - 2FA, IP whitelisting, full platform control
10. **AI Customer Support** - 24/7 chatbot with escalation
11. **Market News Feed** - Personalized news by holdings
12. **Real-Time Feeds** - Live price updates with charts

## 📦 Installation

```bash
git clone https://github.com/rankingspace/spacex-ipo-investing.git
cd spacex-ipo-investing
npm install
cp .env.example .env
npm run dev
```

## 🚀 Quick Start

**Development:**
```bash
npm run dev         # Starts both server and client
npm run dev:server  # Backend only
npm run dev:client  # Frontend only
```

**Production:**
```bash
npm run build
NODE_ENV=production npm start
```

**Testing:**
```bash
npm run test
npm run type-check
npm run lint
```

## 🐳 Docker Deployment

```bash
docker-compose up -d
```

## 🔒 Security Features

✅ Rate limiting (100 req/15min)
✅ CORS protection
✅ CSP headers
✅ HSTS (production)
✅ XSS protection
✅ SQL injection prevention
✅ bcrypt password hashing (12 rounds)
✅ JWT token validation
✅ 2FA support
✅ Audit logging

See [SECURITY_HARDENING.md](./SECURITY_HARDENING.md) for setup.

## 🚀 Deploy (FREE - Choose One)

**Fly.io:**
```bash
npm install -g flyctl
fly auth login
fly launch
fly deploy
```

**Railway:**
```bash
npm install -g railway
railway login
railway init
railway up
```

**Render:**
- Connect GitHub repo at https://dashboard.render.com
- Auto-deploys on push

See [PRODUCTION_DEPLOYMENT.md](./PRODUCTION_DEPLOYMENT.md) for detailed guides.

## 📚 Documentation

- [PRODUCTION_DEPLOYMENT.md](./PRODUCTION_DEPLOYMENT.md) - Deploy to production
- [SECURITY_HARDENING.md](./SECURITY_HARDENING.md) - Security checklist
- [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) - Pre-launch verification

## 📄 License

MIT License

---

**Status**: ✅ Production Ready  
**Version**: 1.0.0  
**Last Updated**: 2026-07-07
