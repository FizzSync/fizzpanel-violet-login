// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://iksuekrnnrooqosypylz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlrc3Vla3JubnJvb3Fvc3lweWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzMjAxOTcsImV4cCI6MjA2NTg5NjE5N30.0Wb9Fz-rEsyhUlwEXnlvekqyIMfifRercYVXPF9EfRw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);