export const bio = {
  imageSrc: '/Images/About/portrait.png',
  altText: 'Matthew Burton',
  title: 'Bio',
  description: (
    <div className="flex h-full flex-col gap-y-4">
      <div>
        I’m a creator at heart — whether it’s coding, designing, or just trying
        something new.
      </div>
      <div>
        Outside of work, I’m into soccer, pickleball, skateboarding,
        snowboarding, and recently, golf. During the pandemic, I got into making
        music, and before that, I studied graphic design.
      </div>
      <div>
        I’ve always followed curiosity wherever it leads. What keeps me going is
        building things that matter, staying connected to good people, and
        always learning.
      </div>
    </div>
  ),
}

export const skills = {
  title: 'Skills',
  skills: [
    {
      category: 'Languages',
      skills: [
        'C',
        'C++',
        'C#',
        'Python',
        'HTML',
        'CSS',
        'Shell',
        'TypeScript',
        'JavaScript',
        'Java',
      ],
    },
    {
      category: 'Tools and Frameworks',
      skills: [
        'Git',
        'React',
        'Tailwind',
        'Apollo',
        'Hasura',
        'Visual Studio Code',
        'Jira',
        'Figma',
        'Excel',
        'Aseprite',
        'FL Studio',
        'Xcode',
      ],
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MariaDB', 'PostgreSQL'],
    },
    {
      category: 'Platforms and Environments',
      skills: ['Unity', 'MacOS', 'iOS', 'Windows', 'Linux', 'Docker'],
    },
  ],
}
