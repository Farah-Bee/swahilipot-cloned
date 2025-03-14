import React, { useState } from 'react';
import Hero from '@/components/about/workwithus/Hero';
import InnerNav from '@/components/about/workwithus/InnerNav';
import RoleDescription from '@/components/about/workwithus/RoleDescription';

export default function WorkWithUsPage() {
  
  const roles = [
    {
      title: "Software Developer",
      department: "Engineering",
      location: "Mombasa, Kenya",
      type: "Full-time",
      description: "We're looking for a talented software developer to join our engineering team. In this role, you'll work on developing and maintaining web and mobile applications that support SwahiliPot Hub's initiatives and community needs.",
      responsibilities: [
        "Design, develop, and maintain web and mobile applications",
        "Collaborate with cross-functional teams to define, design, and ship new features",
        "Ensure the performance, quality, and responsiveness of applications",
        "Identify and correct bottlenecks and fix bugs",
        "Help maintain code quality, organization, and automatization"
      ],
      qualifications: [
        "Bachelor's degree in Computer Science or related field (or equivalent experience)",
        "2+ years of experience in software development",
        "Proficiency in JavaScript/TypeScript and at least one modern framework (React, Vue, Angular)",
        "Experience with backend development (Node.js, Python, etc.)",
        "Knowledge of database systems and API design",
        "Strong problem-solving skills and attention to detail"
      ],
      applicationLink: "/about/work-with-us/"
    },
    {
      title: "Community Engagement Coordinator",
      department: "Community",
      location: "Mombasa, Kenya",
      type: "Full-time",
      description: "We're seeking a Community Engagement Coordinator to help build and nurture relationships with our members, partners, and the wider community. This role is crucial in creating a supportive ecosystem for innovation and creativity.",
      responsibilities: [
        "Develop and implement community engagement strategies",
        "Organize and facilitate community events and activities",
        "Build and maintain relationships with community partners",
        "Recruit, train, and coordinate volunteers",
        "Collect and analyze community feedback to improve programs",
        "Create content for community communications"
      ],
      qualifications: [
        "Bachelor's degree in Communications, Community Development, or related field",
        "2+ years of experience in community engagement or similar role",
        "Excellent communication and interpersonal skills",
        "Experience in event planning and volunteer management",
        "Strong organizational and project management skills",
        "Passion for community development and youth empowerment"
      ],
      applicationLink: "/about/work-with-us/"
    },
    {
      title: "Arts & Culture Program Assistant",
      department: "Arts & Culture",
      location: "Mombasa, Kenya",
      type: "Part-time",
      description: "Join our Arts & Culture department as a Program Assistant to help develop and implement creative programs and cultural initiatives. This role supports our mission to celebrate and promote local arts and cultural heritage.",
      responsibilities: [
        "Assist in planning and executing arts and cultural events",
        "Support the development of creative workshops and programs",
        "Help coordinate with artists, performers, and cultural practitioners",
        "Maintain program documentation and records",
        "Assist with program evaluation and reporting",
        "Support communications related to arts and culture programs"
      ],
      qualifications: [
        "Background in arts, culture, or related field",
        "Experience in program coordination or event planning",
        "Knowledge of East African arts and cultural practices",
        "Strong organizational and communication skills",
        "Ability to work collaboratively in a team environment",
        "Passion for arts, culture, and community development"
      ],
      applicationLink: "/about/work-with-us/"
    }
  ];

  return (
    <>
      <Hero />
      <InnerNav />
      
      <section className="py-16 bg-orange-50 dark:bg-gray-800">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Current Opportunities</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
              Join our team and be part of our mission to empower youth through technology, arts, and culture.
            </p>
          </div>
          
          {roles.map((role, index) => (
            <RoleDescription 
              key={index}
              title={role.title}
              department={role.department}
              location={role.location}
              type={role.type}
              description={role.description}
              responsibilities={role.responsibilities}
              qualifications={role.qualifications}
              applicationLink={role.applicationLink}
            />
          ))}
          
          <div className="bg-blue-50 dark:bg-gray-700 p-8 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Don't see a role that fits?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We're always looking for talented individuals who are passionate about our mission. If you don't see a role that matches your skills but believe you can contribute to SwahiliPot Hub, we'd love to hear from you.
            </p>
            <a href="/contact" className="btn bg-primary text-white hover:bg-primary-dark">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Work With Us - SwahiliPot Hub",
      description: "Explore career opportunities, volunteer positions, and ways to partner with SwahiliPot Hub."
    }
  };
}
