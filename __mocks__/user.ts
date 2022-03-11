import type { User } from '@supabase/supabase-js';

export const mockUser: User = {
  id: 'id',
  aud: 'authenticated',
  role: 'authenticated',
  email: 'test@email.com',
  email_confirmed_at: '2022-03-11T01:18:02.345448Z',
  phone: '',
  confirmed_at: '2022-03-11T01:18:02.345448Z',
  last_sign_in_at: '2022-03-11T02:10:26.439312Z',
  app_metadata: {
    provider: 'discord',
    providers: ['discord'],
  },
  user_metadata: {
    avatar_url:
      'https://cdn.discordapp.com/avatars/537044752542203909/a_526ae2c8dc9a241c655eb417d69770dc.gif',
    email: 'test@email.com',
    email_verified: true,
    full_name: 'Test',
    iss: 'https://discord.com/api',
    name: 'Test',
    picture:
      'https://cdn.discordapp.com/avatars/537044752542203909/a_526ae2c8dc9a241c655eb417d69770dc.gif',
    provider_id: '537044752542203909',
    sub: '537044752542203909',
  },
  identities: [
    {
      id: '537044752542203909',
      user_id: '80889c94-12d0-44c3-90c2-a59c344d8a2b',
      identity_data: {
        avatar_url:
          'https://cdn.discordapp.com/avatars/537044752542203909/a_526ae2c8dc9a241c655eb417d69770dc.gif',
        email: 'test@email.com',
        email_verified: true,
        full_name: 'Test',
        iss: 'https://discord.com/api',
        name: 'Test',
        picture:
          'https://cdn.discordapp.com/avatars/537044752542203909/a_526ae2c8dc9a241c655eb417d69770dc.gif',
        provider_id: '537044752542203909',
        sub: '537044752542203909',
      },
      provider: 'discord',
      last_sign_in_at: '2022-03-11T01:18:02.342761Z',
      created_at: '2022-03-11T01:18:02.3428Z',
      updated_at: '2022-03-11T01:18:02.342804Z',
    },
  ],
  created_at: '2022-03-11T01:18:02.239664+00:00',
  updated_at: '2022-03-11T01:18:02.337064Z',
};
