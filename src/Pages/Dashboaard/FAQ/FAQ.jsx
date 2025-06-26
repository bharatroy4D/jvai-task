// src/components/FAQ.js
import React from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const FAQ = () => {
    return (
        <div className="min-h-screen w-full bg-[#314158] py-10 px-4 text-white">
            <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

            <div className="max-w-4xl mx-auto flex flex-col gap-4">
                <Collapse className='border-3 border-white'>
                    <Panel className='text-white py-4' header="Is Clin Technologies HIPAA compliant?" key="1">
                        <p>Yes, all of our AI-powered solutions are fully HIPAA compliant. We follow a security-first architecture with comprehensive encryption (at rest and in transit), zero-trust principles, and role-based access controls to protect patient data. We also offer Business Associate Agreements (BAAs) for added assurance.</p>
                    </Panel>
                </Collapse>

                <Collapse>
                    <Panel className='text-white py-4' header="Can I integrate Clin Technologies with my existing EMR system?" key="2">
                        <p>Absolutely. Our AI platform is built with seamless EMR integration in mind. Once set up, the AI-generated documentation is automatically formatted to match your system's requirements, streamlining your workflow and minimizing manual entry.</p>
                    </Panel>
                </Collapse>

                <Collapse>
                    <Panel className='text-white py-4' header="How does the AI personalize my documentation process?" key="3">
                        <p>Our system includes a Learning Mode that adapts to your specific workflow and preferences over time. The AI refines its understanding based on your feedback, ensuring highly accurate and customized output tailored to your specialty and charting habits.</p>
                    </Panel>
                </Collapse>

                <Collapse>
                    <Panel className='text-white py-4' header="What if the AI-generated documentation isn't accurate?" key="4">
                        <p>Our system learns over time and always offers the option to manually edit or provide feedback, which enhances future results.</p>
                    </Panel>
                </Collapse>

                <Collapse>
                    <Panel className='text-white py-4' header="What solutions does Clin Technologies offer?" key="5">
                        <p>Clin Technologies offers AI medical scribes, smart documentation tools, and integration-ready solutions tailored for modern healthcare professionals.</p>
                    </Panel>
                </Collapse>

                <Collapse>
                    <Panel className='text-white py-4' header="Who can use Clin Technologies?" key="6">
                        <p>Doctors, nurses, and healthcare organizations of any size can use our platform to improve documentation and save time.</p>
                    </Panel>
                </Collapse>

                <Collapse>
                    <Panel className='text-white py-4' header="Do you offer a free trial?" key="7">
                        <p>Yes, we offer a free trial so you can experience the power of Clin Technologies before committing.</p>
                    </Panel>
                </Collapse>

                <Collapse>
                    <Panel className='text-white py-4' header="Is support available for setup and training?" key="8">
                        <p>Yes, we provide full onboarding support, training materials, and live support to ensure a smooth experience.</p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    );
};

export default FAQ;
