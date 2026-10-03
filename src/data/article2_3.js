export const article2_3 = {
  number: "2.3",
  title: "Location of Computing Facilities",
  description: "Choose one option on localization and computing-facilities requirements.",
  nextArticle: "2.4",
  nextArticleTitle: "Financial Data",
  remainingArticles: [
    { number: "2.4", title: "Financial Data" },
    { number: "2.5", title: "Cooperation and Review on Data Governance" },
  ],
  options: [
    { code: "A", label: "Option A", title: "Facilities ban with a reviewable public-policy exception", summary: "Prohibits requiring local computing facilities, with a reviewable public-policy exception.", bestFor: "Strong anti-localization commitment", financialScope: "Depends on Article 2.1 / 2.4 design", source: "CPTPP Article 14.13", legalText: `Article 2.3 — Location of Computing Facilities

1. The Parties recognize that each Party may have its own regulatory requirements regarding the use of computing facilities, including requirements that seek to ensure the security and confidentiality of communications.

2. No Party shall require a covered person [as defined in Module 2, Article 2.1 (Definitions)] to use or locate computing facilities in that Party's territory as a condition for conducting business in that territory.

3. Nothing in this Article shall prevent a Party from adopting or maintaining measures inconsistent with paragraph 2 to achieve a legitimate public policy objective, provided that the measure:
(a) is not applied in a manner which would constitute a means of arbitrary or unjustifiable discrimination or a disguised restriction on trade; and
(b) does not impose restrictions on the use or location of computing facilities greater than are required to achieve the objective.` },
    { code: "B", label: "Option B", title: "Facilities ban with a self-judging exception", summary: "Same anti-localization rule as Option A, but with a self-judging exception and limited dispute settlement.", bestFor: "More government discretion", financialScope: "Depends on Article 2.1 / 2.4 design", source: "RCEP Article 12.14", legalText: `Article 2.3 — Location of Computing Facilities

1. The Parties recognize that each Party may have its own measures regarding the use or location of computing facilities, including requirements that seek to ensure the security and confidentiality of communications.

2. No Party shall require a covered person [as defined in Module 2, Article 2.1 (Definitions)] to use or locate computing facilities in that Party's territory as a condition for conducting business in that Party's territory.

3. Nothing in this Article shall prevent a Party from adopting or maintaining:
(a) any measure inconsistent with paragraph 2 that it considers necessary to achieve a legitimate public policy objective, provided that the measure is not applied in a manner which would constitute a means of arbitrary or unjustifiable discrimination or a disguised restriction on trade; or
(b) any measure that it considers necessary for the protection of its essential security interests.

4. Dispute settlement under [Module 0, Article 0.12 (Application of Dispute Settlement)] shall not apply to this Article [for a period of [X years] ...].` },
    { code: "C", label: "Option C", title: "Facilities ban as a closed list of prohibited measures", summary: "Uses a closed list of prohibited localization-type measures plus a mandatory review.", bestFor: "Closed-list discipline", financialScope: "Financial treatment must be settled separately", source: "EU-Singapore DTA Article 5 (adapted)", legalText: `Article 2.3 — Location of Computing Facilities

1. The Parties are committed to ensuring that data used for the conduct of the business of a covered person [as defined in Module 2, Article 2.1 (Definitions)] may be stored and processed without a requirement that computing facilities be located in the territory of a Party.

2. To that end, a Party shall not adopt or maintain measures which prohibit or restrict the storage or processing of data referred to in paragraph 1 by:
(a) requiring the use of computing facilities or network elements in the Party's territory for processing of data;
(b) requiring the localization of data in the Party's territory for storage or processing;
(c) prohibiting storage or processing of data in the territory of the other Party; or
(d) making the cross-border transfer of data contingent upon use of computing facilities or network elements in the Party's territory or upon localization requirements in the Party's territory.

3. The Parties shall keep the implementation of this Article under review and assess its functioning within [three years] of the entry into force of this Agreement.

4. Nothing in this Article shall prevent a Party from adopting or maintaining a measure inconsistent with paragraph 2 to achieve a legitimate public policy objective, provided that the measure:
(a) is not applied in a manner which would constitute a means of arbitrary or unjustifiable discrimination or a disguised restriction on trade; and
(b) does not impose restrictions on the use or location of computing facilities greater than are necessary to achieve the objective.` },
    { code: "D", label: "Option D", title: "Facilities ban with no exception in the article", summary: "A simple, firm ban on local-facility requirements. Relief comes only from general exceptions elsewhere.", bestFor: "Very clean prohibition", financialScope: "Financial suppliers excluded if Article 2.4 handles them separately", source: "USJDTA Article 12", legalText: `Article 2.3 — Location of Computing Facilities

1. Neither Party shall require a covered person [as defined in Module 2, Article 2.1 (Definitions)] to use or locate computing facilities in that Party's territory as a condition for conducting business in that territory.

2. This Article does not apply with respect to [covered financial service suppliers, which are addressed by Article 2.4 (Financial Data)].` },
    { code: "E", label: "Option E", title: "Facilities ban for new measures, existing measures kept behind a ratchet", summary: "Bans future localization measures, but preserves existing ones and subjects them to a ratchet.", bestFor: "Countries with existing localization rules", financialScope: "Depends on wider design", source: "IA-CEPA Article 13.12", legalText: `Article 2.3 — Location of Computing Facilities

1. The Parties recognize that each Party may have its own regulatory requirements regarding the use of computing facilities, including requirements that seek to ensure the security and confidentiality of communications.

2. Neither Party shall require a covered person [as defined in Module 2, Article 2.1 (Definitions)] to use or locate computing facilities in that Party's territory as a condition for conducting business in that territory, except where such a measure exists at the date of entry into force of this Agreement. A Party may renew such a measure or amend it to make it less trade restrictive, but shall not later make it more trade restrictive again.

3. Nothing in this Article shall prevent a Party from adopting or maintaining measures inconsistent with paragraph 2 to achieve a legitimate public policy objective or protect essential security interests.` },
    { code: "F", label: "Option F", title: "No facilities ban: a soft agreement not to require local facilities", summary: "Soft language only. Does not create a firm anti-localization obligation.", bestFor: "Very low-commitment transitional approach", financialScope: "Set separately", source: "ASEAN Agreement on Electronic Commerce Article 7.6", legalText: `Article 2.3 — Location of Computing Facilities

1. The Parties recognize that each Party may have its own regulatory requirements regarding the use of computing facilities, including requirements that seek to ensure the security and confidentiality of communications.

2. The Parties agree not to require, subject to their respective laws and regulations, a juridical person of another Party and its affiliated companies to locate their computing facilities in the Party's territory as a requirement for operating a business in that territory.

3. The Parties shall review the operation of this Article within [X] years of the date of entry into force of this Agreement, with a view to the progressive development of commitments on the location of computing facilities.` },
  ],
};
