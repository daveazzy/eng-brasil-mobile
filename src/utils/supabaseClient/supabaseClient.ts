import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const DATABASE_URL = "https://xtaltpmbskvfeapilsct.supabase.co"
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0YWx0cG1ic2t2ZmVhcGlsc2N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyODc1MTIsImV4cCI6MjA0Mjg2MzUxMn0.xcqELhAAuEZD0OstdsEmfcmGxEuUrjXs7WHNl4b6dm4"

export const supabase = createClient(DATABASE_URL, ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
