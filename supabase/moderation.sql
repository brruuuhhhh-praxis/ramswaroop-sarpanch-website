-- Manual moderation helper (run in Supabase SQL Editor as project owner).
-- Review pending submissions first; never run the UPDATE blindly.
select id, display_name, village_name, category, message, photo_url, created_at
from public.public_messages
where status = 'pending'
order by created_at asc;

-- After checking the text and photo, replace the UUID below with the chosen row's id:
-- update public.public_messages set status = 'approved' where id = 'PASTE-UUID-HERE' and status = 'pending';
-- To reject a submission instead:
-- update public.public_messages set status = 'rejected' where id = 'PASTE-UUID-HERE' and status = 'pending';
