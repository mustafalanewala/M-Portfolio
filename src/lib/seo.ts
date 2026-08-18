import {
  SITE_URL,
  allSkills,
  expertise,
  organization,
  person,
  roles,
  socials,
} from "@/data/profile"

/** Stable @id anchors so every node in the graph can reference the others. */
export const ID = {
  person: `${SITE_URL}/#person`,
  organization: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
  webpage: `${SITE_URL}/#webpage`,
  profilePage: `${SITE_URL}/#profilepage`,
  breadcrumb: `${SITE_URL}/#breadcrumb`,
  image: `${SITE_URL}/#primaryimage`,
} as const

/**
 * Keywords are assembled from the same skill list the page renders, so the
 * meta tag can never drift from what is actually on the page.
 */
export const keywords: string[] = [
  person.name,
  `${person.name} portfolio`,
  `${person.name} developer`,
  person.jobTitle,
  "AI Engineer",
  "Full Stack Developer",
  "Full Stack Engineer India",
  "Founder Mx Solution",
  "Mx Solution",
  "Product Engineer",
  "Freelance Next.js developer",
  "Hire full stack developer India",
  ...expertise,
  ...allSkills,
]

const employmentNodes = roles.map((role) => ({
  "@type": "EmployeeRole",
  roleName: role.title,
  startDate: role.startDate,
  ...(role.endDate ? { endDate: role.endDate } : {}),
  description: role.description,
  worksFor: {
    "@type": "Organization",
    name: role.company,
    url: role.companyUrl,
  },
}))

/**
 * One connected @graph rather than several loose blobs. Cross-referencing the
 * nodes by @id is what lets Google and LLM retrievers resolve "Mustafa
 * Lanewala" to a single entity instead of several unrelated mentions.
 */
export function buildStructuredData(lastModified: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": ID.person,
        name: person.name,
        givenName: person.givenName,
        familyName: person.familyName,
        url: SITE_URL,
        image: { "@id": ID.image },
        email: `mailto:${person.email}`,
        jobTitle: person.jobTitle,
        description: person.summary,
        disambiguatingDescription: person.headline,
        sameAs: [socials.github, socials.linkedin, socials.instagram],
        worksFor: { "@id": ID.organization },
        founder: { "@id": ID.organization },
        knowsAbout: [...expertise, ...allSkills],
        knowsLanguage: person.languages.map((name) => ({
          "@type": "Language",
          name,
        })),
        hasOccupation: {
          "@type": "Occupation",
          name: person.jobTitle,
          occupationalCategory: "15-1252.00 Software Developers",
          skills: allSkills.join(", "),
        },
        memberOf: employmentNodes,
        nationality: { "@type": "Country", name: person.country },
        address: {
          "@type": "PostalAddress",
          addressCountry: person.countryCode,
        },
        mainEntityOfPage: { "@id": ID.profilePage },
      },
      {
        "@type": "Organization",
        "@id": ID.organization,
        name: organization.name,
        url: organization.url,
        description: organization.description,
        foundingDate: organization.foundingDate,
        founder: { "@id": ID.person },
        logo: { "@id": ID.image },
        areaServed: { "@type": "Place", name: "Worldwide" },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "business enquiries",
          email: `mailto:${person.email}`,
          availableLanguage: [...person.languages],
        },
      },
      {
        "@type": "ImageObject",
        "@id": ID.image,
        url: `${SITE_URL}/opengraph-image`,
        contentUrl: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        caption: `${person.name} — ${person.jobTitle}`,
      },
      {
        "@type": "WebSite",
        "@id": ID.website,
        url: SITE_URL,
        name: `${person.name} Portfolio`,
        description: person.summary,
        inLanguage: person.locale,
        publisher: { "@id": ID.person },
        author: { "@id": ID.person },
      },
      {
        "@type": "ProfilePage",
        "@id": ID.profilePage,
        url: SITE_URL,
        name: `${person.name} | ${person.jobTitle}`,
        isPartOf: { "@id": ID.website },
        about: { "@id": ID.person },
        mainEntity: { "@id": ID.person },
        dateModified: lastModified,
        inLanguage: person.locale,
        breadcrumb: { "@id": ID.breadcrumb },
      },
      {
        "@type": "BreadcrumbList",
        "@id": ID.breadcrumb,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: `${SITE_URL}/#about`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Experience",
            item: `${SITE_URL}/#experience`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Skills",
            item: `${SITE_URL}/#skills`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Contact",
            item: `${SITE_URL}/#contact`,
          },
        ],
      },
    ],
  }
}
