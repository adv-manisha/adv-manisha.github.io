/**
 * ============================================================
 * study-data.js — Centralized Legal Study Hub Registry
 * Advocate Manisha Gandhi & Law Glimpse Academic Initiative
 * ============================================================
 * 
 * HOW TO ADD NEW CONTENT EASILY:
 * ------------------------------------------------------------
 * 1. To add a new Landmark Judgment:
 *    Simply add an object to the `judgments` array below,
 *    or call: window.addLandmarkJudgment({ ... })
 * 
 * 2. To add a new Subject Note:
 *    Add an object to the `notes` array below,
 *    or call: window.addSubjectNote({ ... })
 * 
 * 3. To add a new Recall Trick / Mnemonic:
 *    Add an object to the `tricks` array below,
 *    or call: window.addRecallTrick({ ... })
 * 
 * The system automatically builds the cards, Subject-wise tables,
 * Year-wise tables, court filters, and search indices everywhere!
 */

const STUDY_DATA = {
  // ============================================================
  // 1. LANDMARK JUDGMENTS (Apex Court & State High Courts)
  // ============================================================
  judgments: [
    // --- Constitutional Law ---
    {
      id: "kesavananda-bharati-1973",
      title: "Kesavananda Bharati v. State of Kerala",
      citation: "(1973) 4 SCC 225",
      year: 1973,
      bench: "13-Judge Bench",
      court: "sc",
      courtLabel: "Supreme Court",
      courtType: "sc",
      subject: "constitutional",
      subjectLabel: "Constitutional Law",
      statutory: "Article 368",
      ratio: "Parliament possesses wide constituent power to amend any part of the Constitution under Article 368, but this power does not extend to altering or destroying its Basic Structure.",
      takeaway: "Overruled Golak Nath (1967) while introducing the non-negotiable Basic Structure limitation.",
      bullets: [
        "Overruled Golak Nath while introducing the Basic Structure limitation.",
        "Identified supremacy of Constitution, secularism, democracy, federalism, and judicial review as core unamendable pillars.",
        "Preserved the harmonious balance between Fundamental Rights (Part III) and Directive Principles (Part IV)."
      ],
      pdfUrl: "materials/landmark-judgments/kesavananda-bharati-1973.pdf",
      pdfSize: "1.5 KB",
      keywords: "kesavananda bharati basic structure kerala 368 amendment constitution golak nath"
    },
    {
      id: "puttaswamy-privacy-2017",
      title: "Justice K.S. Puttaswamy (Retd.) v. Union of India",
      citation: "(2017) 10 SCC 1",
      year: 2017,
      bench: "9-Judge Bench",
      court: "sc",
      courtLabel: "Supreme Court",
      courtType: "sc",
      subject: "constitutional",
      subjectLabel: "Constitutional Law",
      statutory: "Article 21 & Part III",
      ratio: "The Right to Privacy is an intrinsic and foundational facet of the Right to Life and Personal Liberty under Article 21, protected across the entire spectrum of Part III freedoms.",
      takeaway: "Unanimously overruled M.P. Sharma and Kharak Singh; formulated the 3-Prong Proportionality Test.",
      bullets: [
        "Unanimously overruled previous rulings in M.P. Sharma (1954) and Kharak Singh (1962).",
        "Formulated the 3-Prong Proportionality Test: Legality (statutory law), Legitimate State Goal, and Proportionality.",
        "Laid the constitutional bedrock for Indian digital rights, surveillance safeguards, and data governance."
      ],
      pdfUrl: "materials/landmark-judgments/puttaswamy-privacy-2017.pdf",
      pdfSize: "1.5 KB",
      keywords: "puttaswamy privacy fundamental right article 21 data protection mp sharma kharak singh"
    },
    {
      id: "navtej-johar-377-2018",
      title: "Navtej Singh Johar v. Union of India",
      citation: "(2018) 10 SCC 1",
      year: 2018,
      bench: "5-Judge Bench",
      court: "sc",
      courtLabel: "Supreme Court",
      courtType: "sc",
      subject: "constitutional",
      subjectLabel: "Constitutional Law",
      statutory: "Articles 14, 15, 19, 21",
      ratio: "Section 377 IPC, in so far as it penalizes consensual sexual activity between adults in private, is unconstitutional. Constitutional Morality supercedes majoritarian popular morality.",
      takeaway: "Affirmed personal identity and equal dignity as non-negotiable constitutional values.",
      bullets: [
        "Decriminalized consensual adult same-sex relationships in private.",
        "Emphasized that Constitutional Morality prevails over popular or social morality.",
        "Extended equality and non-discrimination protection under Articles 14 and 15."
      ],
      pdfUrl: "materials/landmark-judgments/navtej-johar-377-2018.pdf",
      pdfSize: "1.6 KB",
      keywords: "navtej johar 377 constitutional morality equality privacy dignity"
    },
    {
      id: "maneka-gandhi-art21-1978",
      title: "Maneka Gandhi v. Union of India",
      citation: "(1978) 1 SCC 248",
      year: 1978,
      bench: "7-Judge Bench",
      court: "sc",
      courtLabel: "Supreme Court",
      courtType: "sc",
      subject: "constitutional",
      subjectLabel: "Constitutional Law",
      statutory: "Articles 14, 19, 21",
      ratio: "Procedure depriving liberty under Article 21 cannot be arbitrary, fanciful or oppressive; it must be just, fair and reasonable. Part III forms an interrelated 'Golden Triangle'.",
      takeaway: "Imported substantive due process and procedural fairness into Indian constitutional law.",
      bullets: [
        "Held that right to travel abroad is an integral component of personal liberty under Art 21.",
        "Articles 14, 19, and 21 are mutually inclusive and form an indivisible Golden Triangle.",
        "Overruled the formalistic procedure test established in A.K. Gopalan (1950)."
      ],
      pdfUrl: "materials/landmark-judgments/maneka-gandhi-art21-1978.pdf",
      pdfSize: "1.6 KB",
      keywords: "maneka gandhi passport procedure established by law due process golden triangle 21"
    },
    {
      id: "gujarat-hc-kirtikumar-vyas-2022",
      title: "Kirtikumar D. Vyas v. State of Gujarat",
      citation: "2022 SCC OnLine Guj 1450",
      year: 2022,
      bench: "Division Bench",
      court: "hc-gujarat",
      courtLabel: "Gujarat High Court",
      courtType: "hc",
      subject: "constitutional",
      subjectLabel: "Constitutional Law",
      statutory: "Article 226 & 14",
      ratio: "High Court writ review under Article 226 extends to procedural fairness and protection against arbitrary state action in public service and contractual matters.",
      takeaway: "Reiterated natural justice (audi alteram partem) as an unwritten Article 14 command.",
      bullets: [
        "Executive orders entailing civil consequences must strictly satisfy natural justice.",
        "Judicial review extends to procedural propriety and legitimate expectation.",
        "Benchmark Gujarat writ precedent for challenging arbitrary administrative discretion."
      ],
      pdfUrl: "materials/landmark-judgments/gujarat-hc-kirtikumar-vyas-2022.pdf",
      pdfSize: "1.6 KB",
      keywords: "kirtikumar vyas gujarat high court 226 natural justice administrative review audi alteram partem"
    },
    {
      id: "delhi-hc-naz-foundation-2009",
      title: "Naz Foundation v. Govt. of NCT of Delhi",
      citation: "2009 SCC OnLine Del 1662",
      year: 2009,
      bench: "Division Bench",
      court: "hc-delhi",
      courtLabel: "Delhi High Court",
      courtType: "hc",
      subject: "constitutional",
      subjectLabel: "Constitutional Law",
      statutory: "Articles 14, 15, 21",
      ratio: "State cannot penalize personal adult autonomy based solely on public moral disapproval; constitutional inclusivity must prevail.",
      takeaway: "Groundbreaking precursor precedent to Puttaswamy and Navtej Johar.",
      bullets: [
        "Established that constitutional inclusiveness is central to Indian democracy.",
        "Held that public morality cannot be used to extinguish fundamental equality.",
        "Foundational historical benchmark for civil liberties litigation in India."
      ],
      pdfUrl: "materials/landmark-judgments/delhi-hc-naz-foundation-2009.pdf",
      pdfSize: "1.6 KB",
      keywords: "naz foundation delhi high court 377 equality non-discrimination constitutional morality"
    },

    // --- Corporate Governance & SEBI ---
    {
      id: "sahara-sebi-2012",
      title: "Sahara India Real Estate Corp Ltd v. SEBI",
      citation: "(2013) 1 SCC 1",
      year: 2012,
      bench: "Division Bench",
      court: "sc",
      courtLabel: "Supreme Court",
      courtType: "sc",
      subject: "corporate",
      subjectLabel: "Corporate & SEBI",
      statutory: "Sec 67 Co Act / SEBI Act",
      ratio: "An offer of securities made to 50 or more individuals is deemed by law to be a Public Issue under Section 67 of the Companies Act, mandating full compliance with SEBI disclosures.",
      takeaway: "Affirmed that hybrid instruments (OFCDs) fall squarely within SEBI's regulatory reach.",
      bullets: [
        "Affirmed that optionally fully convertible debentures (OFCDs) are securities.",
        "Established SEBI's comprehensive jurisdiction over unlisted public companies mobilizing public funds.",
        "Enforced strict investor repayment via escrow, establishing modern capital market transparency."
      ],
      pdfUrl: "materials/landmark-judgments/sahara-sebi-2012.pdf",
      pdfSize: "1.6 KB",
      keywords: "sahara sebi ofcd public issue securities capital markets section 67 investor protection"
    },
    {
      id: "tata-cyrus-mistry-2021",
      title: "Tata Consultancy Services v. Cyrus Investments",
      citation: "(2021) 9 SCC 449",
      year: 2021,
      bench: "3-Judge Bench",
      court: "sc",
      courtLabel: "Supreme Court",
      courtType: "sc",
      subject: "corporate",
      subjectLabel: "Corporate & SEBI",
      statutory: "Sec 241, 242 Co Act 2013",
      ratio: "The removal of a person from the post of Executive Chairman or Director cannot be termed 'oppressive or prejudicial' under Section 241 without establishing grounds for winding up.",
      takeaway: "Restricted the invocation of equitable quasi-partnership principles in public corporations.",
      bullets: [
        "Clarified independent director rights and statutory boundaries of Section 149(6).",
        "Held that quasi-partnership concepts cannot be imported mechanically into large companies.",
        "Settled pivotal corporate leadership succession jurisprudence under Indian company law."
      ],
      pdfUrl: "materials/landmark-judgments/tata-cyrus-mistry-2021.pdf",
      pdfSize: "1.6 KB",
      keywords: "tata cyrus mistry oppression mismanagement 241 corporate governance independent directors"
    },
    {
      id: "vodafone-tax-look-at-2012",
      title: "Vodafone International Holdings v. Union of India",
      citation: "(2012) 6 SCC 613",
      year: 2012,
      bench: "3-Judge Bench",
      court: "sc",
      courtLabel: "Supreme Court",
      courtType: "sc",
      subject: "corporate",
      subjectLabel: "Corporate & SEBI",
      statutory: "Sec 9 Income Tax Act",
      ratio: "Corporate holding structures must be looked at in their entirety ('Look-At' Doctrine). Offshore share transfer cannot be parsed artificially for domestic tax unless sham.",
      takeaway: "Definitive landmark ruling on multinational corporate structuring and investment certainty.",
      bullets: [
        "Enunciated the Look-At doctrine versus dissecting corporate holding layers.",
        "Affirmed certainty in tax law and commercial investment structuring.",
        "Major benchmark for foreign direct investment transactions in India."
      ],
      pdfUrl: "materials/landmark-judgments/vodafone-tax-look-at-2012.pdf",
      pdfSize: "1.6 KB",
      keywords: "vodafone tax holding look at offshore share transfer capital gains"
    },
    {
      id: "gujarat-hc-cadila-healthcare-2013",
      title: "Cadila Healthcare Ltd. v. CIT",
      citation: "2013 SCC OnLine Guj 3822",
      year: 2013,
      bench: "Division Bench",
      court: "hc-gujarat",
      courtLabel: "Gujarat High Court",
      courtType: "hc",
      subject: "corporate",
      subjectLabel: "Corporate & SEBI",
      statutory: "Sec 37(1) Income Tax Act",
      ratio: "Commercial expediency of corporate business expenditure must be judged from the perspective of a prudent businessman, not the revenue authorities.",
      takeaway: "Benchmark corporate commercial expenditure test for businesses in Gujarat.",
      bullets: [
        "Held that genuine business promotion expenditures are allowable corporate deductions.",
        "Revenue cannot step into the shoes of directors to dictate commercial wisdom.",
        "Influential corporate tax and governance authority in Gujarat."
      ],
      pdfUrl: "materials/landmark-judgments/gujarat-hc-cadila-healthcare-2013.pdf",
      pdfSize: "1.6 KB",
      keywords: "cadila healthcare gujarat high court commercial expediency corporate expense business purpose"
    },
    {
      id: "bombay-hc-miheer-mafatlal-1996",
      title: "Miheer H. Mafatlal v. Mafatlal Industries Ltd.",
      citation: "(1997) 1 SCC 579",
      year: 1996,
      bench: "Bombay HC / SC",
      court: "hc-bombay",
      courtLabel: "Bombay High Court",
      courtType: "hc",
      subject: "corporate",
      subjectLabel: "Corporate & SEBI",
      statutory: "Sec 391-394 (Sec 230-232)",
      ratio: "In reviewing corporate schemes of arrangement/mergers, the court exercises a supervisory role rather than sitting in appellate commercial judgment over shareholders.",
      takeaway: "Governs modern NCLT scheme approval and minority shareholder fairness guidelines.",
      bullets: [
        "Shareholders are the best judges of commercial wisdom if statutory fairness is satisfied.",
        "Court verifies procedural compliance and bona fide commercial object.",
        "Bedrock precedent cited in all contemporary corporate restructuring proceedings."
      ],
      pdfUrl: "materials/landmark-judgments/bombay-hc-miheer-mafatlal-1996.pdf",
      pdfSize: "1.6 KB",
      keywords: "miheer mafatlal bombay high court corporate scheme arrangement merger fairness"
    },

    // --- Criminal Law & Procedure ---
    {
      id: "lalita-kumari-fir-2014",
      title: "Lalita Kumari v. Govt. of U.P.",
      citation: "(2014) 2 SCC 1",
      year: 2014,
      bench: "5-Judge Bench",
      court: "sc",
      courtLabel: "Supreme Court",
      courtType: "sc",
      subject: "criminal",
      subjectLabel: "Criminal Law & BNSS",
      statutory: "Sec 154 CrPC / 173 BNSS",
      ratio: "Registration of an FIR is mandatory under Section 154 of the Code of Criminal Procedure if the information discloses the commission of a cognizable offence.",
      takeaway: "Eliminated police discretion to hold preliminary inquiries when cognizable offences are reported.",
      bullets: [
        "Mandatory registration of FIR ensures access to justice for victims of crime.",
        "Narrow exceptions defined for preliminary inquiry (medical negligence, matrimonial disputes, commercial fraud).",
        "Baseline for crime reporting and citizen protection codified under BNSS Section 173."
      ],
      pdfUrl: "materials/landmark-judgments/lalita-kumari-fir-2014.pdf",
      pdfSize: "1.6 KB",
      keywords: "lalita kumari fir mandatory registration 154 crpc 173 bnss cognizable police preliminary inquiry"
    },
    {
      id: "dk-basu-arrest-guidelines-1997",
      title: "D.K. Basu v. State of West Bengal",
      citation: "(1997) 1 SCC 416",
      year: 1997,
      bench: "Division Bench",
      court: "sc",
      courtLabel: "Supreme Court",
      courtType: "sc",
      subject: "criminal",
      subjectLabel: "Criminal Law & BNSS",
      statutory: "Articles 21, 22",
      ratio: "Custodial violence, including torture and death in lock-ups, strikes at the very rule of law; the requirements of transparent arrest and custody are mandatory constitutional duties.",
      takeaway: "Formed the structural foundation for statutory arrest safeguards incorporated into BNSS 2023.",
      bullets: [
        "Laid down 11 mandatory guidelines for arrest, including identification tags and informing next of kin.",
        "Mandated preparation of an Arrest Memo witnessed by at least one family or respected local member.",
        "Directly codified into Sections 36-39 of the Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023."
      ],
      pdfUrl: "materials/landmark-judgments/dk-basu-arrest-guidelines-1997.pdf",
      pdfSize: "1.6 KB",
      keywords: "dk basu arrest custodial violence guidelines arrest memo medical examination 21 22 torture"
    },
    {
      id: "arnesh-kumar-arrest-2014",
      title: "Arnesh Kumar v. State of Bihar",
      citation: "(2014) 8 SCC 273",
      year: 2014,
      bench: "Division Bench",
      court: "sc",
      courtLabel: "Supreme Court",
      courtType: "sc",
      subject: "criminal",
      subjectLabel: "Criminal Law & BNSS",
      statutory: "Sec 41 CrPC / 35 BNSS",
      ratio: "Police cannot mechanically arrest an individual for offences punishable with imprisonment up to 7 years without issuing a prior Section 41A Notice of Appearance.",
      takeaway: "Mandates arrest checklist and reasoned remand orders by Magistrates.",
      bullets: [
        "Prevents arbitrary arrests under Section 498A IPC and similar offences.",
        "Magistrates must verify the necessity checklist before authorizing detention.",
        "Codified into Section 35(3) of the BNSS 2023."
      ],
      pdfUrl: "materials/landmark-judgments/arnesh-kumar-arrest-2014.pdf",
      pdfSize: "1.6 KB",
      keywords: "arnesh kumar arrest 41a notice checklist offences under 7 years mechanical remand"
    },
    {
      id: "satender-antil-bail-2022",
      title: "Satender Kumar Antil v. CBI",
      citation: "(2022) 10 SCC 51",
      year: 2022,
      bench: "Division Bench",
      court: "sc",
      courtLabel: "Supreme Court",
      courtType: "sc",
      subject: "criminal",
      subjectLabel: "Criminal Law & BNSS",
      statutory: "Sec 436, 437, 439 CrPC",
      ratio: "Comprehensive guidelines categorizing offences (A to D) for prompt bail disposal. Reaffirmed that 'Bail is the rule and jail is the exception'.",
      takeaway: "Prevents mechanical detention of undertrials complying with investigation notices.",
      bullets: [
        "Created Categories A to D for offences based on punishment severity.",
        "Undertrials who cooperate with investigation should not be remanded mechanically.",
        "Reiterated personal liberty under Article 21 as the paramount consideration."
      ],
      pdfUrl: "materials/landmark-judgments/satender-antil-bail-2022.pdf",
      pdfSize: "1.6 KB",
      keywords: "satender kumar antil cbi bail category undertrials 41a personal liberty"
    },
    {
      id: "gujarat-hc-sandip-gupta-2022",
      title: "State of Gujarat v. Sandip Omprakash Gupta",
      citation: "2022 SCC OnLine Guj 2315",
      year: 2022,
      bench: "Division Bench",
      court: "hc-gujarat",
      courtLabel: "Gujarat High Court",
      courtType: "hc",
      subject: "criminal",
      subjectLabel: "Criminal Law & Gujarat HC",
      statutory: "GUJCTOC Act 2015",
      ratio: "Stringent provisions of organized crime acts require strict adherence to statutory pre-conditions. Prior sanction is a vital protective shield, not an administrative formality.",
      takeaway: "High benchmark for invoking organized crime statutes in Gujarat.",
      bullets: [
        "Special organized crime statutes cannot be invoked mechanically on ordinary offences.",
        "Prior approval and sanction must reflect independent application of mind.",
        "Influential authority for criminal defense advocates in Gujarat courts."
      ],
      pdfUrl: "materials/landmark-judgments/gujarat-hc-sandip-gupta-2022.pdf",
      pdfSize: "1.6 KB",
      keywords: "sandip gupta gujarat high court gujctoc organized crime prior sanction statutory safeguards"
    },
    {
      id: "bombay-hc-pradeep-sharma-2024",
      title: "Pradeep Sharma v. State of Maharashtra",
      citation: "2024 SCC OnLine Bom 882",
      year: 2024,
      bench: "Division Bench",
      court: "hc-bombay",
      courtLabel: "Bombay High Court",
      courtType: "hc",
      subject: "criminal",
      subjectLabel: "Criminal Law & Evidence",
      statutory: "BSA Sec 3 / IEA Sec 3",
      ratio: "In circumstantial evidence cases, the chain of circumstances must be fully established and incapable of explanation of any hypothesis other than the guilt of the accused.",
      takeaway: "Reaffirmed the golden principles of Panchsheel in circumstantial criminal proof.",
      bullets: [
        "Presumption of innocence remains intact until the prosecution eliminates every reasonable doubt.",
        "Suspicion, however grave, cannot substitute legal proof in a criminal trial.",
        "Benchmark contemporary appellate criminal authority."
      ],
      pdfUrl: "materials/landmark-judgments/bombay-hc-pradeep-sharma-2024.pdf",
      pdfSize: "1.6 KB",
      keywords: "pradeep sharma bombay high court circumstantial evidence presumption of innocence chain of events"
    },

    // --- Commercial Contracts & NI Act ---
    {
      id: "satyabrata-ghose-frustration-1954",
      title: "Satyabrata Ghose v. Mugneeram Bangur & Co.",
      citation: "1954 SCR 310",
      year: 1954,
      bench: "3-Judge Bench",
      court: "sc",
      courtLabel: "Supreme Court",
      courtType: "sc",
      subject: "contracts",
      subjectLabel: "Contracts & Civil",
      statutory: "Sec 56 Indian Contract Act",
      ratio: "The Doctrine of Frustration applies when an untoward supervening event destroys the very foundation of the contract. English common law implied terms do not apply.",
      takeaway: "Mere commercial difficulty or market price fluctuation is not frustration.",
      bullets: [
        "Section 56 is exhaustive on the law of contractual frustration in India.",
        "Supervening impossibility must render performance fundamentally different from what was agreed.",
        "Bedrock authority cited in commercial breach, force majeure, and infrastructure disputes."
      ],
      pdfUrl: "materials/landmark-judgments/satyabrata-ghose-frustration-1954.pdf",
      pdfSize: "1.6 KB",
      keywords: "satyabrata ghose doctrine of frustration 56 contract act impossibility performance"
    },
    {
      id: "p-mohanraj-ni-act-ibc-2021",
      title: "P. Mohanraj v. Shah Brothers ISPAT Pvt Ltd",
      citation: "(2021) 6 SCC 258",
      year: 2021,
      bench: "3-Judge Bench",
      court: "sc",
      courtLabel: "Supreme Court",
      courtType: "sc",
      subject: "contracts",
      subjectLabel: "Commercial & NI Act",
      statutory: "Sec 138 NI Act / 14 IBC",
      ratio: "Section 14 IBC moratorium covers quasi-criminal Section 138 NI Act cheque bounce proceedings against corporate debtors; natural directors remain liable.",
      takeaway: "Harmonized corporate insolvency rescue with negotiable instrument liabilities.",
      bullets: [
        "Quasi-criminal proceedings under NI Act Section 138 are stayed against the corporate debtor during moratorium.",
        "Signatories and executive directors remain individually criminally liable.",
        "Cornerstone precedent at the intersection of commercial banking and corporate insolvency."
      ],
      pdfUrl: "materials/landmark-judgments/p-mohanraj-ni-act-ibc-2021.pdf",
      pdfSize: "1.6 KB",
      keywords: "p mohanraj ni act 138 ibc moratorium 14 cheque bounce director liability"
    },
    {
      id: "gujarat-hc-rajeshbhai-patel-2020",
      title: "Rajeshbhai Muljibhai Patel v. State of Gujarat",
      citation: "(2020) 3 SCC 794",
      year: 2020,
      bench: "Gujarat HC / SC",
      court: "hc-gujarat",
      courtLabel: "Gujarat High Court",
      courtType: "hc",
      subject: "contracts",
      subjectLabel: "Negotiable Instruments",
      statutory: "Sec 139 NI Act",
      ratio: "Accused can rebut statutory presumption under Section 139 NI Act on a preponderance of probabilities; entering the witness box is not mandatory.",
      takeaway: "Essential standard of proof precedent in Gujarat cheque dishonour litigation.",
      bullets: [
        "Standard of proof for accused to rebut Section 139 presumption is not beyond reasonable doubt.",
        "Accused can rely on prosecution materials and cross-examination to establish defense.",
        "Frequently cited in trial court advocacy and appellate appeals in Gujarat."
      ],
      pdfUrl: "materials/landmark-judgments/gujarat-hc-rajeshbhai-patel-2020.pdf",
      pdfSize: "1.6 KB",
      keywords: "rajeshbhai patel gujarat high court 139 ni act presumption standard of proof preponderance"
    },
    {
      id: "delhi-hc-simplex-concrete-2010",
      title: "Simplex Concrete Piles v. Union of India",
      citation: "2010 SCC OnLine Del 821",
      year: 2010,
      bench: "Single Judge",
      court: "hc-delhi",
      courtLabel: "Delhi High Court",
      courtType: "hc",
      subject: "contracts",
      subjectLabel: "Commercial Contracts",
      statutory: "Sec 23 & 73 Contract Act",
      ratio: "Contractual clauses that extinguish a contractor's right to claim compensation for employer-caused delays violate public policy under Section 23 of the Contract Act.",
      takeaway: "Protects commercial contractors against one-sided governmental exclusion clauses.",
      bullets: [
        "Clauses barring claims for breach caused by the employer are contrary to Section 23.",
        "A party cannot contract out of its liability for breach of contract by relying on one-sided terms.",
        "Crucial authority for construction contracts and public tender disputes."
      ],
      pdfUrl: "materials/landmark-judgments/delhi-hc-simplex-concrete-2010.pdf",
      pdfSize: "1.6 KB",
      keywords: "simplex concrete delhi high court damage exclusion clause 23 73 public policy"
    },

    // --- Arbitration & ADR ---
    {
      id: "stamp-act-arbitration-2023",
      title: "In Re: Interplay Between Arbitration Agreements & Stamp Act",
      citation: "2023 SCC OnLine SC 1666",
      year: 2023,
      bench: "7-Judge Bench",
      court: "sc",
      courtLabel: "Supreme Court",
      courtType: "sc",
      subject: "contracts",
      subjectLabel: "Arbitration & ADR",
      statutory: "Sec 8, 11 A&C Act / Stamp Act",
      ratio: "An unstamped or insufficiently stamped agreement is an admissible, curable defect; referral courts under Sec 11/8 must only verify existence of the arbitration agreement.",
      takeaway: "Overruled NN Global (5-Judge); reaffirmed India as a modern pro-arbitration seat.",
      bullets: [
        "Overruled NN Global (5-Judge Bench) while preserving party autonomy.",
        "Non-stamping does not render arbitration agreements void ab initio.",
        "Curable procedural defect to be determined definitively by the arbitral tribunal."
      ],
      pdfUrl: "materials/landmark-judgments/stamp-act-arbitration-2023.pdf",
      pdfSize: "1.6 KB",
      keywords: "stamp act arbitration agreements interplay 7 judge curable defect nn global section 11 8"
    },
    {
      id: "gujarat-hc-ge-power-nhpc-2022",
      title: "GE Power India Ltd. v. NHPC Ltd.",
      citation: "2022 SCC OnLine Guj 2110",
      year: 2022,
      bench: "Division Bench",
      court: "hc-gujarat",
      courtLabel: "Gujarat High Court",
      courtType: "hc",
      subject: "contracts",
      subjectLabel: "Arbitration & ADR",
      statutory: "Sec 9 A&C Act 1996",
      ratio: "Courts will not grant an injunction against unconditional bank guarantees in commercial arbitration disputes unless egregious fraud or irretrievable harm is proven.",
      takeaway: "Strict enforcement of commercial guarantees in Gujarat infrastructure disputes.",
      bullets: [
        "Interim injunctions against bank guarantees require exceptional, uncontroverted proof.",
        "Protects the sanctity of commercial banking instruments in arbitral disputes.",
        "Leading commercial arbitration authority in Gujarat."
      ],
      pdfUrl: "materials/landmark-judgments/gujarat-hc-ge-power-nhpc-2022.pdf",
      pdfSize: "1.6 KB",
      keywords: "ge power nhpc gujarat high court section 9 bank guarantee injunction commercial arbitration"
    }
  ],

  // ============================================================
  // 2. SUBJECT-WISE STATUTORY NOTES
  // ============================================================
  notes: [
    {
      id: "note-company-law",
      title: "Company Law & Corporate Governance",
      subtitle: "Companies Act 2013 & Corporate Accountability Framework",
      moduleNumber: "Module 01 · Corporate Jurisprudence",
      subject: "corporate",
      subjectLabel: "Corporate & SEBI",
      description: "Comprehensive overview of corporate structuring, fiduciary duties of directors under Section 166, independent director mandates under Section 149(6), and prevention of oppression under Section 241.",
      sectionsCovered: [
        "Sec 149 & 166: Board Composition, Independence Criteria & Fiduciary Obligations",
        "Sec 135: Mandatory Corporate Social Responsibility (CSR) Compliance",
        "Sec 241-246: Relief Against Oppression & Mismanagement Mechanisms"
      ],
      pdfUrl: "materials/subject-notes/company-law-corporate-governance.pdf",
      pdfSize: "1.4 KB",
      keywords: "company law companies act 2013 directors corporate governance board meetings oppression csr"
    },
    {
      id: "note-sebi-lodr",
      title: "SEBI (LODR) & Capital Markets",
      subtitle: "Securities Compliance, Disclosure & Governance Standards",
      moduleNumber: "Module 02 · Securities Regulations",
      subject: "corporate",
      subjectLabel: "Corporate & SEBI",
      description: "Detailed breakdown of the SEBI (Listing Obligations and Disclosure Requirements) Regulations 2015, Regulation 17 board mandates, Regulation 23 related-party controls, and Regulation 30 material event disclosures.",
      sectionsCovered: [
        "Reg 17 & 18: Mandatory Board & Audit Committee Composition",
        "Reg 23: Related Party Transactions (RPT) Materiality & Shareholder Approval",
        "Reg 30: Material Event Disclosure Thresholds & Quantitative Timelines"
      ],
      pdfUrl: "materials/subject-notes/sebi-lodr-capital-markets.pdf",
      pdfSize: "1.4 KB",
      keywords: "sebi lodr capital markets disclosure regulations 2015 listing audit committee related party"
    },
    {
      id: "note-new-criminal-laws",
      title: "New Criminal Laws: BNS, BNSS & BSA",
      subtitle: "The 2023 Statutory Transition from IPC, CrPC & Evidence Act",
      moduleNumber: "Module 03 · Criminal Jurisprudence",
      subject: "criminal",
      subjectLabel: "Criminal Law & BNSS",
      description: "Comparative matrix analyzing the transition from IPC (1860) to Bharatiya Nyaya Sanhita (BNS 2023), CrPC (1973) to Bharatiya Nagarik Suraksha Sanhita (BNSS 2023), and Indian Evidence Act to Bharatiya Sakshya Adhiniyam (BSA 2023).",
      sectionsCovered: [
        "BNS 2023: Redefined Offences Against Women, Organized Crime & Terrorism",
        "BNSS 2023: Zero FIR, Electronic Summons & Audio-Visual Search Seizure",
        "BSA 2023: Electronic & Digital Records Admissibility (Sec 61-63)"
      ],
      pdfUrl: "materials/subject-notes/new-criminal-laws-bns-bnss-bsa.pdf",
      pdfSize: "1.5 KB",
      keywords: "bns bnss bsa new criminal laws 2023 ipc crpc evidence act transition comparative chart"
    },
    {
      id: "note-constitutional-law",
      title: "Constitutional Law & Fundamental Rights",
      subtitle: "Part III Freedoms, Judicial Review & Writs Architecture",
      moduleNumber: "Module 04 · Constitutional Jurisprudence",
      subject: "constitutional",
      subjectLabel: "Constitutional Law",
      description: "Structured exploration of Articles 12 to 35, the Golden Triangle doctrine (Arts 14, 19, 21), substantive due process, proportionality testing, and extraordinary writ jurisdiction under Articles 32 and 226.",
      sectionsCovered: [
        "Art 12 & 13: Definition of State & Judicial Review Mechanism",
        "Art 14, 19, 21: Non-Arbitrariness, Six Freedoms & Personal Liberty",
        "Art 32 & 226: Habeas Corpus, Mandamus, Certiorari, Prohibition & Quo Warranto"
      ],
      pdfUrl: "materials/subject-notes/constitutional-law-fundamental-rights.pdf",
      pdfSize: "1.4 KB",
      keywords: "constitutional law fundamental rights article 14 19 21 basic structure writ jurisdiction 32 226"
    },
    {
      id: "note-commercial-contracts",
      title: "Commercial Contracts & Specific Relief",
      subtitle: "Contractual Drafting, Injunctions & Breach Remedies",
      moduleNumber: "Module 05 · Commercial Practice",
      subject: "contracts",
      subjectLabel: "Contracts & Civil",
      description: "Analysis of the Indian Contract Act 1872 and Specific Relief Act 1963 (2018 Amendment), focusing on liquidated damages vs penalties under Section 74, frustration under Section 56, and mandatory specific performance.",
      sectionsCovered: [
        "Sec 56 & 73-74: Impossibility of Performance & Liquidated Damages",
        "Sec 10 & 14 (SRA): Mandatory Specific Performance & Unenforceable Contracts",
        "Sec 20A (SRA): Special Infrastructure Injunction Safeguards"
      ],
      pdfUrl: "materials/subject-notes/commercial-contracts-specific-relief.pdf",
      pdfSize: "1.4 KB",
      keywords: "contracts specific relief act sra 1872 1963 breach damages frustration 56 injunction"
    }
  ],

  // ============================================================
  // 3. TRICKS TO RECALL (Cognitive Formulas & Mnemonics)
  // ============================================================
  tricks: [
    {
      id: "trick-samrop",
      title: "Article 19(1) Six Fundamental Freedoms",
      formula: "S · A · M · R · O · P",
      formulaLabel: "The SAMROP Formula",
      subject: "constitutional",
      subjectLabel: "Constitutional Law",
      breakdown: [
        { letter: "S", desc: "Speech & Expression [Art 19(1)(a)]" },
        { letter: "A", desc: "Assemble peaceably without arms [Art 19(1)(b)]" },
        { letter: "M", desc: "Movement freely throughout India [Art 19(1)(d)]" },
        { letter: "R", desc: "Reside and settle anywhere in India [Art 19(1)(e)]" },
        { letter: "O", desc: "Occupation, trade or business [Art 19(1)(g)]" },
        { letter: "P", desc: "Practice association or unions [Art 19(1)(c)]" }
      ],
      practicalTip: "Remember: Property was omitted by the 44th Amendment (1978). Just think of a citizen's journey: Speak → Assemble → Form Association → Move → Reside → Work.",
      pdfUrl: "materials/recall-tricks/article-19-samrop-mnemonic.pdf",
      pdfSize: "1.4 KB",
      keywords: "samrop article 19 fundamental freedoms speech assembly association movement residence trade"
    },
    {
      id: "trick-soup-disc",
      title: "Article 19(2) Reasonable Restrictions",
      formula: "S · O · U · P · · · D · I · S · C",
      formulaLabel: "The SOUP DISC Formula",
      subject: "constitutional",
      subjectLabel: "Constitutional Law",
      breakdown: [
        { letter: "S", desc: "Sovereignty & Integrity of India" },
        { letter: "O", desc: "Order (Public Order)" },
        { letter: "U", desc: "Underlying Morality or Decency" },
        { letter: "P", desc: "Preserving Security of the State" },
        { letter: "D", desc: "Defamation prevention" },
        { letter: "I", desc: "Incitement to an offence" },
        { letter: "S", desc: "Sovereign Friendly relations with foreign States" },
        { letter: "C", desc: "Contempt of Court" }
      ],
      practicalTip: "Total 8 grounds. If any restriction does not fall into one of these 8 precise statutory slots, it is unconstitutional on its face!",
      pdfUrl: "materials/recall-tricks/article-19-soup-disc-restrictions.pdf",
      pdfSize: "1.4 KB",
      keywords: "soup disc article 19 2 reasonable restrictions sovereignty public order morality security defamation contempt"
    },
    {
      id: "trick-wib-tree",
      title: "BNSS 2023 Warrantless Arrest Decision Tree",
      formula: "W · I · B",
      formulaLabel: "The WIB Decision Tree",
      subject: "criminal",
      subjectLabel: "Criminal Law & BNSS",
      breakdown: [
        { letter: "W", desc: "Warrantless offences: Cognizable with punishment > 7 years (Mandatory Arrest power)" },
        { letter: "I", desc: "Investigation necessity: Offences ≤ 7 yrs require Sec 35(1) checklist (Prevent tampering, fleeing)" },
        { letter: "B", desc: "Bail status: If bailable, right to bail must be communicated immediately" }
      ],
      practicalTip: "Under BNSS Sec 35(3), if imprisonment is ≤ 7 years and accused appears pursuant to notice, arrest is prohibited unless reasons are recorded in writing.",
      pdfUrl: "materials/recall-tricks/bnss-cognizable-flowchart.pdf",
      pdfSize: "1.4 KB",
      keywords: "wib bnss arrest warrantless cognizable bailable section 35 41 crpc flowchart"
    },
    {
      id: "trick-ansr-committees",
      title: "Mandatory Board Committees under SEBI (LODR)",
      formula: "A · N · S · R",
      formulaLabel: "The ANSR Framework",
      subject: "corporate",
      subjectLabel: "Corporate & SEBI",
      breakdown: [
        { letter: "A", desc: "Audit Committee [Reg 18]: Min 3 directors; 2/3rd independent" },
        { letter: "N", desc: "Nomination & Remuneration [Reg 19]: Min 3 directors; 50%+ independent" },
        { letter: "S", desc: "Stakeholders Relationship [Reg 20]: Min 3 directors; at least 1 independent" },
        { letter: "R", desc: "Risk Management [Reg 21]: Mandatory for top 1,000 listed entities" }
      ],
      practicalTip: "Remember 'ANSR the Board': In Audit Committee, Chairperson MUST be independent! In Nomination, Chairperson can never chair the Board meeting simultaneously.",
      pdfUrl: "materials/recall-tricks/sebi-lodr-ansr-committees.pdf",
      pdfSize: "1.4 KB",
      keywords: "ansr sebi lodr board committees audit nomination remuneration stakeholders risk management"
    },
    {
      id: "trick-frustration-test",
      title: "Doctrine of Frustration (Section 56 Contracts)",
      formula: "1 → 2 → 3 → 4",
      formulaLabel: "4-Step Frustration Test",
      subject: "contracts",
      subjectLabel: "Contracts & Civil",
      breakdown: [
        { letter: "1", desc: "Valid Subsisting Contract: Enforceable agreement existed between parties" },
        { letter: "2", desc: "Supervening Event: Post-contractual, unexpected unforeseen occurrence" },
        { letter: "3", desc: "Substratum Destroyed: Performance becomes physically or legally impossible" },
        { letter: "4", desc: "No Party Fault: Neither promisor nor promisee caused or contributed to the event" }
      ],
      practicalTip: "Crucial Distinction: Commercial difficulty, financial hardship, or market fluctuations do NOT constitute frustration under Indian law (Satyabrata Ghose).",
      pdfUrl: "materials/recall-tricks/contracts-frustration-test-checklist.pdf",
      pdfSize: "1.4 KB",
      keywords: "frustration 4 step test section 56 contract act satyabrata ghose impossibility force majeure"
    }
  ]
};

// ============================================================
// DYNAMIC INJECTION HELPERS
// ============================================================
window.addLandmarkJudgment = function(item) {
  if (!item || !item.title) return false;
  item.id = item.id || 'judg-' + Date.now();
  STUDY_DATA.judgments.unshift(item);
  if (typeof window.refreshStudyHub === 'function') {
    window.refreshStudyHub();
  }
  return true;
};

window.addSubjectNote = function(item) {
  if (!item || !item.title) return false;
  item.id = item.id || 'note-' + Date.now();
  STUDY_DATA.notes.unshift(item);
  if (typeof window.refreshStudyHub === 'function') {
    window.refreshStudyHub();
  }
  return true;
};

window.addRecallTrick = function(item) {
  if (!item || !item.title) return false;
  item.id = item.id || 'trick-' + Date.now();
  STUDY_DATA.tricks.unshift(item);
  if (typeof window.refreshStudyHub === 'function') {
    window.refreshStudyHub();
  }
  return true;
};
