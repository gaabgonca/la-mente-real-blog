import Link from "next/link";

export default function ReadMore({slug}) {

    return (
        <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="text-blue-500 font-bold italic text-xl underline"
            >
            clic aquí para continuar leyendo...
            </Link>
    )
} 