import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { ExpertsList } from "@/services/Options";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

function UserInputDialog({ children, option }) {
    const [selectedExpert, setSelectedExpert] = useState(null);
    const [topic, setTopic] = useState("");
    const createDiscussion = useMutation(api.Discussion.createDiscussion);
    const [loading, setLoading] = useState(false);

    const OnClickNext = async () => {
         setLoading(true);
         const result =await createDiscussion({
                optionList: option?.name,
                topic: topic,
                expertName: selectedExpert,
            })
            console.log("result", result);
            setLoading(false);
    };

    return (
        <Dialog>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent className="max-w-md p-6 rounded-lg">
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold text-gray-800">{option.name}</DialogTitle>
                    <DialogDescription asChild>
                        <div className="mt-4 space-y-6">
                            {/* Topic Input Section */}
                            <div>
                                <h2 className="text-gray-900 font-medium text-base">
                                    Enter a Topic to master your skills in {option.name}
                                </h2>
                                <Textarea 
                                    className="mt-2 w-full p-2 border rounded-md focus:ring focus:ring-blue-300" 
                                    placeholder="Enter a topic"
                                    value={topic}
                                    onChange={(e) => setTopic(e.target.value)} 
                                />
                            </div>

                            {/* Expert Selection Section */}
                            <div>
                                <h2 className="text-gray-900 font-medium text-base">Choose your AI Interviewer</h2>
                                <div className="grid grid-cols-2 gap-4 mt-3">
                                {ExpertsList.map((expert) => (
                                        <div 
                                            key={expert.id} 
                                            onClick={() => setSelectedExpert(expert.name)} 
                                            className="flex flex-col items-center cursor-pointer"
                                        >
                                            <Image
                                                src={expert.avatar}
                                                alt={expert.name}
                                                width={80}
                                                height={80}
                                                className={`h-20 w-20 rounded-2xl shadow-lg object-cover hover:scale-105 transition-all p-1 ${selectedExpert === expert.name && 'border-2 border-blue-500'}`}
                                            />
                                            <h3 className="mt-2 text-sm font-semibold text-gray-700">{expert.name}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-5 mt-5 justify-end">
                                <Button variant="ghost">Cancel</Button>
                                <Button 
                                    disabled={!topic || !selectedExpert || loading} 
                                    onClick={OnClickNext}
                                >{loading && <LoaderCircle className="animate-spin"/>}
                                    Next
                                </Button>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default UserInputDialog;