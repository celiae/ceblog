import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className='border-bottom bg-black white pb1'>
      <div className="pt1">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="pt1 pb1">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="blue">{title}</a>
        </Link>
      </h3>
      <div className="">
        <DateFormatter dateString={date} />
      </div>
      <p className="pt1">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}

export default PostPreview
