import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const About = () => {
    return (
        <div id='About' className='secondary'>
            <div className='py-20 max-w-10/12 mx-auto'>
                <SectionTitle title={'About Clin Technologies'} />

                <div className='mt-8 space-y-5 text-lg'>
                    <p>Headquartered in the Midwest, Clin Technologies is a specialized AI firm that empowers healthcare providers across the Midwest and beyond to conquer their most pressing operational challenges. We deliver this through a powerful and flexible AI platform that powers both a suite of ready-to-deploy solutions for documentation and compliance, and the creation of fully bespoke engines for enterprise-level transformation.</p>

                    <p>Our expertise lies in applying cutting-edge Large Language Models (LLMs) and machine learning (ML) to solve real-world challenges in healthcare documentation. We partner closely with individual practitioners, clinics, and healthcare organizations, leveraging meticulously gathered real-world data from professionals to build the exceptionally robust and uniquely effective datasets that power these advanced systems.</p>

                    <p>This same proven AI framework serves as the foundation for our enterprise partnerships. Whether you need an immediate solution from our product suite or a strategic partner to build a custom engine for challenges like Utilization Management, we provide the right tool for the job. Our mission is to transform your data into a proprietary asset, enabling data-driven decisions that eliminate administrative friction and allow you to focus on what matters most.</p>
                </div>
            </div>
        </div>
    );
};

export default About;