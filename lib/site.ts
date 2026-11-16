// Shared site details used across the navbar, footer and pages.
export const site = {
  name: 'CA Sudhanshu Martand',
  shortName: 'Sudhanshu Martand', // shown next to the "CA" logo
  tagline: 'Chartered Accountants',
  headline: 'Your Trusted Partner in Financial & Tax Solutions',
  closing: 'Let’s Build Your Financial Future Together!',
  about:
    'A Chartered Accountancy firm based in Patna, offering income tax, GST, audit, accounting, company registration and financial advisory services to individuals and businesses.',
  phones: ['7909003464', '8651477026'],
  address: [
    '403, 4th Floor, Surya Laxmi Enclave,',
    'Behind Amity University, Near DPS More,',
    'Priyadarshi Nagar, Patna, Bihar – 801503',
  ],
  // Add profile URLs here to show the icons in the footer; empty ones are hidden.
  social: {
    linkedin: '',
    x: '',
    youtube: '',
    facebook: '',
  },
}

export const services = [
  {
    slug: 'itr-filing',
    title: 'Income Tax Return (ITR) Filing',
    text: 'Accurate and timely ITR filing for salaried individuals, professionals and businesses, with the right form, every deduction you are entitled to and no last-minute stress.',
    points: [
      'Salaried, business & professional ITRs',
      'Capital gains, rental & other income',
      'Refund follow-up and revised returns',
      'Old vs new tax regime comparison',
    ],
  },
  {
    slug: 'gst-registration-returns',
    title: 'GST Registration & Return Filing',
    text: 'From new registration to monthly and annual returns, your GST compliance handled on time.',
    points: ['New registration & amendments', 'GSTR-1, GSTR-3B & annual returns', 'Input tax credit reconciliation'],
  },
  {
    slug: 'tax-planning',
    title: 'Tax Planning & Consultancy',
    text: 'Smart, compliant planning to reduce your tax burden and handle notices with confidence.',
    points: ['Tax-saving investment planning', 'Advance tax estimates', 'Replies to notices & assessments'],
  },
  {
    slug: 'audit-assurance',
    title: 'Audit & Assurance',
    text: 'Statutory, tax and internal audits with clear and actionable reporting.',
    points: ['Tax audit under Section 44AB', 'Statutory & internal audits', 'Internal control reviews'],
  },
  {
    slug: 'accounting-bookkeeping',
    title: 'Accounting & Bookkeeping',
    text: 'Well-maintained books and financial statements, kept up to date all year.',
    points: ['Day-to-day bookkeeping', 'Bank reconciliation & ledgers', 'Profit & loss and balance sheet'],
  },
  {
    slug: 'company-llp-registration',
    title: 'Company & LLP Registration',
    text: 'End-to-end registration of companies and LLPs, with ongoing compliance support.',
    points: ['Private Limited, OPC & LLP set-up', 'PAN, TAN & GST after incorporation', 'Annual ROC filings'],
  },
  {
    slug: 'financial-advisory',
    title: 'Financial Advisory',
    text: 'Practical guidance on budgeting, loans and business growth.',
    points: ['Budgeting & cash-flow planning', 'Loan & project report support', 'Business structuring advice'],
  },
]

// Home-page stats band.
// TODO: PLACEHOLDER NUMBERS. Replace with CA Sudhanshu Martand's real figures before going live.
export const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Individual Clients' },
  { value: '1000+', label: 'Returns Filed' },
  { value: '50+', label: 'Businesses Served' },
]
