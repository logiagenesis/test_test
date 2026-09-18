# BPO Accelerator Platform

A profit-first BPO operating system for finding clients, closing deals, and tracking profit.

## Features (MVP)

- **Dashboard** - Overview of leads, deals, revenue, profit, clients, and vendors
- **Lead Management** - Track and score leads with AI audit capability
- **Deal Pipeline** - CRM-style pipeline from lead to closed deal
- **Vendor Marketplace** - Manage vendors and assign to projects
- **Profit Tracking** - Real-time margin and profitability dashboard

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Database**: PostgreSQL with Prisma ORM
- **AI**: OpenAI API integration ready
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd bpo-accelerator-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values:
- `DATABASE_URL`: Your PostgreSQL connection string
- `OPENAI_API_KEY`: Your OpenAI API key (for AI features)

4. Set up the database:
```bash
npx prisma migrate dev
npx prisma generate
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the platform.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── dashboard/        # Main dashboard
│   ├── leads/            # Lead management
│   ├── deals/            # Deal pipeline
│   ├── vendors/          # Vendor marketplace
│   ├── clients/          # Client management
│   └── proposals/        # Proposal builder
├── lib/                  # Utilities and Prisma client
│   ├── prisma.ts         # Prisma client instance
│   └── utils.ts          # Utility functions
└── components/           # Reusable React components
prisma/
└── schema.prisma         # Database schema
```

## Database Schema

The platform includes models for:
- Users & Workspaces
- Leads & Deals
- Clients & Vendors
- Services & Offers
- Proposals & Projects
- Tasks & QA Reviews
- KPIs & Invoices
- Templates & AI Outputs

## Roadmap

### Phase 1 (Current MVP)
- ✅ Dashboard with demo data
- ✅ Lead management UI
- ✅ Basic navigation
- ✅ Database schema

### Phase 2 (Next)
- [ ] AI website audit feature
- [ ] Offer/pricing builder
- [ ] Outreach email generator
- [ ] Proposal generator
- [ ] Vendor assignment workflow

### Phase 3 (Advanced)
- [ ] Client portal
- [ ] SLA/KPI tracking
- [ ] Profit analytics
- [ ] Automated reporting
- [ ] Integration with job platforms

## Contributing

This is a private project. Contact the maintainer for access.

## License

Proprietary - All rights reserved.
