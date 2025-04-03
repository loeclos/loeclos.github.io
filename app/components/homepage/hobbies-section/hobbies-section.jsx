import AudioPlayer from '@/components/audio-player/audio-player';
import BookItem from '@/components/book-item/book-item';
import { merriweather } from '@/ui/lib/fonts';

const sunoSongs = [
    {
        title: 'Fantasy Tavern',
        audioUrl:
            'https://cdn1.suno.ai/46c8467e-9331-461b-b15c-e58ee2f1e7ef.mp3',
        shareUrl: 'https://suno.com/song/46c8467e-9331-461b-b15c-e58ee2f1e7ef',
    },
    {
        title: 'Toyota Pruis',
        audioUrl:
            'https://cdn1.suno.ai/c90e5a11-89e2-48a8-867e-fcd61e99db37.mp3',
        shareUrl: 'https://suno.com/song/c90e5a11-89e2-48a8-867e-fcd61e99db37',
    },
    {
        title: 'Laaa-Lee Loooo!',
        audioUrl:
            'https://cdn1.suno.ai/1b2de10e-7f52-486d-95dc-c4dcc3fce8fc.mp3',
        shareUrl: 'https://suno.com/song/1b2de10e-7f52-486d-95dc-c4dcc3fce8fc',
    },
];

const books = [
    {
        id: 1,
        title: 'The Count of Monte Cristo',
        author: 'Alexandre Dumas',
    },
    {
        id: 2,
        title: 'The Adventures of Sherlock Holmes',
        author: 'Sir Arthur Conan Doyle',
    },
    {
        id: 3,
        title: 'The Stormlight Archive',
        author: 'Brandon Sanderson',
    },
    {
        id: 4,
        title: 'Name of the Wind',
        author: 'Patrick Rothfuss',
    },
    {
        id: 5,
        title: 'The Lord of the Rings',
        author: 'J. R. R. Tolkien',
    },
    {
        id: 6,
        title: 'The Hobbit',
        author: 'J. R. R. Tolkien',
    },
    {
        id: 7,
        title: 'The Silmarillion',
        author: 'J. R. R. Tolkien',
    },
];


export default function HobbiesSection() {
    return (
        <div id="hobbies" className="max-w-[90%] md:max-w-5xl mx-auto px-4 dark:text-white">
            <div className="text-center px-4 md:px-8 py-4 my-15 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <h1 className="text-5xl font-bold my-10">Hobbies</h1>
                <p className="mb-10 italic opacity-55 text-sm">
                    Things I enjoy doing in my free time to stop myself from
                    dying of boredom.
                </p>
                <div className="text-center px-4 md:px-8 py-4 my-15 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                    <h3 className="text-2xl font-bold">1. Suno</h3>
                    <p className="mb-10 opacity-70 text-sm px-5 md:px-20">
                        Suno is an AI music creation software. Very fun to play
                        around with. Here are some of my favorties which I have
                        created:
                    </p>
                    {sunoSongs.map((song) => (
                        <AudioPlayer
                            key={song.title}
                            className="my-5"
                            audioUrl={song.audioUrl}
                            title={song.title}
                            shareUrl={song.shareUrl}
                        />
                    ))}
                </div>
                <div className="text-center px-4 md:px-8 py-4 my-15 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                    <h3 className="text-2xl font-bold">2. Reading</h3>
                    <p className="mb-10 opacity-70 text-sm px-5 md:px-20">
                        I love reading books. Here are some of my favorites:
                    </p>
                    {books.map((book) => (
                        <BookItem
                            key={`book-${book.id}`}
                            className={`my-5 ${merriweather.className}`}
                            title={book.title}
                            author={book.author}
                            id={book.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
