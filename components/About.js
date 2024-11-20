import React from 'react';
import Link from 'next/link';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdBriefcase } from "react-icons/io";

const About = () => {
  return (
    <div id='about' className='w-full my-[200px]'>
      <div className='max-w-[1080px] mx-auto flex flex-col gap-8 translate-y-20'>
        <h2 className='text-primaryLight uppercase tracking-widest text-center'>About</h2>
        <VerticalTimeline className='text-primaryLight'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1997"
            iconStyle={{ background: 'var(--primary)', color: 'var(--secondaryLight)' }}
            icon={<IoLocationSharp />}
          >
            <div className='text-primaryDark'>
              <h3 className="vertical-timeline-element-title">Moved to UK</h3>
              <h4 className="vertical-timeline-element-subtitle">London</h4>
              <p>
                Started school and continued onto A-Levels.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2013 - 2016"
            iconStyle={{ background: 'var(--primaryLight)', color: 'var(--secondaryLight)' }}
            icon={<FaGraduationCap />}
          >
            <div className='text-primaryDark'>
              <h3 className="vertical-timeline-element-title">Graduated from University</h3>
              <h4 className="vertical-timeline-element-subtitle">Loughborough University</h4>
              <p>
                Obtained degree in Civil Engineering.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2022"
            iconStyle={{ background: 'var(--primaryDark)', color: 'var(--secondaryLight)' }}
            icon={<IoMdBriefcase />}
          >
            <div className='text-primaryDark'>
              <h3 className="vertical-timeline-element-title">Office Manager</h3>
              <h4 className="vertical-timeline-element-subtitle">BAM Estate</h4>
              <p>
                Worked in a an Private Estate.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: 'var(--primaryLight)', color: 'var(--secondaryLight)' }}
            icon={<FaGraduationCap />}
          >
            <div className='text-primaryDark'>
              <h3 className="vertical-timeline-element-title">School of Code</h3>
              <h4 className="vertical-timeline-element-subtitle">London</h4>
              <p>
                Completed a full-stack online coding bootcamp.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: 'var(--primaryLight)', color: 'var(--secondaryLight)' }}
            icon={<FaGraduationCap />}
          >
            <div className='text-primaryDark'>
              <h3 className="vertical-timeline-element-title">Codecademy</h3>
              <h4 className="vertical-timeline-element-subtitle">London</h4>
              <p>
                Continued to expand my knowledge through online resources.
              </p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default About;
