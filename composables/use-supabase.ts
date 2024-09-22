import {createClient} from "@supabase/supabase-js";

export default function () {
    const supabaseKey = process.env['SUPABASE_KEY'];
    const supabaseUrl = process.env['SUPABASE_URL'];
    return createClient(supabaseUrl, supabaseKey)
}