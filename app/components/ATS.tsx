interface ATSProps {
    score: number;
    suggestions: {
        type: "good" | "improve";
        tip: string;
    }[];
}

const ATS = ({ score, suggestions }: ATSProps) => {
    const gradientClass = score > 69
        ? "from-green-100"
        : score > 49
            ? "from-yellow-100"
            : "from-red-100";
    const atsIcon = score > 69
        ? "/icons/ats-good.svg"
        : score > 49
            ? "/icons/ats-warning.svg"
            : "/icons/ats-bad.svg";

    return (
        <div className={`bg-gradient-to-b ${gradientClass} to-white rounded-2xl shadow-md p-6 w-full`}>
            <div className="flex flex-row items-center gap-4">
                <img src={atsIcon} alt="ATS status" className="size-12" />
                <h2 className="text-2xl font-bold !text-black">
                    ATS Score - {score}/100
                </h2>
            </div>

            <div className="flex flex-col gap-4 mt-6">
                <div>
                    <h3 className="text-xl font-semibold text-gray-900">How your resume performs with ATS</h3>
                    <p className="text-gray-500 mt-2">
                        Applicant tracking systems scan resumes for structure, keywords, and role alignment before a recruiter reviews them.
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    {suggestions.map((suggestion, index) => (
                        <div key={`${suggestion.tip}-${index}`} className="flex flex-row items-start gap-3">
                            <img
                                src={suggestion.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"}
                                alt={suggestion.type === "good" ? "Good" : "Improve"}
                                className="size-5 mt-0.5"
                            />
                            <p className="text-gray-700">{suggestion.tip}</p>
                        </div>
                    ))}
                </div>

                <p className="font-medium text-gray-900">
                    Keep refining your resume to improve ATS compatibility and recruiter readability.
                </p>
            </div>
        </div>
    );
};

export default ATS;
