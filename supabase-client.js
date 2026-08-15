import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL =
    "https://kappwvkerqdsvpgzamnc.supabase.co";

// ⚠️ 改成你的 Supabase Publishable Key
// 可以放 publishable / anon key
// 不可以放 service_role / secret key
const SUPABASE_KEY =
    "YOUR_PUBLISHABLE_KEY";

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY,
    {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
        }
    }
);
