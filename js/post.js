import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://dxwabfntywpqajoaxxqc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4d2FiZm50eXdwcWFqb2F4eHFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODE1NDYsImV4cCI6MjA2NDA1NzU0Nn0.rePMQPZ3ynWt0_STsm9qjlfDcpJcQ8O7xmSQhoqQ0tM';

const supabase = createClient(supabaseUrl, supabaseKey);

const form = document.getElementById('postForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  const dataToInsert = {
    job_date: payload.date,
    start_time: payload.startTime,
    end_time: payload.endTime,
    suburb: payload.suburb,
    num_kids: payload.kidsNumber,
    languages: payload.languages,
    pet_info: payload.petInfo,
    child_personalities: payload.kidsPersonality,
    duties: payload.duties
  };

  const { data, error } = await supabase
    .from('posts')
    .insert(dataToInsert);

  console.log({ data, error });

  if (error) {
    alert('Error saving post: ' + error.message);
  } else {
    alert('Post saved!');
    form.reset();
  }
});