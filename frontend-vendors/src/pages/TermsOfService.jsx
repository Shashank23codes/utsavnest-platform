import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileCheck } from 'lucide-react';

const Page = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 pt-28 pb-16">
            <div className="max-w-4xl mx-auto px-4">
                <Link
                    to="/"
                    className="inline-flex items-center text-rose-600 hover:text-rose-700 font-medium mb-8 transition-colors"
                >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Back to Home
                </Link>

                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-rose-50 rounded-2xl">
                            <FileCheck className="h-8 w-8 text-rose-600" />
                        </div>
                        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Terms of Service</h1>
                    </div>

                    <div className="prose max-w-none text-gray-600">
                        <p className="text-lg leading-relaxed mb-8">
                            Welcome to the Terms of Service page. This section contains important information regarding our policies, guidelines, and resources. Our team is constantly working to provide you with the most up-to-date and accurate information.
                        </p>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-5">1. Overview</h2>
                        <p className="mb-6 leading-relaxed">
                            Details regarding this topic are currently being updated. Please check back later for comprehensive and detailed guidelines specific to Terms of Service. We appreciate your patience as we finalize our documentation.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-5">2. Important Guidelines</h2>
                        <ul className="list-disc pl-6 space-y-4 mb-8">
                            <li>Always review the latest updates on our platform. Policies may change periodically to reflect new regulations.</li>
                            <li>Contact our dedicated support team if you have specific questions or concerns about these guidelines.</li>
                            <li>Ensure you comply with all local regulations and platform terms while using our services.</li>
                            <li>Your feedback is incredibly valuable and helps us improve our services and documentation.</li>
                        </ul>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-12 text-center md:text-left">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Need Help?</h3>
                            <p className="text-md leading-relaxed text-gray-600">
                                If you cannot find what you are looking for, please don't hesitate to reach out to our dedicated support team. We are available 24/7 to assist you with any questions or concerns you might have.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
