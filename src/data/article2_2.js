export const article2_2 = {
  number: "2.2",
  title: "Cross-Border Transfer of Information by Electronic Means",
  currentArticleBadge: "Current article",
  description: "Choose one option for cross-border data flows in this module.",
  selectionMode: "single",
  nextArticle: "2.3",
  nextArticleTitle: "Location of Computing Facilities",
  remainingArticles: [
    { number: "2.3", title: "Location of Computing Facilities" },
    { number: "2.4", title: "Financial Data" },
    { number: "2.5", title: "Cooperation and Review on Data Governance" },
  ],
  options: [
    {
      code: "A",
      label: "Option A",
      title: "Transfer guarantee with a reviewable public-policy exception",
      summary: "Allows cross-border data transfers for covered persons, with a public-policy exception that remains reviewable.",
      bestFor: "Stronger enforceable commitment",
      financialScope: "Depends on Article 2.1 / Article 2.4 choice",
      source: "CPTPP Article 14.11",
      legalText: `Article 2.2 — Cross-Border Transfer of Information by Electronic Means

1. The Parties recognize that each Party may have its own regulatory requirements concerning the transfer of information by electronic means.

2. Each Party shall allow the cross-border transfer of information by electronic means, including personal information, when this activity is for the conduct of the business of a covered person [as defined in Module 2, Article 2.1 (Definitions)].

3. Nothing in this Article shall prevent a Party from adopting or maintaining measures inconsistent with paragraph 2 to achieve a legitimate public policy objective, provided that the measure:
(a) is not applied in a manner which would constitute a means of arbitrary or unjustifiable discrimination or a disguised restriction on trade; and
(b) does not impose restrictions on transfers of information greater than are required to achieve the objective.`,
    },
    {
      code: "B",
      label: "Option B",
      title: "Transfer guarantee with a self-judging exception",
      summary: "Allows cross-border data transfers, but exceptions are largely self-judging and dispute settlement is excluded or delayed.",
      bestFor: "More regulatory flexibility",
      financialScope: "Depends on Article 2.1 / Article 2.4 choice",
      source: "RCEP Article 12.15",
      legalText: `Article 2.2 — Cross-Border Transfer of Information by Electronic Means

1. The Parties recognize that each Party may have its own regulatory requirements concerning the transfer of information by electronic means.

2. A Party shall not prevent cross-border transfer of information by electronic means where such activity is for the conduct of the business of a covered person [as defined in Module 2, Article 2.1 (Definitions)].

3. Nothing in this Article shall prevent a Party from adopting or maintaining:
(a) any measure inconsistent with paragraph 2 that it considers necessary to achieve a legitimate public policy objective, provided that the measure is not applied in a manner which would constitute a means of arbitrary or unjustifiable discrimination or a disguised restriction on trade; or
(b) any measure that it considers necessary for the protection of its essential security interests. Such measures shall not be disputed by other Parties.

4. Dispute settlement under [Module 0, Article 0.12 (Application of Dispute Settlement)] shall not apply to this Article [for a period of [X years] after the date of entry into force of this Agreement, or, in relation to [specified Parties], indefinitely, subject to review].`,
    },
    {
      code: "C",
      label: "Option C",
      title: "A list of banned measures, with a mandatory periodic review",
      summary: "Prohibits a closed list of specific restrictions on cross-border transfers and requires periodic review.",
      bestFor: "High precision and closed-list discipline",
      financialScope: "Set separately under Article 2.4",
      source: "EU-Singapore DTA Article 5",
      legalText: `Article 2.2 — Cross-Border Transfer of Information by Electronic Means

1. The Parties are committed to ensuring the cross-border transfer of data by electronic means where this activity is for the conduct of the business of a covered person [as defined in Module 2, Article 2.1 (Definitions)].

2. To that end, a Party shall not adopt or maintain measures which prohibit or restrict the cross-border transfer of data set out in paragraph 1 by:
(a) requiring the use of computing facilities or network elements in the Party's territory for processing of data;
(b) requiring the localization of data in the Party's territory for storage or processing;
(c) prohibiting storage or processing of data in the territory of the other Party;
(d) making the cross-border transfer of data contingent upon use of computing facilities or network elements in the Party's territory or upon localization requirements in the Party's territory;
(e) prohibiting the transfer of data into the territory of the Party; or
(f) requiring the approval of the Party prior to the transfer of data to the territory of the other Party.

3. The Parties shall keep the implementation of this provision under review and assess its functioning within [three years] of the entry into force of this Agreement.

4. Nothing in this Article shall prevent a Party from adopting or maintaining a measure inconsistent with paragraph 2 to achieve a legitimate public policy objective, provided that the measure:
(a) is not applied in a manner which would constitute a means of arbitrary or unjustifiable discrimination or a disguised restriction on trade; and
(b) does not impose restrictions on transfers of information greater than are necessary to achieve the objective.`,
    },
    {
      code: "D",
      label: "Option D",
      title: "Transfer guarantee conditioned on data-protection standards",
      summary: "Allows transfers only subject to an annex on cross-border data transfers and agreed data-protection conditions.",
      bestFor: "Linking data flows with privacy protection",
      financialScope: "Follows wider module design",
      source: "AfCFTA Digital Trade Protocol Article 20",
      legalText: `Article 2.2 — Cross-Border Transfer of Information by Electronic Means

1. State Parties shall, subject to an Annex on Cross-Border Data Transfers, allow the cross-border transfer of data, including personal data, by electronic means, provided the activity is for the conduct of digital trade by a person of a State Party.

2. For greater certainty, a State Party may adopt or maintain measures inconsistent with paragraph 1 to achieve a legitimate public policy objective or protect essential security interests, provided that the measures are not applied in a manner which would constitute a means of arbitrary or unjustifiable discrimination, or a disguised restriction on digital trade, and do not impose restrictions on transfers of data greater than are necessary to achieve the objective.

3. The Annex on Cross-Border Data Transfers shall, among others, set out legitimate public policy objectives, how data may be used, restrictions on sharing of data to third parties, including data protection regulations and restrictions that may be applied by regulators.`,
    },
    {
      code: "E",
      label: "Option E",
      title: "No transfer obligation: an affirmation of importance, with a review path",
      summary: "Soft language only. No binding transfer obligation yet, but keeps the issue on a review track.",
      bestFor: "Low-commitment transitional approach",
      financialScope: "Set separately",
      source: "ASEAN Agreement on Electronic Commerce Article 7.4",
      legalText: `Article 2.2 — Cross-Border Transfer of Information by Electronic Means

1. The Parties recognize the importance of allowing information to flow across borders through electronic means, provided that such information shall be used for business purposes, and subject to their respective laws and regulations.

2. The Parties agree to facilitate cross-border digital trade by working towards eliminating or minimizing barriers to the flow of information across borders, including personal information, subject to appropriate safeguards to ensure security and confidentiality of information, and when other legitimate public policy objectives so dictate.

3. The Parties shall review the operation of this Article within [X] years of the date of entry into force of this Agreement, with a view to the progressive development of commitments on the cross-border transfer of information.`,
    },
  ],
};
