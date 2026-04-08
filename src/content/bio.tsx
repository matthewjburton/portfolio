export const bio = {
  imageSrc: `${import.meta.env.BASE_URL}images/about/portrait.webp`,
  altText: 'Matthew Burton',
  title: 'Bio',
  education: 'B.S. Computer Science from High Point University',
  resumeSrc: `${import.meta.env.BASE_URL}images/about/Resume.pdf`,
  resumeUpdated: 'Aug 2025',
  description: (
    <div className="flex h-full flex-col gap-y-4">
      <div>
        I’m a full-stack developer currently at UDig, where I build client
        applications for a consulting firm. Previously at AdvanceTEC, I shipped
        production tools used company-wide. On the side, I build indie games
        that have placed in the top 7% of GMTK.
      </div>
      <div>
        Outside of work, you’ll find me playing soccer, snowboarding, recording
        music, or at the beach with my golden retrievers. I’ve always followed
        curiosity wherever it leads.
      </div>
    </div>
  ),
}
