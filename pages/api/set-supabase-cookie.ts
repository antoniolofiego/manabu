import { supabase } from '@utils/supabase';

import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await supabase.auth.api.setAuthCookie(req, res);
};

export default handler;
