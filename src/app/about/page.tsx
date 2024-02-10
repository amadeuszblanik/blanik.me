"use client";

import { BmeContainer, BmeExperience, BmeHeader, BmeList, BmeText } from "@/lib/components";
import React from "react";

export default function Home() {
  const EXPERIENCES = [
    {
      logoUrl: "/images/logo/efigence.svg",
      companyName: "Efigence",
      positions: [
        {
          name: "Tech Lead Frontend & Mobile Technologies",
          startDate: new Date("2022-08-01"),
          description: `* Led the development of innovative software solutions using Swift, Kotlin, Flutter, React-Native, Next.js, React.js, Angular, significantly enhancing project delivery efficiency.
* Designed and implemented scalable project frameworks, boosting software performance and team innovation.
* Directed strategic planning and sprint execution, markedly improving project turnaround time and customer satisfaction.
* Played a key role in expanding business opportunities through expert technical guidance and client-centric solution development.`,
        },
        {
          name: "Senior Software Developer",
          startDate: new Date("2021-02-01"),
          endDate: new Date("2022-07-31"),
          description: `* Managed a team of frontend developers, focusing on projects utilizing modern JavaScript frameworks, leading to notable client retention growth.
* Set architectural standards and best practices, elevating project quality and team performance.
* Oversaw project planning and sprint management, ensuring a high rate of on-time project delivery.
* Refined technical documentation processes, streamlining knowledge transfer and reducing new team member onboarding time.`,
        },
        {
          name: "Software Developer",
          startDate: new Date("2019-06-17"),
          endDate: new Date("2021-01-31"),
          description: `* Development of responsive web applications with TypeScript, JavaScript ES6+, and React.js, improving application performance and user engagement.
* Optimized web applications for SEO and analytics after achieving Google Analytics Individual Qualification, significantly increasing web traffic and user acquisition.
* Worked closely with UX/UI designers to create user-centric designs, enhancing user satisfaction.`,
        },
      ],
    },
    {
      logoUrl: "/images/logo/nomonday.svg",
      companyName: "NoMonday",
      positions: [
        {
          name: "Frontend Developer",
          startDate: new Date("2018-03-01"),
          endDate: new Date("2019-06-16"),
          description: `* Developed high-performing custom CMS templates and responsive websites, leading to improved user experience and site performance.
* Enhanced WordPress websites with SEO optimizations, boosting organic search rankings.
* Implemented accessibility features according to WCAG 2.1 standards, making websites accessible to a broader audience and improving client compliance.`,
        },
      ],
    },
    {
      logoUrl: "/images/logo/13design.svg",
      companyName: "13design",
      positions: [
        {
          name: "Web Developer",
          startDate: new Date("2017-01-01"),
          endDate: new Date("2017-04-31"),
          description: `* Developed and maintained high-quality web applications, consistently delivering projects that surpassed client quality standards.
* Optimized WordPress sites for performance and usability, significantly improving client satisfaction.`,
        },
      ],
    },
  ];

  return (
    <>
      <BmeHeader title={<BmeText variant="title">About me</BmeText>} />
      <BmeContainer as="main">
        <BmeText variant="header">Experience</BmeText>
        <BmeList>
          {EXPERIENCES.map((experience, index) => (
            <BmeExperience key={index} {...experience} />
          ))}
        </BmeList>
      </BmeContainer>
    </>
  );
}
