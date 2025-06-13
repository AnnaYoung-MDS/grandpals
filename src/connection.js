import { createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://dxwabfntywpqajoaxxqc.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4d2FiZm50eXdwcWFqb2F4eHFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODE1NDYsImV4cCI6MjA2NDA1NzU0Nn0.rePMQPZ3ynWt0_STsm9qjlfDcpJcQ8O7xmSQhoqQ0tM'

export const supabase = createClient(supabaseUrl, supabaseKey)