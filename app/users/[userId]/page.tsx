import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import type { Metadata } from "next";

type Params = {
    params: {
        userId: string;
    };
};

export async function generateMetadata({
    params: { userId },
}: Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userId);
    const user: User = await userData;

    return {
        title: user.name,
        description: `This is the page of ${user.name}`,
    };
}

const UserPosts = async ({ promise }: { promise: Promise<Post[]> }) => {
    const posts = await promise;

    const content = posts.map((post) => (
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <br />
        </article>
    ));

    return <>{content}</>;
};

export default async function UserPage({ params: { userId } }: Params) {
    const userData: Promise<User> = getUser(userId);
    const userPostsData: Promise<Post[]> = getUserPosts(userId);

    const user = await userData;

    return (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading posts...</h2>}>
                {/* @ts-expect-error Server Component */}
                <UserPosts promise={userPostsData} />
            </Suspense>
        </>
    );
}
