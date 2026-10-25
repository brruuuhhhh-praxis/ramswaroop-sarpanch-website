-- Supabase SQL Editor में एक बार चलाएँ.
alter table public.public_messages add column if not exists village_name text null;
alter table public.public_messages drop constraint if exists public_messages_category_check;
alter table public.public_messages add constraint public_messages_category_check
  check (category in ('जन समर्थन', 'सुझाव', 'शुभकामना', 'स्थानीय समस्या'));
