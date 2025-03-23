import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        credits: v.number(),
        subscriptionId: v.optional(v.string()),
    }),
    Discussion: defineTable({
        optionList: v.string(),
        topic: v.string(),
        expertName: v.string(),
        Conversation: v.optional(v.any()),
    })
});