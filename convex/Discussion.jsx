import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { query } from "./_generated/server";
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

export const getDiscussion = query({
    args: {
        id: v.id("Discussion"),
    },
    handler: async (ctx,args) => {
        const result = await ctx.db.get(args.id);
        return result;
    },
});