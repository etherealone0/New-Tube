import { db } from "@/db";
import { videos } from "@/db/schema";
import { createTRPCRouter, ProtectedProcedure } from "@/trpc/init";

export const videosRouter = createTRPCRouter ({
    create: ProtectedProcedure.mutation(async ({ ctx }) => {
        const { id: userId } = ctx.user;

        const [video] = await db
            .insert(videos)
            .values ({
                userId,
                title: "Untitled",
            })
            .returning();

        return {
            video: video,
        }
    })
})
