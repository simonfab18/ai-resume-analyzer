import {
    Accordion,
    AccordionContent,
    AccordionHeader,
    AccordionItem,
} from "~/components/Accordion";
import { cn } from "~/lib/utils";

type DetailTip = {
    type: "good" | "improve";
    tip: string;
    explanation: string;
};

type DetailCategory = {
    id: string;
    title: string;
    score: number;
    tips: DetailTip[];
};

const ScoreBadge = ({ score }: { score: number }) => {
    const isStrong = score > 69;
    const isGoodStart = score > 39;

    return (
        <div
            className={cn(
                "flex flex-row items-center gap-2 rounded-full px-3 py-1",
                isStrong
                    ? "bg-badge-green text-green-600"
                    : isGoodStart
                        ? "bg-badge-yellow text-yellow-600"
                        : "bg-badge-red text-red-600"
            )}
        >
            {isStrong && <img src="/icons/check.svg" alt="" className="size-4" />}
            <p className="text-sm font-semibold">{score}/100</p>
        </div>
    );
};

const CategoryHeader = ({
    title,
    categoryScore,
}: {
    title: string;
    categoryScore: number;
}) => {
    return (
        <div className="flex w-full flex-row items-center justify-between gap-4">
            <p className="text-lg font-semibold text-gray-900">{title}</p>
            <ScoreBadge score={categoryScore} />
        </div>
    );
};

const CategoryContent = ({ tips }: { tips: DetailTip[] }) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                {tips.map((tip, index) => (
                    <div key={`${tip.tip}-${index}`} className="flex flex-row items-start gap-3">
                        <img
                            src={tip.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"}
                            alt=""
                            className="size-5 mt-0.5"
                        />
                        <p className="text-sm font-medium text-gray-700">{tip.tip}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-3">
                {tips.map((tip, index) => (
                    <div
                        key={`${tip.explanation}-${index}`}
                        className={cn(
                            "rounded-2xl border p-4",
                            tip.type === "good"
                                ? "border-green-200 bg-badge-green"
                                : "border-yellow-200 bg-badge-yellow"
                        )}
                    >
                        <p
                            className={cn(
                                "font-semibold",
                                tip.type === "good" ? "text-green-600" : "text-yellow-600"
                            )}
                        >
                            {tip.tip}
                        </p>
                        <p className="mt-2 text-sm text-gray-600">{tip.explanation}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Details = ({ feedback }: { feedback: Feedback }) => {
    const categories: DetailCategory[] = [
        {
            id: "tone-and-style",
            title: "Tone & Style",
            score: feedback.toneAndStyle.score,
            tips: feedback.toneAndStyle.tips,
        },
        {
            id: "content",
            title: "Content",
            score: feedback.content.score,
            tips: feedback.content.tips,
        },
        {
            id: "structure",
            title: "Structure",
            score: feedback.structure.score,
            tips: feedback.structure.tips,
        },
        {
            id: "skills",
            title: "Skills",
            score: feedback.skills.score,
            tips: feedback.skills.tips,
        },
    ];

    return (
        <div className="w-full rounded-2xl bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold !text-black">Details</h2>
            <Accordion defaultOpen="tone-and-style" className="mt-4">
                {categories.map((category) => (
                    <AccordionItem key={category.id} id={category.id}>
                        <AccordionHeader itemId={category.id}>
                            <CategoryHeader
                                title={category.title}
                                categoryScore={category.score}
                            />
                        </AccordionHeader>
                        <AccordionContent itemId={category.id}>
                            <CategoryContent tips={category.tips} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Details;
