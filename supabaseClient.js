// supabaseClient.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://https://hznqtthdiswbiqsffxiz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6bnF0dGhkaXN3Ymlxc2ZmeGl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5Nzc2MTAsImV4cCI6MjA3MDU1MzYxMH0.-55braetfWBW4HRk7C8GrhYyxsGW2P6wyagDSqqdx9Q";

export const supabase = createClient(supabaseUrl, supabaseKey);
