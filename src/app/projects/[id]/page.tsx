export function generateStaticParams() {
    return [
        {id: '1'},
        {id: '2'},
        {id: '3'},
    ]
}

export default async function Projects({params}: {params: Promise<{id: string}>}) {
    const {id} = await params;

    return (
        <section>
            <h1>This is project page {id}!</h1>
        </section>
    )
}