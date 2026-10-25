const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabaseReady = Boolean(url && anonKey && !url.includes("YOUR_PROJECT"));

// Keep the Supabase SDK out of the initial homepage bundle; load it only when
// the user opens the public-message board or submits the suggestion form.
let clientPromise;
export function getSupabase() {
  if (!supabaseReady) return Promise.resolve(null);
  if (!clientPromise) {
    clientPromise = import("@supabase/supabase-js").then(({ createClient }) =>
      createClient(url, anonKey)
    ).catch((error) => {
      clientPromise = undefined;
      throw error;
    });
  }
  return clientPromise;
}
