import { SocialLoginButton } from '@components/elements';

export const SocialLogin = () => {
  return (
    <div className='flex flex-col space-y-6'>
      <SocialLoginButton provider='Discord' />
      <SocialLoginButton provider='GitHub' />
    </div>
  );
};
