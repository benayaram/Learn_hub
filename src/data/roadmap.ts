import { Phase, RoadmapSection } from '../types/roadmap';

export const phases: Phase[] = [
  {
    id: 'networking-basics',
    title: 'Networking Basics',
    duration: 'Weeks 1–2',
    goal: 'Understand OSI Model, TCP/IP, subnetting, and IP addressing basics.',
    resources: [
      {
        title: 'Cisco Networking Basics Playlist',
        url: 'https://www.youtube.com/playlist?list=PLhfrWIlLOoKO7E2usCJK5ecl9awN7EJOg'
      },
      {
        title: 'Subnetting Practice',
        url: 'https://www.subnettingpractice.com'
      },
      {
        title: 'Packet Tracer Download',
        url: 'https://www.netacad.com/courses/packet-tracer'
      }
    ]
  },
  // Add other phases similarly...
];

export const sections: RoadmapSection[] = [
  {
    phase: 5,
    title: 'Job Applications',
    subsections: [
      {
        title: 'Job Platforms',
        resources: [
          {
            title: 'LinkedIn Networking Jobs',
            url: 'https://www.linkedin.com/jobs/network-administrator-jobs'
          },
          {
            title: 'Indeed Networking Jobs',
            url: 'https://www.indeed.com/q-Network-Administrator-jobs.html'
          }
        ]
      }
    ]
  }
  // Add other sections...
];