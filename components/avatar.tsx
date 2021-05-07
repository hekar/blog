type Author = {
  name: string
  picture: string
} | string | undefined

type Props = {
  author: Author
}

const Avatar = ({ author }: Props): JSX.Element => {
  if (!author) {
    author = 'missing'
  }
  return (
    (typeof author === 'string') ? 
    <div className="flex items-center">
      <div className="text-xl font-bold">{author}</div>
    </div>
    : <div className="flex items-center">
      <img src={author.picture} className="w-12 h-12 rounded-full mr-4" alt={author.name} />
      <div className="text-xl font-bold">{author.name}</div>
    </div>
  )
}

export default Avatar
