"use client";
import { Button } from "@/components/ui/button";
import { OptionsList } from "@/services/Options";
import { useUser } from "@stackframe/stack";
import Image from "next/image";
import React from "react";
import UserInputDialog from "./UserInputDialog";

function FeatureAssistants() {
    const user = useUser();

    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="font-medium text-gray-500">My Workspace</h2>
                    <h2 className="text-3xl font-bold">
                        Welcome back, {user?.displayName || "Guest"}
                    </h2>
                </div>
                <Button className="px-6 py-2 text-white bg-black rounded-lg">Profile</Button>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-10">
                {OptionsList.map((option) => (
                    <div key={option.id} className="flex justify-center">
                        {option.name === "AI Mock Interview" ? (
                            <UserInputDialog option={option}>
                                <OptionCard option={option} />
                            </UserInputDialog>
                        ) : (
                            <OptionCard option={option} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

function OptionCard({ option }) {
    return (
        <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col justify-center items-center w-40 h-40 transition-transform transform hover:scale-105">
            <Image
                src={option.icon}
                alt={option.name}
                width={80}
                height={80}
                className="h-[70px] w-[70px] hover:rotate-12 cursor-pointer"
            />
            <h2 className="mt-3 text-center font-semibold">{option.name}</h2>
        </div>
    );
}

export default FeatureAssistants;