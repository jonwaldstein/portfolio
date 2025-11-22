import { Permanent_Marker } from 'next/font/google';

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
});

export default function PageTitle({ title }) {
  return (
    <div className="mb-8">
        <h1 className={`text-3xl text-gray-800 ${permanentMarker.className}`}>{title}</h1>
    </div>
  );
}
