import React, { useState, useRef, useEffect } from 'react';
import { templates } from './Template.js';
import TemplateButton from './TemplateButton.jsx';

const TemplateGallery = ({ setFormData }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelectTemplate = (templateData) => {
        if (window.confirm('Are you sure you want to apply this template? This will overwrite your current inputs.')) {
            setFormData(templateData);
            setOpen(false);
        }
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => setOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={open}
            >
                Templates
                <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {open && (
                <div className="absolute right-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                    <h3 className="text-lg font-bold px-4 pt-4 pb-2">🚀 Start with a Template</h3>
                    <div className="flex flex-col gap-4 px-4 pb-4">
                        {templates.map((template, index) => (
                            <div key={index} className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between hover:shadow-lg transition-shadow bg-white">
                                <div className="w-full md:w-2/3" id='category'>
                                    <h4 className="font-bold text-lg mb-1">{template.name}</h4>
                                    <p className="text-sm text-gray-600 mb-2">{template.description}</p>
                                </div>
                                <div className="flex justify-end md:w-1/3" id='template-btn'>
                                    <TemplateButton
                                        text="Template"
                                        onClick={() => handleSelectTemplate(template.data)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TemplateGallery;