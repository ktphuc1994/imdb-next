import Image from 'next/image';
import Link from 'next/link';

import { FiThumbsUp } from 'react-icons/fi';

export default function Card({ result }) {
  console.log(result.title, result.original_title, result.name);
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 flex flex-col'>
      <Link href={`/movie/${result.id}`} className='grow'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.poster_path || result.backdrop_path
          }`}
          alt={result.title || result.name}
          width={500}
          height={300}
          className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
        />
      </Link>
      <div className='p-2 shrink-0'>
        <p className='line-clamp-2 text-md'>{result.overview}</p>
        <h2 className='text-lg font-bold truncate'>
          {result.title || result.name}
        </h2>
        <p className='flex items-center'>
          {result.release_date || result.first_air_date}
          <FiThumbsUp className='h-5 mr-1 ml-3' />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}
