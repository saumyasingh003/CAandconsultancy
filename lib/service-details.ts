// Extra CA-perspective content for each service detail page, keyed by service slug.
// NOTE: General information only. Thresholds, due dates and forms change with Budgets and
// CBDT / CBIC / MCA notifications. Review this file at the start of every financial year.

export type ServiceDetail = {
  whoNeeds: string[]
  documents: string[]
  dueDates: { label: string; date: string }[]
  faqs: { q: string; a: string }[]
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'itr-filing': {
    whoNeeds: [
      'Individuals whose total income exceeds the basic exemption limit',
      'Anyone who wants to claim a refund of excess TDS or advance tax',
      'Business owners, professionals and freelancers',
      'People with capital gains, foreign income or foreign assets',
      'Those with specified high-value transactions, such as large bank deposits, foreign travel spend or electricity bills above the prescribed limits',
    ],
    documents: [
      'PAN and Aadhaar (linked)',
      'Form 16 from your employer',
      'AIS / TIS and Form 26AS',
      'Bank statements and interest certificates',
      'Proof of deductions (80C, 80D, home loan interest)',
      'Capital gains statements from broker or mutual funds',
      'Rent receipts or rental income details',
      'Last year’s ITR acknowledgement',
    ],
    dueDates: [
      { label: 'ITR for individuals not requiring audit', date: '31 July' },
      { label: 'ITR for taxpayers requiring tax audit', date: '31 October' },
      { label: 'Belated or revised return', date: '31 December' },
    ],
    faqs: [
      {
        q: 'Which ITR form applies to me?',
        a: 'Broadly, ITR-1 suits resident individuals with salary, one house property and other simple income up to ₹50 lakh; ITR-2 covers capital gains or more than one house property; ITR-3 is for business or professional income; and ITR-4 is for presumptive income. The right form depends on your exact income sources.',
      },
      {
        q: 'What happens if I miss the due date?',
        a: 'You can still file a belated return, but a late fee under Section 234F applies (up to ₹5,000, or ₹1,000 if total income is up to ₹5 lakh), along with interest on any unpaid tax. Some losses also cannot be carried forward.',
      },
      {
        q: 'Should I choose the old or the new tax regime?',
        a: 'The new regime is the default and offers lower slab rates with fewer deductions. The old regime can still work out better if you claim large deductions such as 80C, 80D, HRA and home loan interest. A side-by-side calculation is the only reliable way to decide.',
      },
    ],
  },

  'gst-registration-returns': {
    whoNeeds: [
      'Suppliers of goods with aggregate turnover above ₹40 lakh (₹20 lakh in some states)',
      'Service providers with aggregate turnover above ₹20 lakh (₹10 lakh in some states)',
      'Businesses making inter-state supplies of goods',
      'Sellers on e-commerce platforms',
      'Anyone liable to pay tax under reverse charge',
    ],
    documents: [
      'PAN of the business or proprietor',
      'Aadhaar and photograph of proprietor / partners / directors',
      'Proof of business address (electricity bill, rent agreement or NOC)',
      'Bank account proof (cancelled cheque or statement)',
      'Partnership deed or certificate of incorporation, where applicable',
      'Sales and purchase invoices for return filing',
    ],
    dueDates: [
      { label: 'GSTR-1 (monthly filers)', date: '11th of next month' },
      { label: 'GSTR-3B (monthly filers)', date: '20th of next month' },
      { label: 'GSTR-1 under QRMP (quarterly)', date: '13th after the quarter' },
      { label: 'GSTR-3B under QRMP (Bihar)', date: '24th after the quarter' },
      { label: 'GSTR-9 annual return', date: '31 December' },
    ],
    faqs: [
      {
        q: 'What is the composition scheme?',
        a: 'Small taxpayers can pay GST at a low fixed rate on turnover and file simpler returns. In most states the limit is ₹1.5 crore for goods (₹50 lakh for most service providers). The trade-off is that you cannot claim input tax credit, cannot charge GST on invoices and cannot make inter-state outward supplies.',
      },
      {
        q: 'What if I file GST returns late?',
        a: 'A late fee is charged for each day of delay, and interest at 18% per year applies on tax paid late. Repeated non-filing can lead to blocking of e-way bills and even cancellation of registration.',
      },
      {
        q: 'Can I register voluntarily below the threshold?',
        a: 'Yes. Voluntary registration lets you claim input tax credit and sell to GST-registered businesses more easily, but once registered you must file returns regularly even if there is no turnover.',
      },
    ],
  },

  'tax-planning': {
    whoNeeds: [
      'Salaried individuals deciding between the old and new regimes',
      'High-income earners and business owners',
      'Investors with capital gains from shares, mutual funds or property',
      'Taxpayers who must pay advance tax',
      'Anyone who has received a notice from the Income Tax Department',
    ],
    documents: [
      'Salary structure or latest payslips',
      'Previous year’s ITR and computation',
      'Investment, insurance and loan statements',
      'Capital gains statements',
      'Copy of the notice, if any, with the e-filing portal reference',
    ],
    dueDates: [
      { label: 'Advance tax: 1st instalment (15%)', date: '15 June' },
      { label: 'Advance tax: 2nd instalment (45%)', date: '15 September' },
      { label: 'Advance tax: 3rd instalment (75%)', date: '15 December' },
      { label: 'Advance tax: final instalment (100%)', date: '15 March' },
      { label: 'Last date for tax-saving investments', date: '31 March' },
    ],
    faqs: [
      {
        q: 'Who has to pay advance tax?',
        a: 'Anyone whose tax liability for the year, after TDS, is ₹10,000 or more. Resident senior citizens without business or professional income are exempt. Missing instalments attracts interest under Sections 234B and 234C.',
      },
      {
        q: 'Is tax planning the same as tax avoidance?',
        a: 'No. Tax planning means using the deductions, exemptions and options the law itself provides, such as choosing the right regime or timing investments. It is fully legal and expected of every taxpayer.',
      },
      {
        q: 'I received an income tax notice. Is it serious?',
        a: 'Many notices are routine, such as an intimation under Section 143(1) or a defective return notice under Section 139(9). Others need a careful, documented reply. Always check the deadline on the notice and respond through the e-filing portal in time.',
      },
    ],
  },

  'audit-assurance': {
    whoNeeds: [
      'Businesses with turnover above ₹1 crore (₹10 crore if cash transactions are within 5%)',
      'Professionals with gross receipts above ₹50 lakh (₹75 lakh if cash receipts are within 5%)',
      'Businesses opting out of presumptive taxation in specified cases',
      'All companies: statutory audit is mandatory regardless of turnover',
      'LLPs with turnover above ₹40 lakh or contribution above ₹25 lakh',
    ],
    documents: [
      'Books of accounts and ledgers',
      'Bank statements for all accounts',
      'Sales and purchase registers',
      'Fixed asset register',
      'GST and TDS returns filed during the year',
      'Loan statements and balance confirmations',
      'Stock statements and inventory records',
    ],
    dueDates: [
      { label: 'Tax audit report (Form 3CA / 3CB & 3CD)', date: '30 September' },
      { label: 'ITR for audit cases', date: '31 October' },
      { label: 'Company AGM (adopting audited accounts)', date: 'Within 6 months of year-end' },
    ],
    faqs: [
      {
        q: 'What is the penalty for not getting a tax audit done?',
        a: 'Under Section 271B, the penalty can be 0.5% of turnover or gross receipts, up to a maximum of ₹1.5 lakh, unless there is a reasonable cause.',
      },
      {
        q: 'What is the difference between a statutory audit and a tax audit?',
        a: 'A statutory audit under the Companies Act checks whether the financial statements give a true and fair view. A tax audit under Section 44AB checks compliance with income tax provisions and reports specified details in Form 3CD. A company may need both.',
      },
      {
        q: 'Why consider an internal audit if it is not mandatory?',
        a: 'An internal audit helps spot leakages, errors and weak controls early, which improves cash flow and makes the statutory audit smoother.',
      },
    ],
  },

  'accounting-bookkeeping': {
    whoNeeds: [
      'Businesses and professionals required to maintain books under Section 44AA',
      'GST-registered businesses that must reconcile returns with books',
      'Companies and LLPs, which must maintain books under law',
      'Businesses planning to apply for bank loans or funding',
    ],
    documents: [
      'Sales and purchase invoices',
      'Bank statements and payment records',
      'Expense bills and vouchers',
      'Payroll and salary records',
      'Loan and EMI statements',
      'Opening balances or last year’s financial statements',
    ],
    dueDates: [
      { label: 'Monthly book closing (aligned with GST)', date: 'Before the 11th' },
      { label: 'TDS return for April–June', date: '31 July' },
      { label: 'TDS return for July–September', date: '31 October' },
      { label: 'TDS return for October–December', date: '31 January' },
      { label: 'TDS return for January–March', date: '31 May' },
    ],
    faqs: [
      {
        q: 'Why should a small business keep proper books?',
        a: 'Proper books are needed for accurate tax and GST filings, make audits and loan applications easier, and show you which parts of the business are actually profitable.',
      },
      {
        q: 'How long should accounting records be kept?',
        a: 'Generally for at least 6 years from the end of the relevant assessment year under income tax, and for 8 years for companies under the Companies Act. Longer if any proceedings are pending.',
      },
      {
        q: 'Can bookkeeping be done if I only have bank statements?',
        a: 'Yes, books can be reconstructed from bank statements, invoices and bills, though it takes longer. Regular monthly bookkeeping is far easier and cheaper than catching up at year-end.',
      },
    ],
  },

  'company-llp-registration': {
    whoNeeds: [
      'Startups planning to raise investment: Private Limited Company',
      'Professionals and small partnerships wanting limited liability: LLP',
      'Solo founders who want a company structure: One Person Company (OPC)',
      'Growing proprietorships or partnerships ready to formalise',
    ],
    documents: [
      'PAN and Aadhaar of all directors / partners',
      'Passport-size photographs',
      'Address proof (recent bank statement or utility bill)',
      'Registered office proof (utility bill plus rent agreement or NOC)',
      'Digital Signature Certificates (DSC)',
      'Proposed names and business objectives',
    ],
    dueDates: [
      { label: 'LLP Form 11 (annual return)', date: '30 May' },
      { label: 'Company AGM', date: 'By 30 September' },
      { label: 'LLP Form 8 (statement of accounts)', date: '30 October' },
      { label: 'Company AOC-4 (financial statements)', date: 'Within 30 days of AGM' },
      { label: 'Company MGT-7 (annual return)', date: 'Within 60 days of AGM' },
    ],
    faqs: [
      {
        q: 'How many people do I need to start a company or LLP?',
        a: 'A Private Limited Company needs at least 2 directors and 2 shareholders, an LLP needs at least 2 designated partners, and an OPC can be formed by a single person. There is no minimum capital requirement.',
      },
      {
        q: 'What are the main steps in incorporation?',
        a: 'Obtain DSCs, reserve the name, file the incorporation form (SPICe+ for companies, FiLLiP for LLPs) with the required documents, and receive the certificate of incorporation along with PAN and TAN.',
      },
      {
        q: 'What compliance continues after registration?',
        a: 'Companies hold board meetings and an AGM and file annual returns and financial statements with the ROC. LLPs file Form 11 and Form 8 every year. Income tax returns, and GST returns if registered, are also required.',
      },
    ],
  },

  'financial-advisory': {
    whoNeeds: [
      'Businesses applying for bank loans or working-capital limits',
      'Entrepreneurs preparing project reports for new ventures or schemes',
      'Growing businesses that need budgeting and cash-flow planning',
      'Owners deciding on the right business structure',
    ],
    documents: [
      'Financial statements for the last 2–3 years',
      'ITRs for the last 2–3 years',
      'Bank statements',
      'Details of existing loans and EMIs',
      'Project details, cost estimates and quotations',
    ],
    dueDates: [
      { label: 'Annual budget for the new financial year', date: 'Before 1 April' },
      { label: 'Loan renewal / stock statements', date: 'As per bank terms' },
      { label: 'Quarterly review of cash flow and targets', date: 'Every quarter' },
    ],
    faqs: [
      {
        q: 'What is a project report and when is it needed?',
        a: 'A project report sets out the business plan, costs, funding and projected profits. Banks and many government schemes require one before sanctioning a loan or subsidy.',
      },
      {
        q: 'Why does cash-flow planning matter if the business is profitable?',
        a: 'A profitable business can still run short of cash if customers pay late or stock builds up. Planning cash flow helps you meet salaries, taxes and EMIs on time.',
      },
      {
        q: 'Which documents improve my chances of getting a business loan?',
        a: 'Up-to-date financial statements, regular ITR and GST filings, clean bank statements and a realistic projection all strengthen a loan application.',
      },
    ],
  },
}
