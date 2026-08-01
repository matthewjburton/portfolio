import React from 'react'
import { Element } from 'react-scroll'
import Header from '../Header'
import FadeInSection from '../FadeInSection'
import Skills from '../skills/Skills'
import { experience } from '../../data/experience'

const Experience: React.FC = () => (
  <Element name="Experience" id="Experience" className="flex w-full justify-center">
    <div className="flex w-full flex-col items-center gap-12">
      <Header text="Experience" />

      <FadeInSection>
        <div className="bg-background dark:bg-dark-background border-t-highlight dark:border-t-dark-highlight border-border dark:border-dark-border w-full rounded-lg border p-8 shadow-lg md:p-12">
          <ol className="border-border dark:border-dark-border relative flex w-full flex-col gap-10 border-l pl-8">
          {experience.map((job) => (
            <li key={`${job.company}-${job.roles[0].dates}`} className="relative">
              <span className="gradient-accent ring-background dark:ring-dark-background absolute top-1.5 -left-[38px] h-3 w-3 rounded-full ring-4" />

              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-xl font-bold md:text-2xl">{job.company}</h3>
                  {job.type && (
                    <span className="text-text-muted dark:text-dark-text-muted text-sm">
                      {job.type}
                    </span>
                  )}
                </div>
                {job.location && (
                  <span className="text-text-muted dark:text-dark-text-muted text-sm">
                    {job.location}
                  </span>
                )}
              </div>

              <div className="mt-4 flex flex-col gap-6">
                {job.roles.map((role) => (
                  <div
                    key={`${role.title}-${role.dates}`}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="text-gradient-accent text-lg font-semibold">
                        {role.title}
                      </h4>
                      <span className="text-text-muted dark:text-dark-text-muted text-sm whitespace-nowrap italic">
                        {role.dates}
                      </span>
                    </div>
                    {role.summary && (
                      <p className="text-text-muted dark:text-dark-text-muted">
                        {role.summary}
                      </p>
                    )}
                    {role.highlights && role.highlights.length > 0 && (
                      <ul className="marker:text-accent dark:marker:text-dark-accent ml-4 flex list-disc flex-col gap-1.5 text-sm">
                        {role.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </li>
          ))}
          </ol>
        </div>
      </FadeInSection>

      <div className="flex w-full flex-col items-center gap-2">
        <h3 className="text-text-muted dark:text-dark-text-muted text-sm tracking-wider uppercase">
          Skills &amp; Tools
        </h3>
        <Skills />
      </div>
    </div>
  </Element>
)

export default Experience
