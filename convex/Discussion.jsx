import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createDiscussion = mutation({
    args: {
        optionList: v.string(),
        topic: v.string(),
        expertName: v.string(),
    },
    handler: async (ctx,args) => {
        const result = await ctx.db.insert("Discussion",{
            optionList: args.optionList,
            topic: args.topic,
            expertName: args.expertName,
            Conversation: [],
        });
        return result;
    },
});