import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Detail = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
        md:w-[80%]"
    >
      <LiIcon reference={ref} className="top-0" />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position} &nbsp;; &nbsp;
          <a
            href={companyLink}
            className="text-primary capitalize"
            target="_blank"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-lg">{work} </p>
      </motion.div>
    </li>
  );
};

const Experiences = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
    transition: [{ duration: 0.5, type: "spring" }],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-5xl ">
        Career History
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0.5 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Detail
            position="Solution Developer"
            company="Fusionex Innovations sdn. bhd."
            companyLink="https://www.fusionexgroup.com/products/analytics/?utm_source=Google&utm_medium=CPC&utm_campaign=Fusionex-Brand&gclid=CjwKCAjwo7iiBhAEEiwAsIxQEScGUf8acO9_HQdtFOWvRnv8ejOSavbWJPtldbi9NzV7757HIzuVqBoCQ9YQAvD_BwE"
            time="2023 Apr - 2023 Apr"
            address="Tower A, Level 12, Plaza 33, Jalan Kemajuan, 1 Section 13, 46200 Petaling Jaya, Selangor"
            work="Responsible to maintain existing hotel reservation website
            for client. Maintain SQL database monthly to avoid data overflow, integrate new API with third parties. Responsible for deployment/release and version control for the website."
          />
          <Detail
            position="Backend Developer"
            company="Fi Life sdn. bhd."
            companyLink="https://fi.life/?utm_source=google&utm_medium=cpc-DF&utm_campaign=filife_brand&gclid=CjwKCAjwo7iiBhAEEiwAsIxQETIp2AoMvTS7jeU6WB2UCBfj3pjgN2lxFp66ZnwGnnXCh9WGb1AUgxoCGYMQAvD_BwE"
            time="2020 Mar - 2023 Apr"
            address="3A.7 Menara KEN, 37, Jalan Burhanuddin Helmi, Taman Tun Dr Ismail, 60000 Kuala Lumpur"
            work="Responsible to develop a new project for online policy for
                        applicant to key in their underwriting information on website. Maintain database using GraphQL and integrate API with third-party for payments and underwriting processes. Responsible for maintaining clean version control for the project."
          />
          <Detail
            position="Web Developer"
            company="JStar bhd."
            companyLink="https://www.linkedin.com/company/jstarberhad/?originalSubdomain=my"
            time="2020 Aug - 2022 Mar"
            address="43-8, Mid Valley Megamall, Lingkaran Syed Putra, Mid Valley City, 59200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur"
            work="Responsible to dev elop and main tain website base office, payment system , backend logic , MYSQL and fix bug if any.	Maintain and create new website base back office site to track Member Transaction and basic member maintenance function.	Involve in backend logic development for payment processing and data entry for members.	MSQL DB maintenance and integrate new table design with current DB design.	Development for API, Integrate with third-party API for member payment or information"
          />
          <Detail
            position="Analyst Programmer"
            company="Ebizness Sdn.bhd."
            companyLink="http://www.ebizness.com.my/"
            time="2018 Jun - 2020 Apr"
            address="6-1, Jalan Margosa SD 10/4a, Bandar Sri Damansara, 52200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur"
            work="Responsible to coordinate between company d ev. team and client’s project representative. To evaluate, test, advise, train and support I.T. related projects. Responsible for the recruitment decision and training of new staff. Maintaining documentation of changes regarding users, functions & systems."
          />
          {/*<Detail position='Analyst Programmer' company='Ebizness Sdn.bhd.'
                        companyLink='xxx' time='Jun 2018 - 2020 Apr' address='xxxxx'
                        work={["Responsible to coordinate between company d ev. team and client’s project representative. To evaluate, test, advise, train and support I.T. related projects. Responsible for the recruitment decision and training of new staff. Maintaining documentation of changes regarding users, functions & systems."
                            , "Responsible to provide support/guidance to junior developer.Prepare technical solution proposal to  client.Responsible for requirements capture, design, coding, testing, implementation."
                            ,
                            <br />, "Delivered projects for new International Financial Reporting Standard(IFRS17) for Insurance system",
                            <br />, "Monitor projects development progress and update to client.",
                            <br />, "Reporting progress, status issues to the Project Manager weekly basis",
                            <br />, "Proving system support for client if any post production issue arise.",
                        ]} />
                    <Detail position='Analyst Programmer' company='Ebizness Sdn.bhd.'
                        companyLink='xxx' time='Jun 2018 - 2020 Apr' address='xxxxx'
                        work={["Responsible to coordinate between company d ev. team and client’s project representative. To evaluate, test, advise, train and support I.T. related projects. Responsible for the recruitment decision and training of new staff. Maintaining documentation of changes regarding users, functions & systems."
                            , "Responsible to provide support/guidance to junior developer.Prepare technical solution proposal to  client.Responsible for requirements capture, design, coding, testing, implementation."
                            ,
                            <br />, "Delivered projects for new International Financial Reporting Standard(IFRS17) for Insurance system",
                            <br />, "Monitor projects development progress and update to client.",
                            <br />, "Reporting progress, status issues to the Project Manager weekly basis",
                            <br />, "Proving system support for client if any post production issue arise.",
                        ]} />*/}
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
