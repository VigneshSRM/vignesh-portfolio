create table public.portfolio_enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 100),
  email text not null check (char_length(email) <= 254),
  company text not null default '' check (char_length(company) <= 150),
  category text not null check (category in ('Infrastructure and datacenter projects','Cloud and automation consulting','Customized software development','Startup technology partnerships','General professional enquiries')),
  message text not null check (char_length(message) between 20 and 5000),
  status text not null default 'new' check (status in ('new','read','replied','archived'))
);
alter table public.portfolio_enquiries enable row level security;
revoke all on public.portfolio_enquiries from anon, authenticated;
grant insert on public.portfolio_enquiries to service_role;
comment on table public.portfolio_enquiries is 'Private portfolio contact enquiries. Server-only writes; no public read or insert policies.';
