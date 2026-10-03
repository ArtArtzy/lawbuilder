export const article2_4 = {
  number: "2.4",
  title: "Financial Data",
  description: "Choose one option on how financial-sector data should be treated.",
  nextArticle: "2.5",
  nextArticleTitle: "Cooperation and Review on Data Governance",
  remainingArticles: [
    { number: "2.5", title: "Cooperation and Review on Data Governance" },
  ],
  options: [
    {
      code: "A",
      label: "Option A",
      title: "Facilities ban conditioned on regulator access, with remediation",
      summary: "No local-facilities requirement for covered financial persons if regulators keep full access to the data.",
      bestFor: "Binding supervisory-access model",
      financialScope: "Dedicated financial-data regime",
      source: "SADEA Article 25",
      legalText: `Article 2.4 - Financial Data

1. For the purposes of this Article, for a Party ("the relevant Party"), a "covered financial person" means:
(a) a "financial institution", as defined in [Module 2, Article 2.1 (Definitions), or the financial services chapter of the adopting agreement], including a branch, located in the territory of the relevant Party that is controlled by persons of either Party; or
(b) a "cross-border financial service supplier of a Party", as defined in [Module 2, Article 2.1 (Definitions), or the financial services chapter of the adopting agreement], that is subject to regulation, supervision, licensing, authorization, or registration by a financial regulatory authority of the relevant Party.

2. Neither Party shall require a covered financial person to use or locate computing facilities in the Party's territory as a condition for conducting business in that territory, provided that the Party's financial regulatory authorities have immediate, direct, complete and ongoing access to information processed or stored on computing facilities that the covered financial person uses or locates outside the Party's territory.

3. Each Party shall, to the extent practicable, provide a covered financial person with a reasonable opportunity to remediate any lack of access before the Party requires local computing facilities.`,
    },
    {
      code: "B",
      label: "Option B",
      title: "Endeavour toward access-conditioned offshoring",
      summary: "Uses the same regulatory-access model as Option A, but as an endeavour rather than a binding rule.",
      bestFor: "Soft transition toward Option A",
      financialScope: "Dedicated financial-data regime",
      source: "KSDPA Article 14.16",
      legalText: `Article 2.4 - Financial Data

1. For the purposes of this Article, for a Party ("the relevant Party"), "covered financial person" means:
(a) a "financial institution", as defined in [Module 2, Article 2.1 (Definitions), or the financial services chapter of the adopting agreement], including a branch, located in the territory of the relevant Party that is controlled by persons of either Party; or
(b) a "financial service supplier of a Party", as defined in [Module 2, Article 2.1 (Definitions), or the financial services chapter of the adopting agreement], that is subject to regulation, supervision, licensing, authorization, or registration by a financial regulatory authority of the relevant Party.

2. The Parties recognize that immediate, direct, complete, and ongoing access by a Party's financial regulatory authorities to information of covered financial persons is critical to financial regulation and supervision.

3. The Parties recognize that the ability of covered financial persons to aggregate, store, process and transmit data across borders is critical to the development of the Parties' financial sectors.

4. To this end, the Parties shall endeavour to:
(a) share experiences and views relating to rules that can allow such access without requiring local facilities; and
(b) identify, develop, and promote joint initiatives to facilitate offshore use of computing facilities while preserving regulator access.`,
    },
    {
      code: "C",
      label: "Option C",
      title: "Transfers-only guarantee for financial institutions",
      summary: "Guarantees the movement of financial information for ordinary-course processing, but does not prohibit localization.",
      bestFor: "Protecting transfers only",
      financialScope: "Financial institutions covered separately",
      source: "CPTPP Annex 11-B Section B",
      legalText: `Article 2.4 - Financial Data

1. Each Party shall allow a financial institution of another Party to transfer information in electronic or other form, into and out of its territory, for data processing if such processing is required in the institution's ordinary course of business. Nothing in this Section restricts the right of a Party to adopt or maintain measures to:
(a) protect personal data, personal privacy and the confidentiality of individual records and accounts; or
(b) require a financial institution to obtain prior authorization from the relevant regulator to designate a particular enterprise as a recipient of such information, based on prudential considerations, provided that this right is not used as a means of avoiding the Party's commitments or obligations under this Section.`,
    },
    {
      code: "D",
      label: "Option D",
      title: "Full inclusion under the data articles, with prudential protection",
      summary: "Keeps financial firms inside the general data-flow and localization articles, protected by a prudential carve-out.",
      bestFor: "One regime for all sectors",
      financialScope: "Financial sector stays inside Articles 2.2 and 2.3",
      source: "EU-Korea DTA Article 27",
      legalText: `Article 2.4 - Financial Data

1. Notwithstanding any other provisions of this Agreement, a Party shall not be prevented from taking measures for prudential reasons, including:
(a) the protection of investors, depositors, policy-holders or persons to whom a fiduciary obligation is owed by a financial service supplier; or
(b) ensuring the integrity and stability of a Party's financial system.

2. Where such measures do not conform with the provisions of this Agreement, they shall not be used as a means of avoiding the Party's commitments or obligations under this Agreement.

3. Nothing in this Agreement shall be construed to require a Party to disclose information relating to the affairs and accounts of individual consumers or any confidential or proprietary information in the possession of public entities.`,
    },
    {
      code: "E",
      label: "Option E",
      title: "Exclusion of financial services, with no substitute regime",
      summary: "Financial services are carved out from the agreement altogether.",
      bestFor: "Maximum regulatory freedom",
      financialScope: "Financial services excluded",
      source: "DEPA Article 1.1(2)(b)",
      legalText: `Article 2.4 - Financial Data

[This option is adopted as a scope provision, not as a substantive financial-data article.]

1. This Agreement shall not apply:
(b) except for [the electronic payments article], to financial services.`,
    },
  ],
};
