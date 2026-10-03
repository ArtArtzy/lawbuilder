export const article2_1 = {
  number: "2.1",
  title: "Definitions",
  description:
    "This Article sets out the key terms on which the Module’s option texts depend.",
  nextArticle: "2.2",
  introText: "For the purposes of this Module:",
  entryLabel: "(a) covered person means:",
  options: [
    {
      code: "A",
      label: "Option A",
      title: "Covered person — CPTPP-style",
      summary:
        "Uses investment and service-supplier concepts from a wider agreement.",
      bestFor: "Wider agreement",
      financialScope: "Excludes financial firms",
      source: "CPTPP (Article 14.1)",
      legalText: `Article 2.1 \u2014 Definitions

For the purposes of this Module:

(a) covered person means:

(i) a covered investment as defined in
[Module 0, Article 0.3, or the investment chapter of the adopting agreement];

(ii) an investor of a Party as defined in
[Module 0, Article 0.3 (General Definitions), or the investment chapter of the adopting agreement],
but does not include an investor in a financial institution; or

(iii) a service supplier of a Party as defined in
[Module 0, Article 0.3, or the services chapter of the adopting agreement],
but does not include a \u201cfinancial institution\u201d
or a \u201ccross-border financial service supplier of a Party\u201d.

(b) financial institution means any financial intermediary or other enterprise
that is authorized to do business and regulated or supervised as a financial institution
under the law of the Party in whose territory it is located;

(c) financial service supplier of a Party means a person of a Party that is engaged
in the business of supplying a financial service within the territory of that Party; and

(d) cross-border financial service supplier of a Party means a person of a Party
that is engaged in the business of supplying a financial service within the territory
of the Party and that seeks to supply or supplies a financial service through the
cross-border supply of such a service.`,
      badge: "Requires wider agreement",
    },
    {
      code: "B",
      label: "Option B",
      title: "Covered person — standalone-style",
      summary:
        "Defines covered persons directly and is easier to use as a standalone module.",
      bestFor: "Standalone use",
      financialScope: "Broader scope",
      source: "Model provision (UNESCAP)",
      legalText: `Article 2.1 \u2014 Definitions

For the purposes of this Module:

(a) covered person means:

(i) a natural person of a Party engaged in activities covered by this Agreement; and

(ii) an enterprise constituted or organized under the laws of a Party.

(b) financial institution means any financial intermediary or other enterprise that is authorized to do business and regulated or supervised as a financial institution under the law of the Party in whose territory it is located;

(c) financial service supplier of a Party means a person of a Party that is engaged in the business of supplying a financial service within the territory of that Party; and 

(d) cross-border financial service supplier of a Party means a person of a Party that is engaged in the business of supplying a financial service within the territory of the Party and that seeks to supply or supplies a financial service through the cross-border supply of such a service.`,
      badge: "Standalone-friendly",
    },
  ],
  commonDefinitions: [
    {
      number: "1",
      text: "For the purposes of this Agreement, the following terms shall have the meanings set out below:",
    },
    {
      number: "(a)",
      text: "“covered person” means a natural or juridical person of a Party;",
    },
    { number: "(b)", text: "“natural person” means an individual;" },
    {
      number: "(c)",
      text: "“juridical person” means any entity constituted or otherwise organized under the applicable law, whether for profit or not-for-profit purposes;",
    },
    { number: "(d)", text: "“Party” means a Party to this Agreement." },
  ],
  remainingArticles: [
    {
      number: "2.2",
      title: "Cross-Border Transfer of Information by Electronic Means",
    },
    { number: "2.3", title: "Location of Computing Facilities" },
    { number: "2.4", title: "Financial Data" },
    { number: "2.5", title: "Cooperation and Review on Data Governance" },
  ],
};
