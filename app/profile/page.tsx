import { options } from '@/lib/next-auth';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = await getServerSession(options);

  console.log(session);
  if (!session || !session.user) {
    redirect('/api/auth/signin');
  }

  return (
    <div className='flex '>
      <div>
        <Image
          src={session.user.image || ''}
          className='rounded-full'
          width={100}
          height={100}
          alt={session.user.name || 'profile'}
        />
        <span>{session.user.name}</span>
      </div>
      <span>{session.user.email}</span>
    </div>
  );
}
