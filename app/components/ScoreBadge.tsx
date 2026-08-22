const ScoreBadge = ({ score }: { score: number }) => {
    const badge = score > 70
        ? {
            label: "Strong",
            className: "bg-badge-green text-green-600",
        }
        : score > 49
            ? {
                label: "Good Start",
                className: "bg-badge-yellow text-yellow-600",
            }
            : {
                label: "Needs Work",
                className: "bg-badge-red text-red-600",
            };

    return (
        <div className={`score-badge ${badge.className}`}>
            <p className="text-sm font-medium">{badge.label}</p>
        </div>
    );
};

export default ScoreBadge;
