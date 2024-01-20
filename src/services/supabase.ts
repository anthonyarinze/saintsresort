import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ulletlllnqlbasixrgoo.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsbGV0bGxsbnFsYmFzaXhyZ29vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4NzA4MDksImV4cCI6MjAxOTQ0NjgwOX0.Ppf9rVOuCTc_Rsa93Ii3EMQlOD23JlsLK8IJvIMWsGY";

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
